const deck = [
  { name: "愚者", symbol: "0", glyph: "☄︎", keywords: "开始、信任、未知", meaning: "新的道路正在显现，先保持好奇，再决定步伐。", colors: ["#f1d37b", "#60a6a0"] },
  { name: "魔术师", symbol: "I", glyph: "✦", keywords: "行动、资源、创造", meaning: "你已经拥有关键工具，接下来需要把想法落到行动里。", colors: ["#d75f5f", "#d8ad5b"] },
  { name: "女祭司", symbol: "II", glyph: "☾︎", keywords: "直觉、沉默、潜意识", meaning: "答案不急着公开，先听见内在真正的判断。", colors: ["#7d8ed8", "#e8d8ac"] },
  { name: "皇后", symbol: "III", glyph: "♀︎", keywords: "丰盛、滋养、生长", meaning: "温柔的投入会带来回报，适合培育关系与作品。", colors: ["#b96f87", "#6aa36f"] },
  { name: "皇帝", symbol: "IV", glyph: "♈︎", keywords: "秩序、边界、掌控", meaning: "建立规则比硬撑更重要，边界会让局面稳定下来。", colors: ["#c65b42", "#e0b15f"] },
  { name: "教皇", symbol: "V", glyph: "♉︎", keywords: "传统、学习、信念", meaning: "向可靠经验借力，同时确认它是否仍适合你。", colors: ["#8c7650", "#4d9b97"] },
  { name: "恋人", symbol: "VI", glyph: "♊︎", keywords: "选择、关系、价值", meaning: "真正的选择来自价值排序，而不只是眼前的吸引。", colors: ["#d98a9d", "#78b7c9"] },
  { name: "战车", symbol: "VII", glyph: "♋︎", keywords: "推进、意志、胜利", meaning: "方向一旦明确，就需要集中力量向前推进。", colors: ["#506fb6", "#d8ad5b"] },
  { name: "力量", symbol: "VIII", glyph: "♌︎", keywords: "勇气、耐心、柔韧", meaning: "这不是蛮力的时刻，稳定和耐心更能改变结果。", colors: ["#d88445", "#be5f73"] },
  { name: "隐士", symbol: "IX", glyph: "♍︎", keywords: "独处、洞察、寻找", meaning: "暂时放慢速度，你会在安静处看清真正的问题。", colors: ["#6d7b85", "#d6c28a"] },
  { name: "命运之轮", symbol: "X", glyph: "♃︎", keywords: "转折、周期、机会", meaning: "变化已经启动，顺势调整比抗拒更有力量。", colors: ["#9d72c8", "#d8ad5b"] },
  { name: "正义", symbol: "XI", glyph: "♎︎", keywords: "平衡、裁决、责任", meaning: "保持清醒与公平，结果会回应你的真实选择。", colors: ["#6f92a8", "#e2c56d"] },
  { name: "倒吊人", symbol: "XII", glyph: "♆︎", keywords: "暂停、换位、牺牲", meaning: "暂时停住不是失败，新的视角会打开出口。", colors: ["#5a8e8d", "#8a6ec4"] },
  { name: "死神", symbol: "XIII", glyph: "♏︎", keywords: "结束、蜕变、重生", meaning: "旧阶段正在落幕，释放之后才有新空间。", colors: ["#4b5164", "#b95568"] },
  { name: "节制", symbol: "XIV", glyph: "♐︎", keywords: "调和、流动、修复", meaning: "把两种力量调成合适比例，事情会慢慢恢复秩序。", colors: ["#4d9b97", "#d8ad5b"] },
  { name: "恶魔", symbol: "XV", glyph: "♑︎", keywords: "束缚、欲望、执念", meaning: "看见让你失去自由的部分，就是松绑的开始。", colors: ["#7b3f55", "#d06a42"] },
  { name: "高塔", symbol: "XVI", glyph: "♅︎", keywords: "崩塌、真相、突变", meaning: "不稳的结构会被打破，但真实也因此显露。", colors: ["#415a77", "#d85f4c"] },
  { name: "星星", symbol: "XVII", glyph: "✶", keywords: "希望、疗愈、指引", meaning: "恢复信任感，长期愿景会重新照亮眼前的路。", colors: ["#6fa7cf", "#d8ad5b"] },
  { name: "月亮", symbol: "XVIII", glyph: "☽︎", keywords: "梦境、迷雾、感受", meaning: "不确定感正在放大，先分辨直觉和恐惧。", colors: ["#6d63a6", "#b9c7d8"] },
  { name: "太阳", symbol: "XIX", glyph: "☉︎", keywords: "清晰、喜悦、生命力", meaning: "事情会变得明朗，坦率表达能带来正向回应。", colors: ["#e2a84f", "#d96152"] },
  { name: "审判", symbol: "XX", glyph: "♇︎", keywords: "召唤、觉醒、复盘", meaning: "过去的线索正在汇合，你需要回应更高层次的召唤。", colors: ["#8f7dc4", "#d9b867"] },
  { name: "世界", symbol: "XXI", glyph: "⊕︎", keywords: "完成、整合、圆满", meaning: "一个周期抵达终点，经验会成为下一程的底座。", colors: ["#55a58b", "#d8ad5b"] }
];

