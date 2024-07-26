/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let valorCartas = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let palos = ["♦", "♥", "♠", "♣"];
  let paloRandom = palos[Math.floor(Math.random() * palos.length)];

  document.querySelector(".carta").innerHTML = valorCartas[Math.floor(Math.random() * valorCartas.length)];
  document.querySelector("#palo1").innerHTML = paloRandom;
  document.querySelector("#palo2").innerHTML = paloRandom;

  if (paloRandom === "♦" || paloRandom === "♥"){
    document.querySelector("#palo1").style.color = "red";
    document.querySelector("#palo2").style.color = "red";
  };
};
