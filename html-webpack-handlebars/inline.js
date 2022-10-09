const minify = require("html-minifier").minify;

const {
  inlineScriptTags,
} = require("inline-scripts");
const inlineStylesheets = require("./node_modules/inline-scripts/src/inlineStylesheets");

const fs = require("fs");
const path = require("path");

async function init() {
  const js = await inlineScriptTags("./build/index.html");
  fs.writeFileSync(
    path.join(__dirname, "./build/index-bundle.html"),
    minify(js, {
      includeAutoGeneratedTags: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortClassName: true,
      useShortDoctype: true,
      collapseWhitespace: true,
    })
  );
  const css = await inlineStylesheets("./build/index-bundle.html");
  fs.writeFileSync(path.join(__dirname, "./build/index-bundle.html"), css);
}

init();
