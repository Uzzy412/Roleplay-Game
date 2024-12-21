const player = document.querySelector(".player");
const inventory = document.querySelector(".inventory");
const text = document.querySelector(".text");

// buttons
const buttonAttack = document.querySelector(".attack");

// const buttonRight = document.querySelector(".right");
// const tile = document.querySelectorAll(".tile");
// const buttonEnter = document.querySelector(".enter");

// locations html references... 
const map = document.querySelector(".map");
const exit = document.querySelector(".exit");
const oakland = document.querySelector('.oak-area');
const evergreen = document.querySelector('.pine-area');
const stones = document.querySelector('.cave-area');
const mountain = document.querySelector('.mountain-area');
const fields = document.querySelector('.field-area');
const lake = document.querySelector('.lake-area');
const castle = document.querySelector('.dragon-castle-area');
const village1 = document.querySelector('.village1-area');
const village2 = document.querySelector('.village2-area');
const village3 = document.querySelector('.village3-area');
const town = document.querySelector('.town-area');
const cycleCell = document.querySelectorAll(".cycle");
const cellArray = Array.from(cycleCell);

// monsters html references...
const troll = document.querySelector('.troll');
const orc = document.querySelector('.orc');
const elf = document.querySelector('.elf');
const goblin = document.querySelector('.goblin');

