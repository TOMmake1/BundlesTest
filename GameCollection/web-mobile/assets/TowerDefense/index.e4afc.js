System.register("chunks:///_virtual/TD_Bullet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TD_GameEnum.ts', './TD_Props.ts', './GEventManager.ts', './ToolsHelper.ts', './PoolManager.ts', './TD_Enemy.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BoxCollider2D, Contact2DType, RigidBody2D, v2, Component, PhysicsGroup, TD_Props, GEventManager, Event_Name, ToolsHelper, PoolManager, TD_Enemy;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BoxCollider2D = module.BoxCollider2D;
      Contact2DType = module.Contact2DType;
      RigidBody2D = module.RigidBody2D;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      PhysicsGroup = module.PhysicsGroup;
    }, function (module) {
      TD_Props = module.TD_Props;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      ToolsHelper = module.default;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      TD_Enemy = module.TD_Enemy;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "8ac9cU+XyRKf7yrNT9ukip+", "TD_Bullet", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TD_Bullet = exports('TD_Bullet', (_dec = ccclass('TD_Bullet'), _dec2 = property({
        tooltip: '子弹攻击时飞行速度'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TD_Bullet, _Component);

        function TD_Bullet() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "speed", _descriptor, _assertThisInitialized(_this));

          _this.num = 1;
          _this.c_ids = [];
          _this.isLock = false;
          _this.lockWall = null;
          _this.isAttack = false;
          return _this;
        }

        var _proto = TD_Bullet.prototype;

        _proto.start = function start() {
          this.node.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          this.node.getComponent(BoxCollider2D).on(Contact2DType.END_CONTACT, this.onEndContact, this);
        };

        _proto.init = function init(data) {
          this.c_ids = [];
          this.num = data.num;
          this.isLock = false;
          this.lockWall = null;
          this.isAttack = false;

          if (data.type == 1) {
            this.node.getComponent(RigidBody2D).gravityScale = 0;
            this.node.getComponent(RigidBody2D).angularVelocity = 0;
            this.node.getComponent(RigidBody2D).linearVelocity = v2(data.dir.x, data.dir.y).multiplyScalar(this.speed);
            var dir = Math.atan2(data.dir.y, data.dir.x);
            this.node.angle = dir * 180 / Math.PI + 90;
            return;
          }

          if (data.ids) {
            for (var i = 0; i < data.ids.length; i++) {
              this.c_ids.push(data.ids[i]);
            } // console.log(this.c_ids,data.ids);

          }

          this.node.angle = 0;
          this.node.getComponent(RigidBody2D).gravityScale = 0.5;
          this.node.getComponent(RigidBody2D).linearVelocity = v2(0, 0);
          this.node.getComponent(RigidBody2D).angularVelocity = 0;
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.group == PhysicsGroup.Props) {
            if (otherCollider.tag == 1) {
              var td_prop = otherCollider.node.getComponent(TD_Props);

              if (td_prop.propType == 0) {
                if (this.c_ids.indexOf(td_prop.id) == -1) {
                  this.c_ids.push(td_prop.id);
                  this.createrbullet(td_prop.propNum, td_prop.id);
                }
              } else if (td_prop.propType == 1) {
                if (td_prop.propNum > 0) {
                  this.putBulletNode();
                  td_prop.addPropNum(-this.num);
                }
              } else if (td_prop.propType == 2) {
                if (!this.isLock) {
                  td_prop.addPropNum(-this.num);
                  this.isLock = true;
                  this.lockWall = td_prop;
                }
              } else if (td_prop.propType == 3) {
                this.putBulletNode();
                GEventManager.emit(Event_Name.GAME_COLLECT_BULLET, this.num);
              }
            } else if (otherCollider.tag == 2) {
              otherCollider.node.getComponent(TD_Props).setActive(false);
              GEventManager.emit(Event_Name.GAME_REFRESH_WEAPON, null);
            } else if (otherCollider.tag == 3) {
              if (this.isAttack) {
                return;
              }

              this.isAttack = true;
              otherCollider.node.getComponent(TD_Enemy).Injured({
                attack: this.num
              });
              this.putBulletNode();
            }
          } else if (otherCollider.group == PhysicsGroup.Wall) ;else if (otherCollider.group == PhysicsGroup.Bullet) {
            if (!this.isLock) {
              var bullet = otherCollider.node.getComponent(TD_Bullet);

              if (bullet.isLock) {
                this.isLock = true;
                this.lockWall = bullet.lockWall;
                this.lockWall.addPropNum(-this.num);
              }
            }
          }
        };

        _proto.onEndContact = function onEndContact(selfCollider, otherCollider, contact) {};

        _proto.createrbullet = function createrbullet(propNum, id) {
          for (var i = 0; i < propNum; i++) {
            var len = this.getCreaterNum();

            if (len > propNum - i) {
              len = propNum - i;
            }

            i += len;
            GEventManager.emit(Event_Name.GAME_CREAT_BULLET, {
              type: 0,
              num: len,
              wordPos: this.node.getWorldPosition(),
              ids: ToolsHelper.Instance().copy2DArray(this.c_ids)
            });
          }
        };

        _proto.getCreaterNum = function getCreaterNum() {
          var len = this.node.parent.children.length;

          if (len < 50) {
            return 1;
          } else if (len < 100) {
            return 2;
          } else if (len < 200) {
            return 5;
          } else if (len < 300) {
            return 10;
          } else {
            return 20;
          }
        };

        _proto.putBulletNode = function putBulletNode() {
          var _this2 = this;

          this.scheduleOnce(function () {
            PoolManager.instance().putNode('bullet0', _this2.node);
          });
        };

        return TD_Bullet;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TD_Cannon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GEventManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, GEventManager, Event_Name;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "19669VQET9PVbxWwnhQdIq/", "TD_Cannon", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TD_Cannon = exports('TD_Cannon', (_dec = ccclass('TD_Cannon'), _dec2 = property({
        tooltip: '攻击间隔'
      }), _dec3 = property({
        tooltip: '自动攻击'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TD_Cannon, _Component);

        function TD_Cannon() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "attackTime", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isAuto", _descriptor2, _assertThisInitialized(_this));

          _this.isAttack = false;
          _this.nowTime = 0;
          _this.nowDate = 0;
          _this.cannonNum = 0;
          _this.isStop = false;
          return _this;
        }

        var _proto = TD_Cannon.prototype;

        _proto.init = function init(data) {
          this.isStop = false;
          this.isAttack = this.isAuto;
          this.cannonNum = data.cannonNum;
          this.node.getChildByName('Label').getComponent(Label).string = this.cannonNum + '';
        };

        _proto.getNowDate = function getNowDate() {
          var date = Date.now(); // console.log(date, date - this.nowDate);

          this.nowDate = date;
        };

        _proto.update = function update(deltaTime) {
          if (this.isStop) {
            return;
          }

          if (this.isAttack && this.cannonNum > 0) {
            this.nowTime += deltaTime;

            if (this.nowTime >= this.attackTime) {
              // this.getNowDate();
              this.nowTime = 0;
              this.creterBullet();
            }
          }
        };

        _proto.setAttackState = function setAttackState(is) {
          if (this.isAuto) {
            return;
          }

          this.isAttack = is;

          if (!is) {
            this.nowTime = 1;
          }
        };

        _proto.creterBullet = function creterBullet() {
          this.cannonNum--;

          if (this.cannonNum < 0) {
            this.cannonNum = 0;
            return;
          }

          this.node.getChildByName('Label').getComponent(Label).string = this.cannonNum + '';
          GEventManager.emit(Event_Name.GAME_CREAT_BULLET, {
            type: 0,
            num: 1,
            wordPos: this.node.getChildByName('start').getWorldPosition()
          });
        };

        return TD_Cannon;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "attackTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isAuto", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TD_Enemy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Loader.ts', './TableTowerDefenseEnemys.ts', './PoolManager.ts', './GEventManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, sp, v3, Component, Loader, TableTowerDefenseEnemys, PoolManager, GEventManager, Event_Name;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Loader = module.default;
    }, function (module) {
      TableTowerDefenseEnemys = module.TableTowerDefenseEnemys;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7ac86ogksNCkawrkN9Q68Eh", "TD_Enemy", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MonsterState;

      (function (MonsterState) {
        MonsterState[MonsterState["idle"] = 0] = "idle";
        MonsterState[MonsterState["move"] = 1] = "move";
        MonsterState[MonsterState["attack"] = 2] = "attack";
        MonsterState[MonsterState["die"] = 3] = "die";
      })(MonsterState || (MonsterState = {}));

      var TD_Enemy = exports('TD_Enemy', (_dec = ccclass('TD_Enemy'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TD_Enemy, _Component);

        function TD_Enemy() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.enemyId = 0;
          _this.spine = null;
          _this.enemyTable = new TableTowerDefenseEnemys();
          _this.hp = 0;
          _this.attack = 0;
          _this.speed = 0;
          _this.isStop = true;
          _this.state = MonsterState.idle;
          _this.isAttack = false;
          _this.faceAnim = ['idle', 'walk', 'attack', 'dead'];
          return _this;
        }

        var _proto = TD_Enemy.prototype;

        _proto.init = function init(data) {
          this.enemyId = data.id;

          if (!this.spine) {
            this.spine = this.node.getChildByName('body').getComponent(sp.Skeleton);
            this.spine.setCompleteListener(this.animComplete.bind(this));
          }

          this.enemyTable.init(this.enemyId);
          this.hp = this.enemyTable.HP;
          this.attack = this.enemyTable.Attack;
          this.speed = this.enemyTable.Speed;
          this.load('TowerDefense', this.enemyTable.AnimName);
          this.state = MonsterState.move;
          this.isStop = false;
          this.isAttack = false;
        };

        _proto.load = function load(name, url) {
          var _this2 = this;

          this.node.active = false;
          Loader.loadBundleRes(name, url, function (sd) {
            if (!sd) {
              console.error("\u52A8\u753B\u540D\u4E3A\u3010" + url + "\u3011\u7684\u89D2\u8272\u8D44\u6E90\u4E0D\u5B58\u5728");
              return;
            }

            _this2.spine.skeletonData = sd;

            _this2.spine.skeletonData.addRef();

            _this2.node.active = true;

            _this2.spine.setAnimation(0, 'idle', true);
          }, sp.SkeletonData);
        };

        _proto.update = function update(deltaTime) {
          if (this.isStop) {
            return;
          }

          if (this.state == MonsterState.die) {
            return;
          }

          if (this.state == MonsterState.attack) {
            if (this.node.getPosition().x < -220) {
              this.monsterAttack();
              return;
            }
          }

          if (this.node.getPosition().x < -220) {
            this.state = MonsterState.attack;
            return;
          }

          var nSpeed = v3(-this.speed, 0);
          this.node.setPosition(this.node.getPosition().add(nSpeed.multiplyScalar(deltaTime)));
          this.state = MonsterState.move;
          this.playAnim();
        };

        _proto.monsterAttack = function monsterAttack() {
          var _this3 = this;

          if (this.isStop) {
            return;
          }

          if (this.state == MonsterState.die) {
            return;
          }

          if (this.isAttack) {
            return;
          }

          this.isAttack = true;
          this.state = MonsterState.attack;
          this.playAnim();
          this.scheduleOnce(function () {
            _this3.isAttack = false;
          }, 1.5);
        };

        _proto.playAnim = function playAnim() {
          var isLoop = true;

          if (this.state == MonsterState.die || this.state == MonsterState.attack) {
            isLoop = false;
          }

          var anim = this.faceAnim[this.state];

          if (this.spine.animation == anim) {
            return;
          }

          this.spine.setAnimation(0, anim, isLoop);
        };

        _proto.animComplete = function animComplete(e) {
          var animName = e.animation.name;

          if (animName == this.faceAnim[2]) {
            this.spine.setAnimation(0, 'idle', true);
            GEventManager.emit(Event_Name.GAME_UI_REFRESH_HP, this.attack);
          }

          if (animName == this.faceAnim[3]) {
            this.node.active = false;
            PoolManager.instance().putNode('enemy1', this.node);
            GEventManager.emit(Event_Name.GAME_ENEMY_DIE, null);
          }
        };

        _proto.Injured = function Injured(data) {
          if (this.hp <= 0) {
            return false;
          }

          this.hp -= data.attack;

          if (this.hp < 0) {
            this.hp = 0;
          }

          if (this.hp <= 0) {
            this.state = MonsterState.die;
            this.playAnim();
          }
        };

        return TD_Enemy;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TD_GameEnum.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        ColliderTag: void 0,
        PhysicsGroup: void 0
      });

      cclegacy._RF.push({}, "3270cO67ElDo7wNZLq/Zvd6", "TD_GameEnum", undefined);

      var PhysicsGroup;

      (function (PhysicsGroup) {
        PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
        PhysicsGroup[PhysicsGroup["Wall"] = 2] = "Wall";
        PhysicsGroup[PhysicsGroup["Bullet"] = 4] = "Bullet";
        PhysicsGroup[PhysicsGroup["Props"] = 8] = "Props";
      })(PhysicsGroup || (PhysicsGroup = exports('PhysicsGroup', {})));

      var ColliderTag;

      (function (ColliderTag) {})(ColliderTag || (ColliderTag = exports('ColliderTag', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TD_Props.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ToolsHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, tween, Label, Component, v3, ToolsHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      tween = module.tween;
      Label = module.Label;
      Component = module.Component;
      v3 = module.v3;
    }, function (module) {
      ToolsHelper = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "e53637+UyBKoYTl90J1AFmj", "TD_Props", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PROP_TYPE = Enum({
        "数量x": 0,
        "数量-": 1,
        "阻挡": 2,
        "收集": 3,
        "机枪": 4
      });
      var TD_Props = exports('TD_Props', (_dec = ccclass('TD_Props'), _dec2 = property({
        type: PROP_TYPE,
        tooltip: '道具类型'
      }), _dec3 = property({
        tooltip: '数量'
      }), _dec4 = property({
        tooltip: '是否移动'
      }), _dec5 = property({
        tooltip: '移动速度'
      }), _dec6 = property({
        tooltip: '移动起点'
      }), _dec7 = property({
        tooltip: '移动终点'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TD_Props, _Component);

        function TD_Props() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "propType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "propNum", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isMove", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveSpeed", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "startPos", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "endPos", _descriptor6, _assertThisInitialized(_this));

          _this.id = 0;
          _this.moveTween = tween();
          return _this;
        }

        var _proto = TD_Props.prototype;

        _proto.onEnable = function onEnable() {
          this.id = ToolsHelper.Instance().randomNum(1, 999);
          this.refreshNum();
          this.startMove();
        };

        _proto.addPropNum = function addPropNum(num) {
          var _this2 = this;

          this.propNum += num;

          if (this.propNum < 0) {
            this.propNum = 0;
          }

          this.refreshNum();

          if (this.propType == PROP_TYPE.阻挡) {
            if (this.propNum <= 0) {
              this.scheduleOnce(function () {
                _this2.node.active = false;
              });
            }
          }
        };

        _proto.refreshNum = function refreshNum() {
          if (this.propType == PROP_TYPE.收集 || this.propType == PROP_TYPE.机枪) {
            return;
          }

          var icon = ['x', '-', ''];
          this.node.getChildByName('Label').getComponent(Label).string = icon[this.propType] + this.propNum;
        };

        _proto.setActive = function setActive(is) {
          var _this3 = this;

          this.scheduleOnce(function () {
            _this3.node.active = is;
          });
        };

        _proto.startMove = function startMove() {
          var _this4 = this;

          if (!this.isMove) {
            return;
          }

          this.moveTween && this.moveTween.stop();
          this.node.setPosition(this.startPos);
          this.moveTween = tween(this.node);
          var time = ToolsHelper.Instance().pointDistance(this.startPos, this.endPos) / this.moveSpeed;
          this.moveTween.to(time, {
            position: this.endPos
          }).to(time, {
            position: this.startPos
          }).call(function () {
            _this4.startMove();
          }).start();
        };

        return TD_Props;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PROP_TYPE.数量x;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "propNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isMove", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "startPos", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(0, 0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "endPos", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(0, 0, 0);
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TD_Role.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GEventManager.ts', './TD_Enemy.ts', './ProgressBarTools.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, v3, Component, GEventManager, Event_Name, TD_Enemy, ProgressBarTools;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      TD_Enemy = module.TD_Enemy;
    }, function (module) {
      ProgressBarTools = module.ProgressBarTools;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "c0d51kHWVdP2Iw3O4ZELY9a", "TD_Role", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RoleState;

      (function (RoleState) {
        RoleState[RoleState["idle"] = 0] = "idle";
        RoleState[RoleState["move"] = 1] = "move";
        RoleState[RoleState["attack"] = 2] = "attack";
        RoleState[RoleState["die"] = 3] = "die";
      })(RoleState || (RoleState = {}));

      var TD_Role = exports('TD_Role', (_dec = ccclass('TD_Role'), _dec2 = property({
        tooltip: '攻击间隔'
      }), _dec3 = property({
        tooltip: '机枪攻击间隔'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TD_Role, _Component);

        function TD_Role() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "attackInterval", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "attackInterval1", _descriptor2, _assertThisInitialized(_this));

          _this.roleSpine = null;
          _this.health = 100;
          _this.nowHealth = 100;
          _this.healthProgressBar = null;
          _this.bulletNum = 0;
          _this.isStop = false;
          _this.weaponType = 0;
          _this.time = 0;
          _this.weaponCD = 0.3;
          _this.roleState = RoleState.idle;
          _this.faceAnim = ['1_/idle', 'walk', 'Riven/Attack', 'dead'];
          return _this;
        }

        var _proto = TD_Role.prototype;

        _proto.init = function init() {
          this.isStop = false;
          this.weaponType = 0;
          this.health = 100;
          this.nowHealth = this.health;
          this.weaponCD = this.attackInterval;

          if (!this.healthProgressBar) {
            this.healthProgressBar = this.node.getChildByName('ProgressBar').getComponent(ProgressBarTools);
          }

          if (!this.roleSpine) {
            this.roleSpine = this.node.getChildByName('body').getComponent(sp.Skeleton);
            this.roleSpine.setCompleteListener(this.animComplete.bind(this));
          }

          this.roleState = RoleState.idle;
          this.playAnim();
        };

        _proto.refreshWeapon = function refreshWeapon() {
          this.weaponType = 1;
          this.weaponCD = this.attackInterval1;
        };

        _proto.refreshHealth = function refreshHealth(attack) {
          var _this2 = this;

          this.nowHealth -= attack;

          if (this.nowHealth <= 0) {
            this.nowHealth = 0;
            GEventManager.emit(Event_Name.GAME_END, false);
          }

          this.healthProgressBar.progress = this.nowHealth / this.health;
          this.healthProgressBar.node.active = true;
          this.unscheduleAllCallbacks();
          this.scheduleOnce(function () {
            _this2.healthProgressBar.node.active = false;
          }, 1);
        };

        _proto.update = function update(deltaTime) {
          if (this.isStop) {
            return;
          }

          if (this.bulletNum <= 0) {
            this.roleState = RoleState.idle;
            this.playAnim();
            return;
          }

          this.time += deltaTime;

          if (this.time >= this.weaponCD) {
            this.roleAttack();
            this.time = 0;
          }
        };

        _proto.getEnemyTager = function getEnemyTager() {
          var enemys = this.node.parent.getChildByName('enemys');
          var addNum = 0;

          for (var i = 0; i < enemys.children.length; i++) {
            var enemy = enemys.children[i];

            if (enemy.position.x < 720) {
              if (enemy.getComponent(TD_Enemy).state != 3) {
                return enemy.getWorldPosition();
              }
            }

            addNum++;

            if (addNum > 5) {
              return v3(0, 0, 0);
            }
          }

          return v3(0, 0, 0);
        };

        _proto.roleAttack = function roleAttack() {
          var tager = this.getEnemyTager();

          if (tager.length() == 0) {
            this.roleState = RoleState.idle;
            this.playAnim();
            return;
          }

          this.bulletNum--;

          if (this.bulletNum < 0) {
            this.bulletNum = 0;
          }

          var startPos = this.node.getChildByName('start').getWorldPosition();
          var dir = v3(tager.x - startPos.x, tager.y + 25 - startPos.y).normalize();
          GEventManager.emit(Event_Name.GAME_CREAT_BULLET, {
            type: 1,
            num: 1,
            wordPos: this.node.getChildByName('start').getWorldPosition(),
            dir: dir
          });
          this.roleState = RoleState.attack;
          this.playAnim();
        };

        _proto.playAnim = function playAnim() {
          var isLoop = false;

          if (this.roleState == RoleState.die || this.roleState == RoleState.attack) {
            isLoop = true;
          }

          var anim = this.faceAnim[this.roleState];

          if (this.roleSpine.animation == anim) {
            return;
          }

          this.roleSpine.setAnimation(0, anim, isLoop);
        };

        _proto.animComplete = function animComplete(e) {
          var animName = e.animation.name;

          if (animName == this.faceAnim[2]) {
            this.roleSpine.setAnimation(0, this.faceAnim[0], true);
          }
        };

        _proto.addBullet = function addBullet(num) {
          this.bulletNum += num;
        };

        return TD_Role;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "attackInterval", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "attackInterval1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TowerDefense", ['./TD_Bullet.ts', './TD_Cannon.ts', './TD_Enemy.ts', './TD_GameEnum.ts', './TD_Props.ts', './TD_Role.ts', './TowerDefenseGame.ts', './TowerDefenseView.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TowerDefenseGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TD_Cannon.ts', './GEventManager.ts', './Loader.ts', './PoolManager.ts', './TD_Bullet.ts', './UIManager.ts', './GameUIConfig.ts', './TableTowerDefenseData.ts', './TD_Enemy.ts', './TD_Role.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Node, v3, instantiate, Component, TD_Cannon, GEventManager, Event_Name, Loader, PoolManager, TD_Bullet, UIManager, UIID, TableTowerDefenseData, TD_Enemy, TD_Role;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      TD_Cannon = module.TD_Cannon;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      Loader = module.default;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      TD_Bullet = module.TD_Bullet;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      TableTowerDefenseData = module.TableTowerDefenseData;
    }, function (module) {
      TD_Enemy = module.TD_Enemy;
    }, function (module) {
      TD_Role = module.TD_Role;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "eff63U2xCRNpZlJA1XYeMhl", "TowerDefenseGame", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TowerDefenseGame = exports('TowerDefenseGame', (_dec = ccclass('TowerDefenseGame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TowerDefenseGame, _Component);

        function TowerDefenseGame() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.cannonNode = null;
          _this.cannonScript = null;
          _this.roleNode = null;
          _this.level = 0;
          _this.gameType = 0;
          _this.isTouch = false;
          _this.table = new TableTowerDefenseData();
          _this.cannonPos = v3();
          _this.bulletPrefab = null;
          _this.levelNode = null;
          _this.enemyPrefab = null;
          _this.enemyNum = 0;
          _this.isStop = true;
          _this.enemyEnd = false;
          _this.enemysData = [];
          _this.createrIdx = 0;
          _this.startPos = v3(400, -500);
          return _this;
        }

        var _proto = TowerDefenseGame.prototype;

        _proto.onLoad = function onLoad() {// PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
          //     EPhysics2DDrawFlags.Pair |
          //     EPhysics2DDrawFlags.CenterOfMass |
          //     EPhysics2DDrawFlags.Joint |
          //     EPhysics2DDrawFlags.Shape;
        };

        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this._touchStartEvent, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this);
          this.node.on(Node.EventType.TOUCH_END, this._touchEndEvent, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
          GEventManager.on(Event_Name.GAME_CREAT_BULLET, this.createrBullet, this);
          GEventManager.on(Event_Name.GAME_COLLECT_BULLET, this.roleCollectBullet, this);
          GEventManager.on(Event_Name.GAME_REFRESH_WEAPON, this.refreshRoleWeapon, this);
          GEventManager.on(Event_Name.GAME_UI_REFRESH_HP, this.refreshRoleHealthy, this);
          GEventManager.on(Event_Name.GAME_ENEMY_DIE, this.gameEnmeyDie, this);
          GEventManager.on(Event_Name.GAME_END, this.gameEnd, this);
          GEventManager.on(Event_Name.GAME_RETURN_HALL, this.returnHall, this);
        };

        _proto.init = function init(data) {
          var _this2 = this;

          this.isStop = false;
          this.level = data.level;
          this.gameType = data.gameType;
          this.enemyEnd = false;
          this.getLevelData();
          this.cannonNode = this.node.getChildByName('cannonNode');
          this.cannonScript = this.cannonNode.getComponent(TD_Cannon);
          this.cannonScript.init({
            cannonNum: this.table.Bullet
          });
          this.cannonNode.setPosition(v3(0, 500, 0));
          this.roleNode = this.node.getChildByName('role').getComponent(TD_Role);
          this.loadGameLevelNode();

          if (!this.bulletPrefab) {
            Loader.loadBundleRes('TowerDefense', 'Game/prefabs/bullet0', function (res) {
              _this2.bulletPrefab = res;
              PoolManager.instance().init('bullet0', _this2.bulletPrefab);
            });
          }

          if (!this.enemyPrefab) {
            var loadArr = ['Game/prefabs/enemy1'];
            Loader.loadBundleArray('TowerDefense', loadArr, function (res) {
              PoolManager.instance().init('enemy1', res[0]);

              _this2.startInitEnemys();
            });
          }

          this.roleNode.init();
        };

        _proto.getLevelData = function getLevelData() {
          this.table.init(this.level);
          this.setEnemysData(this.table.Enemys);
        };

        _proto.loadGameLevelNode = function loadGameLevelNode() {
          var _this3 = this;

          Loader.loadBundleRes('TowerDefense', 'Game/prefabs/' + this.table.Name, function (res) {
            _this3.levelNode = instantiate(res);

            _this3.levelNode.setParent(_this3.node);

            _this3.levelNode.setPosition(v3(0, 0, 0));

            _this3.levelNode.active = true;
          });
        };

        _proto.update = function update(deltaTime) {} //#region 大炮移动
        ;

        _proto._touchStartEvent = function _touchStartEvent(event) {
          this.isTouch = true;
          this.cannonScript.setAttackState(true);
        };

        _proto._touchMoveEvent = function _touchMoveEvent(event) {
          if (this.isStop) {
            return;
          }

          var touchDelta = event.getUIDelta();
          this.cannonPos = this.cannonNode.getPosition();
          this.cannonPos.x += touchDelta.x * 2.5;
          this.cannonPos.x = this.cannonPos.x < -300 ? -300 : this.cannonPos.x;
          this.cannonPos.x = this.cannonPos.x > 300 ? 300 : this.cannonPos.x;
          this.cannonNode.setPosition(this.cannonPos);
        };

        _proto._touchEndEvent = function _touchEndEvent(event) {
          this.isTouch = false;
          this.cannonScript.setAttackState(false);
        } //#region 子弹方面
        ;

        _proto.createrBullet = function createrBullet(data) {
          var _this4 = this;

          if (this.isStop) {
            return;
          }

          if (!this.bulletPrefab) {
            return;
          }

          this.scheduleOnce(function () {
            var bullet = PoolManager.instance().getPoolNode('bullet0');
            bullet.setParent(_this4.node.getChildByName('bullets'));
            bullet.setWorldPosition(data.wordPos);
            bullet.getComponent(TD_Bullet).init(data);
            bullet.active = true;
          });
        };

        _proto.putAllBullet = function putAllBullet() {
          var len = this.node.getChildByName('bullets').children.length;

          for (var i = 0; i < len; i++) {
            PoolManager.instance().putNode('bullet0', this.node.getChildByName('bullets').children[0]);
          }
        };

        _proto.putAllEnemys = function putAllEnemys() {
          var len = this.node.getChildByName('enemys').children.length;

          for (var i = 0; i < len; i++) {
            PoolManager.instance().putNode('enemy1', this.node.getChildByName('enemys').children[0]);
          }
        } //#region 怪物方面
        ; //-620


        _proto.setEnemysData = function setEnemysData(data) {
          this.enemysData = [];
          this.createrIdx = 0;
          var enemys = data.split("|");

          for (var i = 0; i < enemys.length; i++) {
            var enemysInfo = enemys[i].split(":");
            this.enemysData.push({
              time: enemysInfo[0],
              enemys: enemysInfo.splice(1)
            });
          }
        };

        _proto.startInitEnemys = function startInitEnemys() {
          var _this5 = this;

          this.scheduleOnce(function () {
            var addX = 0;

            for (var i = 0; i < _this5.enemysData[_this5.createrIdx].enemys.length / 2; i++) {
              for (var n = 0; n < _this5.enemysData[_this5.createrIdx].enemys[i * 2 + 1]; n++) {
                _this5.createEnemy({
                  id: _this5.enemysData[_this5.createrIdx].enemys[i * 2],
                  pos: v3(_this5.startPos.x + 40 * (Math.floor(n / 3) + addX / 3), _this5.startPos.y - n % 3 * 60)
                });

                console.log(Math.floor(n / 3) + addX / 3);
              }

              addX += _this5.enemysData[_this5.createrIdx].enemys[i * 2 + 1];
            }

            _this5.createrIdx++;

            if (_this5.createrIdx >= _this5.enemysData.length) {
              console.log('出怪结束');
              _this5.enemyEnd = true;
              return;
            }

            _this5.startInitEnemys();
          }, this.enemysData[this.createrIdx].time);
        };

        _proto.createEnemy = function createEnemy(data) {
          this.enemyNum++;
          var enemy = PoolManager.instance().getPoolNode('enemy1');
          enemy.setParent(this.node.getChildByName('enemys'));
          enemy.setPosition(data.pos);
          enemy.getComponent(TD_Enemy).init(data);
        };

        _proto.gameEnmeyDie = function gameEnmeyDie() {
          this.enemyNum--;
          console.log(this.enemyNum);

          if (this.enemyEnd && this.enemyNum <= 0) {
            console.log('游戏胜利');
            this.isStop = true;
            UIManager.GetInstance().ShowUIForms(UIID.WinUI, {
              isWin: true,
              level: this.level
            });
            this.initMap();
          }
        } //#region 角色方面
        ;

        _proto.roleCollectBullet = function roleCollectBullet(num) {
          this.roleNode.addBullet(num);
        };

        _proto.refreshRoleWeapon = function refreshRoleWeapon() {
          this.roleNode.refreshWeapon();
        };

        _proto.refreshRoleHealthy = function refreshRoleHealthy(attack) {
          this.roleNode.refreshHealth(attack);
        };

        _proto.gameEnd = function gameEnd(is) {
          console.log('游戏结束');
          UIManager.GetInstance().ShowUIForms(UIID.WinUI, {
            isWin: false,
            level: this.level
          });
          this.initMap();
        };

        _proto.initMap = function initMap() {
          this.putAllBullet();
          this.putAllEnemys();
          this.cannonScript.isStop = true;
          this.roleNode.isStop = true;
          this.levelNode.destroy();
        };

        _proto.returnHall = function returnHall() {
          this.isStop = true;
          this.bulletPrefab = null;
          this.enemyPrefab = null;
          this.putAllBullet();
          this.levelNode.destroy();
          PoolManager.instance().clearPool('bullet0');
          PoolManager.instance().clearPool('enemy1');
          UIManager.GetInstance().CloseUIForms(UIID.TowerDefenseView);
        };

        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this._touchStartEvent, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this);
          this.node.off(Node.EventType.TOUCH_END, this._touchEndEvent, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
          GEventManager.off(Event_Name.GAME_CREAT_BULLET, this.createrBullet, this);
          GEventManager.off(Event_Name.GAME_COLLECT_BULLET, this.roleCollectBullet, this);
          GEventManager.off(Event_Name.GAME_REFRESH_WEAPON, this.refreshRoleWeapon, this);
          GEventManager.off(Event_Name.GAME_UI_REFRESH_HP, this.refreshRoleHealthy, this);
          GEventManager.off(Event_Name.GAME_ENEMY_DIE, this.gameEnmeyDie, this);
          GEventManager.off(Event_Name.GAME_END, this.gameEnd, this);
          GEventManager.off(Event_Name.GAME_RETURN_HALL, this.returnHall, this);
        };

        return TowerDefenseGame;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TowerDefenseView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './TowerDefenseGame.ts', './GameManager.ts', './GEventManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseUIForm, TowerDefenseGame, GameManager, GEventManager, Event_Name;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      TowerDefenseGame = module.TowerDefenseGame;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "819d1IIWxRFy7RFAtwuNkUf", "TowerDefenseView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TowerDefenseView = exports('TowerDefenseView', (_dec = ccclass('TowerDefenseView'), _dec(_class = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(TowerDefenseView, _BaseUIForm);

        function TowerDefenseView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;
          _this.tdGame = null;
          return _this;
        }

        var _proto = TowerDefenseView.prototype;

        _proto.onEnable = function onEnable() {
          GEventManager.on(Event_Name.GAME_AGAIN_LEVEL, this.againLevelGame, this);
          GEventManager.on(Event_Name.GAME_NEXT_LEVEL, this.nextLevelGame, this);
        };

        _proto.init = function init() {
          this.tdGame = this.node.getChildByName('game').getComponent(TowerDefenseGame);
          this.tdGame.init({
            level: 0,
            gameType: 0
          });
        };

        _proto.OnClickEvent_changerWearom = function OnClickEvent_changerWearom() {};

        _proto.OnClickEvent_returnHall = function OnClickEvent_returnHall() {
          GameManager.instance().ExitGame();
        };

        _proto.againLevelGame = function againLevelGame(data) {
          this.tdGame.init({
            level: data.level,
            gameType: 0
          });
        };

        _proto.nextLevelGame = function nextLevelGame(data) {
          this.tdGame.init({
            level: data.level,
            gameType: 0
          });
        };

        _proto.onDisable = function onDisable() {
          GEventManager.off(Event_Name.GAME_AGAIN_LEVEL, this.againLevelGame, this);
          GEventManager.off(Event_Name.GAME_NEXT_LEVEL, this.nextLevelGame, this);
        };

        return TowerDefenseView;
      }(BaseUIForm)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/TowerDefense', 'chunks:///_virtual/TowerDefense'); 
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