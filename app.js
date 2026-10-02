// Built-in Default Decks
const DEFAULT_DECKS = {
  korean_history: [
    "1894년 ==동학 농민 운동== 당시 농민군은 전주 화약을 맺고 자치 기구인 ==집강소==를 설치하였다.",
    "조선 태종은 ==호패법==을 실시하여 군정과 조세를 확보하였다.",
    "세종대왕은 1443년 백성을 가르치는 바른 소리인 ==훈민정음==을 창제하였다.",
    "고려 광종은 불법 노비를 양인으로 해방하는 ==노비안검법==과 인재 등용을 위한 ==과거제==를 시행하였다.",
    "신라 진흥왕은 청소년 수련 단체인 ==화랑도==를 국가 조직으로 개편하여 삼국 통일의 기틀을 마련하였다."
  ],
  social_studies: [
    "어떤 현상이 일어나는 원인과 결과의 관계를 ==인과관계==라고 부른다.",
    "사회적 지위에 따라 개인이 마땅히 수행해야 할 행동 양식을 ==역할==이라고 한다.",
    "개인이 사회의 구성원으로 성장하면서 규범과 지식을 내면화하는 과정을 ==사회화==라고 한다.",
    "생산에 필요한 자원이 인간의 욕망에 비해 상대적으로 부족한 상태를 ==희소성==이라고 한다.",
    "여러 대안 중 하나를 선택했을 때 포기한 것들 중 가장 가치 있는 대안을 ==기회비용==이라고 한다."
  ],
  science_bio: [
    "생물의 유전 정보를 담고 있는 이중 나선 구조의 고분자 물질을 ==DNA==라고 부른다.",
    "생물이 환경에 적응하며 여러 세대에 걸쳐 유전적 변화를 겪는 현상을 ==진화==라고 한다.",
    "단백질을 합성하는 세포 내 소기관은 ==리보솜==이다.",
    "식물이 빛 에너지를 이용하여 이산화탄소와 물로부터 유기물을 합성하는 과정을 ==광합성==이라 한다.",
    "세포가 포도당을 분해하여 생명 활동에 필요한 ==ATP== 에너지를 생산하는 과정을 세포 호흡이라 한다."
  ]
};

