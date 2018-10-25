// let name = document.querySelector("#name").value;

function startGame() {
  document.turn = "Pumpkin";
  document.winner = null;
  messageSpace(`Person who choose ${document.turn} get's to start!`);
}

function classFor(turn) {
  if (turn === "Pumpkin") {
    return "pumpkin";
  } else {
    return "skull";
  }
}

function nextTurn(square) {
  if (document.winner != null) {
    messageSpace(`Person who choose ${document.turn} already Won!!`);
  } else {
    if (
      !(
        square.classList.contains("pumpkin") ||
        square.classList.contains("skull")
      )
    ) {
      square.classList.add(classFor(document.turn));
      switchTurn();
    } else {
      messageSpace("Can not choose an already used square.");
    }
  }
}

function switchTurn() {
  if (findingTheWinner(document.turn)) {
    messageSpace(
      `WINNER WINNER CANDY FOR DINNER FOR WHO CHOOE ${document.turn}`
    );
    document.winner = document.turn;
  } else {
    if (document.turn == "Pumpkin") {
      document.turn = "Skull";
    } else {
      document.turn = "Pumpkin";
    }
    messageSpace(`It is who choose ${document.turn} turn`);
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
  let movesClass = classFor(move);
  if (
    gettingActiveBlock(a).classList.contains(movesClass) &&
    gettingActiveBlock(b).classList.contains(movesClass) &&
    gettingActiveBlock(c).classList.contains(movesClass)
  ) {
    solution = true;
  }
  return solution;
}

function gettingActiveBlock(number) {
  return document.querySelectorAll(`.square`)[number - 1];
}

function clearingBoard() {
  let button = document.querySelector("#button");
  button.addEventListener("click", function() {
    document.location.reload();
  });
}
clearingBoard();

function addingImages() {
  var image = document.querySelector(".square");
}