const minorSuits = [
  {
    name: "权杖",
    glyph: "✶",
    theme: "行动、热情、创造力",
    colors: ["#d88445", "#b95568"],
    uprightTone: "行动力正在被点燃，适合推进、表达和尝试。",
    reversedTone: "热情有些失焦，先处理急躁、拖延或能量分散。"
  },
  {
    name: "圣杯",
    glyph: "☾︎",
    theme: "情感、关系、直觉",
    colors: ["#6fa7cf", "#8f7dc4"],
    uprightTone: "情绪和关系是重点，适合倾听感受并温柔回应。",
    reversedTone: "情绪可能被压住或放大，需要先回到真实感受。"
  },
  {
    name: "宝剑",
    glyph: "✧",
    theme: "思考、沟通、判断",
    colors: ["#7d8ed8", "#6d7b85"],
    uprightTone: "理性正在发挥作用，适合澄清事实、表达立场。",
    reversedTone: "想法容易打结，先避免过度分析和尖锐沟通。"
  },
  {
    name: "星币",
    glyph: "⊕︎",
    theme: "金钱、资源、现实",
    colors: ["#55a58b", "#d8ad5b"],
    uprightTone: "现实资源正在成形，适合稳扎稳打、重视细节。",
    reversedTone: "现实层面有消耗或不稳，先检查资源分配。"
  }
];

const minorRanks = [
  ["一", "A", "起点、种子、机会", "迟滞、未启动、犹豫", "新的种子已经出现。", "机会还没真正落地。"],
  ["二", "2", "选择、平衡、规划", "摇摆、失衡、回避", "你正在进行重要权衡。", "选择被拖延，平衡感不足。"],
  ["三", "3", "协作、扩展、初成", "沟通不畅、延迟、分散", "事情开始向外扩展。", "协作或节奏需要重新协调。"],
  ["四", "4", "稳定、基础、休整", "停滞、封闭、不安", "先建立稳定基础。", "安全感不足，容易守得太紧。"],
  ["五", "5", "冲突、挑战、调整", "内耗、退让、逃避", "挑战会推动你调整策略。", "冲突未必值得继续消耗。"],
  ["六", "6", "恢复、支持、过渡", "留恋、失衡、未完成", "局面正在恢复或得到支持。", "你可能还困在旧模式里。"],
  ["七", "7", "试炼、防守、评估", "怀疑、逃避、防御过度", "需要守住重点并评估局势。", "防备太重会影响判断。"],
  ["八", "8", "推进、练习、速度", "急躁、卡顿、重复", "持续练习会带来进展。", "节奏不顺，需要调整方法。"],
  ["九", "9", "成果、韧性、临界", "疲惫、孤撑、过度警戒", "你已经接近阶段成果。", "别独自硬撑，先恢复能量。"],
  ["十", "10", "完成、压力、收束", "负担、释放、未收尾", "一个阶段正在走向完成。", "负担过重，需要减法和收束。"],
  ["侍从", "P", "讯息、学习、萌芽", "幼稚、迟疑、消息延误", "新的学习或讯息正在靠近。", "经验还浅，先别急着定论。"],
  ["骑士", "N", "推进、追求、变化", "冲动、失速、方向不稳", "行动会带来变化。", "速度太快反而容易偏离目标。"],
  ["王后", "Q", "成熟、接纳、滋养", "情绪化、消耗、依赖", "成熟的照顾和接纳正在发挥作用。", "需要避免过度照顾或情绪消耗。"],
  ["国王", "K", "掌控、领导、整合", "控制、固执、失衡", "你可以更成熟地整合资源。", "掌控欲过强会让局面变硬。"]
];

