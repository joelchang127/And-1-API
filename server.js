const express = require("express")
const fetch = require("node-fetch")
const app = express();
var port = process.env.port || 8080;

app.use(express.json({limit: "1mb"}));
app.use(express.static("public"));

app.get("/player/:name", async (req,res) => {
    const playername = req.params.name;
    const api_url = `https://www.balldontlie.io/api/v1/players?search=${playername}`;
    const response = await fetch(api_url);
    var data = await response.json();
    console.log(api_url)
    data = data.data[0]
    res.json(data);
});

app.get("/season/:season/id/:id", async (req, res) => {
  const season = req.params.season;
  const id = req.params.id;
  const api_url = `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${id}`
  console.log(api_url);
  const response = await fetch(api_url);
  var data = await response.json();
  console.log(api_url);
  data = data.data[0]
  res.json(data);
  console.log(data);
})

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})