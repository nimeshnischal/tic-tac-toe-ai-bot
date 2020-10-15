const winningPositionCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export function getWinnerInBoard(squares) {
    let winner;
    for (let winningPositions of winningPositionCombos) {
        const [i, j, k] = winningPositions;
        if (squares[i] && squares[i] === squares[j] && squares[i] === squares[k]) {
            winner = squares[i];
            break;
        }
    }
    return winner;
}

export function getWinningPositionCombosInBoard(squares) {
    for (let winningPositions of winningPositionCombos) {
        const [i, j, k] = winningPositions;
        if (squares[i] && squares[i] === squares[j] && squares[i] === squares[k]) {
            return winningPositions;
        }
    }
}