const locations = [
  {name: "Main Map", 
   buttonsText: ["Inventory", "Enter", "Turn around"],
   buttonsFunctions: [openInventory, enter, turnAround],
   accessCoords: {positionTop: 20, positionLeft: 50},
   text: "Welcome! The villagers need your help to fight the monsters hidden around the villages. Use the arrow keys to move on the map and the buttons to interact.",
   color: "#afde85",
  },

  {name: "Oakland Forest",
    buttonsText: ["Inventory", "Buy", "Sell"],
    buttonsFunctions: [openInventory, buy, sell],
    accessCoords: [
      {positionTopFrom: 0, positionTopTo: 50},
      {positionLeftFrom: 220, positionLeftTo: 260},
    ],
    text: "This is Oakland Forest. Thousands of tall oak trees and who knows what else...",
    color: "#d6eb91",
    exit: true,
   },

   {name: "Evergreen Forest",
    buttonsText: ["Inventory", "Buy", "Sell"],
    buttonsFunctions: [openInventory, buy, sell],
    accessCoords: [
      {positionTopFrom: 340, positionTopTo: 400},
      {positionLeftFrom: 510, positionLeftTo: 540},
    ],
    text: "You entered the Evergreen Forest. This straight trees, they say, never lose their green leaves.",
    color: "#76d6d0",
    exit: true,
   },

  {name: "Kronen Stones",
   buttonsText: ["Inventory", "Attack", "Run"],
   buttonsFunctions: [openInventory, attack, run],
   accessCoords: [
    {positionTopFrom: 140, positionTopTo: 170},
    {positionLeftFrom: 80, positionLeftTo: 120},
  ],
   text: "You are at the Kronen Stones. Massive rocks growing from the ground, this is a very rocky region.",
   color: "#83a1de",
   monsters: [orc, elf, troll],
   exit: true,
  },

  {name: "Gotland Mountain",
    buttonsText: ["Inventory", "Attack", "Run"],
    buttonsFunctions: [openInventory, attack, run],
    accessCoords: [
     {positionTopFrom: -10, positionTopTo: 30},
     {positionLeftFrom: 890, positionLeftTo: 930},
   ],
    text: "You are at the Gotland Mountain. It is the highest region in the country. They also say it is very dangerous.",
    color: "#8a90ed",
    monsters: [orc, elf, troll],
    exit: true,
   },

   {name: "Norfolk Fields",
    buttonsText: ["Inventory", "Attack", "Run"],
    buttonsFunctions: [openInventory, attack, run],
    accessCoords: [
     {positionTopFrom: 130, positionTopTo: 170},
     {positionLeftFrom: 640, positionLeftTo: 690},
   ],
    text: "This are the Norfolk Fields. The view is impressive. Huge areas of green grass and lots of colorful ground.",
    color: "#b2f589",
    monsters: [orc, elf, troll],
    exit: true,
   },

   {name: "Hollung Lake",
    buttonsText: ["Inventory", "Attack", "Run"],
    buttonsFunctions: [openInventory, attack, run],
    accessCoords: [
     {positionTopFrom: 380, positionTopTo: 440},
     {positionLeftFrom: 300, positionLeftTo: 330},
   ],
    text: "You are now at Hollung Lake. You can see yourself like in the mirror in this beautiful, blue, clear lake.",
    color: "#92cffc",
    monsters: [orc, elf, troll],
    exit: true,
   },

   {name: "Dragons Fortress",
    buttonsText: ["Inventory", "Attack", "Run"],
    buttonsFunctions: [openInventory, attack, run],
    accessCoords: [
     {positionTopFrom: 380, positionTopTo: 450},
     {positionLeftFrom: 850, positionLeftTo: 930},
   ],
    text: "The Fortress of Dragons... Here, nobody comes, it is a damned place. And nobody comes back home.",
    color: "#9e3715",
    monsters: [orc, elf, troll],
    exit: true,
   },

  {name: "Village of Tornstad",
    buttonsText: ["Inventory", "Buy", "Sell"],
    buttonsFunctions: [openInventory, buy, sell],
    accessCoords: [
      {positionTopFrom: 410, positionTopTo: 440},
      {positionLeftFrom: 30, positionLeftTo: 70},
    ],
    text: "You are in the village of Tornstad. You can see people walking around. It looks peaceful.",
    color: "#ebd50e",
    exit: true,
   },

   {name: "Village of Svaland",
    buttonsText: ["Inventory", "Buy", "Sell"],
    buttonsFunctions: [openInventory, buy, sell],
    accessCoords: [
      {positionTopFrom: 20, positionTopTo: 40},
      {positionLeftFrom: 480, positionLeftTo: 520},
    ],
    text: "You entered the village of Svaland. Nothing out of the ordinary happens here.",
    color: "#e6be20",
    exit: true,
   },

   {name: "Village of Naesdal",
    buttonsText: ["Inventory", "Buy", "Sell"],
    buttonsFunctions: [openInventory, buy, sell],
    accessCoords: [
      {positionTopFrom: 170, positionTopTo: 190},
      {positionLeftFrom: 880, positionLeftTo: 920},
    ],
    text: "This is Village of Naesdal. People are working here and there. Looks like everything is fine.",
    color: "#ffd769",
    exit: true,
   },

   {name: "Town of Lucius",
    buttonsText: ["Inventory", "Buy", "Sell"],
    buttonsFunctions: [openInventory, buy, sell],
    accessCoords: [
      {positionTopFrom: 210, positionTopTo: 250},
      {positionLeftFrom: 290, positionLeftTo: 360},
    ],
    text: "Welcome to Town of Lucius. It seems to be a wealthy and secure place.",
    color: "#dbd379",
    exit: true,
   },

   {name: "exit",
    accessCoords: [
      {positionTopFrom: -10, positionTopTo: 10},
      {positionLeftFrom: -10, positionLeftTo: 10},
    ],
    text: "You are back on the main map. Where do you wanna go?",
    color: "#c3dbab",
   },
];



function openInventory() {}
function enter() {}
function turnAround() {}
function attack() {}
function run() {}
function buy() {}
function sell() {}

// some default values...
let topp = -10;
let leftt = -10;
player.style.cssText = `top: ${topp}px; left: ${leftt}px`;
let moveBy = 10;
let name = locations[0].name;
const arr = [];
text.innerText = locations[0].text;


// ----------day-night cycle and clock functionality---------- //

const clock = document.querySelector(".real-time");
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
const overlay = document.querySelector(".overlay");

let clockM = 0;
let clockH = 12;
let alphaValue = 0.0;
overlay.style.backgroundColor = `hsla(100, 100%, 15%, ${alphaValue})`;

// hsl for map...
// let hue = 70;
// let saturate = 100;
// let lightness = 45; 

