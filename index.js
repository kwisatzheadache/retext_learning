var unified = require('unified');
var markdown = require('remark-parse');
var remark2rehype = require('remark-rehype');
var document = require('rehype-document');
var format = require('rehype-format');
var html = require('rehype-stringify');
var reporter = require('vfile-reporter');

unified()
  .use(markdown)
  .use(remark2rehype)
  .use(document)
  .use(format)
  .use(html)
  .process('# Hello world!', function (err, file) {
    console.error(reporter(err || file));
    console.log(String(file));
  });
