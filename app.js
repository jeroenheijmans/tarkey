(function() {
  const cards = [
      { "arcana": "major", "number": 0, "name": "The Fool", "keywords": ["innocence", "new beginnings", "free spirit"]},
      { "arcana": "major", "number": 1, "name": "The Magician", "keywords": ["willpower", "desire", "creation", "manifestation"]},
      { "arcana": "major", "number": 2, "name": "The High Priestess", "keywords": ["intuitive", "unconscious", "inner voice"]},
      { "arcana": "major", "number": 3, "name": "The Empress", "keywords": ["motherhood", "fertility", "nature"]},
      { "arcana": "major", "number": 4, "name": "The Emperor", "keywords": ["authority", "structure", "control", "fatherhood"]},
      { "arcana": "major", "number": 5, "name": "The Hierophant", "keywords": ["tradition", "conformity", "morality", "ethics"]},
      { "arcana": "major", "number": 6, "name": "The Lovers", "keywords": ["partnerships", "duality", "union"]},
      { "arcana": "major", "number": 7, "name": "The Chariot", "keywords": ["direction", "control", "willpower"]},
      { "arcana": "major", "number": 8, "name": "Strength", "keywords": ["inner strength", "bravery", "compassion", "focus"]},
      { "arcana": "major", "number": 9, "name": "The Hermit", "keywords": ["contemplation", "search for truth", "inner guidance"]},
      { "arcana": "major", "number": 10, "name": "Wheel of Fortune", "keywords": ["change,cycles", "inevitaable fate"]},
      { "arcana": "major", "number": 11, "name": "Justice", "keywords": ["cause and effect", "clarity", "truth"]},
      { "arcana": "major", "number": 12, "name": "The Hanged Man", "keywords": ["sacrifice", "release", "martyrdom"]},
      { "arcana": "major", "number": 13, "name": "Death", "keywords": ["end of cycle", "beginnings", "change", "metamorphosis"]},
      { "arcana": "major", "number": 14, "name": "Temperance", "keywords": ["middle path", "patience", "finding meaning"]},
      { "arcana": "major", "number": 15, "name": "The Devil", "keywords": ["adddiction", "materialism", "playfulness"]},
      { "arcana": "major", "number": 16, "name": "The Tower", "keywords": ["sudden upheaval", "broken pride", "disaster"]},
      { "arcana": "major", "number": 17, "name": "The Star", "keywords": ["hope", "faith", "rejuvenation"]},
      { "arcana": "major", "number": 18, "name": "The Moon", "keywords": ["unconscious", "illusions", "intuition"]},
      { "arcana": "major", "number": 19, "name": "The Sun", "keywords": ["joy", "success", "celebration", "positivity"]},
      { "arcana": "major", "number": 20, "name": "Judgement", "keywords": ["reflection", "reckoning", "awakening"]},
      { "arcana": "major", "number": 21, "name": "The World", "keywords": ["fulfillment", "harmony", "completion"]},
      { "arcana": "minor", "number": 1, "suit": "wands", "name": "Ace", "keywords": ["creation", "willpower", "inspiration", "desire"]},
      { "arcana": "minor", "number": 2, "suit": "wands", "name": "Two", "keywords": ["planning", "making decisions", "leaving home"]},
      { "arcana": "minor", "number": 3, "suit": "wands", "name": "Three", "keywords": ["looking ahead", "expansion", "rapid growth"]},
      { "arcana": "minor", "number": 4, "suit": "wands", "name": "Four", "keywords": ["community", "home", "celebration"]},
      { "arcana": "minor", "number": 5, "suit": "wands", "name": "Five", "keywords": ["competition", "rivalry", "conflict"]},
      { "arcana": "minor", "number": 6, "suit": "wands", "name": "Six", "keywords": ["victory", "success", "public reward"]},
      { "arcana": "minor", "number": 7, "suit": "wands", "name": "Seven", "keywords": ["perseverance", "defensive", "maintaining control"]},
      { "arcana": "minor", "number": 8, "suit": "wands", "name": "Eight", "keywords": ["rapid action", "movement", "quick decisions"]},
      { "arcana": "minor", "number": 9, "suit": "wands", "name": "Nine", "keywords": ["resilience", "grit", "last stand"]},
      { "arcana": "minor", "number": 10, "suit": "wands", "name": "Ten", "keywords": ["accomplishment", "responsibility", "burden"]},
      { "arcana": "minor", "number": 11, "suit": "wands", "name": "Page", "keywords": ["exploration", "excitement", "freedom"]},
      { "arcana": "minor", "number": 12, "suit": "wands", "name": "Knight", "keywords": ["action", "adventure", "fearlessness"]},
      { "arcana": "minor", "number": 13, "suit": "wands", "name": "Queen", "keywords": ["courage", "determination", "joy"]},
      { "arcana": "minor", "number": 14, "suit": "wands", "name": "King", "keywords": ["big picture", "leader", "overcoming challenges"]},
      { "arcana": "minor", "number": 1, "suit": "cups", "name": "Ace", "keywords": ["feelings", "spirituality", "intuition"]},
      { "arcana": "minor", "number": 2, "suit": "cups", "name": "Two", "keywords": ["unity", "partnership", "connection"]},
      { "arcana": "minor", "number": 3, "suit": "cups", "name": "Three", "keywords": ["friendship", "community", "happiness"]},
      { "arcana": "minor", "number": 4, "suit": "cups", "name": "Four", "keywords": ["apathy", "contemplation", "disconnectedness"]},
      { "arcana": "minor", "number": 5, "suit": "cups", "name": "Five", "keywords": ["loss", "grief", "self-pity"]},
      { "arcana": "minor", "number": 6, "suit": "cups", "name": "Six", "keywords": ["familiarity", "happy memories", "healing"]},
      { "arcana": "minor", "number": 7, "suit": "cups", "name": "Seven", "keywords": ["searching for purpose", "choices", "daydreaming"]},
      { "arcana": "minor", "number": 8, "suit": "cups", "name": "Eight", "keywords": ["walking away", "disillusionment", "leaving behind"]},
      { "arcana": "minor", "number": 9, "suit": "cups", "name": "Nine", "keywords": ["satisfaction", "emotional stability", "luxury"]},
      { "arcana": "minor", "number": 10, "suit": "cups", "name": "Ten", "keywords": ["inner happiness", "fulfillment", "dreams coming true"]},
      { "arcana": "minor", "number": 11, "suit": "cups", "name": "Page", "keywords": ["happy surprise", "dreamer", "sensitivity"]},
      { "arcana": "minor", "number": 12, "suit": "cups", "name": "Knight", "keywords": ["following the heart", "idealist", "romantic"]},
      { "arcana": "minor", "number": 13, "suit": "cups", "name": "Queen", "keywords": ["compassion", "calm", "comfort"]},
      { "arcana": "minor", "number": 14, "suit": "cups", "name": "King", "keywords": ["compassion", "control", "balance"]},
      { "arcana": "minor", "number": 1, "suit": "swords", "name": "Ace", "keywords": ["breakthrough", "clarity", "sharp mind"]},
      { "arcana": "minor", "number": 2, "suit": "swords", "name": "Two", "keywords": ["difficult choices", "indecision", "stalemate"]},
      { "arcana": "minor", "number": 3, "suit": "swords", "name": "Three", "keywords": ["heartbreak", "suffering", "grief"]},
      { "arcana": "minor", "number": 4, "suit": "swords", "name": "Four", "keywords": ["rest", "restoration", "contemplation"]},
      { "arcana": "minor", "number": 5, "suit": "swords", "name": "Five", "keywords": ["unbridled ambition", "win at all costs", "sneakiness"]},
      { "arcana": "minor", "number": 6, "suit": "swords", "name": "Six", "keywords": ["transition", "leaving behind", "moving on"]},
      { "arcana": "minor", "number": 7, "suit": "swords", "name": "Seven", "keywords": ["deception", "trickery", "tactics and strategy"]},
      { "arcana": "minor", "number": 8, "suit": "swords", "name": "Eight", "keywords": ["imprisonment", "entrapment", "self-victimization"]},
      { "arcana": "minor", "number": 9, "suit": "swords", "name": "Nine", "keywords": ["anxiety", "hopelessness", "trauma"]},
      { "arcana": "minor", "number": 10, "suit": "swords", "name": "Ten", "keywords": ["failure", "collapse", "defeat"]},
      { "arcana": "minor", "number": 11, "suit": "swords", "name": "Page", "keywords": ["curiousity", "restlessness", "mental energy"]},
      { "arcana": "minor", "number": 12, "suit": "swords", "name": "Knight", "keywords": ["action", "impulsiveness", "defending beliefs"]},
      { "arcana": "minor", "number": 13, "suit": "swords", "name": "Queen", "keywords": ["complexity", "perceptiveness", "clear mindedness"]},
      { "arcana": "minor", "number": 14, "suit": "swords", "name": "King", "keywords": ["head over heart", "discipline", "truth"]},
      { "arcana": "minor", "number": 1, "suit": "pentacles", "name": "Ace", "keywords": ["opportunity", "prosperity", "new venture"]},
      { "arcana": "minor", "number": 2, "suit": "pentacles", "name": "Two", "keywords": ["balancing decisions", "priorities", "adapting to change"]},
      { "arcana": "minor", "number": 3, "suit": "pentacles", "name": "Three", "keywords": ["teamwork", "collaboration", "building"]},
      { "arcana": "minor", "number": 4, "suit": "pentacles", "name": "Four", "keywords": ["conservation", "frugality", "security"]},
      { "arcana": "minor", "number": 5, "suit": "pentacles", "name": "Five", "keywords": ["need", "poverty", "insecurity"]},
      { "arcana": "minor", "number": 6, "suit": "pentacles", "name": "Six", "keywords": ["charity", "generosity", "sharing"]},
      { "arcana": "minor", "number": 7, "suit": "pentacles", "name": "Seven", "keywords": ["hard work", "perseverance", "diligence"]},
      { "arcana": "minor", "number": 8, "suit": "pentacles", "name": "Eight", "keywords": ["apprenticeship", "passion", "high standards"]},
      { "arcana": "minor", "number": 9, "suit": "pentacles", "name": "Nine", "keywords": ["fruits of labor", "rewards", "luxury"]},
      { "arcana": "minor", "number": 10, "suit": "pentacles", "name": "Ten", "keywords": ["legacy", "culmination", "inheritance"]},
      { "arcana": "minor", "number": 11, "suit": "pentacles", "name": "Page", "keywords": ["ambition", "desire", "diligence"]},
      { "arcana": "minor", "number": 12, "suit": "pentacles", "name": "Knight", "keywords": ["efficiency", "hard work", "responsibility"]},
      { "arcana": "minor", "number": 13, "suit": "pentacles", "name": "Queen", "keywords": ["practicality", "creature comforts", "financial security"]},
      { "arcana": "minor", "number": 14, "suit": "pentacles", "name": "King", "keywords": ["abundance", "prosperity", "security"]},
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
      "current-card-title",
      "answer-0",
      "answer-1",
      "answer-2",
      "answer-3",
      "next",
      "scores",
      "current-card-face",
      "sprite",
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

  const cardCanvasContext = elements["current-card-face"].getContext("2d");
  let cardSprite = elements["sprite"]
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
    elements["scores"].innerHTML = `<span class="mr-8">💚 ${session.scores.correct}</span><span class="ml-8">❌ ${session.scores.incorrect}</span>`;
  }

  function showCard(card) {
    elements["current-card-title"].innerHTML = util.formatCardText(card);

    let yOffset = 0;
    switch (card.suit) {
      case "wands": yOffset = 602 * 1; break;
      case "cups": yOffset = 602 * 2; break;
      case "swords": yOffset = 602 * 3; break;
      case "pentacles": yOffset = 602 * 4; break;
    }

    let xOffset = (card.arcana === "major" ? card.number : card.number - 1) * 352;

    cardCanvasContext.drawImage(
      cardSprite,
      xOffset, yOffset, // Source offset
      350, 600, // Source size
      0, 0, // Destination offset
      175, 300, // Destination size
    );
  }

  function next(session) {
    showCard(session.currentCard);

    correct = util.pickRandom(session.currentCard.keywords);
    fakes = util.pickRandomsWithBlacklist(session.allKeywords, 3, session.currentCard.keywords);
    
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
    util.hide(elements["session"]);
    util.show(elements["main"]);
    elements["start-session"].addEventListener("click", startSession)
  }
  
  document.addEventListener("DOMContentLoaded", bootstrap);
}());
