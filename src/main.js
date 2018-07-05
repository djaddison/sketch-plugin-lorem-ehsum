import shuffle from 'lodash.shuffle';

const wordList = [
  'July 1', 'Canada Day', 'keener', 'aboot', 'eh', 'chirping', 'beaking', 'mickey', 'texas mickey', 'stag', 'stagette', 'give\'r', 'gong show', 'gonger', 'hang a larry', 'hang a roger', 'homo milk', 'two-four', 'KD', 'toque', 'out for a rip', 'pre-drinking', 'deking', 'dart', 'double-double', 'The Hortons', 'timbit', 'decked out', 'Nanaimo bar', 'Rockets', 'Freezies', 'runners', 'holiday', 'chesterfield', 'garburator', 'washroom', 'housecoat', 'pencil crayons', 'college', 'haligonian', 'parkade', 'Canuck', 'ten clicks', 'five clicks away', 'ten clicks out', 'hoser', 'kerfuffle', 'Molson muscle', 'lineup', 'for sure', 'arse', 'backbacon', 'icing sugar', 'whitener', 'processed cheese', 'chocolate bar', 'brown bread', 'rye & ginger', 'tutorial', 'marking', 'public school', 'supply teacher', '(z)ed', 'the bill', 'eavestrough', 'elastic', 'girl guides', 'hydro', 'serviette', 'tap', 'track pants', 'muskoka chair', 'postal code', 'beavertail', 'poutine', 'ketchup chips', 'vinegar on fries', 'butter tart', 'tortiere', 'milk in a bag', 'Smarties', 'Crispy Crunch', 'Coffee Crisp', 'Caramilk', 'Shreddies', '5-pin bowling', 'mountie', 'toonie', 'twoonie', 'David Wilcox', 'The Tragically Hip', 'Bare Naked Ladies', 'Maclean and Maclean'
];

export default function(context) {
  const document = context.document;
  const page = document.currentPage();

  // Create Text Layer
  let layer = MSTextLayer.new();
  layer.textBehaviour = 1; // 0: auto, 1: fixed
  layer.frame().setWidth(400);

  const ending = Math.random() > 0.5 ? ' eh?' : '.';
  const randomCount = 20 + Math.floor(Math.random() * 20);
  const sentence = shuffle(wordList).slice(0, randomCount).join(' ');
  const capitalized = sentence[0].toUpperCase() + sentence.slice(1) + ending;

  layer.stringValue = capitalized;
  layer.name = 'lorem-ehsum';
  page.addLayers([layer]);
}
