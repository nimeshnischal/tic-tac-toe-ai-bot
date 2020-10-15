import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import getWinner from '../lib/winner.js';
import getNextPreComputedStep from '../lib/pre_computed/getNextStep.js';
import BestMove from '../lib/minimax/bestMove.js';
import Board from './Board.jsx';
import PlayerInfo from './PlayerInfo.jsx';
import BotInfo from './BotInfo.jsx';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: {
                wins: 0,
                losses: 0,
                draws: 0
            },
            enableAI: false
        };
    }

    componentDidMount() {
        this.resetGame();
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        const { isBotsChance } = this.state;
        switch (event.code) {
            case 'ArrowRight': isBotsChance && this.playBotsChance();
                break;
            case 'ArrowLeft': this.undoLastMove();
                break;
            case 'KeyR':
            case 'KeyN': this.resetGame();
                break;
            default: break;
        }
    }

    resetGame = () => {
        const willOpponentStart = Math.random() >= 0.5;
        this.setState({
            board: new Array(9),
            isBotsChance: !willOpponentStart,
            timeTakenByBot: undefined,
            opponent: willOpponentStart ? 'X' : 'O',
            botPlayer: willOpponentStart ? 'O' : 'X',
            moves: [],
            winner: undefined,
            draw: false,
        });
    }

    toggleIsBotsChance = () => {
        this.setState({
            isBotsChance: !this.state.isBotsChance
        });
    }

    toggleEnableAI = (event) => {
        this.setState({
            enableAI: event.target.checked,
        });
    }

    checkForWinner = () => {
        const { board, opponent, stats } = this.state;
        const winner = getWinner(board);
        if (winner) {
            if (winner === opponent) stats.losses++;
            else stats.wins++;
            this.setState({
                winner: winner === opponent ? 'Player' : 'Bot',
                stats
            });
        } else if (!(new Set(board).has(undefined))) {
            stats.draws++;
            this.setState({
                draw: true,
                stats
            });
        }
    }

    undoLastMove = () => {
        const { board, moves } = this.state;
        if (moves.length === 0) return;
        board[moves[moves.length-1]] = undefined;
        moves.splice(moves.length-1);
        this.setState({
            board: [...board],
            timeTakenByBot: undefined,
            moves,
            winner: undefined,
            draw: false
        });
        this.toggleIsBotsChance();
    }

    playBotsChance = () => {
        const { board, enableAI, botPlayer, moves } = this.state;
        const startTime = new Date().getTime();
        let nextStep;
        if (enableAI) nextStep = new BestMove(botPlayer).getNextStep(board);
        else nextStep = getNextPreComputedStep(botPlayer, board);
        const endTime = new Date().getTime();
        board[nextStep] = botPlayer;
        this.setState({board: [...board], timeTakenByBot: endTime - startTime});
        moves.push(nextStep);
        this.checkForWinner();
        this.toggleIsBotsChance();
    }
    
    playAtPos = (i) => {
        const { board, isBotsChance, opponent, winner, draw, moves } = this.state;
        if (!isBotsChance && !winner && !draw && !board[i]) {
            board[i] = opponent;
            this.setState({board, timeTakenByBot: undefined });
            moves.push(i);
            this.checkForWinner();
            this.toggleIsBotsChance();
        }
    }

    render() {
        const { board, isBotsChance, opponent, botPlayer, winner, draw, timeTakenByBot, stats } = this.state;
        return (
            <div>
                <div className="game">
                    <div className="flex-grow-1">
                        <PlayerInfo
                            isBotsChance={isBotsChance}
                            symbol={opponent}
                            stats={stats}
                        />
                    </div>
                    <div className="game-board container">
                        <div className="centered verdict text-wrapper">
                            { winner ? `${winner} Wins!`: draw ? 'Draw!' : '' }
                        </div>
                        <div className={winner || draw ? 'blurred' : ''}>
                            <Board
                                board={board}
                                playAtPos={this.playAtPos}
                                />
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <BotInfo
                            isBotsChance={isBotsChance}
                            botPlayer={botPlayer}
                            stats={stats}
                            toggleEnableAI={this.toggleEnableAI}
                            timeTakenByBot={timeTakenByBot}
                            winner={winner}
                            draw={draw}
                            playBotsChance={this.playBotsChance}/>
                    </div>
                </div>
                <div className="center pd-40 pdb-0">
                    <button
                        title="Undo last chance"
                        className="icon-button magnify-4 mg-30 mgb-0"
                        onClick={this.undoLastMove}>
                        <i className='fa fa-undo fa-shadow' aria-hidden="true"></i>
                        <span className="note magnify-0-5 white">Undo</span>
                    </button>
                    <button
                        title="Restart game"
                        className="icon-button magnify-4 mg-30 mgb-0"
                        onClick={this.resetGame}>
                        <i className='fa fa-refresh fa-shadow' aria-hidden="true"></i>
                        <span className="note magnify-0-5 white">Restart</span>
                    </button>
                </div>
                <span className="shortcuts">
                    Shortcuts<br/>
                    <table>
                        <tbody>
                            <tr>
                                <td className="pdlr-15 center"><i className='fa fa-arrow-right' aria-hidden="true"/></td>
                                <td>Play bot's next chance</td>
                            </tr>
                            <tr>
                                <td className="pdlr-15 center"><i className='fa fa-arrow-left' aria-hidden="true"/></td>
                                <td>Undo previous step</td>
                            </tr>
                            <tr>
                                <td className="pdlr-15 center">R/N</td>
                                <td>Reset Game / New Game</td>
                            </tr>
                        </tbody>
                    </table>
                </span>
                <span className="note"> Note: By default the bot uses pre-computed steps. When AI is enabled, bot uses minimax search algorithm.
                    Note the difference in the speed of bot's decision in when AI is enabled or disabled, and when the board is empty or full.
                    Refer <a target="_blank" rel="noopener noreferrer" href="https://github.com/nimeshnischal/tic-tac-toe-ai-bot">github repo</a> for more details.</span>
            </div>
        );
    }
}

export default Game;