// hsl for cycleCell...
// let cellHue = 50;
// let cellSaturate = 80;
// let cellLightness = 90;

const interval = setInterval(dayNightCycle, 366);

function dayNightCycle() {

  // ---------- the clock --------- //
  clockM++;
  if (clockM < 10) {
    minutesText.innerText = "0" + clockM;
  }
  
  else if (clockM > 9 && clockM < 60) {
    minutesText.innerText = clockM;
  }
  
  else if (clockM > 59) {
    clockM = 0;
    minutesText.innerText = "0" + clockM;
    clockH++;
  }
  
  if (clockH < 10) {
    hoursText.innerText = "0" + clockH + ":";
  }
  
   else if (clockH > 9 && clockH < 24) {
    hoursText.innerText = clockH + ":";
  }
  
  else if (clockH === 24) {
    clockH = 0;
    hoursText.innerText = "0" + clockH + ":";
  }

  // ---------- alternative to day-night cycle----------------- //

  if (clockH >= 0 && clockH < 12) {
    alphaValue -= 0.0007;
    overlay.style.backgroundColor = `hsla(100, 100%, 15%, ${alphaValue})`;
    if (alphaValue <= 0) { 
      alphaValue = 0;
      overlay.style.backgroundColor = `hsla(100, 100%, 15%, ${alphaValue})`;
    }
  }
  
  if (clockH >= 12 && clockH < 24) {
    alphaValue += 0.0007;
    overlay.style.backgroundColor = `hsla(100, 100%, 15%, ${alphaValue})`;
    if (alphaValue >= 0.6) { 
      alphaValue = 0.6;
      overlay.style.backgroundColor = `hsla(100, 100%, 15%, ${alphaValue})`;
    }
  }

// ---------------------------------------------------------- //



  // ---------- day and night ---------- //

  // if (clockH >= 0 && clockH < 12) {
  //   lightness += 0.04;
  //   cellLightness += 0.06;
  //   map.style.backgroundColor = `hsl(${hue}, ${saturate}%, ${lightness}%)`;
  //   for (const cell of cellArray) {
  //     cell.style.backgroundColor = `hsl(${cellHue}, ${cellSaturate}%, ${cellLightness}%)`;
  //   }
  //   if (lightness >= 45) { 
  //     lightness = 45;
  //     map.style.backgroundColor = `hsl(${hue}, ${saturate}%, ${lightness}%)`;
      
  //   }
  //   if (cellLightness >= 90) { 
  //     cellLightness = 90;
  //     for (const cell of cellArray) {
  //       cell.style.backgroundColor = `hsl(${cellHue}, ${cellSaturate}%, ${cellLightness}%)`;
  //     }
  //  }
  // }
  
  // else if (clockH >= 12 && clockH < 24) {
  //   lightness -= 0.04;
  //   cellLightness -= 0.06;
  //   map.style.backgroundColor = `hsl(${hue}, ${saturate}%, ${lightness}%)`;
  //   for (const cell of cellArray) {
  //     cell.style.backgroundColor = `hsl(${cellHue}, ${cellSaturate}%, ${cellLightness}%)`;
  //   }
  //   if (lightness <= 20) { 
  //     lightness = 20;
  //     map.style.backgroundColor = `hsl(${hue}, ${saturate}%, ${lightness}%)`;
  //     console.log(lightness);
  //   }
  //   if (cellLightness <= 40) { 
  //     celLightness = 40;
  //     for (const cell of cellArray) {
  //       cell.style.backgroundColor = `hsl(${cellHue}, ${cellSaturate}%, ${cellLightness}%)`;
  //     }
  //  }
  // }
  
  // else if (clockH > 20 && clockH < 24) {
  //   if (lightness <= 20) { 
  //     lightness = 20;
  //     map.style.backgroundColor = `hsl(${hue}, ${saturate}%, ${lightness}%)`;
  //   }
  //   if (cellLightness <= 40) { 
  //     cellLightness = 40;
  //     for (const cell of cellArray) {
  //       cell.style.backgroundColor = `hsl(${cellHue}, ${cellSaturate}%, ${cellLightness}%)`;
  //     }
  //   }
  // }
  
  // else if (clockH === 24) {
  //   time = 0;
  //   timeCount.innerText = time;
  //   if (lightness <= 20) { 
  //     lightness = 20;
  //     map.style.backgroundColor = `hsl(${hue}, ${saturate}%, ${lightness}%)`;
  //   }
  //   if (cellLightness <= 40) { 
  //     cellLightness = 40;
  //     for (const cell of cellArray) {
  //       cell.style.backgroundColor = `hsl(${cellHue}, ${cellSaturate}%, ${cellLightness}%)`;
  //     }
  //   }
  // }
}

