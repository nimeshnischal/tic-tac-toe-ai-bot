import getWinner from '../winner.js';

// Returns player to move in current state of the board
function player(board) {
    let xCount = 0, oCount = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'X') xCount++;
        else if (board[i] === 'O') oCount++;
    }
    return xCount > oCount ? 'O' : 'X';
}

// returns legal moves in current state of the board
function actions(board) {
    let legalMoves = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === undefined) legalMoves.push(i);
    }
    return legalMoves;
}

// returns state of the board when chance is played on place
function result(board, place, player) {
    const updatedBoard = [...board];
    updatedBoard[place] = player;
    return updatedBoard;
}

// returns true if current state of board has a winner
function terminal(board) {
    return getWinner(board) !== undefined;
}

/**
 * Returns:
 *      1   -> if player wins
 *      0   -> if game is draw
 *      -1  -> if opponent wins
 */
function utility(board, player) {
    const winner = getWinner(board);
    return winner === undefined ? 0 : winner === player ? 1 : -1;
}

function getMaxValueAndPositions(board, player, opponent) {
    if (terminal(board)) {
        return [utility(board, player), []];
    }
    let maxValue = -2, maxValuePositions = [];
    for (let action of actions(board)) {
        const minValueAndPositions = getMinValueAndPositions(result(board, action, player), player, opponent);
        if (minValueAndPositions[0] > maxValue) {
            maxValue = minValueAndPositions[0];
            maxValuePositions = [action];
        } else if (minValueAndPositions[0] === maxValue) {
            maxValuePositions.push(action);
        }
    }
    return [maxValue, maxValuePositions];
}

function getMinValueAndPositions(board, player, opponent) {
    if (terminal(board)){
        return [utility(board, player), []];
    }
    let minValue = 2, minValuePositions = [];
    for (let action of actions(board)) {
        const maxValueAndPositions = getMaxValueAndPositions(result(board, action, opponent), player, opponent);
        if (maxValueAndPositions[0] < minValue) {
            minValue = maxValueAndPositions[0];
            minValuePositions = [action];
        } else if (maxValueAndPositions[0] === minValue) {
            minValuePositions.push(action);
        }
    }
    return [minValue, minValuePositions];
}

export default function getNextStep(player, board) {
    const opponent = player === 'X' ? 'O' : 'X';
    const maxValueAndPositions = getMaxValueAndPositions(board, player, opponent);
    const positions = maxValueAndPositions[1];
    return positions[Math.floor(Math.random() * positions.length)];
}