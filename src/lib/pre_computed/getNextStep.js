function blockOpponent(opponent, board) {
    if (board[0] === opponent) {
        if (board[1] === opponent && board[2] === undefined) return 2;
        if (board[2] === opponent && board[1] === undefined) return 1;
        if (board[4] === opponent && board[8] === undefined) return 8;
        if (board[8] === opponent && board[4] === undefined) return 4;
        if (board[3] === opponent && board[6] === undefined) return 6;
        if (board[6] === opponent && board[3] === undefined) return 3;
    }
    if (board[1] === opponent) {
        if (board[2] === opponent && board[0] === undefined) return 0;
        if (board[4] === opponent && board[7] === undefined) return 7;
        if (board[7] === opponent && board[4] === undefined) return 4;
    }
    if (board[2] === opponent) {
        if (board[4] === opponent && board[6] === undefined) return 6;
        if (board[6] === opponent && board[4] === undefined) return 4;
        if (board[5] === opponent && board[8] === undefined) return 8;
        if (board[8] === opponent && board[5] === undefined) return 5;
    }
    if (board[3] === opponent) {
        if (board[6] === opponent && board[0] === undefined) return 0;
        if (board[4] === opponent && board[5] === undefined) return 5;
        if (board[5] === opponent && board[4] === undefined) return 4;
    }
    if (board[4] === opponent) {
        if (board[8] === opponent && board[0] === undefined) return 0;
        if (board[7] === opponent && board[1] === undefined) return 1;
        if (board[6] === opponent && board[2] === undefined) return 2;
        if (board[5] === opponent && board[3] === undefined) return 3;
    }
    if (board[5] === opponent) {
        if (board[8] === opponent && board[2] === undefined) return 2;
    }
    if (board[6] === opponent) {
        if (board[7] === opponent && board[8] === undefined) return 8;
        if (board[8] === opponent && board[7] === undefined) return 7;
    }
    if (board[7] === opponent) {
        if (board[8] === opponent && board[6] === undefined) return 6;
    }
}

const currBoardStateKeyToNextChances = {
// Computer started
    // Empty board, play any
    '000000000': [0, 1, 2, 3, 4, 5, 6, 7, 8],
    // Corner first -> Adjacent mid
    '120000000': [6],
    // Corner first -> Adjacent mid -> after blocker
    '120200100': [4, 8],
    '120100200': [4],
    // Corner first -> Non opposite corner
    '102000000': [8],
    // Corner first -> non adjacent mid
    '100002000': [6],
    // Corner first -> opposite corner
    '100000002': [2, 6],
    // Corner first -> opposite corner -> after blocker
    '100200102': [2],
    // Corner first -> center
    '100020000': [8, 7, 5],
    // Corner first -> center -> opp mid -> adjacent mid
    '120020010': [6],
    // Corner first -> center -> opp mid -> opp corner
    '100020012': [2, 3, 5, 6],
    // Mid first -> adjacent corner
    '210000000': [3, 6, 8],
    // Mid first -> adjacent corner -> corner below
    '212000100': [7],
    '210200100': [4, 7, 8],
            // after 8 & filler in above
            '210200121': [2],
    '210002100': [5, 7],
    '210000102': [5],
    // Mid first -> adjacent corner -> opp corner
    '210002001': [7],
    '210000021': [6],
    // Mid first -> adjacent corner -> opp corner -> between corner + fillers
    '210100221': [2],
    // Mid first -> adjacent corner -> adjacent mid -> non-center
        // top and left mid
    '212100000': [4],
    '210102000': [4],
    '210100002': [4],
    // Mid first -> Adjacent Mid
    '010200000': [4],
    // Mid first -> Adjacent mid -> after blocker
    '010210020': [0, 2],
    // Mid first -> opp corner
    '010000200': [0],
    // Mid first -> opp mid
    '010000020': [4, 6, 8],
    // Mid first -> opp mid -> center
    '210010020': [3, 5, 6, 7],
    // Mid first -> opp mid -> opp corner
        // bottom corners
    '010200120': [2],
    '010002120': [0, 2],
    '010000122': [0, 2],
    // Mid first -> center
    '010020000': [6, 8],
    // Mid first -> center -> filled (same as Corner first -> center -> non opp corner -> adjacent mid)
    // Center first -> corner
    '200010000': [8],
    // Center first -> corner -> opp corner -> adjacent mid
    '200012001': [2, 5],
    // Center first -> mid
    '020010000': [0, 2, 3, 5],
    // Center first -> mid -> blocker (Already covered above in multi)
// Opponent started
    // Corner start
    '200000000': [4],
    // Corner start -> opp corner
    '200010002': [1,3,5,7],
    // Corner start -> opp mid
    '200010020': [6, 8],
    // Mid start
    '020000000': [0, 2, 4, 6, 7, 8],
    // Mid start -> opp corner -> adjacent mid
    '020002100': [0, 8],
    '020200100': [8],
    // Mid start -> opp corner -> opp corner
    '020000102': [0],
    // Mid start -> opp corner -> opp corner -> blocker
    '120200102': [4, 5],
    // Mid start -> center -> adjacent mid
    '020210000': [0, 2, 6],
    // Mid start -> center -> opp corner
    '020010200': [2],
    // Mid start -> center -> opp mid
    '020010020': [3, 5],
    // Mid start -> center -> opp mid -> blocker
    '020211020': [2, 8],
    // Mid start -> adjacent corner -> adjacent mid below corner
    '120200000': [5, 7],
    // Mid start -> adjacent corner -> adjacent mid below corner -> opp corner to prev step
    '122200010': [8],
    // Mid start -> adjacent corner -> opp corner below prev corner
    '120000200': [4, 7],
    // Mid start -> adjacent corner -> adjacent corner
    '122000000': [6],
    // Mid start -> adjacent corner -> adjacent corner -> after blocker
    '122200100': [8],
    // Mid start -> adjacent corner -> adjacent mid opp to prev corner
    '120002000': [3, 6],
    // Mid start -> adjacent corner -> adjacent mid opp to prev corner -> adjacent mid -> after blocker
    '120102200': [4],
    // Mid start -> adjacent corner -> opp corner opp prev corner
    '120000002': [4],
    // Center start
    '000020000': [0, 2, 6, 8],
    // Center start -> opp corner
    '100020002': [6, 2]
};

