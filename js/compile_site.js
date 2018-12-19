// compile_site.js
const fs = require('fs');
const pug = require('pug');

// Compile template.pug, and render a set of data
fs.writeFile('./html/contact.html', (pug.renderFile('./pug/contact.pug')));
fs.writeFile('./html/faq.html', (pug.renderFile('./pug/faq.pug')));
fs.writeFile('./html/index.html', (pug.renderFile('./pug/index.pug')));
fs.writeFile('./html/vegas.html', (pug.renderFile('./pug/vegas.pug')));
