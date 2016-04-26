/* Initialize game arrays */
var arr = [0,0,0,0,0,0,0,0,0];
var imgArr = ["topLeft", "topMiddle", "topRight", "middleLeft", "middleMiddle", "middleRight", "bottomLeft", "bottomMiddle", "bottomRight"];
var playerChoice = 1;
var computerChoice = 2;
var randomLocation = 0;
/* 1=true 2=false 3=full, reset */
var match = 2;
var arrResetCounter = 0;
var imgID = 0;
var counter = 0;

/* Image urls */
var xURL = "http://www.lambdasolutions.net/wp-content/uploads/2015/12/672366-x-128.png";
var oURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/50px-Letter_o.svg.png";
var whiteURL = "http://weknowyourdreamz.com/images/white/white-04.jpg";
var urlArr = [whiteURL, xURL, oURL];

/* Changes arr to reflect plays from player & updates tile picture... then calls next function */
var arrBuild = function (imgID) {
  if (arr[imgID] === 0) {
    arr[imgID] = playerChoice;
    document.getElementById(imgArr[imgID]).src = urlArr[playerChoice];
    checkWin();
    if (match === 2) {
      computerPlay()
    } else {
      winner();
    }
  }
};

/* Plays the computer turn & updates picture, the computer really sucks :P */
var computerPlay = function() {
  randomLocation = Math.floor((Math.random() * 9)) -1;
  if (arr[randomLocation] === 0) {
    arr[randomLocation] = computerChoice; document.getElementById(imgArr[randomLocation]).src = urlArr[computerChoice];
    checkWin();
    if (match === 1) {
      winner();
    }
  } else {
    computerPlay();
  }
};

/* Checks if there is a winner, if so it resets arr and sets match=true */
var checkWin = function() {
  if (arr[0] !== 0){
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    }
  }
  if (arr[3] !== 0){
    if (arr[3] === arr[4] && arr[4] === arr[5]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    }
  }
  if (arr[6] !== 0){
    if (arr[6] === arr[7] && arr[7] === arr[8]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    }
  }
  if (arr[0] !== 0){
    if (arr[0] === arr[3] && arr[3] === arr[6]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    }
  }
  if (arr[1] !== 0){
    if (arr[1] === arr[4] && arr[4] === arr[7]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    } 
  }
  if (arr[2] !== 0){
    if (arr[2] === arr[5] && arr[5] === arr[8]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    }
  }
  if (arr[0] !== 0){
    if (arr[0] === arr[4] && arr[4] === arr[8]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    }
  }
  if (arr[2] !== 0){
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
      match = 1;
      arr = [0,0,0,0,0,0,0,0,0];
    }
  }
  for (var j in arr) {
    if(arr[j] !== 0) {
      counter++;
    }
  }
  if (counter === 9) {
    match = 3;
    arr = [0,0,0,0,0,0,0,0,0];
    counter = 0;
  } else {
    counter = 0;
  }
};

/* Resets the images and the game array */
var reset = function() {
  for (var i in imgArr) {
      document.getElementById(imgArr[i]).src = whiteURL;
      arr[arrResetCounter] = 0;
      arrResetCounter++;
    }
}

/* If winner, resets all tiles to white and turns match=false ready for next round */
var winner = function() {  
  if (match === 1) {
    window.alert("We have a winner! Ding ding ding!");
    reset();
    arrResetCounter = 0;
    match = 2;
  } else if (match === 3) {
    window.alert("You tied with the computer, or maybe you both lost...");
    reset();
    arrResetCounter = 0;
    match = 2;
  }
}

/* each area button plays turn */
$("#topLeftArea").on("click", function() {
  imgID = 0;
  arrBuild(0);
});

$("#topMiddleArea").on("click", function() {
  imgID = 1;
  arrBuild(1);
});

$("#topRightArea").on("click", function() {
  imgID = 2;
  arrBuild(2);
});

$("#middleLeftArea").on("click", function() {
  imgID = 3;
  arrBuild(3);
});

$("#middleMiddleArea").on("click", function() {
  imgID = 4;
  arrBuild(4);
});

$("#middleRightArea").on("click", function() {
  imgID = 5;
  arrBuild(5);
});

$("#bottomLeftArea").on("click", function() {
  imgID = 6;
  arrBuild(6);
});

$("#bottomMiddleArea").on("click", function() {
  imgID = 7;
  arrBuild(7);
});

$("#bottomRightArea").on("click", function() {
  imgID = 8;
  arrBuild(8);
});

/* switches player gamepiece */
$("#switch").on("click", function() {
  if (playerChoice === 1) {
    playerChoice = 2;
    computerChoice = 1;
    $("#switch").html("Switch to X")
  }
  else if (playerChoice === 2) {
    playerChoice = 1;
    computerChoice = 2;
    $("#switch").html("Switch to O")
  }
});

/* this button calls the reset function */
$("#reset").on("click", function() {
  reset();
});