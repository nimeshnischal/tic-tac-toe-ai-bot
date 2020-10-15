import React from 'react';

export default function PlayerInfo(props) {
    return (
        <div>
            <div className={props.isBotsChance ? 'red' : 'green'}>
                <b>Player</b><br/>
                <div className="player-symbol">{props.symbol}</div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <td className="pdlr-15">Wins</td>
                        <td className="pdlr-15">Losses</td>
                        <td className="pdlr-15">Draws</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.stats.losses}</td>
                        <td>{props.stats.wins}</td>
                        <td>{props.stats.draws}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}