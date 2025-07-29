let boxes = document.querySelectorAll('.Box');
let resetButton = document.getElementById('reset');
let newGameButton = document.querySelector('#New-Game'); // Use correct ID from your HTML
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // true for O's turn, false for X's turn

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerText !== "") return;
    box.innerText = turnO ? 'O' : 'X';
    box.disabled = true;
    turnO = !turnO;
    checkWin();
  });
});

const checkWin = () => {
  for (let pattern of winPatterns) {
    let a = boxes[pattern[0]].innerText;
    let b = boxes[pattern[1]].innerText;
    let c = boxes[pattern[2]].innerText;

    if (a !== "" && a === b && b === c) {
      showWinner(a);
      return;
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableAllBoxes();
};

const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
  turnO = true;
};

resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);
