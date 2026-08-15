/* ══════════════════════════════════════════
   mod-knock.js · 木鱼 / 云磬（敲击计数 + 自动敲击 + 圆满）
   ══════════════════════════════════════════ */
(function () {
  'use strict';
  var btn, autoBtn, tempo, tempoVal, ripples, floats, knNow, knTotal, knLeft, knLeftLbl, knRounds;
  var cfg, tr, auto = false, timer = 0;

  function unit() { return cfg.unit; }

  function doKnock() {
    var s = Store.side(tr);
    var now = (Store.cur(tr, 'knockNow') || 0) + 1;
    Store.cur(tr, 'knockNow', now);
    Store.add(tr, 'knocks', 1); GZ.merit(1);
    if (cfg.sound && Chime[cfg.sound]) Chime[cfg.sound]();
    ripple(); phrase();

    btn.classList.add('hit'); setTimeout(function () { btn.classList.remove('hit'); }, 120);

    knNow.textContent = now;
    knTotal.textContent = GZ.num(s.total.knocks);
    var left = unit() - now;
    if (left <= 0) {
      Store.add(tr, 'knockRounds', 1);
      knRounds.textContent = GZ.num(Store.side(tr).total.knockRounds);
      Store.cur(tr, 'knockNow', 0);
      knNow.textContent = 0; left = unit();
      Chime.fulfil(tr); GZ.toast(cfg.round);
    }
    knLeft.textContent = left;
  }

  function ripple() {
    var r = GZ.el('div', 'ripple'); ripples.appendChild(r);
    setTimeout(function () { if (r.parentNode) r.parentNode.removeChild(r); }, 1400);
  }
  function phrase() {
    var f = GZ.el('div', 'float', GZ.pick(cfg.phrases)); floats.appendChild(f);
    setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 2200);
  }
  function tick() {
    if (!auto) return;
    doKnock();
    timer = setTimeout(tick, 60000 / (+tempo.value || 66));
  }
  function setAuto(on) {
    auto = on;
    autoBtn.classList.toggle('on', on);
    autoBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    autoBtn.textContent = on ? '自动敲击 中' : '自动敲击';
    clearTimeout(timer);
    if (on) { Chime.unlock(); tick(); }
  }

  GZ.modules.knock = {
    init: function () {
      btn = GZ.$('knockBtn'); autoBtn = GZ.$('autoBtn'); tempo = GZ.$('tempo'); tempoVal = GZ.$('tempoVal');
      ripples = GZ.$('ripples'); floats = GZ.$('floats');
      knNow = GZ.$('knNow'); knTotal = GZ.$('knTotal'); knLeft = GZ.$('knLeft');
      knLeftLbl = GZ.$('knLeftLbl'); knRounds = GZ.$('knRounds');

      btn.addEventListener('click', function () { Chime.unlock(); doKnock(); });
      autoBtn.addEventListener('click', function () { setAuto(!auto); });
      tempo.addEventListener('input', function () { tempoVal.textContent = tempo.value; });
      var tv = Store.prefs('tempo');
      if (tv) { tempo.value = tv; tempoVal.textContent = tv; }
      tempo.addEventListener('change', function () { Store.prefs('tempo', +tempo.value); });
    },
    setup: function (c, t) { cfg = c.knock; tr = t; },
    enter: function (c, t) {
      cfg = c.knock; tr = t;
      GZ.$('knTitle').textContent = cfg.title;
      GZ.$('knHint').textContent = cfg.hint;
      knLeftLbl.textContent = cfg.leftLabel;
      var now = Store.cur(tr, 'knockNow') || 0;
      knNow.textContent = now;
      knTotal.textContent = GZ.num(Store.side(tr).total.knocks);
      knRounds.textContent = GZ.num(Store.side(tr).total.knockRounds);
      knLeft.textContent = Math.max(0, unit() - now);
    },
    leave: function () { setAuto(false); },
    stopAuto: function () { setAuto(false); }
  };
})();
