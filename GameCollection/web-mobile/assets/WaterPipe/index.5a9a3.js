System.register("chunks:///_virtual/WaterPipe",["./WaterPipeView.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/WaterPipeView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseUIForm.ts","./UIManager.ts","./GameUIConfig.ts","./GameManager.ts","./GEventManager.ts"],(function(e){"use strict";var t,i,n,o,r,s,a,c,h,l,d,u,f,p,m,g,N,P,T,v,C,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.Node,c=e.SpriteFrame,h=e.sys,l=e.Input,d=e.Label,u=e.Sprite,f=e.v3,p=e.tween,m=e.instantiate,g=e.Animation},function(e){N=e.default},function(e){P=e.default},function(e){T=e.UIID},function(e){v=e.GameManager},function(e){C=e.GEventManager,b=e.Event_Name}],execute:function(){var y,L,S,w,I,E,A,M,R,B,_,U,G,W,x,F,O,z,D,H,k,K,V,Y,j;r._RF.push({},"125faLsYG5BHLYmYo2MQV1+","WaterPipeView",void 0);var Q=s.ccclass,q=s.property,J={start:{0:["right"]},end:{0:["left"]},straight:{0:["top","bottom"],90:["left","right"],180:["top","bottom"],270:["left","right"]},curve:{0:["top","right"],90:["left","top"],180:["bottom","left"],270:["right","bottom"]}};e("WaterPipeView",(y=Q("WaterPipeView"),L=q(a),S=q(a),w=q(a),I=q(a),E=q(a),A=q(a),M=q(a),R=q(a),B=q(a),_=q(a),U=q([c]),y((x=t((W=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,n(t,"itemParentNode",x,o(t)),n(t,"additemParentNode",F,o(t)),n(t,"effectParentNode",O,o(t)),n(t,"effectNode",z,o(t)),n(t,"TipsNode",D,o(t)),n(t,"TimeLabelNode",H,o(t)),n(t,"WorningeffectNode",k,o(t)),n(t,"ScoreLabelNode",K,o(t)),n(t,"progressNode",V,o(t)),n(t,"successNode",Y,o(t)),n(t,"PipeSpr",j,o(t)),t.grid=void 0,t.rows=10,t.cols=6,t.hasRightInterface=void 0,t.hasLeftInterface=void 0,t.gridPos=[],t.scheduleEvent=void 0,t.LeftTimer=120,t.GameOver=!1,t.score=0,t.maxScore=void 0,t.targetScore=50,t.targetAddScore=50,t.isfirstAddTimeTip=!0,t}i(t,e);var r=t.prototype;return r.onEnable=function(){C.on(b.GAME_RETURN_HALL,this.GameBackHome,this),C.on(b.WATER_CLICK_RESTART,this.onBtnRestart,this),C.on(b.WATER_CLICK_CONTINUE,this.onBtnContinue,this),C.on(b.WATER_TIME_UP_ADD_TIME,this.onBtnAddTipTime,this)},r.onDisable=function(){C.off(b.GAME_RETURN_HALL,this.GameBackHome,this),C.off(b.WATER_CLICK_RESTART,this.onBtnRestart,this),C.off(b.WATER_CLICK_CONTINUE,this.onBtnContinue,this),C.off(b.WATER_TIME_UP_ADD_TIME,this.onBtnAddTipTime,this)},r.start=function(){},r.update=function(e){},r.init=function(){var e=this,t=h.localStorage.getItem("maxscore"),i=h.localStorage.getItem("SGisfirst");t&&(this.maxScore=parseInt(t)),i?this.createGrid():this.TipsNode.active=!0,this.itemParentNode.children.forEach((function(t,i){t.on(l.EventType.TOUCH_END,(function(t){e.OnBtnRotatePipe(t,i)}),e)}))},r.createGrid=function(){this.grid=[],this.score=0,this.targetScore=50,this.ScoreLabelNode.getComponent(d).string=this.score+","+this.targetScore,this.progressNode.getComponent(u).fillRange=this.score/this.targetScore,this.LeftTimer=120,this.TimeLabelNode.getComponent(d).string=""+this.LeftTimer,this.WorningeffectNode.active=!1,this.isfirstAddTimeTip=!0,this.schedule(this.UpdateTimer,1);for(var e=0;e<this.rows;e++){for(var t=[],i=0;i<this.cols;i++){var n=void 0,o=void 0,r=6*e+i;Math.random()>.5?(n="curve",o=[0,90,180,270][Math.floor(4*Math.random())],this.itemParentNode.children[r].getComponent(u).spriteFrame=this.PipeSpr[0],this.itemParentNode.children[r].angle=o):(n="straight",o=[0,90,180,270][Math.floor(4*Math.random())],this.itemParentNode.children[r].getComponent(u).spriteFrame=this.PipeSpr[1],this.itemParentNode.children[r].angle=o),this.itemParentNode.children[r].scale=f(1,1,1),this.additemParentNode.children[r].active=!1,t.push({type:n,rotation:o,position:{row:e,col:i}}),this.gridPos.push(this.itemParentNode.children[r].position.clone())}this.grid.push(t)}},r.getPipe=function(e,t){return e<0||e>=this.rows||t<0||t>=this.cols?null:this.grid[e][t]},r.generateNewPipe=function(e,t){var i,n=6*e+t,o=Math.random()>.5?"straight":"curve";i="straight"==o?1:0;var r=[0,90,180,270][Math.floor(4*Math.random())];return this.additemParentNode.children[n].getComponent(u).spriteFrame=this.PipeSpr[i],this.additemParentNode.children[n].angle=r,this.additemParentNode.children[n].scale=f(1,1,1),this.additemParentNode.children[n].active=!0,{type:o,rotation:r,position:{row:e,col:t}}},r.arePipesConnected=function(e,t){var i=J[e.type][(e.rotation%360+360)%360],n=J[t.type][(t.rotation%360+360)%360],o=t.position.row-e.position.row,r=t.position.col-e.position.col;return-1===o&&0===r?i.includes("top")&&n.includes("bottom"):1===o&&0===r?i.includes("bottom")&&n.includes("top"):0===o&&-1===r?i.includes("left")&&n.includes("right"):0===o&&1===r&&(i.includes("right")&&n.includes("left"))},r.rotatePipe=function(e,t){var i=this,n=6*e+t,o=this.getPipe(e,t);o&&"start"!==o.type&&"end"!==o.type&&(o.rotation=o.rotation-90,p(this.itemParentNode.children[n]).to(.1,{angle:o.rotation}).call((function(){i.checkConnectivity()})).start())},r.checkConnectivity=function(){for(var e=this,t=Array.from({length:this.rows},(function(){return Array(e.cols).fill(!1)})),i=0;i<this.rows;i++){t=Array.from({length:this.rows},(function(){return Array(e.cols).fill(!1)})),this.hasLeftInterface=!1,this.hasRightInterface=!1;var n=this.getPipe(i,0);if(n&&(this.dfs(n,t,(function(t,i,n){0===i&&J[n.type][(n.rotation%360+360)%360].includes("left")&&(e.hasLeftInterface=!0)})),this.hasLeftInterface&&this.hasRightInterface))return void this.clearConnectedPipes(t)}},r.OnBtnRotatePipe=function(e,t){var i=t%6,n=(t-i)/6;this.rotatePipe(n,i)},r.dfs=function(e,t,i){var n=this,o=e.position,r=o.row,s=o.col;if(t[r][s]=!0,i&&i(r,s,e),this.hasLeftInterface&&this.hasRightInterface)return!0;for(var a=0,c=[{dr:-1,dc:0},{dr:1,dc:0},{dr:0,dc:-1},{dr:0,dc:1}];a<c.length;a++){var h=c[a],l=h.dr,d=h.dc,u=this.getPipe(r+l,s+d);if(u&&!t[r+l][s+d]&&this.isPipeConnected(e,u)&&this.dfs(u,t,(function(e,t,i){t===n.cols-1&&J[i.type][(i.rotation%360+360)%360].includes("right")&&(n.hasRightInterface=!0)})))return!0}return!1},r.isPipeConnected=function(e,t){return!!this.arePipesConnected(e,t)},r.clearConnectedPipes=function(e){for(var t=this,i=0;i<this.cols;i++)for(var n=this.rows-1;n>=0;n--)e[n][i]&&function(){t.grid[n][i]=null;var e=6*n+i;t.score+=1,p(t.itemParentNode.children[e]).to(.4,{scale:f(0,0,0)}).call((function(){t.itemParentNode.children[e].getComponent(u).spriteFrame=null,t.itemParentNode.children[e].angle=0,t.itemParentNode.children[e].scale=f(1,1,1);var i=m(t.effectNode);i.parent=t.effectParentNode,i.position=t.itemParentNode.children[e].position.clone(),i.active=!0,p(i).to(1,{position:f(0,90,0)},{easing:"backInOut"}).call((function(){i.destroy(),t.updatescore()})).start()})).start()}();this.scheduleEvent=this.scheduleOnce((function(){t.node&&t.updatePipe(e)}),.5)},r.updatePipe=function(e){for(var t=this,i=0;i<this.cols;i++)for(var n=[],o=this.rows-1;o>=0;o--){var r=this.grid[o][i];if(null===r)n.push(o);else if(n.length>0){var s=n.shift(),a={type:r.type,rotation:r.rotation,position:{row:s,col:i}};this.grid[s][i]=a,this.grid[o][i]=null;var c=6*o+i,h=6*s+i;this.itemParentNode.children[h].scale=f(1,1,1),n.push(o),this.DownPipeTween(c,h,r)}}for(var l=function(e){for(var i=0;i<t.rows;i++)null===t.grid[i][e]&&function(){var n=t.generateNewPipe(i,e),o=6*i+e,r=t.additemParentNode.children[o];t.additemParentNode.children[o].active=!0,r.position=f(t.gridPos[e].x,62),t.grid[i][e]=n,p(r).to(.55,{position:t.gridPos[o]},{easing:t.customElasticOut1}).call((function(){t.itemParentNode.children[o].getComponent(u).spriteFrame=t.PipeSpr["straight"===n.type?1:0],t.itemParentNode.children[o].angle=n.rotation,r.position=f(t.gridPos[e].x,62),r.active=!1})).start()}()},d=0;d<this.cols;d++)l(d);Array.from({length:this.rows},(function(){return Array(t.cols).fill(!1)}))},r.DownPipeTween=function(e,t,i){var n=this;p(this.itemParentNode.children[e]).to(.5,{position:this.gridPos[t]},{easing:this.customElasticOut}).call((function(){n.itemParentNode.children[t].getComponent(u).spriteFrame=n.PipeSpr["straight"===i.type?1:0],n.itemParentNode.children[t].angle=i.rotation,n.itemParentNode.children[e].getComponent(u).spriteFrame=null,n.itemParentNode.children[e].angle=0,n.itemParentNode.children[e].position=n.gridPos[e]})).start()},r.customElasticOut=function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((e-.125)*(2*Math.PI)/.5)+1},r.customElasticOut1=function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((e-.075)*(2*Math.PI)/.5)+1},r.onBtnKnowTip=function(){this.TipsNode.active=!1,h.localStorage.setItem("SGisfirst","true"),this.createGrid()},r.onBtnPause=function(){this.unschedule(this.UpdateTimer),P.GetInstance().ShowUIForms(T.SettingUI),C.emit(b.WATER_CLICK_PAUSE,null)},r.onBtnContinue=function(){this.schedule(this.UpdateTimer,1)},r.onBackHome=function(){v.instance().ExitGame()},r.onBtnRestart=function(){this.successNode.active=!1,this.unschedule(this.UpdateTimer),this.createGrid()},r.onBtnAddTime=function(){this.LeftTimer+=30,this.TimeLabelNode.getComponent(d).string=""+this.LeftTimer},r.updatescore=function(){this.ScoreLabelNode.getComponent(d).string=this.score+","+this.targetScore,this.progressNode.getComponent(u).fillRange=this.score/this.targetScore,this.score>=this.targetScore&&(this.score=0,this.targetScore+=this.targetAddScore,this.LeftTimer=120,this.TimeLabelNode.getComponent(d).string=""+this.LeftTimer,this.ScoreLabelNode.getComponent(d).string=this.score+","+this.targetScore,this.progressNode.getComponent(u).fillRange=this.score/this.targetScore)},r.UpdateTimer=function(){this.LeftTimer-=1,this.TimeLabelNode.getComponent(d).string=""+this.LeftTimer,10==this.LeftTimer&&(1==this.isfirstAddTimeTip&&(this.unschedule(this.UpdateTimer),P.GetInstance().ShowUIForms(T.AddTimeTip),this.isfirstAddTimeTip=!1),this.WorningeffectNode.active=!0,this.WorningeffectNode.getComponent(g).play()),this.LeftTimer<0&&(this.WorningeffectNode.getComponent(g).stop(),this.WorningeffectNode.active=!1,this.LeftTimer=0,this.TimeLabelNode.getComponent(d).string=""+this.LeftTimer,this.GameOver=!0,this.unschedule(this.UpdateTimer),this.unschedule(this.scheduleEvent),this.EndShow())},r.EndShow=function(){this.successNode.active=!0,this.maxScore?(this.score>=this.maxScore&&(h.localStorage.setItem("maxscore",this.score.toString()),this.maxScore=this.score),this.successNode.getChildByName("MaxscoreLayout").getChildByName("Maxscore").getComponent(d).string="历史最高分: "+this.maxScore,this.successNode.getChildByName("scoreLayout").getChildByName("score").getComponent(d).string="当前得分: "+this.score):(h.localStorage.setItem("maxscore",this.score.toString()),this.successNode.getChildByName("MaxscoreLayout").getChildByName("Maxscore").getComponent(d).string="历史最高分: "+this.score,this.maxScore=this.score,this.successNode.getChildByName("scoreLayout").getChildByName("score").getComponent(d).string="当前得分: "+this.score)},r.GameBackHome=function(){this.successNode.active=!1,this.unschedule(this.scheduleEvent),this.itemParentNode.children.forEach((function(e){e.off(l.EventType.TOUCH_END)})),P.GetInstance().CloseUIForms(T.WaterPipeView)},r.onBtnAddTipTime=function(){this.LeftTimer+=30,this.TimeLabelNode.getComponent(d).string=""+this.LeftTimer,this.WorningeffectNode.getComponent(g).stop(),this.WorningeffectNode.active=!1,this.schedule(this.UpdateTimer,1)},t}(N)).prototype,"itemParentNode",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(W.prototype,"additemParentNode",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(W.prototype,"effectParentNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(W.prototype,"effectNode",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(W.prototype,"TipsNode",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(W.prototype,"TimeLabelNode",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(W.prototype,"WorningeffectNode",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(W.prototype,"ScoreLabelNode",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(W.prototype,"progressNode",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(W.prototype,"successNode",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(W.prototype,"PipeSpr",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=W))||G));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/WaterPipe', 'chunks:///_virtual/WaterPipe'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});