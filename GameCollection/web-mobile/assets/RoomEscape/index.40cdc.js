System.register("chunks:///_virtual/Box.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "259c6AT5zJAxbbuVP8MiD8g", "Box", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Box = exports('Box', (_dec = ccclass('Box'), _dec2 = property(Sprite), _dec3 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Box, _Component);

        function Box() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "iconSprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "iconSpriteFrames", _descriptor2, _assertThisInitialized(_this));

          _this.index = 0;
          _this.col = 0;
          _this.raw = 0;
          _this.type = 1;
          return _this;
        }

        var _proto = Box.prototype;

        _proto.init = function init(index, col, raw, type) {
          this.index = index;
          this.col = col;
          this.raw = raw;
          this.type = type;
          this.iconSprite.spriteFrame = this.iconSpriteFrames[type - 1];
        };

        return Box;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconSpriteFrames", [_dec3], {
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

System.register("chunks:///_virtual/RoomEscape", ['./Box.ts', './RoomEscapeView.ts', './Stone.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/RoomEscapeView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './Box.ts', './Stone.ts', './UIManager.ts', './GameUIConfig.ts', './GEventManager.ts', './AdManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Label, NodePool, PhysicsSystem2D, Animation, v3, UITransform, Sprite, Collider2D, Contact2DType, tween, Tween, NodeEventType, instantiate, RigidBody2D, Vec2, UIOpacity, BaseUIForm, Box, Stone, UIManager, UIID, GEventManager, Event_Name, AdManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      NodePool = module.NodePool;
      PhysicsSystem2D = module.PhysicsSystem2D;
      Animation = module.Animation;
      v3 = module.v3;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      tween = module.tween;
      Tween = module.Tween;
      NodeEventType = module.NodeEventType;
      instantiate = module.instantiate;
      RigidBody2D = module.RigidBody2D;
      Vec2 = module.Vec2;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      Box = module.Box;
    }, function (module) {
      Stone = module.Stone;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      AdManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;

      cclegacy._RF.push({}, "13a6ffkoQ5PLavhZOerW7ZG", "RoomEscapeView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var BoxData = function BoxData(index, col, raw, pos, box, block) {
        if (box === void 0) {
          box = null;
        }

        if (block === void 0) {
          block = null;
        }

        this.index = void 0;
        this.col = void 0;
        this.raw = void 0;
        this.pos = void 0;
        this.box = void 0;
        this.block = void 0;
        this.index = index;
        this.col = col;
        this.raw = raw;
        this.pos = pos;
        this.box = box;
        this.block = block;
      };

      var RoomEscapeView = exports('RoomEscapeView', (_dec = ccclass('RoomEscapeView'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(RoomEscapeView, _BaseUIForm);

        function RoomEscapeView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "stonePrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "stonesNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "boxPrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "boxsNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "blockPrefab", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "blocksNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bottomNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scoreProgress", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scoreLabel", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "leftTimeLabel", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "roleLine", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tuiziLine", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "OneLineTipNode", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "WorningeffectNode", _descriptor14, _assertThisInitialized(_this));

          _this.score = 0;
          _this.goal = 100;
          _this.stonesPool = new NodePool('StonePool');
          _this.col = 9;
          _this.raw = 9;
          _this.boxDatas = [];
          _this.leftTime = 100;
          _this.maxTime = 100;
          _this.lockBox = null;
          _this.stoneNum = 250;
          _this.isRemoveOneLine = false;
          _this.isfirstAddTimeTip = true;
          _this.propnum = 0;
          _this.isGameOver = false;
          return _this;
        }

        var _proto = RoomEscapeView.prototype;

        _proto.onEnable = function onEnable() {
          GEventManager.on(Event_Name.GAME_RETURN_HALL, this.GameBackHome, this);
          GEventManager.on(Event_Name.WATER_CLICK_RESTART, this.onBtnRestart, this);
          GEventManager.on(Event_Name.WATER_CLICK_CONTINUE, this.onBtnContinue, this);
          GEventManager.on(Event_Name.WATER_TIME_UP_ADD_TIME, this.onBtnAddTipTime, this);
          GEventManager.on(Event_Name.GAME_AGAIN_LEVEL, this.onBtnRestart, this);
        };

        _proto.onDisable = function onDisable() {
          GEventManager.off(Event_Name.GAME_RETURN_HALL, this.GameBackHome, this);
          GEventManager.off(Event_Name.WATER_CLICK_RESTART, this.onBtnRestart, this);
          GEventManager.off(Event_Name.WATER_CLICK_CONTINUE, this.onBtnContinue, this);
          GEventManager.off(Event_Name.WATER_TIME_UP_ADD_TIME, this.onBtnAddTipTime, this);
          GEventManager.off(Event_Name.GAME_AGAIN_LEVEL, this.onBtnRestart, this);
        };

        _proto.start = function start() {
          PhysicsSystem2D.instance.enable = true;
          this.ColliderEvents();
          this.TouchEvents();
        };

        _proto.update = function update(deltaTime) {};

        _proto.init = function init() {
          this.scheduleOnce(this.BeginGame.bind(this), 0.3);
        };

        _proto.BeginGame = function BeginGame() {
          this.boxsNode.removeAllChildren();
          this.blocksNode.removeAllChildren();
          this.leftTime = 100;
          this.score = 0;
          this.goal = 100;
          this.isGameOver = false;
          this.leftTimeLabel.string = "" + this.leftTime;
          this.isfirstAddTimeTip = true;
          this.propnum = 0;
          this.WorningeffectNode.getComponent(Animation).stop();
          this.WorningeffectNode.active = false;
          this.OneLineTipNode.active = false;
          this.updateProgress();
          this.roleLine.getChildByName("men").setPosition(v3(this.roleLine.getComponent(UITransform).width * -1, 0, 0));
          this.tuiziLine.getChildByName("tuizi").setPosition(v3(this.tuiziLine.getComponent(UITransform).width, 0, 0));
          this.tuiziLine.getComponent(Sprite).fillRange = 1;
          this.roleLine.getComponent(Sprite).fillRange = 1;
          this.schedule(this.updateTime, 1);
          this.boxDatas = [];
          this.isRemoveOneLine = false;
          this.initBoxDatas();
          this.clearStones(); // 清除所有石头

          this.clearBoxes(); // 清除所有盒子

          this.resetBlocks(); // 重置所有块

          this.createStones(); // 创建石头

          this.createBoxes(); // 创建盒子
        };

        _proto.ColliderEvents = function ColliderEvents() {
          this.bottomNode.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        };

        _proto.onBeginContact = function onBeginContact(selfcollider, othercollider) {
          var _this2 = this;

          var othernode = othercollider.node;

          if (othernode.name == 'stone') {
            var stone = othernode.getComponent(Stone);

            if (stone.removed) {
              return;
            }

            stone.removed = true;
            tween(othernode).delay(.1).call(function () {
              _this2.stonesPool.put(othernode);
            }).start();
            this.score += 1;

            if (this.score >= this.goal && this.isGameOver == false) {
              this.showSuccessPanel();
            }

            this.updateProgress();
          }
        };

        _proto.updateProgress = function updateProgress() {
          Tween.stopAllByTarget(this.scoreProgress.getComponent(Sprite));
          tween(this.scoreProgress.getComponent(Sprite)).to(.1, {
            fillRange: this.score == 0 ? 0 : Math.max(0.05, this.score / this.goal)
          }).start();
          this.scoreLabel.string = this.score + "," + this.goal;
        };

        _proto.updateRole = function updateRole() {
          Tween.stopAllByTarget(this.roleLine.getComponent(Sprite));
          Tween.stopAllByTarget(this.roleLine.getChildByName("men"));
          Tween.stopAllByTarget(this.tuiziLine.getChildByName("tuizi"));
          Tween.stopAllByTarget(this.tuiziLine.getComponent(Sprite));
          tween(this.roleLine.getComponent(Sprite)).to(1, {
            fillRange: this.leftTime / this.maxTime
          }).start();
          tween(this.roleLine.getChildByName("men")).to(1, {
            position: v3(this.leftTime / this.maxTime * this.roleLine.getComponent(UITransform).width * -1, 0, 0)
          }).start();
          tween(this.tuiziLine.getChildByName("tuizi")).to(1, {
            position: v3(this.leftTime / this.maxTime * this.tuiziLine.getComponent(UITransform).width, 0, 0)
          }).start();
          tween(this.tuiziLine.getComponent(Sprite)).to(1, {
            fillRange: this.leftTime / this.maxTime
          }).start();
        };

        _proto.TouchEvents = function TouchEvents() {
          this.node.on(NodeEventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(NodeEventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };

        _proto.onTouchStart = function onTouchStart(event) {
          var pos = event.getUILocation();
          this.lockBox = this.getIndexBox(pos);

          if (this.lockBox && this.isRemoveOneLine == true) {
            this.ClearOneLine(this.lockBox.raw);
            this.lockBox = null;
          }
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (!this.lockBox) {
            return;
          }

          var pos = event.getUILocation();
          var indexBox = this.getIndexBox(pos);

          if (indexBox && indexBox != this.lockBox) {
            this.moveBox(this.lockBox, indexBox);
            this.lockBox = null;
            return;
          }
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          this.lockBox = null;
        };

        _proto.getIndexBox = function getIndexBox(pos) {
          // 遍历每一行的箱子数据
          for (var row = 0; row < this.boxDatas.length; row++) {
            var rowData = this.boxDatas[row]; // 获取当前行的箱子数据
            // 遍历每一列的箱子

            for (var col = 0; col < rowData.length; col++) {
              var boxData = rowData[col]; // 获取当前箱子数据

              var currentBox = boxData.box; // 获取当前箱子的实例
              // 检查当前箱子是否存在，并且包含触摸位置

              if (currentBox && currentBox.getComponent(UITransform).getBoundingBoxToWorld().contains(pos)) {
                return currentBox; // 返回被触摸的箱子
              }
            }
          }

          return null; // 如果没有找到被触摸的箱子，返回null
        };

        _proto.moveBox = function moveBox(startBox, endBox) {
          var _this3 = this; // 计算起始箱子和结束箱子的行列差


          var deltaX = endBox.col - startBox.col,
              deltaY = endBox.raw - startBox.raw; // 如果移动的行列差超过1，返回

          if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
            return;
          } // 如果同时在行和列上移动，返回


          if (deltaX != 0 && deltaY != 0) {
            return;
          }

          var startDetail = this.boxDatas[startBox.raw][startBox.col]; // 获取起始箱子的详细信息

          var endDetail = this.boxDatas[endBox.raw][endBox.col]; // 获取结束箱子的详细信息

          var startNode = startBox.node,
              endNode = endBox.node; // 获取起始箱子和结束箱子的节点

          var startIndex = startNode.getSiblingIndex(); // 获取起始箱子的索引

          var animationTime = 0.2; // 动画持续时间
          // 开始动画

          tween(this).call(function () {
            // 交换起始箱子和结束箱子的数据
            _this3.setBoxData(startDetail, endBox);

            _this3.setBoxData(endDetail, startBox);

            startNode.setSiblingIndex(_this3.boxsNode.children.length - 1); // 将起始箱子置于最后
            // 移动起始箱子的节点到结束箱子的位置

            tween(startNode).to(animationTime, {
              position: endDetail.pos
            }).start(); // 移动结束箱子的节点到起始箱子的位置

            tween(endNode).to(animationTime, {
              position: startDetail.pos
            }).start();
          }).delay(animationTime) // 等待动画结束
          .call(function () {
            // 检查是否需要移除箱子
            var removableEndDetails = _this3.getRemoveBoxDatas(endDetail, startBox.type);

            var removableStartDetails = _this3.getRemoveBoxDatas(startDetail, endBox.type); // 如果有可移除的箱子


            if (removableEndDetails || removableStartDetails) {
              if (removableEndDetails) {
                var _loop = function _loop(i) {
                  var removeData = removableEndDetails[i]; // 获取可移除的箱子数据

                  var boxInstance = removeData.box; // 获取箱子实例

                  if (boxInstance) {
                    var _animationTime = 0.2; // 动画时间
                    // 设置箱子的透明度动画

                    tween(boxInstance.node.getComponent(UIOpacity)).to(_animationTime, {
                      opacity: 0
                    }).start(); // 设置箱子的缩放动画并在完成后移除

                    tween(boxInstance.node).to(_animationTime, {
                      scale: v3(1.2, 1.2, 1.2)
                    }).call(function () {
                      boxInstance.node.removeFromParent();
                    }).start();
                    removeData.box = null; // 将箱子数据置为null
                  }

                  removeData.block.getComponent(RigidBody2D).enabled = false; // 禁用刚体
                };

                for (var i = 0; i < removableEndDetails.length; i++) {
                  _loop(i);
                }
              }

              if (removableStartDetails) {
                var _loop2 = function _loop2(_i) {
                  var removeData = removableStartDetails[_i]; // 获取另一个可移除的箱子数据

                  var boxInstance = removeData.box;

                  if (boxInstance) {
                    var _animationTime2 = 0.2; // 设置箱子的透明度动画

                    tween(boxInstance.node.getComponent(UIOpacity)).to(_animationTime2, {
                      opacity: 0
                    }).start(); // 设置箱子的缩放动画并在完成后移除

                    tween(boxInstance.node).to(_animationTime2, {
                      scale: v3(1.2, 1.2, 1.2)
                    }).call(function () {
                      boxInstance.node.removeFromParent();
                    }).start();
                    removeData.box = null; // 将箱子数据置为null
                  }

                  removeData.block.getComponent(RigidBody2D).enabled = false; // 禁用刚体
                };

                for (var _i = 0; _i < removableStartDetails.length; _i++) {
                  _loop2(_i);
                }
              }

              AdManager.getInstance().phoneVibrate(false); // 震动手机
            } else {
              // 如果没有可移除的箱子，则还原数据
              _this3.setBoxData(startDetail, startBox);

              _this3.setBoxData(endDetail, endBox);

              startNode.setSiblingIndex(startIndex); // 还原起始箱子的索引
              // 移动箱子回去

              tween(startNode).to(animationTime, {
                position: startDetail.pos
              }).start();
              tween(endNode).to(animationTime, {
                position: endDetail.pos
              }).start();
            }
          }).start(); // 开始整个动画序列
        };

        _proto.setBoxData = function setBoxData(boxdata, box) {
          // 将指定的箱子（box）设置到箱子数据（bd）中，并更新箱子的信息
          boxdata.box = box; // 设置箱子

          box.index = boxdata.index; // 更新箱子的索引

          box.col = boxdata.col; // 更新箱子的列位置

          box.raw = boxdata.raw; // 更新箱子的行位置
        };

        _proto.getRemoveBoxDatas = function getRemoveBoxDatas(boxData, type) {
          var column = boxData.col,
              row = boxData.raw; // 获取当前箱子的坐标

          var removableBoxDataArr = []; // 初始化可移除的箱子数据数组

          removableBoxDataArr.push(boxData); // 将当前箱子数据加入数组

          var removableVertArr = []; // 用于存放上下方向的可移除箱子数据

          var canUp = true,
              canDown = true; // 上下方向的判断标志
          // 检查上下方向的可移除箱子

          for (var i = 1; i <= this.raw; i++) {
            if (!canUp && !canDown) {
              // 如果上下两个方向都无法继续，退出循环
              break;
            } // 检查上方的箱子


            if (canUp) {
              var upperY = row - i; // 上方的Y坐标

              if (upperY < 0) {
                // 越界判断
                canUp = false; // 设置上下标志
              } else {
                var upperBoxData = this.boxDatas[upperY][column]; // 获取上方箱子数据

                if (!upperBoxData.box || upperBoxData.box.type != type) {
                  // 判断箱子是否存在且类型匹配
                  canUp = false; // 设置关闭标志
                } else {
                  removableVertArr.push(upperBoxData); // 添加到可移除数组
                }
              }
            } // 检查下方的箱子


            if (canDown) {
              var lowerY = row + i; // 下方的Y坐标

              if (lowerY >= this.raw) {
                // 越界判断
                canDown = false; // 设置关闭标志
              } else {
                var lowerBoxData = this.boxDatas[lowerY][column]; // 获取下方箱子数据

                if (!lowerBoxData.box || lowerBoxData.box.type != type) {
                  // 判断箱子是否存在且类型匹配
                  canDown = false; // 设置关闭标志
                } else {
                  removableVertArr.push(lowerBoxData); // 添加到可移除数组
                }
              }
            }
          } // 如果有找到多个可移除的箱子，加入主数组


          if (removableVertArr.length > 1) {
            for (var _i2 = 0; _i2 < removableVertArr.length; _i2++) {
              removableBoxDataArr.push(removableVertArr[_i2]);
            }
          }

          var removableHorizArr = []; // 用于存放左右方向的可移除箱子数据

          var canRight = true,
              canLeft = true; // 左右方向的判断标志
          // 检查左右方向的可移除箱子

          for (var _i3 = 1; _i3 <= this.col; _i3++) {
            if (!canRight && !canLeft) {
              // 如果左右两个方向都无法继续，退出循环
              break;
            } // 检查右方的箱子


            if (canRight) {
              var rightX = column + _i3; // 右方的X坐标

              if (rightX >= this.col) {
                // 越界判断
                canRight = false; // 设置关闭标志
              } else {
                var rightBoxData = this.boxDatas[row][rightX]; // 获取右方箱子数据

                if (!rightBoxData.box || rightBoxData.box.type != type) {
                  // 判断箱子是否存在且类型匹配
                  canRight = false; // 设置关闭标志
                } else {
                  removableHorizArr.push(rightBoxData); // 添加到可移除数组
                }
              }
            } // 检查左方的箱子


            if (canLeft) {
              var leftX = column - _i3; // 左方的X坐标

              if (leftX < 0) {
                // 越界判断
                canLeft = false; // 设置关闭标志
              } else {
                var leftBoxData = this.boxDatas[row][leftX]; // 获取左方箱子数据

                if (!leftBoxData.box || leftBoxData.box.type != type) {
                  // 判断箱子是否存在且类型匹配
                  canLeft = false; // 设置关闭标志
                } else {
                  removableHorizArr.push(leftBoxData); // 添加到可移除数组
                }
              }
            }
          } // 如果有找到多个可移除的箱子，加入主数组


          if (removableHorizArr.length > 1) {
            for (var _i4 = 0; _i4 < removableHorizArr.length; _i4++) {
              removableBoxDataArr.push(removableHorizArr[_i4]);
            }
          } // 返回可移除的箱子数据，数量大于2返回数组，否则返回null


          return removableBoxDataArr.length > 2 ? removableBoxDataArr : null;
        };

        _proto.initBoxDatas = function initBoxDatas() {
          // 初始化盒子数据
          this.boxDatas = []; // 创建一个空数组用以存放盒子数据

          var index = 0; // 用于标识盒子的索引
          // 遍历每一行

          for (var raw = 0; raw < this.raw; raw++) {
            var boxdataArr = []; // 存放当前行的盒子数据

            var y = 315 - raw * 50; // 计算当前行的y坐标
            // 遍历每一列

            for (var col = 0; col < this.col; col++) {
              var x = -315 + col * 50; // 计算当前列的x坐标

              var pos = v3(x, y, 0); // 创建位置向量
              // 创建新的盒子数据对象并添加到当前行数据中

              var boxdata = new BoxData(index, col, raw, pos, null, this.createBlock(pos));
              boxdataArr.push(boxdata); // 将盒子数据添加到当前行

              index += 1; // 索引递增
            }

            this.boxDatas.push(boxdataArr); // 将当前行的盒子数据添加到总数组中
          }
        };

        _proto.createBlock = function createBlock(pos) {
          // 创建一个块并设置其父节点和位置
          var blocknode = instantiate(this.blockPrefab); // 实例化块的预制体

          blocknode.parent = this.blocksNode; // 设置父节点

          blocknode.position = pos; // 设置块的位置

          blocknode.getComponent(RigidBody2D).enabled = true; // 启用2D刚体组件

          return blocknode; // 返回创建的块
        };

        _proto.updateTime = function updateTime() {
          // 更新剩余时间
          this.leftTime -= 1; // 剩余时间减一

          this.leftTimeLabel.string = "" + this.leftTime; // 更新剩余时间标签显示

          this.updateRole(); // 更新角色动画

          if (this.leftTime == 10) {
            if (this.isfirstAddTimeTip == true) {
              this.unschedule(this.updateTime);
              UIManager.GetInstance().ShowUIForms(UIID.AddTimeTip);
              this.isfirstAddTimeTip = false;
            }

            this.WorningeffectNode.active = true;
            this.WorningeffectNode.getComponent(Animation).play();
          } // 如果时间小于等于零，则执行失败逻辑


          if (this.leftTime <= 0) {
            this.leftTime = 0;
            this.leftTimeLabel.string = "" + this.leftTime; // 更新剩余时间标签显示

            if (this.isGameOver == false) {
              this.showFailPanel();
            }
          }
        };

        _proto.createStones = function createStones() {
          // 创建石头
          var x = -260,
              y = 380; // 初始化石头的起始坐标
          // 循环创建石头，数量由stoneNum决定

          for (var i = 0; i < this.stoneNum; i++) {
            this.createStone(v3(x, y, 0)); // 创建石头并设置位置

            x += 30; // 更新x坐标
            // 当x坐标超过330时，换行

            if (x >= 200) {
              x = -260; // 重置x坐标

              y += 30; // 更新y坐标
            }

            if (y >= 500) {
              y = 380;
            }
          }
        };

        _proto.getStoneNode = function getStoneNode() {
          // 获取石头节点
          var size = this.stonesPool.size(); // 获取石头池的大小
          // 如果池内没有石头，则创建新的石头节点

          if (size < 1) {
            var stonenode = instantiate(this.stonePrefab); // 实例化石头预制体

            var scaleindex = this.getRandomNUM(0, 2); // 获取随机数

            var s1 = 0.4,
                s2 = 0.5; // 定义两种不同的缩放比例
            // 根据随机数选择缩放比例

            if (scaleindex == 0) {
              stonenode.scale = v3(s1, s1, s1); // 设置缩放
            } else {
              stonenode.scale = v3(s2, s2, s2); // 设置缩放
            }

            this.stonesPool.put(stonenode); // 将创建的石头放入池中
          }

          return this.stonesPool.get(); // 从池中获取石头节点
        };

        _proto.createStone = function createStone(pos) {
          // 创建石头并设置其属性
          var stonenode = this.getStoneNode(); // 获取石头节点

          stonenode.parent = this.stonesNode; // 设置父节点

          stonenode.position = pos; // 设置位置

          var stone = stonenode.getComponent(Stone); // 获取石头组件

          stone.removed = false; // 设置石头为未移除状态

          var r2bd = stone.rb2d; // 获取2D刚体

          r2bd.linearVelocity = Vec2.ZERO; // 初始化线性速度

          r2bd.angularVelocity = 0; // 初始化角速度

          r2bd.enabled = true; // 启用刚体
        };

        _proto.createBoxes = function createBoxes() {
          // 创建盒子
          for (var raw = 0; raw < this.boxDatas.length; raw++) {
            var boxdataArr = this.boxDatas[raw]; // 获取当前行的盒子数据
            // 遍历当前行的每个盒子数据

            for (var col = 0; col < boxdataArr.length; col++) {
              var boxdata = boxdataArr[col];
              var types = [1, 2, 3, 4]; // 可选的盒子类型

              var typeindex = this.getRandomNUM(0, types.length); // 获取随机类型的索引

              var type = types[typeindex]; // 获取随机类型

              types.splice(typeindex, 1); // 移除已选择的类型
              // 确保盒子可以被移除，直到找到合适的类型

              while (this.getRemoveBoxDatas(boxdata, type) && types.length > 0) {
                typeindex = this.getRandomNUM(0, types.length); // 重新获取随机类型的索引

                type = types[typeindex]; // 获取新的随机类型

                types.splice(typeindex, 1); // 移除已选择的类型
              }

              boxdata.box = this.createBox(boxdata, type); // 创建盒子并赋值给盒子数据
            }
          }
        };

        _proto.createBox = function createBox(boxdata, type) {
          // 创建盒子并初始化
          var boxnode = instantiate(this.boxPrefab); // 实例化盒子预制体

          boxnode.parent = this.boxsNode; // 设置父节点

          boxnode.position = boxdata.pos; // 设置盒子的位置

          var box = boxnode.getComponent(Box); // 获取盒子组件

          box.init(boxdata.index, boxdata.col, boxdata.raw, type); // 初始化盒子属性

          return box; // 返回创建的盒子
        };

        _proto.clearStones = function clearStones() {
          // 清除所有石头
          var stoneArr = this.stonesNode.children; // 获取当前所有石头节点

          for (var i = stoneArr.length - 1; i >= 0; i--) {
            var stone = stoneArr[i];
            Tween.stopAllByTarget(stone); // 停止所有与石头相关的动画

            this.stonesPool.put(stone); // 将石头节点放入池中
          }
        };

        _proto.clearBoxes = function clearBoxes() {
          // 清除所有盒子
          for (var raw = 0; raw < this.boxDatas.length; raw++) {
            var boxdataArr = this.boxDatas[raw]; // 获取当前行的盒子数据

            for (var col = 0; col < boxdataArr.length; col++) {
              var boxdata = boxdataArr[col];
              var box = boxdata.box; // 获取盒子

              if (box) {
                box.node.removeFromParent(); // 移除盒子节点
              }
            }
          }
        };

        _proto.resetBlocks = function resetBlocks() {
          // 重置所有块
          for (var raw = 0; raw < this.boxDatas.length; raw++) {
            var boxdataArr = this.boxDatas[raw]; // 获取当前行的盒子数据

            for (var col = 0; col < boxdataArr.length; col++) {
              var boxdata = boxdataArr[col];
              boxdata.block.getComponent(RigidBody2D).enabled = true; // 启用块的刚体组件
            }
          }
        };

        _proto.getRandomNUM = function getRandomNUM(min, max) {
          // 获取指定范围内的随机整数
          return Math.floor(Math.random() * (max - min)) + min; // 生成随机整数并返回
        };

        _proto.onBtnClearOneLine = function onBtnClearOneLine() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');

          if (this.propnum > 0) {
            this.isRemoveOneLine = true;
            this.OneLineTipNode.active = true;
          } else {
            // AdManager.getInstance().showVideo((isSucceed?: number | string, code?: string) => {
            //     if (isSucceed === '999') {
            //         console.log('无网络，广告加载失败！');
            //         return;
            //     }
            //     if (isSucceed && isSucceed === 1) {
            this.isRemoveOneLine = true;
            this.OneLineTipNode.active = true; //         } else {
            //         }
            //     });
          }
        };

        _proto.ClearOneLine = function ClearOneLine(raw) {
          var _this4 = this;

          var _loop3 = function _loop3(col) {
            var boxdata = _this4.boxDatas[raw][col];
            var box = boxdata.box;

            if (box) {
              var animationTime = 0.2; // 动画时间
              // 设置箱子的透明度动画

              tween(box.node.getComponent(UIOpacity)).to(animationTime, {
                opacity: 0
              }).start(); // 设置箱子的缩放动画并在完成后移除

              tween(box.node).to(animationTime, {
                scale: v3(1.2, 1.2, 1.2)
              }).call(function () {
                box.node.removeFromParent();
              }).start();
              boxdata.box = null; // 将箱子数据置为null

              box.node.removeFromParent(); // 移除盒子节点
            }

            boxdata.block.getComponent(RigidBody2D).enabled = false; // 禁用刚体
          };

          for (var col = 0; col < this.col; col++) {
            _loop3(col);
          }

          this.isRemoveOneLine = false;
          this.OneLineTipNode.active = false;
        };

        _proto.closeOneLineTip = function closeOneLineTip() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          this.isRemoveOneLine = false;
          this.OneLineTipNode.active = false;
          this.propnum += 1;
        };

        _proto.onBtnUpdatebox = function onBtnUpdatebox() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble'); // AdManager.getInstance().showVideo((isSucceed?: number | string, code?: string) => {
          //     if (isSucceed === '999') {
          //         console.log('无网络，广告加载失败！');
          //         return;
          //     }
          //     if (isSucceed && isSucceed === 1) {
          //         console.log('更新成功');

          for (var raw = 0; raw < this.raw; raw++) {
            for (var col = 0; col < this.col; col++) {
              var boxdata = this.boxDatas[raw][col];
              var box = boxdata.box;

              if (box) {
                var types = [1, 2, 3, 4]; // 可选的盒子类型

                var typeindex = this.getRandomNUM(0, types.length); // 获取随机类型的索引

                var type = types[typeindex]; // 获取随机类型

                types.splice(typeindex, 1); // 移除已选择的类型
                // 确保盒子可以被移除，直到找到合适的类型

                while (this.getRemoveBoxDatas(boxdata, type) && types.length > 0) {
                  typeindex = this.getRandomNUM(0, types.length); // 重新获取随机类型的索引

                  type = types[typeindex]; // 获取新的随机类型

                  types.splice(typeindex, 1); // 移除已选择的类型
                }

                box.init(boxdata.index, boxdata.col, boxdata.raw, type);
              }
            }
          } //     } else {
          //         console.log('更新失败');
          //     }
          // });

        };

        _proto.onBtnAddTime = function onBtnAddTime() {
          this.leftTime += 60; // 增加60秒

          this.leftTimeLabel.string = "" + this.leftTime; // 更新剩余时间标签显示

          if (this.leftTime > this.maxTime) {
            this.maxTime = this.leftTime;
          }
        };

        _proto.onBtnPause = function onBtnPause() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          this.unschedule(this.updateTime); // 停止计时器

          UIManager.GetInstance().ShowUIForms(UIID.SettingUI); // 显示暂停面板
        };

        _proto.onBtnContinue = function onBtnContinue() {
          this.schedule(this.updateTime, 1); // 继续计时器
        };

        _proto.onBtnRestart = function onBtnRestart() {
          this.unschedule(this.updateTime); // 停止计时器

          Tween.stopAllByTarget(this.roleLine.getComponent(Sprite));
          Tween.stopAllByTarget(this.roleLine.getChildByName("men"));
          Tween.stopAllByTarget(this.tuiziLine.getChildByName("tuizi"));
          Tween.stopAllByTarget(this.tuiziLine.getComponent(Sprite));
          Tween.stopAllByTarget(this.scoreProgress.getComponent(Sprite));
          this.BeginGame(); // 重置游戏
        };

        _proto.GameBackHome = function GameBackHome() {
          this.unschedule(this.updateTime); // 停止计时器

          Tween.stopAllByTarget(this.roleLine.getComponent(Sprite));
          Tween.stopAllByTarget(this.roleLine.getChildByName("men"));
          Tween.stopAllByTarget(this.tuiziLine.getChildByName("tuizi"));
          Tween.stopAllByTarget(this.tuiziLine.getComponent(Sprite));
          Tween.stopAllByTarget(this.scoreProgress.getComponent(Sprite));
          UIManager.GetInstance().CloseUIForms(UIID.RoomEscapeView);
        };

        _proto.onBtnAddTipTime = function onBtnAddTipTime() {
          this.leftTime += 60; // 增加60秒

          this.leftTimeLabel.string = "" + this.leftTime; // 更新剩余时间标签显示

          this.WorningeffectNode.getComponent(Animation).stop();
          this.WorningeffectNode.active = false;
          this.schedule(this.updateTime, 1);
        };

        _proto.showSuccessPanel = function showSuccessPanel() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'success');
          this.unschedule(this.updateTime); // 停止计时器

          this.isGameOver = true;
          this.WorningeffectNode.getComponent(Animation).stop();
          this.WorningeffectNode.active = false;
          UIManager.GetInstance().ShowUIForms(UIID.WinUI, {
            isWin: true,
            level: 1
          });
        };

        _proto.showFailPanel = function showFailPanel() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'fail');
          this.isGameOver = true;
          this.WorningeffectNode.getComponent(Animation).stop();
          this.WorningeffectNode.active = false;
          UIManager.GetInstance().ShowUIForms(UIID.WinUI, {
            isWin: false,
            level: 1
          });
        };

        return RoomEscapeView;
      }(BaseUIForm), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stonePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stonesNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boxPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "boxsNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "blocksNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bottomNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scoreProgress", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "leftTimeLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "roleLine", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "tuiziLine", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "OneLineTipNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "WorningeffectNode", [_dec15], {
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

System.register("chunks:///_virtual/Stone.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RigidBody2D, Collider2D, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RigidBody2D = module.RigidBody2D;
      Collider2D = module.Collider2D;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "b81259CavVAgZVWJnwSgZs6", "Stone", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Stone = exports('Stone', (_dec = ccclass('Stone'), _dec2 = property(RigidBody2D), _dec3 = property(Collider2D), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stone, _Component);

        function Stone() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "rb2d", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "c2d", _descriptor2, _assertThisInitialized(_this));

          _this.removed = false;
          return _this;
        }

        var _proto = Stone.prototype;

        _proto.start = function start() {};

        return Stone;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rb2d", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "c2d", [_dec3], {
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
  r('virtual:///prerequisite-imports/RoomEscape', 'chunks:///_virtual/RoomEscape'); 
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