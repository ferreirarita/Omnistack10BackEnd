const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
mongoose.connect(
  "mongodb+srv://rita:uva2023*@cluster0.d6xcz.mongodb.net/omnistack10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