// ------------------------------------------------- //



document.addEventListener("keyup", move);
function move(event) {
  // alert(`Top: ${topp}\nLeft: ${leftt}`);
  if (event.key === 'ArrowUp') {
    topp -= moveBy;
    player.style.top = topp + "px";
    if (topp <= -20) {
      topp = -20;
      player.style.top = topp + "px";
    }
  } else if (event.key === 'ArrowDown') {
    topp += moveBy;
    player.style.top = topp + "px";
    if (topp >= 470) {
      topp = 470;
      player.style.top = topp + "px";
    }
  } else if (event.key === 'ArrowLeft') {
    leftt -= moveBy;
    player.style.left = leftt + "px";
    if (leftt <= -10) {
      leftt = -10;
      player.style.left = leftt + "px";
    }
  } else if (event.key === 'ArrowRight') {
    leftt += moveBy;
    player.style.left = leftt + "px";
    if (leftt >= 970) {
      leftt = 970;
      player.style.left = leftt + "px";
    }
  }
  findLocation();
}

function findLocation() {
  // if player approach Oakland Forest...
  if (topp >= locations[1].accessCoords[0].positionTopFrom &&
      topp <= locations[1].accessCoords[0].positionTopTo &&
      leftt >= locations[1].accessCoords[1].positionLeftFrom &&
      leftt <= locations[1].accessCoords[1].positionLeftTo &&
      name === locations[0].name) {
        if (leftt === 220) {arr.push(topp, leftt - 20)}
        if (leftt === 230 && topp === 0) {arr.push(topp - 20, leftt)}
        if (leftt === 230 && topp === 50) {arr.push(topp + 20, leftt)}
        if (leftt === 240 && topp === 0) {arr.push(topp - 20, leftt)}
        if (leftt === 240 && topp === 50) {arr.push(topp + 20, leftt)}
        if (leftt === 250 && topp === 50) {arr.push(topp + 20, leftt)}
        if (leftt === 250 && topp === 0) {arr.push(topp - 20, leftt)}
        if (leftt === 260) {arr.push(topp, leftt + 20)}
        // if (leftt === 270) {arr.push(topp, leftt + 20)}
        updateLocation(locations[1], 0, 30);
  }

  // if player approach Evergreen Forest...
  if (topp >= locations[2].accessCoords[0].positionTopFrom &&
    topp <= locations[2].accessCoords[0].positionTopTo &&
    leftt >= locations[2].accessCoords[1].positionLeftFrom &&
    leftt <= locations[2].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {
      
         if (leftt === 510) {arr.push(topp, leftt - 20)}
         else if (leftt === 520 && topp === 340) {arr.push(topp - 20, leftt)}
         else if (leftt === 520 && topp === 400) {arr.push(topp + 20, leftt)}
         else if (leftt === 530 && topp === 340) {arr.push(topp - 20, leftt)}
         else if (leftt === 530 && topp === 400) {arr.push(topp + 20, leftt)}
         else if (leftt === 540) {arr.push(topp, leftt + 20)}

      updateLocation(locations[2], 0, 30);
  } 

  // if player approach Kronen Stones...
  else if (topp >= locations[3].accessCoords[0].positionTopFrom &&
    topp <= locations[3].accessCoords[0].positionTopTo &&
    leftt >= locations[3].accessCoords[1].positionLeftFrom &&
    leftt <= locations[3].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 80) {arr.push(topp, leftt - 20)}
      else if (leftt === 90 && topp === 140) {arr.push(topp - 20, leftt)}
      else if (leftt === 90 && topp === 170) {arr.push(topp + 20, leftt)}
      else if (leftt === 100 && topp === 140) {arr.push(topp - 20, leftt)}
      else if (leftt === 100 && topp === 170) {arr.push(topp + 20, leftt)}
      else if (leftt === 110 && topp === 140) {arr.push(topp - 20, leftt)}
      else if (leftt === 110 && topp === 170) {arr.push(topp + 20, leftt)}
      else if (leftt === 120) {arr.push(topp, leftt + 20)}
      
      updateLocation(locations[3], 0, 30);
  } 

  // if player approach Gotland Mountain...
  else if (topp >= locations[4].accessCoords[0].positionTopFrom &&
    topp <= locations[4].accessCoords[0].positionTopTo &&
    leftt >= locations[4].accessCoords[1].positionLeftFrom &&
    leftt <= locations[4].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 890) {arr.push(topp, leftt - 20)}
      else if (leftt === 900 && topp === -10) {arr.push(topp - 20, leftt)}
      else if (leftt === 900 && topp === 30) {arr.push(topp + 20, leftt)}
      else if (leftt === 910 && topp === -10) {arr.push(topp - 20, leftt)}
      else if (leftt === 910 && topp === 30) {arr.push(topp + 20, leftt)}
      else if (leftt === 920 && topp === -10) {arr.push(topp - 20, leftt)}
      else if (leftt === 920 && topp === 30) {arr.push(topp + 20, leftt)}
      else if (leftt === 930) {arr.push(topp, leftt + 20)}

      updateLocation(locations[4], 0, 30);
  }

  // if player approach Norfolk Fields...
  else if (topp >= locations[5].accessCoords[0].positionTopFrom &&
    topp <= locations[5].accessCoords[0].positionTopTo &&
    leftt >= locations[5].accessCoords[1].positionLeftFrom &&
    leftt <= locations[5].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 640) {arr.push(topp, leftt - 20)}
      else if (leftt === 650 && topp === 130) {arr.push(topp - 20, leftt)}
      else if (leftt === 650 && topp === 170) {arr.push(topp + 20, leftt)}
      else if (leftt === 660 && topp === 130) {arr.push(topp - 20, leftt)}
      else if (leftt === 660 && topp === 170) {arr.push(topp + 20, leftt)}
      else if (leftt === 670 && topp === 130) {arr.push(topp - 20, leftt)}
      else if (leftt === 670 && topp === 170) {arr.push(topp + 20, leftt)}
      else if (leftt === 680 && topp === 130) {arr.push(topp - 20, leftt)}
      else if (leftt === 680 && topp === 170) {arr.push(topp + 20, leftt)}
      else if (leftt === 690) {arr.push(topp, leftt + 20)}

      updateLocation(locations[5], 0, 30);
  }

  // if player approach Hollung Lake...
  else if (topp >= locations[6].accessCoords[0].positionTopFrom &&
    topp <= locations[6].accessCoords[0].positionTopTo &&
    leftt >= locations[6].accessCoords[1].positionLeftFrom &&
    leftt <= locations[6].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 300) {arr.push(topp, leftt - 20)}
      else if (leftt === 310 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 310 && topp === 440) {arr.push(topp + 20, leftt)}
      else if (leftt === 320 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 320 && topp === 440) {arr.push(topp + 20, leftt)}
      else if (leftt === 330) {arr.push(topp, leftt + 20)}

      updateLocation(locations[6], 0, 30);
  }

  // if player approach Dragon's Castle...
  else if (topp >= locations[7].accessCoords[0].positionTopFrom &&
    topp <= locations[7].accessCoords[0].positionTopTo &&
    leftt >= locations[7].accessCoords[1].positionLeftFrom &&
    leftt <= locations[7].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 850) {arr.push(topp, leftt - 20)}
      else if (leftt === 860 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 860 && topp === 450) {arr.push(topp + 20, leftt)}
      else if (leftt === 870 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 870 && topp === 450) {arr.push(topp + 20, leftt)}
      else if (leftt === 880 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 880 && topp === 450) {arr.push(topp + 20, leftt)}
      else if (leftt === 890 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 890 && topp === 450) {arr.push(topp + 20, leftt)}
      else if (leftt === 900 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 900 && topp === 450) {arr.push(topp + 20, leftt)}
      else if (leftt === 910 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 910 && topp === 450) {arr.push(topp + 20, leftt)}
      else if (leftt === 920 && topp === 380) {arr.push(topp - 20, leftt)}
      else if (leftt === 920 && topp === 450) {arr.push(topp + 20, leftt)}
      else if (leftt === 930) {arr.push(topp, leftt + 20)}

      updateLocation(locations[7], 0, 30);
  }

  // if player approach Tornstad Village...
  else if (topp >= locations[8].accessCoords[0].positionTopFrom &&
    topp <= locations[8].accessCoords[0].positionTopTo &&
    leftt >= locations[8].accessCoords[1].positionLeftFrom &&
    leftt <= locations[8].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 30) {arr.push(topp, leftt - 20)}
      else if (leftt === 40 && topp === 410) {arr.push(topp - 20, leftt)}
      else if (leftt === 40 && topp === 440) {arr.push(topp + 20, leftt)}
      else if (leftt === 50 && topp === 410) {arr.push(topp - 20, leftt)}
      else if (leftt === 50 && topp === 440) {arr.push(topp + 20, leftt)}
      else if (leftt === 60 && topp === 410) {arr.push(topp - 20, leftt)}
      else if (leftt === 60 && topp === 440) {arr.push(topp + 20, leftt)}
      else if (leftt === 70) {arr.push(topp, leftt + 20)}

      updateLocation(locations[8], 0, 30);
  }

  // if player approach Svaland Village...
  else if (topp >= locations[9].accessCoords[0].positionTopFrom &&
    topp <= locations[9].accessCoords[0].positionTopTo &&
    leftt >= locations[9].accessCoords[1].positionLeftFrom &&
    leftt <= locations[9].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 480) {arr.push(topp, leftt - 20)}
      else if (leftt === 490 && topp === 20) {arr.push(topp - 20, leftt)}
      else if (leftt === 490 && topp === 40) {arr.push(topp + 20, leftt)}
      else if (leftt === 500 && topp === 20) {arr.push(topp - 20, leftt)}
      else if (leftt === 500 && topp === 40) {arr.push(topp + 20, leftt)}
      else if (leftt === 510 && topp === 20) {arr.push(topp - 20, leftt)}
      else if (leftt === 510 && topp === 40) {arr.push(topp + 20, leftt)}
      else if (leftt === 520) {arr.push(topp, leftt + 20)}

      updateLocation(locations[9], 0, 30);
  }

  // if player approach Naesdal Village...
  else if (topp >= locations[10].accessCoords[0].positionTopFrom &&
    topp <= locations[10].accessCoords[0].positionTopTo &&
    leftt >= locations[10].accessCoords[1].positionLeftFrom &&
    leftt <= locations[10].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 880) {arr.push(topp, leftt - 20)}
      else if (leftt === 890 && topp === 170) {arr.push(topp - 20, leftt)}
      else if (leftt === 890 && topp === 190) {arr.push(topp + 20, leftt)}
      else if (leftt === 900 && topp === 170) {arr.push(topp - 20, leftt)}
      else if (leftt === 900 && topp === 190) {arr.push(topp + 20, leftt)}
      else if (leftt === 910 && topp === 170) {arr.push(topp - 20, leftt)}
      else if (leftt === 910 && topp === 190) {arr.push(topp + 20, leftt)}
      else if (leftt === 920) {arr.push(topp, leftt + 20)}

      updateLocation(locations[10], 0, 30);
  }

  // if player approach Lucius Town...
  else if (topp >= locations[11].accessCoords[0].positionTopFrom &&
    topp <= locations[11].accessCoords[0].positionTopTo &&
    leftt >= locations[11].accessCoords[1].positionLeftFrom &&
    leftt <= locations[11].accessCoords[1].positionLeftTo &&
    name === locations[0].name) {

      if (leftt === 290) {arr.push(topp, leftt - 20)}
      else if (leftt === 300 && topp === 210) {arr.push(topp - 20, leftt)}
      else if (leftt === 300 && topp === 250) {arr.push(topp + 20, leftt)}
      else if (leftt === 310 && topp === 210) {arr.push(topp - 20, leftt)}
      else if (leftt === 310 && topp === 250) {arr.push(topp + 20, leftt)}
      else if (leftt === 320 && topp === 210) {arr.push(topp - 20, leftt)}
      else if (leftt === 320 && topp === 250) {arr.push(topp + 20, leftt)}
      else if (leftt === 330 && topp === 210) {arr.push(topp - 20, leftt)}
      else if (leftt === 330 && topp === 250) {arr.push(topp + 20, leftt)}
      else if (leftt === 340 && topp === 210) {arr.push(topp - 20, leftt)}
      else if (leftt === 340 && topp === 250) {arr.push(topp + 20, leftt)}
      else if (leftt === 350 && topp === 210) {arr.push(topp - 20, leftt)}
      else if (leftt === 350 && topp === 250) {arr.push(topp + 20, leftt)}
      else if (leftt === 360) {arr.push(topp, leftt + 20)}

      updateLocation(locations[11], 0, 30);
  }

  // if player exit current location...
  else if (topp >= locations[12].accessCoords[0].positionTopFrom &&
    topp <= locations[12].accessCoords[0].positionTopTo &&
    leftt >= locations[12].accessCoords[1].positionLeftFrom &&
    leftt <= locations[12].accessCoords[1].positionLeftTo &&
    (name === locations[1].name ||
     name === locations[2].name ||
     name === locations[3].name ||
     name === locations[4].name ||
     name === locations[5].name ||
     name === locations[6].name ||
     name === locations[7].name ||
     name === locations[8].name ||
     name === locations[9].name ||
     name === locations[10].name ||
     name === locations[11].name)) {
      updateLocation(locations[0], arr[0], arr[1]);
      arr.shift();
      arr.shift();
  }
  
} // findLocation()...

