System.register("chunks:///_virtual/GameData", ['./TableHallData.ts', './TableTowerDefenseData.ts', './TableTowerDefenseEnemys.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TableHallData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JsonUtil.ts'], function (exports) {
  'use strict';

  var _createClass, cclegacy, JsonUtil;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      JsonUtil = module.JsonUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6520dj02uhAOrPp98XcxZtg", "TableHallData", undefined);

      var TableHallData = exports('TableHallData', /*#__PURE__*/function () {
        function TableHallData() {
          this.data = void 0;
          this.id = 0;
        }

        var _proto = TableHallData.prototype;

        _proto.init = function init(id) {
          var table = JsonUtil.get(TableHallData.TableName);
          this.data = table[id];
          this.id = id;
        };

        _createClass(TableHallData, [{
          key: "Name",
          get: function get() {
            return this.data.Name;
          }
        }, {
          key: "Type",
          get: function get() {
            return this.data.Type;
          }
        }, {
          key: "IsOpen",
          get: function get() {
            return this.data.IsOpen;
          }
        }, {
          key: "IsAd",
          get: function get() {
            return this.data.IsAd;
          }
        }, {
          key: "BundleName",
          get: function get() {
            return this.data.BundleName;
          }
        }, {
          key: "OpenUI",
          get: function get() {
            return this.data.OpenUI;
          }
        }]);

        return TableHallData;
      }());
      TableHallData.TableName = "HallData";

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableTowerDefenseData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JsonUtil.ts'], function (exports) {
  'use strict';

  var _createClass, cclegacy, JsonUtil;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      JsonUtil = module.JsonUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e86deLw1qdEx6zqdoUJbGrO", "TableTowerDefenseData", undefined);

      var TableTowerDefenseData = exports('TableTowerDefenseData', /*#__PURE__*/function () {
        function TableTowerDefenseData() {
          this.data = void 0;
          this.id = 0;
        }

        var _proto = TableTowerDefenseData.prototype;

        _proto.init = function init(id) {
          var table = JsonUtil.get(TableTowerDefenseData.TableName);
          this.data = table[id];
          this.id = id;
        };

        _createClass(TableTowerDefenseData, [{
          key: "Name",
          get: function get() {
            return this.data.Name;
          }
        }, {
          key: "Bullet",
          get: function get() {
            return this.data.Bullet;
          }
        }, {
          key: "Enemys",
          get: function get() {
            return this.data.Enemys;
          }
        }]);

        return TableTowerDefenseData;
      }());
      TableTowerDefenseData.TableName = "TowerDefenseData";

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableTowerDefenseEnemys.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JsonUtil.ts'], function (exports) {
  'use strict';

  var _createClass, cclegacy, JsonUtil;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      JsonUtil = module.JsonUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "267e5+Auk1JHbph2xgxxYsk", "TableTowerDefenseEnemys", undefined);

      var TableTowerDefenseEnemys = exports('TableTowerDefenseEnemys', /*#__PURE__*/function () {
        function TableTowerDefenseEnemys() {
          this.data = void 0;
          this.id = 0;
        }

        var _proto = TableTowerDefenseEnemys.prototype;

        _proto.init = function init(id) {
          var table = JsonUtil.get(TableTowerDefenseEnemys.TableName);
          this.data = table[id];
          this.id = id;
        };

        _createClass(TableTowerDefenseEnemys, [{
          key: "Name",
          get: function get() {
            return this.data.Name;
          }
        }, {
          key: "HP",
          get: function get() {
            return this.data.HP;
          }
        }, {
          key: "Attack",
          get: function get() {
            return this.data.Attack;
          }
        }, {
          key: "AnimName",
          get: function get() {
            return this.data.AnimName;
          }
        }, {
          key: "Speed",
          get: function get() {
            return this.data.Speed;
          }
        }]);

        return TableTowerDefenseEnemys;
      }());
      TableTowerDefenseEnemys.TableName = "TowerDefenseEnemys";

      cclegacy._RF.pop();
    }
  };
});

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