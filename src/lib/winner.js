const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export default function getWinnerInBoard(squares) {
    let winner;
    for (let winningPosition of winningPositions) {
        const [i, j, k] = winningPosition;
        if (squares[i] && squares[i] === squares[j] && squares[i] === squares[k]) {
            winner = squares[i];
            break;
        }
    }
    return winner;
}