function updateLocation(location, y, x) {
  topp = y;
  leftt = x;
  player.style.cssText = `top: ${topp}px; left: ${leftt}px;`;
  
  if (location.exit) {
    exit.style.display = "block";
  } else {
    exit.style.display = "none";
  }

  if (location.name !== "Main Map") {
    oakland.style.display = "none";
    evergreen.style.display = "none";
    stones.style.display = "none";
    village1.style.display = "none";
    village2.style.display = "none";
    village3.style.display = "none";
  } else {
    oakland.style.display = "block";
    evergreen.style.display = "block";
    stones.style.display = "block";
    village1.style.display = "block";
  }

  // if (location.context === "village") {
  //   troll.style.display = "none"; 
  // }

  if (location.name === "Oakland Forest" || location.name === "Evergreen Forest") {
    troll.style.display = "block";
    elf.style.display = "block";
    orc.style.display = "block";
    goblin.style.display = "block";
    castle.style.display = "none";
    lake.style.display = "none";
    fields.style.display = "none";
    mountain.style.display = "none"; 
    town.style.display = "none";
    for (let cell of cellArray) {
      cell.style.display = "none";
    }
  } else {
    troll.style.display = "none";
    elf.style.display = "none";
    orc.style.display = "none";
    goblin.style.display = "none";
    castle.style.display = "block";
    lake.style.display = "block";
    fields.style.display = "block";
    mountain.style.display = "block"; 
    town.style.display = "block";
    village2.style.display = "block";
    village3.style.display = "block";
    for (let cell of cellArray) {
      cell.style.display = "table-cell";
    }
  }
  
  name = location.name;
  map.style.backgroundColor = location.color;
  text.innerText = location.text; 
}