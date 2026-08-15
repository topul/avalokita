/* ══════════════════════════════════════════════════════════════
   deities-tao.js · 道门神像库（精修版）
   重点：法器放大、形态规范、按各尊造像重画
     元始天尊 — 高髻冠·双手捧灵芝首玉如意
     灵宝天尊 — 高髻冠·右手如意·左手捧宝珠
     道德天尊 — 银发白须·右手持太极扇·左手持拂尘
     玉皇大帝 — 冕旒垂旒·双手捧玉圭
     赵公明   — 铁冠黑面虬髯·右手持铁鞭·左手抚聚宝盆
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var BA = '<g class="bagua-ring" font-size="30" text-anchor="middle" dominant-baseline="central" fill="#9fe0cf" fill-opacity=".72">' +
    '<text x="300" y="46">☰</text><text x="423" y="97">☱</text><text x="474" y="220">☲</text><text x="423" y="343">☳</text>' +
    '<text x="300" y="394">☷</text><text x="177" y="343">☶</text><text x="126" y="220">☵</text><text x="177" y="97">☴</text></g>';

  /* 圆胖手势 */
  var handR = function (cx, cy, fill, stroke, rot) {
    var g = '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + (rot || 0) + ')">' +
      '<path d="M-16 -8a16 14 0 0 1 30 -4c2 8-2 14-10 18-10 4-22 0-20 -14z" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.2"/>' +
      '<path d="M-2 -16c0 -4 4 -8 8 -6 4 2 2 8 -2 10M4 -18c0 -4 4 -8 8 -6 4 2 2 8 -2 10M10 -16c0 -4 4 -8 8 -6 4 2 2 8 -2 10M14 -10c2 -4 8 -6 10 -2 2 4 -2 8 -6 8" fill="none" stroke="' + stroke + '" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>' +
      '</g>';
    return g;
  };

  /* ═════════ 玉清元始天尊 ═════════ */
  var yuanchu = {
    id: 'yuanchu', title: '玉清元始天尊', short: '元始天尊', honor: '三清 · 玉清', kind: 'tianzun',
    sound: 'bell',
    gatha: '道本无言，立象尽意；一元既判，万化由生。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="玉清元始天尊">' +
'<defs>' +
'<radialGradient id="yc_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#cdf3e6" stop-opacity=".55"/><stop offset=".5" stop-color="#5fa899" stop-opacity=".16"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="yc_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#e6fbf4" stop-opacity=".9"/><stop offset=".7" stop-color="#8fd8c8" stop-opacity=".42"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="yc_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0f7f3"/><stop offset=".55" stop-color="#cfe2da"/><stop offset="1" stop-color="#9cbcb0"/></linearGradient>' +
'<linearGradient id="yc_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff0ea"/><stop offset="1" stop-color="#9cc4b8"/></linearGradient>' +
'<linearGradient id="yc_ruyi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe6a0"/><stop offset="1" stop-color="#9a6c2a"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#yc_g)"/>' +
'<circle cx="300" cy="180" r="156" fill="none" stroke="#9fe0cf" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'<g class="spin-slow">' + BA + '</g>' +
'<circle cx="300" cy="180" r="120" fill="url(#yc_h)"/>' +
'<circle cx="300" cy="180" r="120" fill="none" stroke="#9fe0cf" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="cloud-seat"><ellipse cx="300" cy="500" rx="152" ry="30" fill="#7fb3a4"/><path d="M300 438c-72 0-122 22-150 54 28 18 78 28 150 28s122-10 150-28c-28-32-78-54-150-54z" fill="url(#yc_robe)"/><g fill="none" stroke="#7fb3a4" stroke-width="2" stroke-opacity=".6"><path d="M168 488c14-10 36-10 50 0s36 10 50 0"/><path d="M332 488c14-10 36-10 50 0s36 10 50 0"/></g></g>' +
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#yc_robe)"/>' +
'<g fill="none" stroke="#7fb3a4" stroke-opacity=".45" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v196"/><path d="M256 320c-10 58-8 138-4 172"/><path d="M344 320c10 58 8 138 4 172"/></g>' +
/* 双袖交于胸前，捧玉如意（灵芝首 + 长柄 + 尾） */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#yc_robe)"/>' +
'<path d="M380 270C416 302 428 348 416 398c-14 14-42 10-52-4-8-22-4-44 0-66 0-18 0-34 16-58z" fill="url(#yc_robe)"/>' +
'<g class="ruyi">' +
/* 柄 */
'<rect x="294" y="338" width="12" height="86" rx="6" fill="url(#yc_ruyi)" stroke="#7a5a2a" stroke-width="1.4"/>' +
/* 灵芝首（云头） */
'<path d="M270 320c0-16 14-26 30-22 4-12 22-14 30-2 14-2 28 8 28 22 0 18-14 30-44 30s-44-12-44-28z" fill="url(#yc_ruyi)" stroke="#7a5a2a" stroke-width="1.6"/>' +
'<circle cx="298" cy="318" r="4" fill="#7a5a2a" opacity=".4"/>' +
/* 尾端 */
'<path d="M300 424c-14 4-22 16-16 28 8 8 22 4 26-6 4-8 0-18-10-22z" fill="url(#yc_ruyi)" stroke="#7a5a2a" stroke-width="1.6"/>' +
'</g>' +
handR(264, 380, 'url(#yc_skin)', '#9cbcb0', 12) +
handR(336, 380, 'url(#yc_skin)', '#9cbcb0', -12) +
/* 颈 + 头 + 高冠 */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#yc_skin)"/>' +
'<path d="M248 170c0-42 24-76 52-76s52 34 52 76c0 42-22 70-52 70s-52-28-52-70z" fill="url(#yc_skin)"/>' +
/* 高冠 */
'<path d="M260 112c-4-32 16-58 40-58s44 26 40 58c-12-10-24-14-40-14s-28 4-40 14z" fill="#7fb3a4" stroke="#4f7d70" stroke-width="1.6"/>' +
'<rect x="240" y="108" width="120" height="12" rx="4" fill="#7fb3a4" stroke="#4f7d70" stroke-width="1.4"/>' +
'<circle cx="300" cy="86" r="11" fill="#e6fbf4" stroke="#4f7d70" stroke-width="1.4"/>' +
'<circle cx="300" cy="86" r="5" fill="#7fb3a4"/>' +
'<path d="M248 174c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#yc_skin)" stroke="#9cbcb0" stroke-width="1.2"/>' +
'<path d="M352 174c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#yc_skin)" stroke="#9cbcb0" stroke-width="1.2"/>' +
'<circle cx="300" cy="150" r="4" fill="#ffffff"/>' +
'<path d="M268 162c9-5 18-5 26 0M306 162c9-5 18-5 26 0" fill="none" stroke="#5a8a7c" stroke-width="2.5" stroke-linecap="round"/>' +
'<path d="M270 174c9 5 18 5 26 0M304 174c9 5 18 5 26 0" fill="none" stroke="#3a5a50" stroke-width="2.4" stroke-linecap="round"/>' +
'<path d="M298 166c-2 6-2 12 0 18" fill="none" stroke="#8aa89c" stroke-width="1.8" stroke-linecap="round"/>' +
'<path d="M286 202c9 5 18 5 28 0" fill="none" stroke="#7c9c90" stroke-width="2.4" stroke-linecap="round"/>' +
'</svg>'
  };

  /* ═════════ 上清灵宝天尊 ═════════ */
  var lingbao = {
    id: 'lingbao', title: '上清灵宝天尊', short: '灵宝天尊', honor: '三清 · 上清', kind: 'tianzun',
    sound: 'bell',
    gatha: '灵文梵气，运化诸天；三宝既立，万法攸归。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="上清灵宝天尊">' +
'<defs>' +
'<radialGradient id="lb_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#cdf3e6" stop-opacity=".55"/><stop offset=".5" stop-color="#5fa899" stop-opacity=".16"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="lb_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#e6fbf4" stop-opacity=".9"/><stop offset=".7" stop-color="#8fd8c8" stop-opacity=".42"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="lb_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0f7f3"/><stop offset=".55" stop-color="#cfe2da"/><stop offset="1" stop-color="#9cbcb0"/></linearGradient>' +
'<linearGradient id="lb_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcefe8"/><stop offset="1" stop-color="#94bdb1"/></linearGradient>' +
'<linearGradient id="lb_ruyi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe6a0"/><stop offset="1" stop-color="#9a6c2a"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#lb_g)"/>' +
'<circle cx="300" cy="180" r="156" fill="none" stroke="#9fe0cf" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'<g class="spin-slow">' + BA + '</g>' +
'<circle cx="300" cy="180" r="120" fill="url(#lb_h)"/>' +
'<circle cx="300" cy="180" r="120" fill="none" stroke="#9fe0cf" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="cloud-seat"><ellipse cx="300" cy="500" rx="152" ry="30" fill="#7fb3a4"/><path d="M300 438c-72 0-122 22-150 54 28 18 78 28 150 28s122-10 150-28c-28-32-78-54-150-54z" fill="url(#lb_robe)"/><g fill="none" stroke="#7fb3a4" stroke-width="2" stroke-opacity=".6"><path d="M168 488c14-10 36-10 50 0s36 10 50 0"/><path d="M332 488c14-10 36-10 50 0s36 10 50 0"/></g></g>' +
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#lb_robe)"/>' +
'<g fill="none" stroke="#7fb3a4" stroke-opacity=".45" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v196"/><path d="M256 320c-10 58-8 138-4 172"/><path d="M344 320c10 58 8 138 4 172"/></g>' +
/* 左袖 → 左手捧宝珠（莲托放光） */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#lb_robe)"/>' +
'<g class="pearl">' +
/* 莲托 */
'<path d="M204 388c8-10 22-14 36-14s28 4 36 14c-4 12-18 18-36 18s-32-6-36-18z" fill="#cfe2da" stroke="#7fb3a4" stroke-width="1.4"/>' +
'<g fill="#9fe0cf" stroke="#7fb3a4" stroke-width="1"><path d="M210 380c-2 4-4 8-2 12"/><path d="M222 374c-2 4-4 8-2 14"/><path d="M236 374c-2 4-2 8 0 12"/><path d="M248 378c2 4 4 8 2 12"/></g>' +
/* 宝珠（放光） */
'<circle cx="222" cy="362" r="22" fill="#e6fbf4" stroke="#7fb3a4" stroke-width="1.6"/>' +
'<circle cx="222" cy="362" r="14" fill="#fff" opacity=".85"/>' +
'<circle cx="215" cy="356" r="6" fill="#fff" opacity=".95"/>' +
/* 珠光 */
'<g stroke="#fff" stroke-width="1.2" opacity=".7"><line x1="222" y1="332" x2="222" y2="342"/><line x1="222" y1="382" x2="222" y2="392"/><line x1="194" y1="362" x2="202" y2="362"/><line x1="242" y1="362" x2="250" y2="362"/></g>' +
'</g>' +
handR(212, 408, 'url(#lb_skin)', '#9cbcb0', 4) +
/* 右袖 → 右手持玉如意（灵芝首 + 柄，倾斜） */
'<path d="M380 270C416 302 428 348 416 398c-14 14-42 10-52-4-8-22-4-44 0-66 0-18 0-34 16-58z" fill="url(#lb_robe)"/>' +
'<g class="ruyi" transform="rotate(18 392 392)">' +
'<rect x="384" y="358" width="12" height="76" rx="6" fill="url(#lb_ruyi)" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<path d="M362 340c0-14 12-22 26-18 4-10 18-12 26-2 12-2 24 6 24 18 0 16-12 26-38 26s-38-10-38-24z" fill="url(#lb_ruyi)" stroke="#7a5a2a" stroke-width="1.6"/>' +
'<circle cx="386" cy="338" r="3" fill="#7a5a2a" opacity=".4"/>' +
'</g>' +
handR(388, 412, 'url(#lb_skin)', '#9cbcb0', -10) +
/* 颈 + 头 + 高冠（同元始） */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#lb_skin)"/>' +
'<path d="M248 170c0-42 24-76 52-76s52 34 52 76c0 42-22 70-52 70s-52-28-52-70z" fill="url(#lb_skin)"/>' +
'<path d="M260 112c-4-32 16-58 40-58s44 26 40 58c-12-10-24-14-40-14s-28 4-40 14z" fill="#7fb3a4" stroke="#4f7d70" stroke-width="1.6"/>' +
'<rect x="240" y="108" width="120" height="12" rx="4" fill="#7fb3a4" stroke="#4f7d70" stroke-width="1.4"/>' +
'<circle cx="300" cy="86" r="11" fill="#e6fbf4" stroke="#4f7d70" stroke-width="1.4"/>' +
'<circle cx="300" cy="86" r="5" fill="#7fb3a4"/>' +
'<path d="M248 174c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#lb_skin)" stroke="#9cbcb0" stroke-width="1.2"/>' +
'<path d="M352 174c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#lb_skin)" stroke="#9cbcb0" stroke-width="1.2"/>' +
'<circle cx="300" cy="150" r="4" fill="#ffffff"/>' +
'<path d="M268 162c9-5 18-5 26 0M306 162c9-5 18-5 26 0" fill="none" stroke="#5a8a7c" stroke-width="2.5" stroke-linecap="round"/>' +
'<path d="M270 174c9 5 18 5 26 0M304 174c9 5 18 5 26 0" fill="none" stroke="#3a5a50" stroke-width="2.4" stroke-linecap="round"/>' +
'<path d="M298 166c-2 6-2 12 0 18" fill="none" stroke="#8aa89c" stroke-width="1.8" stroke-linecap="round"/>' +
'<path d="M286 202c9 5 18 5 28 0" fill="none" stroke="#7c9c90" stroke-width="2.4" stroke-linecap="round"/>' +
'</svg>'
  };

  /* ═════════ 太清道德天尊（老子） ═════════ */
  var daode = {
    id: 'daode', title: '太清道德天尊', short: '道德天尊', honor: '三清 · 太清', kind: 'tianzun',
    sound: 'bell',
    gatha: '道可道，非常道；名可名，非常名。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="太清道德天尊">' +
'<defs>' +
'<radialGradient id="dd_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#e7d9b8" stop-opacity=".5"/><stop offset=".5" stop-color="#a98f5e" stop-opacity=".16"/><stop offset="1" stop-color="#a98f5e" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="dd_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fbf2dc" stop-opacity=".9"/><stop offset=".7" stop-color="#d8c489" stop-opacity=".42"/><stop offset="1" stop-color="#a98f5e" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="dd_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4ecd9"/><stop offset=".55" stop-color="#dccfac"/><stop offset="1" stop-color="#b39a6a"/></linearGradient>' +
'<linearGradient id="dd_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8e1cf"/><stop offset="1" stop-color="#b3a884"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#dd_g)"/>' +
'<circle cx="300" cy="180" r="156" fill="none" stroke="#cdbf8e" stroke-opacity=".24" stroke-width="1" stroke-dasharray="3 8"/>' +
'<g class="spin-slow">' + BA + '</g>' +
'<circle cx="300" cy="180" r="120" fill="url(#dd_h)"/>' +
'<circle cx="300" cy="180" r="120" fill="none" stroke="#cdbf8e" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="cloud-seat"><ellipse cx="300" cy="500" rx="152" ry="30" fill="#a9986a"/><path d="M300 438c-72 0-122 22-150 54 28 18 78 28 150 28s122-10 150-28c-28-32-78-54-150-54z" fill="url(#dd_robe)"/><g fill="none" stroke="#a9986a" stroke-width="2" stroke-opacity=".6"><path d="M168 488c14-10 36-10 50 0s36 10 50 0"/><path d="M332 488c14-10 36-10 50 0s36 10 50 0"/></g></g>' +
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#dd_robe)"/>' +
'<g fill="none" stroke="#a9986a" stroke-opacity=".45" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v196"/><path d="M256 320c-10 58-8 138-4 172"/><path d="M344 320c10 58 8 138 4 172"/></g>' +
/* 左袖 → 左手持拂尘（马尾长） */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#dd_robe)"/>' +
'<g class="whisk">' +
/* 柄 */
'<rect x="184" y="290" width="8" height="120" rx="3" fill="#7a5a2a" transform="rotate(-12 188 350)"/>' +
/* 套环 */
'<rect x="180" y="284" width="16" height="10" rx="3" fill="#caa24a" transform="rotate(-12 188 289)"/>' +
/* 马尾（多束长白毛） */
'<g fill="#fbf2dc" stroke="#d8c489" stroke-width="1">' +
'<path d="M188 296c-14-12-26-26-22-46 4 12 14 24 22 30z"/>' +
'<path d="M192 296c-8-16-14-32-6-50 8 14 12 28 12 40z"/>' +
'<path d="M196 296c-2-18 0-34 8-50 4 14 4 30 2 42z"/>' +
'<path d="M200 296c4-18 10-32 18-46-2 14-6 28-10 42z"/>' +
'<path d="M204 296c10-14 18-26 28-36-2 14-10 26-18 36z"/>' +
'</g>' +
'</g>' +
handR(186, 412, 'url(#dd_skin)', '#b39a6a', -8) +
/* 右袖 → 右手持太极扇（圆形 + 阴阳） */
'<path d="M380 270C416 302 428 348 416 398c-14 14-42 10-52-4-8-22-4-44 0-66 0-18 0-34 16-58z" fill="url(#dd_robe)"/>' +
'<g class="fan">' +
/* 扇柄 */
'<rect x="388" y="384" width="6" height="56" fill="#7a5a2a"/>' +
/* 扇面（圆形） */
'<circle cx="400" cy="376" r="36" fill="#fbf2dc" stroke="#7a5a2a" stroke-width="1.6"/>' +
/* 阴阳 */
'<path d="M400 340a36 36 0 0 1 0 72c12-10 12-26 0-36s-12-26 0-36z" fill="#3a3320"/>' +
'<circle cx="400" cy="358" r="6" fill="#3a3320"/>' +
'<circle cx="400" cy="394" r="6" fill="#fbf2dc"/>' +
/* 外圈 */
'<circle cx="400" cy="376" r="36" fill="none" stroke="#a9986a" stroke-width="1.4"/>' +
'<circle cx="400" cy="376" r="32" fill="none" stroke="#d8c489" stroke-width="1"/>' +
'</g>' +
handR(390, 408, 'url(#dd_skin)', '#b39a6a', 12) +
/* 颈 + 头 + 银发白须 + 冠 */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#dd_skin)"/>' +
'<path d="M248 168c0-42 24-76 52-76s52 34 52 76c0 42-22 70-52 70s-52-28-52-70z" fill="url(#dd_skin)"/>' +
/* 银发（覆盖前额） */
'<path d="M248 132c-2-32 22-56 52-56s54 24 52 56c-12-8-26-12-52-12s-40 4-52 12z" fill="#fbf2dc" stroke="#cdbf8e" stroke-width="1.2"/>' +
/* 莲花冠 */
'<path d="M276 110c-2-18 10-32 24-32s26 14 24 32c-8-6-16-8-24-8s-16 2-24 8z" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<rect x="266" y="106" width="68" height="10" rx="3" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.2"/>' +
'<circle cx="300" cy="88" r="9" fill="#fbf2dc" stroke="#7a5a2a" stroke-width="1.2"/>' +
'<path d="M248 174c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#dd_skin)" stroke="#b39a6a" stroke-width="1.2"/>' +
'<path d="M352 174c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#dd_skin)" stroke="#b39a6a" stroke-width="1.2"/>' +
'<circle cx="300" cy="150" r="4" fill="#fff7e0"/>' +
/* 慈眉善目 */
'<path d="M268 160c9-5 18-5 26 0M306 160c9-5 18-5 26 0" fill="none" stroke="#6a5a32" stroke-width="2.5" stroke-linecap="round"/>' +
'<path d="M270 172c9 5 18 5 26 0M304 172c9 5 18 5 26 0" fill="none" stroke="#3a3320" stroke-width="2.4" stroke-linecap="round"/>' +
'<path d="M298 168c-2 6-2 12 0 18" fill="none" stroke="#a9986a" stroke-width="1.8" stroke-linecap="round"/>' +
/* 长白须（垂至胸前） */
'<path d="M276 196c-10 36-8 80 4 116 12 18 28 18 40 0 12-36 14-80 4-116-8 8-16 10-24 4-8 6-16 4-24-4z" fill="#fbf2dc" stroke="#cdbf8e" stroke-width="1.4"/>' +
'<path d="M286 204c-4 28-4 56 0 84M314 204c4 28 4 56 0 84" fill="none" stroke="#d8cdb0" stroke-width="1.4"/>' +
'</svg>'
  };

  /* ═════════ 玉皇大帝 ═════════ */
  var yuhuang = {
    id: 'yuhuang', title: '玉皇大帝', short: '玉皇大帝', honor: '昊天上帝', kind: 'dadi',
    sound: 'bell',
    gatha: '昊天上帝，统御万灵；荡荡难名，巍巍在上。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="玉皇大帝">' +
'<defs>' +
'<radialGradient id="yh_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#fff0cc" stop-opacity=".58"/><stop offset=".5" stop-color="#d8b25a" stop-opacity=".18"/><stop offset="1" stop-color="#d8b25a" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="yh_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff3d0" stop-opacity=".9"/><stop offset=".7" stop-color="#e6c270" stop-opacity=".44"/><stop offset="1" stop-color="#c79a3a" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="yh_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e3bd"/><stop offset=".55" stop-color="#e3c486"/><stop offset="1" stop-color="#b8954c"/></linearGradient>' +
'<linearGradient id="yh_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0e3c2"/><stop offset="1" stop-color="#c2a86e"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#yh_g)"/>' +
'<circle cx="300" cy="180" r="156" fill="none" stroke="#e6c270" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'<g class="spin-slow"><circle cx="300" cy="180" r="140" fill="none" stroke="#e6c270" stroke-opacity=".4" stroke-width="1" stroke-dasharray="2 10"/></g>' +
'<circle cx="300" cy="180" r="120" fill="url(#yh_h)"/>' +
'<circle cx="300" cy="180" r="120" fill="none" stroke="#e6c270" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="cloud-seat"><ellipse cx="300" cy="500" rx="152" ry="30" fill="#b8954c"/><path d="M300 438c-72 0-122 22-150 54 28 18 78 28 150 28s122-10 150-28c-28-32-78-54-150-54z" fill="url(#yh_robe)"/><g fill="none" stroke="#b8954c" stroke-width="2" stroke-opacity=".6"><path d="M168 488c14-10 36-10 50 0s36 10 50 0"/><path d="M332 488c14-10 36-10 50 0s36 10 50 0"/></g></g>' +
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#yh_robe)"/>' +
'<g fill="none" stroke="#b8954c" stroke-opacity=".45" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v196"/><path d="M256 320c-10 58-8 138-4 172"/><path d="M344 320c10 58 8 138 4 172"/></g>' +
/* 双袖交于胸前，捧玉圭 */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#yh_robe)"/>' +
'<path d="M380 270C416 302 428 348 416 398c-14 14-42 10-52-4-8-22-4-44 0-66 0-18 0-34 16-58z" fill="url(#yh_robe)"/>' +
'<g class="gui">' +
/* 圭身 */
'<rect x="278" y="324" width="44" height="120" rx="6" fill="#e6c270" stroke="#b8954c" stroke-width="1.8"/>' +
/* 圭首（山形） */
'<path d="M278 324l22-22 22 22z" fill="#b8954c"/>' +
/* 圭纹 */
'<g stroke="#b8954c" stroke-width="1.4" opacity=".7"><line x1="300" y1="338" x2="300" y2="436"/><path d="M286 350h28M286 370h28M286 390h28M286 410h28"/></g>' +
'<rect x="278" y="438" width="44" height="8" rx="2" fill="#b8954c"/>' +
'</g>' +
handR(262, 380, 'url(#yh_skin)', '#b8954c', 12) +
handR(338, 380, 'url(#yh_skin)', '#b8954c', -12) +
/* 颈 + 头 + 冕旒 */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#yh_skin)"/>' +
'<path d="M248 170c0-42 24-76 52-76s52 34 52 76c0 42-22 70-52 70s-52-28-52-70z" fill="url(#yh_skin)"/>' +
/* 冕板 */
'<rect x="232" y="62" width="136" height="22" rx="6" fill="#e6c270" stroke="#b8954c" stroke-width="1.8"/>' +
'<path d="M240 84c-2-22 24-38 60-38s62 16 60 38c-14-8-30-12-60-12s-46 4-60 12z" fill="#b8954c"/>' +
/* 垂旒（前十二旒、五串） */
'<g fill="#7a5a2a">' +
'<rect x="252" y="86" width="3" height="36" rx="1.5"/><rect x="270" y="86" width="3" height="38" rx="1.5"/><rect x="288" y="86" width="3" height="40" rx="1.5"/><rect x="306" y="86" width="3" height="38" rx="1.5"/><rect x="324" y="86" width="3" height="36" rx="1.5"/>' +
'<circle cx="253" cy="124" r="3"/><circle cx="271" cy="126" r="3"/><circle cx="289" cy="128" r="3"/><circle cx="307" cy="126" r="3"/><circle cx="325" cy="124" r="3"/>' +
'</g>' +
/* 旒珠（白玉） */
'<g fill="#fbf2dc" stroke="#b8954c" stroke-width="1"><circle cx="253" cy="138" r="3.5"/><circle cx="271" cy="140" r="3.5"/><circle cx="289" cy="142" r="3.5"/><circle cx="307" cy="140" r="3.5"/><circle cx="325" cy="138" r="3.5"/></g>' +
'<path d="M248 174c-10 0-16 8-14 18 1 8 9 12 16 8z" fill="url(#yh_skin)" stroke="#b8954c" stroke-width="1.2"/>' +
'<path d="M352 174c10 0 16 8 14 18-1 8-9 12-16 8z" fill="url(#yh_skin)" stroke="#b8954c" stroke-width="1.2"/>' +
'<circle cx="300" cy="152" r="4" fill="#fff7e0"/>' +
'<path d="M268 164c9-5 18-5 26 0M306 164c9-5 18-5 26 0" fill="none" stroke="#6a4a20" stroke-width="2.5" stroke-linecap="round"/>' +
'<path d="M270 176c9 5 18 5 26 0M304 176c9 5 18 5 26 0" fill="none" stroke="#3a2710" stroke-width="2.4" stroke-linecap="round"/>' +
'<path d="M298 166c-2 8-2 14 0 22" fill="none" stroke="#a87c34" stroke-width="2" stroke-linecap="round"/>' +
'<path d="M286 204c9 5 18 5 28 0" fill="none" stroke="#8a5a22" stroke-width="2.4" stroke-linecap="round"/>' +
/* 长髯下垂（帝王庄严） */
'<path d="M286 214c-2 24 2 50 14 70 8-6 14-12 14-12s6 6 14 12c12-20 16-46 14-70-8 4-14 4-28 4s-20 0-28-4z" fill="#f6e3bd" stroke="#b8954c" stroke-width="1.4" opacity=".85"/>' +
'</svg>'
  };

  /* ═════════ 赵公明财神真君 ═════════ */
  var zhaogong = {
    id: 'zhaogong', title: '赵公明财神真君', short: '赵公明', honor: '正财神', kind: 'cai',
    sound: 'bell',
    gatha: '执鞭驱邪，聚宝济贫；买卖求财，公而无私。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="赵公明财神真君">' +
'<defs>' +
'<radialGradient id="zg_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#ffedc8" stop-opacity=".58"/><stop offset=".5" stop-color="#d8a23a" stop-opacity=".18"/><stop offset="1" stop-color="#d8a23a" stop-opacity="0"/></radialGradient>' +
'<radialGradient id="zg_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff0c8" stop-opacity=".9"/><stop offset=".7" stop-color="#e0a844" stop-opacity=".44"/><stop offset="1" stop-color="#b8842a" stop-opacity="0"/></radialGradient>' +
'<linearGradient id="zg_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#caa074"/><stop offset=".55" stop-color="#a87e54"/><stop offset="1" stop-color="#7a5638"/></linearGradient>' +
'<linearGradient id="zg_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c98f3e"/><stop offset="1" stop-color="#8a5a1e"/></linearGradient>' +
'</defs>' +
'<circle cx="300" cy="210" r="250" fill="url(#zg_g)"/>' +
'<circle cx="300" cy="180" r="156" fill="none" stroke="#e0a844" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'<g class="spin-slow"><circle cx="300" cy="180" r="140" fill="none" stroke="#e0a844" stroke-opacity=".4" stroke-width="1" stroke-dasharray="2 10"/></g>' +
'<circle cx="300" cy="180" r="120" fill="url(#zg_h)"/>' +
'<circle cx="300" cy="180" r="120" fill="none" stroke="#e0a844" stroke-opacity=".5" stroke-width="1.4"/>' +
'<g class="cloud-seat"><ellipse cx="300" cy="500" rx="152" ry="30" fill="#8a5a1e"/><path d="M300 438c-72 0-122 22-150 54 28 18 78 28 150 28s122-10 150-28c-28-32-78-54-150-54z" fill="url(#zg_robe)"/><g fill="none" stroke="#8a5a1e" stroke-width="2" stroke-opacity=".6"><path d="M168 488c14-10 36-10 50 0s36 10 50 0"/><path d="M332 488c14-10 36-10 50 0s36 10 50 0"/></g></g>' +
'<path d="M212 270C202 326 182 392 170 452c26 22 116 32 130 32s104-10 130-32c-12-60-32-126-42-182-8-32-30-54-74-54s-66 22-74 54z" fill="url(#zg_robe)"/>' +
'<g fill="none" stroke="#7c4a1a" stroke-opacity=".45" stroke-width="2.2" stroke-linecap="round"><path d="M300 300v196"/><path d="M256 320c-10 58-8 138-4 172"/><path d="M344 320c10 58 8 138 4 172"/></g>' +
/* 左袖 → 左手抚聚宝盆（放大，装金锭元宝明珠） */
'<path d="M220 270C184 302 172 348 184 398c14 14 42 10 52-4 8-22 4-44 0-66 0-18 0-34-16-58z" fill="url(#zg_robe)"/>' +
'<g class="treasure">' +
/* 盆外圈 */
'<ellipse cx="220" cy="416" rx="68" ry="20" fill="#3a2a18" stroke="#1a1208" stroke-width="1.6"/>' +
'<ellipse cx="220" cy="412" rx="68" ry="20" fill="#caa24a" stroke="#7a5a2a" stroke-width="1.6"/>' +
'<path d="M152 412c0-16 30-26 68-26s68 10 68 26c-12 22-36 34-68 34s-56-12-68-34z" fill="#e0a844" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<ellipse cx="220" cy="394" rx="56" ry="14" fill="#fbe6a0" stroke="#7a5a2a" stroke-width="1.4"/>' +
'<ellipse cx="220" cy="394" rx="56" ry="14" fill="url(#zg_h)" opacity=".55"/>' +
/* 金锭 ×3 */
'<g fill="#fbe6a0" stroke="#7a5a2a" stroke-width="1.2"><path d="M196 388l-12-8c4-4 12-6 18-4 4 2 6 6 4 10l-6 6c-2 2-4 2-4-4zM220 386l-10-10c4-4 12-4 16-2 4 2 4 6 2 10l-4 6c-2 2-4 0-4-4zM244 388l8-12c4 4 6 12 2 18-2 4-6 6-10 2l-2-4c0-2 0-4 2-4z"/></g>' +
/* 明珠 */
'<circle cx="200" cy="380" r="4" fill="#fff" stroke="#7a5a2a" stroke-width="1"/>' +
'<circle cx="232" cy="376" r="5" fill="#7fc8e0" stroke="#3a5a6a" stroke-width="1"/>' +
'<circle cx="246" cy="382" r="4" fill="#fbe6a0" stroke="#7a5a2a" stroke-width="1"/>' +
/* 光芒 */
'<g stroke="#fff" stroke-width="1" opacity=".7"><line x1="220" y1="356" x2="220" y2="370"/><line x1="200" y1="364" x2="208" y2="372"/><line x1="240" y1="364" x2="232" y2="372"/></g>' +
'</g>' +
handR(190, 426, 'url(#zg_skin)', '#7a5638', -4) +
/* 右袖 → 右手高举铁鞭（节段分明） */
'<path d="M380 270C412 246 426 208 416 170c-10-18-32-16-38 4-4 22 0 44-6 64-4 14-8 30-10 50z" fill="url(#zg_robe)"/>' +
'<g class="whip">' +
/* 鞭柄 */
'<rect x="402" y="86" width="32" height="14" rx="5" fill="#3a2a18" stroke="#1a1208" stroke-width="1.4"/>' +
'<rect x="402" y="86" width="32" height="6" rx="3" fill="#5a3a20"/>' +
/* 鞭身（节段 ×8） */
'<g transform="rotate(8 408 200)">' +
'<rect x="402" y="100" width="12" height="160" rx="3" fill="#3a2a18" stroke="#1a1208" stroke-width="1.2"/>' +
'<g fill="#5a3a20" stroke="#1a1208" stroke-width="1">' +
'<rect x="400" y="118" width="16" height="4"/>' +
'<rect x="400" y="138" width="16" height="4"/>' +
'<rect x="400" y="158" width="16" height="4"/>' +
'<rect x="400" y="178" width="16" height="4"/>' +
'<rect x="400" y="198" width="16" height="4"/>' +
'<rect x="400" y="218" width="16" height="4"/>' +
'<rect x="400" y="238" width="16" height="4"/>' +
'</g>' +
/* 鞭尖 */
'<path d="M402 260l6 18 6-18z" fill="#5a3a20" stroke="#1a1208" stroke-width="1.2"/>' +
'</g>' +
'</g>' +
handR(408, 168, 'url(#zg_skin)', '#7a5638', 0) +
/* 颈 + 头（黑面虬髯）+ 铁冠 */
'<rect x="284" y="210" width="32" height="44" rx="12" fill="url(#zg_skin)"/>' +
'<path d="M244 170c0-44 26-78 54-78s54 34 54 78c0 42-22 70-54 70s-54-28-54-70z" fill="url(#zg_skin)"/>' +
/* 铁冠（黑漆铁帽） */
'<path d="M248 150c-4-30 18-54 50-54s54 24 50 54c-14-12-26-18-50-18s-36 6-50 18z" fill="#1a1208" stroke="#000" stroke-width="1.4"/>' +
'<rect x="244" y="146" width="112" height="12" rx="4" fill="#3a2a18" stroke="#000" stroke-width="1"/>' +
/* 顶饰宝珠 */
'<rect x="298" y="92" width="4" height="14" fill="#caa24a"/>' +
'<circle cx="300" cy="86" r="6" fill="#e0a844" stroke="#7a5a2a" stroke-width="1"/>' +
/* 怒目 */
'<path d="M264 158l8-4 16 6M312 164l16-6 8 4" fill="none" stroke="#1f140a" stroke-width="2.6" stroke-linecap="round"/>' +
'<circle cx="278" cy="170" r="3" fill="#1f140a"/><circle cx="322" cy="170" r="3" fill="#1f140a"/>' +
'<path d="M298 168c-2 8-2 14 0 22" fill="none" stroke="#3a2710" stroke-width="2" stroke-linecap="round"/>' +
/* 短髭 */
'<path d="M278 198c6 8 14 10 22 4M322 198c-6 8-14 10-22 4" fill="none" stroke="#1f140a" stroke-width="2.6" stroke-linecap="round"/>' +
/* 虬髯（大黑须，分三绺垂胸） */
'<path d="M268 200c-10 28-8 60 6 90 10 14 22 14 26 0 6-32 8-66-2-96-4 6-10 10-14 4-4 8-12 6-16 2z" fill="#1f140a"/>' +
'<path d="M332 200c10 28 8 60-6 90-10 14-22 14-26 0-6-32-8-66 2-96 4 6 10 10 14 4 4 8 12 6 16 2z" fill="#1f140a"/>' +
'<path d="M298 218c-4 30-2 64 2 92 6 8 12 8 14 0 4-30 6-62 2-92-4 4-10 4-18 0z" fill="#1f140a"/>' +
'</svg>'
  };

  window.DEITIES = window.DEITIES || {};
  window.DEITIES.tao = [yuanchu, lingbao, daode, yuhuang, zhaogong];
})();