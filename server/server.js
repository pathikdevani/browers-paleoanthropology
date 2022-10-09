const express = require("express");
const path = require("path");

const { body, validationResult } = require("express-validator");

const apiRequest = require("./api.request");

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

app.use(express.json());

const validation = [
  body("name").isLength({ min: 2, max: 15 }).not().isEmpty().trim().escape(),
  body("email").isEmail(),
  body("country").isLength({ min: 2, max: 15 }).not().isEmpty().trim().escape(),
  body("company").isLength({ min: 2, max: 50 }).not().isEmpty().trim().escape(),
  body("message")
    .isLength({ min: 10, max: 200 })
    .not()
    .isEmpty()
    .trim()
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

app.post("/api/contact/mongodb", validation, apiRequest.mongodb);
app.post("/api/contact/mongodb-async", validation, apiRequest.mongodbAsync);
app.post("/api/contact/memory", validation, apiRequest.memory);
app.post("/api/contact/memory-async", validation, apiRequest.memoryAsync);
app.post("/api/contact/messageQueue", validation, apiRequest.messageQueue);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
