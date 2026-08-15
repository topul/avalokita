/* ══════════════════════════════════════════
   deities-tao.js · 道门神像库
   每尊含 id / title / honor / kind / sound / gatha / svg
   svg 为自包含 SVG（八卦光环、云座、道冠、长须、道袍、法器）
   ══════════════════════════════════════════ */
(function () {
  'use strict';

  var BA = '<g class="bagua-ring" font-size="30" text-anchor="middle" dominant-baseline="central" fill="#9fe0cf" fill-opacity=".72">' +
    '<text x="300" y="46">☰</text><text x="423" y="97">☱</text><text x="474" y="220">☲</text><text x="423" y="343">☳</text>' +
    '<text x="300" y="394">☷</text><text x="177" y="343">☶</text><text x="126" y="220">☵</text><text x="177" y="97">☴</text></g>';

  var yuanchu = {
    id: 'yuanchu', title: '玉清元始天尊', short: '元始天尊', honor: '三清 · 玉清', kind: 'tianzun',
    sound: 'bell',
    gatha: '道本无言，立象尽意；一元既判，万化由生。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="玉清元始天尊">' +
'  <defs>' +
'    <radialGradient id="dt_yc_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#cdf3e6" stop-opacity=".55"/><stop offset=".5" stop-color="#5fa899" stop-opacity=".2"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="dt_yc_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#e6fbf4" stop-opacity=".92"/><stop offset=".72" stop-color="#8fd8c8" stop-opacity=".5"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="dt_yc_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0f7f3"/><stop offset=".5" stop-color="#cfe2da"/><stop offset="1" stop-color="#9cbcb0"/></linearGradient>' +
'    <linearGradient id="dt_yc_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff0ea"/><stop offset="1" stop-color="#9cc4b8"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="220" r="250" fill="url(#dt_yc_g)"/>' +
'  <circle cx="300" cy="180" r="156" fill="none" stroke="#9fe0cf" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'  <g class="spin-slow">' + BA + '</g>' +
'  <circle cx="300" cy="180" r="118" fill="url(#dt_yc_h)"/>' +
'  <circle cx="300" cy="180" r="118" fill="none" stroke="#9fe0cf" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="cloud-seat"><path d="M150 468c0-30 67-52 150-52s150 22 150 52c-20 24-67 36-150 36s-130-12-150-36z" fill="url(#dt_yc_robe)"/><path d="M300 420c-40 0-72 12-90 30 28 12 60 16 90 16s62-4 90-16c-18-18-50-30-90-30z" fill="#bcd8ce"/><g fill="none" stroke="#7fb3a4" stroke-width="2" stroke-opacity=".6"><path d="M170 456c14-10 36-10 50 0s36 10 50 0"/><path d="M330 456c14-10 36-10 50 0s36 10 50 0"/></g></g>' +
'  <path d="M300 300c-66 0-112 24-126 66-10 34-12 78-12 120 0 22 92 34 138 34s138-12 138-34c0-42-2-86-12-120-14-42-60-66-126-66z" fill="url(#dt_yc_skin)"/>' +
'  <path d="M300 300c-44 0-84 16-108 44 16 66 26 112 26 164 44-9 70-20 82-20 12 0 38 11 82 20 0-52 10-98 26-164-24-28-64-44-108-44z" fill="url(#dt_yc_robe)"/>' +
'  <g fill="none" stroke="#7fb3a4" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"><path d="M244 358c8 40 6 94 2 152"/><path d="M356 358c-8 40-6 94-2 152"/><path d="M300 332v166"/></g>' +
'  <rect x="284" y="262" width="32" height="42" rx="13" fill="url(#dt_yc_skin)"/>' +
'  <g class="head">' +
'    <path d="M256 150c0-30 20-54 44-54s44 24 44 54c0 40-20 74-44 74s-44-34-44-74z" fill="url(#dt_yc_skin)"/>' +
'    <path d="M250 150c-2-32 18-56 50-56s52 24 50 56c-12-14-26-20-50-20s-38 6-50 20z" fill="#7fb3a4"/>' +
'    <path d="M278 100c-4-16 4-28 22-28s26 12 22 28c-8-6-14-6-22-6s-14 0-22 6z" fill="#e6fbf4" stroke="#7fb3a4" stroke-width="1.6"/>' +
'    <circle cx="300" cy="98" r="7" fill="#7fb3a4"/>' +
'    <circle cx="300" cy="172" r="4" fill="#ffffff"/>' +
'    <path d="M272 180c9-6 18-6 26 0M302 180c8-6 16-6 24 0" fill="none" stroke="#5a8a7c" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M274 192c7-4 16-4 23 0M303 192c7-4 15-4 22 0" fill="none" stroke="#3a5a50" stroke-width="2.2" stroke-linecap="round"/>' +
'    <path d="M300 190v18c-3 3-8 3-11 1" fill="none" stroke="#8aa89c" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M288 224c8 5 16 5 24 0" fill="none" stroke="#7c9c90" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M252 170c-9 4-12 18-5 30 6 8 14 6 16-2M348 170c9 4 12 18 5 30-6 8-14 6-16-2" fill="url(#dt_yc_skin)" stroke="#8aa89c" stroke-width="1.3"/>' +
'    <path d="M276 232c-4 26-2 50 4 70-10-4-18-10-22-20 4-18 8-36 18-50zM324 232c4 26 2 50-4 70 10-4 18-10 22-20-4-18-8-36-18-50z" fill="#e8fbf5" stroke="#9cc4b8" stroke-width="1.2"/>' +
'  </g>' +
'  <g class="pearl"><ellipse cx="300" cy="420" rx="34" ry="22" fill="url(#dt_yc_skin)"/><circle cx="300" cy="404" r="16" fill="#dff0ea" stroke="#7fb3a4" stroke-width="1.4"/><circle cx="295" cy="399" r="4" fill="#fff" opacity=".8"/></g>' +
'</svg>'
  };

  var lingbao = {
    id: 'lingbao', title: '上清灵宝天尊', short: '灵宝天尊', honor: '三清 · 上清', kind: 'tianzun',
    sound: 'bell',
    gatha: '灵文梵气，运化诸天；三宝既立，万法攸归。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="上清灵宝天尊">' +
'  <defs>' +
'    <radialGradient id="dt_lb_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#cdf3e6" stop-opacity=".55"/><stop offset=".5" stop-color="#5fa899" stop-opacity=".2"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="dt_lb_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#e6fbf4" stop-opacity=".92"/><stop offset=".72" stop-color="#8fd8c8" stop-opacity=".5"/><stop offset="1" stop-color="#5fa899" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="dt_lb_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0f7f3"/><stop offset=".5" stop-color="#cfe2da"/><stop offset="1" stop-color="#9cbcb0"/></linearGradient>' +
'    <linearGradient id="dt_lb_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcefe8"/><stop offset="1" stop-color="#94bdb1"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="220" r="250" fill="url(#dt_lb_g)"/>' +
'  <circle cx="300" cy="180" r="156" fill="none" stroke="#9fe0cf" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'  <g class="spin-slow">' + BA + '</g>' +
'  <circle cx="300" cy="180" r="118" fill="url(#dt_lb_h)"/>' +
'  <circle cx="300" cy="180" r="118" fill="none" stroke="#9fe0cf" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="cloud-seat"><path d="M150 468c0-30 67-52 150-52s150 22 150 52c-20 24-67 36-150 36s-130-12-150-36z" fill="url(#dt_lb_robe)"/><path d="M300 420c-40 0-72 12-90 30 28 12 60 16 90 16s62-4 90-16c-18-18-50-30-90-30z" fill="#b6d4ca"/><g fill="none" stroke="#7fb3a4" stroke-width="2" stroke-opacity=".6"><path d="M170 456c14-10 36-10 50 0s36 10 50 0"/><path d="M330 456c14-10 36-10 50 0s36 10 50 0"/></g></g>' +
'  <path d="M300 300c-66 0-112 24-126 66-10 34-12 78-12 120 0 22 92 34 138 34s138-12 138-34c0-42-2-86-12-120-14-42-60-66-126-66z" fill="url(#dt_lb_skin)"/>' +
'  <path d="M300 300c-44 0-84 16-108 44 16 66 26 112 26 164 44-9 70-20 82-20 12 0 38 11 82 20 0-52 10-98 26-164-24-28-64-44-108-44z" fill="url(#dt_lb_robe)"/>' +
'  <g fill="none" stroke="#7fb3a4" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"><path d="M244 358c8 40 6 94 2 152"/><path d="M356 358c-8 40-6 94-2 152"/><path d="M300 332v166"/></g>' +
'  <rect x="284" y="262" width="32" height="42" rx="13" fill="url(#dt_lb_skin)"/>' +
'  <g class="head">' +
'    <path d="M256 150c0-30 20-54 44-54s44 24 44 54c0 40-20 74-44 74s-44-34-44-74z" fill="url(#dt_lb_skin)"/>' +
'    <path d="M250 150c-2-32 18-56 50-56s52 24 50 56c-12-14-26-20-50-20s-38 6-50 20z" fill="#7fb3a4"/>' +
'    <path d="M276 100c-2-16 8-28 24-28s26 12 24 28c-8-6-14-6-24-6s-16 0-24 6z" fill="#e6fbf4" stroke="#7fb3a4" stroke-width="1.6"/>' +
'    <circle cx="300" cy="98" r="7" fill="#7fb3a4"/>' +
'    <circle cx="300" cy="172" r="4" fill="#ffffff"/>' +
'    <path d="M272 180c9-6 18-6 26 0M302 180c8-6 16-6 24 0" fill="none" stroke="#5a8a7c" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M274 192c7-4 16-4 23 0M303 192c7-4 15-4 22 0" fill="none" stroke="#3a5a50" stroke-width="2.2" stroke-linecap="round"/>' +
'    <path d="M300 190v18c-3 3-8 3-11 1" fill="none" stroke="#8aa89c" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M288 224c8 5 16 5 24 0" fill="none" stroke="#7c9c90" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M252 170c-9 4-12 18-5 30 6 8 14 6 16-2M348 170c9 4 12 18 5 30-6 8-14 6-16-2" fill="url(#dt_lb_skin)" stroke="#8aa89c" stroke-width="1.3"/>' +
'    <path d="M276 232c-4 24-2 46 4 64-10-4-18-10-22-18 4-16 8-34 18-46zM324 232c4 24 2 46-4 64 10-4 18-10 22-18-4-16-8-34-18-46z" fill="#e8fbf5" stroke="#9cc4b8" stroke-width="1.2"/>' +
'  </g>' +
'  <g class="ruyi"><rect x="424" y="250" width="6" height="120" rx="3" fill="#caa24a" transform="rotate(14 427 310)"/><path d="M427 246c-12-6-22 4-16 16 8 8 22 6 22-4 8 4 18-4 14-14z" fill="#e9c884" stroke="#9a6c2a" stroke-width="1.4"/></g>' +
'  <g class="jade"><rect x="150" y="356" width="64" height="22" rx="11" fill="#cfe2da" stroke="#7fb3a4" stroke-width="1.6"/><rect x="150" y="356" width="14" height="22" rx="7" fill="#7fb3a4"/><rect x="200" y="356" width="14" height="22" rx="7" fill="#7fb3a4"/></g>' +
'</svg>'
  };

  var daode = {
    id: 'daode', title: '太清道德天尊', short: '道德天尊', honor: '三清 · 太清', kind: 'tianzun',
    sound: 'bell',
    gatha: '道可道，非常道；名可名，非常名。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="太清道德天尊">' +
'  <defs>' +
'    <radialGradient id="dt_dd_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#e7d9b8" stop-opacity=".5"/><stop offset=".5" stop-color="#a98f5e" stop-opacity=".2"/><stop offset="1" stop-color="#a98f5e" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="dt_dd_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fbf2dc" stop-opacity=".92"/><stop offset=".72" stop-color="#d8c489" stop-opacity=".5"/><stop offset="1" stop-color="#a98f5e" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="dt_dd_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4ecd9"/><stop offset=".5" stop-color="#dccfac"/><stop offset="1" stop-color="#b39a6a"/></linearGradient>' +
'    <linearGradient id="dt_dd_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8e1cf"/><stop offset="1" stop-color="#b3a884"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="220" r="250" fill="url(#dt_dd_g)"/>' +
'  <circle cx="300" cy="180" r="156" fill="none" stroke="#cdbf8e" stroke-opacity=".24" stroke-width="1" stroke-dasharray="3 8"/>' +
'  <g class="spin-slow">' + BA + '</g>' +
'  <circle cx="300" cy="180" r="118" fill="url(#dt_dd_h)"/>' +
'  <circle cx="300" cy="180" r="118" fill="none" stroke="#cdbf8e" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="cloud-seat"><path d="M150 468c0-30 67-52 150-52s150 22 150 52c-20 24-67 36-150 36s-130-12-150-36z" fill="url(#dt_dd_robe)"/><path d="M300 420c-40 0-72 12-90 30 28 12 60 16 90 16s62-4 90-16c-18-18-50-30-90-30z" fill="#cfc7ab"/></g>' +
'  <path d="M300 300c-66 0-112 24-126 66-10 34-12 78-12 120 0 22 92 34 138 34s138-12 138-34c0-42-2-86-12-120-14-42-60-66-126-66z" fill="url(#dt_dd_skin)"/>' +
'  <path d="M300 300c-44 0-84 16-108 44 16 66 26 112 26 164 44-9 70-20 82-20 12 0 38 11 82 20 0-52 10-98 26-164-24-28-64-44-108-44z" fill="url(#dt_dd_robe)"/>' +
'  <g fill="none" stroke="#a9986a" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"><path d="M244 358c8 40 6 94 2 152"/><path d="M356 358c-8 40-6 94-2 152"/><path d="M300 332v166"/></g>' +
'  <rect x="284" y="262" width="32" height="42" rx="13" fill="url(#dt_dd_skin)"/>' +
'  <g class="head">' +
'    <path d="M256 150c0-30 20-54 44-54s44 24 44 54c0 40-20 74-44 74s-44-34-44-74z" fill="url(#dt_dd_skin)"/>' +
'    <path d="M250 150c-2-32 18-56 50-56s52 24 50 56c-12-14-26-20-50-20s-38 6-50 20z" fill="#8a7a4e"/>' +
'    <path d="M276 100c-2-16 8-28 24-28s26 12 24 28c-8-6-14-6-24-6s-16 0-24 6z" fill="#e8e1cf" stroke="#8a7a4e" stroke-width="1.6"/>' +
'    <circle cx="300" cy="98" r="7" fill="#8a7a4e"/>' +
'    <circle cx="300" cy="170" r="4" fill="#fff7e0"/>' +
'    <path d="M272 178c9-6 18-6 26 0M302 178c8-6 16-6 24 0" fill="none" stroke="#6a5a32" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M274 190c7-4 16-4 23 0M303 190c7-4 15-4 22 0" fill="none" stroke="#3a3320" stroke-width="2.2" stroke-linecap="round"/>' +
'    <path d="M300 188v16c-3 3-8 3-11 1" fill="none" stroke="#a9986a" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M288 220c8 5 16 5 24 0" fill="none" stroke="#8a7a4e" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M252 168c-9 4-12 18-5 30 6 8 14 6 16-2M348 168c9 4 12 18 5 30-6 8-14 6-16-2" fill="url(#dt_dd_skin)" stroke="#a9986a" stroke-width="1.3"/>' +
'    <path d="M278 228c-6 40-4 78 6 110-12-8-22-18-28-32 6-30 10-62 22-78zM322 228c6 40 4 78-6 110 12-8 22-18 28-32-6-30-10-62-22-78z" fill="#f4ecd9" stroke="#cdbf8e" stroke-width="1.2"/>' +
'    <path d="M284 250c-2 60-1 96 3 120M316 250c2 60 1 96-3 120" fill="none" stroke="#e8e1cf" stroke-width="3" stroke-linecap="round"/>' +
'  </g>' +
'  <g class="fan"><path d="M424 250c-8 30-6 64 6 96" fill="none" stroke="#8a7a4e" stroke-width="5" stroke-linecap="round"/><path d="M412 240a40 40 0 0 1 30 8c-6-22-18-30-30-8z" fill="#e8e1cf" stroke="#8a7a4e" stroke-width="1.4"/><circle cx="427" cy="338" r="9" fill="#cdbf8e"/><path d="M427 338c0-30 0-30 0-30" stroke="#8a7a4e" stroke-width="2"/></g>' +
'  <g class="tjs"><circle cx="300" cy="430" r="16" fill="#8a7a4e"/><path d="M300 414a16 16 0 0 1 0 32 8 8 0 0 1 0-16 8 8 0 0 0 0-16z" fill="#e8e1cf" opacity=".85"/><circle cx="300" cy="414" r="3" fill="#3a3320"/><circle cx="300" cy="446" r="3" fill="#e8e1cf"/></g>' +
'</svg>'
  };

  var yuhuang = {
    id: 'yuhuang', title: '玉皇大帝', short: '玉皇大帝', honor: '昊天上帝', kind: 'dadi',
    sound: 'bell',
    gatha: '昊天上帝，统御万灵；荡荡难名，巍巍在上。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="玉皇大帝">' +
'  <defs>' +
'    <radialGradient id="dt_yh_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#fff0cc" stop-opacity=".6"/><stop offset=".5" stop-color="#d8b25a" stop-opacity=".2"/><stop offset="1" stop-color="#d8b25a" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="dt_yh_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff3d0" stop-opacity=".92"/><stop offset=".72" stop-color="#e6c270" stop-opacity=".5"/><stop offset="1" stop-color="#c79a3a" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="dt_yh_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e3bd"/><stop offset=".5" stop-color="#e3c486"/><stop offset="1" stop-color="#b8954c"/></linearGradient>' +
'    <linearGradient id="dt_yh_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0e3c2"/><stop offset="1" stop-color="#c2a86e"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="220" r="250" fill="url(#dt_yh_g)"/>' +
'  <circle cx="300" cy="180" r="156" fill="none" stroke="#e6c270" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'  <g class="spin-slow"><circle cx="300" cy="180" r="140" fill="none" stroke="#e6c270" stroke-opacity=".4" stroke-width="1" stroke-dasharray="2 10"/></g>' +
'  <circle cx="300" cy="180" r="118" fill="url(#dt_yh_h)"/>' +
'  <circle cx="300" cy="180" r="118" fill="none" stroke="#e6c270" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="cloud-seat"><path d="M150 468c0-30 67-52 150-52s150 22 150 52c-20 24-67 36-150 36s-130-12-150-36z" fill="url(#dt_yh_robe)"/><path d="M300 420c-40 0-72 12-90 30 28 12 60 16 90 16s62-4 90-16c-18-18-50-30-90-30z" fill="#d8c690"/></g>' +
'  <path d="M300 300c-66 0-112 24-126 66-10 34-12 78-12 120 0 22 92 34 138 34s138-12 138-34c0-42-2-86-12-120-14-42-60-66-126-66z" fill="url(#dt_yh_skin)"/>' +
'  <path d="M300 300c-44 0-84 16-108 44 16 66 26 112 26 164 44-9 70-20 82-20 12 0 38 11 82 20 0-52 10-98 26-164-24-28-64-44-108-44z" fill="url(#dt_yh_robe)"/>' +
'  <g fill="none" stroke="#b8954c" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"><path d="M244 358c8 40 6 94 2 152"/><path d="M356 358c-8 40-6 94-2 152"/><path d="M300 332v166"/></g>' +
'  <rect x="284" y="262" width="32" height="42" rx="13" fill="url(#dt_yh_skin)"/>' +
'  <g class="head">' +
'    <path d="M256 150c0-30 20-54 44-54s44 24 44 54c0 40-20 74-44 74s-44-34-44-74z" fill="url(#dt_yh_skin)"/>' +
'    <path d="M252 148c-2-30 16-52 48-52s50 22 48 52c-12-12-24-18-48-18s-36 6-48 18z" fill="#b8954c"/>' +
'    <path d="M270 110h60v10c-12 4-48 4-60 0z" fill="#e6c270" stroke="#b8954c" stroke-width="1.4"/>' +
'    <g fill="#3a2a10">' +
'      <rect x="280" y="96" width="4" height="18" rx="2"/><rect x="290" y="94" width="4" height="20" rx="2"/><rect x="300" y="92" width="4" height="22" rx="2"/><rect x="310" y="94" width="4" height="20" rx="2"/><rect x="320" y="96" width="4" height="18" rx="2"/>' +
'    </g>' +
'    <rect x="266" y="106" width="68" height="8" rx="4" fill="#8a6824"/>' +
'    <circle cx="300" cy="172" r="4" fill="#fff7e0"/>' +
'    <path d="M272 180c9-6 18-6 26 0M302 180c8-6 16-6 24 0" fill="none" stroke="#6a4a20" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M274 192c7-4 16-4 23 0M303 192c7-4 15-4 22 0" fill="none" stroke="#3a2710" stroke-width="2.2" stroke-linecap="round"/>' +
'    <path d="M300 190v16c-3 3-8 3-11 1" fill="none" stroke="#a87c34" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M288 222c8 5 16 5 24 0" fill="none" stroke="#8a5a22" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M252 168c-9 4-12 18-5 30 6 8 14 6 16-2M348 168c9 4 12 18 5 30-6 8-14 6-16-2" fill="url(#dt_yh_skin)" stroke="#a87c34" stroke-width="1.3"/>' +
'    <path d="M278 230c-4 30-2 56 4 76-10-4-18-10-22-18 4-22 8-44 18-58zM322 230c4 30 2 56-4 76 10-4 18-10 22-18-4-22-8-44-18-58z" fill="#f3e3bd" stroke="#cdbf8e" stroke-width="1.2"/>' +
'  </g>' +
'  <g class="gui"><rect x="276" y="404" width="48" height="58" rx="6" fill="#e6c270" stroke="#b8954c" stroke-width="1.6"/><rect x="276" y="404" width="48" height="10" rx="5" fill="#b8954c"/></g>' +
'</svg>'
  };

  var zhaogong = {
    id: 'zhaogong', title: '赵公明财神真君', short: '赵公明', honor: '正财神', kind: 'cai',
    sound: 'bell',
    gatha: '执鞭驱邪，聚宝济贫；买卖求财，公而无私。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="赵公明财神真君">' +
'  <defs>' +
'    <radialGradient id="dt_zg_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#ffedc8" stop-opacity=".6"/><stop offset=".5" stop-color="#d8a23a" stop-opacity=".22"/><stop offset="1" stop-color="#d8a23a" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="dt_zg_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff0c8" stop-opacity=".92"/><stop offset=".72" stop-color="#e0a844" stop-opacity=".5"/><stop offset="1" stop-color="#b8842a" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="dt_zg_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8b48a"/><stop offset=".5" stop-color="#b89169"/><stop offset="1" stop-color="#8a6646"/></linearGradient>' +
'    <linearGradient id="dt_zg_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c98f3e"/><stop offset="1" stop-color="#8a5a1e"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="220" r="250" fill="url(#dt_zg_g)"/>' +
'  <circle cx="300" cy="180" r="156" fill="none" stroke="#e0a844" stroke-opacity=".22" stroke-width="1" stroke-dasharray="3 8"/>' +
'  <g class="spin-slow"><circle cx="300" cy="180" r="140" fill="none" stroke="#e0a844" stroke-opacity=".4" stroke-width="1" stroke-dasharray="2 10"/></g>' +
'  <circle cx="300" cy="180" r="118" fill="url(#dt_zg_h)"/>' +
'  <circle cx="300" cy="180" r="118" fill="none" stroke="#e0a844" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="cloud-seat"><path d="M150 468c0-30 67-52 150-52s150 22 150 52c-20 24-67 36-150 36s-130-12-150-36z" fill="url(#dt_zg_robe)"/><path d="M300 420c-40 0-72 12-90 30 28 12 60 16 90 16s62-4 90-16c-18-18-50-30-90-30z" fill="#b8853a"/></g>' +
'  <path d="M300 300c-66 0-112 24-126 66-10 34-12 78-12 120 0 22 92 34 138 34s138-12 138-34c0-42-2-86-12-120-14-42-60-66-126-66z" fill="url(#dt_zg_skin)"/>' +
'  <path d="M300 300c-44 0-84 16-108 44 16 66 26 112 26 164 44-9 70-20 82-20 12 0 38 11 82 20 0-52 10-98 26-164-24-28-64-44-108-44z" fill="url(#dt_zg_robe)"/>' +
'  <g fill="none" stroke="#7c4a1a" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"><path d="M244 358c8 40 6 94 2 152"/><path d="M356 358c-8 40-6 94-2 152"/><path d="M300 332v166"/></g>' +
'  <rect x="284" y="262" width="32" height="42" rx="13" fill="url(#dt_zg_skin)"/>' +
'  <g class="head">' +
'    <path d="M256 150c0-30 20-54 44-54s44 24 44 54c0 40-20 74-44 74s-44-34-44-74z" fill="url(#dt_zg_skin)"/>' +
'    <path d="M252 148c-2-30 16-52 48-52s50 22 48 52c-12-12-24-18-48-18s-36 6-48 18z" fill="#3a2a18"/>' +
'    <path d="M274 104c-3-14 5-24 22-24s25 10 22 24c-8-5-14-5-22-5s-14 0-22 5z" fill="#c98f3e" stroke="#7c4a1a" stroke-width="1.6"/>' +
'    <circle cx="300" cy="102" r="6" fill="#7c4a1a"/>' +
'    <circle cx="318" cy="110" r="2.4" fill="#3a2a18"/><circle cx="306" cy="120" r="2.4" fill="#3a2a18"/><circle cx="294" cy="116" r="2.4" fill="#3a2a18"/>' +
'    <circle cx="300" cy="172" r="4" fill="#fff7e0"/>' +
'    <path d="M270 180c10-6 20-6 28 0M302 180c8-6 16-6 24 0" fill="none" stroke="#3a2a18" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M272 192c8-4 18-4 26 0M302 192c8-4 16-4 24 0" fill="none" stroke="#1f140a" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M300 190v16c-3 3-8 3-11 1" fill="none" stroke="#7c4a1a" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M286 222c10 5 18 5 28 0" fill="none" stroke="#5a3a1a" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M252 168c-10 4-14 18-6 32 6 8 16 6 18-2M348 168c10 4 14 18 6 32-6 8-16 6-18-2" fill="url(#dt_zg_skin)" stroke="#7c4a1a" stroke-width="1.3"/>' +
'    <path d="M276 236c-2 26 0 48 6 64-8-6-14-14-18-24 4-16 6-32 12-40zM324 236c2 26 0 48-6 64 8-6 14-14 18-24-4-16-6-32-12-40z" fill="#3a2a18"/>' +
'    <path d="M284 248c-2 50-1 82 3 104M316 248c2 50 1 82-3 104" fill="none" stroke="#1f140a" stroke-width="3" stroke-linecap="round"/>' +
'  </g>' +
'  <g class="whip"><rect x="424" y="246" width="7" height="140" rx="3" fill="#5a4a30" transform="rotate(12 427 316)"/><g fill="#7c4a1a"><circle cx="427" y="262" r="4"/><circle cx="430" y="288" r="4"/><circle cx="433" y="314" r="4"/><circle cx="436" y="340" r="4"/><circle cx="438" y="366" r="4"/></g><rect x="418" y="240" width="22" height="12" rx="5" fill="#3a2a18"/></g>' +
'  <g class="treasure"><path d="M236 452c-30 0-44 16-44 28 0 10 18 16 40 16s40-6 40-16c0-12-14-28-36-28z" fill="#e0a844" stroke="#8a5a1e" stroke-width="1.6"/><path d="M214 452c-8-10-8-22 0-30 8 8 8 20 0 30zM258 452c8-10 8-22 0-30-8 8-8 20 0 30z" fill="#c98f3e" stroke="#8a5a1e" stroke-width="1.4"/><rect x="226" y="476" width="22" height="14" rx="3" fill="#e0a844" stroke="#8a5a1e" stroke-width="1.2"/></g>' +
'</svg>'
  };

  window.DEITIES = window.DEITIES || {};
  window.DEITIES.tao = [yuanchu, lingbao, daode, yuhuang, zhaogong];
})();
