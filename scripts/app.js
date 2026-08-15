/* ══════════════════════════════════════════
   app.js · 山门 / 殿堂骨架 · 路由 · 公共能力
   ══════════════════════════════════════════ */
(function (global) {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  var GZ = {
    tr: '',
    cfg: null,
    panel: '',
    modules: {},
    $: $,
    el: el,

    /* ── 提示条 ── */
    toast: function (msg) {
      var box = $('toasts');
      if (!box) return;
      var t = el('div', 'toast', msg);
      box.appendChild(t);
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 3000);
    },

    num: function (n) { return (n || 0).toLocaleString('zh-CN'); },

    pick: function (arr) { return arr[Math.floor(Math.random() * arr.length)]; },

    /* 按日期取每日一句 */
    daily: function (arr) {
      var d = new Date();
      var idx = (d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) % arr.length;
      return arr[idx];
    },

    /* ── 功德计数 ── */
    merit: function (n) {
      if (!this.tr) return;
      var v = Store.merit(this.tr, n);
      var box = $('meritVal');
      if (box) {
        box.textContent = this.num(v);
        box.style.transition = 'none';
        box.style.transform = 'scale(1.18)';
        setTimeout(function () { box.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1)'; box.style.transform = 'none'; }, 20);
      }
    },

    refreshMerit: function () {
      if (!this.tr) return;
      $('meritVal').textContent = this.num(Store.side(this.tr).total.merit);
    },

    /* ── 进入殿堂 ── */
    enter: function (tr, panel, silent) {
      var cfg = global.TRADITIONS[tr];
      if (!cfg) return;
      this.tr = tr;
      this.cfg = cfg;
      Store.remember(tr);
      document.body.dataset.tradition = tr;

      $('gate').hidden = true;
      $('hall').hidden = false;
      $('hallName').textContent = cfg.name;
      $('hallSub').textContent = cfg.sub;
      $('meritName').textContent = cfg.meritName;
      this.refreshMerit();
      this.buildRail(cfg);

      var self = this;
      cfg.rituals.forEach(function (r) {
        var m = self.modules[r.id];
        if (m && m.setup) m.setup(cfg, tr);
      });

      this.veil();
      this.go(panel || 'bow', true);
      if (!silent) this.toast(cfg.enter);

      if (Chime.isMuted && !Chime.isMuted() && Store.prefs('amb')) {
        Chime.unlock();
        Chime.ambience(true, tr);
      }
    },

    /* ── 回到山门 ── */
    exit: function () {
      var m = this.modules[this.panel];
      if (m && m.leave) m.leave();
      Chime.ambience(false);
      $('hall').hidden = true;
      $('gate').hidden = false;
      document.body.dataset.tradition = 'gate';
      this.tr = '';
      this.cfg = null;
      this.panel = '';
      if (location.hash !== '#/') history.replaceState(null, '', '#/');
    },

    /* ── 仪轨切换 ── */
    go: function (id, initial) {
      if (!this.cfg) return;
      if (this.panel === id && !initial) return;
      var prev = this.modules[this.panel];
      if (prev && prev.leave) prev.leave();

      this.panel = id;
      var panels = document.querySelectorAll('.panel');
      for (var i = 0; i < panels.length; i++) {
        var on = panels[i].dataset.panel === id;
        panels[i].hidden = !on;
        if (on) {
          panels[i].style.animation = 'none';
          void panels[i].offsetWidth;
          panels[i].style.animation = '';
        }
      }
      var btns = document.querySelectorAll('#rail button');
      for (var j = 0; j < btns.length; j++) {
        btns[j].classList.toggle('on', btns[j].dataset.go === id);
      }
      $('stage').scrollTop = 0;

      var m = this.modules[id];
      if (m && m.enter) m.enter(this.cfg, this.tr);

      var want = '#/' + this.tr + (id === 'bow' ? '' : '/' + id);
      if (location.hash !== want) history.replaceState(null, '', want);
    },

    buildRail: function (cfg) {
      var rail = $('rail');
      rail.innerHTML = '';
      var self = this;
      cfg.rituals.forEach(function (r) {
        var b = el('button');
        b.type = 'button';
        b.dataset.go = r.id;
        b.appendChild(el('i', null, r.glyph));
        b.appendChild(el('em', null, r.label));
        b.addEventListener('click', function () { Chime.unlock(); self.go(r.id); });
        rail.appendChild(b);
      });
    },

    /* 入殿的一层光幕 */
    veil: function () {
      var v = el('div', 'veil');
      document.body.appendChild(v);
      setTimeout(function () { if (v.parentNode) v.parentNode.removeChild(v); }, 1100);
    },

    /* ── 启动 ── */
    boot: function () {
      var self = this;

      var q = this.daily(global.TRADITIONS.buddha.quotes.concat(global.TRADITIONS.tao.quotes));
      $('gateQuote').textContent = q.t + '　—— ' + q.f;

      var doors = document.querySelectorAll('[data-enter]');
      for (var i = 0; i < doors.length; i++) {
        (function (d) {
          d.addEventListener('click', function () {
            Chime.unlock();
            self.enter(d.dataset.enter);
          });
        })(doors[i]);
      }

      $('backBtn').addEventListener('click', function () { self.exit(); });
      $('switchBtn').addEventListener('click', function () { self.exit(); });

      /* 法音 */
      var muteBtn = $('muteBtn');
      var applyMute = function (m) {
        Store.prefs('muted', m);
        Chime.setMuted(m);
        muteBtn.textContent = m ? '法音 关' : '法音 开';
        muteBtn.setAttribute('aria-pressed', m ? 'true' : 'false');
        if (m) {
          $('ambBtn').textContent = '禅境 关';
          $('ambBtn').setAttribute('aria-pressed', 'false');
        }
      };
      applyMute(!!Store.prefs('muted'));
      muteBtn.addEventListener('click', function () { applyMute(!Store.prefs('muted')); });

      /* 禅境底噪 */
      var ambBtn = $('ambBtn');
      ambBtn.addEventListener('click', function () {
        Chime.unlock();
        var want = !Store.prefs('amb');
        if (want && Store.prefs('muted')) applyMute(false);
        var ok = Chime.ambience(want, self.tr);
        Store.prefs('amb', want && ok);
        ambBtn.textContent = (want && ok) ? '禅境 开' : '禅境 关';
        ambBtn.setAttribute('aria-pressed', (want && ok) ? 'true' : 'false');
      });

      /* 各仪轨模块初始化 */
      Object.keys(this.modules).forEach(function (k) {
        var m = self.modules[k];
        if (m.init) m.init();
      });

      /* 路由 */
      var route = function () {
        var parts = (location.hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
        if (!parts.length || !global.TRADITIONS[parts[0]]) {
          if (self.tr) self.exit();
          return;
        }
        var tr = parts[0], p = parts[1] || 'bow';
        if (self.tr !== tr) self.enter(tr, p, true);
        else self.go(p);
      };
      global.addEventListener('hashchange', route);
      route();

      /* 页面隐藏时停掉自动敲击与底噪 */
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          var m = self.modules.knock;
          if (m && m.stopAuto) m.stopAuto();
        }
      });
    }
  };

  global.GZ = GZ;
  document.addEventListener('DOMContentLoaded', function () { GZ.boot(); });
})(window);
