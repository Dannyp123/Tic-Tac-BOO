function startGame() {
  for (var i = 1; i <= 9; i++) {
    clearingBoard(i);
  }
  document.turn = "X";
  document.winner = null;
  messageSpace(`${document.turn} get's to start!`);
}

function nextTurn(square) {
  if (document.winner != null) {
    messageSpace(`${document.turn} already Won!!`);
  } else {
    if (square.innerText == "") {
      square.innerText = document.turn;
      switchTurn();
    } else {
      messageSpace("Can not choose an already used square.");
    }
  }
}

function switchTurn() {
  if (findingTheWinner(document.turn)) {
    messageSpace("WINNER WINNER CHICKEN DINNER");
    document.winner = document.turn;
  } else {
    if (document.turn == "X") {
      document.turn = "O";
    } else {
      document.turn = "X";
    }
    messageSpace(`It is ${document.turn} 's turn`);
  }
}

function messageSpace(message) {
  document.querySelector("#messageHere").innerText = message;
}

function findingTheWinner(move) {
  let solution = false;
  if (
    checkingRows(1, 2, 3, move) ||
    checkingRows(4, 5, 6, move) ||
    checkingRows(7, 8, 9, move) ||
    checkingRows(1, 4, 7, move) ||
    checkingRows(2, 5, 8, move) ||
    checkingRows(3, 6, 9, move) ||
    checkingRows(1, 5, 9, move) ||
    checkingRows(3, 5, 7, move)
  ) {
    solution = true;
  }
  return solution;
}

function checkingRows(a, b, c, move) {
  let solution = false;
  if (
    gettingActiveBlock(a) == move &&
    gettingActiveBlock(b) == move &&
    gettingActiveBlock(c) == move
  ) {
    solution = true;
  }
  return solution;
}

function gettingActiveBlock(number) {
  return document.querySelector("#square" + number).innerText;
}

function clearingBoard(number) {
  document.querySelector("#square" + number).innerText = "";
}
