(function() {
  const cards = [
      { "arcana": "major", "number": 0, "name": "The Fool", "keywords": ["Vindictive", "Empathetic", "Mystical"]},
      { "arcana": "major", "number": 1, "name": "The Magician", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 2, "name": "The High Priestess", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "major", "number": 3, "name": "The Empress", "keywords": ["Narcissistic", "Studious", "Dependent"]},
      { "arcana": "major", "number": 4, "name": "The Emperor", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 5, "name": "The Hierophant", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 6, "name": "The Lovers", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 7, "name": "The Chariot", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 8, "name": "Strength", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 9, "name": "The Hermit", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 10, "name": "Wheel of Fortune", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 11, "name": "Justice", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 12, "name": "The Hanged Man", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 13, "name": "Death", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 14, "name": "Temperance", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 15, "name": "The Devil", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 16, "name": "The Tower", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 17, "name": "The Star", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 18, "name": "The Moon", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 19, "name": "The Sun", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 20, "name": "Judgement", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "major", "number": 21, "name": "The World", "keywords": ["Mannerless", "Neat", "Providential"]},
      { "arcana": "minor", "number": 1, "suit": "wands", "name": "Ace", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 2, "suit": "wands", "name": "Two", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 3, "suit": "wands", "name": "Three", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 4, "suit": "wands", "name": "Four", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 5, "suit": "wands", "name": "Five", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 6, "suit": "wands", "name": "Six", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 7, "suit": "wands", "name": "Seven", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 8, "suit": "wands", "name": "Eight", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 9, "suit": "wands", "name": "Nine", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 10, "suit": "wands", "name": "Ten", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 11, "suit": "wands", "name": "Page", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 12, "suit": "wands", "name": "Knight", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 13, "suit": "wands", "name": "Queen", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 14, "suit": "wands", "name": "King", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 1, "suit": "cups", "name": "Ace", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 2, "suit": "cups", "name": "Two", "keywords": ["Pharissical", "Amoral", "Systematic"]},
      { "arcana": "minor", "number": 3, "suit": "cups", "name": "Three", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 4, "suit": "cups", "name": "Four", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 5, "suit": "cups", "name": "Five", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 6, "suit": "cups", "name": "Six", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 7, "suit": "cups", "name": "Seven", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 8, "suit": "cups", "name": "Eight", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 9, "suit": "cups", "name": "Nine", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 10, "suit": "cups", "name": "Ten", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 11, "suit": "cups", "name": "Page", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 12, "suit": "cups", "name": "Knight", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 13, "suit": "cups", "name": "Queen", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 14, "suit": "cups", "name": "King", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 1, "suit": "swords", "name": "Ace", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 2, "suit": "swords", "name": "Two", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 3, "suit": "swords", "name": "Three", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 4, "suit": "swords", "name": "Four", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 5, "suit": "swords", "name": "Five", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 6, "suit": "swords", "name": "Six", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 7, "suit": "swords", "name": "Seven", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 8, "suit": "swords", "name": "Eight", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 9, "suit": "swords", "name": "Nine", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 10, "suit": "swords", "name": "Ten", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 11, "suit": "swords", "name": "Page", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 12, "suit": "swords", "name": "Knight", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 13, "suit": "swords", "name": "Queen", "keywords": ["Vindictive", "Extraordinary", "Disconcerting"]},
      { "arcana": "minor", "number": 14, "suit": "swords", "name": "King", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 1, "suit": "pentacles", "name": "Ace", "keywords": ["Farsighted", "Gallant", "Crude"]},
      { "arcana": "minor", "number": 2, "suit": "pentacles", "name": "Two", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 3, "suit": "pentacles", "name": "Three", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 4, "suit": "pentacles", "name": "Four", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 5, "suit": "pentacles", "name": "Five", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 6, "suit": "pentacles", "name": "Six", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 7, "suit": "pentacles", "name": "Seven", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 8, "suit": "pentacles", "name": "Eight", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 9, "suit": "pentacles", "name": "Nine", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 10, "suit": "pentacles", "name": "Ten", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 11, "suit": "pentacles", "name": "Page", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 12, "suit": "pentacles", "name": "Knight", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 13, "suit": "pentacles", "name": "Queen", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
      { "arcana": "minor", "number": 14, "suit": "pentacles", "name": "King", "keywords": ["Tractable", "Treacherous", "Contemptible"]},
  ];

  cards.forEach((_, i) => cards[i] = Object.freeze(cards[i]));
  Object.freeze(cards);

  const elements = [
      "app",
      "loading-message",
      "main",
      "start-session",
      "home",
      "session",
      "current-card",
      "current-card-keywords",
      "answer-0",
      "answer-1",
      "answer-2",
      "answer-3",
      "next",
      "scores",
    ]
    .reduce((obj, id) => {
      obj[id] = document.getElementById(id);
      obj.displayValues[id] = obj[id].style["display"] === "none" ? "block" : obj[id].style["display"];
      return obj;
    }, { displayValues: { } });

  const util = {
    delay: ms => new Promise(r => setTimeout(r, ms)),
    hide: el => el.style["display"] = "none",
    show: el => el.style["display"] = elements.displayValues[el.id],
    cloneNaive: obj => JSON.parse(JSON.stringify(obj)),
    shuffle: array => {
      // From https://stackoverflow.com/a/6274381/419956 by @communitywiki
      var j, x, i;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
      return array;
    },
    pickRandom(array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    pickRandomsWithBlacklist(array, nr, blacklist) {
      const result = [];
      for (let i = 0; i < 1000; i++) {
        let random = this.pickRandom(array);
        if (result.includes(random) || blacklist.includes(random)) {
          continue;
        }
        result.push(random);
        if (result.length === nr) {
          return result;
        }
      }
      throw new Error(`Could not pick ${nr} items from array of length ${array.length} after max iterations`);
    },
    formatCardText: card => card.arcana === "major"
      ? card.name
      : `${card.name} of ${card.suit}`,
  };

  let currentSession = null;
  const answerButtons = [elements["answer-0"], elements["answer-1"], elements["answer-2"], elements["answer-3"]];

  function resetAnswers() {
    answerButtons.forEach(btn => {
      btn.classList.remove("chosen");
      btn.classList.remove("correct");
      btn.classList.remove("incorrect");
    })
  }

  function showScores(session) {
    elements["scores"].innerHTML = `<span class="mr-8">✅ ${session.scores.correct}</span><span class="ml-8">❌ ${session.scores.incorrect}</span>`;
  }

  function next(session) {
    elements["current-card"].innerHTML = `<h2>${util.formatCardText(session.currentCard)}</h2>`;

    correct = util.pickRandom(session.currentCard.keywords);
    fakes = util.pickRandomsWithBlacklist(session.allKeywords, 3, [correct]);
    
    util.shuffle([...fakes, correct])
      .forEach((keyword, i) => {
        const el = elements[`answer-${i}`];
        el.innerText = keyword;
        el.dataset.keyword = keyword;
        el.dataset.revealClass = keyword === correct ? "correct" : "incorrect";
      });
  }

  answerButtons.forEach(el => {
    el.addEventListener("click", evt => {
      answerButtons.forEach(btn => {
        btn.classList.add(btn.dataset.revealClass);
      });
      
      evt.target.classList.add("chosen");

      if (evt.target.dataset.revealClass === "correct") {
        currentSession.scores.correct++;
      } else {
        currentSession.scores.incorrect++;
      }
      showScores(currentSession);
    });
  });

  elements["next"].addEventListener("click", () => {
    currentSession.index = ++currentSession.index % currentSession.deck.length;
    resetAnswers();
    next(currentSession);
  });

  function startSession() {
    currentSession = {
      index: 0,
      deck: util.shuffle(util.cloneNaive(cards)),
      get currentCard() { return this.deck[this.index]; },
      allKeywords: cards.map(c => c.keywords).flat(),
      scores: { correct: 0, incorrect: 0, },
    };

    showScores(currentSession);
    next(currentSession);
    util.hide(elements["home"]);
    util.show(elements["session"]);
  }

  async function bootstrap() {
    await util.delay(1000);
    util.hide(elements["loading-message"]);
    util.show(elements["main"]);
    elements["start-session"].addEventListener("click", startSession)
  }
  
  document.addEventListener("DOMContentLoaded", bootstrap);
}());
