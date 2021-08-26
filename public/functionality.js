async function getPlayerInfo() {
  // const info = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data)
  // }
  // const api_url = "https://www.balldontlie.io/api/v1/players/237";
  // const response = await fetch(api_url);
  // const data = await response.json();
  // console.log(data);
  console.log("getPlayerInfo is called")
  
  const name = document.getElementById("playername").value;
  const api_url = `/player/${name}`;
  fetch(api_url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      // document.getElementById("team-name").textContent = json.team.full_name;

      const id = json.id;

      document.getElementById("firstname").textContent = json.first_name.toUpperCase();
      document.getElementById("lastname").textContent = json.last_name.toUpperCase();

      getPlayerStats(id);
    })
}

async function getPlayerStats(playerid) {
  console.log("getPlayerStats called");
  let id = playerid;
  let mostRecentYearPlayed = 2020;
  for (let i = 2020; i > 2019; i -= 1) {
    addRow(mostRecentYearPlayed, id);
    mostRecentYearPlayed -= 1;
  }
}

async function addRow(season, playerid) {
  console.log("addRow called");

  let mostRecentYearPlayed = season;
  let id = playerid;

  const api_url = `/season/${mostRecentYearPlayed}/id/${id}`;
  fetch(api_url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);

      document.getElementById("pts").textContent = json.pts;
      document.getElementById("reb").textContent = json.reb;
      document.getElementById("ast").textContent = json.ast;
      document.getElementById("stl").textContent = json.stl;

      document.getElementById("hideMe").id = "no";

      // const root = document.createElement("ul")
      // const points = document.createElement("li")
      // const rebounds = document.createElement("li")
      // const assists = document.createElement("li")
      // const steals = document.createElement("li")

      // points.textContent = json.pts;
      // rebounds.textContent = json.reb;
      // assists.textContent = json.ast;
      // steals.textContent = json.stl; 

      // root.append(points, rebounds, assists, steals);
      // root.className = `displayboard new-stats`;
      // root.id = "stats-header-id"

      // document.body.append(root);

      // efficiency_rating(json);
    })
}






// document.addEventListener("DOMContentLoaded", function() {
//   var input_text = document.getElementById("playername");
//   console.log(input_text);

//   input_text.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log(e.code);
//     if (e.code === "Enter") {
//       console.log("enter clicked")
//       getPlayerInfo();
//     }
//     e.preventDefault();
//     return;
//   })
// })

// async function handleSubmit(event) {
//   console.log("form was submitted")
//   event.preventDefault();
// }

// var form = document.getElementById("form")
// form.addEventListener("submit", handleSubmit(), true);


// function efficiency_rating(json) {
//   // json with every stat
//   // EFF = (PTS + REB + AST + STL + BLK - Missed FG - Missed FT - TO) / GP
// }