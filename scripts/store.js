/* ══════════════════════════════════════════
   store.js · 修行记录（localStorage 持久化）
   ══════════════════════════════════════════ */
(function (global) {
  'use strict';

  var KEY = 'guanzizai.v1';

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function blankSide() {
    return {
      total: { bows: 0, rounds: 0, incense: 0, knocks: 0, knockRounds: 0, beads: 0, laps: 0, merit: 0, dedications: 0 },
      day: { date: today(), bows: 0, incense: 0, knocks: 0, beads: 0 },
      cur: { bowSeq: 0, beadPos: 0, knockNow: 0, offerings: [], litSticks: [] },
      wishes: []
    };
  }

  function blank() {
    return { v: 1, prefs: { muted: false, amb: false, tempo: 66 }, last: '', buddha: blankSide(), tao: blankSide() };
  }

  /* 深度补全，防止旧数据缺字段 */
  function fill(target, shape) {
    Object.keys(shape).forEach(function (k) {
      var s = shape[k];
      if (s && typeof s === 'object' && !Array.isArray(s)) {
        if (!target[k] || typeof target[k] !== 'object') target[k] = {};
        fill(target[k], s);
      } else if (Array.isArray(s)) {
        if (!Array.isArray(target[k])) target[k] = s.slice();
      } else if (typeof target[k] !== typeof s) {
        target[k] = s;
      }
    });
    return target;
  }

  var state;
  try {
    var raw = global.localStorage ? global.localStorage.getItem(KEY) : null;
    state = raw ? fill(JSON.parse(raw), blank()) : blank();
  } catch (e) {
    state = blank();
  }

  var timer = null;
  function save() {
    if (timer) return;
    timer = setTimeout(function () {
      timer = null;
      try { global.localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 无痕模式下静默 */ }
    }, 260);
  }

  function side(tr) {
    var s = state[tr] || (state[tr] = blankSide());
    if (s.day.date !== today()) {
      s.day = { date: today(), bows: 0, incense: 0, knocks: 0, beads: 0 };
      s.cur = { bowSeq: 0, beadPos: 0, knockNow: 0, offerings: [], litSticks: [] };
      save();
    }
    return s;
  }

  var Store = {
    state: state,
    today: today,

    side: side,

    /* 累计 + 今日 同步递增 */
    add: function (tr, key, n) {
      n = n == null ? 1 : n;
      var s = side(tr);
      if (key in s.total) s.total[key] += n;
      if (key in s.day) s.day[key] += n;
      save();
      return s;
    },

    merit: function (tr, n) {
      var s = side(tr);
      s.total.merit = Math.max(0, s.total.merit + n);
      save();
      return s.total.merit;
    },

    cur: function (tr, key, val) {
      var s = side(tr);
      if (arguments.length >= 3) { s.cur[key] = val; save(); }
      return s.cur[key];
    },

    wish: function (tr, text) {
      var s = side(tr);
      s.wishes.unshift({ t: Date.now(), text: text });
      if (s.wishes.length > 30) s.wishes.length = 30;
      save();
      return s.wishes;
    },

    prefs: function (key, val) {
      if (arguments.length >= 2) { state.prefs[key] = val; save(); }
      return state.prefs[key];
    },

    remember: function (tr) { state.last = tr; save(); },

    clearSide: function (tr) {
      state[tr] = blankSide();
      save();
      return state[tr];
    },

    flush: function () {
      try { global.localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    }
  };

  global.addEventListener('pagehide', Store.flush);
  global.Store = Store;
})(window);
