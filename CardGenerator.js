const cards = [
  {
    question: 'scharf',
    answer: 'sharp',
    wrongAnswers: ['difficult', 'funny', 'amusing']
  },
  {
    question: 'weich',
    answer: 'weak',
    wrongAnswers: ['possible', 'same', 'later']
  },
  {
    question: 'der Schritt',
    answer: 'step',
    wrongAnswers: ['copier', 'bathroom', 'time']
  }
];

// get a random card but don't return the same one twice
export default function CardGenerator () {
  const available = [...Array(cards.length).keys()];
  return {
    next
  };

  function next () {
    if (!available.length) {
      throw new Error('No more cards');
    } else {
      const rand = Math.floor(Math.random() * available.length);
      const idx = available[rand];
      available.splice(rand, 1);
      return cards[idx];
    }
  }
};
