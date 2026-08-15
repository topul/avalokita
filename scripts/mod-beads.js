/* ══════════════════════════════════════════
   mod-beads.js · 佛珠 / 道珠（电子念珠，点击/拖动拨珠）
   ══════════════════════════════════════════ */
(function () {
  'use strict';
  var SVGNS = 'http://www.w3.org/2000/svg';
  var ringSvg, group, mother, mantraEl, numEl, ofEl, tapBtn, resetBtn, bdLaps, bdTotal, bdLeft, bdLapLbl;
  var cfg, tr, total = 108, R = 148, CX = 220, CY = 220, beads = [], pos = 0, drag = false;

  function circle(r, cls) {
    var c = document.createElementNS(SVGNS, 'circle');
    c.setAttribute('r', r); c.setAttribute('class', cls);
    return c;
  }
  function build() {
    total = cfg.total;
    group.innerHTML = ''; beads = [];
    var step = 360 / total;
    for (var i = 0; i < total; i++) {
      var ang = (-90 + i * step) * Math.PI / 180;
      var x = CX + R * Math.cos(ang), y = CY + R * Math.sin(ang);
      var c = circle(i % 9 === 0 ? 5.4 : 4.2, 'bd');
      c.setAttribute('cx', x.toFixed(1)); c.setAttribute('cy', y.toFixed(1));
      c.dataset.i = i; group.appendChild(c); beads.push(c);
    }
    mother.innerHTML = '';
    var m = circle(10, 'mother');
    m.setAttribute('cx', CX); m.setAttribute('cy', CY - R - 18); mother.appendChild(m);
    var t1 = document.createElementNS(SVGNS, 'path');
    t1.setAttribute('d', 'M' + (CX - 6) + ' ' + (CY - R + 6) + ' Q' + CX + ' ' + (CY - R + 40) + ' ' + (CX - 3) + ' ' + (CY - R + 78));
    t1.setAttribute('class', 'tassel'); mother.appendChild(t1);
    var t2 = document.createElementNS(SVGNS, 'path');
    t2.setAttribute('d', 'M' + (CX + 6) + ' ' + (CY - R + 6) + ' Q' + CX + ' ' + (CY - R + 40) + ' ' + (CX + 3) + ' ' + (CY - R + 78));
    t2.setAttribute('class', 'tassel'); mother.appendChild(t2);
    ofEl.textContent = '/ ' + total;
  }
  function paint() {
    for (var i = 0; i < beads.length; i++) {
      beads[i].classList.toggle('passed', i < pos);
      beads[i].classList.toggle('cur', i === pos && pos < total);
    }
    numEl.textContent = pos;
    bdLeft.textContent = Math.max(0, total - pos);
    mantraEl.textContent = GZ.pick(cfg.mantras);
  }
  function advance() {
    pos = (Store.cur(tr, 'beadPos') || 0) + 1;
    Store.cur(tr, 'beadPos', pos);
    Store.add(tr, 'beads', 1); GZ.merit(1); if (Chime.bead) Chime.bead();
    if (pos >= total) {
      Store.add(tr, 'laps', 1);
      bdLaps.textContent = GZ.num(Store.side(tr).total.laps);
      Store.cur(tr, 'beadPos', 0); pos = 0;
      Chime.fulfil(tr); GZ.toast(cfg.round);
    }
    bdTotal.textContent = GZ.num(Store.side(tr).total.beads);
    paint();
  }
  function reset() { pos = 0; Store.cur(tr, 'beadPos', 0); paint(); }

  function angleAt(evt) {
    var rect = ringSvg.getBoundingClientRect();
    var x = (evt.clientX - rect.left) / rect.width * 440 - 220;
    var y = (evt.clientY - rect.top) / rect.height * 440 - 220;
    var ang = (Math.atan2(y, x) * 180 / Math.PI) + 90;
    ang = ((ang % 360) + 360) % 360;
    return Math.round(ang / (360 / total)) % total;
  }
  function onDown(e) {
    drag = true; Chime.unlock();
    if (ringSvg.setPointerCapture && e.pointerId != null) {
      try { ringSvg.setPointerCapture(e.pointerId); } catch (err) {}
    }
    e.preventDefault();
  }
  function onMove(e) {
    if (!drag) return;
    var idx = angleAt(e);
    if (idx === pos) return;
    var diff = idx - pos; if (diff < 0) diff += total;
    if (diff > 0 && diff < total / 2) { for (var k = 0; k < diff; k++) advance(); }
  }
  function onUp() { drag = false; }

  GZ.modules.beads = {
    init: function () {
      ringSvg = GZ.$('beadRing'); group = GZ.$('beadGroup'); mother = GZ.$('motherBead');
      mantraEl = GZ.$('ringMantra'); numEl = GZ.$('ringNum'); ofEl = GZ.$('ringOf');
      tapBtn = GZ.$('beadTap'); resetBtn = GZ.$('beadReset');
      bdLaps = GZ.$('bdLaps'); bdTotal = GZ.$('bdTotal'); bdLeft = GZ.$('bdLeft'); bdLapLbl = GZ.$('bdLapLbl');
      tapBtn.addEventListener('click', function () { Chime.unlock(); advance(); });
      resetBtn.addEventListener('click', reset);
      ringSvg.addEventListener('pointerdown', onDown);
      ringSvg.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      ringSvg.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); advance(); }
      });
    },
    setup: function (c, t) { cfg = c.beads; tr = t; total = c.beads.total; },
    enter: function (c, t) {
      cfg = c.beads; tr = t; total = cfg.total;
      GZ.$('bdTitle').textContent = cfg.title;
      GZ.$('bdHint').textContent = cfg.hint;
      bdLapLbl.textContent = cfg.lapLabel;
      build();
      pos = Store.cur(tr, 'beadPos') || 0;
      bdLaps.textContent = GZ.num(Store.side(tr).total.laps);
      bdTotal.textContent = GZ.num(Store.side(tr).total.beads);
      paint();
    },
    leave: function () {}
  };
})();
