/* ══════════════════════════════════════════
   audio.js · 法器音效（Web Audio 实时合成，无外部音频文件）
   木鱼 / 云磬 / 引磬 / 道钟 / 拨珠 / 点香 / 禅境底噪
   ══════════════════════════════════════════ */
(function (global) {
  'use strict';

  var ctx = null, master = null, muted = false, noiseBuf = null;
  var amb = null, ambTimer = null;

  function ensure() {
    if (ctx) return ctx;
    var AC = global.AudioContext || global.webkitAudioContext;
    if (!AC) return null;
    try {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = muted ? 0 : 0.85;
      master.connect(ctx.destination);
    } catch (e) { ctx = null; }
    return ctx;
  }

  function noise() {
    if (noiseBuf) return noiseBuf;
    var len = Math.floor(ctx.sampleRate * 2.2);
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0), last = 0;
    for (var i = 0; i < len; i++) {
      var w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;      /* 偏棕噪，听感更柔 */
      d[i] = w * 0.55 + last * 3.2;
    }
    return noiseBuf;
  }

  function burst(dur, type, freq, q, gain, when) {
    var src = ctx.createBufferSource();
    src.buffer = noise();
    src.playbackRate.value = 1;
    src.loop = true;
    var f = ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; if (q) f.Q.value = q;
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(gain, when + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(when, Math.random() * 1.5);
    src.stop(when + dur + 0.05);
    return f;
  }

  function tone(freq, dur, gain, when, type, glideTo) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, when);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, when + dur * 0.7);
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(gain, when + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    o.connect(g); g.connect(master);
    o.start(when); o.stop(when + dur + 0.05);
    return o;
  }

  /* 钟磬类：非谐分音叠加 */
  function metal(f0, dur, gain, when, partials) {
    partials = partials || [[1, 1], [2.02, 0.46], [2.99, 0.26], [4.32, 0.15], [5.71, 0.09]];
    partials.forEach(function (p, i) {
      tone(f0 * p[0] * (1 + (Math.random() - 0.5) * 0.004), dur * (1 - i * 0.13), gain * p[1], when, 'sine');
    });
    burst(0.05, 'highpass', f0 * 1.6, 0.7, gain * 0.3, when);
  }

  var API = {
    unlock: function () {
      var c = ensure();
      if (c && c.state === 'suspended') c.resume();
      return !!c;
    },

    setMuted: function (m) {
      muted = !!m;
      if (master) master.gain.setTargetAtTime(muted ? 0 : 0.85, ctx.currentTime, 0.05);
      if (muted) API.ambience(false);
    },

    isMuted: function () { return muted; },

    /* 木鱼：一记短促的空腔敲击 */
    woodfish: function (vel) {
      if (!ensure() || muted) return;
      var t = ctx.currentTime + 0.001, v = 0.8 + (vel || 0) * 0.2;
      burst(0.055, 'bandpass', 1650, 1.8, 0.42 * v, t);
      tone(320, 0.17, 0.5 * v, t, 'triangle', 215);
      tone(640, 0.075, 0.14 * v, t, 'sine');
      tone(148, 0.13, 0.2 * v, t, 'sine');
    },

    /* 云磬：金石清越，余韵稍长 */
    qing: function () {
      if (!ensure() || muted) return;
      var t = ctx.currentTime + 0.001;
      metal(1512, 1.9, 0.2, t, [[1, 1], [2.41, 0.42], [3.86, 0.22], [5.2, 0.12]]);
      tone(756, 0.5, 0.06, t, 'sine');
    },

    /* 引磬：礼佛时的高清一声 */
    inqing: function () {
      if (!ensure() || muted) return;
      metal(1180, 3.2, 0.17, ctx.currentTime + 0.001);
    },

    /* 道钟：低沉悠长 */
    bell: function () {
      if (!ensure() || muted) return;
      var t = ctx.currentTime + 0.001;
      metal(322, 4.6, 0.17, t, [[1, 1], [1.51, 0.5], [2.42, 0.3], [3.6, 0.16], [4.9, 0.08]]);
      tone(161, 3.4, 0.09, t, 'sine');
    },

    /* 圆满提示：三声递进 */
    fulfil: function (kind) {
      if (!ensure() || muted) return;
      var t = ctx.currentTime + 0.001, f = kind === 'tao' ? 392 : 523.25;
      [0, 0.42, 0.9].forEach(function (d, i) {
        metal(f * (i === 2 ? 2 : i === 1 ? 1.5 : 1), 2.6 + i * 0.6, 0.13, t + d);
      });
    },

    /* 拨珠：极短的木质轻响 */
    bead: function () {
      if (!ensure() || muted) return;
      var t = ctx.currentTime + 0.001;
      burst(0.016, 'highpass', 2600, 0.8, 0.16, t);
      tone(880 + Math.random() * 120, 0.035, 0.09, t, 'triangle');
    },

    /* 点香：擦亮与燃起 */
    ignite: function () {
      if (!ensure() || muted) return;
      var t = ctx.currentTime + 0.001;
      var f = burst(0.6, 'lowpass', 700, 0.9, 0.14, t);
      try {
        f.frequency.setValueAtTime(420, t);
        f.frequency.linearRampToValueAtTime(2400, t + 0.09);
        f.frequency.exponentialRampToValueAtTime(360, t + 0.6);
      } catch (e) {}
      tone(196, 0.3, 0.05, t, 'sine');
    },

    /* 禅境底噪：低频持续音 + 远处的钟 */
    ambience: function (on, kind) {
      if (!on) {
        if (ambTimer) { clearTimeout(ambTimer); ambTimer = null; }
        if (amb) {
          try {
            amb.gain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.6);
            var nodes = amb;
            setTimeout(function () {
              try { nodes.src.stop(); nodes.oscs.forEach(function (o) { o.stop(); }); } catch (e) {}
            }, 2200);
          } catch (e) {}
          amb = null;
        }
        return false;
      }
      if (!ensure() || muted) return false;
      if (amb) return true;

      var t = ctx.currentTime;
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(kind === 'tao' ? 0.05 : 0.045, t + 3);
      g.connect(master);

      var src = ctx.createBufferSource();
      src.buffer = noise(); src.loop = true;
      var lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = kind === 'tao' ? 620 : 380;
      var ng = ctx.createGain();
      ng.gain.value = kind === 'tao' ? 0.5 : 0.32;
      src.connect(lp); lp.connect(ng); ng.connect(g);
      src.start(t);

      var base = kind === 'tao' ? 146.8 : 110;
      var oscs = [base, base * 1.005, base * 2].map(function (f, i) {
        var o = ctx.createOscillator(), og = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        og.gain.value = i === 2 ? 0.06 : 0.16;
        o.connect(og); og.connect(g); o.start(t);
        return o;
      });

      /* 缓慢的呼吸式起伏 */
      var lfo = ctx.createOscillator(), lg = ctx.createGain();
      lfo.frequency.value = 0.055; lg.gain.value = 0.5;
      lfo.connect(lg); lg.connect(g.gain); lfo.start(t);
      oscs.push(lfo);

      amb = { gain: g, src: src, oscs: oscs };

      (function distant() {
        ambTimer = setTimeout(function () {
          if (!amb || muted) return;
          if (kind === 'tao') API.bell(); else API.inqing();
          distant();
        }, 26000 + Math.random() * 22000);
      })();

      return true;
    },

    ambienceOn: function () { return !!amb; }
  };

  global.Chime = API;
})(window);
