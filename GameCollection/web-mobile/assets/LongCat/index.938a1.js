System.register("chunks:///_virtual/LongCat", ['./LongCatView.ts'], function () {
  'use strict';

  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LongCatView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './UIManager.ts', './GameUIConfig.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Color, v3, instantiate, UITransform, Sprite, BaseUIForm, UIManager, UIID;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      v3 = module.v3;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "c0017SB9J1FBpg3PTajk3Fy", "LongCatView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LongCatView = exports('LongCatView', (_dec = ccclass('LongCatView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(LongCatView, _BaseUIForm);

        function LongCatView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "DiNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemdiNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "WallParentNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemwallNode", _descriptor4, _assertThisInitialized(_this));

          _this.mapdata = [[0, 0, 0, -2], [0, -1, 0, 0], [-2, 0, 2, 0], [-2, 0, 0, 0]];
          _this.rows = void 0;
          _this.cols = void 0;
          _this.directions = [[0, 1], // 右
          [0, -1], // 左
          [1, 0], // 下
          [-1, 0] // 上
          ];
          _this.ItemdiColor = ["AA5C6E", "E67B5F", "ABB6EE", "5E86DA", "5AD566"];
          _this.ItemColor = ["FD7AB8", "FFBA8F", "E4C2FF", "00CDFF", "9FF2A8"];
          _this.ItemSize = 1;
          return _this;
        }

        var _proto = LongCatView.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init() {
          this.CreateRoad();
        };

        _proto.CreateRoad = function CreateRoad() {
          var diColor = new Color();
          var itemColor = new Color();
          Color.fromHEX(diColor, this.ItemdiColor[0]);
          Color.fromHEX(itemColor, this.ItemColor[0]);
          this.rows = this.mapdata.length;
          this.cols = this.mapdata[0].length;

          if (this.rows <= 4 && this.cols <= 4) {
            this.ItemSize = 2;
          }

          for (var row = 0; row < this.rows; row++) {
            var y = (this.rows - 1) * this.ItemSize * 80 / 2 - row * this.ItemSize * 80; // 计算当前行的y坐标

            for (var col = 0; col < this.cols; col++) {
              var x = col * this.ItemSize * 80 - (this.cols - 1) * this.ItemSize * 80 / 2; // 计算当前列的x坐标

              var pos = v3(x, y, 0);

              if (this.mapdata[row][col] >= -1) {
                var itemdi = instantiate(this.itemdiNode);
                itemdi.active = true;
                itemdi.parent = this.DiNode;
                itemdi.getComponent(UITransform).width = this.ItemSize * 80;
                itemdi.getComponent(UITransform).height = this.ItemSize * 80;
                itemdi.setPosition(pos);
                itemdi.getComponent(Sprite).color = diColor;
              }

              if (this.mapdata[row][col] == -1) {
                var itemwall = instantiate(this.itemwallNode);
                itemwall.active = true;
                itemwall.parent = this.WallParentNode;
                itemwall.getComponent(UITransform).width = this.ItemSize * 80;
                itemwall.getComponent(UITransform).height = this.ItemSize * 80;
                itemwall.setPosition(pos);
                itemwall.getComponent(Sprite).color = itemColor;
                var itemwallchild1 = itemwall.getChildByName("1");
                itemwallchild1.setScale(this.ItemSize, this.ItemSize, 1);
                itemwallchild1.setPosition(-1 * this.ItemSize * 80 / 2, itemwallchild1.position.y, 0);
                var itemwallchild2 = itemwall.getChildByName("2");
                itemwallchild2.setScale(this.ItemSize, this.ItemSize, 1);
                itemwallchild2.setPosition(itemwallchild2.position.x, -1 * this.ItemSize * 80 / 2, 0);
              }

              if (this.mapdata[row][col] == 2) {
                var _itemwall = instantiate(this.itemwallNode);

                _itemwall.active = true;
                _itemwall.parent = this.WallParentNode;
                _itemwall.getComponent(UITransform).width = this.ItemSize * 80;
                _itemwall.getComponent(UITransform).height = this.ItemSize * 80;

                _itemwall.setPosition(pos);

                _itemwall.getComponent(Sprite).color = Color.RED;

                var _itemwallchild = _itemwall.getChildByName("1");

                _itemwallchild.setScale(this.ItemSize, this.ItemSize, 1);

                _itemwallchild.setPosition(-1 * this.ItemSize * 80 / 2, _itemwallchild.position.y, 0);

                var _itemwallchild2 = _itemwall.getChildByName("2");

                _itemwallchild2.setScale(this.ItemSize, this.ItemSize, 1);

                _itemwallchild2.setPosition(_itemwallchild2.position.x, -1 * this.ItemSize * 80 / 2, 0);
              }
            }
          }
        } // 主方法，开始遍历
        ;

        _proto.walk = function walk() {
          var start = this.findStart();

          if (!start) {
            console.error("未找到起点");
            return false;
          }

          var startRow = start[0],
              startCol = start[1];
          return this.dfs(startRow, startCol);
        };

        _proto.dfs = function dfs(row, col) {
          if (row < 0 || col < 0 || row >= this.rows || col >= this.cols || this.mapdata[row][col] <= 0) {
            return false;
          }

          this.mapdata[row][col] = 1; // 标记为已走过

          if (this.isComplete()) return true; // 检查是否完成

          for (var _iterator = _createForOfIteratorHelperLoose(this.directions), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
                dx = _step$value[0],
                dy = _step$value[1]; // 获取移动到障碍前的位置

            var _this$moveUntilBlocke = this.moveUntilBlocked(row, col, dx, dy),
                newRow = _this$moveUntilBlocke[0],
                newCol = _this$moveUntilBlocke[1];

            if (this.dfs(newRow, newCol)) return true; // 继续搜索
          }

          this.mapdata[row][col] = 0; // 回溯

          return false;
        };

        _proto.moveUntilBlocked = function moveUntilBlocked(row, col, dx, dy) {
          while (row + dx >= 0 && row + dx < this.rows && col + dy >= 0 && col + dy < this.cols && this.mapdata[row + dx][col + dy] > 0 // 遇到 0 或 -1 停止
          ) {
            row += dx;
            col += dy;
          }

          return [row, col];
        } // 找到起点
        ;

        _proto.findStart = function findStart() {
          for (var row = 0; row < this.rows; row++) {
            for (var col = 0; col < this.cols; col++) {
              if (this.mapdata[row][col] === 2) return [row, col];
            }
          }

          return null;
        } // 检查是否覆盖了所有格子
        ;

        _proto.isComplete = function isComplete() {
          for (var row = 0; row < this.rows; row++) {
            for (var col = 0; col < this.cols; col++) {
              if (this.mapdata[row][col] === 0) return false; // 还有未走的格子
            }
          }

          return true;
        };

        _proto.onBtnPause = function onBtnPause() {
          UIManager.GetInstance().ShowUIForms(UIID.SettingUI);
        };

        _proto.onBtnRestart = function onBtnRestart() {};

        _proto.onBtnNextLevel = function onBtnNextLevel() {};

        return LongCatView;
      }(BaseUIForm), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DiNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemdiNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "WallParentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemwallNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/LongCat', 'chunks:///_virtual/LongCat'); 
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