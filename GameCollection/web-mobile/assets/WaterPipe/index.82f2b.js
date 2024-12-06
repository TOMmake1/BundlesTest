System.register("chunks:///_virtual/WaterPipe", ['./WaterPipeView.ts'], function () {
  'use strict';

  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/WaterPipeView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './UIManager.ts', './GameUIConfig.ts', './GameManager.ts', './GEventManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, sys, Input, Label, Sprite, v3, tween, instantiate, Animation, BaseUIForm, UIManager, UIID, GameManager, GEventManager, Event_Name;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      sys = module.sys;
      Input = module.Input;
      Label = module.Label;
      Sprite = module.Sprite;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      Animation = module.Animation;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

      cclegacy._RF.push({}, "125faLsYG5BHLYmYo2MQV1+", "WaterPipeView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // 每种水管类型的连通规则

      var pipeConnections = {
        start: {
          0: ["right"]
        },
        end: {
          0: ["left"]
        },
        straight: {
          0: ["top", "bottom"],
          90: ["left", "right"],
          180: ["top", "bottom"],
          270: ["left", "right"]
        },
        curve: {
          0: ["top", "right"],
          // 上右口连通
          90: ["left", "top"],
          // 左上口连通
          180: ["bottom", "left"],
          // 下左口连通
          270: ["right", "bottom"] // 右下口连通

        }
      };
      var WaterPipeView = exports('WaterPipeView', (_dec = ccclass('WaterPipeView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(WaterPipeView, _BaseUIForm);

        function WaterPipeView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "itemParentNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "additemParentNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "effectParentNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "effectNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TipsNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TimeLabelNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "WorningeffectNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ScoreLabelNode", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "progressNode", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "successNode", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "PipeSpr", _descriptor11, _assertThisInitialized(_this));

          _this.grid = void 0;
          _this.rows = 10;
          _this.cols = 6;
          _this.hasRightInterface = void 0;
          _this.hasLeftInterface = void 0;
          _this.gridPos = [];
          _this.scheduleEvent = void 0;
          _this.LeftTimer = 120;
          _this.GameOver = false;
          _this.score = 0;
          _this.maxScore = void 0;
          _this.targetScore = 50;
          _this.targetAddScore = 50;
          _this.isfirstAddTimeTip = true;
          return _this;
        }

        var _proto = WaterPipeView.prototype;

        _proto.onEnable = function onEnable() {
          GEventManager.on(Event_Name.GAME_RETURN_HALL, this.GameBackHome, this);
          GEventManager.on(Event_Name.WATER_CLICK_RESTART, this.onBtnRestart, this);
          GEventManager.on(Event_Name.WATER_CLICK_CONTINUE, this.onBtnContinue, this);
          GEventManager.on(Event_Name.WATER_TIME_UP_ADD_TIME, this.onBtnAddTipTime, this);
        };

        _proto.onDisable = function onDisable() {
          GEventManager.off(Event_Name.GAME_RETURN_HALL, this.GameBackHome, this);
          GEventManager.off(Event_Name.WATER_CLICK_RESTART, this.onBtnRestart, this);
          GEventManager.off(Event_Name.WATER_CLICK_CONTINUE, this.onBtnContinue, this);
          GEventManager.off(Event_Name.WATER_TIME_UP_ADD_TIME, this.onBtnAddTipTime, this);
        };

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init() {
          var _this2 = this;

          var maxscores = sys.localStorage.getItem('maxscore');
          var isfirstenter = sys.localStorage.getItem('SGisfirst');

          if (maxscores) {
            this.maxScore = parseInt(maxscores);
          }

          if (!isfirstenter) {
            this.TipsNode.active = true;
          } else {
            this.createGrid();
          }

          this.itemParentNode.children.forEach(function (child, index) {
            child.on(Input.EventType.TOUCH_END, function (event) {
              _this2.OnBtnRotatePipe(event, index); // 传递索引

            }, _this2);
          });
        } // 初始化网格
        ;

        _proto.createGrid = function createGrid() {
          this.grid = [];
          this.score = 0;
          this.targetScore = 50;
          this.ScoreLabelNode.getComponent(Label).string = this.score + "," + this.targetScore;
          this.progressNode.getComponent(Sprite).fillRange = this.score / this.targetScore;
          this.LeftTimer = 120;
          this.TimeLabelNode.getComponent(Label).string = "" + this.LeftTimer;
          this.WorningeffectNode.active = false;
          this.isfirstAddTimeTip = true;
          this.schedule(this.UpdateTimer, 1);

          for (var row = 0; row < this.rows; row++) {
            var gridRow = [];

            for (var col = 0; col < this.cols; col++) {
              var type = void 0;
              var piperotation = void 0;
              var num = row * 6 + col;
              var randomtypenum = Math.random();

              if (randomtypenum > 0.5) {
                type = "curve";
                piperotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];
                this.itemParentNode.children[num].getComponent(Sprite).spriteFrame = this.PipeSpr[0];
                this.itemParentNode.children[num].angle = piperotation; // this.PipeSpr[0];
              } else {
                type = "straight";
                piperotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];
                this.itemParentNode.children[num].getComponent(Sprite).spriteFrame = this.PipeSpr[1];
                this.itemParentNode.children[num].angle = piperotation; // this.PipeSpr[1];
              }

              this.itemParentNode.children[num].scale = v3(1, 1, 1);
              this.additemParentNode.children[num].active = false;
              gridRow.push({
                type: type,
                rotation: piperotation,
                position: {
                  row: row,
                  col: col
                }
              });
              this.gridPos.push(this.itemParentNode.children[num].position.clone());
            }

            this.grid.push(gridRow);
          }
        } // 获取指定位置的水管
        ;

        _proto.getPipe = function getPipe(row, col) {
          if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
            return null; // 超出边界
          }

          return this.grid[row][col];
        } // 随机生成新的水管
        ;

        _proto.generateNewPipe = function generateNewPipe(row, col) {
          var num = row * 6 + col;
          var randomType = Math.random() > 0.5 ? "straight" : "curve";
          var locksprnum;

          if (randomType == "straight") {
            locksprnum = 1;
          } else {
            locksprnum = 0;
          }

          var piperotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];
          this.additemParentNode.children[num].getComponent(Sprite).spriteFrame = this.PipeSpr[locksprnum];
          this.additemParentNode.children[num].angle = piperotation;
          this.additemParentNode.children[num].scale = v3(1, 1, 1);
          this.additemParentNode.children[num].active = true;
          return {
            type: randomType,
            rotation: piperotation,
            position: {
              row: row,
              col: col
            }
          };
        };

        _proto.arePipesConnected = function arePipesConnected(pipe1, pipe2) {
          var connections1 = pipeConnections[pipe1.type][(pipe1.rotation % 360 + 360) % 360];
          var connections2 = pipeConnections[pipe2.type][(pipe2.rotation % 360 + 360) % 360];
          var relativePosition = {
            row: pipe2.position.row - pipe1.position.row,
            col: pipe2.position.col - pipe1.position.col
          };

          if (relativePosition.row === -1 && relativePosition.col === 0) {
            return connections1.includes("top") && connections2.includes("bottom");
          }

          if (relativePosition.row === 1 && relativePosition.col === 0) {
            return connections1.includes("bottom") && connections2.includes("top");
          }

          if (relativePosition.row === 0 && relativePosition.col === -1) {
            return connections1.includes("left") && connections2.includes("right");
          }

          if (relativePosition.row === 0 && relativePosition.col === 1) {
            return connections1.includes("right") && connections2.includes("left");
          }

          return false;
        } // 旋转水管
        ;

        _proto.rotatePipe = function rotatePipe(row, col) {
          var _this3 = this;

          var num = row * 6 + col;
          var pipe = this.getPipe(row, col);
          if (!pipe || pipe.type === "start" || pipe.type === "end") return; // 旋转90度

          pipe.rotation = pipe.rotation - 90;
          tween(this.itemParentNode.children[num]).to(0.1, {
            angle: pipe.rotation
          }).call(function () {
            _this3.checkConnectivity();
          }).start(); // this.itemParentNode.children[num].angle = pipe.rotation;
          // // 检测连通性
          // this.checkConnectivity();
        } // 检测是否连通
        ;

        _proto.checkConnectivity = function checkConnectivity() {
          var _this4 = this;

          var visited = Array.from({
            length: this.rows
          }, function () {
            return Array(_this4.cols).fill(false);
          }); // 从起点开始深度优先搜索

          for (var i = 0; i < this.rows; i++) {
            visited = Array.from({
              length: this.rows
            }, function () {
              return Array(_this4.cols).fill(false);
            });
            this.hasLeftInterface = false;
            this.hasRightInterface = false;
            var startPipe = this.getPipe(i, 0);

            if (startPipe) {
              this.dfs(startPipe, visited, function (row, col, pipe) {
                // 检查边界条件
                if (col === 0 && pipeConnections[pipe.type][(pipe.rotation % 360 + 360) % 360].includes("left")) {
                  _this4.hasLeftInterface = true;
                }
              });

              if (this.hasLeftInterface && this.hasRightInterface) {
                this.clearConnectedPipes(visited); // 清除已连通的水管

                return;
              }
            }
          }
        };

        _proto.OnBtnRotatePipe = function OnBtnRotatePipe(event, index) {
          var numcol = index % 6;
          var numrow = (index - numcol) / 6;
          this.rotatePipe(numrow, numcol);
        };

        _proto.dfs = function dfs(pipe, visited, callback) {
          var _this5 = this;

          var _pipe$position = pipe.position,
              row = _pipe$position.row,
              col = _pipe$position.col;
          visited[row][col] = true;

          if (callback) {
            callback(row, col, pipe); // 执行检查接口的回调
          } // 检查是否已经到达终点（最右列有右接口）


          if (this.hasLeftInterface && this.hasRightInterface) {
            return true; // 终止递归
          } // 检查四个方向的相邻水管


          var directions = [{
            dr: -1,
            dc: 0
          }, // 上
          {
            dr: 1,
            dc: 0
          }, // 下
          {
            dr: 0,
            dc: -1
          }, // 左
          {
            dr: 0,
            dc: 1
          } // 右
          ];

          for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {
            var _directions$_i = _directions[_i],
                dr = _directions$_i.dr,
                dc = _directions$_i.dc;
            var neighbor = this.getPipe(row + dr, col + dc);

            if (neighbor && !visited[row + dr][col + dc] && this.isPipeConnected(pipe, neighbor)) {
              if (this.dfs(neighbor, visited, function (row, col, pipe) {
                if (col === _this5.cols - 1 && pipeConnections[pipe.type][(pipe.rotation % 360 + 360) % 360].includes("right")) {
                  _this5.hasRightInterface = true; // 最右列有右接口
                }
              })) return true; // 返回一旦找到连通路径
            }
          }

          return false; // 如果没有找到连接路径
        } // 判断两个水管是否连通
        ;

        _proto.isPipeConnected = function isPipeConnected(pipe1, pipe2) {
          if (this.arePipesConnected(pipe1, pipe2)) {
            return true;
          } else {
            return false;
          }
        };

        _proto.clearConnectedPipes = function clearConnectedPipes(visited) {
          var _this6 = this;

          for (var col = 0; col < this.cols; col++) {
            // 从底部开始遍历该列
            for (var row = this.rows - 1; row >= 0; row--) {
              if (visited[row][col]) {
                (function () {
                  // 清除当前已连通的水管
                  _this6.grid[row][col] = null;
                  var num = row * 6 + col;
                  _this6.score += 1;
                  tween(_this6.itemParentNode.children[num]).to(0.4, {
                    scale: v3(0, 0, 0)
                  }).call(function () {
                    _this6.itemParentNode.children[num].getComponent(Sprite).spriteFrame = null;
                    _this6.itemParentNode.children[num].angle = 0;
                    _this6.itemParentNode.children[num].scale = v3(1, 1, 1);
                    var effectitem = instantiate(_this6.effectNode);
                    effectitem.parent = _this6.effectParentNode;
                    effectitem.position = _this6.itemParentNode.children[num].position.clone();
                    effectitem.active = true;
                    tween(effectitem).to(1, {
                      position: v3(0, 90, 0)
                    }, {
                      easing: "backInOut"
                    }).call(function () {
                      effectitem.destroy();

                      _this6.updatescore();
                    }).start();
                  }).start();
                })();
              }
            }
          }

          this.scheduleEvent = this.scheduleOnce(function () {
            if (_this6.node) {
              _this6.updatePipe(visited);
            }
          }, 0.5);
        };

        _proto.updatePipe = function updatePipe(visited) {
          var _this7 = this;

          for (var col = 0; col < this.cols; col++) {
            var emptyRows = [];

            for (var row = this.rows - 1; row >= 0; row--) {
              var currentPipe = this.grid[row][col]; // 当前水管

              if (currentPipe === null) {
                // 找到空位，更新为空位
                emptyRows.push(row); // 记录空位行
              } else if (emptyRows.length > 0) {
                // 当前位置有管道且空位在该上方
                var lastEmptyRow = emptyRows.shift(); // 取出第一个空位行

                var newPipe = {
                  type: currentPipe.type,
                  rotation: currentPipe.rotation,
                  position: {
                    row: lastEmptyRow,
                    col: col
                  }
                };
                this.grid[lastEmptyRow][col] = newPipe; // 下移水管

                this.grid[row][col] = null; // 清空原位置
                // 更新该管道的位置显示

                var currentIndex = row * 6 + col;
                var newIndex = lastEmptyRow * 6 + col;
                this.itemParentNode.children[newIndex].scale = v3(1, 1, 1);
                emptyRows.push(row); // this.itemParentNode.children[newIndex].getComponent(Sprite).spriteFrame = this.PipeSpr[currentPipe.type === 'straight' ? 1 : 0];
                // this.itemParentNode.children[newIndex].angle = currentPipe.rotation;
                // this.itemParentNode.children[currentIndex].getComponent(Sprite).spriteFrame = null;
                // this.itemParentNode.children[currentIndex].angle = 0;

                this.DownPipeTween(currentIndex, newIndex, currentPipe);
              }
            }
          }

          var _loop = function _loop(_col) {
            // 检查每一列的每一行是否有空位
            for (var _row = 0; _row < _this7.rows; _row++) {
              if (_this7.grid[_row][_col] === null) {
                (function () {
                  // 生成新管道并设置其初始位置在界面外面
                  var newPipe = _this7.generateNewPipe(_row, _col);

                  var index = _row * 6 + _col;
                  var pipeNode = _this7.additemParentNode.children[index]; // 获取管道节点

                  _this7.additemParentNode.children[index].active = true; // 设置管道初始位置在上方（假设Y轴负值代表界面上方）

                  pipeNode.position = v3(_this7.gridPos[_col].x, 62); // 1000是指界面外的高度
                  // 将管道设置到网格中

                  _this7.grid[_row][_col] = newPipe; // 开始从上方掉落的动画

                  tween(pipeNode).to(0.55, {
                    position: _this7.gridPos[index]
                  }, {
                    easing: _this7.customElasticOut1
                  }) // 下落1秒并应用弹性效果
                  .call(function () {
                    _this7.itemParentNode.children[index].getComponent(Sprite).spriteFrame = _this7.PipeSpr[newPipe.type === 'straight' ? 1 : 0];
                    _this7.itemParentNode.children[index].angle = newPipe.rotation;
                    pipeNode.position = v3(_this7.gridPos[_col].x, 62);
                    pipeNode.active = false;
                  }).start();
                })();
              }
            }
          };

          for (var _col = 0; _col < this.cols; _col++) {
            _loop(_col);
          }

          Array.from({
            length: this.rows
          }, function () {
            return Array(_this7.cols).fill(false);
          });
        };

        _proto.DownPipeTween = function DownPipeTween(currentIndex, newIndex, currentPipe) {
          var _this8 = this;

          tween(this.itemParentNode.children[currentIndex]).to(0.5, {
            position: this.gridPos[newIndex]
          }, {
            easing: this.customElasticOut
          }).call(function () {
            _this8.itemParentNode.children[newIndex].getComponent(Sprite).spriteFrame = _this8.PipeSpr[currentPipe.type === 'straight' ? 1 : 0];
            _this8.itemParentNode.children[newIndex].angle = currentPipe.rotation;
            _this8.itemParentNode.children[currentIndex].getComponent(Sprite).spriteFrame = null;
            _this8.itemParentNode.children[currentIndex].angle = 0;
            _this8.itemParentNode.children[currentIndex].position = _this8.gridPos[currentIndex];
          }).start();
        };

        _proto.customElasticOut = function customElasticOut(t) {
          var p = 0.5; // 振荡周期

          var s = p / 4; // 振荡幅度

          return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
        };

        _proto.customElasticOut1 = function customElasticOut1(t) {
          var p = 0.5; // 振荡周期

          var s = 0.075; // 振荡幅度

          return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
        };

        _proto.onBtnKnowTip = function onBtnKnowTip() {
          this.TipsNode.active = false;
          sys.localStorage.setItem("SGisfirst", "true");
          this.createGrid();
        };

        _proto.onBtnPause = function onBtnPause() {
          this.unschedule(this.UpdateTimer);
          UIManager.GetInstance().ShowUIForms(UIID.SettingUI);
          GEventManager.emit(Event_Name.WATER_CLICK_PAUSE, null);
        };

        _proto.onBtnContinue = function onBtnContinue() {
          this.schedule(this.UpdateTimer, 1);
        };

        _proto.onBackHome = function onBackHome() {
          GameManager.instance().ExitGame();
        };

        _proto.onBtnRestart = function onBtnRestart() {
          this.successNode.active = false;
          this.unschedule(this.UpdateTimer);
          this.createGrid();
        };

        _proto.onBtnAddTime = function onBtnAddTime() {
          this.LeftTimer += 30;
          this.TimeLabelNode.getComponent(Label).string = "" + this.LeftTimer;
        };

        _proto.updatescore = function updatescore() {
          this.ScoreLabelNode.getComponent(Label).string = this.score + "," + this.targetScore;
          this.progressNode.getComponent(Sprite).fillRange = this.score / this.targetScore;

          if (this.score >= this.targetScore) {
            this.score = 0;
            this.targetScore += this.targetAddScore;
            this.LeftTimer = 120;
            this.TimeLabelNode.getComponent(Label).string = "" + this.LeftTimer;
            this.ScoreLabelNode.getComponent(Label).string = this.score + "," + this.targetScore;
            this.progressNode.getComponent(Sprite).fillRange = this.score / this.targetScore;
          }
        };

        _proto.UpdateTimer = function UpdateTimer() {
          this.LeftTimer -= 1;
          this.TimeLabelNode.getComponent(Label).string = "" + this.LeftTimer;

          if (this.LeftTimer == 10) {
            if (this.isfirstAddTimeTip == true) {
              this.unschedule(this.UpdateTimer);
              UIManager.GetInstance().ShowUIForms(UIID.AddTimeTip);
              this.isfirstAddTimeTip = false;
            }

            this.WorningeffectNode.active = true;
            this.WorningeffectNode.getComponent(Animation).play();
          }

          if (this.LeftTimer < 0) {
            this.WorningeffectNode.getComponent(Animation).stop();
            this.WorningeffectNode.active = false;
            this.LeftTimer = 0;
            this.TimeLabelNode.getComponent(Label).string = "" + this.LeftTimer;
            this.GameOver = true;
            this.unschedule(this.UpdateTimer);
            this.unschedule(this.scheduleEvent);
            this.EndShow();
          }
        };

        _proto.EndShow = function EndShow() {
          this.successNode.active = true;

          if (this.maxScore) {
            if (this.score >= this.maxScore) {
              sys.localStorage.setItem("maxscore", this.score.toString());
              this.maxScore = this.score;
            }

            this.successNode.getChildByName("MaxscoreLayout").getChildByName("Maxscore").getComponent(Label).string = "\u5386\u53F2\u6700\u9AD8\u5206: " + this.maxScore;
            this.successNode.getChildByName("scoreLayout").getChildByName("score").getComponent(Label).string = "\u5F53\u524D\u5F97\u5206: " + this.score;
          } else {
            sys.localStorage.setItem("maxscore", this.score.toString());
            this.successNode.getChildByName("MaxscoreLayout").getChildByName("Maxscore").getComponent(Label).string = "\u5386\u53F2\u6700\u9AD8\u5206: " + this.score;
            this.maxScore = this.score;
            this.successNode.getChildByName("scoreLayout").getChildByName("score").getComponent(Label).string = "\u5F53\u524D\u5F97\u5206: " + this.score;
          }
        };

        _proto.GameBackHome = function GameBackHome() {
          this.successNode.active = false;
          this.unschedule(this.scheduleEvent);
          this.itemParentNode.children.forEach(function (child) {
            child.off(Input.EventType.TOUCH_END);
          });
          UIManager.GetInstance().CloseUIForms(UIID.WaterPipeView);
        };

        _proto.onBtnAddTipTime = function onBtnAddTipTime() {
          this.LeftTimer += 30;
          this.TimeLabelNode.getComponent(Label).string = "" + this.LeftTimer;
          this.WorningeffectNode.getComponent(Animation).stop();
          this.WorningeffectNode.active = false;
          this.schedule(this.UpdateTimer, 1);
        };

        return WaterPipeView;
      }(BaseUIForm), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemParentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "additemParentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectParentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "effectNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "TipsNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "TimeLabelNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "WorningeffectNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ScoreLabelNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "progressNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "successNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "PipeSpr", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

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