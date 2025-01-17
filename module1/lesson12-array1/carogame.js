const carogame = document.getElementById("carogame");

const BOARD_SIZE = +prompt("Nhập kích thước của game: ", 5);
let board = [];
let data = "";
// Khởi tạo mảng 5x5
for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = new Array(BOARD_SIZE).fill(0);
}

// vẽ bảng
function drawBoard() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        data += "<br>";
        for (let j = 0; j < BOARD_SIZE; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;";
        }
    }

    carogame.innerHTML = data;
}

drawBoard();

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    drawBoard();
}
