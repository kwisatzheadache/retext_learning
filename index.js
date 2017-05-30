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

module.exports = analyze;

function analyze(text, cb) {
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
    .process(text, function(err, file) {
      if (err) return cb(err);
      let json = {
        'repeated-words': 0,
        cliches: 0,
        contraditions: 0,
        diacritics: 0,
        equality: 0,
        overuse: 0,
        passive: 0,
        profanities: 0,
        readability: 0,
        sentiment: 0,
        spell: 0,
        usage: 0,
      };

      file.messages.forEach(function(message) {
        let source = message.source.replace('retext-', '');
        json[source] = 1;
      });

      cb(null, json);
    });
}
