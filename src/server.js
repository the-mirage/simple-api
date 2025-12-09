import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola, como estas?");
});

app.listen(PORT, () => {
  console.log(`Yo hablos espanol ${PORT}`);
});
