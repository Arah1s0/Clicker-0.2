if (!localStorage.clicks) localStorage.clicks = 0;
if (!localStorage.forClick) localStorage.forClick = 1;
if (!localStorage.perSecond) localStorage.perSecond = 0;
if (!localStorage.clickPrice) localStorage.clickPrice = 1000;
if (!localStorage.farmPrice) localStorage.farmPrice = 200;
if (!localStorage.vis) localStorage.vis = 1;



let bal = Number(localStorage.clicks);
let forClick = Number(localStorage.forClick);
let perSecond = Number(localStorage.perSecond);
let clickPrice = Number(localStorage.clickPrice);
let farmPrice = Number(localStorage.farmPrice);
const farmPrice1 = 200;
const clickPrice1 = 1000;

const bid10 = document.getElementById("bid10")
const bid25 = document.getElementById("bid25")
const bid50 = document.getElementById("bid50")
const bid75 = document.getElementById("bid75")
const bid100 = document.getElementById("bid100")
let bid = 0;


document.getElementById("ball").innerHTML = bal;
document.getElementById("forClick").innerHTML = forClick;
document.getElementById("clickPrice").innerHTML = clickPrice;
document.getElementById("perSecond").innerHTML = perSecond;
document.getElementById("farmPrice").innerHTML = farmPrice;


function addMoneyy() {
 bal = bal + forClick;
 document.getElementById("ball").innerHTML = bal;
 console.log('dd')
 localStorage.clicks = bal;
}

function farm() {
 bal = bal + perSecond
 document.getElementById("ball").innerHTML = bal
 localStorage.clicks = bal;
}

setInterval(farm, 1000)

function addClick() {
 if (bal < clickPrice) {
  alert('Тебе не хватает денег!');
 }
 if (bal >= clickPrice) {
  bal = bal - clickPrice;
  clickPrice = Math.round(clickPrice * 1.05);
  forClick = forClick + 1;
  localStorage.clicks = bal;
  localStorage.clickPrice = clickPrice;
  localStorage.forClick = forClick;
  document.getElementById("ball").innerHTML = bal;
  document.getElementById("clickPrice").innerHTML = clickPrice;
  document.getElementById("forClick").innerHTML = forClick;
 }
}

function addFarm() {
 if (bal < farmPrice) {
  alert("Тебе не хватает денег!")
 }
 if (bal >= farmPrice) {
  bal = bal - farmPrice;
  farmPrice = Math.round(farmPrice * 1.05);
  perSecond = perSecond + 1;
  localStorage.clicks = bal;
  localStorage.farmPrice = farmPrice;
  localStorage.perSecond = perSecond;
  document.getElementById("ball").innerHTML = bal;
  document.getElementById("farmPrice").innerHTML = farmPrice
  document.getElementById("perSecond").innerHTML = perSecond
 }
}

function select10() {
 bid10.style.backgroundColor = "#ADD8E6";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.1;
}

function select25() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#ADD8E6"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.25;
}

function select50() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#ADD8E6"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.5;
}

function select75() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#ADD8E6"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.75;
}

function select100() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#ADD8E6"
 bid = 1;
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function hide() {
 let hide = document.getElementById("clicker")
 clicker.style.display = "none";
}