minorSuits.forEach((suit) => {
  minorRanks.forEach(([rank, symbol, uprightKeywords, reversedKeywords, uprightLine, reversedLine]) => {
    deck.push({
      name: `${suit.name}${rank}`,
      symbol,
      glyph: suit.glyph,
      keywords: `${suit.theme}、${uprightKeywords}`,
      colors: suit.colors,
      upright: {
        keywords: uprightKeywords,
        meaning: `${suit.uprightTone}${uprightLine}`
      },
      reversed: {
        keywords: reversedKeywords,
        meaning: `${suit.reversedTone}${reversedLine}`
      }
    });
  });
});

const spreads = {
  three: {
    title: "三张牌阵",
    labels: ["过去", "现在", "建议"],
    prompts: ["曾经影响你的能量", "当下正在发生的核心", "下一步可以采取的方向"]
  },
  single: {
    title: "单张指引",
    labels: ["核心讯息"],
    prompts: ["此刻最需要看见的提醒"]
  },
  cross: {
    title: "十字牌阵",
    labels: ["核心", "阻碍", "助力", "显意识", "潜意识"],
    prompts: ["问题的中心能量", "当前最容易卡住的地方", "可以借用的资源", "你已经意识到的想法", "内在更深层的动机"]
  }
};

const topics = {
  general: {
    name: "综合",
    lens: "整体状态",
    advice: "先看清局面主线，再决定优先处理哪一块。"
  },
  love: {
    name: "感情",
    lens: "关系互动",
    advice: "重点观察彼此的真实需求、边界和沟通方式。"
  },
  career: {
    name: "事业",
    lens: "工作发展",
    advice: "把注意力放在目标、资源、协作和可执行步骤上。"
  },
  wealth: {
    name: "财运",
    lens: "资源流动",
    advice: "先区分机会与风险，避免被短期波动牵着走。"
  },
  study: {
    name: "学业",
    lens: "学习成长",
    advice: "关注节奏、方法和持续性，别只看一时结果。"
  },
  growth: {
    name: "成长",
    lens: "内在课题",
    advice: "把牌面当作自我观察的镜子，找出需要整合的部分。"
  }
};

