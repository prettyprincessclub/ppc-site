// compile_site.js
const fs = require('fs');
const pug = require('pug');

// Compile template.pug, and render a set of data
fs.writeFileSync('./html/contact.html', (pug.renderFile('./pug/contact.pug')));
fs.writeFileSync('./html/faq.html', (pug.renderFile('./pug/faq.pug')));
fs.writeFileSync('./html/index.html', (pug.renderFile('./pug/index.pug')));
fs.writeFileSync('./html/vegas.html', (pug.renderFile('./pug/vegas.pug')));

//Render event info
fs.writeFileSync('./html/event/event-faq.html', 
  (pug.renderFile('./pug/event/event-faq.pug')));
fs.writeFileSync('./html/event/programming.html', 
  (pug.renderFile('./pug/event/programming.pug')));
fs.writeFileSync('./html/event/reg.html', 
  (pug.renderFile('./pug/event/reg.pug')));
fs.writeFileSync('./html/event/schedule.html', 
  (pug.renderFile('./pug/event/schedule.pug')));
fs.writeFileSync('./html/event/special-guests.html', 
  (pug.renderFile('./pug/event/special-guests.pug')));
fs.writeFileSync('./html/event/tourists.html', 
  (pug.renderFile('./pug/event/tourists.pug')));
