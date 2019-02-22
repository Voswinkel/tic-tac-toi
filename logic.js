let players = ["x", "o"];
let activePlayer = 0;
let wins = [0,1];

function startGame() {
//создаем игровое поле
board = [
["", "", ""],
["", "", ""],
["", "", ""]
];
//устанавливаем активного игрока
activePlayer = 0;
//отображаем игровое поле
renderBoard(board);
}

function win(board) {
//для диагоналей
if (board[0][0] !== ""){
if (board[0][0] === board[1][1] && board[1][1] === board[2][2] ) {
//отображаем победителя

showWinner(wins[activePlayer])
}}
if (board[0][2] !== ""){
if (board[0][2] === board[1][1] && board[1][1] === board[2][0] ) {
//отображаем победителя
showWinner(wins[activePlayer])

}}

//для горизонталей и вертикалей через цикл
for (i = 0; i < board.length; i++) {
if (board[i][0] !== ""){
if (board[i][0] === board[i][1] && board[i][1] === board[i][2]){
//отображаем победителя
showWinner(wins[activePlayer])
}
};
if (board[0][i] !== ""){
if (board[0][i] === board[1][i] && board[1][i] === board[2][i]){
//отображаем победителя
showWinner(wins[activePlayer])
};
}
}
}

function click(row, column) {
//ход
board[row][column] = players[activePlayer];
//отображаем игровое поле
renderBoard(board);
//проверяем выигрышная ли комбинация
win(board)
//меняем игрока
if (activePlayer == 0) {
activePlayer = 1
} else {
activePlayer = 0;
}
}

startGame();
click(row, column);
