// Built-in Default Decks
const DEFAULT_DECKS = {
  "korean_history": [
    "고조선은 단군왕검이 건국하였으며, 기본 사회 규범으로 ==8조법==을 두었다.",
    "고구려 광개토대왕은 왜구를 격퇴하고 신라를 도왔으며, 국내성에 ==광개토대왕릉비==가 세워졌다.",
    "신라 진흥왕은 청소년 수련 단체인 ==화랑도==를 국가 조직으로 개편하여 삼국 통일의 기틀을 다졌다.",
    "백제 무령왕은 지방 22담로에 ==왕족==을 파견하여 왕권을 강화하였다.",
    "신라 문무왕 때 삼국을 통일하였으며, 신문왕은 귀족의 경제 기반을 약화시키기 위해 ==녹읍==을 폐지하였다.",
    "발해 고왕(대조영)은 고구려 유민과 말갈인을 이끌고 동모산에서 건국하여 ==해동성국==이라 불렸다.",
    "고려 태조 왕건은 후대 왕들에게 훈계로 남긴 ==훈요 10조==를 반포하였다.",
    "고려 광종은 불법 노비를 양인으로 해방하는 ==노비안검법==과 인재 등용을 위한 ==과거제==를 시행하였다.",
    "고려 성종은 최승로의 ==시무 28조==를 수용하여 유교 통치 이념을 확립하였다.",
    "12세기 고려 문벌 귀족 사회의 모순 속에 묘청은 자주적 혁신을 위해 ==서경 천도 운동==을 일으켰다.",
    "조선 태종은 인구 파악과 군역 확보를 위해 백성들에게 신분증인 ==호패법==을 실시하였다.",
    "세종대왕은 1443년 백성을 가르치는 바른 소리인 ==훈민정음==을 창제하였다.",
    "조선 성종 때 조선의 기본 통치 법전인 ==경국대전==이 최종 완성 반포되었다.",
    "1592년 임진왜란 당시 이순신 장군은 ==한산도 대첩==에서 학익진 전술로 왜군 수군을 격파하였다.",
    "조선 영조와 정조는 붕당 간의 대립을 완화하기 위해 인재를 고르게 등용하는 ==탕평책==을 추진하였다.",
    "1894년 동학 농민군은 전주 화약을 맺고 자치 개혁 기구인 ==집강소==를 설치하였다.",
    "1897년 고종 황제는 대한국 국제를 선포하고 자주독립 국가인 ==대한제국==을 수립하였다.",
    "1919년 일제의 무단통치에 항거하여 전국적으로 일어난 최대 규모의 만세 평화운동은 ==3·1 운동==이다.",
    "대한민국 임시정부는 1919년 중국 상하이에서 수립되어 민주공화정 체제의 ==헌법==을 제정하였다.",
    "1945년 8월 15일 광복 이후 남북한은 분단되었고, 1948년 5·10 총선거를 거쳐 ==대한민국 정부==가 수립되었다."
  ],
  "social_studies": [
    "어떤 현상이 일어나는 원인과 결과의 관계를 ==인과관계==라고 부른다.",
    "사회적 지위에 따라 개인이 마땅히 수행해야 할 행동 양식을 ==역할==이라고 한다.",
    "개인이 사회의 구성원으로 성장하면서 규범과 지식을 내면화하는 과정을 ==사회화==라고 한다.",
    "생산에 필요한 자원이 인간의 욕망에 비해 상대적으로 부족한 상태를 ==희소성==이라고 한다.",
    "여러 대안 중 하나를 선택했을 때 포기한 것들 중 가장 가치 있는 대안을 ==기회비용==이라고 한다.",
    "가격이 상승하면 수요량이 감소하고, 가격이 하락하면 수요량이 증가하는 관계를 ==수요 법칙==이라 한다.",
    "시장 기구만으로는 자원의 효율적 배분이 달성되지 못하는 현상을 ==시장 실패==라고 한다.",
    "개인의 이익 추구가 사회 전체의 이익으로 연결된다는 아담 스미스의 비유는 ==보이지 않는 손==이다.",
    "국민의 기본권을 보장하고 국가 기관의 권력 분립을 규정한 최고 규범은 ==헌법==이다.",
    "국회의 입법권, 행정부의 행정권, 법원의 사법권을 분립하는 제도를 ==삼권분립==이라 한다.",
    "형벌은 법률에 명시되어 있어야만 처벌할 수 있다는 근대 형법의 대원칙은 ==죄형법정주의==이다.",
    "국가가 최소한의 인간다운 생활을 보장하기 위해 징수하고 지급하는 세금과 급여 체계를 ==사회복지제도==라 한다.",
    "환율이 상승하면 원화 가치가 하락하여 국내 수출 기업의 가격 경쟁력이 ==강화==된다.",
    "물가가 지속적으로 상승하여 화폐 가치가 하락하는 경제 현상을 ==인플레이션==이라고 한다.",
    "중앙은행이 경기 조절을 위해 시중 통화량과 금리를 조절하는 정책을 ==통화 정책==이라고 한다.",
    "자유무역협정(FTA)은 회원국 간 상품과 서비스의 ==관세== 장벽을 철폐하는 협정이다.",
    "비교우위론에 따르면 두 나라가 각각 ==상대적 기회비용==이 적은 상품에 특화하여 무역하면 양국 모두 이익을 얻는다.",
    "문화가 우열이 있는 것이 아니라 각 사회의 맥락에서 고유한 가치를 지닌다고 보는 관점은 ==문화상대주의==이다.",
    "다수결의 원리 속에서 소수자의 권익을 보호하기 위해 헌법이 규정한 재판 제도는 ==헌법소원==이다.",
    "생산자 잉여와 소비자 잉여의 합을 ==사회적 총잉여==라고 부른다."
  ],
  "science_bio": [
    "생물의 유전 정보를 담고 있는 이중 나선 구조의 고분자 핵산 물질은 ==DNA==이다.",
    "단백질을 직접 합성하는 세포 내 미세 소기관은 ==리보솜==이다.",
    "세포가 포도당을 산소로 분해하여 생명 활동에 필요한 화학 에너지를 얻는 과정을 ==세포 호흡==이라 한다.",
    "생명 활동의 에너지 화폐 역할을 하는 인산기 화합물은 ==ATP==이다.",
    "식물이 엽록체에서 빛 에너지를 흡수하여 물과 이산화탄소로 유기물을 만드는 과정은 ==광합성==이다.",
    "멘델의 유전 원리 중 한 쌍의 대립유전자가 생식세포 형성 시 나뉘어 들어가는 법칙은 ==분리의 법칙==이다.",
    "DNA의 유전 정보가 mRNA로 전달되는 과정을 ==전사==라고 한다.",
    "생물이 오랜 세월 동안 환경 변화에 적응하며 유전적으로 변화하는 현상을 ==진화==라고 한다.",
    "체온, 혈당량, 삼투압 등 신체 내부 상태를 일정하게 유지하려는 성질을 ==항상성==이라 한다.",
    "혈당량을 낮추는 유일한 호르몬으로 이자의 베타 세포에서 분비되는 것은 ==인슐린==이다.",
    "외부에서 침입한 항원에 대항하여 B림프구가 만드는 단백질 무기는 ==항체==이다.",
    "신경계를 구성하는 기본 단위 신경세포는 ==뉴런==이다.",
    "지구 표면이 여러 개의 단단한 판으로 이루어져 움직인다는 이론은 ==판구조론==이다.",
    "빅뱅 우주론에서 우주 탄생 초기 생성된 수소와 헬륨의 질량비는 약 ==3:1==이다.",
    "물질의 세 가지 상태 중 온도와 압력에 따라 일정한 부피와 모양을 유지하는 상태는 ==고체==이다.",
    "화학 반응에서 반응 전 물질의 총질량과 반응 후 생성된 물질의 총질량이 같다는 법칙은 ==질량보존법칙==이다.",
    "원자가 전자를 잃으면 양이온이 되고, 전자를 얻으면 ==음이온==이 된다.",
    "전기 회로에서 전압은 전류와 저항의 곱과 같다는 물리 법칙은 ==옴의 법칙==이다.",
    "물체에 외력이 작용하지 않을 때 원래의 운동 상태를 유지하려는 성질은 ==관성==이다.",
    "효소는 생체 화학 반응에서 반응에 필요한 활성화 에너지를 ==낮추어== 반응 속도를 빠르게 한다."
  ],
  "world_history": [
    "고대 메소포타미아 문명에서 바빌로니아 함무라비 왕이 제정한 법전은 ==함무라비 법전==이다.",
    "기원전 5세기 아테네의 지도자 페리클레스는 도편추방제 등을 통해 고대 그리스의 ==민주정치==를 꽃피웠다.",
    "기원전 27년 옥타비아누스가 존엄자(아우구스투스) 칭호를 받으며 시작된 로마의 평화 시대를 ==팍스 로마나==라 한다.",
    "중세 서유럽 봉건제의 경제적 토대를 이루었던 영주 중심의 자급자족 농경 공동체는 ==장원제==이다.",
    "14~16세기 유럽에서 인간 중심의 고대 그리스·로마 문화를 부흥시키려 한 문화 운동은 ==르네상스==이다.",
    "1517년 마르틴 루터가 교회의 면벌부 판매를 비판하며 95개조 반박문을 발표한 사건은 ==종교 개혁==이다.",
    "15세기 말 콜럼버스의 신대륙 도착과 바스코 다 가마의 인도 항로 개척으로 열린 시대를 ==대항해시대==라 한다.",
    "1688년 영국에서 피를 흘리지 않고 의회 중심의 입헌군주제를 확립한 무혈 혁명은 ==명예혁명==이다.",
    "1776년 토머스 제퍼슨이 기안하여 인간의 자연권과 주권재민을 선언한 문서는 ==미국 독립선언서==이다.",
    "1789년 프랑스에서 자유, 평등, 박애의 이념을 내걸고 일어난 시민 혁명은 ==프랑스 혁명==이다.",
    "18세기 중반 영국에서 제임스 와트의 증기기관 개량으로 시작된 대량 생산의 대변혁은 ==산업혁명==이다.",
    "19세기 중반 중국 청나라가 영국과의 무역 분쟁으로 패배하여 맺은 최초의 불평등 조약은 ==난징 조약==이다.",
    "1868년 일본이 메이지 천황을 중심으로 서양 문물을 전면 수용하며 근대화를 추진한 개혁은 ==메이지 유신==이다.",
    "1914년 사라예보 사건을 계기로 삼국동맹과 삼국협상 세력이 격돌한 전쟁은 ==제1차 세계대전==이다.",
    "1917년 레닌이 주도하여 세계 최초의 사회주의 정권을 수립한 역사적 사건은 ==러시아 혁명==이다.",
    "1929년 미국 뉴욕 증시 폭락으로 시작되어 전 세계로 확산된 경제 위기는 ==대공황==이다.",
    "미국 루스벨트 대통령이 대공황 극복을 위해 정부의 적극적 시장 개입을 추진한 정책은 ==뉴딜 정책==이다.",
    "1939년 독일의 폴란드 침공으로 발발하여 연합국의 승리로 끝난 사상 최대 규모의 전쟁은 ==제2차 세계대전==이다.",
    "제2차 세계대전 종전 후 1945년 국제 평화와 안보 유지를 위해 창설된 국제기구는 ==국제연합(UN)==이다.",
    "제2차 대전 이후 미국 중심의 자본주의 진영과 소련 중심의 공산주의 진영이 대립한 냉전 체제를 ==콜드 워(Cold War)==라 한다."
  ],
  "english_proverbs": [
    "==A picture== is worth a thousand words. (백문이 불여일견: 그림 한 장이 천 마디 말보다 낫다)",
    "==Actions== speak louder than words. (말보다 행동이 더 중요하다)",
    "Every cloud has a silver ==lining==. (하늘이 무너져도 솟아날 구멍은 있다: 고난 뒤에는 희망이 온다)",
    "Practice makes ==perfect==. (연습이 완벽을 만든다: 끊임없이 연습하면 숙달된다)",
    "When in Rome, do as the ==Romans== do. (로마에 가면 로마의 법을 따르라)",
    "The early bird catches the ==worm==. (일찍 일어나는 새가 벌레를 잡는다: 부지런해야 성공한다)",
    "Honesty is the best ==policy==. (정직이 최선의 방책이다)",
    "Don't judge a book by its ==cover==. (겉표지만 보고 책을 판단하지 마라: 외모로 판단 금지)",
    "Better late than ==never==. (늦더라도 아예 안 하는 것보다는 훨씬 낫다)",
    "==Necessity== is the mother of invention. (필요는 발명의 어머니이다)",
    "Too many cooks spoil the ==broth==. (사공이 많으면 배가 산으로 간다)",
    "Two heads are better than ==one==. (백지장도 맞들면 낫다: 두 사람의 지혜가 한 사람보다 낫다)",
    "A journey of a thousand miles begins with a single ==step==. (천리 길도 한 걸음부터)",
    "Strike while the iron is ==hot==. (쇠뿔도 단김에 빼라: 기회가 왔을 때 놓치지 마라)",
    "Time and tide wait for no ==man==. (세월은 사람을 기다려주지 않는다)",
    "Birds of a feather flock ==together==. (유유상종: 같은 깃털의 새들이 함께 모인다)",
    "There is no place like ==home==. (집만큼 편안하고 좋은 곳은 없다)",
    "Look before you ==leap==. (돌다리도 두드려보고 건너라: 행동하기 전에 신중히 살펴라)",
    "Rome was not built in a ==day==. (로마는 하루아침에 이루어지지 않았다)",
    "Where there is a will, there is a ==way==. (뜻이 있는 곳에 길이 있다)"
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
