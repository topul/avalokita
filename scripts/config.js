/* ══════════════════════════════════════════
   config.js · 两宗仪轨文案与仪式参数
   ══════════════════════════════════════════ */
window.TRADITIONS = {

  buddha: {
    key: 'buddha',
    name: '佛门 · 大雄宝殿',
    sub: '明心见性，慈悲喜舍。',
    meritName: '功德',
    enter: '入佛门 · 愿汝心安',
    rituals: [
      { id: 'bow', glyph: '拜', label: '礼佛' },
      { id: 'incense', glyph: '香', label: '上香' },
      { id: 'knock', glyph: '鱼', label: '木鱼' },
      { id: 'beads', glyph: '珠', label: '佛珠' },
      { id: 'course', glyph: '课', label: '功课' }
    ],

    bow: {
      title: '礼佛三拜',
      hint: '长按拜垫不放，身随心下；一拜一皈依，三拜礼成。',
      word: '拜',
      seqLabel: '本轮三拜',
      roundLabel: '礼成次数',
      vows: [
        '一拜 · 皈依佛，觉而不迷',
        '二拜 · 皈依法，正而不邪',
        '三拜 · 皈依僧，净而不染'
      ],
      done: '三拜礼成 · 愿以此功德，普及于一切',
      broken: '心未至，礼未成 —— 再来一次',
      idle: '合掌当胸，收心一处',
      sound: 'inqing'
    },

    incense: {
      title: '上香供奉',
      hint: '三炷香：一炷供佛，一炷供法，一炷供僧。点香后香烟自升，可书心愿一同敬献。',
      sticks: ['供佛', '供法', '供僧'],
      allLit: '三炷已燃 · 香烟缭绕，直达心地',
      offerings: [
        { id: 'lotus', label: '莲华', glyph: '莲' },
        { id: 'water', label: '净水', glyph: '水' },
        { id: 'fruit', label: '时果', glyph: '果' },
        { id: 'lamp', label: '明灯', glyph: '灯' }
      ],
      wishPlaceholder: '心中所愿，可书于此（六十字内）',
      wishDone: '香烟传心 · 所愿已录'
    },

    knock: {
      title: '敲击木鱼',
      hint: '一击一念，念念分明。满一百零八声，断百八烦恼。',
      unit: 108,
      unitName: '一百零八',
      leftLabel: '距圆满',
      sound: 'woodfish',
      round: '一百零八声圆满 · 烦恼渐息',
      phrases: ['心', '静', '观', '照', '空', '舍', '慈', '悲', '喜', '定', '南无阿弥陀佛', '唵嘛呢叭咪吽', '念念分明']
    },

    beads: {
      title: '持诵佛珠',
      hint: '轻点或沿珠圈拖动，一珠一诵；一百零八珠为一串，过母珠不越。',
      total: 108,
      lapLabel: '圆满串数',
      mantras: ['南无阿弥陀佛', '唵嘛呢叭咪吽', '南无观世音菩萨'],
      round: '一串圆满 · 一百零八珠已过'
    },

    course: {
      title: '今日功课',
      hint: '修行不在多寡，而在念念相续。',
      cards: [
        { key: 'bows', label: '礼拜', unit: '拜' },
        { key: 'incense', label: '供香', unit: '炷' },
        { key: 'knocks', label: '木鱼', unit: '声' },
        { key: 'beads', label: '佛珠', unit: '珠' }
      ],
      dedicate: '愿以此功德，庄严佛净土；上报四重恩，下济三途苦。',
      note: '本页所有记录仅保存在您的浏览器本地，不会上传。此处为文化与心境体验，不代表任何宗教组织。'
    },

    quotes: [
      { t: '观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空。', f: '《般若波罗蜜多心经》' },
      { t: '应无所住，而生其心。', f: '《金刚经》' },
      { t: '诸恶莫作，众善奉行，自净其意，是诸佛教。', f: '《法句经》' },
      { t: '一切有为法，如梦幻泡影，如露亦如电。', f: '《金刚经》' },
      { t: '心若无事，万法不生。', f: '禅门语录' },
      { t: '不忘初心，方得始终。', f: '《华严经》义' },
      { t: '若人静坐一须臾，胜造恒沙七宝塔。', f: '《禅门日诵》' }
    ]
  },

  tao: {
    key: 'tao',
    name: '道门 · 三清宝殿',
    sub: '清静无为，抱朴守一。',
    meritName: '道行',
    enter: '入道门 · 福生无量天尊',
    rituals: [
      { id: 'bow', glyph: '礼', label: '朝礼' },
      { id: 'incense', glyph: '香', label: '焚香' },
      { id: 'knock', glyph: '磬', label: '云磬' },
      { id: 'beads', glyph: '珠', label: '道珠' },
      { id: 'course', glyph: '课', label: '日课' }
    ],

    bow: {
      title: '朝礼三清',
      hint: '长按拜垫不放，稽首肃立；三礼既成，心与道合。',
      word: '礼',
      seqLabel: '本轮三礼',
      roundLabel: '礼成次数',
      vows: [
        '一礼 · 玉清元始天尊',
        '二礼 · 上清灵宝天尊',
        '三礼 · 太清道德天尊'
      ],
      done: '三礼既成 · 福生无量天尊',
      broken: '意未定，礼未成 —— 再整衣冠',
      idle: '正身端坐，抱元守一',
      sound: 'bell'
    },

    incense: {
      title: '焚香告神',
      hint: '三炷香：一敬天，一敬地，一敬己心。青烟直上，以达玄门。',
      sticks: ['敬天', '敬地', '敬心'],
      allLit: '三炷已燃 · 青烟直上，上达玄穹',
      offerings: [
        { id: 'tea', label: '清茶', glyph: '茶' },
        { id: 'grain', label: '五谷', glyph: '谷' },
        { id: 'pine', label: '松枝', glyph: '松' },
        { id: 'candle', label: '灯烛', glyph: '烛' }
      ],
      wishPlaceholder: '所祈所愿，可书于此（六十字内）',
      wishDone: '青烟为使 · 所愿已达'
    },

    knock: {
      title: '鸣磬诵经',
      hint: '一磬一息，声息相和。八十一声应九九之数，气归丹田。',
      unit: 81,
      unitName: '八十一',
      leftLabel: '距九九',
      sound: 'qing',
      round: '八十一声既满 · 九九归真',
      phrases: ['清', '静', '无', '为', '虚', '守', '和', '朴', '抱朴守一', '致虚守静', '福生无量天尊', '道法自然']
    },

    beads: {
      title: '掐诀持珠',
      hint: '轻点或沿珠圈拖动，一珠一咏；道珠八十一颗，九九归真。',
      total: 81,
      lapLabel: '圆满串数',
      mantras: ['福生无量天尊', '太乙救苦天尊', '道法自然'],
      round: '一串圆满 · 八十一珠已过'
    },

    course: {
      title: '今日日课',
      hint: '道不远人，日行一课即是修真。',
      cards: [
        { key: 'bows', label: '朝礼', unit: '礼' },
        { key: 'incense', label: '焚香', unit: '炷' },
        { key: 'knocks', label: '鸣磬', unit: '声' },
        { key: 'beads', label: '道珠', unit: '珠' }
      ],
      dedicate: '愿以此功，上答神恩，下济幽苦；天下太平，众生安宁。',
      note: '本页所有记录仅保存在您的浏览器本地，不会上传。此处为文化与心境体验，不代表任何宗教组织。'
    },

    quotes: [
      { t: '人法地，地法天，天法道，道法自然。', f: '《道德经》二十五章' },
      { t: '夫人神好清，而心扰之；人心好静，而欲牵之。', f: '《清静经》' },
      { t: '上善若水。水善利万物而不争。', f: '《道德经》八章' },
      { t: '致虚极，守静笃。万物并作，吾以观复。', f: '《道德经》十六章' },
      { t: '祸莫大于不知足，咎莫大于欲得。', f: '《道德经》四十六章' },
      { t: '知常曰明。知和曰常。', f: '《道德经》五十五章' },
      { t: '虚其心，实其腹；弱其志，强其骨。', f: '《道德经》三章' }
    ]
  }
};
