/* ══════════════════════════════════════════
   mod-incense.js · 上香 / 焚香（点香 + 青烟 + 供品 + 心愿）
   ══════════════════════════════════════════ */
(function () {
  'use strict';
  var smoke, offerRow, sticksBox, offerPick, wishText, wishBtn, incToday, incTotal, offerCount, wishList;
  var cfg, tr, lit = [], raf = 0, running = false, parts = [], dpr = 1;

  function litCount() { return lit.length; }
  function curOffer() { return Store.cur(tr, 'offerings') || []; }

  function buildSticks() {
    sticksBox.innerHTML = '';
    for (var i = 0; i < cfg.sticks.length; i++) {
      (function (i) {
        var s = GZ.el('div', 'stick'); s.dataset.i = i;
        s.appendChild(GZ.el('div', 's-rod'));
        s.appendChild(GZ.el('div', 's-tip'));
        s.appendChild(GZ.el('div', 's-label', cfg.sticks[i]));
        if (lit.indexOf(i) >= 0) s.classList.add('lit');
        sticksBox.appendChild(s);
      })(i);
    }
  }

  function light(i) {
    if (lit.indexOf(i) >= 0) return;
    lit.push(i);
    Store.cur(tr, 'litSticks', lit.slice());
    var s = sticksBox.querySelector('.stick[data-i="' + i + '"]');
    if (s) { s.classList.add('lit', 'spark'); setTimeout(function () { s.classList.remove('spark'); }, 500); }
    Store.add(tr, 'incense', 1); GZ.merit(1); Chime.ignite();
    incToday.textContent = GZ.num(Store.side(tr).day.incense);
    incTotal.textContent = GZ.num(Store.side(tr).total.incense);
    if (lit.length === cfg.sticks.length) GZ.toast(cfg.allLit);
    ensureRun();
  }

  function buildOfferings() {
    offerPick.innerHTML = '';
    cfg.offerings.forEach(function (o) {
      var chip = GZ.el('button', 'chip', o.label); chip.type = 'button'; chip.dataset.id = o.id;
      if (curOffer().indexOf(o.id) >= 0) chip.classList.add('on');
      chip.addEventListener('click', function () { toggleOffer(o, chip); });
      offerPick.appendChild(chip);
    });
    renderOfferRow();
  }
  function toggleOffer(o, chip) {
    var arr = curOffer().slice(), idx = arr.indexOf(o.id);
    if (idx >= 0) { arr.splice(idx, 1); chip.classList.remove('on'); }
    else { arr.push(o.id); chip.classList.add('on'); }
    Store.cur(tr, 'offerings', arr); renderOfferRow();
    offerCount.textContent = arr.length;
    if (idx < 0) { GZ.merit(1); if (Chime.bead) Chime.bead(); }
  }
  function renderOfferRow() {
    offerRow.innerHTML = '';
    curOffer().forEach(function (id) {
      var o = null;
      for (var k = 0; k < cfg.offerings.length; k++) if (cfg.offerings[k].id === id) o = cfg.offerings[k];
      if (!o) return;
      offerRow.appendChild(GZ.el('div', 'of-item', o.glyph));
    });
    offerCount.textContent = curOffer().length;
  }

  function fmt(ts) {
    var d = new Date(ts);
    return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  }
  function renderWishes() {
    wishList.innerHTML = '';
    var ws = Store.side(tr).wishes;
    for (var i = 0; i < ws.length; i++) {
      var li = GZ.el('li');
      li.appendChild(GZ.el('time', null, fmt(ws[i].t)));
      li.appendChild(GZ.el('p', null, ws[i].text));
      wishList.appendChild(li);
    }
  }
  function submitWish() {
    var txt = (wishText.value || '').trim();
    if (!txt) { GZ.toast('书心中所愿，再敬献'); return; }
    Store.wish(tr, txt);
    rise(txt); wishText.value = ''; renderWishes();
    GZ.merit(1); if (Chime.bead) Chime.bead(); GZ.toast(cfg.wishDone);
  }
  function rise(text) {
    var r = GZ.el('div', 'rise', text);
    r.style.left = '50%'; r.style.top = '56%';
    document.body.appendChild(r);
    setTimeout(function () { if (r.parentNode) r.parentNode.removeChild(r); }, 3500);
  }

  /* ── 青烟 canvas ── */
  function sizeCanvas() {
    var w = smoke.clientWidth, h = smoke.clientHeight;
    if (!w || !h) return;
    dpr = window.devicePixelRatio || 1;
    smoke.width = Math.round(w * dpr); smoke.height = Math.round(h * dpr);
    var c = smoke.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function spawn() {
    var w = smoke.clientWidth, h = smoke.clientHeight;
    parts.push({
      x: w / 2 + (Math.random() - 0.5) * w * 0.16, y: h * 0.5,
      vy: 0.35 + Math.random() * 0.5, drift: (Math.random() - 0.5) * 0.25,
      life: 1, size: 8 + Math.random() * 10, sway: Math.random() * 6.28
    });
  }
  function frame() {
    var c = smoke.getContext('2d'), w = smoke.clientWidth, h = smoke.clientHeight;
    c.clearRect(0, 0, w, h);
    if (litCount() > 0 && parts.length < 70 && Math.random() < 0.7) spawn();
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i];
      p.sway += 0.02; p.y -= p.vy; p.x += p.drift + Math.sin(p.sway) * 0.3;
      p.life -= 0.006; p.size += 0.25;
      if (p.life <= 0 || p.y < -20) { parts.splice(i, 1); continue; }
      var a = p.life * 0.22;
      var g = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      g.addColorStop(0, 'rgba(236,214,176,' + a + ')');
      g.addColorStop(1, 'rgba(236,214,176,0)');
      c.fillStyle = g; c.beginPath(); c.arc(p.x, p.y, p.size, 0, 6.2832); c.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  function ensureRun() {
    if (running) return;
    running = true; sizeCanvas(); raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false; cancelAnimationFrame(raf);
    var c = smoke.getContext('2d'); c.clearRect(0, 0, smoke.clientWidth, smoke.clientHeight); parts = [];
  }

  GZ.modules.incense = {
    init: function () {
      smoke = GZ.$('smoke'); offerRow = GZ.$('offerRow'); sticksBox = GZ.$('sticks');
      offerPick = GZ.$('offerPick'); wishText = GZ.$('wishText'); wishBtn = GZ.$('wishBtn');
      incToday = GZ.$('incToday'); incTotal = GZ.$('incTotal');
      offerCount = GZ.$('offerCount'); wishList = GZ.$('wishList');
      sticksBox.addEventListener('click', function (e) {
        var s = e.target.closest ? e.target.closest('.stick') : null;
        if (!s) return; Chime.unlock(); light(+s.dataset.i);
      });
      wishBtn.addEventListener('click', submitWish);
      wishText.addEventListener('keydown', function (e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') submitWish();
      });
    },
    setup: function (c, t) { cfg = c.incense; tr = t; },
    enter: function (c, t) {
      cfg = c.incense; tr = t;
      GZ.$('incTitle').textContent = cfg.title;
      GZ.$('incHint').textContent = cfg.hint;
      wishText.placeholder = cfg.wishPlaceholder;
      lit = (Store.cur(tr, 'litSticks') || []).slice();
      buildSticks(); buildOfferings(); renderWishes();
      incToday.textContent = GZ.num(Store.side(tr).day.incense);
      incTotal.textContent = GZ.num(Store.side(tr).total.incense);
      offerCount.textContent = curOffer().length;
      if (litCount() > 0) ensureRun();
    },
    leave: function () { stop(); }
  };
})();