function getCalculatedNextMove(player, board) {
    let i = 0, j = 0;
    let currBoardKey = getCurrBoardKey(player, board), chances = [], rotatedBoard = [...board];
    while (i < 4) {
        let laterallyInvertedBoard = [...rotatedBoard];
        j = 0;
        while (j < 2) {
            if (currBoardStateKeyToNextChances[currBoardKey]) {
                chances = currBoardStateKeyToNextChances[currBoardKey];
                break;
            }
            if (j !== 1) {
                laterallyInvertBoard(laterallyInvertedBoard);
                currBoardKey = getCurrBoardKey(player, laterallyInvertedBoard);
            }
            j++;
        }
        if (chances.length > 0) break;
        if (i !== 3) {
            rotateBoardClockwise(rotatedBoard);
            currBoardKey = getCurrBoardKey(player, rotatedBoard);
        }
        i++;
    }
    if (chances.length === 0) return;
    let chance = chances[Math.floor(Math.random() * chances.length)];
    if (j > 0) chance = getLaterallyInvertedSquarePos(chance);
    while (i > 0) {
        chance = getAntiClockwiseRotatedSquarePos(chance);
        i--;
    }
    return chance;
}

function rotateBoardClockwise(board) {
    let i, j = 0, newLocation, temp1 = 0, temp2;
    while (j < 2) {
        i = 0;
        temp2 = board[temp1];
        while (i < 4) {
            newLocation = (((temp1 + 1) * 3) - Math.ceil((temp1 + 1)/3)) % 9;
            temp1 = board[newLocation];
            board[newLocation] = temp2;
            temp2 = temp1;
            temp1 = newLocation;
            i++;
        }
        temp1++;
        j++;
    }
}

function laterallyInvertBoard(board) {
    let i = 0, temp;
    while (i < 9) {
        temp = board[i];
        board[i] = board[i+2];
        board[i+2] = temp;
        i+=3;
    }
}

function getAntiClockwiseRotatedSquarePos(squarePos) {
    if (squarePos === 4) return squarePos;
    return (2 - (squarePos % 3)) * 3 + Math.floor(squarePos/3);
}

function getLaterallyInvertedSquarePos(squarePos) {
    switch(squarePos) {
        case 0: return 2;
        case 2: return 0;
        case 3: return 5;
        case 5: return 3;
        case 6: return 8;
        case 8: return 6;
        default: return squarePos;
    }
}

function getCurrBoardKey(player, board) {
    let currBoardKey = '';
    for (let i = 0; i < board.length; i++)
        currBoardKey += board[i] === undefined ? '0' : board[i] === player ? '1' : '2'
    return currBoardKey;
}


function getNextMoveInSequence(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === undefined) return i;
    }
}

export default function getNextMove(player, board) {
    const opponent = player === 'X' ? 'O' : 'X';
    let next_move = blockOpponent(player, board);  // Get player's win condition
    if (next_move !== undefined) return next_move;
    next_move = blockOpponent(opponent, board);
    if (next_move !== undefined) return next_move;
    next_move = getCalculatedNextMove(player, board)
    if (next_move !== undefined) return next_move;
    return getNextMoveInSequence(board);
}