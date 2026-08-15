/* ══════════════════════════════════════════
   mod-bow.js · 礼拜 / 朝礼（长按蓄力三拜）
   ══════════════════════════════════════════ */
(function () {
  'use strict';
  var HOLD = 1500;                 /* 一拜所需长按时长(ms) */
  var CIRC = 339.3;                /* r=54 圆周 */
  var ring, btn, vowEl, seqEl, totalEl, roundsEl, matWord, devotee, wave, tablets;
  var cfg, tr, holding = false, startT = 0, raf = 0, bowSeq = 0;

  function setRing(p) {
    p = Math.max(0, Math.min(1, p));
    ring.style.strokeDashoffset = (CIRC * (1 - p)).toFixed(2);
  }
  function flashVow() {
    vowEl.classList.remove('flash'); void vowEl.offsetWidth; vowEl.classList.add('flash');
  }

  function refresh() {
    var s = Store.side(tr);
    bowSeq = Store.cur(tr, 'bowSeq') || 0;
    seqEl.textContent = bowSeq + ' / 3';
    totalEl.textContent = GZ.num(s.total.bows);
    roundsEl.textContent = GZ.num(s.total.rounds);
    for (var i = 0; i < tablets.length; i++) tablets[i].classList.toggle('on', i < bowSeq);
    vowEl.textContent = (bowSeq > 0 && cfg.vows[bowSeq - 1]) ? cfg.vows[bowSeq - 1] : cfg.idle;
    setRing(0);
  }

  function begin(e) {
    if (holding) return;
    if (e.cancelable) e.preventDefault();
    Chime.unlock();
    holding = true; btn.classList.add('hold'); startT = performance.now();
    cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
  }
  function loop() {
    var p = (performance.now() - startT) / HOLD;
    if (p >= 1) { complete(); return; }
    setRing(p); raf = requestAnimationFrame(loop);
  }
  function end() {
    if (!holding) return;
    holding = false; btn.classList.remove('hold'); cancelAnimationFrame(raf); setRing(0);
  }
  function complete() {
    holding = false; btn.classList.remove('hold'); cancelAnimationFrame(raf); setRing(0);
    devotee.style.setProperty('--bend', 1);
    setTimeout(function () { devotee.style.setProperty('--bend', 0); }, 650);
    wave.classList.remove('go'); void wave.offsetWidth; wave.classList.add('go');

    bowSeq = (Store.cur(tr, 'bowSeq') || 0) + 1;
    Store.cur(tr, 'bowSeq', bowSeq);
    Store.add(tr, 'bows', 1); GZ.merit(1);
    if (cfg.sound && Chime[cfg.sound]) Chime[cfg.sound]();
    if (tablets[bowSeq - 1]) tablets[bowSeq - 1].classList.add('on');

    seqEl.textContent = bowSeq + ' / 3';
    totalEl.textContent = GZ.num(Store.side(tr).total.bows);

    if (bowSeq < 3) {
      vowEl.textContent = cfg.vows[bowSeq - 1]; flashVow();
    } else {
      Store.add(tr, 'rounds', 1);
      roundsEl.textContent = GZ.num(Store.side(tr).total.rounds);
      Store.cur(tr, 'bowSeq', 0); bowSeq = 0;
      for (var i = 0; i < tablets.length; i++) tablets[i].classList.remove('on');
      Chime.fulfil(tr); GZ.toast(cfg.done);
      vowEl.textContent = cfg.done; flashVow();
    }
  }

  GZ.modules.bow = {
    init: function () {
      ring = GZ.$('bowRing'); btn = GZ.$('bowBtn'); vowEl = GZ.$('bowVow');
      seqEl = GZ.$('bowSeq'); totalEl = GZ.$('bowTotal'); roundsEl = GZ.$('bowRounds');
      matWord = GZ.$('matWord'); devotee = GZ.$('devotee'); wave = GZ.$('bowWave');
      tablets = document.querySelectorAll('#tablets .tablet');
      btn.addEventListener('pointerdown', begin);
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
    },
    setup: function (c, t) { cfg = c.bow; tr = t; },
    enter: function (c, t) {
      cfg = c.bow; tr = t;
      GZ.$('bowTitle').textContent = cfg.title;
      GZ.$('bowHint').textContent = cfg.hint;
      GZ.$('bowSeqLbl').textContent = cfg.seqLabel;
      GZ.$('bowRoundLbl').textContent = cfg.roundLabel;
      matWord.textContent = cfg.word;
      refresh();
    },
    leave: function () { end(); }
  };
})();
