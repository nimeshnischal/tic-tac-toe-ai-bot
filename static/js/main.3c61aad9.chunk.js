(this.webpackJsonptic_tac_toe=this.webpackJsonptic_tac_toe||[]).push([[0],{28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),o=(a(33),a(7)),l=a(11),c=a(12),u=a(22),d=a(20),m=(a(34),a(23)),f=a(8),h=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function v(e){var t,a,n=Object(f.a)(h);try{for(n.s();!(a=n.n()).done;){var r=a.value,i=Object(m.a)(r,3),s=i[0],o=i[1],l=i[2];if(e[s]&&e[s]===e[o]&&e[s]===e[l]){t=e[s];break}}}catch(c){n.e(c)}finally{n.f()}return t}function b(e,t){if(t[0]===e){if(t[1]===e&&void 0===t[2])return 2;if(t[2]===e&&void 0===t[1])return 1;if(t[4]===e&&void 0===t[8])return 8;if(t[8]===e&&void 0===t[4])return 4;if(t[3]===e&&void 0===t[6])return 6;if(t[6]===e&&void 0===t[3])return 3}if(t[1]===e){if(t[2]===e&&void 0===t[0])return 0;if(t[4]===e&&void 0===t[7])return 7;if(t[7]===e&&void 0===t[4])return 4}if(t[2]===e){if(t[4]===e&&void 0===t[6])return 6;if(t[6]===e&&void 0===t[4])return 4;if(t[5]===e&&void 0===t[8])return 8;if(t[8]===e&&void 0===t[5])return 5}if(t[3]===e){if(t[6]===e&&void 0===t[0])return 0;if(t[4]===e&&void 0===t[5])return 5;if(t[5]===e&&void 0===t[4])return 4}if(t[4]===e){if(t[8]===e&&void 0===t[0])return 0;if(t[7]===e&&void 0===t[1])return 1;if(t[6]===e&&void 0===t[2])return 2;if(t[5]===e&&void 0===t[3])return 3}if(t[5]===e&&t[8]===e&&void 0===t[2])return 2;if(t[6]===e){if(t[7]===e&&void 0===t[8])return 8;if(t[8]===e&&void 0===t[7])return 7}return t[7]===e&&t[8]===e&&void 0===t[6]?6:void 0}var p={"000000000":[0,1,2,3,4,5,6,7,8],12e7:[6],120200100:[4,8],102e6:[8],100002e3:[6],100000002:[2,6],100200102:[2],10002e4:[8,7,5],120020010:[6],100020012:[2,3,5,6],21e7:[3,6,8],212000100:[7],210200100:[4,7,8],210200121:[2],210002100:[5,7],210000102:[5],210002001:[7],210000021:[6],210100221:[2],2121e5:[4],210102e3:[4],210100002:[4],"010200000":[4],"010210020":[0,2],"010000200":[0],"010000020":[4,6,8],210010020:[3,5,6,7],"010200120":[2],"010002120":[0,2],"010000122":[0,2],"010020000":[6,8],20001e4:[8],200012001:[2,5],"020010000":[0,2,3,5],2e8:[4],200010002:[1,3,5,7],200010020:[6,8],"020000000":[0,4,6,7],"020002100":[0,8],"020200100":[8],"020000102":[0],120200102:[4,5],"020210000":[0,2,6],"020010200":[2],"020010020":[3,5],"020211020":[2,8],1202e5:[5,8],122200010:[8],120000200:[4,7],122e6:[6],122200100:[8],120002e3:[3,6],120102200:[4],120000002:[4],"000020000":[0,2,6,8],100020002:[6,2]};function y(e){for(var t,a,n,r=0,i=0;r<2;){for(t=0,n=e[i];t<4;)i=e[a=(3*(i+1)-Math.ceil((i+1)/3))%9],e[a]=n,n=i,i=a,t++;i++,r++}}function E(e){for(var t,a=0;a<9;)t=e[a],e[a]=e[a+2],e[a+2]=t,a+=3}function g(e){return 4===e?e:3*(2-e%3)+Math.floor(e/3)}function w(e,t){for(var a="",n=0;n<t.length;n++)a+=void 0===t[n]?"0":t[n]===e?"1":"2";return a}function k(e,t){var a="X"===e?"O":"X",n=b(e,t);return void 0!==n||void 0!==(n=b(a,t))||void 0!==(n=function(e,t){for(var a=0,n=0,r=w(e,t),i=[],s=Object(o.a)(t);a<4;){var l=Object(o.a)(s);for(n=0;n<2;){if(p[r]){i=p[r];break}1!==n&&(E(l),r=w(e,l)),n++}if(i.length>0)break;3!==a&&(y(s),r=w(e,s)),a++}if(0!==i.length){var c=i[Math.floor(Math.random()*i.length)];for(n>0&&(c=function(e){switch(e){case 0:return 2;case 2:return 0;case 3:return 5;case 5:return 3;case 6:return 8;case 8:return 6;default:return e}}(c));a>0;)c=g(c),a--;return c}}(e,t))?n:function(e){for(var t=0;t<e.length;t++)if(void 0===e[t])return t}(t)}var N=function(){function e(t){Object(l.a)(this,e),this.player=t,this.opponent="X"===t?"O":"X"}return Object(c.a)(e,[{key:"playerChance",value:function(e){for(var t=0,a=0,n=0;n<e.length;n++)"X"===e[n]?t++:"O"===e[n]&&a++;return t>a?"O":"X"}},{key:"actions",value:function(e){for(var t=[],a=0;a<e.length;a++)void 0===e[a]&&t.push(a);return t}},{key:"result",value:function(e,t,a){var n=Object(o.a)(e);return n[t]=a,n}},{key:"terminal",value:function(e){return void 0!==v(e)||!e.includes(void 0)}},{key:"utility",value:function(e){var t=v(e);return void 0===t?0:t===this.player?1:-1}},{key:"getMaxValue",value:function(e){if(this.terminal(e))return this.utility(e);var t,a=-2,n=Object(f.a)(this.actions(e));try{for(n.s();!(t=n.n()).done;){var r=t.value,i=this.getMinValue(this.result(e,r,this.player));if(2!==i&&i>a&&(a=i),1===a)break}}catch(s){n.e(s)}finally{n.f()}return a}},{key:"getMinValue",value:function(e){if(this.terminal(e))return this.utility(e);var t,a=2,n=Object(f.a)(this.actions(e));try{for(n.s();!(t=n.n()).done;){var r=t.value,i=this.getMaxValue(this.result(e,r,this.opponent));if(-2!==i&&i<a&&(a=i),-1===a)break}}catch(s){n.e(s)}finally{n.f()}return a}},{key:"getNextStep",value:function(e){var t,a=[],n=-2,r=this.actions(e),i=Object(f.a)(r);try{for(i.s();!(t=i.n()).done;){var s=t.value,o=this.getMinValue(this.result(e,s,this.player));2!==o&&o>n?(a=[s],n=o):n===o&&a.push(s)}}catch(l){i.e(l)}finally{i.f()}return a[Math.floor(Math.random()*a.length)]}}]),e}();function B(e){return r.a.createElement("button",{className:"square ".concat(e.isWinningPosition?"square-winner":""),onClick:e.onClick},e.value)}var C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this.props,a=t.board,n=void 0===a?[]:a,i=t.playAtPos,s=t.winningPositions;return r.a.createElement(B,{key:"square-"+e,value:n[e],isWinningPosition:s.includes(e),onClick:function(){return i(e)}})}},{key:"renderBoardRow",value:function(e){for(var t=[],a=0;a<3;a++)t.push(this.renderSquare(3*e+a));return r.a.createElement("div",{key:"board-"+e,className:"board-row"},t)}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++)e.push(this.renderBoardRow(t));return r.a.createElement("div",{className:"inline-block"},r.a.createElement("div",{className:"fit-content"},e))}}]),a}(r.a.Component);function O(e){return r.a.createElement("div",null,r.a.createElement("div",{className:e.isBotsChance?"red":"green"},r.a.createElement("b",null,"Player"),r.a.createElement("br",null),r.a.createElement("div",{className:"player-symbol"},e.symbol)),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"pdlr-15"},"Wins"),r.a.createElement("td",{className:"pdlr-15"},"Losses"),r.a.createElement("td",{className:"pdlr-15"},"Draws"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.stats.losses),r.a.createElement("td",null,e.stats.wins),r.a.createElement("td",null,e.stats.draws)))))}var j=a(26),P=a(6),x=a(56),A=Object(P.a)((function(e){return{root:{width:60,height:40,padding:2,margin:e.spacing(2)},switchBase:{padding:3,"&$checked":{transform:"translateX(20px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#3be8e0de",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"2px solid #fff"}},thumb:{width:34,height:34},track:{borderRadius:30,backgroundColor:"rgb(184, 184, 184)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(j.a)(e,["classes"]);return r.a.createElement(x.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))}));function M(e){return r.a.createElement("div",null,r.a.createElement("div",{className:e.isBotsChance?"green":"red"},r.a.createElement("b",null,"Bot"),r.a.createElement("br",null),r.a.createElement("div",{className:"player-symbol"},e.botPlayer)),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"pdlr-15"},"Wins"),r.a.createElement("td",{className:"pdlr-15"},"Losses"),r.a.createElement("td",{className:"pdlr-15"},"Draws"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.stats.wins),r.a.createElement("td",null,e.stats.losses),r.a.createElement("td",null,e.stats.draws)))),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-grow-1"},r.a.createElement("span",{className:"vertical-middle"},"AI"),r.a.createElement(A,{title:"Use minimax search algorithm",onChange:e.toggleEnableAI})),r.a.createElement("span",{className:"flex-grow-1 left pdtb-20"},r.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"}),r.a.createElement("span",{className:"mgl-10 inline-block",style:{width:"100px"}},void 0!==e.timeTakenByBot?"".concat(e.timeTakenByBot):""," ms"))),r.a.createElement("button",{title:"Play bot's chance",className:"icon-button magnify-4 mgt-50"},r.a.createElement("i",{className:"fa fa-play fa-shadow icon ".concat(!e.isBotsChance||e.winner||e.draw?"grey":"green"),onClick:e.playBotsChance,"aria-hidden":"true"}),r.a.createElement("span",{className:"note magnify-0-5 white"},"Play bot")))}var I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleKeyDown=function(e){var t=n.state.isBotsChance;switch(e.code){case"ArrowRight":t&&n.playBotsChance();break;case"ArrowLeft":n.undoLastMove();break;case"KeyR":case"KeyN":n.resetGame()}},n.resetGame=function(){var e=Math.random()>=.5;n.setState({board:new Array(9),isBotsChance:!e,timeTakenByBot:void 0,opponent:e?"X":"O",botPlayer:e?"O":"X",moves:[],winner:void 0,draw:!1,winningPositions:[]})},n.toggleIsBotsChance=function(){n.setState({isBotsChance:!n.state.isBotsChance})},n.toggleEnableAI=function(e){n.setState({enableAI:e.target.checked})},n.checkForWinner=function(){var e=n.state,t=e.board,a=e.opponent,r=e.stats,i=v(t);if(i){var s=function(e){var t,a=Object(f.a)(h);try{for(a.s();!(t=a.n()).done;){var n=t.value,r=Object(m.a)(n,3),i=r[0],s=r[1],o=r[2];if(e[i]&&e[i]===e[s]&&e[i]===e[o])return n}}catch(l){a.e(l)}finally{a.f()}}(t);i===a?r.losses++:r.wins++,n.setState({winner:i===a?"Player":"Bot",stats:r,winningPositions:s})}else new Set(t).has(void 0)||(r.draws++,n.setState({draw:!0,stats:r}))},n.undoLastMove=function(){var e=n.state,t=e.board,a=e.moves;0!==a.length&&(t[a[a.length-1]]=void 0,a.splice(a.length-1),n.setState({board:Object(o.a)(t),timeTakenByBot:void 0,moves:a,winner:void 0,draw:!1,winningPositions:[]}),n.toggleIsBotsChance())},n.playBotsChance=function(){var e=n.state,t=e.board,a=e.enableAI,r=e.botPlayer,i=e.moves;if(e.isBotsChance){var s,l=(new Date).getTime();s=a?new N(r).getNextStep(t):k(r,t);var c=(new Date).getTime();t[s]=r,n.setState({board:Object(o.a)(t),timeTakenByBot:c-l}),i.push(s),n.checkForWinner(),n.toggleIsBotsChance()}},n.playAtPos=function(e){var t=n.state,a=t.board,r=t.isBotsChance,i=t.opponent,s=t.winner,o=t.draw,l=t.moves;r||s||o||a[e]||(a[e]=i,n.setState({board:a,timeTakenByBot:void 0}),l.push(e),n.checkForWinner(),n.toggleIsBotsChance())},n.state={stats:{wins:0,losses:0,draws:0},enableAI:!1,winningPositions:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.resetGame(),document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.state,t=e.board,a=e.isBotsChance,n=e.opponent,i=e.botPlayer,s=e.winner,o=e.draw,l=e.timeTakenByBot,c=e.stats,u=e.winningPositions;return r.a.createElement("div",null,r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"flex-grow-1"},r.a.createElement(O,{isBotsChance:a,symbol:n,stats:c})),r.a.createElement("div",{className:"game-board container"},r.a.createElement("div",{className:"centered verdict text-wrapper"},s?"".concat(s," Wins!"):o?"Draw!":""),r.a.createElement("div",{className:s||o?"blurred":""},r.a.createElement(C,{board:t,playAtPos:this.playAtPos,winningPositions:u}))),r.a.createElement("div",{className:"flex-grow-1"},r.a.createElement(M,{isBotsChance:a,botPlayer:i,stats:c,toggleEnableAI:this.toggleEnableAI,timeTakenByBot:l,winner:s,draw:o,playBotsChance:this.playBotsChance}))),r.a.createElement("div",{className:"center pd-40 pdb-0"},r.a.createElement("button",{title:"Undo last chance",className:"icon-button magnify-4 mg-30 mgb-0"},r.a.createElement("i",{className:"fa fa-undo fa-shadow icon","aria-hidden":"true",onClick:this.undoLastMove}),r.a.createElement("span",{className:"note magnify-0-5 white"},"Undo")),r.a.createElement("button",{title:"Restart game",className:"icon-button magnify-4 mg-30 mgb-0"},r.a.createElement("i",{className:"fa fa-refresh fa-shadow icon","aria-hidden":"true",onClick:this.resetGame}),r.a.createElement("span",{className:"note magnify-0-5 white"},"Restart"))),r.a.createElement("span",{className:"shortcuts"},"Shortcuts",r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"pdlr-15 center"},r.a.createElement("i",{className:"fa fa-arrow-right","aria-hidden":"true"})),r.a.createElement("td",null,"Play bot's next chance")),r.a.createElement("tr",null,r.a.createElement("td",{className:"pdlr-15 center"},r.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})),r.a.createElement("td",null,"Undo previous step")),r.a.createElement("tr",null,r.a.createElement("td",{className:"pdlr-15 center"},"R/N"),r.a.createElement("td",null,"Reset Game / New Game"))))),r.a.createElement("span",{className:"note"}," Note: By default the bot uses pre-computed steps. When AI is enabled, bot uses minimax search algorithm. Note the difference in the speed of bot's decision in when AI is enabled or disabled, and when the board is empty or full. Refer ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nimeshnischal/tic-tac-toe-ai-bot"},"github repo")," for more details."))}}]),a}(r.a.Component);s.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3c61aad9.chunk.js.map