const meaningLibrary = {
  "愚者": ["自由、开始、冒险", "鲁莽、逃避、无准备", "新的可能已经出现，适合轻装上路。", "先确认基本风险，别把冲动误认为勇气。"],
  "魔术师": ["创造、行动、显化", "分散、操控、空想", "资源已经在手，关键是把意图变成行动。", "力量被分散了，需要先收束目标。"],
  "女祭司": ["直觉、秘密、静观", "压抑、迟疑、误判", "答案藏在安静处，先听见内在判断。", "别让猜测代替事实，直觉也需要被校准。"],
  "皇后": ["滋养、丰盛、关系", "消耗、依赖、停滞", "温柔投入会带来生长，适合照顾关系与作品。", "别过度付出，先确认自己是否也被滋养。"],
  "皇帝": ["秩序、边界、掌控", "僵硬、压制、失控", "建立规则会让局面稳定下来。", "控制欲可能太强，需要给变化留空间。"],
  "教皇": ["传统、学习、信念", "教条、反叛、失信", "可靠经验能帮你少走弯路。", "旧规则未必适用，先问它是否仍服务于你。"],
  "恋人": ["选择、关系、价值", "摇摆、诱惑、失衡", "真正的选择来自价值排序。", "关系或选择里有逃避，需要回到真实需求。"],
  "战车": ["推进、意志、胜利", "失控、急躁、方向偏移", "目标明确后，集中力量向前推进。", "先校准方向，否则越用力越偏。"],
  "力量": ["勇气、耐心、柔韧", "自我怀疑、压抑、耗竭", "柔韧和耐心比硬碰硬更有效。", "别强撑，真正的力量也包括休息。"],
  "隐士": ["独处、洞察、寻找", "孤立、封闭、迷失", "放慢速度，你会在安静处看清问题。", "不要把退缩当成思考，适度向外求证。"],
  "命运之轮": ["转折、周期、机会", "停滞、反复、失序", "变化已经启动，顺势调整会更轻松。", "你可能困在旧循环里，需要主动改变节奏。"],
  "正义": ["平衡、裁决、责任", "偏见、不公、逃责", "清醒和公平会带来更稳的结果。", "先承认自己的责任，局面才会重新平衡。"],
  "倒吊人": ["暂停、换位、臣服", "拖延、抗拒、僵局", "暂停不是失败，换个角度会看见出口。", "不要把等待变成拖延，需要明确取舍。"],
  "死神": ["结束、蜕变、重生", "抗拒、执着、旧伤", "旧阶段正在结束，释放后才有新空间。", "越不愿放手，转变越痛；先处理告别。"],
  "节制": ["调和、修复、节奏", "失衡、过度、混乱", "把两种力量调成合适比例，事情会恢复秩序。", "现在需要减量，而不是继续叠加。"],
  "恶魔": ["束缚、欲望、执念", "松绑、觉察、脱困", "看清欲望与依赖，才能重新拿回自由。", "束缚正在松动，但仍要警惕旧习惯回头。"],
  "高塔": ["崩塌、真相、突变", "余震、逃避、延迟", "不稳的结构会被打破，真相因此显露。", "变化已经在酝酿，越拖越难温和落地。"],
  "星星": ["希望、疗愈、指引", "失望、疲惫、信念薄弱", "愿景重新出现，适合修复信任。", "先恢复能量，再谈远方。"],
  "月亮": ["迷雾、梦境、感受", "真相浮现、恐惧消散", "不确定感放大，先分辨直觉和恐惧。", "迷雾正在散开，但不要急着下结论。"],
  "太阳": ["清晰、喜悦、生命力", "延迟、低能量、遮蔽", "事情会变得明朗，坦率表达能带来回应。", "光仍在，只是需要清理阻碍它的部分。"],
  "审判": ["觉醒、复盘、召唤", "自责、逃避、迟迟不决", "过去线索正在汇合，你需要回应新的召唤。", "别困在自责里，复盘是为了重新选择。"],
  "世界": ["完成、整合、圆满", "未竟、卡关、缺口", "一个周期抵达终点，经验会成为下一程底座。", "还有细节没有收束，先完成闭环。"]
};

deck.forEach((card) => {
  if (card.upright && card.reversed) return;
  const [uprightKeywords, reversedKeywords, upright, reversed] = meaningLibrary[card.name];
  card.upright = { keywords: uprightKeywords, meaning: upright };
  card.reversed = { keywords: reversedKeywords, meaning: reversed };
});

const cardSpread = document.querySelector("#cardSpread");
const deckList = document.querySelector("#deckList");
const resultText = document.querySelector("#resultText");
const drawBtn = document.querySelector("#drawBtn");
const aiBtn = document.querySelector("#aiBtn");
const aiResult = document.querySelector("#aiResult");
const tabs = document.querySelectorAll(".spread-tabs button");
const topicTabs = document.querySelectorAll(".topic-tabs button");
const spreadTitle = document.querySelector("#spreadTitle");
const ritualStatus = document.querySelector("#ritualStatus");
const deckStack = document.querySelector(".deck-stack");

