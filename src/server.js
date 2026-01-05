import express from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.send("Hola, como estas?");
});

// Add post request handler
app.post("/add", (req, res) => {
  const data = [];
  const { body } = req;
  if (!body.name) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Name is required", data });
  }
  return res
    .status(StatusCodes.CREATED)
    .send({ message: "Added successfully", data });
});

app.listen(PORT, () => {
  console.log(`Yo hablos espanol ${PORT}`);
});
