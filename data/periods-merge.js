/* ============================================================
 * 天津造价信息 2026年1-10期 合并（data/periods-2026.js）
 * 作用：把官方期刊提取的电缆桥架价格按期并入 INTELLI_PRICE_PERIODS
 * 口径：除税价（中间价÷1.13）；桥架按宽度取同宽档中位价
 * ============================================================ */
(function () {
  var T = (typeof window !== 'undefined' && window.TJ_PERIODS_2026) || [];
  var P = (typeof window !== 'undefined' && window.INTELLI_PRICE_PERIODS) || [];
  if (!T.length || !P.length) return;
  var tpl = P[0];
  function cp(o) { return JSON.parse(JSON.stringify(o)); }
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
    if (p.bridge && Object.keys(p.bridge).length) {
      var bw = byWidth(p.bridge);
      o.pipe = o.pipe || {};
      o.pipe.bridge = o.pipe.bridge || { prices: {} };
      Object.keys(bw).forEach(function (w) { o.pipe.bridge.prices[w] = bw[w]; n++; });
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
        n++;
      });
      if (p.period === '2026-10') latestByj = o.pipe.byj.prices;
    }
    o.infoCount = n;
    if (!exist) P.push(o);
  });
  // 模板期（2026-11）尚无当月期刊，桥架/电线取最新已发布的 2026-10 期信息价
  if (latestBw || latestByj) {
    for (var j = 0; j < P.length; j++) {
      if (P[j].period !== '2026-11') continue;
      var t11 = P[j];
      t11.pipe = t11.pipe || {};
      if (latestBw) {
        t11.pipe.bridge = t11.pipe.bridge || { prices: {} };
        t11.pipe.bridge.prices = t11.pipe.bridge.prices || {};
        Object.keys(latestBw).forEach(function (w) { t11.pipe.bridge.prices[w] = latestBw[w]; });
      }
      if (latestByj) {
        t11.pipe.byj = t11.pipe.byj || { prices: {} };
        t11.pipe.byj.prices = t11.pipe.byj.prices || {};
        Object.keys(latestByj).forEach(function (s2) { t11.pipe.byj.prices[s2] = latestByj[s2]; });
      }
      t11.infoNote = '信息价取 2026 年第 10 期（最新已发布）';
    }
  }
  function pk(s) { var a = String(s || '').split('-'); return (parseInt(a[0], 10) || 0) * 100 + (parseInt(a[1], 10) || 0); }
  P.sort(function (a, b) { return pk(b.period) - pk(a.period); });
})();