let activeSpread = "three";
let activeTopic = "general";
let isDrawing = false;
let lastReading = null;

function createCard(card, label, isBack = false, index = 0) {
  const article = document.createElement("article");
  article.className = `tarot-card${isBack ? " card-back" : ""}${card.reversedDraw ? " reversed-card" : ""}`;
  article.style.setProperty("--card-a", card.colors?.[0] || "#d8ad5b");
  article.style.setProperty("--card-b", card.colors?.[1] || "#4d9b97");
  article.style.setProperty("--delay", `${index * 0.22}s`);
  article.innerHTML = `
    <div class="card-art" data-symbol="${isBack ? "✦" : card.symbol}" data-glyph="${isBack ? "☾" : card.glyph}"></div>
    <h3>${isBack ? "未翻开的牌" : card.name}</h3>
    <p>${isBack ? label : getCardKeywords(card)}</p>
  `;
  return article;
}

function revealCard(cardElement, card) {
  cardElement.classList.remove("card-back");
  cardElement.classList.remove("dealt-card");
  cardElement.classList.toggle("reversed-card", Boolean(card.reversedDraw));
  cardElement.classList.add("is-revealed");
  cardElement.style.setProperty("--card-a", card.colors?.[0] || "#d8ad5b");
  cardElement.style.setProperty("--card-b", card.colors?.[1] || "#4d9b97");
  cardElement.innerHTML = `
    <div class="card-art" data-symbol="${card.symbol}" data-glyph="${card.glyph}"></div>
    <h3>${card.name}</h3>
    <p>${getCardKeywords(card)}</p>
  `;
}

function createSlot(label, index) {
  const slot = document.createElement("div");
  slot.className = "spread-slot";
  slot.innerHTML = `
    <div class="slot-placeholder"></div>
    <span class="slot-label">${label}</span>
  `;
  return slot;
}

function renderInitialSpread() {
  const spread = spreads[activeSpread];
  spreadTitle.textContent = spread.title;
  ritualStatus.textContent = "等待洗牌";
  cardSpread.innerHTML = "";
  cardSpread.className = `spread-board spread-${activeSpread}`;
  spread.labels.forEach((label, index) => {
    const slot = createSlot(label, index);
    slot.appendChild(createCard(deck[index], label, true, index));
    cardSpread.appendChild(slot);
  });
}

function renderDeck() {
  const major = deck.slice(0, 22);
  const minor = deck.slice(22);
  deckList.innerHTML = `
    ${renderDeckGroup("大阿卡那", "人生主线、关键转折、重要课题", major)}
    ${renderDeckGroup("小阿卡那", "日常事件、具体处境、执行细节", minor)}
  `;
}

function renderDeckGroup(title, intro, cards) {
  return `
    <section class="deck-group">
      <div class="deck-group-title">
        <strong>${title}</strong>
        <span>${intro}</span>
      </div>
      <div class="deck-group-grid">
        ${cards.map(renderDeckItem).join("")}
      </div>
    </section>
  `;
}

