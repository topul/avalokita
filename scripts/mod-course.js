/* ══════════════════════════════════════════
   mod-course.js · 今日功课 / 日课（统计 + 语录 + 回向 + 清课）
   ══════════════════════════════════════════ */
(function () {
  'use strict';
  var grid, quoteEl, fromEl, dedicateBtn, clearBtn, noteEl, csTitle, csHint;
  var cfg, tr;

  function build() {
    grid.innerHTML = '';
    cfg.cards.forEach(function (card) {
      var box = GZ.el('div', 'card');
      box.appendChild(GZ.el('b', null, GZ.num(Store.side(tr).day[card.key] || 0)));
      box.appendChild(GZ.el('span', null, card.label + ' · ' + card.unit));
      box.appendChild(GZ.el('small', null, '累计 ' + GZ.num(Store.side(tr).total[card.key] || 0)));
      grid.appendChild(box);
    });
  }
  function refresh() { build(); }
  function dedicate() {
    Store.add(tr, 'dedications', 1);
    GZ.merit(5); Chime.fulfil(tr); GZ.toast(cfg.dedicate);
  }
  function clear() {
    if (!window.confirm('清空今日「' + cfg.title + '」的所有修行记录？此操作仅清除本机数据，不可撤销。')) return;
    Store.clearSide(tr); GZ.refreshMerit(); refresh();
    GZ.toast('已清课 · 愿汝重新发心');
  }

  GZ.modules.course = {
    init: function () {
      grid = GZ.$('courseGrid'); quoteEl = GZ.$('csQuote'); fromEl = GZ.$('csFrom');
      dedicateBtn = GZ.$('dedicateBtn'); clearBtn = GZ.$('clearBtn'); noteEl = GZ.$('csNote');
      csTitle = GZ.$('csTitle'); csHint = GZ.$('csHint');
      dedicateBtn.addEventListener('click', dedicate);
      clearBtn.addEventListener('click', clear);
    },
    setup: function (c, t) { cfg = c.course; tr = t; },
    enter: function (c, t) {
      cfg = c.course; tr = t;
      csTitle.textContent = cfg.title;
      csHint.textContent = cfg.hint;
      noteEl.textContent = cfg.note;
      var q = GZ.daily(c.quotes);
      quoteEl.textContent = q.t;
      fromEl.textContent = '—— ' + q.f;
      refresh();
    },
    leave: function () {}
  };
})();
