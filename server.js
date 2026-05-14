const express = require("express");
const play = require("play-dl");

const app = express();

app.get("/", (req, res) => {
  res.send("Radio Senja hidup 🌙");
});

app.get("/play", async (req, res) => {
  try {
    const id = req.query.id;

    const url = `https://www.youtube.com/watch?v=${id}`;

    const stream = await play.stream(url);

    res.setHeader("Content-Type", "audio/mpeg");

    stream.stream.pipe(res);

  } catch (err) {
    res.send("Error: " + err.message);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server hidup di port " + PORT);
});
