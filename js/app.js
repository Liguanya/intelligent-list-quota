/* ============================================================
 * 智能化专业智能组价系统  app.js
 * 依据：天津市2025清单计价规范（通用安装工程 附录D 智能化）
 *       天津市建筑工程预算基价（2020）第二册 / 第七册 / 第十二册
 * ------------------------------------------------------------
 * 输入：A列序号 / B列项目名称 / C列数量（/ D列单位）
 * 输出：清单编码 + 定额编码 + 主材价，支持广联达 / 建经双格式
 * ============================================================ */
(function () {
  'use strict';

  // ============================================================
  // 一、档表常量
  // ============================================================
  // 桥架 钢制槽式：宽度档 2-637~2-643
  var BRIDGE_W = [150, 400, 600, 800, 1000, 1200, 1500];
  // 配管 JDG（紧定式镀锌电线管）2-1123~2-1128，DN15~50
  var JDG_DN = [15, 20, 25, 32, 40, 50];
  // 配管 SC / RC（镀锌钢管）2-1139~2-1149，DN15~150
  var SC_DN = [15, 20, 25, 32, 40, 50, 70, 80, 100, 125, 150];
  // 配线 BYJ（铜芯线）2-1343~2-1349：1/1.5/2.5/4/6/10/16
  var BYJ_SEC = [1, 1.5, 2.5, 4, 6, 10, 16];
  // 多芯软导线 2-1359~2-1373：二芯(0.75/1/1.5/2.5)、四芯(同)、八芯(同)、十六芯(0.75/1/1.5)
  var FLEX_SPEC = [
    [2, 0.75], [2, 1], [2, 1.5], [2, 2.5],
    [4, 0.75], [4, 1], [4, 1.5], [4, 2.5],
    [8, 0.75], [8, 1], [8, 1.5], [8, 2.5],
    [16, 0.75], [16, 1], [16, 1.5]
  ];
  var CN_NUM = { 一: 1, 二: 2, 两: 2, 双: 2, 三: 3, 四: 4, 五: 5, 六: 6 };

  // ============================================================
  // 二、类别定义
  //   code/lname : 清单编码与名称
  //   unit       : 清单计量单位
  //   qt/factor  : 定额计量单位与换算系数（导出时 工程量 ÷ factor）
  //   q/qn       : 固定定额
  //   tiers      : 数值档（param 解析，def 为缺省档）
  //   opts       : 选项档（pick 解析）
  //   kind       : 广联达导出"类型"列
  // ============================================================
  var DEF = {
    // ---------- 网络与布线 ----------
    sw: { code: '030501015', lname: '交换机', unit: '台', qt: '台', kind: '设备', dyn: 'switch' },
    patchPanel: { code: '030502008', lname: '配线架', unit: '个', qt: '个', kind: '设备', param: 'ports', def: 24,
                  tiers: [ { max: 12, q: '12-61', qn: '配线架安装 12口以内' },
                           { max: 24, q: '12-62', qn: '配线架安装 24口以内' },
                           { max: 48, q: '12-63', qn: '配线架安装 48口以内' },
                           { max: 96, q: '12-64', qn: '配线架安装 96口以内' },
                           { max: Infinity, q: '12-64', qn: '配线架安装 96口以内（超96口取顶档）' } ] },
    patchCord: { code: '030502007', lname: '跳线、跳线架', unit: '条', qt: '条', kind: '设备',
                 q: '12-57', qn: '跳线安装' },
    dataSocket: { code: '030502010', lname: '信息、网络、接口插座', unit: '个', qt: '个', kind: '设备',
                  opts: [ { k: 'single', l: '单口', q: '12-45', qn: '信息插座安装 单口' },
                          { k: 'double', l: '双口', q: '12-46', qn: '信息插座安装 双口' } ] },
    telSocket: { code: '030502010', lname: '信息、网络、接口插座', unit: '个', qt: '个', kind: '设备',
                 opts: [ { k: 'single', l: '单口（电话）', q: '12-120', qn: '电话插座安装 单口' },
                         { k: 'double', l: '双口（电话）', q: '12-121', qn: '电话插座安装 双口' } ] },
    fiberSocket: { code: '030502010', lname: '信息、网络、接口插座', unit: '个', qt: '个', kind: '设备',
                   opts: [ { k: 'double', l: '双口（光纤）', q: '12-47', qn: '光纤插座安装 双口' },
                           { k: 'quad', l: '四口（光纤）', q: '12-48', qn: '光纤插座安装 四口' } ] },
    ap: { code: '030502010', lname: '信息、网络插座', unit: '台', qt: '台', kind: '设备',
          q: '12-45', qn: '无线AP安装（信息插座子目）' },
    junctionBox: { code: '030412006', lname: '接线盒', unit: '个', qt: '个', kind: '设备',
                   q: '2-1534', qn: '接线盒安装' },
    workstation: { code: '030501019', lname: '网络终端设备工作站', unit: '台', qt: '台', kind: '设备',
                   q: '12-389', qn: '网络终端设备 工作站安装' },
    server: { code: '030501019', lname: '服务器', unit: '台', qt: '台', kind: '设备',
              q: '12-390', qn: '网络终端设备 服务器安装' },
    pc: { code: '030501019', lname: '服务器', unit: '台', qt: '台', kind: '设备',
          q: '12-390', qn: '网络终端设备 服务器安装' },
    cabinet: { code: '030502001', lname: '光缆分纤箱、光缆交接箱、分线接线箱', unit: '台', qt: '台', kind: '设备',
               q: '12-8', qn: '机柜（机架）安装' },
    weakBox: { code: '030502001', lname: '光缆分纤箱、光缆交接箱、分线接线箱', unit: '个', qt: '个', kind: '设备',
               q: '12-578', qn: '弱电箱（控制箱）安装' },
    moduleBox: { code: '030402011', lname: '成套配电箱', unit: '个', qt: '个', kind: '设备',
                 q: '12-306', qn: '模块箱（按扭箱）安装', note: '定额按箱体安装 12-306 参考计列' },
    gateway: { code: '030501016', lname: '网关', unit: '台', qt: '台', kind: '设备',
               q: '12-409', qn: '网关安装、调试' },
    power: { code: '030505006', lname: '电源', unit: '台', qt: '台', kind: '设备',
             q: '12-782', qn: '电源安装' },
    ups: { code: '080603003', lname: 'UPS不间断电源设备', unit: '台', qt: '台', kind: '设备', param: 'kva', def: 30,
           tiers: [ { max: 30, q: '2-476', qn: 'UPS不间断电源 容量30kV·A以内' },
                    { max: 100, q: '2-477', qn: 'UPS不间断电源 容量100kV·A以内' },
                    { max: 500, q: '2-478', qn: 'UPS不间断电源 容量500kV·A以内' },
                    { max: Infinity, q: '2-479', qn: 'UPS不间断电源 容量500kV·A以上' } ] },
    lightning: { code: '030402004', lname: '避雷器', unit: '个', qt: '个', kind: '设备',
                 q: '12-869', qn: '避雷器安装' },
    keyboard: { code: '030506019', lname: '停车场管理设备', unit: '台', qt: '台', kind: '设备',
                q: '12-862', qn: '控制键盘安装' },
    screen: { code: '030506019', lname: '停车场管理设备', unit: '台', qt: '台', kind: '设备',
              q: '12-861', qn: '显示屏安装' },
    touchScreen: { code: '030506016', lname: '监视设备', unit: '台', qt: '台', kind: '设备',
                   q: '12-1008', qn: '触摸屏（液晶屏）安装' },
    monitor: { code: '030904010', lname: '楼层火灾显示器', unit: '台', qt: '台', kind: '设备',
               q: '7-187', qn: '显示器安装' },
    decoder: { code: '030506014', lname: '视频传输设备', unit: '台', qt: '台', kind: '设备',
               q: '12-997', qn: '解码器安装' },
    camera: { code: '030506010', lname: '监控摄像设备', unit: '台', qt: '台', kind: '设备',
              q: '12-961', qn: '摄像机安装' },
    projector: { code: '030506016', lname: '监视设备', unit: '台', qt: '台', kind: '设备',
                 q: '12-889', qn: '投影仪安装' },
    projectorScreen: { code: '030506016', lname: '监视设备', unit: '台', qt: '台', kind: '设备',
                       q: '12-890', qn: '投影幕布安装' },
    // ---------- 安防、门禁、报警 ----------
    alarmHorn: { code: '030506004', lname: '入侵报警中心显示设备', unit: '个', qt: '个', kind: '设备',
                 q: '12-932', qn: '报警警号安装' },
    alarmBell: { code: '030506004', lname: '入侵报警中心显示设备', unit: '个', qt: '个', kind: '设备',
                 q: '12-931', qn: '报警警铃安装' },
    soundLight: { code: '030506004', lname: '入侵报警中心显示设备', unit: '个', qt: '个', kind: '设备',
                  q: '12-932', qn: '声光报警器安装' },
    detector: { code: '030506001', lname: '入侵探测器', unit: '个', qt: '个', kind: '设备',
                q: '12-905', qn: '入侵探测器安装' },
    button: { code: '030506001', lname: '入侵探测器', unit: '个', qt: '个', kind: '设备',
              q: '12-899', qn: '紧急按钮安装' },
    btnBox: { code: '030402011', lname: '成套配电箱', unit: '个', qt: '个', kind: '设备',
              q: '12-306', qn: '按扭箱安装' },
    reader: { code: '030506006', lname: '出入口目标识别设备', unit: '台', qt: '台', kind: '设备',
              q: '12-943', qn: '读卡器（人脸识别）安装' },
    doorBox: { code: '030503003', lname: '控制箱', unit: '台', qt: '台', kind: '设备',
               q: '12-578', qn: '门禁控制箱安装' },
    electricLock: { code: '030506008', lname: '出入口执行机构设备', unit: '把', qt: '把', kind: '设备',
                    q: '12-950', qn: '电控锁安装' },
    keyButton: { code: '030413013', lname: '照明开关、按钮', unit: '个', qt: '个', kind: '设备',
                 dyn: 'keyButton' },
    intercom: { code: '030506006', lname: '出入口目标识别设备', unit: '台', qt: '台', kind: '设备',
                q: '12-864', qn: '对讲分机安装' },
    doorPhone: { code: '030506006', lname: '出入口目标识别设备', unit: '台', qt: '台', kind: '设备',
                 q: '12-591', qn: '门口机安装' },
    intercomHost: { code: '030506006', lname: '出入口目标识别设备', unit: '台', qt: '台', kind: '设备',
                    q: '12-591', qn: '对讲管理主机安装' },
    intercomUnit: { code: '030506005', lname: '入侵报警信号传输设备', unit: '个', qt: '个', kind: '设备',
                    q: '12-940', qn: '对讲器安装' },
    switchPanel: { code: '030413013', lname: '照明开关、按钮', unit: '个', qt: '个', kind: '设备', dyn: 'switchPanel' },
    antiFreeze: { code: '030503005', lname: '传感器', unit: '个', qt: '个', kind: '设备',
                  q: '12-527', qn: '防冻开关安装' },
    sensorT: { code: '030503005', lname: '传感器', unit: '个', qt: '个', kind: '设备',
               q: '12-510', qn: '温湿度传感器安装' },
    sensorP: { code: '030503005', lname: '传感器', unit: '个', qt: '个', kind: '设备',
               q: '12-520', qn: '压力（压差）传感器安装' },
    communicator: { code: '030506009', lname: '巡更设备', unit: '个', qt: '个', kind: '设备',
                    q: '12-471', qn: '通讯器安装' },
    interfaceBox: { code: '030906003', lname: '巡更设备', unit: '个', qt: '个', kind: '设备',
                    q: '7-153', qn: '接口箱安装' },
    clock: { code: '030501001', lname: '输入设备', unit: '个', qt: '个', kind: '设备',
             q: '12-364', qn: '子钟安装' },
    masterClock: { code: '030501001', lname: '输入设备', unit: '台', qt: '台', kind: '设备',
                   q: '12-364', qn: '母钟安装' },
    cardIssuer: { code: '030506019', lname: '停车场管理设备', unit: '台', qt: '台', kind: '设备',
                  q: '12-862', qn: '发卡器安装（参考控制键盘子目）', note: '定额按 12-862 参考计列' },
    // ---------- 楼控、能耗 ----------
    controller: { code: '030503002', lname: '控制器', unit: '台', qt: '台', kind: '设备',
                  q: '12-485', qn: '控制器安装、调试' },
    ddc: { code: '030503002', lname: '控制器', unit: '台', qt: '台', kind: '设备', param: 'points', def: 0,
           tiers: [ { max: 0, q: '12-480', qn: 'DDC控制器安装（未明确点数）' },
                    { max: 40, q: '12-481', qn: 'DDC控制器安装 40点以内' },
                    { max: 60, q: '12-482', qn: 'DDC控制器安装 60点以内' },
                    { max: Infinity, q: '12-482', qn: 'DDC控制器安装 60点以内（超60点取顶档）' } ] },
    collector: { code: '030503010', lname: '采集系统', unit: '台', qt: '台', kind: '设备',
                 q: '12-442', qn: '采集器安装、调试' },
    // ---------- 广播、会议 ----------
    mic: { code: '030505011', lname: '公共广播、背景音乐系统设备', unit: '个', qt: '个', kind: '设备',
           q: '12-802', qn: '话筒安装' },
    player: { code: '030505011', lname: '公共广播、背景音乐系统设备', unit: '台', qt: '台', kind: '设备',
              q: '12-801', qn: '播放器安装' },
    amplifier: { code: '030505011', lname: '公共广播、背景音乐系统设备', unit: '台', qt: '台', kind: '设备',
                 q: '12-813', qn: '放大器安装' },
    powerAmp: { code: '030505011', lname: '公共广播、背景音乐系统设备', unit: '台', qt: '台', kind: '设备',
                q: '12-828', qn: '功率放大器安装' },
    speaker: { code: '030505005', lname: '扬声器', unit: '个', qt: '个', kind: '设备', dyn: 'speaker' },
    monitorSpeaker: { code: '030505005', lname: '扬声器', unit: '个', qt: '个', kind: '设备',
                      q: '12-769', qn: '监听音箱安装' },
    // ---------- 管线 ----------
    bridge: { code: '030412003', lname: '桥架', unit: 'm', qt: '10m', factor: 10, kind: '桥架', param: 'width', def: 300,
              tiers: [ { max: 150, q: '2-637', qn: '钢制槽式桥架安装 宽150mm以内' },
                       { max: 400, q: '2-638', qn: '钢制槽式桥架安装 宽400mm以内' },
                       { max: 600, q: '2-639', qn: '钢制槽式桥架安装 宽600mm以内' },
                       { max: 800, q: '2-640', qn: '钢制槽式桥架安装 宽800mm以内' },
                       { max: 1000, q: '2-641', qn: '钢制槽式桥架安装 宽1000mm以内' },
                       { max: 1200, q: '2-642', qn: '钢制槽式桥架安装 宽1200mm以内' },
                       { max: 1500, q: '2-643', qn: '钢制槽式桥架安装 宽1500mm以内' },
                       { max: Infinity, q: '2-643', qn: '钢制槽式桥架安装 宽1500mm以内（超1500取顶档）' } ] },
    jdg: { code: '030412001', lname: '配管', unit: 'm', qt: '100m', factor: 100, kind: '配管', param: 'dn', def: 20,
           tiers: [ { max: 15, q: '2-1123', qn: 'JDG电线管敷设 DN15以内' },
                    { max: 20, q: '2-1124', qn: 'JDG电线管敷设 DN20以内' },
                    { max: 25, q: '2-1125', qn: 'JDG电线管敷设 DN25以内' },
                    { max: 32, q: '2-1126', qn: 'JDG电线管敷设 DN32以内' },
                    { max: 40, q: '2-1127', qn: 'JDG电线管敷设 DN40以内' },
                    { max: 50, q: '2-1128', qn: 'JDG电线管敷设 DN50以内' },
                    { max: Infinity, q: '2-1128', qn: 'JDG电线管敷设 DN50以内（超DN50取顶档）' } ] },
    sc: { code: '030412001', lname: '配管', unit: 'm', qt: '100m', factor: 100, kind: '配管', param: 'dn', def: 25,
          tiers: [ { max: 15, q: '2-1139', qn: '镀锌钢管（SC/RC）敷设 DN15以内' },
                   { max: 20, q: '2-1140', qn: '镀锌钢管（SC/RC）敷设 DN20以内' },
                   { max: 25, q: '2-1141', qn: '镀锌钢管（SC/RC）敷设 DN25以内' },
                   { max: 32, q: '2-1142', qn: '镀锌钢管（SC/RC）敷设 DN32以内' },
                   { max: 40, q: '2-1143', qn: '镀锌钢管（SC/RC）敷设 DN40以内' },
                   { max: 50, q: '2-1144', qn: '镀锌钢管（SC/RC）敷设 DN50以内' },
                   { max: 70, q: '2-1145', qn: '镀锌钢管（SC/RC）敷设 DN65（70）以内' },
                   { max: 80, q: '2-1146', qn: '镀锌钢管（SC/RC）敷设 DN80以内' },
                   { max: 100, q: '2-1147', qn: '镀锌钢管（SC/RC）敷设 DN100以内' },
                   { max: 125, q: '2-1148', qn: '镀锌钢管（SC/RC）敷设 DN125以内' },
                   { max: 150, q: '2-1149', qn: '镀锌钢管（SC/RC）敷设 DN150以内' },
                   { max: Infinity, q: '2-1149', qn: '镀锌钢管（SC/RC）敷设 DN150以内（超DN150取顶档）' } ] },
    utp: { code: '030502003', lname: '双绞线缆', unit: 'm', qt: '100m', factor: 100, kind: '线缆', param: 'utpCat',
           opts: [ { k: 'cat5e', l: '超五类（CAT5E）', q: '12-11', qn: '双绞线缆敷设' },
                   { k: 'cat6', l: '六类（CAT6）', q: '12-11', qn: '双绞线缆敷设' },
                   { k: 'cat6a', l: '超六类（CAT6A）', q: '12-11', qn: '双绞线缆敷设' },
                   { k: 'cat7', l: '七类（CAT7）', q: '12-11', qn: '双绞线缆敷设' } ] },
    wire: { code: '030412004', lname: '配线', unit: 'm', qt: '100m', factor: 100, kind: '配线', param: 'sec', def: 2.5,
            tiers: [ { max: 1, q: '2-1343', qn: '管内穿线 BYJ 导线截面1mm²以内' },
                     { max: 1.5, q: '2-1344', qn: '管内穿线 BYJ 导线截面1.5mm²以内' },
                     { max: 2.5, q: '2-1345', qn: '管内穿线 BYJ 导线截面2.5mm²以内' },
                     { max: 4, q: '2-1346', qn: '管内穿线 BYJ 导线截面4mm²以内' },
                     { max: 6, q: '2-1347', qn: '管内穿线 BYJ 导线截面6mm²以内' },
                     { max: 10, q: '2-1348', qn: '管内穿线 BYJ 导线截面10mm²以内' },
                     { max: 16, q: '2-1349', qn: '管内穿线 BYJ 导线截面16mm²以内' },
                     { max: Infinity, q: '2-1349', qn: '管内穿线 BYJ 导线截面16mm²以内（超16取顶档）' } ] },
    flexWire: { code: '030412004', lname: '配线', unit: 'm', qt: '100m', factor: 100, kind: '配线', param: 'flex',
                opts: FLEX_SPEC.map(function (s, i) {
                  var cn = { 2: '二芯', 4: '四芯', 8: '八芯', 16: '十六芯' }[s[0]];
                  return { k: s[0] + 'x' + s[1], l: cn + ' ' + s[1] + 'mm²',
                           q: '2-' + (1359 + i), qn: '管内穿线 多芯软导线 ' + cn + ' 导线截面' + s[1] + 'mm²以内' };
                }) },
    fiber: { code: '030502005', lname: '光缆', unit: 'm', qt: '100m', factor: 100, kind: '线缆', param: 'cores', def: 12,
             tiers: [ { max: 12, q: '12-21', qn: '光缆敷设 12芯以内' },
                      { max: 36, q: '12-22', qn: '光缆敷设 36芯以内' },
                      { max: 72, q: '12-23', qn: '光缆敷设 72芯以内' },
                      { max: Infinity, q: '12-23', qn: '光缆敷设 72芯以内（超72芯取顶档）' } ] },
    bigPair: { code: '030502004', lname: '大对数电缆、电话线', unit: 'm', qt: '100m', factor: 100, kind: '线缆', param: 'pairs', def: 25,
               tiers: [ { max: 25, q: '12-13', qn: '大对数电缆敷设 25对以内' },
                        { max: 50, q: '12-14', qn: '大对数电缆敷设 50对以内' },
                        { max: 100, q: '12-15', qn: '大对数电缆敷设 100对以内' },
                        { max: 200, q: '12-16', qn: '大对数电缆敷设 200对以内' },
                        { max: Infinity, q: '12-16', qn: '大对数电缆敷设 200对以内（超200对取顶档）' } ] }
  };

  // 状态栏中文名
  var CAT_CN = {
    sw: '交换机', patchPanel: '配线架', patchCord: '跳线', dataSocket: '信息插座', telSocket: '电话插座',
    fiberSocket: '光纤插座', ap: '无线AP', junctionBox: '接线盒', workstation: '工作站', server: '服务器',
    pc: '电脑', cabinet: '机柜', weakBox: '弱电箱', moduleBox: '模块箱', gateway: '网关', power: '电源',
    ups: 'UPS电源', lightning: '避雷器', keyboard: '控制键盘', screen: '显示屏', touchScreen: '触摸屏',
    monitor: '显示器', decoder: '解码器', camera: '摄像机', projector: '投影仪', projectorScreen: '投影幕布',
    alarmHorn: '报警警号', alarmBell: '警铃', soundLight: '声光报警器', detector: '探测器', button: '按钮',
    btnBox: '按扭箱', reader: '读卡器', doorBox: '门禁控制箱', electricLock: '电控锁', keyButton: '按键',
    intercom: '对讲分机', doorPhone: '门口机', intercomHost: '对讲主机', intercomUnit: '对讲器',
    switchPanel: '开关面板', antiFreeze: '防冻开关', sensorT: '温湿度传感器', sensorP: '压力传感器',
    communicator: '通讯器', interfaceBox: '接口箱', clock: '子钟', masterClock: '母钟', cardIssuer: '发卡器',
    controller: '控制器', ddc: 'DDC控制箱', collector: '采集器', mic: '话筒', player: '播放器',
    amplifier: '放大器', powerAmp: '功率放大器', speaker: '扬声器', monitorSpeaker: '监听音箱',
    bridge: '桥架', jdg: 'JDG配管', sc: 'SC/RC配管', utp: '双绞线', wire: 'BYJ配线',
    flexWire: '多芯软线', fiber: '光缆', bigPair: '大对数电缆'
  };

  // ============================================================
  // 三、名称解析
  // ============================================================
  function num(s) { var v = parseFloat(s); return isNaN(v) ? null : v; }

  function parseDn(name) {
    var n = String(name || '');
    var m = n.match(/DN\s*[-]?\s*(\d{1,3})/i) || n.match(/[Φφ]\s*(\d{1,3})/) ||
            n.match(/(\d{1,3})\s*mm/i);
    if (m) return parseInt(m[1], 10);
    m = n.match(/(?:JDG|KBG|SC|RC)\s*[-]?\s*(\d{1,3})/i);
    if (m) return parseInt(m[1], 10);
    return null;
  }
  function parseWidth(name) {
    var n = String(name || '');
    var m = n.match(/(\d{2,4})\s*[×xX*]\s*(\d{2,4})/);
    if (m) return parseInt(m[1], 10);
    m = n.match(/(?:宽|宽度|W\s*=?)\s*(\d{2,4})/i);
    if (m) return parseInt(m[1], 10);
    return null;
  }
  function parseSec(name) {
    var n = String(name || '');
    var m = n.match(/BYJ\s*[-]?\s*(\d+(?:\.\d+)?)/i);
    if (m) return num(m[1]);
    m = n.match(/(\d+(?:\.\d+)?)\s*mm\s*[²2]/i);
    if (m) return num(m[1]);
    m = n.match(/(?:截面|平方)\s*(\d+(?:\.\d+)?)/);
    if (m) return num(m[1]);
    return null;
  }
  function parseFlex(name) {
    var n = String(name || '');
    var m = n.match(/(\d{1,2})\s*[×xX*]\s*(\d+(?:\.\d+)?)/);
    if (m) return { cores: parseInt(m[1], 10), sec: num(m[2]) };
    return null;
  }
  function parseCores(name) {
    var n = String(name || '');
    var m = n.match(/(\d{1,3})\s*芯/);
    if (m) return parseInt(m[1], 10);
    m = n.match(/[-－]\s*(\d{1,3})\s*[Bb]\d?/);
    if (m) return parseInt(m[1], 10);
    m = n.match(/(\d{1,3})\s*[Bb]\d(?:\.\d)?/);
    if (m) return parseInt(m[1], 10);
    return null;
  }
  function parsePairs(name) {
    var n = String(name || '');
    var m = n.match(/(\d{1,4})\s*对/);
    if (m) return parseInt(m[1], 10);
    m = n.match(/HYA\s*[-]?\s*(\d{1,4})/i);
    if (m) return parseInt(m[1], 10);
    m = n.match(/(\d{1,4})\s*[×xX*]\s*2\s*[×xX*]/);
    if (m) return parseInt(m[1], 10);
    return null;
  }
  function parsePorts(name) {
    var n = String(name || '');
    var m = n.match(/(\d{1,3})\s*口/);
    if (m) return parseInt(m[1], 10);
    return null;
  }
  function parsePoints(name) {
    var n = String(name || '');
    var m = n.match(/(\d{1,4})\s*点/);
    if (m) return parseInt(m[1], 10);
    return null;
  }
  function parseKva(name) {
    var n = String(name || '');
    var m = n.match(/(\d+(?:\.\d+)?)\s*k\s*[Vv]\s*[·.]?\s*[Aa]/);
    if (m) return num(m[1]);
    m = n.match(/(\d+(?:\.\d+)?)\s*千伏安/);
    if (m) return num(m[1]);
    m = n.match(/(\d+(?:\.\d+)?)\s*kW/i);
    if (m) return num(m[1]) / 0.8;
    return null;
  }
  // 开关面板：联数 + 单控/双控
  function parseSwitchSpec(name) {
    var n = String(name || '');
    if (!/联|控/.test(n)) return null;
    var ctrl = /双控/.test(n) ? 'double' : (/单控/.test(n) ? 'single' : null);
    var gang = null;
    var m = n.match(/([二两双三四五六2-6])\s*联/);
    if (m) gang = CN_NUM[m[1]] || parseInt(m[1], 10);
    m = n.match(/联\s*([二两双三四五六2-6])/);
    if (!gang && m) gang = CN_NUM[m[1]] || parseInt(m[1], 10);
    if (ctrl && gang) return { ctrl: ctrl, gang: gang };
    if (ctrl && !gang) return { ctrl: ctrl, gang: 1 };
    if (!ctrl && gang) return { ctrl: 'single', gang: gang };
    return null;
  }
  // 插座口数
  function parseSocketPorts(name) {
    var n = String(name || '');
    if (/四口|4口/.test(n)) return 'quad';
    if (/双口|两口|2口/.test(n)) return 'double';
    if (/单口|1口/.test(n)) return 'single';
    return null;
  }
  // 扬声器类型
  function parseSpeakerType(name) {
    var n = String(name || '');
    if (/背景音乐/.test(n) && /球形/.test(n)) return 'bgm';
    if (/草坪/.test(n)) return 'lawn';
    if (/防盐雾|盐雾/.test(n)) return 'salt';
    if (/号筒|号角/.test(n)) return 'horn';
    if (/投射/.test(n)) return 'project';
    if (/水下/.test(n)) return 'under';
    if (/吸顶/.test(n)) return 'ceil';
    if (/箱式/.test(n)) return 'box';
    if (/平板/.test(n)) return 'flat';
    if (/镜框/.test(n)) return 'frame';
    if (/球形/.test(n)) return 'ball';
    if (/室外/.test(n)) return 'horn';
    return null;
  }
  function parseUtpCat(name) {
    var n = String(name || '');
    if (/CAT\s*7|七类/i.test(n)) return 'cat7';
    if (/CAT\s*6A|CAT\s*6a|超六类|六类A/i.test(n)) return 'cat6a';
    if (/CAT\s*6|六类/i.test(n)) return 'cat6';
    if (/CAT\s*5E|CAT\s*5e|超五类|五类/i.test(n)) return 'cat5e';
    return 'cat6';
  }

  // ============================================================
  // 四、类别识别（顺序敏感：具体项优先）
  // ============================================================
  function catOf(name) {
    var n = String(name || '');
    if (!n) return null;

    // ---- 电源类（先于"电源"通用词）----
    if (/UPS|EPS|不间断电源/i.test(n)) return 'ups';
    // ---- 布线器件（先于"配线/光缆"通用词）----
    if (/光纤插座|光纤信息插座/.test(n)) return 'fiberSocket';
    if (/跳线/.test(n)) return 'patchCord';
    if (/配线架/.test(n)) return 'patchPanel';
    if (/光缆|光纤/.test(n) && !/终端盒|配线箱|插座/.test(n)) return 'fiber';
    if (/大对数/.test(n)) return 'bigPair';
    if (/(^|[^A-Za-z])(UTP|FTP|STP)([^A-Za-z]|$)|CAT\s*[5-8]|CAT\.?[5-8]/i.test(n)) return 'utp';
    if (/BYJ/i.test(n)) return 'wire';
    if (/(KYY|KVV|RYY|RVV|RYYP|KYYP)/i.test(n)) return 'flexWire';
    // ---- 桥架与配管 ----
    if (/桥架|线槽|槽盒|线槽桥架/.test(n)) return 'bridge';
    if (/(^|[^A-Za-z])(JDG|KBG)([^A-Za-z]|$)|JDG\s*[-]?\s*\d|KBG\s*[-]?\s*\d/i.test(n)) return 'jdg';
    if (/(^|[^A-Za-z])(SC|RC)\s*[-]?\s*\d/i.test(n)) return 'sc';
    if (/镀锌钢管|焊接钢管/.test(n)) return 'sc';
    // ---- 箱体（先于"箱"内设备）----
    if (/模块箱/.test(n)) return 'moduleBox';
    if (/弱电箱/.test(n)) return 'weakBox';
    if (/门禁控制箱/.test(n)) return 'doorBox';
    if (/按扭箱|按钮箱/.test(n)) return 'btnBox';
    if (/接口箱/.test(n)) return 'interfaceBox';
    if (/机柜|机架/.test(n)) return 'cabinet';
    // ---- 楼控 ----
    if (/DDC/i.test(n)) return 'ddc';
    if (/互锁控制器|门禁卡/.test(n)) return 'intercom';
    if (/控制器/.test(n)) return 'controller';
    if (/防冻开关/.test(n)) return 'antiFreeze';
    if (/(温度|湿度)/.test(n) && /传感器|变送器/.test(n)) return 'sensorT';
    if (/(压力|压差)/.test(n) && /传感器|变送器/.test(n)) return 'sensorP';
    if (/传感器/.test(n)) return 'sensorT';
    // ---- 对讲 / 门禁 ----
    if (/对讲主机/.test(n)) return 'intercomHost';
    if (/门口机/.test(n)) return 'doorPhone';
    if (/对讲机|呼叫|分机/.test(n)) return 'intercom';
    if (/对讲器/.test(n)) return 'intercomUnit';
    if (/电控锁/.test(n)) return 'electricLock';
    if (/人脸识别|读卡器/.test(n)) return 'reader';
    if (/电锁按键|按键/.test(n)) return 'keyButton';
    // ---- 显示与影像 ----
    if (/触摸屏|对讲屏|窗口屏|叫号屏|液晶屏/.test(n)) return 'touchScreen';
    if (/显示器/.test(n)) return 'monitor';
    if (/显示屏|大屏/.test(n)) return 'screen';
    if (/投影幕布|投影屏|幕布/.test(n)) return 'projectorScreen';
    if (/投影仪|投影机/.test(n)) return 'projector';
    if (/摄像机/.test(n)) return 'camera';
    if (/解码器/.test(n)) return 'decoder';
    if (/键盘/.test(n)) return 'keyboard';
    if (/发卡/.test(n)) return 'cardIssuer';
    // ---- 报警 ----
    if (/声光报警器/.test(n)) return 'soundLight';
    if (/报警警号|警号/.test(n)) return 'alarmHorn';
    if (/警铃|报警装置|报警设备/.test(n)) return 'alarmBell';
    if (/探测器/.test(n)) return 'detector';
    if (/按钮/.test(n)) return 'button';
    // ---- 其他设备 ----
    if (/通讯器/.test(n)) return 'communicator';
    if (/母钟/.test(n)) return 'masterClock';
    if (/时钟|子钟/.test(n)) return 'clock';
    if (/避雷器|SPD/i.test(n)) return 'lightning';
    if (/能耗采集器|采集器/.test(n)) return 'collector';
    if (/交换机/.test(n)) return 'sw';
    if (/服务器|主机/.test(n)) return 'server';
    if (/电脑/.test(n)) return 'pc';
    if (/工作站/.test(n)) return 'workstation';
    if (/网关|灯控/.test(n)) return 'gateway';
    if (/监听音箱/.test(n)) return 'monitorSpeaker';
    if (/音箱|扬声器/.test(n)) return 'speaker';
    if (/话筒|麦克风/.test(n)) return 'mic';
    if (/播放器/.test(n)) return 'player';
    if (/功率放大器|功放/.test(n)) return 'powerAmp';
    if (/放大器/.test(n)) return 'amplifier';
    if (/电源/.test(n)) return 'power';
    // ---- 插座类 ----
    if (/电话插座/.test(n)) return 'telSocket';
    if (/信息面板|网络面板/.test(n)) return 'dataSocket';
    if (/信息插座|网络插座|接口插座|插座/.test(n)) return 'dataSocket';
    if (/(^|[^A-Za-z])AP([^A-Za-z]|$)|无线AP|WIFI|无线接入|无线网|天线/i.test(n)) return 'ap';
    if (/接线盒|暗盒/.test(n)) return 'junctionBox';
    // ---- 开关面板（放最后，避免吃掉"防冻开关"等）----
    if (/开关|面板/.test(n)) return 'switchPanel';
    return null;
  }

  // ============================================================
  // 五、建条目
  // ============================================================
  function buildItem(name) {
    if (!name) return null;
    var cat = catOf(name);
    if (!cat) return null;
    var d = DEF[cat];
    var it = {};
    it.name = name;
    it.category = cat;
    it.listCode = d.code;
    it.listName = d.lname;
    it.material = d.kind;
    it.unit = d.unit;
    it.paramRaw = null;
    it.tier = null;
    it.pick = null;
    it.pickFromName = false;

    // 数值档解析
    if (d.param && d.tiers) {
      var v = null;
      if (d.param === 'width') v = parseWidth(name);
      else if (d.param === 'dn') v = parseDn(name);
      else if (d.param === 'sec') v = parseSec(name);
      else if (d.param === 'cores') v = parseCores(name);
      else if (d.param === 'pairs') v = parsePairs(name);
      else if (d.param === 'ports') v = parsePorts(name);
      else if (d.param === 'points') v = parsePoints(name);
      else if (d.param === 'kva') v = parseKva(name);
      it.paramRaw = v;
      var base = (v === null || v === undefined) ? d.def : v;
      it.tier = tierMax(d.tiers, base);
      it.tierFromName = v !== null && v !== undefined;
    }
    // 选项档解析
    if (d.opts) {
      var pick = null;
      if (cat === 'dataSocket' || cat === 'telSocket' || cat === 'fiberSocket') {
        var sp = parseSocketPorts(name);
        if (sp) { pick = sp; it.pickFromName = true; }
        else { pick = d.opts[0].k; }
        if (cat === 'fiberSocket' && pick === 'single') pick = 'double';
      } else if (cat === 'utp') {
        pick = parseUtpCat(name); it.pickFromName = true;
      } else if (cat === 'flexWire') {
        var fx = parseFlex(name);
        if (fx) { pick = flexKey(fx.cores, fx.sec); it.pickFromName = true; }
        else { pick = '2x1.5'; }
      }
      it.pick = pick;
    }
    // 开关面板
    if (cat === 'switchPanel') {
      var ss = parseSwitchSpec(name);
      it.swSpec = ss;
      it.swCtrl = ss ? ss.ctrl : 'none';
      it.swGang = ss ? ss.gang : 0;
    }
    // 扬声器
    if (cat === 'speaker') {
      var st = parseSpeakerType(name);
      it.spkType = st || 'wall';
      it.spkFromName = !!st;
    }
    // 交换机口数
    if (cat === 'sw') it.swPorts = parsePorts(name);
    return it;
  }

  function tierMax(tiers, v) {
    for (var i = 0; i < tiers.length; i++) if (v <= tiers[i].max) return tiers[i].max;
    return tiers[tiers.length - 1].max;
  }
  function flexKey(cores, sec) {
    var best = null, bestDiff = 1e9;
    FLEX_SPEC.forEach(function (s) {
      var dc = Math.abs(s[0] - cores), ds = Math.abs(s[1] - sec);
      var diff = dc * 100 + ds * 10;
      if (diff < bestDiff) { bestDiff = diff; best = s; }
    });
    return best[0] + 'x' + best[1];
  }

  // ============================================================
  // 六、定额匹配
  // ============================================================
  function optByKey(d, k) {
    for (var i = 0; i < d.opts.length; i++) if (d.opts[i].k === k) return d.opts[i];
    return d.opts[0];
  }
  function tierByMax(d, m) {
    for (var i = 0; i < d.tiers.length; i++) if (d.tiers[i].max === m) return d.tiers[i];
    return d.tiers[0];
  }

  // 扬声器类型 → 定额
  var SPK = {
    lawn:   { l: '草坪扬声器', q: '12-758', qn: '扬声器安装 草坪式' },
    salt:   { l: '室外防盐雾扬声器', q: '12-759', qn: '扬声器安装 室外防盐雾式' },
    horn:   { l: '室外号筒扬声器', q: '12-760', qn: '扬声器安装 室外号筒式' },
    under:  { l: '水下扬声器', q: '12-761', qn: '扬声器安装 水下式' },
    project:{ l: '投射式扬声器', q: '12-762', qn: '扬声器安装 投射式' },
    wall:   { l: '墙上平嵌型扬声器', q: '12-763', qn: '扬声器安装 墙上平嵌型' },
    box:    { l: '箱式扬声器', q: '12-764', qn: '扬声器安装 箱式' },
    flat:   { l: '平板式扬声器', q: '12-765', qn: '扬声器安装 平板式' },
    frame:  { l: '镜框式扬声器', q: '12-766', qn: '扬声器安装 镜框式' },
    ball:   { l: '球形扬声器', q: '12-767', qn: '扬声器安装 球形' },
    ceil:   { l: '吸顶式扬声器', q: '12-770', qn: '扬声器安装 吸顶式' },
    bgm:    { l: '背景音乐球形扬声器', q: '12-841', qn: '扬声器安装 背景音乐球形' }
  };

  function matchQuota(it) {
    var d = DEF[it.category];
    if (!d) return { code: '', name: '', unit: it.unit, factor: 1, inferred: false };
    var res = { unit: d.qt || d.unit, factor: d.factor || 1, inferred: false };

    // 交换机：带口数 → 12-102；无口数 → 12-405
    if (d.dyn === 'switch') {
      if (it.swPorts) {
        res.code = '12-102'; res.name = '交换机安装 带口数（' + it.swPorts + '口）';
      } else {
        res.code = '12-405'; res.name = '交换机安装、调试'; res.inferred = true;
      }
      return res;
    }
    // 按键：防爆 → 2-348
    if (d.dyn === 'keyButton') {
      var ex = /防爆/.test(it.name);
      res.code = ex ? '2-348' : '2-347';
      res.name = ex ? '按键安装 防爆' : '按键安装';
      return res;
    }
    // 开关面板：未注明联控 → 2-1799；单控N联 2-1800~1804；双控N联 2-1805~1810
    if (d.dyn === 'switchPanel') {
      if (!it.swSpec) {
        res.code = '2-1799'; res.name = '开关面板安装（未注明联数/控制方式）'; res.inferred = true;
        return res;
      }
      var g = Math.min(Math.max(it.swGang, 1), 6);
      if (it.swCtrl === 'double') {
        res.code = '2-' + (1804 + g);
        res.name = '开关面板安装 双控' + cnGang(g) + '联';
      } else {
        res.code = '2-' + (1798 + g);
        res.name = '开关面板安装 单控' + cnGang(g) + '联';
      }
      return res;
    }
    // 扬声器
    if (d.dyn === 'speaker') {
      var sp = SPK[it.spkType] || SPK.wall;
      res.code = sp.q; res.name = sp.qn;
      res.inferred = !it.spkFromName;
      return res;
    }

    if (d.opts) {
      var o = optByKey(d, it.pick);
      res.code = o.q; res.name = o.qn;
      return res;
    }
    if (d.tiers) {
      var t = tierByMax(d, it.tier);
      res.code = t.q; res.name = t.qn;
      res.tier = t.max;
      res.over = it.paramRaw !== null && it.paramRaw !== undefined && it.paramRaw > t.max && t.max !== Infinity;
      res.inferred = !it.tierFromName && !it.tierPicked;
      return res;
    }
    res.code = d.q; res.name = d.qn;
    return res;
  }
  function cnGang(g) { return { 1: '单', 2: '双', 3: '三', 4: '四', 5: '五', 6: '六' }[g] || g; }

  // ============================================================
  // 七、主材价
  // ============================================================
  function periods() { return (typeof window !== 'undefined' && window.INTELLI_PRICE_PERIODS) || []; }
  function getPeriods() { return periods(); }
  function getPeriod(key) {
    var ps = periods();
    for (var i = 0; i < ps.length; i++) if (ps[i].period === key) return ps[i];
    return ps[0];
  }
  function nearestPrice(tbl, v) {
    var keys = Object.keys(tbl).map(Number).filter(function (n) { return !isNaN(n); }).sort(function (a, b) { return a - b; });
    if (!keys.length) return null;
    if (v === null || v === undefined || isNaN(v)) return tbl[keys[keys.length - 1]];
    var best = keys[0];
    keys.forEach(function (k) { if (Math.abs(k - v) < Math.abs(best - v)) best = k; });
    return tbl[best];
  }

  function priceOf(it, periodKey) {
    var p = getPeriod(periodKey);
    if (!p) return { price: null, source: 'market', brand: '', basis: '' };
    var cat = it.category;
    var isPipe = !!DEF[cat].kind.match(/桥架|配管|配线|线缆/);
    var tbl = isPipe ? (p.pipe || {}) : (p.dev || {});
    var key = cat;
    if (cat === 'jdg') key = 'jdg';
    if (cat === 'sc') key = 'sc';
    if (cat === 'wire') key = 'byj';
    if (cat === 'flexWire') key = 'flexWire';
    var m = tbl[key];
    if (!m) return { price: null, source: 'market', brand: '', basis: '' };
    var brand = m.brand || '';
    var nm = m.name || DEF[cat].lname;
    var val = null, desc = '';

    if (m.opts) {
      var k = it.pick || Object.keys(m.opts)[0];
      val = m.opts[k];
      desc = optLabel(DEF[cat], it) || k;
    } else if (m.prices) {
      // 数值档价格：名称解析到的实际值就近取价；手选/缺省档按档位取价
      var v = paramVal(it);
      if (cat === 'sw' && it.swPorts) v = it.swPorts;
      if (v === null || v === undefined || v === Infinity) v = null;
      val = nearestPrice(m.prices, v);
      desc = priceSpecDesc(it);
    } else if (m.tiers) {
      var tv = it.tier;
      if (cat === 'sw') tv = it.swPorts || null;
      val = (tv !== null && tv !== undefined && m.tiers[tv] !== undefined) ? m.tiers[tv] : nearestPrice(m.tiers, tv);
      desc = priceSpecDesc(it);
    } else {
      val = m.p;
      desc = '';
    }
    var unitTxt = isPipe ? '元/m' : ('元/' + DEF[cat].unit);
    return {
      price: (val === undefined || val === null) ? null : val,
      source: isPipe ? 'info' : 'market',
      brand: brand,
      basis: (isPipe ? '信息价（' : '市场价（') + brand + '）：' + nm + (desc ? ' ' + desc : '') + ' ' + val + ' ' + unitTxt
    };
  }

  function optLabel(d, it) {
    if (!d || !d.opts) return '';
    var o = optByKey(d, it.pick);
    return o ? o.l : '';
  }

  // 规格描述（价格依据用）
  function priceSpecDesc(it) {
    var cat = it.category;
    var v = paramVal(it);
    if (cat === 'sw') return it.swPorts ? it.swPorts + '口' : '';
    if (cat === 'bridge') return '宽' + (v || it.tier) + 'mm';
    if (cat === 'jdg' || cat === 'sc') return 'DN' + (v || it.tier);
    if (cat === 'wire') return (v || it.tier) + 'mm²';
    if (cat === 'fiber') return (v || it.tier) + '芯';
    if (cat === 'bigPair') return (v || it.tier) + '对';
    if (cat === 'patchPanel') return (v || it.tier) + '口';
    if (cat === 'ups') return (v || it.tier) + 'kV·A';
    if (cat === 'ddc') return v ? v + '点' : '未注点数';
    return '';
  }

  function isPriced() { return true; }

  function recomputePrice(it, periodKey) {
    var r = priceOf(it, periodKey);
    it.price = r.price;
    it.priceSource = r.source;
    it.priceBrand = r.brand;
    it.priceBasis = r.basis;
  }

  // ============================================================
  // 八、项目特征
  // ============================================================
  var WORK = {
    sw: '设备开箱检验、就位安装、接地、加电调试',
    patchPanel: '配线架固定、模块卡接、理线、标识',
    patchCord: '跳线布放、插接、绑扎、标识',
    dataSocket: '底盒固定、模块卡接、面板安装、测试',
    telSocket: '底盒固定、模块卡接、面板安装、测试',
    fiberSocket: '底盒固定、法兰与尾纤安装、面板安装、测试',
    ap: '支架固定、设备安装、PoE接线、信号调试',
    junctionBox: '盒体固定、接管口处理、封堵',
    workstation: '设备就位、外设连接、系统安装调试',
    server: '设备上架、导轨固定、系统安装调试',
    pc: '设备就位、外设连接、系统安装调试',
    cabinet: '机柜就位、固定、接地、理线附件安装',
    weakBox: '箱体固定、接地、进出线处理',
    moduleBox: '箱体固定、模块安装、端子接线',
    gateway: '设备固定、接线、协议配置调试',
    power: '电源固定、接线、通电测试',
    ups: '设备就位、电池组连接、通电试验、带载测试',
    lightning: '避雷器固定、接地连接、参数测试',
    keyboard: '设备就位、接线、软件配置',
    screen: '屏体拼装固定、控制系统接线、点亮调试',
    touchScreen: '设备固定、接线、界面组态调试',
    monitor: '设备固定、接线、显示调试',
    decoder: '设备上架、接线、解码参数配置',
    camera: '支架固定、设备安装、镜头调焦、图像调试',
    projector: '吊架固定、设备安装、投影调试',
    projectorScreen: '幕布固定、电动装置接线、行程调试',
    alarmHorn: '警号固定、接线、报警联动测试',
    alarmBell: '警铃固定、接线、报警联动测试',
    soundLight: '声光报警器固定、接线、联动测试',
    detector: '探测器固定、接线、探测范围调试',
    button: '按钮固定、接线、报警测试',
    btnBox: '箱体固定、按钮安装、接线',
    reader: '读卡器固定、接线、卡片与人脸登记调试',
    doorBox: '控制箱固定、控制器与电源安装、接线调试',
    electricLock: '锁体安装、门磁配合、闭锁调试',
    keyButton: '按键固定、接线、开门测试',
    intercom: '分机固定、接线、呼叫与对讲测试',
    doorPhone: '门口机固定、接线、呼叫与开锁测试',
    intercomHost: '主机就位、接线、系统联调',
    intercomUnit: '对讲器固定、接线、通话测试',
    switchPanel: '面板固定、接线、通断测试',
    antiFreeze: '防冻开关固定、毛细管敷设、动作值整定',
    sensorT: '传感器安装、取样管/套管安装、接线调试',
    sensorP: '传感器安装、取压管连接、量程整定',
    communicator: '通讯器固定、接线、通讯测试',
    interfaceBox: '接口箱固定、模块安装、端子接线',
    clock: '子钟固定、接线、校时测试',
    masterClock: '母钟就位、天线安装、授时调试',
    cardIssuer: '发卡器连接、软件安装、发卡测试',
    controller: '控制器就位、接线、程序下载调试',
    ddc: '控制箱固定、控制器与端子安装、点位调试',
    collector: '采集器就位、通讯接线、数据上传调试',
    mic: '话筒就位、接线、试音',
    player: '播放器上架、接线、节目源配置',
    amplifier: '放大器上架、接线、增益调试',
    powerAmp: '功放上架、接线、分区调试',
    speaker: '扬声器固定、接线、试音',
    monitorSpeaker: '音箱固定、接线、试音',
    bridge: '桥架组装、支吊架安装、接地跨接、盖板安装',
    jdg: '测位、锯管、套丝、煨弯、配管、接地',
    sc: '测位、锯管、套丝、煨弯、配管、接地',
    utp: '线缆布放、绑扎、两端端接、通道测试',
    wire: '穿线、编号、绑扎、绝缘测试',
    flexWire: '穿线、编号、绑扎、绝缘测试',
    fiber: '光缆布放、绑扎、熔接、盘纤、测试',
    bigPair: '电缆布放、绑扎、端接、测试'
  };

  // 当前有效参数值：名称解析到的实际值优先，否则用手选/缺省档位
  function paramVal(it) {
    if (it.tierFromName && it.paramRaw !== null && it.paramRaw !== undefined) return it.paramRaw;
    return it.tier;
  }

  function specText(it) {
    var d = DEF[it.category];
    if (d.dyn === 'switch') return it.swPorts ? it.swPorts + '口' : '—';
    if (d.dyn === 'switchPanel') return it.swSpec ? (it.swCtrl === 'double' ? '双控' : '单控') + cnGang(it.swGang) + '联' : '—';
    if (d.dyn === 'speaker') return (SPK[it.spkType] || SPK.wall).l;
    if (d.opts) return optLabel(d, it) || '—';
    if (d.tiers) {
      var cat = it.category;
      var v = it.tier;
      if (v === Infinity) v = '—';
      var rv = paramVal(it); if (rv === Infinity) rv = v;
      if (cat === 'bridge') return '宽' + rv + 'mm';
      if (cat === 'jdg' || cat === 'sc') return 'DN' + rv;
      if (cat === 'wire') return rv + 'mm²';
      if (cat === 'fiber') return rv + '芯';
      if (cat === 'bigPair') return rv + '对';
      if (cat === 'patchPanel') return v + '口';
      if (cat === 'ups') return v + 'kV·A';
      if (cat === 'ddc') return it.paramRaw ? it.paramRaw + '点' : '—';
      return String(v);
    }
    return '—';
  }

  function featureText(it) {
    var parts = [];
    parts.push('名称:' + it.name);
    parts.push('类型:' + (CAT_CN[it.category] || DEF[it.category].lname));
    var sp = specText(it);
    if (sp && sp !== '—') parts.push('规格:' + sp);
    if (it.priceBrand) parts.push('品牌参考:' + it.priceBrand);
    parts.push('其他:' + (WORK[it.category] || '设备安装、接线、调试'));
    return parts.join('；');
  }

  // ============================================================
  // 九、核对提示
  // ============================================================
  function buildWarn(it, quota) {
    var w = [];
    var d = DEF[it.category];
    if (d.dyn === 'switch') {
      if (!it.swPorts) w.push('名称未注口数，按 12-405（交换机安装、调试）计列；带口数时应套 12-102，可在名称中注明「24口/48口」');
      return w.join('；');
    }
    if (d.dyn === 'switchPanel') {
      if (!it.swSpec) w.push('名称未注联数与控制方式，按 2-1799 计列；注明「单控双联 / 双控单联」等可自动切换 2-1800~2-1810');
      return w.join('；');
    }
    if (d.dyn === 'speaker') {
      if (!it.spkFromName) w.push('名称未注扬声器类型，按 12-763（墙上平嵌型）计列，可在「选型」列切换草坪/号筒/吸顶/箱式等');
      return w.join('；');
    }
    if (d.tiers && !it.tierFromName && !it.tierPicked) {
      if (it.category === 'ddc') {
        w.push('名称未明确点数，按 12-480 计列；注明「40点/60点」可自动套 12-481 / 12-482');
      } else if (it.category === 'patchPanel') {
        w.push('名称未注口数，按 12-62（24口）计列，可在「选型」列切换 12/24/48/96 口');
      } else {
        w.push('名称未注' + warnParamName(it.category) + '，按 ' + quota.code + ' 缺省档计列，可在「选型」列切换');
      }
    }
    if (quota.over) w.push('规格超出定额顶档，已按顶档 ' + quota.code + ' 计列，请核对');
    if (d.note) w.push(d.note);
    if (it.category === 'ap') w.push('无线AP清单按「信息、网络插座」030502010、定额按 12-45 计列，如按设备单列请核对');
    if (it.category === 'keyboard') w.push('键盘清单按 030506019 停车场管理设备计列（用户口径）');
    if (it.category === 'screen') w.push('显示屏清单按 030506019 停车场管理设备、定额 12-861 计列；如为触摸/液晶屏请注明以套 12-1008');
    if (it.category === 'monitor') w.push('显示器清单按 030904010 楼层火灾显示器、定额 7-187 计列');
    if (it.qtyWarn) w.push('工程量缺失，暂按1计，请核对');
    return w.join('；');
  }
  function warnParamName(cat) {
    var m = { bridge: '宽度（如 300*100）', jdg: '管径（如 JDG20）', sc: '管径（如 SC25）',
              wire: '导线截面（如 BYJ2.5）', fiber: '光缆芯数', bigPair: '对数',
              patchPanel: '口数', ups: '容量（kV·A）' };
    return m[cat] || '规格';
  }

  // ============================================================
  // 十、解析整表
  // ============================================================
  function parseRows(aoa, periodKey, format) {
    var results = [];
    var autoIdx = 0;
    for (var r = 0; r < aoa.length; r++) {
      var row = aoa[r] || [];
      var rawName = row[1];
      var name = (rawName === undefined || rawName === null) ? '' : String(rawName).trim();
      if (!name) continue;
      if (/序号/.test(String(row[0] || '')) && /名称/.test(name)) continue;
      if (/项目名称|设备名称|名称规格/.test(name) && !/\d/.test(name) && r < 5) continue;

      var it = buildItem(name);
      if (!it) continue;

      autoIdx++;
      var seqRaw = row[0];
      it.index = (seqRaw !== undefined && seqRaw !== null && String(seqRaw).trim() !== '') ? String(seqRaw).trim() : String(autoIdx);

      var qty = parseFloat(row[2]);
      it.qtyWarn = false;
      if (isNaN(qty) || qty <= 0) { qty = 1; it.qtyWarn = true; }
      it.quantity = qty;

      var q = matchQuota(it);
      it.quotaCode = q.code;
      it.quotaName = q.name;
      it.quotaUnit = q.unit || it.unit;
      it.quotaFactor = q.factor || 1;
      it.codeInferred = !!q.inferred;
      it.quotaTier = q.tier || null;
      it.extras = [];
      recomputePrice(it, periodKey);
      it.warn = buildWarn(it, q);
      it.features = featureText(it);
      results.push(it);
    }
    results._periodKey = periodKey;
    results._format = format;
    return results;
  }

  function recomputeQuota(it) {
    var q = matchQuota(it);
    it.quotaCode = q.code;
    it.quotaName = q.name;
    it.quotaUnit = q.unit || it.unit;
    it.quotaFactor = q.factor || 1;
    it.codeInferred = !!q.inferred;
    it.quotaTier = q.tier || null;
    it.extras = [];
    it.warn = buildWarn(it, q);
  }

  // ============================================================
  // 十一、渲染
  // ============================================================
  function priceText(item) {
    if (item.price === null || item.price === undefined) return '<span class="tag tag-pending">待询价</span>';
    var tip = item.priceBasis ? ' title="' + String(item.priceBasis).replace(/"/g, '&quot;') + '"' : '';
    if (item.priceSource === 'info') return '<span class="tag tag-info"' + tip + '>信息价</span> <span' + tip + '>¥' + item.price.toFixed(2) + '</span>';
    return '<span class="tag tag-market"' + tip + '>市场价</span> <span' + tip + '>¥' + item.price.toFixed(2) + '</span>';
  }
  function inferTag(it) {
    return it.codeInferred ? '<span class="tag tag-infer" title="定额编号按缺省档/就近档推算，请对照2020预算基价核对">推</span>' : '';
  }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function opt(val, cur, label) {
    return '<option value="' + val + '"' + (String(val) === String(cur) ? ' selected' : '') + '>' + label + '</option>';
  }
  function sel(act, idx, html) {
    return '<select class="cell-select" data-act="' + act + '" data-idx="' + idx + '">' + html + '</select>';
  }

  // 选型列：数值档 / 选项档
  function layCell(it) {
    var d = DEF[it.category];
    if (d.tiers) {
      var html = d.tiers.filter(function (t) { return t.max !== Infinity; }).map(function (t) {
        return opt(t.max, it.tier, tierLabel(it.category, t.max));
      }).join('');
      return sel('tier', it._i, html);
    }
    if (d.opts) {
      return sel('pick', it._i, d.opts.map(function (o) { return opt(o.k, it.pick, o.l); }).join(''));
    }
    if (d.dyn === 'switchPanel') {
      var arr = [];
      arr.push(opt('none', it.swSpec ? 'x' : 'none', '未注明'));
      for (var c = 0; c < 2; c++) {
        for (var g = 1; g <= 6; g++) {
          var ctrl = c === 0 ? 'single' : 'double';
          var k = ctrl + '-' + g;
          var cur = it.swSpec ? (it.swCtrl + '-' + it.swGang) : 'none';
          arr.push(opt(k, cur, (c === 0 ? '单控' : '双控') + cnGang(g) + '联'));
        }
      }
      return sel('swspec', it._i, arr.join(''));
    }
    if (d.dyn === 'speaker') {
      return sel('spk', it._i, Object.keys(SPK).map(function (k) { return opt(k, it.spkType, SPK[k].l); }).join(''));
    }
    return '<span class="lay-static">—</span>';
  }
  function tierLabel(cat, max) {
    if (cat === 'bridge') return '宽' + max + 'mm以内';
    if (cat === 'jdg' || cat === 'sc') return 'DN' + max + '以内';
    if (cat === 'wire') return max + 'mm²以内';
    if (cat === 'fiber') return max + '芯以内';
    if (cat === 'bigPair') return max + '对以内';
    if (cat === 'patchPanel') return max + '口以内';
    if (cat === 'ups') return max + 'kV·A以内';
    if (cat === 'ddc') return max === 0 ? '未明确点数' : max + '点以内';
    return String(max);
  }

  function renderTable(data) {
    var tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    data.forEach(function (item, i) {
      item._i = i;
      var tr = document.createElement('tr');
      if (item.warn) tr.className = 'row-warn';
      tr.innerHTML =
        '<td>' + escapeHtml(item.index) + '</td>' +
        '<td>' + (item.listCode || '—') + '</td>' +
        '<td class="cell-name" title="' + escapeHtml(item.name) + '">' + escapeHtml(item.name) + '</td>' +
        '<td>' + layCell(item) + '</td>' +
        '<td>' + escapeHtml(item.material || '—') + '</td>' +
        '<td>' + escapeHtml(specText(item)) + '</td>' +
        '<td class="cell-qcode">' + (item.quotaCode || '—') + ' ' + inferTag(item) + '</td>' +
        '<td class="cell-qname" title="' + escapeHtml(item.quotaName) + '">' + escapeHtml(item.quotaName || '—') + '</td>' +
        '<td class="cell-price">' + priceText(item) + '</td>' +
        '<td>' + item.quantity + '</td>' +
        '<td class="cell-warn">' + (item.warn ? '<span title="' + escapeHtml(item.warn) + '">⚠️ ' + escapeHtml(item.warn) + '</span>' : '') + '</td>';
      tbody.appendChild(tr);
    });

    bindRowSelects(data);

    var dev = data.filter(function (d) { return DEF[d.category].kind === '设备'; }).length;
    var pipe = data.length - dev;
    var warn = data.filter(function (d) { return !!d.warn; }).length;
    var pending = data.filter(function (d) { return d.price === null || d.price === undefined; }).length;
    var total = data.reduce(function (s, d) { return s + (d.price === null || d.price === undefined ? 0 : d.price * d.quantity); }, 0);

    document.getElementById('totalCount').textContent = data.length;
    document.getElementById('catDev').textContent = dev;
    document.getElementById('catPipe').textContent = pipe;
    document.getElementById('warnCount').textContent = warn;
    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('totalPrice').textContent = '¥' + total.toFixed(2);
  }

  function bindRowSelects(data) {
    document.querySelectorAll('#tableBody select.cell-select').forEach(function (s) {
      s.addEventListener('change', function () {
        var idx = parseInt(s.getAttribute('data-idx'), 10);
        var act = s.getAttribute('data-act');
        var it = data[idx];
        if (!it) return;
        if (act === 'tier') {
          it.tier = parseFloat(s.value);
          it.tierFromName = false;
          it.tierPicked = true;
        } else if (act === 'pick') {
          it.pick = s.value;
          it.pickFromName = true;
        } else if (act === 'swspec') {
          if (s.value === 'none') { it.swSpec = null; it.swCtrl = 'none'; it.swGang = 0; }
          else {
            var p = s.value.split('-');
            it.swCtrl = p[0]; it.swGang = parseInt(p[1], 10);
            it.swSpec = { ctrl: it.swCtrl, gang: it.swGang };
          }
        } else if (act === 'spk') {
          it.spkType = s.value;
          it.spkFromName = true;
        }
        recomputeQuota(it);
        recomputePrice(it, data._periodKey);
        it.features = featureText(it);
        renderTable(data);
      });
    });
  }

  // ============================================================
  // 十二、导出
  // ============================================================
  function round4(v) { return Math.round(v * 10000) / 10000; }
  function num2(v) { return v === null || v === undefined ? '' : Number(Number(v).toFixed(2)); }

  function exportJianjing(data) {
    var wsData = [['序号', '清单编码', '项目名称', '定额编码', '定额名称', '主材价格', '数量', '项目特征']];
    data.forEach(function (it) {
      wsData.push([it.index, it.listCode, it.name, it.quotaCode, it.quotaName,
        it.price === null ? '' : num2(it.price), it.quantity, it.features]);
    });
    var total = data.reduce(function (s, d) { return s + (d.price === null ? 0 : d.price * d.quantity); }, 0);
    wsData.push([]);
    wsData.push(['合计', '', '', '', '', num2(total), '', '']);

    var ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = [{ wch: 8 }, { wch: 14 }, { wch: 46 }, { wch: 10 }, { wch: 42 }, { wch: 12 }, { wch: 8 }, { wch: 70 }];
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '清单定额报价表');
    XLSX.writeFile(wb, '清单定额报价表_建经_' + today() + '.xlsx');
  }

  function exportGLD(data) {
    var wsData = [['序号', '项目名称', '类型', '材质', '型号', '规格', '截面mm2', '工程量',
      '项目编码', '类型', '名称', '项目特征', '单位', '工程量', '主材单价']];

    var zIdx = 0;
    data.forEach(function (it) {
      var hasPrice = it.price !== null && it.price !== undefined;
      var sp = specText(it);
      var kind = DEF[it.category].kind;

      if (!it.quotaCode) {
        wsData.push([
          it.index, it.name, kind, it.material, '', sp, '', it.quantity,
          '', '待人工处理', it.name, it.features, it.unit, it.quantity,
          hasPrice ? num2(it.price) : ''
        ]);
        return;
      }
      wsData.push([
        it.index, it.name, kind, it.material, '', sp, '', it.quantity,
        it.listCode, '清单行', it.name, it.features, it.unit, it.quantity,
        hasPrice ? num2(it.price) : ''
      ]);
      var qFactor = it.quotaFactor || 1;
      wsData.push([
        it.index + '.1', '', '', '', '', '', '', '',
        it.quotaCode, '定额行', it.quotaName, '', it.quotaUnit || it.unit,
        round4(it.quantity / qFactor), ''
      ]);
      if (hasPrice) {
        zIdx++;
        wsData.push([
          it.index + '.2', '', '', '', '', '', '', '',
          'Z00741-' + String(zIdx).padStart(3, '0'), '子目下设备', it.name, '', it.unit, it.quantity, num2(it.price)
        ]);
      }
    });

    var total = data.reduce(function (s, d) { return s + (d.price === null ? 0 : d.price * d.quantity); }, 0);
    wsData.push([]);
    wsData.push(['合计', '', '', '', '', '', '', '', '', '', '', '', '', '', num2(total)]);

    var ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = [
      { wch: 8 }, { wch: 44 }, { wch: 8 }, { wch: 8 }, { wch: 12 }, { wch: 16 }, { wch: 9 }, { wch: 9 },
      { wch: 13 }, { wch: 10 }, { wch: 44 }, { wch: 60 }, { wch: 6 }, { wch: 9 }, { wch: 12 }
    ];
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '清单定额报价表');
    XLSX.writeFile(wb, '清单定额报价表_广联达_' + today() + '.xlsx');
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
  }

  // ============================================================
  // 十三、初始化与交互
  // ============================================================
  var exportData = [];

  function currentFormat() {
    return (document.querySelector('input[name="software"]:checked') || {}).value || 'guanglianda';
  }
  function currentPeriod() {
    var el = document.getElementById('periodSelect');
    return el ? el.value : (getPeriods()[0] || {}).period;
  }

  function snapChoices(data) {
    var m = {};
    (data || []).forEach(function (it) {
      if (!it || it.index === undefined) return;
      m[it.index + '|' + it.name] = { tier: it.tier, pick: it.pick, swCtrl: it.swCtrl, swGang: it.swGang, spkType: it.spkType };
    });
    return m;
  }
  function applyChoices(data, snap) {
    if (!snap) return;
    data.forEach(function (it) {
      var s = snap[it.index + '|' + it.name];
      if (!s) return;
      var dirty = false;
      if (s.tier !== undefined && s.tier !== null && s.tier !== it.tier) { it.tier = s.tier; it.tierFromName = false; it.tierPicked = true; dirty = true; }
      if (s.pick !== undefined && s.pick !== null && s.pick !== it.pick) { it.pick = s.pick; it.pickFromName = true; dirty = true; }
      if (it.category === 'switchPanel' && s.swCtrl && s.swCtrl !== it.swCtrl) {
        it.swCtrl = s.swCtrl; it.swGang = s.swGang; it.swSpec = s.swCtrl === 'none' ? null : { ctrl: s.swCtrl, gang: s.swGang };
        dirty = true;
      }
      if (it.category === 'speaker' && s.spkType && s.spkType !== it.spkType) { it.spkType = s.spkType; it.spkFromName = true; dirty = true; }
      if (dirty) {
        recomputeQuota(it);
        recomputePrice(it, data._periodKey);
        it.features = featureText(it);
      }
    });
  }

  function refreshAll() {
    if (!window._rawAOA) return;
    var snap = snapChoices(exportData);
    exportData = parseRows(window._rawAOA, currentPeriod(), currentFormat());
    applyChoices(exportData, snap);
    renderTable(exportData);
    var area = document.getElementById('resultArea');
    var btn = document.getElementById('btnGroup');
    var bar = document.getElementById('statusBar');
    if (exportData.length) {
      area.style.display = 'block';
      btn.style.display = 'flex';
      bar.style.display = 'block';
      bar.className = 'status-bar status-ok';
      var cnt = {};
      exportData.forEach(function (d) { cnt[d.category] = (cnt[d.category] || 0) + 1; });
      var parts = [];
      Object.keys(CAT_CN).forEach(function (k) { if (cnt[k]) parts.push(CAT_CN[k] + ' ' + cnt[k] + ' 条'); });
      bar.textContent = '成功解析 ' + exportData.length + ' 条：' + parts.join('、') +
        '；「选型」列可切换规格档（桥架宽度、管径、导线截面、光缆芯数、配线架口数、UPS容量、开关联控、扬声器类型等），定额与主材价实时重算（桥架按10m、配管配线按100m 计量，导出自动换算）；黄色行为需人工核对项';
    } else {
      area.style.display = 'none';
      btn.style.display = 'none';
      bar.style.display = 'block';
      bar.className = 'status-bar status-err';
      bar.textContent = '未在B列识别到智能化设备/管线名称，请检查表头是否为：A序号 / B项目名称 / C数量';
    }
  }

  if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', function () {
    var selEl = document.getElementById('periodSelect');
    getPeriods().forEach(function (p) {
      var o = document.createElement('option');
      o.value = p.period;
      o.textContent = p.releaseLabel;
      selEl.appendChild(o);
    });
    selEl.addEventListener('change', refreshAll);

    var fileInput = document.getElementById('excelFile');
    var uploadArea = document.getElementById('uploadArea');

    fileInput.addEventListener('change', function (e) {
      var file = e.target.files[0];
      if (file) readFile(file);
    });

    uploadArea.addEventListener('click', function () { fileInput.click(); });
    uploadArea.addEventListener('dragover', function (e) { e.preventDefault(); uploadArea.classList.add('dragover'); });
    uploadArea.addEventListener('dragleave', function () { uploadArea.classList.remove('dragover'); });
    uploadArea.addEventListener('drop', function (e) {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      var f = e.dataTransfer.files[0];
      if (f) readFile(f);
    });

    document.querySelectorAll('input[name="software"]').forEach(function (r) {
      r.addEventListener('change', refreshAll);
    });

    document.getElementById('resetBtn').addEventListener('click', function () {
      window._rawAOA = null;
      exportData = [];
      document.getElementById('resultArea').style.display = 'none';
      document.getElementById('btnGroup').style.display = 'none';
      document.getElementById('summaryArea').style.display = 'none';
      document.getElementById('statusBar').style.display = 'none';
      fileInput.value = '';
      document.getElementById('tableBody').innerHTML = '';
      document.getElementById('uploadArea').style.display = 'block';
    });

    document.getElementById('exportBtn').addEventListener('click', function () {
      if (!exportData.length) return;
      if (currentFormat() === 'jianjing') exportJianjing(exportData);
      else exportGLD(exportData);
    });
  });

  function readFile(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var data = new Uint8Array(e.target.result);
        var wb = XLSX.read(data, { type: 'array' });
        var ws = wb.Sheets[wb.SheetNames[0]];
        var aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
        window._rawAOA = aoa;
        document.getElementById('uploadArea').style.display = 'none';
        document.getElementById('summaryArea').style.display = 'grid';
        refreshAll();
      } catch (err) {
        var bar = document.getElementById('statusBar');
        bar.style.display = 'block';
        bar.className = 'status-bar status-err';
        bar.textContent = '文件解析失败：' + err.message;
      }
    };
    reader.readAsArrayBuffer(file);
  }

  // 本地调试/自动化句柄
  if (typeof window !== 'undefined') {
    window.__intelli = {
      parseRows: parseRows, matchQuota: matchQuota, buildItem: buildItem, catOf: catOf,
      recomputeQuota: recomputeQuota, getPeriods: getPeriods,
      exportGLD: exportGLD, exportJianjing: exportJianjing,
      getData: function () { return exportData; },
      setAOA: function (aoa) {
        window._rawAOA = aoa;
        exportData = parseRows(aoa, currentPeriod(), currentFormat());
        renderTable(exportData);
        return exportData;
      }
    };
  }

  // 暴露给 Node 测试
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      DEF: DEF, CAT_CN: CAT_CN, SPK: SPK,
      catOf: catOf, buildItem: buildItem, matchQuota: matchQuota, parseRows: parseRows,
      parseDn: parseDn, parseWidth: parseWidth, parseSec: parseSec, parseFlex: parseFlex,
      parseCores: parseCores, parsePairs: parsePairs, parsePorts: parsePorts,
      parsePoints: parsePoints, parseKva: parseKva, parseSwitchSpec: parseSwitchSpec,
      parseSocketPorts: parseSocketPorts, parseSpeakerType: parseSpeakerType, parseUtpCat: parseUtpCat,
      specText: specText, featureText: featureText, buildWarn: buildWarn,
      priceOf: priceOf, getPeriods: getPeriods, flexKey: flexKey
    };
  }
})();
