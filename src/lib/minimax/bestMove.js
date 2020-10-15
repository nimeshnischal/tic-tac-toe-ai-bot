import getWinner from '../winner.js';

export default class BestMove {
    constructor(player) {
        this.player = player;
        this.opponent = player === 'X' ? 'O' : 'X';
    }

    // Returns player to move in current state of the board
    playerChance(board) {
        let xCount = 0, oCount = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === 'X') xCount++;
            else if (board[i] === 'O') oCount++;
        }
        return xCount > oCount ? 'O' : 'X';
    }

    // returns legal moves in current state of the board
    actions(board) {
        let legalMoves = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === undefined) legalMoves.push(i);
        }
        return legalMoves;
    }

    // returns state of the board when chance is played on place
    result(board, place, player) {
        const updatedBoard = [...board];
        updatedBoard[place] = player;
        return updatedBoard;
    }

    // returns true if current state of board has a winner
    terminal(board) {
        return getWinner(board) !== undefined || !board.includes(undefined);
    }

    /**
     * Returns:
     *      1   -> if player wins
     *      0   -> if game is draw
     *      -1  -> if opponent wins
     */
    utility(board) {
        const winner = getWinner(board);
        return winner === undefined ? 0 : winner === this.player ? 1 : -1;
    }

    getMaxValue(board) {
        if (this.terminal(board)) {
            return this.utility(board);
        }
        let maxValue = -2;
            for (let action of this.actions(board)) {
                const minValue = this.getMinValue(this.result(board, action, this.player));
                if (minValue !== 2 && minValue > maxValue) {
                    maxValue = minValue;
                }
            }
        return maxValue;
    }

    getMinValue(board) {
        if (this.terminal(board)){
            return this.utility(board);
        }
        let minValue = 2;
            for (let action of this.actions(board)) {
                const maxValue = this.getMaxValue(this.result(board, action, this.opponent));
                if (maxValue !== -2 && maxValue < minValue) {
                    minValue = maxValue;
                }
            }
        return minValue;
    }

    getNextStep(board) {
        let maxValuePositions = [], maxValue = -2;
        const actionsAvailable = this.actions(board);
        for (let action of actionsAvailable) {
            const minValue = this.getMinValue(this.result(board, action, this.player));
            if (minValue !== 2 && minValue > maxValue) {
                maxValuePositions = [action];
                maxValue = minValue;
            } else if (maxValue === minValue) {
                maxValuePositions.push(action);
            }
        }
        return maxValuePositions[Math.floor(Math.random() * maxValuePositions.length)];
    }

}