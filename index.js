if (process.argv.length < 3) {
  console.log('Usage: node ' + process.arg[1] + 'FILENAME');
  process.exit(1);
}

var fs = require('fs');
var filename = process.argv[2];
var outSync = fs.readFileSync(filename).toString();
//using synchronous read, so that the variable is available to be processed by retext

var reporter = require('vfile-reporter');
var retext = require('retext');
var contractions = require('retext-contractions');
var diacritics = require('retext-diacritics');
var cliches = require('retext-cliches');
var equality = require('retext-equality');
var overuse = require('retext-overuse');
var passive = require('retext-passive');
var readability = require('retext-readability');
var repeatedWords = require('retext-repeated-words');
var sentiment = require('retext-sentiment');
var smarypants = require('retext-smartypants');
var spell = require('retext-spell');
var usage = require('retext-usage');
var profanities = require('retext-profanities');

retext()
  .use(contractions)
  .use(diacritics)
  .use(cliches)
  .use(equality)
  .use(overuse)
  .use(passive)
  .use(readability)
  .use(repeatedWords)
  .use(sentiment)
  .use(smarypants)
  .use(profanities)
  //.use(spell)
  .use(usage)
  .process(outSync, function (err, file) {
    console.error(reporter(err || file));
    console.log(String(file));
  });
