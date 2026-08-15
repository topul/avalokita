/* ══════════════════════════════════════════
   mod-bow.js · 礼拜 / 朝礼（长按蓄力三拜 · 可选所礼神佛）
   ══════════════════════════════════════════ */
(function () {
  'use strict';
  var HOLD = 1500;                 /* 一拜所需长按时长(ms) */
  var CIRC = 339.3;                /* r=54 圆周 */
  var ring, btn, vowEl, seqEl, totalEl, roundsEl, matWord, devotee, wave, artEl, pickEl;
  var cfg, tr, list = [], idx = 0, cur = null, holding = false, startT = 0, raf = 0, bowSeq = 0;

  function setRing(p) {
    p = Math.max(0, Math.min(1, p));
    ring.style.strokeDashoffset = (CIRC * (1 - p)).toFixed(2);
  }
  function flashVow() {
    vowEl.classList.remove('flash'); void vowEl.offsetWidth; vowEl.classList.add('flash');
  }
  function verb() { return tr === 'tao' ? '朝礼 ' : '礼 '; }

  function renderArt() { artEl.innerHTML = cur ? cur.svg : ''; }

  function renderPicker() {
    pickEl.innerHTML = '';
    list.forEach(function (d, i) {
      var chip = GZ.el('button', 'dchip');
      chip.type = 'button';
      chip.setAttribute('role', 'tab');
      chip.dataset.idx = i;
      chip.innerHTML = '<b>' + d.short + '</b>' +
        '<span class="dc-kind">' + d.honor + '</span>' +
        '<span class="dc-num" data-dn="' + d.id + '">' + GZ.num(Store.deityCount(tr, d.id)) + '</span>';
      if (i === idx) chip.classList.add('on');
      chip.addEventListener('click', function () { Chime.unlock(); selectDeity(i); });
      pickEl.appendChild(chip);
    });
  }

  function refreshPickerNums() {
    var nums = pickEl.querySelectorAll('[data-dn]');
    for (var i = 0; i < nums.length; i++) {
      var id = nums[i].getAttribute('data-dn');
      nums[i].textContent = GZ.num(Store.deityCount(tr, id));
    }
    var chips = pickEl.querySelectorAll('.dchip');
    for (var j = 0; j < chips.length; j++) {
      chips[j].classList.toggle('on', +chips[j].dataset.idx === idx);
    }
  }

  function selectDeity(i) {
    if (holding) end();
    idx = i; cur = list[i];
    renderArt();
    GZ.$('bowTitle').textContent = verb() + cur.short;
    GZ.$('bowHint').textContent = cfg.hint;
    bowSeq = 0; Store.cur(tr, 'bowSeq', 0);
    seqEl.textContent = '0 / 3';
    setRing(0);
    vowEl.textContent = cfg.idle;
    refreshPickerNums();
  }

  function refresh() {
    var s = Store.side(tr);
    bowSeq = Store.cur(tr, 'bowSeq') || 0;
    seqEl.textContent = bowSeq + ' / 3';
    totalEl.textContent = GZ.num(s.total.bows);
    roundsEl.textContent = GZ.num(s.total.rounds);
    vowEl.textContent = (bowSeq > 0 && cfg.vows[bowSeq - 1]) ? cfg.vows[bowSeq - 1] : cfg.idle;
    setRing(0);
    refreshPickerNums();
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
    Store.deityAdd(tr, cur.id, 1);

    var snd = cur.sound || cfg.sound;
    if (snd && Chime[snd]) Chime[snd]();

    seqEl.textContent = bowSeq + ' / 3';
    totalEl.textContent = GZ.num(Store.side(tr).total.bows);
    refreshPickerNums();

    if (bowSeq < 3) {
      vowEl.textContent = cfg.vows[bowSeq - 1]; flashVow();
    } else {
      Store.add(tr, 'rounds', 1);
      roundsEl.textContent = GZ.num(Store.side(tr).total.rounds);
      Store.cur(tr, 'bowSeq', 0); bowSeq = 0;
      Chime.fulfil(tr);
      GZ.toast(cur.gatha || cfg.done);
      vowEl.textContent = cur.gatha || cfg.done; flashVow();
    }
  }

  GZ.modules.bow = {
    init: function () {
      ring = GZ.$('bowRing'); btn = GZ.$('bowBtn'); vowEl = GZ.$('bowVow');
      seqEl = GZ.$('bowSeq'); totalEl = GZ.$('bowTotal'); roundsEl = GZ.$('bowRounds');
      matWord = GZ.$('matWord'); devotee = GZ.$('devotee'); wave = GZ.$('bowWave');
      artEl = GZ.$('deityArt'); pickEl = GZ.$('deityPick');
      btn.addEventListener('pointerdown', begin);
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
    },
    setup: function (c, t) { cfg = c.bow; tr = t; },
    enter: function (c, t) {
      cfg = c.bow; tr = t;
      list = (window.DEITIES && DEITIES[tr]) ? DEITIES[tr] : [];
      idx = 0;
      renderPicker();
      selectDeity(0);
      GZ.$('bowSeqLbl').textContent = cfg.seqLabel;
      GZ.$('bowRoundLbl').textContent = cfg.roundLabel;
      matWord.textContent = cfg.word;
      refresh();
    },
    leave: function () { end(); }
  };
})();
