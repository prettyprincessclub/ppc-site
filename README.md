## PPC Site Source

It's a static site.

All the content is in md/.  It should always contain the most up-to-date version of the text content.

js/ is empty right now.

css/ has some styling for a top-level nav and some styling for text.

html/ should be generated from .pug templates.  Templates are in pug/.  See [their official docs](https://pugjs.org/api/getting-started.html) for more info.

### Dependencies
I'm using NPM.
```npm install pug```
```npm install --save jstransformer-markdown-it```

### Compiling the site
run ```js/compile_site.js``` using Node or a JS runtime of your choice from the ppc/ directory.

```node js/compile_site.js```