class FlashcardStudio {
  constructor() {
    this.currentDeckKey = 'korean_history';
    this.cards = [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.reviewedTodayCount = 0;

    // DOM Elements
    this.flipCard = document.getElementById('flipCard');
    this.cardFrontText = document.getElementById('cardFrontText');
    this.cardBackText = document.getElementById('cardBackText');
    this.cardCounter = document.getElementById('cardCounter');
    this.deckSelect = document.getElementById('deckSelect');
    this.markdownInput = document.getElementById('markdownInput');

    // Stats
    this.statTotalCards = document.getElementById('statTotalCards');
    this.statReviewedToday = document.getElementById('statReviewedToday');
    this.statMastered = document.getElementById('statMastered');

    this.initEvents();
    this.loadDeck(this.currentDeckKey);
  }

  initEvents() {
    // Navigation Tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        const targetPane = e.target.dataset.tab;
        if (targetPane === 'study') document.getElementById('paneStudy').classList.add('active');
        if (targetPane === 'editor') document.getElementById('paneEditor').classList.add('active');
        if (targetPane === 'stats') {
          this.updateStats();
          document.getElementById('paneStats').classList.add('active');
        }
      });
    });

    // Deck Selector
    this.deckSelect.addEventListener('change', (e) => {
      this.currentDeckKey = e.target.value;
      this.loadDeck(this.currentDeckKey);
    });

    // Card Flip on Click
    this.flipCard.addEventListener('click', () => {
      this.toggleFlip();
    });

    // SRS Grade Buttons
    document.querySelectorAll('.srs-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const grade = parseInt(e.target.dataset.grade);
        this.handleGrade(grade);
      });
    });

    // Editor Buttons
    document.getElementById('applyMdBtn').addEventListener('click', () => {
      const text = this.markdownInput.value.trim();
      if (!text) {
        alert('변환할 마크다운 내용을 입력해주세요!');
        return;
      }
      this.parseCustomMarkdown(text);
      this.deckSelect.value = 'custom';
      this.currentDeckKey = 'custom';
      document.querySelector('.nav-tab[data-tab="study"]').click();
    });

    document.getElementById('resetSampleBtn').addEventListener('click', () => {
      this.markdownInput.value = DEFAULT_DECKS.korean_history.join('\n');
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'INPUT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        this.toggleFlip();
      } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(e.code)) {
        const grade = parseInt(e.code.replace('Digit', ''));
        this.handleGrade(grade);
      }
    });
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      this.flipCard.classList.add('flipped');
    } else {
      this.flipCard.classList.remove('flipped');
    }
  }

  loadDeck(key) {
    if (key === 'custom') {
      const saved = localStorage.getItem('flashcard_custom_deck');
      if (saved) {
        this.cards = JSON.parse(saved);
      } else {
        this.parseCustomMarkdown(DEFAULT_DECKS.korean_history.join('\n'));
      }
    } else {
      const rawList = DEFAULT_DECKS[key] || [];
      this.cards = rawList.map((raw, idx) => this.parseCard(raw, idx));
    }
    this.currentIndex = 0;
    this.renderCurrentCard();
  }

  parseCustomMarkdown(text) {
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    this.cards = lines.map((line, idx) => this.parseCard(line, idx));
    localStorage.setItem('flashcard_custom_deck', JSON.stringify(this.cards));
    this.currentIndex = 0;
    this.renderCurrentCard();
  }

  parseCard(raw, idx) {
    // Recognize ==blank== or {{c1::blank}}
    let frontHtml = raw;
    let backHtml = raw;

    const clozeRegex = /(?:==([^=]+)==|\{\{c\d+::([^}]+)\}\})/g;
    
    frontHtml = frontHtml.replace(clozeRegex, (match, p1, p2) => {
      const ans = p1 || p2;
      return `<span class="cloze-blank">[ ? ]</span>`;
    });

    backHtml = backHtml.replace(clozeRegex, (match, p1, p2) => {
      const ans = p1 || p2;
      return `<span class="cloze-answer">${ans}</span>`;
    });

    return {
      id: `c_${idx}`,
      raw: raw,
      frontHtml: frontHtml,
      backHtml: backHtml,
      interval: 1,
      repetitions: 0,
      mastered: false
    };
  }

  renderCurrentCard() {
    this.isFlipped = false;
    this.flipCard.classList.remove('flipped');

    if (!this.cards || this.cards.length === 0) {
      this.cardFrontText.textContent = "등록된 카드가 없습니다. 편집기에서 노트를 추가해보세요!";
      this.cardBackText.textContent = "";
      this.cardCounter.textContent = "0 / 0";
      return;
    }

    const card = this.cards[this.currentIndex];
    this.cardFrontText.innerHTML = card.frontHtml;
    this.cardBackText.innerHTML = card.backHtml;
    this.cardCounter.textContent = `${this.currentIndex + 1} / ${this.cards.length}`;
  }

  handleGrade(grade) {
    if (!this.cards || this.cards.length === 0) return;
    const card = this.cards[this.currentIndex];

    // SRS Interval logic (simplified SM-2 / FSRS adaptation)
    if (grade === 1) {
      card.interval = 1;
      card.repetitions = 0;
      card.mastered = false;
    } else if (grade === 2) {
      card.interval = Math.max(1, Math.floor(card.interval * 1.2));
      card.repetitions++;
    } else if (grade === 3) {
      card.interval = Math.max(3, Math.floor(card.interval * 2.2));
      card.repetitions++;
    } else if (grade === 4) {
      card.interval = Math.max(7, Math.floor(card.interval * 3.5));
      card.repetitions++;
      card.mastered = true;
    }

    this.reviewedTodayCount++;

    // Advance to next card
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.renderCurrentCard();
  }

  updateStats() {
    this.statTotalCards.textContent = this.cards.length;
    this.statReviewedToday.textContent = this.reviewedTodayCount;
    const masteredCount = this.cards.filter(c => c.mastered).length;
    this.statMastered.textContent = masteredCount;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FlashcardStudio();
});
