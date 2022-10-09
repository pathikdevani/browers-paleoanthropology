const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(
  "/webpack",
  express.static(path.resolve(__dirname, "../html-webpack-handlebars/build"))
);

app.use(
    "/react",
    express.static(path.resolve(__dirname, "../react-typescript/build"))
  );

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
