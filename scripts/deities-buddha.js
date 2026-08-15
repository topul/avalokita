/* ══════════════════════════════════════════════════════════════
   deities-buddha.js · 佛门神像库（精修版）
   重点：法器放大、手指成形、姿态准确、按各自造像规范
     释迦牟尼 — 肉髻·螺发·右手触地印按地·左手禅定印托钵
     观世音   — 宝冠化佛·左手托净瓶·右手举杨柳枝
     文殊     — 高髻·右手举利剑·左手托经箧
     弥勒     — 笑面大肚·双手抚长念珠·布袋置身侧
     财宝天王 — 兜鍪·左手托宝塔·右手抚吐宝鼠
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ---------- 通用：圆胖手势（拇指 + 四指可辨） ---------- */
  var handR = function (cx, cy, fill, stroke, rot) {
    var g = '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + (rot || 0) + ')">' +
      '<path d="M-16 -8a16 14 0 0 1 30 -4c2 8-2 14-10 18-10 4-22 0-20 -14z" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.2"/>' +
      '<path d="M-2 -16c0 -4 4 -8 8 -6 4 2 2 8 -2 10M4 -18c0 -4 4 -8 8 -6 4 2 2 8 -2 10M10 -16c0 -4 4 -8 8 -6 4 2 2 8 -2 10M14 -10c2 -4 8 -6 10 -2 2 4 -2 8 -6 8" fill="none" stroke="' + stroke + '" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>' +
      '</g>';
    return g;
  };

  /* ═════════ 释迦牟尼佛 ═════════ */
  var shakyamuni = {
    id: 'shakyamuni', title: '本师释迦牟尼佛', short: '释迦牟尼佛', honor: '佛陀', kind: 'fo',
    sound: 'inqing',
    gatha: '天上天下，唯我独尊；三界皆苦，我当安之。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="本师释迦牟尼佛">' +
'<defs>' +
'<radialGradient id="sh_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff4d2" stop-opacity=".55"/><stop offset=".5" stop-color="#eabd63" stop-opacity=".16"/><stop offset="1" stop-color="#eabd63" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="sh_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffeab4" stop-opacity=".9"/><stop offset=".7" stop-color="#e8b657" stop-opacity=".42"/><stop offset="1" stop-color="#caa248" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="sh_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe6b4"/><stop offset=".55" stop-color="#e3bd72"/><stop offset="1" stop-color="#a9802f"/></linearGradient>' +
'<linearGradient id="sh_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#caa14f"/><stop offset="1" stop-color="#8a5f24"/></linearGradient>' +
'<linearGradient id="sh_robe2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcb865"/><stop offset="1" stop-color="#9a6c2a"/></linearGradient>' +
'<linearGradient id="sh_bowl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5dc92"/><stop offset="1" stop-color="#7a5520"/></linearGradient>' +
'</defs>' +
/* 背光 */
'<circle cx="300" cy="210" r="250" fill="url(#sh_g)"/>' +
'<circle cx="300" cy="175" r="150" fill="none" stroke="#f3cd80" stroke-opacity=".28" stroke-width="1" stroke-dasharray="2 9"/>' +
'<circle cx="300" cy="175" r="120" fill="url(#sh_h)"/>' +
'<circle cx="300" cy="175" r="120" fill="none" stroke="#f3cd80" stroke-opacity=".5" stroke-width="1.4"/>' +
/* 莲座 */
'<g class="lotus-seat">' +
'<ellipse cx="300" cy="496" rx="156" ry="30" fill="#8a5f24"/>' +
'<path d="M300 432c-74 0-126 22-154 54 28 18 80 28 154 28s126-10 154-28c-28-32-80-54-154-54z" fill="url(#sh_robe)"/>' +
'<g fill="#e3bd72" stroke="#caa248" stroke-width="1">' +
'<path d="M200 478c-16-22-16-50 0-72 16 22 16 50 0 72z"/>' +
'<path d="M256 466c-14-20-14-46 0-66 14 20 14 46 0 66z"/>' +
'<path d="M300 458c-16-22-16-50 0-72 16 22 16 50 0 72z"/>' +
'<path d="M344 466c14-20 14-46 0-66-14 20-14 46 0 66z"/>' +
'<path d="M400 478c16-22 16-50 0-72-16 22-16 50 0 72z"/>' +
'</g></g>' +
/* 身躯（双肩到膝） */
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#sh_robe)"/>' +
/* 胸前领襟 + 衣纹 */
'<path d="M252 258c-6 36 0 90 16 130 14 12 50 12 64 0 16-40 22-94 16-130-12 8-26 12-48 12s-36-4-48-12z" fill="url(#sh_robe2)" opacity=".55"/>' +
'<g fill="none" stroke="#6b4a1d" stroke-opacity=".4" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v200"/><path d="M256 320c-10 60-8 142-4 180"/><path d="M344 320c10 60 8 142 4 180"/></g>' +
/* 左袖 → 左手禅定印托钵于腹前 */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#sh_robe)"/>' +
/* 钵（放大） */
'<g class="bowl">' +
'<ellipse cx="244" cy="384" rx="40" ry="11" fill="#7a5520"/>' +
'<path d="M204 376c0-14 18-24 40-24s40 10 40 24c0 18-16 30-40 30s-40-12-40-30z" fill="url(#sh_bowl)" stroke="#6b4a1d" stroke-width="1.6"/>' +
'<ellipse cx="244" cy="376" rx="40" ry="10" fill="#f5dc92" stroke="#8a5f24" stroke-width="1.4"/>' +
'<path d="M212 372c6 4 16 6 32 6s26-2 32-6" fill="none" stroke="#8a5f24" stroke-width="1.2"/>' +
'</g>' +
handR(218, 380, 'url(#sh_skin)', '#a9802f', -8) +
/* 右袖 → 右手触地印，按于右膝外侧地面 */
'<path d="M380 270C416 302 428 348 416 398c-14 14-42 10-52-4-8-22-4-44 0-66 0-18 0-34 16-58z" fill="url(#sh_robe)"/>' +
/* 右膝外伸 + 指地手掌 */
'<path d="M380 430c30 -8 56 -2 70 12 -8 14-30 22-54 18 -16 -2 -22 -14 -16 -30z" fill="url(#sh_robe)"/>' +
handR(440, 446, 'url(#sh_skin)', '#a9802f', 22) +
'<g fill="none" stroke="#8a5f24" stroke-width="1.4" stroke-linecap="round"><path d="M430 454l8 4M440 458l8 2M448 458l8 0"/></g>' +
/* 颈 + 头 + 肉髻螺发 */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#sh_skin)"/>' +
'<path d="M244 166c0-44 26-78 56-78s56 34 56 78c0 42-24 72-56 72s-56-30-56-72z" fill="url(#sh_skin)"/>' +
/* 螺发小卷（密集点） */
'<g fill="#a9802f" opacity=".55">' +
'<circle cx="258" cy="130" r="3"/><circle cx="272" cy="118" r="3"/><circle cx="288" cy="110" r="3"/><circle cx="302" cy="106" r="3"/><circle cx="316" cy="110" r="3"/><circle cx="332" cy="118" r="3"/><circle cx="346" cy="130" r="3"/>' +
'<circle cx="252" cy="148" r="3"/><circle cx="262" cy="138" r="3"/><circle cx="276" cy="128" r="3"/><circle cx="294" cy="120" r="3"/><circle cx="310" cy="120" r="3"/><circle cx="326" cy="128" r="3"/><circle cx="340" cy="138" r="3"/><circle cx="350" cy="148" r="3"/>' +
'</g>' +
/* 肉髻 */
'<path d="M278 92c0-20 10-38 22-38s22 18 22 38c-8-8-14-12-22-12s-14 4-22 12z" fill="url(#sh_skin)" stroke="#a9802f" stroke-width="1"/>' +
'<circle cx="300" cy="58" r="5" fill="#f5dc92"/>' +
/* 耳 + 白毫 + 眉眼 + 鼻 + 唇 */
'<path d="M244 172c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#sh_skin)" stroke="#a9802f" stroke-width="1.2"/>' +
'<path d="M356 172c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#sh_skin)" stroke="#a9802f" stroke-width="1.2"/>' +
'<circle cx="300" cy="150" r="4" fill="#fff7e0"/>' +
'<path d="M268 160c9-5 18-5 26 0M306 160c9-5 18-5 26 0" fill="none" stroke="#5a3a14" stroke-width="2.6" stroke-linecap="round"/>' +
'<path d="M270 172c9 5 18 5 26 0M304 172c9 5 18 5 26 0" fill="none" stroke="#2a1808" stroke-width="2.6" stroke-linecap="round"/>' +
'<path d="M298 166c-2 6-2 12 0 18" fill="none" stroke="#7a5520" stroke-width="1.8" stroke-linecap="round"/>' +
'<path d="M284 202c9 6 22 6 32 0" fill="none" stroke="#6b4a1d" stroke-width="2.6" stroke-linecap="round"/>' +
'</svg>'
  };

  /* ═════════ 观世音菩萨 ═════════ */
  var guanyin = {
    id: 'guanyin', title: '观世音菩萨', short: '观世音菩萨', honor: '菩萨', kind: 'pu',
    sound: 'inqing',
    gatha: '瓶中甘露，遍洒人间；苦海常作渡人舟。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="观世音菩萨">' +
'<defs>' +
'<radialGradient id="gy_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff3da" stop-opacity=".55"/><stop offset=".5" stop-color="#e7c07a" stop-opacity=".16"/><stop offset="1" stop-color="#e7c07a" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="gy_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff0c6" stop-opacity=".9"/><stop offset=".7" stop-color="#e9c884" stop-opacity=".42"/><stop offset="1" stop-color="#c9a85a" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="gy_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdecc8"/><stop offset=".55" stop-color="#eccb8e"/><stop offset="1" stop-color="#bd9350"/></linearGradient>' +
'<linearGradient id="gy_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3e6cf"/><stop offset="1" stop-color="#c2a878"/></linearGradient>' +
'<linearGradient id="gy_vase" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff5d8"/><stop offset=".5" stop-color="#e0c98c"/><stop offset="1" stop-color="#7a5a2a"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#gy_g)"/>' +
'<circle cx="300" cy="175" r="150" fill="none" stroke="#e9c884" stroke-opacity=".28" stroke-width="1" stroke-dasharray="2 9"/>' +
'<circle cx="300" cy="175" r="120" fill="url(#gy_h)"/>' +
'<circle cx="300" cy="175" r="120" fill="none" stroke="#e9c884" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="lotus-seat"><ellipse cx="300" cy="496" rx="152" ry="30" fill="#a98f5e"/><path d="M300 432c-72 0-122 22-150 54 28 18 78 28 150 28s122-10 150-28c-28-32-78-54-150-54z" fill="url(#gy_robe)"/><g fill="#f3e6cf" stroke="#c2a878" stroke-width="1"><path d="M204 480c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M258 468c-14-20-14-46 0-66 14 20 14 46 0 66z"/><path d="M300 460c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M342 468c14-20 14-46 0-66-14 20-14 46 0 66z"/><path d="M396 480c16-22 16-50 0-72-16 22-16 50 0 72z"/></g></g>' +
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#gy_robe)"/>' +
'<g fill="none" stroke="#a98c54" stroke-opacity=".4" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v200"/><path d="M256 320c-10 60-8 142-4 180"/><path d="M344 320c10 60 8 142 4 180"/></g>' +
/* 左袖 → 左手托净瓶（放大、有瓶口与杨柳） */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#gy_robe)"/>' +
'<g class="vase">' +
'<ellipse cx="218" cy="354" rx="32" ry="8" fill="#a98f5e" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<path d="M188 352c-6-22 4-40 30-40s36 18 30 40c-2 30-14 60-30 60s-28-30-30-60z" fill="url(#gy_vase)" stroke="#7a5a2a" stroke-width="1.6"/>' +
'<path d="M186 360c-2 28 10 56 32 56s34-28 32-56" fill="none" stroke="#7a5a2a" stroke-width="1.4" opacity=".6"/>' +
'<ellipse cx="218" cy="316" rx="20" ry="6" fill="#a98f5e" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<rect x="214" y="306" width="8" height="14" fill="#7a5a2a"/>' +
/* 瓶口杨柳 */
'<path d="M218 308c-4-30-2-60 12-86" fill="none" stroke="#6f9a5a" stroke-width="3" stroke-linecap="round"/>' +
'<g fill="#7fae66"><circle cx="234" cy="226" r="4.5"/><circle cx="226" cy="248" r="4.2"/><circle cx="232" cy="268" r="4"/><circle cx="220" cy="288" r="3.6"/></g>' +
'</g>' +
handR(192, 412, 'url(#gy_skin)', '#bd9350', 6) +
/* 右袖 → 右上举，右手举杨柳枝（放大、有叶） */
'<path d="M380 270C412 246 426 208 416 170c-10-18-32-16-38 4-4 22 0 44-6 64-4 14-8 30-10 50z" fill="url(#gy_robe)"/>' +
'<g class="willow">' +
'<path d="M404 156c-4-44 6-86 26-122" fill="none" stroke="#6f9a5a" stroke-width="3.6" stroke-linecap="round"/>' +
'<g fill="#7fae66"><circle cx="408" cy="56" r="5"/><circle cx="416" cy="80" r="4.6"/><circle cx="420" cy="106" r="4.4"/><circle cx="424" cy="132" r="4"/><circle cx="418" cy="156" r="4"/></g>' +
'</g>' +
handR(396, 156, 'url(#gy_skin)', '#bd9350', -10) +
/* 颈 + 头 + 宝冠藏化佛 */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#gy_skin)"/>' +
'<path d="M248 168c0-42 24-76 52-76s52 34 52 76c0 42-22 70-52 70s-52-28-52-70z" fill="url(#gy_skin)"/>' +
/* 宝冠 */
'<path d="M258 118c0-24 18-42 42-42s42 18 42 42c-12-10-24-14-42-14s-30 4-42 14z" fill="#caa24a" stroke="#9a6c2a" stroke-width="1.6"/>' +
'<rect x="246" y="106" width="108" height="10" rx="3" fill="#caa24a" stroke="#9a6c2a" stroke-width="1.2"/>' +
/* 化佛 */
'<circle cx="300" cy="88" r="11" fill="#f3e6cf" stroke="#9a6c2a" stroke-width="1.4"/>' +
'<circle cx="300" cy="88" r="4" fill="#caa24a"/>' +
'<path d="M248 174c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#gy_skin)" stroke="#bd9350" stroke-width="1.2"/>' +
'<path d="M352 174c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#gy_skin)" stroke="#bd9350" stroke-width="1.2"/>' +
'<circle cx="300" cy="150" r="4" fill="#fff7e0"/>' +
'<path d="M268 162c9-5 18-5 26 0M306 162c9-5 18-5 26 0" fill="none" stroke="#7a5a2a" stroke-width="2.5" stroke-linecap="round"/>' +
'<path d="M270 174c9 5 18 5 26 0M304 174c9 5 18 5 26 0" fill="none" stroke="#3a2710" stroke-width="2.4" stroke-linecap="round"/>' +
'<path d="M298 166c-2 6-2 12 0 18" fill="none" stroke="#a9802f" stroke-width="1.8" stroke-linecap="round"/>' +
'<path d="M286 202c9 5 18 5 28 0" fill="none" stroke="#9a6c34" stroke-width="2.4" stroke-linecap="round"/>' +
'</svg>'
  };

  /* ═════════ 文殊师利菩萨 ═════════ */
  var wenshu = {
    id: 'wenshu', title: '文殊师利菩萨', short: '文殊菩萨', honor: '菩萨', kind: 'pu',
    sound: 'inqing',
    gatha: '手持利剑，断诸烦恼；常驻般若，照见实相。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="文殊菩萨">' +
'<defs>' +
'<radialGradient id="ws_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff3da" stop-opacity=".55"/><stop offset=".5" stop-color="#e7c07a" stop-opacity=".16"/><stop offset="1" stop-color="#e7c07a" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="ws_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff0c6" stop-opacity=".9"/><stop offset=".7" stop-color="#e9c884" stop-opacity=".42"/><stop offset="1" stop-color="#c9a85a" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="ws_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdecc8"/><stop offset=".55" stop-color="#eccb8e"/><stop offset="1" stop-color="#bd9350"/></linearGradient>' +
'<linearGradient id="ws_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef0e6"/><stop offset="1" stop-color="#b6bca0"/></linearGradient>' +
'<linearGradient id="ws_blade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fafcfe"/><stop offset=".5" stop-color="#cfd6dc"/><stop offset="1" stop-color="#7e8a96"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#ws_g)"/>' +
'<circle cx="300" cy="175" r="150" fill="none" stroke="#e9c884" stroke-opacity=".28" stroke-width="1" stroke-dasharray="2 9"/>' +
'<circle cx="300" cy="175" r="120" fill="url(#ws_h)"/>' +
'<circle cx="300" cy="175" r="120" fill="none" stroke="#e9c884" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="lotus-seat"><ellipse cx="300" cy="496" rx="152" ry="30" fill="#9aa07e"/><path d="M300 432c-72 0-122 22-150 54 28 18 78 28 150 28s122-10 150-28c-28-32-78-54-150-54z" fill="url(#ws_robe)"/><g fill="#eef0e6" stroke="#b6bca0" stroke-width="1"><path d="M204 480c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M258 468c-14-20-14-46 0-66 14 20 14 46 0 66z"/><path d="M300 460c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M342 468c14-20 14-46 0-66-14 20-14 46 0 66z"/><path d="M396 480c16-22 16-50 0-72-16 22-16 50 0 72z"/></g></g>' +
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#ws_robe)"/>' +
'<g fill="none" stroke="#9aa07e" stroke-opacity=".45" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v200"/><path d="M256 320c-10 60-8 142-4 180"/><path d="M344 320c10 60 8 142 4 180"/></g>' +
/* 左袖 → 左手托经箧（放大，书页可见） */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#ws_robe)"/>' +
'<g class="scroll">' +
'<rect x="174" y="380" width="104" height="32" rx="6" fill="#f3e6cf" stroke="#9a6c2a" stroke-width="1.6"/>' +
'<rect x="174" y="380" width="20" height="32" rx="6" fill="#caa24a"/>' +
'<rect x="258" y="380" width="20" height="32" rx="6" fill="#caa24a"/>' +
'<g stroke="#9a6c2a" stroke-width="1.2"><line x1="200" y1="390" x2="252" y2="390"/><line x1="200" y1="396" x2="252" y2="396"/><line x1="200" y1="402" x2="252" y2="402"/></g>' +
'<circle cx="184" cy="396" r="3" fill="#7a5a2a"/>' +
'<circle cx="268" cy="396" r="3" fill="#7a5a2a"/>' +
'</g>' +
handR(196, 414, 'url(#ws_skin)', '#bd9350', 8) +
/* 右袖 → 上举，右手举利剑（放大、剑锋朝上） */
'<path d="M380 270C412 246 426 208 416 170c-10-18-32-16-38 4-4 22 0 44-6 64-4 14-8 30-10 50z" fill="url(#ws_robe)"/>' +
'<g class="sword">' +
/* 剑柄（握处） */
'<rect x="392" y="148" width="22" height="14" rx="3" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.4"/>' +
/* 剑格 */
'<rect x="386" y="142" width="34" height="8" rx="2" fill="#9a6c2a"/>' +
/* 剑身 */
'<path d="M403 148L388 64l16-8 16 8z" fill="url(#ws_blade)" stroke="#7e8a96" stroke-width="1.4"/>' +
'<line x1="403" y1="70" x2="403" y2="146" stroke="#9aa6b0" stroke-width="1.2"/>' +
/* 剑首圆环 */
'<circle cx="403" cy="166" r="6" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.4"/>' +
'</g>' +
handR(403, 168, 'url(#ws_skin)', '#bd9350', 0) +
/* 颈 + 头 + 高髻宝冠 */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#ws_skin)"/>' +
'<path d="M248 168c0-42 24-76 52-76s52 34 52 76c0 42-22 70-52 70s-52-28-52-70z" fill="url(#ws_skin)"/>' +
/* 高髻宝冠（束发高髻） */
'<path d="M286 130c-2-26 6-50 14-66 8 16 16 40 14 66-6-6-14-10-14-10s-8 4-14 10z" fill="#caa24a" stroke="#9a6c2a" stroke-width="1.4"/>' +
'<path d="M262 116c0-22 16-38 38-38s38 16 38 38c-12-8-22-12-38-12s-26 4-38 12z" fill="#caa24a" stroke="#9a6c2a" stroke-width="1.4"/>' +
'<circle cx="300" cy="96" r="8" fill="#e9c884"/>' +
'<path d="M248 174c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#ws_skin)" stroke="#bd9350" stroke-width="1.2"/>' +
'<path d="M352 174c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#ws_skin)" stroke="#bd9350" stroke-width="1.2"/>' +
'<circle cx="300" cy="150" r="4" fill="#fff7e0"/>' +
'<path d="M268 162c9-5 18-5 26 0M306 162c9-5 18-5 26 0" fill="none" stroke="#7a5a2a" stroke-width="2.5" stroke-linecap="round"/>' +
'<path d="M270 174c9 5 18 5 26 0M304 174c9 5 18 5 26 0" fill="none" stroke="#3a2710" stroke-width="2.4" stroke-linecap="round"/>' +
'<path d="M298 166c-2 6-2 12 0 18" fill="none" stroke="#a9802f" stroke-width="1.8" stroke-linecap="round"/>' +
'<path d="M286 202c9 5 18 5 28 0" fill="none" stroke="#9a6c34" stroke-width="2.4" stroke-linecap="round"/>' +
'</svg>'
  };

  /* ═════════ 弥勒菩萨（笑口财神） ═════════ */
  var mile = {
    id: 'mile', title: '弥勒菩萨', short: '弥勒菩萨', honor: '菩萨 · 笑口财神', kind: 'cai',
    sound: 'inqing',
    gatha: '大肚能容，容天下难容之事；笑口常开，笑世间可笑之人。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="弥勒菩萨">' +
'<defs>' +
'<radialGradient id="ml_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#fff4d2" stop-opacity=".55"/><stop offset=".5" stop-color="#eabd63" stop-opacity=".16"/><stop offset="1" stop-color="#eabd63" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="ml_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffeab4" stop-opacity=".88"/><stop offset=".7" stop-color="#e8b657" stop-opacity=".42"/><stop offset="1" stop-color="#caa248" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="ml_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe6b4"/><stop offset=".55" stop-color="#e9c47a"/><stop offset="1" stop-color="#bd9346"/></linearGradient>' +
'<linearGradient id="ml_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d99a4e"/><stop offset="1" stop-color="#8f5a22"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#ml_g)"/>' +
'<circle cx="300" cy="180" r="156" fill="none" stroke="#f3cd80" stroke-opacity=".28" stroke-width="1" stroke-dasharray="2 9"/>' +
'<circle cx="300" cy="180" r="124" fill="url(#ml_h)"/>' +
'<circle cx="300" cy="180" r="124" fill="none" stroke="#f3cd80" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="lotus-seat"><ellipse cx="300" cy="500" rx="160" ry="30" fill="#8f5a22"/><path d="M300 440c-76 0-130 22-158 54 30 18 82 28 158 28s128-10 158-28c-28-32-82-54-158-54z" fill="url(#ml_robe)"/><g fill="#e3bd72" stroke="#caa248" stroke-width="1"><path d="M198 482c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M300 470c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M402 482c16-22 16-50 0-72-16 22-16 50 0 72z"/></g></g>' +
/* 身躯袒腹 */
'<path d="M192 290C182 344 164 410 156 472c24 22 120 32 144 32s120-10 144-32c-8-62-26-130-36-184-10-32-34-52-80-52s-70 20-80 52z" fill="url(#ml_robe)"/>' +
/* 大肚 */
'<ellipse cx="300" cy="410" rx="108" ry="82" fill="url(#ml_skin)"/>' +
'<ellipse cx="300" cy="410" rx="108" ry="82" fill="none" stroke="#bd9346" stroke-opacity=".4" stroke-width="2"/>' +
'<path d="M218 386c10 50 70 70 164 0" fill="none" stroke="#caa248" stroke-width="2" opacity=".55"/>' +
/* 肚脐 */
'<ellipse cx="300" cy="430" rx="4" ry="6" fill="#bd9346"/>' +
/* 双袖交于腹前，抚长念珠 */
'<path d="M214 296C188 322 178 364 196 404c14 14 40 8 50-8 6-18 4-40 0-60-2-12-8-22-22-32z" fill="url(#ml_robe)"/>' +
'<path d="M386 296C412 322 422 364 404 404c-14 14-40 8-50-8-6-18-4-40 0-60 2-12 8-22 22-32z" fill="url(#ml_robe)"/>' +
/* 长念珠（沿大肚外圈） */
'<g class="beads">' +
'<path d="M210 396c-12 40-2 90 22 130" fill="none" stroke="#8a5a22" stroke-width="6" stroke-linecap="round"/>' +
'<path d="M390 396c12 40 2 90-22 130" fill="none" stroke="#8a5a22" stroke-width="6" stroke-linecap="round"/>' +
'<g fill="#f5dc92" stroke="#7a5a2a" stroke-width="1"><circle cx="208" cy="406" r="4.5"/><circle cx="202" cy="426" r="4.5"/><circle cx="200" cy="446" r="4.5"/><circle cx="202" cy="466" r="4.5"/><circle cx="208" cy="484" r="4.5"/><circle cx="218" cy="500" r="4.5"/><circle cx="230" cy="514" r="4.5"/></g>' +
'<g fill="#f5dc92" stroke="#7a5a2a" stroke-width="1"><circle cx="392" cy="406" r="4.5"/><circle cx="398" cy="426" r="4.5"/><circle cx="400" cy="446" r="4.5"/><circle cx="398" cy="466" r="4.5"/><circle cx="392" cy="484" r="4.5"/><circle cx="382" cy="500" r="4.5"/><circle cx="370" cy="514" r="4.5"/></g>' +
'</g>' +
/* 双手明显抚珠 */
handR(202, 396, 'url(#ml_skin)', '#bd9346', -8) +
handR(398, 396, 'url(#ml_skin)', '#bd9346', 8) +
/* 布袋（放大、置身侧） */
'<g class="cloth">' +
'<path d="M422 460c40-12 70 16 64 64-30 18-70 18-100 0 0-30 12-54 36-64z" fill="#caa248" stroke="#7a4a14" stroke-width="1.6"/>' +
'<path d="M440 446c0-12 8-22 22-22" fill="none" stroke="#7a4a14" stroke-width="2.4" stroke-linecap="round"/>' +
'<g stroke="#7a4a14" stroke-width="1.2" opacity=".55"><path d="M412 488c16 8 32 8 48 0M410 506c20 10 50 10 70 0"/></g>' +
'</g>' +
/* 颈 + 大头笑面 */
'<rect x="282" y="200" width="36" height="40" rx="12" fill="url(#ml_skin)"/>' +
'<path d="M230 170c0-50 32-86 70-86s70 36 70 86c0 50-28 84-70 84s-70-34-70-84z" fill="url(#ml_skin)"/>' +
/* 头光小髻 */
'<ellipse cx="300" cy="80" rx="22" ry="16" fill="#e9c47a"/>' +
'<ellipse cx="300" cy="80" rx="22" ry="16" fill="none" stroke="#bd9346" stroke-width="1.2"/>' +
'<path d="M232 178c-12 0-18 9-15 19 1 8 11 12 18 7z" fill="url(#ml_skin)" stroke="#bd9346" stroke-width="1.2"/>' +
'<path d="M368 178c12 0 18 9 15 19-1 8-11 12-18 7z" fill="url(#ml_skin)" stroke="#bd9346" stroke-width="1.2"/>' +
/* 笑眉（笑弯月） */
'<path d="M254 162c12-10 28-12 40-4M346 162c-12-10-28-12-40-4" fill="none" stroke="#7a5a2a" stroke-width="3" stroke-linecap="round"/>' +
/* 眯眼（笑眯眼缝） */
'<path d="M264 176c8 6 18 6 24 0M312 176c8 6 18 6 24 0" fill="none" stroke="#3a2710" stroke-width="3" stroke-linecap="round"/>' +
/* 大鼻 */
'<path d="M298 178c-2 8-2 16 0 22" fill="none" stroke="#a87c34" stroke-width="2.4" stroke-linecap="round"/>' +
/* 大笑嘴 */
'<path d="M268 204c14 18 50 18 64 0" fill="none" stroke="#7a4a14" stroke-width="4" stroke-linecap="round"/>' +
'<path d="M272 206c12 12 44 12 56 0" fill="#a85a2a" opacity=".4"/>' +
/* 酒窝 */
'<g fill="#e9c884" stroke="#b8954c" stroke-width="1"><circle cx="258" cy="194" r="9"/><circle cx="342" cy="194" r="9"/></g>' +
'</svg>'
  };

  /* ═════════ 财宝天王（武财神） ═════════ */
  var caibao = {
    id: 'caibao', title: '财宝天王', short: '财宝天王', honor: '护法 · 武财神', kind: 'cai',
    sound: 'inqing',
    gatha: '持幢护世，财宝普施；愿诸有情，资具丰足。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="财宝天王">' +
'<defs>' +
'<radialGradient id="cb_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff0cc" stop-opacity=".58"/><stop offset=".5" stop-color="#e2a948" stop-opacity=".18"/><stop offset="1" stop-color="#e2a948" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="cb_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe6a8" stop-opacity=".88"/><stop offset=".7" stop-color="#e0a544" stop-opacity=".44"/><stop offset="1" stop-color="#c08a32" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="cb_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6dcab"/><stop offset="1" stop-color="#bd9346"/></linearGradient>' +
'<linearGradient id="cb_armor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9c270"/><stop offset=".5" stop-color="#b3893a"/><stop offset="1" stop-color="#6f4f1c"/></linearGradient>' +
'<linearGradient id="cb_stupa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3c8"/><stop offset="1" stop-color="#b8954c"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#cb_g)"/>' +
'<circle cx="300" cy="175" r="150" fill="none" stroke="#e0a544" stroke-opacity=".28" stroke-width="1" stroke-dasharray="2 9"/>' +
'<circle cx="300" cy="175" r="120" fill="url(#cb_h)"/>' +
'<circle cx="300" cy="175" r="120" fill="none" stroke="#e0a544" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="lotus-seat"><ellipse cx="300" cy="496" rx="156" ry="30" fill="#6f4f1c"/><path d="M300 432c-74 0-126 22-154 54 28 18 80 28 154 28s126-10 154-28c-28-32-80-54-154-54z" fill="url(#cb_armor)"/><g fill="#c79a45" stroke="#8a5f24" stroke-width="1"><path d="M200 478c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M300 458c-16-22-16-50 0-72 16 22 16 50 0 72z"/><path d="M400 478c16-22 16-50 0-72-16 22-16 50 0 72z"/></g></g>' +
/* 甲胄身躯 */
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#cb_armor)"/>' +
/* 胸甲 + 护肩 */
'<path d="M248 286c-14 8-22 24-22 44 0 30 24 56 74 56s74-26 74-56c0-20-8-36-22-44-22 12-42 16-52 16s-30-4-52-16z" fill="#e6c270" stroke="#8a5f24" stroke-width="1.4"/>' +
'<g fill="#b3893a" stroke="#6f4f1c" stroke-width="1"><circle cx="300" cy="324" r="11"/></g>' +
/* 护肩（兽首） */
'<g fill="#c79a45" stroke="#6f4f1c" stroke-width="1"><path d="M210 290c-12 6-18 20-16 36 10 4 22-2 26-14 2-10-2-18-10-22z"/><path d="M390 290c12 6 18 20 16 36-10 4-22-2-26-14-2-10 2-18 10-22z"/></g>' +
'<g fill="none" stroke="#6f4f1c" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"><path d="M300 370v140"/><path d="M256 380c-8 56-6 130-2 160"/><path d="M344 380c8 56 6 130 2 160"/></g>' +
/* 左袖 → 左手托宝塔（多层舍利塔） */
'<path d="M220 286C184 316 172 364 184 414c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#cb_armor)"/>' +
'<g class="stupa">' +
/* 塔基 */
'<rect x="200" y="424" width="56" height="14" rx="2" fill="#7a5a2a" stroke="#3a2a14" stroke-width="1.4"/>' +
/* 塔身（多层） */
'<rect x="208" y="408" width="40" height="16" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<rect x="208" y="392" width="40" height="16" fill="#e9c884" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<rect x="208" y="376" width="40" height="16" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.4"/>' +
/* 覆钵 */
'<path d="M212 376c0-12 8-20 16-20s16 8 16 20" fill="#e9c884" stroke="#7a5a2a" stroke-width="1.4"/>' +
/* 相轮（圆盘×3 + 刹） */
'<circle cx="228" cy="352" r="12" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<circle cx="228" cy="340" r="9" fill="#e9c884" stroke="#7a5a2a" stroke-width="1.2"/>' +
'<circle cx="228" cy="330" r="6" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.2"/>' +
/* 宝珠 */
'<rect x="226" y="316" width="4" height="14" fill="#7a5a2a"/>' +
'<circle cx="228" cy="312" r="5" fill="#e9c884" stroke="#7a5a2a" stroke-width="1.2"/>' +
'<circle cx="228" cy="302" r="4" fill="#caa24a"/>' +
'</g>' +
handR(186, 416, 'url(#cb_skin)', '#bd9346', -4) +
/* 右袖 → 右手抚吐宝鼠 */
'<path d="M380 286C416 316 428 364 416 414c-14 14-42 10-52-4-8-22-4-44 0-66 0-18 0-34 16-58z" fill="url(#cb_armor)"/>' +
'<g class="mongoose">' +
/* 鼠身 */
'<ellipse cx="394" cy="412" rx="34" ry="16" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.6"/>' +
'<circle cx="370" cy="408" r="11" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<circle cx="367" cy="406" r="2.4" fill="#3a2710"/>' +
'<path d="M362 410c-3 4-3 9 0 12" fill="none" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<path d="M362 396c-4-2-8-2-10 0" fill="none" stroke="#7a5a2a" stroke-width="1.4"/>' +
/* 吐宝：元宝 + 明珠 */
'<g fill="#f5dc92" stroke="#7a5a2a" stroke-width="1"><path d="M408 396c-2-6 4-10 10-10s12 4 10 10c8 0 14 6 14 12-8 6-22 8-30 4-6-2-8-12-4-16z"/><circle cx="438" cy="402" r="5" fill="#caa24a"/><circle cx="448" cy="408" r="4" fill="#e9c884"/><circle cx="456" cy="402" r="3.5" fill="#caa24a"/></g>' +
'</g>' +
handR(376, 426, 'url(#cb_skin)', '#bd9346', 16) +
/* 颈 + 头 + 兜鍪（ helmet） */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#cb_skin)"/>' +
'<path d="M248 168c0-44 24-78 52-78s52 34 52 78c0 42-22 70-52 70s-52-28-52-70z" fill="url(#cb_skin)"/>' +
/* 兜鍪（黑漆铁帽） */
'<path d="M252 150c-4-30 16-54 48-54s52 24 48 54c-14-12-28-18-48-18s-34 6-48 18z" fill="#3a2a18" stroke="#1a1208" stroke-width="1.4"/>' +
'<rect x="248" y="146" width="104" height="10" rx="3" fill="#5a3a20" stroke="#1a1208" stroke-width="1"/>' +
/* 顶饰宝珠 */
'<rect x="298" y="92" width="4" height="14" fill="#caa24a"/>' +
'<circle cx="300" cy="86" r="6" fill="#e9c884" stroke="#7a5a2a" stroke-width="1"/>' +
'<path d="M248 174c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#cb_skin)" stroke="#bd9346" stroke-width="1.2"/>' +
'<path d="M352 174c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#cb_skin)" stroke="#bd9346" stroke-width="1.2"/>' +
/* 怒目（剑眉圆眼） */
'<path d="M268 158l8-4 16 6M308 164l16-6 8 4" fill="none" stroke="#3a2710" stroke-width="2.4" stroke-linecap="round"/>' +
'<circle cx="280" cy="170" r="3" fill="#3a2710"/><circle cx="320" cy="170" r="3" fill="#3a2710"/>' +
'<path d="M298 168c-2 8-2 14 0 22" fill="none" stroke="#a87c34" stroke-width="2" stroke-linecap="round"/>' +
/* 短髭（怒相） */
'<path d="M280 198c6 8 14 10 20 4M320 198c-6 8-14 10-20 4" fill="none" stroke="#3a2710" stroke-width="2.6" stroke-linecap="round"/>' +
'</svg>'
  };

  window.DEITIES = window.DEITIES || {};
  window.DEITIES.buddha = [shakyamuni, guanyin, wenshu, mile, caibao];
})();