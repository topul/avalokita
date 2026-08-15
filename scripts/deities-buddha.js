/* ══════════════════════════════════════════
   deities-buddha.js · 佛门神像库
   每尊含 id / title / honor / kind / sound / gatha / svg
   svg 为自包含 SVG（头光、背光、莲座、衣纹、五官、宝冠、法器）
   ══════════════════════════════════════════ */
(function () {
  'use strict';

  var shakyamuni = {
    id: 'shakyamuni', title: '本师释迦牟尼佛', short: '释迦牟尼佛', honor: '佛陀', kind: 'fo',
    sound: 'inqing',
    gatha: '天上天下，唯我独尊；三界皆苦，我当安之。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="本师释迦牟尼佛">' +
'  <defs>' +
'    <radialGradient id="db_sh_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff4d2" stop-opacity=".6"/><stop offset=".5" stop-color="#eabd63" stop-opacity=".2"/><stop offset="1" stop-color="#eabd63" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="db_sh_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffeab4" stop-opacity=".95"/><stop offset=".72" stop-color="#e8b657" stop-opacity=".55"/><stop offset="1" stop-color="#caa248" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="db_sh_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe6b4"/><stop offset=".5" stop-color="#e3bd72"/><stop offset="1" stop-color="#b78a3d"/></linearGradient>' +
'    <linearGradient id="db_sh_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9a452"/><stop offset="1" stop-color="#9a6c2a"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="215" r="252" fill="url(#db_sh_g)"/>' +
'  <g class="spin-slow"><circle cx="300" cy="180" r="148" fill="none" stroke="#f3cd80" stroke-opacity=".28" stroke-width="1" stroke-dasharray="2 9"/></g>' +
'  <circle cx="300" cy="180" r="120" fill="url(#db_sh_h)"/>' +
'  <circle cx="300" cy="180" r="120" fill="none" stroke="#f3cd80" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <circle cx="300" cy="180" r="132" fill="none" stroke="#f3cd80" stroke-opacity=".22" stroke-width="1"/>' +
'  <g class="lotus-seat">' +
'    <path d="M150 470c0-34 67-58 150-58s150 24 150 58c-20 26-67 40-150 40s-130-14-150-40z" fill="url(#db_sh_robe)"/>' +
'    <path d="M168 470c-26 4-40 18-46 36 22 8 50 8 70-2-8-12-16-26-24-34z" fill="#caa248"/>' +
'    <path d="M432 470c26 4 40 18 46 36-22 8-50 8-70-2 8-12 16-26 24-34z" fill="#caa248"/>' +
'    <path d="M300 414c-40 0-72 14-90 34 28 14 60 18 90 18s62-4 90-18c-18-20-50-34-90-34z" fill="#e3bd72"/>' +
'    <g fill="#f0cd84" stroke="#c79a45" stroke-width="1" opacity=".92">' +
'      <path d="M250 446c-14-18-14-40 0-58 14 18 14 40 0 58z"/><path d="M300 440c-16-20-16-44 0-64 16 20 16 44 0 64z"/><path d="M350 446c14-18 14-40 0-58-14 18-14 40 0 58z"/><path d="M214 456c-12-16-12-36 0-52 12 16 12 36 0 52z"/><path d="M386 456c12-16 12-36 0-52-12 16-12 36 0 52z"/>' +
'    </g>' +
'  </g>' +
'  <path d="M300 300c-70 0-118 26-132 70-10 34-12 78-12 120 0 22 92 34 144 34s144-12 144-34c0-42-2-86-12-120-14-44-62-70-132-70z" fill="url(#db_sh_skin)"/>' +
'  <path d="M300 300c-50 0-92 18-118 48 18 70 30 120 30 176 56-10 88-22 88-22s32 12 88 22c0-56 12-106 30-176-26-30-68-48-118-48z" fill="url(#db_sh_robe)"/>' +
'  <g fill="none" stroke="#7c5320" stroke-opacity=".5" stroke-width="2.4" stroke-linecap="round"><path d="M236 360c10 40 8 96 4 156"/><path d="M364 360c-10 40-8 96-4 156"/><path d="M300 330v170"/><path d="M270 372c30 14 30 14 60 0"/></g>' +
'  <path d="M276 322c12 16 36 16 48 0-6 36-36 36-48 0z" fill="#caa248" opacity=".7"/>' +
'  <rect x="282" y="262" width="36" height="44" rx="14" fill="url(#db_sh_skin)"/>' +
'  <g class="head">' +
'    <path d="M300 92c-52 0-92 38-92 86 0 16 4 30 10 42 10-44 46-74 82-74s72 30 82 74c6-12 10-26 10-42 0-48-40-86-92-86z" fill="#6b4a1d"/>' +
'    <g fill="#5a3d16"><circle cx="262" cy="120" r="5"/><circle cx="282" cy="112" r="5"/><circle cx="300" cy="108" r="5"/><circle cx="318" cy="112" r="5"/><circle cx="338" cy="120" r="5"/><circle cx="252" cy="140" r="5"/><circle cx="276" cy="130" r="5"/><circle cx="300" cy="126" r="5"/><circle cx="324" cy="130" r="5"/><circle cx="348" cy="140" r="5"/><circle cx="246" cy="162" r="5"/><circle cx="300" cy="146" r="5"/><circle cx="354" cy="162" r="5"/></g>' +
'    <ellipse cx="300" cy="96" rx="22" ry="20" fill="#6b4a1d"/><ellipse cx="300" cy="92" rx="8" ry="7" fill="#fbe6b4"/>' +
'    <path d="M256 150c0-30 20-54 44-54s44 24 44 54c0 40-20 78-44 78s-44-38-44-78z" fill="url(#db_sh_skin)"/>' +
'    <circle cx="300" cy="172" r="4" fill="#fff7e0"/>' +
'    <path d="M270 178c10-7 20-7 28 0M302 178c8-7 18-7 28 0" fill="none" stroke="#6b4a1d" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M272 190c8-5 18-5 26 0M302 190c8-5 18-5 26 0" fill="none" stroke="#3a2710" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M300 188v18c-4 4-9 4-12 1" fill="none" stroke="#a87c34" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M288 222c8 5 16 5 24 0" fill="none" stroke="#8a5a22" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M252 168c-10 4-14 18-6 30 6 8 16 6 18-2M348 168c10 4 14 18 6 30-6 8-16 6-18-2" fill="url(#db_sh_skin)" stroke="#a87c34" stroke-width="1.4"/>' +
'  </g>' +
'  <g class="hands"><path d="M250 430c0-26 22-44 50-44s50 18 50 44c-16 12-34 16-50 16s-34-4-50-16z" fill="url(#db_sh_skin)"/><path d="M266 426c8-10 22-12 34-6 12-6 26-4 34 6-12 8-22 10-34 10s-22-2-34-10z" fill="#e3bd72"/></g>' +
'</svg>'
  };

  var guanyin = {
    id: 'guanyin', title: '观世音菩萨', short: '观世音菩萨', honor: '菩萨', kind: 'pu',
    sound: 'inqing',
    gatha: '瓶中甘露，遍洒人间；苦海常作渡人舟。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="观世音菩萨">' +
'  <defs>' +
'    <radialGradient id="db_gy_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff3da" stop-opacity=".6"/><stop offset=".5" stop-color="#e7c07a" stop-opacity=".2"/><stop offset="1" stop-color="#e7c07a" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="db_gy_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff0c6" stop-opacity=".95"/><stop offset=".72" stop-color="#e9c884" stop-opacity=".5"/><stop offset="1" stop-color="#c9a85a" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="db_gy_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdecc8"/><stop offset=".5" stop-color="#eccb8e"/><stop offset="1" stop-color="#c39a55"/></linearGradient>' +
'    <linearGradient id="db_gy_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3e6cf"/><stop offset="1" stop-color="#c9b083"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="215" r="252" fill="url(#db_gy_g)"/>' +
'  <g class="spin-slow"><circle cx="300" cy="178" r="146" fill="none" stroke="#e9c884" stroke-opacity=".26" stroke-width="1" stroke-dasharray="2 9"/></g>' +
'  <circle cx="300" cy="178" r="118" fill="url(#db_gy_h)"/>' +
'  <circle cx="300" cy="178" r="118" fill="none" stroke="#e9c884" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="lotus-seat"><path d="M150 470c0-34 67-58 150-58s150 24 150 58c-20 26-67 40-150 40s-130-14-150-40z" fill="url(#db_gy_robe)"/><path d="M300 414c-40 0-72 14-90 34 28 14 60 18 90 18s62-4 90-18c-18-20-50-34-90-34z" fill="#e3cd9e"/><g fill="#f3e6cf" stroke="#c9b083" stroke-width="1" opacity=".92"><path d="M250 446c-14-18-14-40 0-58 14 18 14 40 0 58z"/><path d="M300 440c-16-20-16-44 0-64 16 20 16 44 0 64z"/><path d="M350 446c14-18 14-40 0-58-14 18-14 40 0 58z"/></g></g>' +
'  <path d="M300 300c-66 0-112 24-126 66-10 34-12 78-12 120 0 22 92 34 138 34s138-12 138-34c0-42-2-86-12-120-14-42-60-66-126-66z" fill="url(#db_gy_skin)"/>' +
'  <path d="M300 300c-44 0-84 16-108 44 16 66 26 112 26 164 44-9 70-20 82-20 12 0 38 11 82 20 0-52 10-98 26-164-24-28-64-44-108-44z" fill="url(#db_gy_robe)"/>' +
'  <g fill="none" stroke="#a98c54" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"><path d="M244 358c8 40 6 94 2 152"/><path d="M356 358c-8 40-6 94-2 152"/><path d="M300 332v166"/></g>' +
'  <g fill="#e9c884" stroke="#b8954c" stroke-width="1" opacity=".85"><circle cx="276" cy="372" r="4"/><circle cx="300" cy="382" r="4"/><circle cx="324" cy="372" r="4"/><circle cx="266" cy="392" r="3.4"/><circle cx="334" cy="392" r="3.4"/></g>' +
'  <rect x="284" y="262" width="32" height="42" rx="13" fill="url(#db_gy_skin)"/>' +
'  <g class="head">' +
'    <path d="M254 150c0-30 20-54 46-54s46 24 46 54c0 40-20 74-46 74s-46-34-46-74z" fill="url(#db_gy_skin)"/>' +
'    <path d="M252 150c-2-34 18-58 48-58s50 24 48 58c-10-14-24-20-48-20s-38 6-48 20z" fill="#caa24a"/>' +
'    <path d="M274 96c0-14 12-24 26-24s26 10 26 24c-8-6-16-8-26-8s-18 2-26 8z" fill="#e9c884" stroke="#b8954c" stroke-width="1.4"/>' +
'    <circle cx="300" cy="104" r="9" fill="#caa24a"/><circle cx="300" cy="104" r="5" fill="#8a6a2c"/>' +
'    <circle cx="300" cy="172" r="4" fill="#fff7e0"/>' +
'    <path d="M272 180c9-6 18-6 26 0M302 180c8-6 16-6 24 0" fill="none" stroke="#7a5a2a" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M274 192c7-4 16-4 23 0M303 192c7-4 15-4 22 0" fill="none" stroke="#3a2710" stroke-width="2.2" stroke-linecap="round"/>' +
'    <path d="M300 190v16c-3 3-8 3-11 1" fill="none" stroke="#b08a44" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M289 220c7 4 15 4 22 0" fill="none" stroke="#9a6c34" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M250 168c-9 4-13 16-6 28 6 8 15 6 17-2M350 168c9 4 13 16 6 28-6 8-15 6-17-2" fill="url(#db_gy_skin)" stroke="#b08a44" stroke-width="1.3"/>' +
'  </g>' +
'  <g class="willow"><path d="M408 250c-6-40-4-70 18-92" fill="none" stroke="#6f9a5a" stroke-width="3" stroke-linecap="round"/><g fill="#7fae66"><circle cx="424" cy="160" r="4"/><circle cx="420" cy="178" r="3.6"/><circle cx="416" cy="196" r="3.4"/><circle cx="414" cy="214" r="3.2"/><circle cx="412" cy="232" r="3"/></g></g>' +
'  <g class="vase"><path d="M150 300c0-22 14-38 34-38 16 0 28 12 30 28 8 26-2 60-22 78-16 14-42 8-44-14-2-18 2-40 2-54z" fill="#dcc79a" stroke="#b09a5c" stroke-width="1.6"/><path d="M150 318c10 6 24 6 34 0" fill="none" stroke="#b09a5c" stroke-width="1.4"/><path d="M158 262c4 8 4 18 0 26" stroke="#8aa86a" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>' +
'</svg>'
  };

  var wenshu = {
    id: 'wenshu', title: '文殊师利菩萨', short: '文殊菩萨', honor: '菩萨', kind: 'pu',
    sound: 'inqing',
    gatha: '手持利剑，断诸烦恼；常驻般若，照见实相。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="文殊菩萨">' +
'  <defs>' +
'    <radialGradient id="db_ws_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff3da" stop-opacity=".6"/><stop offset=".5" stop-color="#e7c07a" stop-opacity=".2"/><stop offset="1" stop-color="#e7c07a" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="db_ws_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff0c6" stop-opacity=".95"/><stop offset=".72" stop-color="#e9c884" stop-opacity=".5"/><stop offset="1" stop-color="#c9a85a" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="db_ws_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdecc8"/><stop offset=".5" stop-color="#eccb8e"/><stop offset="1" stop-color="#c39a55"/></linearGradient>' +
'    <linearGradient id="db_ws_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef0e6"/><stop offset="1" stop-color="#bcc2a6"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="215" r="252" fill="url(#db_ws_g)"/>' +
'  <g class="spin-slow"><circle cx="300" cy="178" r="146" fill="none" stroke="#e9c884" stroke-opacity=".26" stroke-width="1" stroke-dasharray="2 9"/></g>' +
'  <circle cx="300" cy="178" r="118" fill="url(#db_ws_h)"/>' +
'  <circle cx="300" cy="178" r="118" fill="none" stroke="#e9c884" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="lotus-seat"><path d="M150 470c0-34 67-58 150-58s150 24 150 58c-20 26-67 40-150 40s-130-14-150-40z" fill="url(#db_ws_robe)"/><path d="M300 414c-40 0-72 14-90 34 28 14 60 18 90 18s62-4 90-18c-18-20-50-34-90-34z" fill="#d6dcc4"/><g fill="#eef0e6" stroke="#bcc2a6" stroke-width="1" opacity=".92"><path d="M250 446c-14-18-14-40 0-58 14 18 14 40 0 58z"/><path d="M300 440c-16-20-16-44 0-64 16 20 16 44 0 64z"/><path d="M350 446c14-18 14-40 0-58-14 18-14 40 0 58z"/></g></g>' +
'  <path d="M300 300c-66 0-112 24-126 66-10 34-12 78-12 120 0 22 92 34 138 34s138-12 138-34c0-42-2-86-12-120-14-42-60-66-126-66z" fill="url(#db_ws_skin)"/>' +
'  <path d="M300 300c-44 0-84 16-108 44 16 66 26 112 26 164 44-9 70-20 82-20 12 0 38 11 82 20 0-52 10-98 26-164-24-28-64-44-108-44z" fill="url(#db_ws_robe)"/>' +
'  <g fill="none" stroke="#9aa07e" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"><path d="M244 358c8 40 6 94 2 152"/><path d="M356 358c-8 40-6 94-2 152"/><path d="M300 332v166"/></g>' +
'  <rect x="284" y="262" width="32" height="42" rx="13" fill="url(#db_ws_skin)"/>' +
'  <g class="head">' +
'    <path d="M254 150c0-30 20-54 46-54s46 24 46 54c0 40-20 74-46 74s-46-34-46-74z" fill="url(#db_ws_skin)"/>' +
'    <path d="M252 150c-2-34 18-58 48-58s50 24 48 58c-10-14-24-20-48-20s-38 6-48 20z" fill="#caa24a"/>' +
'    <path d="M276 98c-4-12 4-22 22-22s26 10 22 22c-8-4-14-4-22-4s-14 0-22 4z" fill="#e9c884" stroke="#b8954c" stroke-width="1.4"/>' +
'    <circle cx="300" cy="100" r="7" fill="#caa24a"/>' +
'    <circle cx="300" cy="172" r="4" fill="#fff7e0"/>' +
'    <path d="M272 180c9-6 18-6 26 0M302 180c8-6 16-6 24 0" fill="none" stroke="#7a5a2a" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M274 192c7-4 16-4 23 0M303 192c7-4 15-4 22 0" fill="none" stroke="#3a2710" stroke-width="2.2" stroke-linecap="round"/>' +
'    <path d="M300 190v16c-3 3-8 3-11 1" fill="none" stroke="#b08a44" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M289 220c7 4 15 4 22 0" fill="none" stroke="#9a6c34" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M250 168c-9 4-13 16-6 28 6 8 15 6 17-2M350 168c9 4 13 16 6 28-6 8-15 6-17-2" fill="url(#db_ws_skin)" stroke="#b08a44" stroke-width="1.3"/>' +
'  </g>' +
'  <g class="sword"><rect x="430" y="120" width="6" height="150" rx="3" fill="#cfd6dd" stroke="#8b96a0" stroke-width="1.2" transform="rotate(18 433 195)"/><path d="M433 116l-10 18 10 10 10-10z" fill="#eef2f6" stroke="#8b96a0" stroke-width="1.2"/><rect x="416" y="262" width="34" height="9" rx="4" fill="#caa24a"/></g>' +
'  <g class="scroll"><rect x="150" y="356" width="64" height="22" rx="11" fill="#f3e6cf" stroke="#b09a5c" stroke-width="1.6"/><rect x="150" y="356" width="14" height="22" rx="7" fill="#caa24a"/><rect x="200" y="356" width="14" height="22" rx="7" fill="#caa24a"/></g>' +
'</svg>'
  };

  var mile = {
    id: 'mile', title: '弥勒菩萨', short: '弥勒菩萨', honor: '菩萨 · 笑口财神', kind: 'cai',
    sound: 'inqing',
    gatha: '大肚能容，容天下难容之事；笑口常开，笑世间可笑之人。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="弥勒菩萨">' +
'  <defs>' +
'    <radialGradient id="db_ml_g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#fff4d2" stop-opacity=".6"/><stop offset=".5" stop-color="#eabd63" stop-opacity=".2"/><stop offset="1" stop-color="#eabd63" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="db_ml_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffeab4" stop-opacity=".9"/><stop offset=".72" stop-color="#e8b657" stop-opacity=".5"/><stop offset="1" stop-color="#caa248" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="db_ml_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe6b4"/><stop offset=".5" stop-color="#e9c47a"/><stop offset="1" stop-color="#bf9446"/></linearGradient>' +
'    <linearGradient id="db_ml_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d99a4e"/><stop offset="1" stop-color="#9a5f24"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="225" r="250" fill="url(#db_ml_g)"/>' +
'  <g class="spin-slow"><circle cx="300" cy="200" r="150" fill="none" stroke="#f3cd80" stroke-opacity=".26" stroke-width="1" stroke-dasharray="2 9"/></g>' +
'  <circle cx="300" cy="200" r="124" fill="url(#db_ml_h)"/>' +
'  <circle cx="300" cy="200" r="124" fill="none" stroke="#f3cd80" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="lotus-seat"><path d="M150 478c0-32 67-54 150-54s150 22 150 54c-20 24-67 36-150 36s-130-12-150-36z" fill="url(#db_ml_robe)"/><path d="M300 426c-40 0-72 12-90 30 28 12 60 16 90 16s62-4 90-16c-18-18-50-30-90-30z" fill="#e3bd72"/></g>' +
'  <path d="M300 320c-88 0-140 30-150 70-6 22-8 150-8 196 0 18 78 28 158 28s158-10 158-28c0-46-2-174-8-196-10-40-62-70-150-70z" fill="url(#db_ml_skin)"/>' +
'  <path d="M300 320c-56 0-100 20-122 50 14 80 22 138 22 174 40-8 64-18 100-18 36 0 60 10 100 18 0-36 8-94 22-174-22-30-66-50-122-50z" fill="url(#db_ml_robe)"/>' +
'  <g fill="none" stroke="#7c5320" stroke-opacity=".45" stroke-width="2.2" stroke-linecap="round"><path d="M226 392c14 60 12 130 6 196"/><path d="M374 392c-14 60-12 130-6 196"/></g>' +
'  <ellipse cx="300" cy="430" rx="92" ry="70" fill="url(#db_ml_skin)" opacity=".96"/>' +
'  <g fill="#caa248" stroke="#a87c34" stroke-width="1" opacity=".8"><circle cx="252" cy="404" r="4"/><circle cx="300" cy="398" r="4"/><circle cx="348" cy="404" r="4"/><circle cx="276" cy="430" r="4"/><circle cx="324" cy="430" r="4"/><circle cx="300" cy="458" r="4"/></g>' +
'  <g class="beads"><path d="M252 360c-10 40-6 96 8 150" fill="none" stroke="#8a5a22" stroke-width="5" stroke-linecap="round"/></g>' +
'  <path d="M268 250c-44 4-78 30-86 70 28-18 64-26 112-22" fill="url(#db_ml_robe)"/>' +
'  <rect x="280" y="250" width="40" height="46" rx="16" fill="url(#db_ml_skin)"/>' +
'  <g class="head">' +
'    <path d="M300 118c-54 0-94 40-94 90 0 50 40 92 94 92s94-42 94-92c0-50-40-90-94-90z" fill="url(#db_ml_skin)"/>' +
'    <path d="M226 196c-6-26 4-46 18-58-4 26 6 50 18 64-14 4-30 2-36-6z" fill="#6b4a1d"/><path d="M374 196c6-26-4-46-18-58 4 26-6 50-18 64 14 4 30 2 36-6z" fill="#6b4a1d"/>' +
'    <ellipse cx="300" cy="120" rx="20" ry="16" fill="#6b4a1d"/>' +
'    <circle cx="300" cy="118" r="5" fill="#fbe6b4"/>' +
'    <path d="M256 196c12-9 24-13 34-9M344 196c-12-9-24-13-34-9" fill="none" stroke="#7a5a2a" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M262 214c10-7 20-10 28-7M338 214c-10-7-20-10-28-7" fill="none" stroke="#3a2710" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M300 210v14c-3 3-8 3-11 1" fill="none" stroke="#a87c34" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M276 248c14 14 34 18 48 6" fill="none" stroke="#8a5a22" stroke-width="3" stroke-linecap="round"/>' +
'    <path d="M258 200c-10 6-14 20-6 32 6 8 16 6 18-2M342 200c10 6 14 20 6 32-6 8-16 6-18-2" fill="url(#db_ml_skin)" stroke="#a87c34" stroke-width="1.3"/>' +
'    <g fill="#e9c884" stroke="#b8954c" stroke-width="1"><circle cx="262" cy="232" r="12"/><circle cx="338" cy="232" r="12"/></g>' +
'  </g>' +
'  <g class="cloth"><path d="M196 486c-18-8-30-26-32-48 14 8 30 14 46 16-2 14 0 24 2 32z" fill="#caa248"/><path d="M404 486c18-8 30-26 32-48-14 8-30 14-46 16 2 14 0 24-2 32z" fill="#caa248"/></g>' +
'</svg>'
  };

  var caibao = {
    id: 'caibao', title: '财宝天王', short: '财宝天王', honor: '护法 · 武财神', kind: 'cai',
    sound: 'inqing',
    gatha: '持幢护世，财宝普施；愿诸有情，资具丰足。',
    svg:
'<svg viewBox="0 0 600 560" class="deity-svg" role="img" aria-label="财宝天王">' +
'  <defs>' +
'    <radialGradient id="db_cb_g" cx="50%" cy="40%" r="55%"><stop offset="0" stop-color="#fff0cc" stop-opacity=".62"/><stop offset=".5" stop-color="#e2a948" stop-opacity=".22"/><stop offset="1" stop-color="#e2a948" stop-opacity="0"/></radialGradient>' +
'    <radialGradient id="db_cb_h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe6a8" stop-opacity=".9"/><stop offset=".72" stop-color="#e0a544" stop-opacity=".5"/><stop offset="1" stop-color="#c08a32" stop-opacity="0"/></radialGradient>' +
'    <linearGradient id="db_cb_armor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9b25a"/><stop offset=".5" stop-color="#b3893a"/><stop offset="1" stop-color="#7c571f"/></linearGradient>' +
'    <linearGradient id="db_cb_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6dcab"/><stop offset="1" stop-color="#c09350"/></linearGradient>' +
'  </defs>' +
'  <circle cx="300" cy="215" r="250" fill="url(#db_cb_g)"/>' +
'  <g class="spin-slow"><circle cx="300" cy="180" r="146" fill="none" stroke="#e0a544" stroke-opacity=".28" stroke-width="1" stroke-dasharray="2 9"/></g>' +
'  <circle cx="300" cy="180" r="118" fill="url(#db_cb_h)"/>' +
'  <circle cx="300" cy="180" r="118" fill="none" stroke="#e0a544" stroke-opacity=".55" stroke-width="1.6"/>' +
'  <g class="lotus-seat"><path d="M150 470c0-34 67-58 150-58s150 24 150 58c-20 26-67 40-150 40s-130-14-150-40z" fill="url(#db_cb_armor)"/><path d="M300 414c-40 0-72 14-90 34 28 14 60 18 90 18s62-4 90-18c-18-20-50-34-90-34z" fill="#c79a45"/></g>' +
'  <path d="M300 300c-70 0-118 26-132 70-10 34-12 78-12 120 0 22 92 34 144 34s144-12 144-34c0-42-2-86-12-120-14-44-62-70-132-70z" fill="url(#db_cb_armor)"/>' +
'  <g fill="none" stroke="#6b4a1d" stroke-opacity=".5" stroke-width="2.4" stroke-linecap="round"><path d="M300 332v170"/><path d="M256 356c8 34 6 86 2 140"/><path d="M344 356c-8 34-6 86-2 140"/></g>' +
'  <g fill="#e9c884" stroke="#9a6c2a" stroke-width="1.2" opacity=".9"><circle cx="300" cy="360" r="7"/><circle cx="276" cy="392" r="6"/><circle cx="324" cy="392" r="6"/><circle cx="266" cy="430" r="5.4"/><circle cx="334" cy="430" r="5.4"/></g>' +
'  <rect x="282" y="262" width="36" height="44" rx="14" fill="url(#db_cb_skin)"/>' +
'  <g class="head">' +
'    <path d="M256 150c0-30 20-54 44-54s44 24 44 54c0 40-20 78-44 78s-44-38-44-78z" fill="url(#db_cb_skin)"/>' +
'    <path d="M254 150c-2-30 16-52 46-52s48 22 46 52c-10-12-22-18-46-18s-36 6-46 18z" fill="#8a5a22"/>' +
'    <path d="M276 102c-2-14 8-24 24-24s26 10 24 24c-8-6-14-6-24-6s-16 0-24 6z" fill="#e0a544" stroke="#9a6c2a" stroke-width="1.4"/>' +
'    <circle cx="300" cy="102" r="6" fill="#8a5a22"/>' +
'    <path d="M256 144c-6-8-6-20 0-30 8 6 12 18 8 30zM344 144c6-8 6-20 0-30-8 6-12 18-8 30z" fill="#6b4a1d"/>' +
'    <circle cx="300" cy="172" r="4" fill="#fff7e0"/>' +
'    <path d="M270 178c10-7 20-7 28 0M302 178c8-7 18-7 28 0" fill="none" stroke="#6b4a1d" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M272 190c8-5 18-5 26 0M302 190c8-5 18-5 26 0" fill="none" stroke="#3a2710" stroke-width="2.4" stroke-linecap="round"/>' +
'    <path d="M300 188v18c-4 4-9 4-12 1" fill="none" stroke="#a87c34" stroke-width="2" stroke-linecap="round"/>' +
'    <path d="M288 222c8 5 16 5 24 0" fill="none" stroke="#8a5a22" stroke-width="2.6" stroke-linecap="round"/>' +
'    <path d="M252 168c-10 4-14 18-6 30 6 8 16 6 18-2M348 168c10 4 14 18 6 30-6 8-16 6-18-2" fill="url(#db_cb_skin)" stroke="#a87c34" stroke-width="1.4"/>' +
'  </g>' +
'  <g class="stupa"><path d="M404 250c0-30 14-50 30-50s30 20 30 50c0 30-12 58-30 58s-30-28-30-58z" fill="#e9c884" stroke="#9a6c2a" stroke-width="1.6"/><path d="M404 268c12 8 24 8 36 0" fill="none" stroke="#9a6c2a" stroke-width="1.4"/><path d="M420 210l14 14 14-14" fill="none" stroke="#9a6c2a" stroke-width="2" stroke-linecap="round"/><circle cx="434" cy="200" r="4" fill="#9a6c2a"/></g>' +
'  <g class="sword2"><rect x="150" y="300" width="6" height="120" rx="3" fill="#cfd6dd" stroke="#8b96a0" stroke-width="1.2" transform="rotate(-12 153 360)"/><path d="M153 296l-8 14 8 10 8-10z" fill="#eef2f6" stroke="#8b96a0" stroke-width="1.2"/></g>' +
'</svg>'
  };

  window.DEITIES = window.DEITIES || {};
  window.DEITIES.buddha = [shakyamuni, guanyin, wenshu, mile, caibao];
})();
