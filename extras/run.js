// Usage file for different functions

var formatter = require('./formatter');
var arrayOutput = formatter.convertToArray("NumberOnly, NonNegative, NonNull, NonDecimal");
console.log(arrayOutput);


var stringoutput = formatter.convertToString([ 'NumberOnly', ' NonNegative', ' NonNull', ' NonDecimal' ])
console.log(stringoutput);