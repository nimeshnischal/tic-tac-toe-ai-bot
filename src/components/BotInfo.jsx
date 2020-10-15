import React from 'react';
import Switch from './Switch.jsx';

export default function BotInfo(props) {
    return (
        <div>
            <div className={props.isBotsChance ? 'green' : 'red'}>
                <b>Bot</b><br/>
                <div className="player-symbol">{props.botPlayer}</div>
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
                        <td>{props.stats.wins}</td>
                        <td>{props.stats.losses}</td>
                        <td>{props.stats.draws}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex-row">
                <div className="flex-grow-1">
                    <span className="vertical-middle">AI</span>
                    <Switch
                        title="Use minimax search algorithm"
                        onChange={props.toggleEnableAI}/>
                </div>
                <span className="flex-grow-1 left pdtb-20">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span className="mgl-10 inline-block" style={{width: '100px'}}>
                        { props.timeTakenByBot !== undefined ? `${props.timeTakenByBot}` : ''} ms
                    </span>
                </span>
            </div>
            {
                props.thinking ?
                <div className="icon-button magnify-2 mgt-30">
                    <i className={'fa fa-spinner fa-spin fa-shadow icon green'} aria-hidden="true"></i>
                        <span className="note white">Bot is thinking</span>
                </div>
                : ''
            }
        </div>
    );
}