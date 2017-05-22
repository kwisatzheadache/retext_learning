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

var string = "hey Michael, how's this work for you? It took me quite a while to figure out all of this node stuff. In fact, I still don't feel that that I know it wall that well. Nevertheless, here is a functioning executable. It should be faster learning from here. Heres a few sampels that should give more fuck fuck fuck warnings and set off retext stuffs." 
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
  .process(string, function (err, file) {
    console.error(reporter(err || file));
    console.log(String(file));
  });
