let heart = document.querySelector(".heart");
let percentage = document.querySelector(".percentage");
let results = document.querySelector(".results");
let verdict = document.querySelector(".verdict");
let gifContainer = document.querySelector(".gif-container");

let yourName = document.querySelector(".yourName");
let partnersName = document.querySelector(".partnersName");

let reset = document.querySelector(".reset");


let add = (value) => {
  verdict.innerHTML = value;
}

let displayGif = (src) => {
  let gif = document.createElement("img");
  gif.src = src;
  gifContainer.innerHTML = "";
  gifContainer.appendChild(gif);
}

let finalVerdict = (percent) => {
  let chance = Math.ceil(percent / 25);

  switch (chance) {
    case 1:
      add("Your love is a sad Adele song waiting to happen.");
      displayGif("https://media2.giphy.com/media/W0c3xcZ3F1d0EYYb0f/giphy.gif?cid=ecf05e47vabyxqw2s04z6d3i83cullyzhiw8v6s9xiixm1um&rid=giphy.gif&ct=g");
      break;
    case 2:
      add("It's a love-hate relationship, but mostly love, right?");
      displayGif("https://media.giphy.com/media/lgpo5cvtOWKVzgQwOB/giphy.gif");
      break;
    case 3:
      add("Your love is unbreakable!");
      displayGif("https://media.giphy.com/media/Ga9eZHYnep7he/giphy.gif");
      break;
    default:
      add("DAYUM! You two are like Bonnie and Clyde, but without the criminal record!");
      displayGif("https://media.giphy.com/media/xT0xeMurgifgxdummk/giphy.gif");
      break;
  }
}

const API_KEY = "CYd28YW4JoCpmyt9wSmxRj2cfzDcuL2Q";

heart.addEventListener("click", function () {
  heart.classList.toggle("active");
});

heart.addEventListener("click", () => {


  let heart = document.querySelector(".heart");



  
if (!yourName.value || !partnersName.value) {
alert("Please fill in both fields.");
} else if (yourName.value.toLowerCase() === "tanna" && partnersName.value.toLowerCase() === "dominykas") {
let lovePercent = 98;
results.innerHTML = "You and " + partnersName.value + " have a compatibility score of " + lovePercent + "%";
finalVerdict(lovePercent);
} else {
let lovePercent = Math.floor(Math.random() * 100) + 1;
results.innerHTML = "You and " + partnersName.value + " have a compatibility score of " + lovePercent + "%";
finalVerdict(lovePercent);
}
});

reset.addEventListener("click", () => {
  yourName.value = "";
  partnersName.value = "";
  results.innerHTML = "";
  gifContainer.innerHTML = ""; // remove the gif
  verdict.innerHTML = "";
});







