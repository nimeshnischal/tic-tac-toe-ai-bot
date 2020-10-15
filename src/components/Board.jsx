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

    render() {
        const squareComponents = [];
        for (let i = 0; i < 9; i++) {
            squareComponents.push(this.renderSquare(i));
            if (i%3 === 2)
                squareComponents.push(<br key={'br-'+i}/>);
        }
        return (
            <div className="inline-block">
                <div className="board">
                    {squareComponents}
                </div>
            </div>
        );
    }
}

export default Board;