function renderDeckItem(card) {
  const note = `${card.name}｜正位：${card.upright.keywords}。${card.upright.meaning} 逆位：${card.reversed.keywords}。${card.reversed.meaning}`;
  return `
    <article class="deck-item" style="--card-a: ${card.colors[0]}; --card-b: ${card.colors[1]}" data-note="${escapeHtml(note)}">
      <span>${card.symbol}</span>
      <i>${card.glyph}</i>
      <strong>${card.name}</strong>
      <small>${card.keywords}</small>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function pickCards(count) {
  return [...deck]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((card) => ({ ...card, reversedDraw: Math.random() < 0.35 }));
}

function getCardKeywords(card) {
  return card.reversedDraw ? card.reversed.keywords : card.upright.keywords;
}

function getCardMeaning(card) {
  return card.reversedDraw ? card.reversed.meaning : card.upright.meaning;
}

function getOrientation(card) {
  return card.reversedDraw ? "逆位" : "正位";
}

function buildReading(question, spread, picked) {
  const topic = topics[activeTopic];
  const overview = picked.some((card) => card.reversedDraw)
    ? `以「${topic.name}」来看，这次牌面有逆位出现，说明${topic.lens}里既有机会，也有需要调整的阻力。`
    : `以「${topic.name}」来看，这次牌面整体较顺，适合围绕${topic.lens}看清趋势并采取行动。`;

  return `
    <p><strong>${question}</strong></p>
    <p>${overview}</p>
    ${picked.map((card, index) => `
      <p>
        <strong>${spread.labels[index]} · ${card.name}（${getOrientation(card)}）</strong><br>
        <span>${spread.prompts[index]}：</span>${getCardMeaning(card)} ${topic.advice}
      </p>
    `).join("")}
  `;
}

function drawCards() {
  if (isDrawing) return;

  const spread = spreads[activeSpread];
  const count = spread.labels.length;
  const picked = pickCards(count);
  isDrawing = true;
  drawBtn.disabled = true;
  aiBtn.disabled = true;
  aiResult.innerHTML = "<p>抽牌完成后可调用 AI 生成综合分析。</p>";
  deckStack.classList.add("shuffling");
  ritualStatus.textContent = "正在洗牌";
  cardSpread.innerHTML = "";
  cardSpread.className = `spread-board spread-${activeSpread}`;

  picked.forEach((card, index) => {
    const slot = createSlot(spread.labels[index], index);
    const cardElement = createCard(card, spread.labels[index], true, index);
    cardElement.classList.add("dealt-card");
    slot.appendChild(cardElement);
    cardSpread.appendChild(slot);

    window.setTimeout(() => {
      ritualStatus.textContent = `翻开${spread.labels[index]}`;
      revealCard(cardElement, card);
    }, 850 + index * 360);
  });

  const question = document.querySelector("#question").value.trim() || "当前状态";
  resultText.innerHTML = "<p>牌正在落位，请稍候。</p>";

  window.setTimeout(() => {
    resultText.innerHTML = buildReading(question, spread, picked);
    lastReading = {
      question,
      topic: topics[activeTopic].name,
      spread: spread.title,
      cards: picked.map((card, index) => ({
        position: spread.labels[index],
        prompt: spread.prompts[index],
        name: card.name,
        orientation: getOrientation(card),
        keywords: getCardKeywords(card),
        meaning: getCardMeaning(card),
      })),
    };
    ritualStatus.textContent = "解读完成";
    deckStack.classList.remove("shuffling");
    drawBtn.disabled = false;
    aiBtn.disabled = false;
    isDrawing = false;
  }, 1300 + count * 360);
}

async function requestAiReading() {
  if (!lastReading) return;

  aiBtn.disabled = true;
  aiResult.innerHTML = "<p>DeepSeek 正在综合牌面，请稍候。</p>";

  try {
    const response = await fetch("/api/interpret", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lastReading),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "AI 分析失败");
    aiResult.innerHTML = `<p>${escapeText(result.content).replaceAll("\n", "</p><p>")}</p>`;
  } catch (error) {
    aiResult.innerHTML = `<p>${escapeText(error.message)} 请确认已用 Node 服务启动页面，并配置 DEEPSEEK_API_KEY。</p>`;
  } finally {
    aiBtn.disabled = false;
  }
}

function escapeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (isDrawing) return;
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeSpread = tab.dataset.spread;
    renderInitialSpread();
  });
});

topicTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (isDrawing) return;
    topicTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeTopic = tab.dataset.topic;
  });
});

drawBtn.addEventListener("click", drawCards);
aiBtn.addEventListener("click", requestAiReading);

renderInitialSpread();
renderDeck();
