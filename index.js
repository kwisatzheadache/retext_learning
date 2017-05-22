var unified = require('unified');
var markdown = require('remark-parse');
var remark2rehype = require('remark-rehype');
var document = require('rehype-document');
var format = require('rehype-format');
var html = require('rehype-stringify');
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

// unified()
//   .use(markdown)
//   .use(remark2rehype)
//   .use(document)
//   .use(format)
//   .use(html)
//   .process('# Hello world!', function (err, file) {
//     console.error(reporter(err || file));
//     console.log(String(file));
//   });

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
  .process('hello world! how are you guys doing, shit fuck i dont konw?', function (err, file) {
    console.error(reporter(err || file));
    console.log(String(file));
  });
