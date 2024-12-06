System.register("chunks:///_virtual/GameData",["./TableHallData.ts","./TableTowerDefenseData.ts","./TableTowerDefenseEnemys.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/TableHallData.ts",["./rollupPluginModLoBabelHelpers.js","cc","./JsonUtil.ts"],(function(t){"use strict";var e,n,a;return{setters:[function(t){e=t.createClass},function(t){n=t.cclegacy},function(t){a=t.JsonUtil}],execute:function(){n._RF.push({},"6520dj02uhAOrPp98XcxZtg","TableHallData",void 0),t("TableHallData",function(){function t(){this.data=void 0,this.id=0}return t.prototype.init=function(e){var n=a.get(t.TableName);this.data=n[e],this.id=e},e(t,[{key:"Name",get:function(){return this.data.Name}},{key:"Type",get:function(){return this.data.Type}},{key:"IsOpen",get:function(){return this.data.IsOpen}},{key:"IsAd",get:function(){return this.data.IsAd}},{key:"BundleName",get:function(){return this.data.BundleName}},{key:"OpenUI",get:function(){return this.data.OpenUI}}]),t}()).TableName="HallData",n._RF.pop()}}}));

System.register("chunks:///_virtual/TableTowerDefenseData.ts",["./rollupPluginModLoBabelHelpers.js","cc","./JsonUtil.ts"],(function(e){"use strict";var t,n,a;return{setters:[function(e){t=e.createClass},function(e){n=e.cclegacy},function(e){a=e.JsonUtil}],execute:function(){n._RF.push({},"e86deLw1qdEx6zqdoUJbGrO","TableTowerDefenseData",void 0),e("TableTowerDefenseData",function(){function e(){this.data=void 0,this.id=0}return e.prototype.init=function(t){var n=a.get(e.TableName);this.data=n[t],this.id=t},t(e,[{key:"Name",get:function(){return this.data.Name}},{key:"Bullet",get:function(){return this.data.Bullet}},{key:"Enemys",get:function(){return this.data.Enemys}}]),e}()).TableName="TowerDefenseData",n._RF.pop()}}}));

System.register("chunks:///_virtual/TableTowerDefenseEnemys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./JsonUtil.ts"],(function(e){"use strict";var t,n,i;return{setters:[function(e){t=e.createClass},function(e){n=e.cclegacy},function(e){i=e.JsonUtil}],execute:function(){n._RF.push({},"267e5+Auk1JHbph2xgxxYsk","TableTowerDefenseEnemys",void 0),e("TableTowerDefenseEnemys",function(){function e(){this.data=void 0,this.id=0}return e.prototype.init=function(t){var n=i.get(e.TableName);this.data=n[t],this.id=t},t(e,[{key:"Name",get:function(){return this.data.Name}},{key:"HP",get:function(){return this.data.HP}},{key:"Attack",get:function(){return this.data.Attack}},{key:"AnimName",get:function(){return this.data.AnimName}},{key:"Speed",get:function(){return this.data.Speed}}]),e}()).TableName="TowerDefenseEnemys",n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/GameData', 'chunks:///_virtual/GameData'); 
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