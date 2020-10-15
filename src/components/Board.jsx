import React from 'react';
import Square from './Square.jsx';

class Board extends React.Component {

    renderSquare(i) {
        const { board = [], playAtPos } = this.props;
        return (
            <Square
                key={'square-'+i}
                value={board[i]}
                onClick={() => playAtPos(i)}/>
        );
    }

    renderBoardRow(i) {
        const squareComponents = [];
        for (let j = 0; j < 3; j++) {
            squareComponents.push(this.renderSquare(i*3+j));
        }
        return (<div key={'board-'+i}className="board-row">{squareComponents}</div>);
    }

    render() {
        const boardRowComponents = [];
        for (let i = 0; i < 3; i++) {
            boardRowComponents.push(this.renderBoardRow(i));
        }
        return (
            <div className="inline-block">
                <div className="board">
                    {boardRowComponents}
                </div>
            </div>
        );
    }
}

export default Board;