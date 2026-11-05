/* ============================================================
 * 天津造价信息 2026年1-10期 合并（data/periods-2026.js）
 * 作用：把官方期刊提取的电缆桥架价格按期并入 INTELLI_PRICE_PERIODS
 * 口径：除税价（中间价÷1.13）；桥架按宽度取同宽档中位价
 * ============================================================ */
(function () {
  var T = (typeof window !== 'undefined' && window.TJ_PERIODS_2026) || [];
  var P = (typeof window !== 'undefined' && window.INTELLI_PRICE_PERIODS) || [];
  if (!T.length || !P.length) return;
  function cp(o) { return JSON.parse(JSON.stringify(o)); }
  var tpl = cp(P[0]);   // 模板快照：避免首个信息价期写入后污染后续期
  function byWidth(bridge) {
    var acc = {};
    Object.keys(bridge).forEach(function (k) {
      var w = parseInt(k.split('x')[0], 10);
      var v = bridge[k];
      if (!w || typeof v !== 'number' || v <= 0) return;
      (acc[w] = acc[w] || []).push(v);
    });
    var out = {};
    Object.keys(acc).forEach(function (w) {
      var a = acc[w].sort(function (x, y) { return x - y; });
      out[w] = Math.round(a[Math.floor((a.length - 1) / 2)] * 100) / 100;
    });
    return out;
  }
  var latestBw = null, latestByj = null;
  T.forEach(function (p) {
    var exist = null;
    for (var i = 0; i < P.length; i++) if (P[i].period === p.period) exist = P[i];
    var o = exist || cp(tpl);
    o.period = p.period;
    o.releaseLabel = p.label;
    o.source = 'tj-info';
    var n = 0;
    o.infoPipe = { bridge: {}, byj: {} };
    if (p.bridge && Object.keys(p.bridge).length) {
      var bw = byWidth(p.bridge);
      o.pipe = o.pipe || {};
      o.pipe.bridge = o.pipe.bridge || { prices: {} };
      Object.keys(bw).forEach(function (w) { o.pipe.bridge.prices[w] = bw[w]; o.infoPipe.bridge[w] = 1; n++; });
      if (p.period === '2026-10') latestBw = bw;
    }
    // 电线 BYJ/BV 近似映射到 byj 档（同截面）
    if (p.wire) {
      o.pipe = o.pipe || {};
      o.pipe.byj = o.pipe.byj || { prices: {} };
      Object.keys(p.wire).forEach(function (k) {
        var parts = k.split('|');
        if (parts[0] !== 'BYJ' && parts[0] !== 'BV') return;
        var sec = parts[1].replace(/^\d+x/, '');
        o.pipe.byj.prices[sec] = p.wire[k];
        o.infoPipe.byj[sec] = 1;
        n++;
      });
      if (p.period === '2026-10') latestByj = o.pipe.byj.prices;
    }
    o.infoCount = n;
    if (!exist) P.push(o);
  });
  // 2026 年 11 月造价信息尚未发布，不设 11 月期，统一按 10 月信息价 + 市场价计入
  for (var q = P.length - 1; q >= 0; q--) if (P[q].period === '2026-11') P.splice(q, 1);
  function pk(s) { var a = String(s || '').split('-'); return (parseInt(a[0], 10) || 0) * 100 + (parseInt(a[1], 10) || 0); }
  P.sort(function (a, b) { return pk(b.period) - pk(a.period); });
})();
