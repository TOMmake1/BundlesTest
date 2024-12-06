System.register("chunks:///_virtual/AdaptationManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SysDefine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, find, view, log, WidgetComponent, Component, SysDefine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      view = module.view;
      log = module.log;
      WidgetComponent = module.WidgetComponent;
      Component = module.Component;
    }, function (module) {
      SysDefine = module.SysDefine;
    }],
    execute: function () {
      exports('AdaptationType', void 0);

      var _dec, _class, _class2;

      cclegacy._RF.push({}, "7ab4al9kSBKHKyMfSkGfwsy", "AdaptationManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AdaptationManager = exports('default', (_dec = ccclass('AdaptationManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdaptationManager, _Component);

        function AdaptationManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.VisibleSize = void 0;
          return _this;
        } // 单例


        AdaptationManager.GetInstance = function GetInstance() {
          if (this._Instance == null) {
            this._Instance = find(SysDefine.SYS_UIAdaptation_NAME).addComponent(this);
          }

          return this._Instance;
        }
        /** 屏幕尺寸 */
        ;

        var _proto = AdaptationManager.prototype;

        _proto.onLoad = function onLoad() {
          this.VisibleSize = view.getFrameSize();
          log("\u5F53\u524D\u5C4F\u5E55\u5C3A\u5BF8\u4E3A" + this.VisibleSize);
        };

        _proto.start = function start() {}
        /**
         * 适配靠边的UI
         * @param type 
         * @param node 
         * @param distance 
         */
        ;

        _proto.adaptationFormByType = function adaptationFormByType(type, node, distance) {
          var widget = node.getComponent(WidgetComponent);

          if (widget) {
            log("\u5DF2\u7ECF\u6DFB\u52A0\u4E86widget\u7EC4\u4EF6");
          } else {
            widget = node.addComponent(WidgetComponent);
          }

          switch (type) {
            case AdaptationType.Top:
              // if () {     //小游戏适配刘海屏
              //     let menuInfo = window["wx"].getMenuButtonBoundingClientRect();
              //     let systemInfo = window["wx"].getSystemInfoSync();
              //     distance = cc.find("Canvas").height * (menuInfo.top / systemInfo.screenHeight);
              // }
              widget.top = distance ? distance : 0;
              widget.isAbsoluteTop = true;
              widget.isAlignTop = true;
              break;

            case AdaptationType.Bottom:
              widget.bottom = distance ? distance : 0;
              widget.isAbsoluteBottom = true;
              widget.isAlignBottom = true;
              break;

            case AdaptationType.Left:
              widget.left = distance ? distance : 0;
              widget.isAbsoluteLeft = true;
              widget.isAlignLeft = true;
              break;

            case AdaptationType.Right:
              widget.right = distance ? distance : 0;
              widget.isAbsoluteRight = true;
              widget.isAlignRight = true;
              break;
          }

          widget.target = find("Canvas");
          widget.updateAlignment();
        }
        /** 移除 */
        ;

        _proto.removeAdaptationToForm = function removeAdaptationToForm(node) {
          if (node.getComponent(WidgetComponent)) {
            node.removeComponent(WidgetComponent);
          }
        };

        return AdaptationManager;
      }(Component), _class2._Instance = null, _class2)) || _class));
      /**  */

      var AdaptationType;

      (function (AdaptationType) {
        AdaptationType[AdaptationType["Top"] = 1] = "Top";
        AdaptationType[AdaptationType["Bottom"] = 2] = "Bottom";
        AdaptationType[AdaptationType["Left"] = 3] = "Left";
        AdaptationType[AdaptationType["Right"] = 4] = "Right";
      })(AdaptationType || (AdaptationType = exports('AdaptationType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdBridge.ts", ['cc', './BridgeManager.ts'], function (exports) {
  'use strict';

  var cclegacy, BridgeManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BridgeManager = module.BridgeManager;
    }],
    execute: function () {
      exports('GameType', void 0);

      cclegacy._RF.push({}, "e6ffcpgtJpIu5JWyAWf7F4L", "AdBridge", undefined);
      /**
       *
       * AdBridge
       * Describe:
       * Wed Jan 04 2023 16:18:36 GMT+0800 (中国标准时间)
       * AdBridge.ts
       * db://assets/Scripts/FrameWork/AD/AdBridge.ts
       * https://docs.cocos.com/creator/3.6/manual/zh/
       *
       */

      /**
       * 游戏类型
       */


      var GameType;

      (function (GameType) {
        GameType["DrawLineMatch"] = "DrawLineMatch";
        GameType["DrawLineMatchFood"] = "DrawLineMatchFood";
        GameType["DrawLineDestroyFilm"] = "DrawLineDestroyFilm";
        GameType["FindWrongCharacter"] = "FindWrongCharacter";
        GameType["FindWrongPic"] = "FindWrongPic";
        GameType["FindCharacter"] = "FindCharacter";
        GameType["DrawSentence"] = "DrawSentence";
        GameType["OneLineCharacter"] = "OneLineCharacter";
        GameType["IdiomEmo"] = "IdiomEmo";
        GameType["IdiomMaster"] = "IdiomMaster";
        GameType["None"] = "None";
      })(GameType || (GameType = exports('GameType', {})));

      var AdBridge = exports('AdBridge', /*#__PURE__*/function () {
        function AdBridge() {}
        /**
         * 是否为抖音小游戏
         */

        /**
         * 是否为小游戏
         */

        /**
         * 设置小游戏模式
         * @param isMiniGame 是否为小游戏
         */


        AdBridge.SetMiniGame = function SetMiniGame(isMiniGame, isTikTokGame) {
          if (isTikTokGame === void 0) {
            isTikTokGame = false;
          }

          AdBridge.isMiniGame = isMiniGame;
          AdBridge.isTikTokMiniGame = isTikTokGame;
        };

        AdBridge.ShowRewardVideo = function ShowRewardVideo(successFunc, failFunc) {
          BridgeManager.Instance().ShowRewardVideo(successFunc, failFunc);
        }
        /**
         * StartGame  和 进入主页同时
         */
        ;

        AdBridge.StartGame = function StartGame() {
          BridgeManager.Instance().CallJavaFunc('StartGame');
        }
        /**
         * 进入主页
         */
        ;

        AdBridge.HomePage = function HomePage() {
          BridgeManager.Instance().CallJavaFunc('HomePage');
        }
        /**
         * 点击设置
         */
        ;

        AdBridge.OnClickSettingBtn = function OnClickSettingBtn() {
          BridgeManager.Instance().CallJavaFunc('OnClickSettingBtn');
        }
        /**
         * 关闭设置界面
         */
        ;

        AdBridge.OnClickCloseSettingBtn = function OnClickCloseSettingBtn() {
          BridgeManager.Instance().CallJavaFunc('OnClickCloseSettingBtn');
        }
        /**
         * 点击暂停
         */
        ;

        AdBridge.OnClickPauseBtn = function OnClickPauseBtn() {
          BridgeManager.Instance().CallJavaFunc('OnClickPauseBtn');
        }
        /**
         * 关闭暂停界面
         */
        ;

        AdBridge.OnClickClosePauseBtn = function OnClickClosePauseBtn() {
          BridgeManager.Instance().CallJavaFunc('OnClickClosePauseBtn');
        }
        /**
         * 点击进入游戏
         */
        ;

        AdBridge.PlayGame = function PlayGame(gameType) {
          BridgeManager.Instance().CallJavaFunc('PlayGame'); //, gameType
        }
        /**
         * 游戏胜利
         */
        ;

        AdBridge.OnGameSuccess = function OnGameSuccess(gameType) {
          BridgeManager.Instance().CallJavaFunc('OnGameSuccess'); //, gameType
        }
        /**
         * 游戏失败
         */
        ;

        AdBridge.OnGameFail = function OnGameFail(gameType) {
          BridgeManager.Instance().CallJavaFunc('OnGameFail'); //, gameType
        }
        /**
         * 点击下一关
         */
        ;

        AdBridge.NextLevel = function NextLevel(gameType) {
          BridgeManager.Instance().CallJavaFunc('NextLevel'); //, gameType
        }
        /**
         * 返回主页
         */
        ;

        AdBridge.ExitGame = function ExitGame(gameType) {
          BridgeManager.Instance().CallJavaFunc('ExitGame'); //, gameType
        } // /**
        //  * 重新开始
        //  */
        // public static RestartGame(gameType: GameType) {
        //   if (AdBridge.isMiniGame) {
        //     // AdManager.getInstance().hideCustomAd();
        //     // AdManager.getInstance().showBanner();
        //   } else {
        //     BridgeManager.Instance().CallJavaFuncWithString('RestartGame', gameType);
        //   }
        //   AdBridge.isFromRewardedAd = false;
        // }
        // /**
        //  * 跳过游戏用作上报
        //  * @param gameType
        //  */
        // public static SkipGame(gameType: GameType) {
        //   if (!AdBridge.isMiniGame) {
        //     BridgeManager.Instance().CallJavaFuncWithString('SkipGame', gameType);
        //   }
        // }
        // /**
        //  * 显示游戏提示用作上报
        //  * @param gameType
        //  */
        // public static ShowGameTip(gameType: GameType) {
        //   if (!AdBridge.isMiniGame) {
        //     BridgeManager.Instance().CallJavaFuncWithString('ShowGameTip', gameType);
        //   }
        // }
        ;

        return AdBridge;
      }());
      AdBridge.isTikTokMiniGame = false;
      AdBridge.isMiniGame = true;
      AdBridge.isFromRewardedAd = false;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AddTimeTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './GEventManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseUIForm, GEventManager, Event_Name;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "48d26nUWANAS4opq2/c/fd0", "AddTimeTip", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AddTimeTip = exports('AddTimeTip', (_dec = ccclass('AddTimeTip'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(AddTimeTip, _BaseUIForm);

        function AddTimeTip() {
          return _BaseUIForm.apply(this, arguments) || this;
        }

        var _proto = AddTimeTip.prototype;

        _proto.init = function init() {};

        _proto.onClickEvent_closeUI = function onClickEvent_closeUI() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          this.CloseUIForm();
          GEventManager.emit(Event_Name.WATER_CLICK_CONTINUE, null);
        };

        _proto.onClickEvent_AddTimeUI = function onClickEvent_AddTimeUI() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          this.CloseUIForm(); // AdManager.getInstance().showVideo((isSucceed?: number | string, code?: string) => {
          //     if (isSucceed === '999') {
          //         console.log('无网络，广告加载失败！');
          //         return;
          //     }
          //     if (isSucceed && isSucceed === 1) {

          GEventManager.emit(Event_Name.WATER_TIME_UP_ADD_TIME, null); //     } else {
          //         GEventManager.emit(Event_Name.WATER_CLICK_CONTINUE,null);
          //     }
          // });
        };

        return AddTimeTip;
      }(BaseUIForm), _class2.prefabPath = "UIForms/AddTimeTip", _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdIconInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, assetManager, SpriteFrame, Component, AdManager;

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
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      AdManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "5c586hp6wFPyo+2iYD8h44A", "AdIconInfo", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AdIconInfo = exports('AdIconInfo', (_dec = ccclass('AdIconInfo'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdIconInfo, _Component);

        function AdIconInfo() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "close_btn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "click", _descriptor3, _assertThisInitialized(_this));

          _this.nativeInfo = null;
          return _this;
        }

        var _proto = AdIconInfo.prototype;

        _proto.onEnable = function onEnable() {
          this.initView();
          this.addEvent();
        };

        _proto.initView = function initView() {
          var _this2 = this;

          this.nativeInfo = AdManager.getInstance().showNativeIconAd();
          console.log("原生icon=====>");
          this.click && (this.click.active = false);

          if (this.nativeInfo && this.nativeInfo.adId && (this.nativeInfo.Native_icon_url || this.nativeInfo.Native_BigImage_url)) {
            AdManager.getInstance().reportNativeIconShow(this.nativeInfo.adId);
            var icon_image_url = this.nativeInfo.Native_icon_url;

            if (!icon_image_url) {
              icon_image_url = this.nativeInfo.Native_BigImage_url;
            }

            this.loadAdSprite(this.icon.getComponent(Sprite), icon_image_url);
            this.click && (this.click.active = true);
          } else {
            this.node.active = false;
          }

          setTimeout(function () {
            if (_this2.node && _this2.node.active) {
              AdManager.getInstance().loadNativeIcon();

              _this2.initView();
            }
          }, 30000);
        };

        _proto.addEvent = function addEvent() {
          this.node.on("click", this.nativeClick, this);
          this.click && this.click.on("click", this.nativeClick, this);
          this.close_btn.on("click", this.closeThisNode, this);
        };

        _proto.nativeClick = function nativeClick() {
          AdManager.getInstance().reportNativeIconClick(this.nativeInfo.adId);
          this.node.active = false;
        };

        _proto.closeThisNode = function closeThisNode() {
          this.node.active = false;
          this.click && (this.click.active = false);
        };

        _proto.onDisable = function onDisable() {
          AdManager.getInstance().loadNativeIcon();
        };

        _proto.loadAdSprite = function loadAdSprite(nodesprite, url) {
          if (url.indexOf('.png') > -1 || url.indexOf('.jpg') > -1) {
            assetManager.loadRemote(url, function (err, texture) {
              if (err != null || texture == null) {
                return;
              }

              console.log('====>', texture);
              nodesprite.spriteFrame = SpriteFrame.createWithImage(texture);
            }.bind(this));
            return;
          }

          assetManager.loadRemote(url, {
            ext: '.png'
          }, function (err, texture) {
            if (err != null || texture == null) {
              return;
            }

            console.log('====>', texture);
            nodesprite.spriteFrame = SpriteFrame.createWithImage(texture);
          }.bind(this));
        };

        return AdIconInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "close_btn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "click", [_dec4], {
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

System.register("chunks:///_virtual/AdManager.ts", ['cc', './OppoADApi.ts', './VivoADApi.ts', './AdsIdConfig.ts', './CloseADApi.ts', './TiktokADApi.ts', './KSADApi.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, director, OppoADApi, VivoADApi, EPlatform, AdsIdConfig, AdType, CloseADApi, TiktokADApi, KSADApi;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
    }, function (module) {
      OppoADApi = module.default;
    }, function (module) {
      VivoADApi = module.default;
    }, function (module) {
      EPlatform = module.EPlatform;
      AdsIdConfig = module.default;
      AdType = module.AdType;
    }, function (module) {
      CloseADApi = module.CloseADApi;
    }, function (module) {
      TiktokADApi = module.default;
    }, function (module) {
      KSADApi = module.default;
    }],
    execute: function () {
      exports('ResultEnum', void 0);

      var _class, _class2;

      cclegacy._RF.push({}, "f7b27YEFl9CpKx/aJfmJ0gn", "AdManager", undefined); //#region TikTok部分 2023.02.02
      //********备注:必须有录屏分享,时长不能少于3s，关卡时长明显大于15s，录屏必须大于15s，游戏中场景不能有广告********
      //开始录屏  AdManager.getInstance().StartRecorder();
      //停止录屏  AdManager.getInstance().stopRecordScreen();
      //分享录屏,要停止录屏后才可以分享           AdManager.getInstance().ShareVideo('游戏名', 'appid', 回调);
      //显示banner         AdManager.getInstance().showBanner();
      //隐藏banner         AdManager.getInstance().hideBanner();
      //显示插屏           AdManager.getInstance().showInsertAd();
      //激励视频           AdManager.getInstance().showVideo((param)=>{param为true为回调成功,false回调失败});
      //#endregion
      //#region oppo部分  2023.02.02  推荐的最低版本号 1060(界面只能出现一个广告,原生广告不能遮挡按钮)
      //显示banner         AdManager.getInstance().showBanner();
      //隐藏banner         AdManager.getInstance().hideBanner();
      //激励视频           AdManager.getInstance().showVideo((param)=>{param为true为回调成功,false回调失败});
      //显示原生模板广告   AdManager.getInstance().showCustomAd();    //位置需要在OppoADApi中调节customAdTop,默认居中
      //隐藏原生模板广告   AdManager.getInstance().hideCustomAd();    //位置需要在OppoADApi中调节customAdTop,默认居中
      //显示九宫格广告     AdManager.getInstance().showNavigateBoxPortal();
      //#endregion
      //#region vivo部分 2023.02.03 最低版本建议填写 1081 1078
      //显示banner         AdManager.getInstance().showBanner();
      //隐藏banner         AdManager.getInstance().hideBanner();
      //显示插屏           AdManager.getInstance().showInsertAd();
      //激励视频           AdManager.getInstance().showVideo((param)=>{param为true为回调成功,false回调失败});
      //显示原生模板广告   AdManager.getInstance().showCustomAd();
      //隐藏原生模板广告   AdManager.getInstance().hideCustomAd();
      //显示九宫格广告     AdManager.getInstance().showNavigateBoxPortal();
      //#endregion
      //#region 华为部分  2023.02.06
      //显示banner         AdManager.getInstance().showBanner();
      //隐藏banner         AdManager.getInstance().hideBanner();
      //原生广告      将UI/下的ad预制体放入指定场景,获取AdNativeInfo组件执行ADInit方法
      //激励视频      AdManager.getInstance().showVideo((param)=>{param为true为回调成功,false回调失败});
      //#endregion
      //#region 小米部分
      //显示banner         AdManager.getInstance().showBanner();
      //隐藏banner         AdManager.getInstance().hideBanner();
      //#endregion
      //#endregion


      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ResultEnum;

      (function (ResultEnum) {
        ResultEnum[ResultEnum["Success"] = 1] = "Success";
        ResultEnum[ResultEnum["Fail"] = 2] = "Fail";
      })(ResultEnum || (ResultEnum = exports('ResultEnum', {})));

      var AdManager = exports('default', ccclass(_class = (_class2 = /*#__PURE__*/function () {
        function AdManager() {
          this.platform = EPlatform.Close;
          this.platformAdApi = null;
          this.sceneIdx = 0;
          this.transactionId = 9999453654545895165;
          this.gameClubBtn = null;
          this.ADNewInterval = [];
          this.ADNewAdAry = [];
          this.CustomType12_interval = [];
          this.ADNewNativeType12_interval = [];
          this.PassiveVideo_interval = 0;
          this.AdCustomBanner_interval = 0;
        }

        AdManager.getInstance = function getInstance() {
          if (this._adManager == null) {
            this._adManager = new AdManager();
          }

          return this._adManager;
        };

        var _proto = AdManager.prototype;

        _proto.onInit = function onInit(_callBack) {
          var _this = this;

          switch (this.platform) {
            case EPlatform.Close:
              this.platformAdApi = new CloseADApi();
              break;

            case EPlatform.OPPO:
              this.platformAdApi = new OppoADApi();
              break;

            case EPlatform.VIVO:
              this.platformAdApi = new VivoADApi();
              break;

            case EPlatform.TikTok:
              this.platformAdApi = new TiktokADApi();
              break;
            // case EPlatform.HUAWEI:
            //     this.platformAdApi = new HuaWeiADApi();
            //     break;
            // case EPlatform.XiaoMi:
            //     this.platformAdApi = new XmADApi();
            //     break;
            // case EPlatform.QQ:
            //     this.platformAdApi = new QQADApi();
            //     break;
            //   case EPlatform.WX:
            // this.platformAdApi = new WXADApi();
            // break;

            case EPlatform.KS:
              this.platformAdApi = new KSADApi();
              break;
          }

          AdsIdConfig.getAdConfigWeb(function () {
            _this.startLoadAd(_callBack);
          });
        };

        _proto.startLoadAd = function startLoadAd(_callBack) {
          var _this$platformAdApi;

          if (AdsIdConfig.adConfig != null) {
            this.platformAdApi.ADNewConfig = [];
            this.setAllAdConfig();
          }

          (_this$platformAdApi = this.platformAdApi) == null ? void 0 : _this$platformAdApi.onInit(_callBack);
        }
        /**
         * 服务器配置相关
         */
        ;

        _proto.setAllAdConfig = function setAllAdConfig() {
          // console.log("setAllAdConfig");

          /**
           * 设置所有参数
           *
           * {"status":200,"date":1649225421431,"data":{
           *              "package_name":"com.changwan.com.ttdjs.meta",
           *              "is_online":1, 测试上线
           *              "vendor_appid":"a609bccee0e461,262c1a96aba11f8052279fd0a880a1e1",
           *              "app_key":null,"tdk":"EF7F0E36374B420E932EB57E5532FC11",
           *              "cn":"233","umk":null,
           *              "positions":
           *
           *   {"position_id":"10006223",
           *    "probability":0.0, 概率
           *    "ad_interval":90,  间隔
           *     "day_limits":0,   每日次数
           *        "ad_type":1,   广告类型
           * vendor_position":"b609bcd76482a8",
           *            "dtc":0.0,每天总点击
           *            "dcr":0.0,误点概率
           *        "enabled":false} 是否开启
           */
          // 所有广告开关
          var ad_Datas = AdsIdConfig.adConfig.data.positions;

          for (var i = 0; i < ad_Datas.length; i++) {
            // console.log("MiniGame adType: "+ad_Datas[i].ad_type+" posid: "+ad_Datas[i]?.vendor_position);
            if (ad_Datas[i].vendor_position && ad_Datas[i].enabled) {
              if (ad_Datas[i].ad_type == AdType.Banner) {
                this.platformAdApi.SystemBannerData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.插屏) {
                this.platformAdApi.SystemIntersData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.激励视频) {
                this.platformAdApi.VideoData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.原生Banner) {
                this.platformAdApi.NativeBannerData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.原生插屏) {
                this.platformAdApi.NativeIntersData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.原生开屏) {
                //互推九宫格
                this.platformAdApi.JGGBoxData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.浮标) {
                //互推banner
                this.platformAdApi.BlockData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.原生模板) {
                //原生模板
                this.platformAdApi.AdCustomIntersData = ad_Datas[i];
              } else if (ad_Datas[i].ad_type == AdType.原生模板渲染) {
                // 新策略
                if (ad_Datas[i].position_id == 10132610 && AdsIdConfig.platform == EPlatform.VIVO) {
                  // 【m】原生模板渲染1
                  // AdCustomTypeData;
                  this.platformAdApi.AdCustomTypeData[1] = ad_Datas[i];
                } else if (ad_Datas[i].position_id == 10132611 && AdsIdConfig.platform == EPlatform.VIVO) {
                  // 【n】原生模板渲染2
                  // AdCustomTypeData;
                  this.platformAdApi.AdCustomTypeData[2] = ad_Datas[i];
                } else if (ad_Datas[i].position_id == 10133516 && AdsIdConfig.platform == EPlatform.OPPO) {
                  // 【m】原生模板渲染1
                  // AdCustomTypeData;
                  this.platformAdApi.AdCustomTypeData[1] = ad_Datas[i];
                } else if (ad_Datas[i].position_id == 10133517 && AdsIdConfig.platform == EPlatform.OPPO) {
                  // 【n】原生模板渲染2
                  // AdCustomTypeData;
                  this.platformAdApi.AdCustomTypeData[2] = ad_Datas[i];
                }
              } else if (ad_Datas[i].ad_type == AdType.全屏视频) {
                //原生icon
                if (AdsIdConfig.platform == EPlatform.VIVO) {
                  this.platformAdApi.AdCustomIntersData = ad_Datas[i];
                } else {
                  this.platformAdApi.NativeIconData = ad_Datas[i];
                }
              } // 往下是 新策略的 广告位配置
              else if (ad_Datas[i].ad_type == AdType.被动激励) {
                  // 被动激励 【j】
                  if (ad_Datas[i].position_id == 10132606 && AdsIdConfig.platform == EPlatform.VIVO) {
                    this.platformAdApi.PassiveVideoData = ad_Datas[i];
                  } else if (ad_Datas[i].position_id == 10133512 && AdsIdConfig.platform == EPlatform.OPPO) {
                    this.platformAdApi.PassiveVideoData = ad_Datas[i];
                  }
                } else if (ad_Datas[i].ad_type == AdType.原生自渲染) {
                  // 原生自渲染
                  if (ad_Datas[i].position_id == 10132608) {
                    // 【s】原生自渲染1
                    // ADNewNativeTypeData
                    this.platformAdApi.ADNewNativeTypeData[1] = ad_Datas[i];
                  } else if (ad_Datas[i].position_id == 10132609) {
                    // 【t】原生自渲染2
                    // ADNewNativeTypeData
                    this.platformAdApi.ADNewNativeTypeData[2] = ad_Datas[i];
                    console.log(this.platformAdApi.ADNewNativeTypeData[2]);
                    console.log("this.platformAdApi.ADNewNativeTypeData[2]3333333333333333333");
                  }
                } else if (ad_Datas[i].ad_type == AdType.策略特异性点击 || ad_Datas[i].ad_type == AdType.策略其他点击 || ad_Datas[i].ad_type == AdType.策略过关非屏蔽地区 || ad_Datas[i].ad_type == AdType.策略过关屏蔽地区 || ad_Datas[i].ad_type == AdType.策略兜底 || ad_Datas[i].ad_type == AdType.策略banner || ad_Datas[i].ad_type == AdType.标识非屏蔽地区 || ad_Datas[i].ad_type == AdType.样式原生icon || ad_Datas[i].ad_type == AdType.样式信息流banner) {
                  this.platformAdApi.ADNewConfig[ad_Datas[i].ad_type] = ad_Datas[i];
                  console.log(this.platformAdApi.ADNewConfig[ad_Datas[i].ad_type]);
                } else if (ad_Datas[i].ad_type == AdType.信息流banner) {
                  // 【h】信息流banner
                  if (ad_Datas[i].position_id == 10132604 && AdsIdConfig.platform == EPlatform.VIVO) {
                    this.platformAdApi.AdCustomBannerData = ad_Datas[i];
                  }
                } else {
                  console.log(ad_Datas[i].ad_type);
                }
            }
          }
        };

        _proto.setGroup = function setGroup(group) {
          this.platformAdApi && this.platformAdApi.setGroup(group);
        }
        /**登录 */
        ;

        _proto.onLogin = function onLogin(_callback) {
          this.platformAdApi && this.platformAdApi.onLogin(_callback);
        }
        /**分享游戏链接 */
        ;

        _proto.onShare = function onShare(_callback) {
          this.platformAdApi && this.platformAdApi.onShare(_callback);
        }
        /**展示banner */
        ;

        _proto.showBanner = function showBanner(isSucceed) {
          if (AdsIdConfig.platform == EPlatform.Close) {
            return;
          }

          this.platformAdApi && this.platformAdApi.showBanner(isSucceed);
        }
        /**隐藏banner */
        ;

        _proto.hideBanner = function hideBanner() {
          this.platformAdApi && this.platformAdApi.hideBanner();
        };

        _proto.setSceneIdx = function setSceneIdx(idx) {
          this.sceneIdx = idx;
        };

        _proto.getSceneIdx = function getSceneIdx() {
          return this.sceneIdx;
        }
        /**展示激励视频 */
        ;

        _proto.showVideo = function showVideo(_successCallback, isStop) {
          if (isStop === void 0) {
            isStop = true;
          } // this.platformAdApi && this.platformAdApi.showVideo(_successCallback);


          director.pause(); // if (sys.isBrowser) {
          //   director.resume();
          //   _successCallback(1);
          //   return;
          // }

          if (AdsIdConfig.platform == EPlatform.Close || AdsIdConfig.platform !== EPlatform.WX) {
            director.resume();
            this.platformAdApi && this.platformAdApi.showVideo(_successCallback);
            return;
          }

          this.platformAdApi.showVideo(function (_result) {
            if (isStop) {
              director.resume();
            }

            if (_result) {
              _successCallback(1);
            } else {
              _successCallback(2);
            }
          });
        }
        /**展示插屏 */
        ;

        _proto.showInsertAd = function showInsertAd(isSucceed) {
          if (AdsIdConfig.platform == EPlatform.Close) {
            return;
          }

          this.platformAdApi && this.platformAdApi.showInsertAd(isSucceed);
        }
        /**
         * 显示模板原生广告
         */
        ;

        _proto.showCustomAd = function showCustomAd() {
          this.platformAdApi && this.platformAdApi.showCustomAd();
        };

        _proto.hideCustomAd = function hideCustomAd() {
          this.platformAdApi && this.platformAdApi.hideCustomAd();
        };

        _proto.showCustomIconAd = function showCustomIconAd() {
          this.platformAdApi && this.platformAdApi.showCustomIconAd();
        };

        _proto.hideCustomIconAd = function hideCustomIconAd() {
          this.platformAdApi && this.platformAdApi.hideCustomIconAd();
        }
        /**展示原生大图 */
        ;

        _proto.showNativeImageAd = function showNativeImageAd() {
          return this.platformAdApi.getNativeAdInfo(0);
        }
        /**
         * 小米展示原生大图
         * @param _infoCallback
         * @returns
         */
        ;

        _proto.showXMNativeImageAd = function showXMNativeImageAd(_infoCallback) {
          return this.platformAdApi.getNativeAdInfo(_infoCallback);
        }
        /**华为展示原生大图 */
        ;

        _proto.showHWNativeImageAd = function showHWNativeImageAd(_infoCallback) {
          return this.platformAdApi.getHWNativeAdInfo(_infoCallback);
        }
        /**原生大图 被点击 */
        ;

        _proto.onNativeAdClick = function onNativeAdClick(_id) {
          this.platformAdApi && this.platformAdApi.reportNativeImageClick(_id);
        }
        /**原生大图 展示 */
        ;

        _proto.onNativeReportAdShow = function onNativeReportAdShow(_id) {
          this.platformAdApi && this.platformAdApi.reportNativeImageShow(_id);
        }
        /**刷新原生大图广告 */
        ;

        _proto.loadNativeImage = function loadNativeImage() {
          this.platformAdApi && this.platformAdApi.loadNativeImage();
        }
        /**展示原生icon */
        ;

        _proto.showNativeIconAd = function showNativeIconAd() {
          return this.platformAdApi && this.platformAdApi.getNativeIconAdInfo(0);
        }
        /**原生icon被点击 */
        ;

        _proto.reportNativeIconClick = function reportNativeIconClick(_id) {
          this.platformAdApi && this.platformAdApi.reportNativeIconClick(_id);
        }
        /**原生icon展示 */
        ;

        _proto.reportNativeIconShow = function reportNativeIconShow(_id) {
          this.platformAdApi && this.platformAdApi.reportNativeIconShow(_id);
        }
        /**刷新原生icon广告 */
        ;

        _proto.loadNativeIcon = function loadNativeIcon() {
          this.platformAdApi && this.platformAdApi.loadNativeIcon();
        }
        /**互推盒子九宫格广告 */
        ;

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {
          this.platformAdApi && this.platformAdApi.showNavigateBoxPortal();
        }
        /**互推盒子横幅广告 */
        ;

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {
          this.platformAdApi && this.platformAdApi.showNavigateBoxBanner();
        }
        /**关闭互推盒子横幅广告 */
        ;

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {
          this.platformAdApi && this.platformAdApi.hideNavigateBoxBanner();
        }
        /**添加icon到桌面 */
        ;

        _proto.addDesktop = function addDesktop(_callback) {
          console.log("addDesktop");
          this.platformAdApi && this.platformAdApi.addDesktop(_callback);
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {
          this.platformAdApi && this.platformAdApi.hasShortcutInstalled(function (_result) {
            if (_result) {
              _callback(ResultEnum.Success);
            } else {
              _callback(ResultEnum.Fail);
            }
          });
        }
        /**分享录屏 */
        ;

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {
          this.platformAdApi && this.platformAdApi.ShareVideo(_title, templateId, _callback);
        }
        /**开始录制视频 */
        ;

        _proto.StartRecorder = function StartRecorder(_duration) {
          if (_duration === void 0) {
            _duration = 300;
          }

          this.platformAdApi && this.platformAdApi.StartRecorder(_duration);
        }
        /**分段录屏 */
        ;

        _proto.recordClipRecorder = function recordClipRecorder(data) {
          this.platformAdApi && this.platformAdApi.recordClipRecorder(data);
        }
        /**暂停录屏 */
        ;

        _proto.pauseGameVideo = function pauseGameVideo() {
          this.platformAdApi && this.platformAdApi.pauseGameVideo();
        }
        /**继续录屏 */
        ;

        _proto.resumeGameVideo = function resumeGameVideo() {
          this.platformAdApi && this.platformAdApi.resumeGameVideo();
        }
        /**结束录制视频 */
        ;

        _proto.stopRecordScreen = function stopRecordScreen() {
          this.platformAdApi && this.platformAdApi.stopRecordScreen();
        }
        /**创建更多游戏按钮 */
        ;

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {
          this.platformAdApi && this.platformAdApi.createMoreGamesBtn();
        }
        /**展示更多游戏按钮 */
        ;

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {
          this.platformAdApi && this.platformAdApi.showMoreGamesBtn();
        }
        /**
         * 跳转游戏
         * @param _packageName 包名
         */
        ;

        _proto.jumpToGame = function jumpToGame(_packageName) {
          this.platformAdApi && this.platformAdApi.jumpToGame(_packageName);
        }
        /** 添加彩签*/
        ;

        _proto.addColorBookmark = function addColorBookmark(_callback) {
          this.platformAdApi && this.platformAdApi.addColorBookmark(_callback);
        }
        /**订阅app */
        ;

        _proto.addSubscribeApp = function addSubscribeApp(_callback) {
          this.platformAdApi && this.platformAdApi.addSubscribeApp(_callback);
        };

        _proto.phoneVibrate = function phoneVibrate(isLong) {
          this.platformAdApi && this.platformAdApi.phoneVibrate(isLong);
        }
        /**退出 */
        ;

        _proto.exitApplication = function exitApplication() {
          if (AdsIdConfig.platform == EPlatform.VIVO) {
            qg.exitApplication();
          } else if (AdsIdConfig.platform == EPlatform.OPPO) {
            console.log("exitApplication");
            window["qg"].exitApplication({});
          } else if (AdsIdConfig.platform == EPlatform.HUAWEI) {
            hbs.exitApplication({});
          } else if (AdsIdConfig.platform == EPlatform.TikTok) {
            tt.exitMiniProgram({
              success: function success(res) {
                console.log("调用成功");
              },
              fail: function fail(res) {
                console.log("调用失败");
              }
            });
          } // else if(AdsIdConfig.platform == EPlatform.WX){
          //     wx.exitMiniProgram({});
          // }
          // switch (AdsIdConfig.platform) {
          //     case EPlatform.VIVO:
          //     case EPlatform.OPPO:
          //         qg.exitApplication();
          //         break;
          //     case EPlatform.HUAWEI:
          //         hbs.exitApplication();
          //         break;
          //     case EPlatform.TikTok:
          //         tt.exitMiniProgram({
          //             success(res) {
          //               console.log("调用成功", res.data);
          //             },
          //             fail(res) {
          //               console.log("调用失败", res.errMsg);
          //             },
          //           });
          //         break;
          // }

        };
        /**
         * 华为上报进入和退出游戏的事件
         * @param type type为true时是进入游戏，false是退出游戏
         */


        _proto.submitPlayerEvent = function submitPlayerEvent(type) {
          if (AdsIdConfig.platform == EPlatform.HUAWEI) {
            var eventId = this.transactionId;
            var eventType = "GAMEBEGIN";

            if (!type) {
              eventType = "GAMEEND";
            }

            qg.submitPlayerEvent({
              //randomNumStr 是不超过64位的随机数字符串
              eventId: eventId,
              eventType: eventType,
              success: function (res) {
                if (eventType == "GAMEBEGIN") {
                  console.log("提交玩家信息成功,transactionId ===> ");
                  AdManager.getInstance().transactionId = res.transactionId;
                }
              }.bind(this),
              fail: function fail(data, code) {
                console.log("hide float window fail:" + data + ", code:" + code);
              }
            });
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {
          if (value == null) {
            value = {};
          }

          this.platformAdApi && this.platformAdApi.reportAnalytics(name, value);
        };

        _proto.showGameClubBtn = function showGameClubBtn() {
          if (window["wx"]) {
            this.gameClubBtn = window["wx"].createGameClubButton({
              icon: "light",
              style: {
                left: 80,
                top: 10,
                width: 40,
                height: 40
              } // openlink: 'Lv-XO1OgAuqztP4pRyKfZnY2aJKe9aE1'

            });
          }
        };

        _proto.hideGameClubBtn = function hideGameClubBtn() {
          if (this.gameClubBtn) {
            this.gameClubBtn.hide();
          }
        } // 抖音必接的
        ;

        _proto.navigateToScene = function navigateToScene(_succeedcallback, _failcallback) {
          this.platformAdApi && this.platformAdApi.navigateToScene(_succeedcallback, _failcallback);
        } //#region 新增微信部分
        ;

        _proto.ShowGameIconAd = function ShowGameIconAd() {
          this.platformAdApi && this.platformAdApi.ShowGameIconAd();
        };

        _proto.HideGameIconAd = function HideGameIconAd() {
          this.platformAdApi && this.platformAdApi.HideGameIconAd();
        };

        _proto.ShowHomeIconAd = function ShowHomeIconAd() {
          this.platformAdApi && this.platformAdApi.ShowHomeIconAd();
        };

        _proto.HideHomeIconAd = function HideHomeIconAd() {
          this.platformAdApi && this.platformAdApi.HideHomeIconAd();
        };

        _proto.ShowSideAd = function ShowSideAd() {
          this.platformAdApi && this.platformAdApi.ShowSideAd();
        };

        _proto.HideSideAd = function HideSideAd() {
          this.platformAdApi && this.platformAdApi.HideSideAd();
        };

        _proto.ShowMoreGamesAd = function ShowMoreGamesAd() {
          this.platformAdApi && this.platformAdApi.ShowMoreGamesAd();
        };

        _proto.HideMoreGamesAd = function HideMoreGamesAd() {
          this.platformAdApi && this.platformAdApi.HideMoreGamesAd();
        };

        _proto.ShowBannerNativeAd = function ShowBannerNativeAd() {
          this.platformAdApi && this.platformAdApi.ShowBannerNativeAd();
        };

        _proto.HideBannerNativeAd = function HideBannerNativeAd() {
          this.platformAdApi && this.platformAdApi.HideBannerNativeAd();
        } //#endregion
        //#region 新策略

        /**限定ID 开关 */
        ;

        _proto.LimitIDSwitch = function LimitIDSwitch(id) {
          var ad_Datas = AdsIdConfig.adConfig.data.positions;

          for (var i = 0; i < ad_Datas.length; i++) {
            if (ad_Datas[i].position_id == id) {
              return ad_Datas[i].enabled;
            }
          }
        }
        /**获取限定ID里面的概率 */
        ;

        _proto.GetLimitIDProbability = function GetLimitIDProbability(id) {
          var ad_Datas = AdsIdConfig.adConfig.data.positions;

          for (var i = 0; i < ad_Datas.length; i++) {
            if (ad_Datas[i].position_id == id) {
              return ad_Datas[i].probability;
            }
          }
        }
        /**
         * 播放某一个 广告  每个类型存一个 数组，轮播。数组为空则根据配置生成一个数组
         */
        ; //配置的  轮播数据存储     key就是对应的   ad_type
        // AdManager.getInstance().playNewAd(AdType.策略特异性点击);


        _proto.playNewAd = function playNewAd(type) {
          //
          if (AdsIdConfig.platform == EPlatform.Close || !this.platformAdApi) {
            return;
          } // 容错屏蔽


          if (this.playAbnormalAD()) ;else {
            // 屏蔽    防止错误使用
            if (type != AdType.策略过关屏蔽地区) {
              return;
            }
          }

          switch (type) {
            // 播放配置
            // 每天广告次数参数  代表延时弹出  单位毫秒
            case AdType.策略banner:
            case AdType.策略兜底:
            case AdType.策略特异性点击:
            case AdType.策略其他点击:
            case AdType.策略过关非屏蔽地区:
            case AdType.策略过关屏蔽地区:
              var data = this.platformAdApi.ADNewConfig[type];
              var temp = type;

              if (data) {
                var interval = data.ad_interval; //20; //

                if (interval == 0 || !interval) ;else {
                  if (!this.ADNewInterval[temp] || this.ADNewInterval[temp] == 0) {
                    this.ADNewInterval[temp] = Date.now();
                  } else if (this.ADNewInterval[temp] != 0) {
                    // 判断是否大于间隔时间
                    var elapsedTime = Date.now() - this.ADNewInterval[temp]; // 计算剩余时间

                    var remainingTime = interval * 1000 - elapsedTime;

                    if (remainingTime > 0) {
                      // 还没达到限制的间隔时间
                      return;
                    } else {
                      //播放并 存下点击的当前 时间
                      this.ADNewInterval[temp] = Date.now();

                      if (data.vendor_position == "") {
                        return;
                      }
                    }
                  }
                }

                if (!this.ADNewAdAry[temp] || this.ADNewAdAry[temp].length == 0) {
                  // let test = 'm2|c+t|j+s|c+n+t';
                  this.ADNewAdAry[temp] = AdsIdConfig.stringGetAD(data.vendor_position); //);
                }

                var firstValue = this.ADNewAdAry[temp].shift();
                console.log("播放  " + firstValue); //播放

                this.playTypeAd(firstValue, type);
              }

              break;
            //往下是样式配置 信息  无逻辑
            // case AdType.标识非屏蔽地区:

            case AdType.样式原生icon:
              break;

            case AdType.样式信息流banner:
              break;

            default:
              console.log("没有匹配到当前类型 ： " + type);
              break;
          }
        } //  是非屏蔽地区 播放不正常广告
        ;

        _proto.playAbnormalAD = function playAbnormalAD() {
          //开：非屏蔽地区 关：屏蔽地区 下发时根据用户IP自动识别“开或关”
          // 标识-非屏蔽地区
          if (this.platformAdApi && this.platformAdApi.ADNewConfig[AdType.标识非屏蔽地区]) {
            //
            return true;
          }

          return false;
        };

        _proto.playTypeAd = function playTypeAd(strKey, type) {
          // strKey 可能是 m+n+c 连弹
          // this.playAd()
          if (strKey.includes("+")) {
            // 是+ 连弹
            var arr = strKey.split("+");
            this.playNumAD(arr, type);
          } else {
            this.playAd(strKey, type);
          }
        } // 连弹
        ;

        _proto.playNumAD = function playNumAD(arr, type) {
          var Value = arr.shift();
          this.playAd(Value, type);

          if (arr.length > 0) {
            // 连续广告
            this.playNumAD(arr, type);
          }
        }
        /**
         * 播放
         * type是策略兜底 必须传类型
         */
        ;

        _proto.playAd = function playAd(strKey, type) {
          var _this2 = this;

          var playdoudi = true;

          if (type && AdType.策略兜底 == type) {
            //关闭兜底 防止重复兜底 死循环
            console.log("播放:  策略兜底  ");
            playdoudi = false;
          }

          switch (strKey) {
            case "n":
              // 【n】原生模板渲染2  间隔限制1
              this.showCustomType12(2, function (isSucceed) {
                if (isSucceed) ;else {
                  //播放失败
                  if (playdoudi) {
                    // 非兜底调用的  则兜底
                    _this2.playNewAd(AdType.策略兜底);
                  }
                }
              });
              break;

            case "m":
              // 【m】原生模板渲染1  间隔限制1
              this.showCustomType12(1, function (isSucceed) {
                if (isSucceed) ;else {
                  //播放失败
                  if (playdoudi) {
                    // 非兜底调用的  则兜底
                    _this2.playNewAd(AdType.策略兜底);
                  }
                }
              });
              break;

            case "t":
              // 【t】原生自渲染2
              this.showADNewNativeType12(2, function (isSucceed) {
                if (isSucceed) ;else {
                  //播放失败
                  if (playdoudi) {
                    // 非兜底调用的  则兜底
                    _this2.playNewAd(AdType.策略兜底);
                  }
                }
              });
              break;

            case "s":
              // 【s】原生自渲染1
              this.showADNewNativeType12(1, function (isSucceed) {
                if (isSucceed) ;else {
                  //播放失败
                  if (playdoudi) {
                    // 非兜底调用的  则兜底
                    _this2.playNewAd(AdType.策略兜底);
                  }
                }
              });
              break;

            case "c":
              // 【c】插屏  间隔限制1
              // showCustomAd
              this.showInsertAd(function (isSucceed) {
                if (isSucceed) ;else {
                  //播放失败
                  if (playdoudi) {
                    // 非兜底调用的  则兜底
                    _this2.playNewAd(AdType.策略兜底);
                  }
                }
              });
              break;

            case "j":
              // 【j】被动激励  间隔限制1
              this.showPassiveVideo(function (isSucceed, code) {
                if (isSucceed && isSucceed === 1) ;else {
                  if (code) {
                    //播放失败
                    if (playdoudi) {
                      // 非兜底调用的  则兜底
                      _this2.playNewAd(AdType.策略兜底);
                    }
                  }
                }
              });
              break;

            case "h":
              // 【h】信息流banner  间隔限制1
              this.showCustomBanner(function (isSucceed) {
                if (isSucceed) ;else {
                  //播放失败
                  if (playdoudi) {
                    // 非兜底调用的  则兜底
                    _this2.playNewAd(AdType.策略兜底);
                  }
                }
              });
              break;

            case "b":
              // 【b】banner
              this.showBanner(function (isSucceed) {
                if (isSucceed) ;else {
                  //播放失败
                  if (playdoudi) {
                    // 非兜底调用的  则兜底
                    _this2.playNewAd(AdType.策略兜底);
                  }
                }
              });
              break;

            default:
              // 没有匹配到任何 case 类型的情况
              console.log("没有匹配到任何 case 类型的情况");
              break;
          }
        }
        /**
         * 隐藏  某个广告  todo
         */
        ;

        _proto.closeAd = function closeAd(strKey, type) {} // 【m】原生模板渲染1 2
        ;

        _proto.showCustomType12 = function showCustomType12(type, playSuccessCall) {
          if (AdsIdConfig.platform == EPlatform.Close || !this.platformAdApi) {
            return;
          } // 间隔限制1


          console.log("原生模板 1 2");

          if (this.platformAdApi.AdCustomTypeData && this.platformAdApi.AdCustomTypeData[type]) {
            var Data = this.platformAdApi.AdCustomTypeData[type];
            var interval = Data.ad_interval; //20; //

            if (interval == 0 || !interval) ;else {
              var isCanplay = this.getTimeInterval(this.CustomType12_interval[type], interval, "\u539F\u751F\u6A21\u677F\u6E32\u67D3" + type);

              if (isCanplay == false) {
                return;
              } else {
                this.CustomType12_interval[type] = isCanplay;
              }
            }
          }

          this.platformAdApi && this.platformAdApi.showCustomType12(type, playSuccessCall);
        } // 原生自渲染 1 2    限制不能同时创建
        ;

        _proto.showADNewNativeType12 = function showADNewNativeType12(type, playSuccessCall) {
          if (AdsIdConfig.platform == EPlatform.Close || !this.platformAdApi) {
            return;
          } // 间隔限制1


          if (this.platformAdApi.ADNewNativeTypeData && this.platformAdApi.ADNewNativeTypeData[type]) {
            var Data = this.platformAdApi.ADNewNativeTypeData[type];
            var interval = 10; //Data.ad_interval; //20; //

            if (interval == 0 || !interval) ;else {
              var isCanplay = this.getTimeInterval(this.ADNewNativeType12_interval[type], interval, "\u539F\u751F\u81EA\u6E32\u67D3" + type);

              if (isCanplay == false) {
                return;
              } else {
                // 更新时间戳
                this.ADNewNativeType12_interval[type] = isCanplay;
              }
            }
          }

          this.platformAdApi && this.platformAdApi.showADNewNativeType12(type, playSuccessCall);
        } // 时间间隔计算
        ;

        _proto.getTimeInterval = function getTimeInterval(objNum, interval, type) {
          var time = Date.now();

          if (!objNum || objNum === 0) {
            return time;
          } else if (objNum !== 0) {
            // 判断是否大于间隔时间
            var elapsedTime = Date.now() - objNum; // 计算剩余时间（24小时 - 已经过去的时间）

            var remainingTime = interval * 1000 - elapsedTime;

            if (remainingTime > 0) {
              // 还没达到限制的间隔时间
              console.log(type + "  还没达到限制的间隔时间  " + remainingTime / 1000);
              return false;
            } else {
              // 存下点击的当前 时间
              objNum = Date.now();
              return time;
            }
          }
        }
        /**展示 被动激励视频 */
        ;

        _proto.showPassiveVideo = function showPassiveVideo(_successCallback, isStop) {
          if (isStop === void 0) {
            isStop = true;
          } // this.platformAdApi && this.platformAdApi.showVideo(_successCallback);


          director.pause();

          if (AdsIdConfig.platform == EPlatform.Close) {
            director.resume();
            this.platformAdApi && this.platformAdApi.showPassiveVideo(_successCallback);
            return;
          }

          if (!this.platformAdApi) {
            director.resume();
            if (_successCallback) _successCallback(1);
            return;
          } // 间隔限制1


          if (this.platformAdApi.PassiveVideoData) {
            var Data = this.platformAdApi.PassiveVideoData;
            var interval = Data.ad_interval; //20; //

            if (interval == 0 || !interval) ;else {
              var isCanplay = this.getTimeInterval(this.PassiveVideo_interval, interval, "\u88AB\u52A8\u6FC0\u52B1\u89C6\u9891");

              if (isCanplay == false) {
                return;
              } else {
                this.PassiveVideo_interval = isCanplay;
              }
            }
          }

          this.platformAdApi.showPassiveVideo(function (_result, code) {
            if (isStop) {
              director.resume();
            }

            if (_result) {
              if (_successCallback) _successCallback(1);
            } else {
              if (_successCallback) {
                _successCallback(2, code);
              }
            }
          });
        }
        /**展示 原生模板banner */
        ;

        _proto.showCustomBanner = function showCustomBanner(playSuccessCall) {
          if (AdsIdConfig.platform == EPlatform.Close) {
            return;
          } // 间隔限制1


          if (this.platformAdApi.AdCustomBannerData) {
            var Data = this.platformAdApi.AdCustomBannerData;
            var interval = Data.ad_interval; //20; //

            if (interval == 0 || !interval) ;else {
              var isCanplay = this.getTimeInterval(this.AdCustomBanner_interval, interval, "\u539F\u751F\u6A21\u677Fbanner");

              if (isCanplay == false) {
                return;
              } else {
                this.AdCustomBanner_interval = isCanplay;
              }
            }
          }

          this.platformAdApi && this.platformAdApi.showCustomBanner(playSuccessCall);
        }
        /**隐藏 原生模板banner */
        ;

        _proto.hideCustomBanner = function hideCustomBanner() {
          this.platformAdApi && this.platformAdApi.hideCustomBanner();
        };

        return AdManager;
      }(), _class2._adManager = null, _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdNativeInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts', './GEventManager.ts', './AdsIdConfig.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, game, Game, assetManager, Component, AdManager, GEventManager, Event_Name, AdsIdConfig, EPlatform;

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
      Sprite = module.Sprite;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      game = module.game;
      Game = module.Game;
      assetManager = module.assetManager;
      Component = module.Component;
    }, function (module) {
      AdManager = module.default;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      AdsIdConfig = module.default;
      EPlatform = module.EPlatform;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "3ef617Hjy9Bjad5oyThSiMt", "AdNativeInfo", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AdNativeInfo = exports('AdNativeInfo', (_dec = ccclass('AdNativeInfo'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdNativeInfo, _Component);

        function AdNativeInfo() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "close_btn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Native_BigImage", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "desc", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "look_ad", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "LateNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "defaut_BigImage", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "type", _descriptor7, _assertThisInitialized(_this));

          _this.nativeInfo = null;
          _this.nativeUrl = [];
          return _this;
        }

        var _proto = AdNativeInfo.prototype;

        _proto.onEnable = function onEnable() {
          this.nativeUrl = [];
          GEventManager.on(Event_Name.OPEN_AD_COMMON_BANNER, this.bannerOpen, this);
        };

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.addEvent();

          if (AdsIdConfig.platform == EPlatform.HUAWEI) {
            game.on(Game.EVENT_HIDE, function () {
              _this2.node.active = false;
            }, this);
            game.on(Game.EVENT_SHOW, function () {
              _this2.node.active = false;
            }, this);
          }
        };

        _proto.bannerOpen = function bannerOpen() {// AD.getInstance().hideBanner();
        };

        _proto.ADInit = function ADInit(_callback) {
          if (AdsIdConfig.platform == EPlatform.HUAWEI) {
            this.HWInitView(_callback);
            return;
          }

          this.initView(_callback);
        };

        _proto.initView = function initView(_callback) {
          this.node.active = true;
          this.nativeInfo = AdManager.getInstance().showNativeImageAd();
          console.log("MINIGAME ===> ===========adNativeInfo===========");
          this.LateNode && (this.LateNode.active = false);

          if (this.nativeInfo && this.nativeInfo.adId) {
            this.refreshAdUI();
            _callback && _callback(1);
          } else {
            this.node.active = false;
            _callback && _callback(0);
          }
        };

        _proto.HWInitView = function HWInitView(_callback) {
          var _this3 = this;

          this.node.active = true;
          AdManager.getInstance().showHWNativeImageAd(function (adInfo) {
            _this3.nativeInfo = adInfo;
            console.log("MINIGAME ===> ===========adNativeInfo===========");
            _this3.LateNode && (_this3.LateNode.active = false);

            if (_this3.nativeInfo && _this3.nativeInfo.adId) {
              _this3.refreshAdUI();

              _callback && _callback(1);
            } else {
              _this3.node.active = false;
              _callback && _callback(0);
            }
          });
        };

        _proto.refreshAdUI = function refreshAdUI() {
          AdManager.getInstance().onNativeReportAdShow(this.nativeInfo.adId);
          this.nativeUrl[0] = this.nativeInfo.NativeClose;
          console.log('华为ad====>', JSON.stringify(this.nativeInfo));

          if (AdsIdConfig.platform == EPlatform.HUAWEI) {
            this.node.getChildByName('adLittle').getComponent(Label).string = this.nativeInfo.title;
            this.node.getChildByName('adDesc').getComponent(Label).string = this.nativeInfo.source; //华为渠道的字段不一样

            this.look_ad.getChildByName('Label').getComponent(Label).string = this.nativeInfo.clickBtnTxt;
          }

          if (this.nativeInfo.Native_BigImage_url) {
            this.nativeUrl[1] = this.nativeInfo.Native_BigImage_url;
          } else {
            if (this.nativeInfo.Native_icon_url) {
              this.nativeUrl[1] = this.nativeInfo.Native_icon_url;
            } else {
              this.Native_BigImage.spriteFrame = this.defaut_BigImage;
            }
          }

          this.nativeUrl[2] = this.nativeInfo.Native_icon_url;
          this.showNativeInfo();
        };

        _proto.addEvent = function addEvent() {
          this.Native_BigImage.node.on("click", this.nativeClick, this);
          this.close_btn.on("click", this.closeThisNode, this);
          this.look_ad.on("click", this.nativeClick, this);
          this.LateNode && this.LateNode.on("click", this.nativeErrClick, this);
        };

        _proto.showNativeInfo = function showNativeInfo() {
          console.log("========showNativeInfo========", this.nativeUrl);
          this.loadAdSprite(this.Native_BigImage, this.nativeUrl[1]);
          AdManager.getInstance().hideBanner();
        };

        _proto.loadAdSprite = function loadAdSprite(nodesprite, url) {
          if (url.indexOf('.png') > -1 || url.indexOf('.jpg') > -1) {
            assetManager.loadRemote(url, function (err, texture) {
              if (err != null || texture == null) {
                return;
              }

              console.log('====>', texture);
              nodesprite.spriteFrame = SpriteFrame.createWithImage(texture);
            }.bind(this));
            return;
          }

          assetManager.loadRemote(url, {
            ext: '.png'
          }, function (err, texture) {
            if (err != null || texture == null) {
              return;
            }

            console.log('====>', texture);
            nodesprite.spriteFrame = SpriteFrame.createWithImage(texture);
          }.bind(this));
        };

        _proto.nativeErrClick = function nativeErrClick() {
          this.node.active = false;
          AdManager.getInstance().onNativeAdClick(this.nativeInfo.adId);
        };

        _proto.nativeClick = function nativeClick() {
          this.node.active = false;
          AdManager.getInstance().onNativeAdClick(this.nativeInfo.adId);
        };

        _proto.closeThisNode = function closeThisNode() {
          // AD.getInstance().showBanner();
          this.node.active = false;
        };

        _proto.onDisable = function onDisable() {
          GEventManager.off(Event_Name.OPEN_AD_COMMON_BANNER, this.bannerOpen, this);
          AdManager.getInstance().loadNativeImage();
        };

        return AdNativeInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "close_btn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Native_BigImage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "desc", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "look_ad", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "LateNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "defaut_BigImage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "type", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdsIdConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts'], function (exports) {
  'use strict';

  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, AdManager;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AdManager = module.default;
    }],
    execute: function () {
      exports({
        AdType: void 0,
        EPlatform: void 0
      });

      cclegacy._RF.push({}, "1f2b942r2hG9aBkgRCdXmI/", "AdsIdConfig", undefined);

      var EPlatform;

      (function (EPlatform) {
        EPlatform[EPlatform["test"] = 0] = "test";
        EPlatform[EPlatform["VIVO"] = 10006746] = "VIVO";
        EPlatform[EPlatform["OPPO"] = 10006773] = "OPPO";
        EPlatform[EPlatform["TikTok"] = 10002573] = "TikTok";
        EPlatform[EPlatform["QQ"] = 4] = "QQ";
        EPlatform[EPlatform["WX"] = 5] = "WX";
        EPlatform[EPlatform["KS"] = 10007844] = "KS";
        EPlatform[EPlatform["HUAWEI"] = 10002680] = "HUAWEI";
        EPlatform[EPlatform["UC"] = 1] = "UC";
        EPlatform[EPlatform["Close"] = 2] = "Close";
      })(EPlatform || (EPlatform = exports('EPlatform', {})));

      var AdType;

      (function (AdType) {
        AdType[AdType["\u5F00\u5C4F"] = 1] = "\u5F00\u5C4F";
        AdType[AdType["Banner"] = 2] = "Banner";
        AdType[AdType["\u63D2\u5C4F"] = 3] = "\u63D2\u5C4F";
        AdType[AdType["\u6FC0\u52B1\u89C6\u9891"] = 4] = "\u6FC0\u52B1\u89C6\u9891";
        AdType[AdType["\u5168\u5C4F\u89C6\u9891"] = 5] = "\u5168\u5C4F\u89C6\u9891";
        AdType[AdType["\u539F\u751F\u63D2\u5C4F"] = 12] = "\u539F\u751F\u63D2\u5C4F";
        AdType[AdType["\u6D6E\u6807"] = 13] = "\u6D6E\u6807";
        AdType[AdType["\u539F\u751FBanner"] = 14] = "\u539F\u751FBanner";
        AdType[AdType["\u539F\u751F\u5F00\u5C4F"] = 24] = "\u539F\u751F\u5F00\u5C4F";
        AdType[AdType["\u539F\u751F\u6A21\u677F"] = 25] = "\u539F\u751F\u6A21\u677F";
        AdType[AdType["\u88AB\u52A8\u6FC0\u52B1"] = 44] = "\u88AB\u52A8\u6FC0\u52B1";
        AdType[AdType["\u6837\u5F0F\u539F\u751Ficon"] = 79] = "\u6837\u5F0F\u539F\u751Ficon";
        AdType[AdType["\u6837\u5F0F\u4FE1\u606F\u6D41banner"] = 77] = "\u6837\u5F0F\u4FE1\u606F\u6D41banner";
        AdType[AdType["\u7B56\u7565banner"] = 78] = "\u7B56\u7565banner";
        AdType[AdType["\u7B56\u7565\u515C\u5E95"] = 75] = "\u7B56\u7565\u515C\u5E95";
        AdType[AdType["\u7B56\u7565\u7279\u5F02\u6027\u70B9\u51FB"] = 68] = "\u7B56\u7565\u7279\u5F02\u6027\u70B9\u51FB";
        AdType[AdType["\u7B56\u7565\u5176\u4ED6\u70B9\u51FB"] = 67] = "\u7B56\u7565\u5176\u4ED6\u70B9\u51FB";
        AdType[AdType["\u7B56\u7565\u5B9A\u65F6"] = 74] = "\u7B56\u7565\u5B9A\u65F6";
        AdType[AdType["\u7B56\u7565\u8FC7\u5173\u975E\u5C4F\u853D\u5730\u533A"] = 66] = "\u7B56\u7565\u8FC7\u5173\u975E\u5C4F\u853D\u5730\u533A";
        AdType[AdType["\u7B56\u7565\u8FC7\u5173\u5C4F\u853D\u5730\u533A"] = 73] = "\u7B56\u7565\u8FC7\u5173\u5C4F\u853D\u5730\u533A";
        AdType[AdType["\u6807\u8BC6\u975E\u5C4F\u853D\u5730\u533A"] = 72] = "\u6807\u8BC6\u975E\u5C4F\u853D\u5730\u533A";
        AdType[AdType["\u4E92\u63A8\u76D2\u5B50"] = 60] = "\u4E92\u63A8\u76D2\u5B50";
        AdType[AdType["\u539F\u751Ficon"] = 76] = "\u539F\u751Ficon";
        AdType[AdType["\u539F\u751F\u6A21\u677F\u6E32\u67D3"] = 62] = "\u539F\u751F\u6A21\u677F\u6E32\u67D3";
        AdType[AdType["\u539F\u751F\u81EA\u6E32\u67D3"] = 59] = "\u539F\u751F\u81EA\u6E32\u67D3";
        AdType[AdType["\u4FE1\u606F\u6D41banner"] = 49] = "\u4FE1\u606F\u6D41banner";
      })(AdType || (AdType = exports('AdType', {})));

      var AdsIdConfig = exports('default', /*#__PURE__*/function () {
        function AdsIdConfig() {}

        AdsIdConfig.getAdConfigWeb = function getAdConfigWeb(callback) {
          if (AdsIdConfig.platform == EPlatform.test || AdsIdConfig.platform == EPlatform.Close) {
            AdsIdConfig.serverRootUrl += '10002483';
          } else {
            AdsIdConfig.serverRootUrl += AdsIdConfig.platform;
          }

          this.httpCall({
            url: AdsIdConfig.serverRootUrl,
            callback: callback
          });
        };

        AdsIdConfig.httpCall = /*#__PURE__*/function () {
          var _httpCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
            var ADData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return AdsIdConfig.httpSend({
                      url: data.url
                    });

                  case 2:
                    ADData = _context.sent;
                    console.log('ad====>', ADData);
                    AdsIdConfig.adConfig = ADData;
                    data.callback && data.callback();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function httpCall(_x) {
            return _httpCall.apply(this, arguments);
          }

          return httpCall;
        }();

        AdsIdConfig.httpSend = function httpSend(options) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                var res = JSON.parse(xhr.responseText);
                resolve(res);
              }
            };

            xhr.timeout = options.timeout || 50000; // 5 seconds for timeout

            var method = options.method || 'GET';
            var url = options.url;
            options.data = options.data || {};

            if (method == 'get' || method == "GET") {
              // console.log('url===>',url);
              xhr.open(method, url, true);
              xhr.send();
            } else {
              xhr.open(method, options.url, true);
              xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
              xhr.send(JSON.stringify(options.data));
            }
          });
        };
        /**
         * 判断字符串中是否有空格,适用于检查后台填写的广告ID
         */


        AdsIdConfig.stringHasSpace = function stringHasSpace(str) {
          if (str == null) return true;
          var num = str.indexOf(" ");

          if (num == -1) {
            return false;
          } else {
            return true;
          }
        } // 获取英文逗号隔开的广告位  并且打乱顺序
        ;

        AdsIdConfig.getVendor_posAry = function getVendor_posAry(str) {
          var myStr = str;
          var result = []; // 先判断空格  去掉空格

          if (str.includes(" ")) {
            myStr = str.replace(/\s/g, "");
          }

          if (myStr.includes(",")) {
            // 是 广告位轮播
            var arr = myStr.split(","); // Fisher-Yates 洗牌算法

            for (var i = arr.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var _ref = [arr[j], arr[i]];
              arr[i] = _ref[0];
              arr[j] = _ref[1];
            }

            result = arr;
          } else {
            result = [myStr];
          }

          return result;
        } // 配置位置 大小  kindWHAry 0 1 宽范围   2 3 宽高比                width height 屏幕
        ;

        AdsIdConfig.gePosAndWidthCfg = function gePosAndWidthCfg(cfgStr, width, height, kindWHAry) {
          var config = cfgStr;
          var pAdApi = AdManager.getInstance().platformAdApi;

          if (!pAdApi) {
            console.log("pt平台不存在");
            return;
          }

          var arr = [];

          if (config.includes("|")) {
            // 配置
            arr = config.split("|");
          }

          if (arr.length != 5) {
            console.log("配置 不正确");
            return;
          } // 可设置广告容易的相对位置，可选：top、bottom、left、right、center，如：top|center
          //左右或上下边距


          var leftRight = 0;
          var topBottom = 0;

          if (arr && arr[3]) {
            // 原生模板广告组件的左上角横坐标
            leftRight = Number(arr[3]);
          }

          if (arr && arr[4]) {
            // 原生模板广告组件的左上角纵坐标
            topBottom = Number(arr[4]);
          } // 默认  30%


          var widthNum = 0;
          var heightNum = 0;

          if (arr && arr[1]) {
            widthNum = Number(arr[1]) / 100 * width; // widthNum 还包含边距  需要去除

            widthNum = widthNum - leftRight;
          }

          if (!kindWHAry[0] || !kindWHAry[1] || !kindWHAry[2] || !kindWHAry[3]) {
            console.log("配置 不存在");
            return;
          } else if (widthNum < kindWHAry[0] || widthNum > kindWHAry[1]) {
            console.error("配置 不在范围内   按默认显示了 widthNum:" + widthNum);
            console.error(kindWHAry[0] + "  配置:  " + kindWHAry[1]);
            widthNum = kindWHAry[2];
            heightNum = kindWHAry[3];
          } else {
            //在范围内   等比缩放 显示
            // widthNum = kindWHAry[2];
            // 算出高
            heightNum = widthNum / (kindWHAry[2] / kindWHAry[3]);
          }

          console.log(width);
          console.log("widthNum==================================================height：" + height);
          console.log(widthNum);
          console.log(heightNum);
          var styleMy = {};

          if (arr && arr[0]) {
            switch (arr[0]) {
              case "A":
              case "a":
                styleMy = {
                  // 测试 ToDo
                  left: leftRight,
                  // + widthNum / 2
                  top: topBottom,
                  //+ heightNum / 2
                  width: widthNum // // gravity: 'top|left'
                  // gravity: 'center'

                };
                break;

              case "B":
              case "b":
                styleMy = {
                  // left: width / 2 - widthNum / 2,
                  top: topBottom,
                  //+ heightNum / 2
                  width: widthNum,
                  gravity: "center"
                };
                break;

              case "C":
              case "c":
                styleMy = {
                  left: width - leftRight - widthNum,
                  /// 2 - 100
                  top: topBottom,
                  //+ heightNum / 2
                  width: widthNum // gravity: 'top|right'

                };
                break;

              case "D":
              case "d":
                styleMy = {
                  left: leftRight,
                  //+ widthNum / 2
                  top: height - topBottom - heightNum,
                  /// 2 - 100
                  width: widthNum // gravity: 'bottom|left'

                };
                break;

              case "E":
              case "e":
                styleMy = {
                  // left: width / 2 - widthNum / 2,
                  top: height - topBottom - heightNum,
                  /// 2 - 100
                  width: widthNum,
                  gravity: "center"
                };
                break;

              case "F":
              case "f":
                styleMy = {
                  left: width - leftRight - widthNum,
                  // / 2 - 100
                  top: height - topBottom - heightNum,
                  // / 2 - 100
                  width: widthNum // gravity: 'bottom|right'

                };
                break;
            }
          }

          return styleMy;
        }
        /**
         * 获取字符串配置的广告
         */
        ;

        AdsIdConfig.stringGetAD = function stringGetAD(str) {
          var myStr = str;
          var result = []; // 先判断空格  去掉空格

          if (str.includes(" ")) {
            myStr = str.replace(/\s/g, "");
          } //


          if (myStr.includes("|")) {
            // 是轮播
            var arr = myStr.split("|");
            result = this.expandArray(arr);
          } else {
            result = this.expandArray([myStr]);
          }

          return result;
        };

        AdsIdConfig.expandArray = function expandArray(arr) {
          var expandedArr = [];
          arr.forEach(function (item) {
            var _item$split = item.split(/(?=\d)/),
                str = _item$split[0],
                count = _item$split[1]; // 使用正则表达式将字符串分割成字母部分和数字部分


            if (!count || count == undefined) {
              // 默认为1的可能没填
              count = "1";
            }

            var num = parseInt(count, 10);

            for (var i = 0; i < num; i++) {
              expandedArr.push(str);
            }
          });
          return expandedArr;
        };

        _createClass(AdsIdConfig, null, [{
          key: "platform",
          get: function get() {
            return this._platform;
          },
          set: function set(v) {
            this._platform = v;
          }
        }]);

        return AdsIdConfig;
      }());
      AdsIdConfig.serverRootUrl = 'https://api.iweisesz.com/api/client/mini?pid=';
      AdsIdConfig.adConfig = null;
      AdsIdConfig._platform = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnalyticsManager.ts", ['cc', './CocosAnalyticsPack.ts', './md5.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, error, sys, CocosAnalyticsPack, Md5;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      error = module.error;
      sys = module.sys;
    }, function (module) {
      CocosAnalyticsPack = module.default;
    }, function (module) {
      Md5 = module.Md5;
    }],
    execute: function () {
      exports({
        EAnalyticsEvent: void 0,
        EAnalyticsEventType: void 0,
        EAnalyticsSDKType: void 0
      });

      var _class, _class2;

      cclegacy._RF.push({}, "eb9f21va5pIKLLe33q9DwEw", "AnalyticsManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /** 统计sdk类型 */

      var EAnalyticsSDKType;
      /** 统计事件 */

      (function (EAnalyticsSDKType) {
        EAnalyticsSDKType[EAnalyticsSDKType["CoCos"] = 0] = "CoCos";
      })(EAnalyticsSDKType || (EAnalyticsSDKType = exports('EAnalyticsSDKType', {})));

      var EAnalyticsEvent;
      /** 事件类型 */

      (function (EAnalyticsEvent) {
        EAnalyticsEvent[EAnalyticsEvent["Start"] = 0] = "Start";
        EAnalyticsEvent[EAnalyticsEvent["Success"] = 1] = "Success";
        EAnalyticsEvent[EAnalyticsEvent["Fail"] = 2] = "Fail";
        EAnalyticsEvent[EAnalyticsEvent["Cancel"] = 3] = "Cancel";
      })(EAnalyticsEvent || (EAnalyticsEvent = exports('EAnalyticsEvent', {})));

      var EAnalyticsEventType;

      (function (EAnalyticsEventType) {
        EAnalyticsEventType[EAnalyticsEventType["Custom"] = 0] = "Custom";
        EAnalyticsEventType[EAnalyticsEventType["Level"] = 1] = "Level";
      })(EAnalyticsEventType || (EAnalyticsEventType = exports('EAnalyticsEventType', {})));

      var AnalyticsManager = exports('default',
      /** 统计管理 */
      ccclass(_class = (_class2 = /*#__PURE__*/function () {
        AnalyticsManager.getInstance = function getInstance() {
          if (AnalyticsManager.instance == null) {
            AnalyticsManager.instance = new AnalyticsManager();
          }

          return AnalyticsManager.instance;
        };

        function AnalyticsManager() {
          var _this$channelType;

          this.channelType = (_this$channelType = {}, _this$channelType[sys.Platform.OPPO_MINI_GAME] = "oppo", _this$channelType[sys.Platform.VIVO_MINI_GAME] = "vivo", _this$channelType);
          this.type = EAnalyticsSDKType.CoCos;
          this.enableDebug = true;
          this.analyticsPack = null;
          this.userId = "";
          this.userId = this._getUserId();
        }

        var _proto = AnalyticsManager.prototype;

        _proto.init = function init(_type) {
          this.type = _type; // if(cc.sys.os == cc.sys.OS_WINDOWS && this.enableDebug == false){
          // return;
          // }

          console.error('统计开始初始化', this.userId);

          switch (this.type) {
            case EAnalyticsSDKType.CoCos:
              this.analyticsPack = new CocosAnalyticsPack();
              break;

            default:
              error("not find analytics");
              return;
          }

          var channel = this.channelType[sys.platform];
          channel = channel ? channel : "unknow";
          this.analyticsPack.enableDebug(this.enableDebug);
          this.analyticsPack.init({
            channel: channel,
            userId: this.userId
          });
        };

        _proto.login = function login(event, param) {
          this.analyticsPack && this.analyticsPack.login(event, param);
        }
        /** 自定义事件 */
        ;

        _proto.raiseCustomEvent = function raiseCustomEvent(event, param) {
          this.analyticsPack && this.analyticsPack.raiseEvent(EAnalyticsEventType.Custom, event, param.name, param);
        }
        /** 关卡事件 */
        ;

        _proto.raiseLevelEvent = function raiseLevelEvent(event, param) {
          this.analyticsPack && this.analyticsPack.raiseEvent(EAnalyticsEventType.Level, event, param.level, param);
        };

        _proto._getUserId = function _getUserId() {
          var userId = sys.localStorage.getItem("analytics_userId");

          if (userId) {
            return userId;
          } else {
            var timer = new Date().getTime();
            var randStr = this.randomStr(10);
            var str = randStr + timer.toString();
            var md5 = new Md5();
            md5.start();
            md5.appendStr(str);
            var finalMd5 = md5.end();
            console.log(finalMd5);
            sys.localStorage.setItem("analytics_userId", finalMd5);
            return finalMd5;
          }
        } //生成一个随机的字符串，字符串内容为小写字母和数字
        ;

        _proto.randomStr = function randomStr(len) {
          var str = "";

          for (var i = 0; i < len; i++) {
            var num = Math.floor(Math.random() * (35 - 0 + 1)) + 0;

            if (num <= 9) {
              str += num;
            } else {
              str += String.fromCharCode('a'.charCodeAt(0) + num - 10);
            }
          }

          return str;
        };

        return AnalyticsManager;
      }(), _class2.instance = null, _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnalyticsParent.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "99457bVLMNCHoiFxC1CiAzm", "AnalyticsParent", undefined);

      var AnalyticsParent = exports('default', /*#__PURE__*/function () {
        function AnalyticsParent() {}

        var _proto = AnalyticsParent.prototype;

        _proto.enableDebug = function enableDebug(debug) {};

        return AnalyticsParent;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnimRotate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, tween, v3, Tween, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      v3 = module.v3;
      Tween = module.Tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "19a1ftM9AFPcY3turWg4pCj", "AnimRotate", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AnimRotate = exports('AnimRotate', (_dec = ccclass('AnimRotate'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AnimRotate, _Component);

        function AnimRotate() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.animTween = new Tween();
          return _this;
        }

        var _proto = AnimRotate.prototype;

        _proto.onEnable = function onEnable() {
          this.startAnim();
        };

        _proto.startAnim = function startAnim() {
          var _this2 = this;

          this.animTween && this.animTween.stop();
          this.animTween = tween(this.node);
          this.animTween.call(function () {
            _this2.node.eulerAngles = v3(0, 0, 0);
          }).to(1, {
            eulerAngles: v3(0, 0, 360)
          }).union().repeatForever().start();
        };

        return AnimRotate;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaiDuADApi.ts", ['cc', './AdsIdConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, AdsIdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AdsIdConfig = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "2dbc2mGR1NPd70L9301wXqj", "BaiDuADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaiDuADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function BaiDuADApi() {
          this.videoType = void 0;
          this.arg = void 0;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.swan = window["swan"];
          this.systemBannerAd = null;
          this.loadSucc_SystemBanner = false;
          this.isShow_SystemBanner = false;
          this.NUM_BannerUpdateTime = 30;
          this.interval_updateBanner = null;
          this.interstitialAd = null;
          this.rewardedVideoAd = null;
          this.loadSucc_Video = false;
          this.callback_Video = null;
          this.nativeAd = null;
          this.resTemp = null;
          this.title = '超上瘾的解密游戏，挑战你的智商！';
          this.shareUrl = "https://res.efunent.com/dev2/web2/LceFirePeople/qq/data/share.jpg";
          this.content = '分享内容';
          this.systemInfo = null;
        }

        var _proto = BaiDuADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.swan !== null && this.swan !== undefined) {
            this.systemInfo = this.swan.getSystemInfoSync();
            this.createAd();
          } else {
            this.swan = null;
          }

          _callback && _callback();
          console.log('百度 ===================> onInit ok');
        };

        _proto.createAd = function createAd() {
          if (this.SystemBannerData.enabled && this.SystemBannerData.vendor_position != "") this.createSystemBanner();
          if (this.VideoData.enabled && this.VideoData.vendor_position != "") this.createVideo();
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {
          if (this.swan != null && this.swan != undefined) {
            console.log("百度平台 分享");
            this.swan.shareAppMessage({
              title: this.title,
              imageUrl: this.shareUrl,
              content: this.content,
              success: function success() {
                _callback && _callback(1);
              },
              fail: function fail() {
                _callback && _callback(0);
              }
            });
          }
        };

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createSystemBanner = function createSystemBanner() {
          var _this = this;

          console.log("YDTXGameSDK", "--createSystemBanner--");

          if (AdsIdConfig.stringHasSpace(this.SystemBannerData.vendor_position)) {
            console.log("YDTXGameSDK", "channelId:", "当前渠道系统banner广告ID中含有空字符串,请检查后台系统banner广告ID*********************");
            return;
          }

          this.systemBannerAd = this.swan.createBannerAd({
            adUnitId: this.SystemBannerData.vendor_position,
            appSid: this.SystemBannerData.vendor_position,
            style: {}
          });
          this.loadSucc_SystemBanner = true; // 监听系统banner错误

          this.systemBannerAd.onError(function (err) {
            console.log("YDTXGameSDK", "OPPO 系统banner加载/展示失败：", JSON.stringify(err));
          }); // 监听系统banner隐藏

          this.systemBannerAd.onHide(function () {
            console.log("YDTXGameSDK", "OPPO 系统banner关闭", _this.NUM_BannerUpdateTime + "S之后再次刷新");

            _this.updateBanner();
          });
        };

        _proto.showBanner = function showBanner() {
          if (this.swan !== null && this.swan !== undefined) {
            if (this.loadSucc_SystemBanner) {
              this.showSystemBanner();
            }
          }
        };

        _proto.hideBanner = function hideBanner() {
          this.hideSystemBanner();
          if (this.interval_updateBanner) clearInterval(this.interval_updateBanner);
        }
        /**
         * 展示系统banner
         */
        ;

        _proto.showSystemBanner = function showSystemBanner() {
          this.isShow_SystemBanner = true;
          this.systemBannerAd.show();
        }
        /**
         * 隐藏系统banner
         */
        ;

        _proto.hideSystemBanner = function hideSystemBanner() {
          if (this.isShow_SystemBanner && this.systemBannerAd) {
            this.isShow_SystemBanner = false;
            this.systemBannerAd.offHide();
            this.systemBannerAd.hide();
          }
        }
        /**
        * 刷新banner
        */
        ;

        _proto.updateBanner = function updateBanner() {
          var _this2 = this;

          if (this.interval_updateBanner) clearInterval(this.interval_updateBanner); // 刷新广告条

          this.interval_updateBanner = setInterval(function () {
            _this2.updateSystemBanner();
          }, this.NUM_BannerUpdateTime * 1000);
        }
        /**
         * 刷新系统banner
         */
        ;

        _proto.updateSystemBanner = function updateSystemBanner() {
          this.hideSystemBanner();
          this.showSystemBanner();
        };

        _proto.createVideo = function createVideo() {
          var _this3 = this;

          if (this.swan !== null && this.swan !== undefined) {
            if (AdsIdConfig.stringHasSpace(this.VideoData.vendor_position)) {
              console.log("YDTXGameSDK", "vendor_position:", "当前渠道视频广告ID中含有空字符串,请检查后台视频广告ID*********************");
              return;
            }
            /**创建rewardedVideoAd 对象*/


            console.log("百度平台 创建激励视频广告");
            this.rewardedVideoAd = this.swan.createRewardedVideoAd({
              adUnitId: this.VideoData.vendor_position,
              appSid: this.VideoData.vendor_position
            });
            this.rewardedVideoAd.onLoad(function () {
              console.log("激励视频广告 加载成功");
              _this3.loadSucc_Video = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('百度H5GameAPI 激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
              _this3.loadSucc_Video = false;

              if (_this3.rewardedVideoAd) {
                setTimeout(function () {
                  _this3.rewardedVideoAd && _this3.rewardedVideoAd.load();
                }, 30 * 1000);
              }
            }); //监听视频广告播放完成

            this.rewardedVideoAd.onClose(function (res) {
              if (res.isEnded) {
                console.log("YDTXGameSDK", "OPPO 激励视频广告完成，发放奖励");

                if (_this3.callback_Video) {
                  _this3.callback_Video(true);

                  _this3.rewardedVideoAd.load();
                }
              } else {
                console.log("YDTXGameSDK", "OPPO 激励视频广告关闭，不发放奖励");

                if (_this3.callback_Video) {
                  _this3.callback_Video(false);

                  _this3.rewardedVideoAd.load();
                }
              }
            });
            this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_successCallback) {
          /**确保video正常创建并已经拉取到数据 */
          if (this.rewardedVideoAd && this.loadSucc_Video) {
            this.callback_Video = _successCallback;
            this.rewardedVideoAd.show();
            this.loadSucc_Video = false;
          }
        };

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createInsertAd = function createInsertAd() {};

        _proto.showInsertAd = function showInsertAd() {};

        _proto.createNativeAd = function createNativeAd() {};

        _proto.showNativeAd = function showNativeAd(adIdKey, _callback, openIdKey) {};

        _proto.onNativeAdClick = function onNativeAdClick(_id) {};

        _proto.onNativeReportAdShow = function onNativeReportAdShow(_id) {};

        _proto.createNativeIconAd = function createNativeIconAd() {};

        _proto.showNativeIconAd = function showNativeIconAd() {};

        _proto.onNativeIconAdClick = function onNativeIconAdClick(_id) {}
        /**创建格子广告组件 */
        ;

        _proto.createGridAd = function createGridAd(adIdKey, openIdKey) {};

        _proto.saveDataToCache = function saveDataToCache(_key, _value) {};

        _proto.readDataFromCache = function readDataFromCache(_key) {};

        _proto.addDesktop = function addDesktop(_callback) {}
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {};

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.vibrateShort = function vibrateShort() {
          if (this.swan !== null && this.swan !== undefined) {
            this.swan.vibrateShort && this.swan.vibrateShort();
          }
        };

        _proto.vibrateLong = function vibrateLong() {
          if (this.swan !== null && this.swan !== undefined) {
            this.swan.vibrateLong && this.swan.vibrateLong();
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        return BaiDuADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUIBinder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIHelper.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, UIHelper;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UIHelper = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b68cegxwNZPWKi6scKLcBgU", "BaseUIBinder", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseUIBinder = exports('default', (_dec = ccclass('BaseUIBinder'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseUIBinder, _Component);

        function BaseUIBinder() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.$collector = void 0;
          _this._Nodes = {};
          _this._Labels = {};
          _this._Buttons = {};
          _this._Sprites = {};
          _this._RichTexts = {};
          _this._Graphicss = {};
          _this._EditBoxs = {};
          _this._ScrollViews = {};
          _this._ProgressBars = {};
          _this._Sliders = {};
          return _this;
        }

        var _proto = BaseUIBinder.prototype;

        _proto.__preInit = function __preInit() {
          UIHelper.getInstance().bindComponent(this);
        } // onLoad () {}
        ;

        _proto.start = function start() {} // update (dt) {}
        ;

        return BaseUIBinder;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUIForm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager.ts', './SysDefine.ts', './UIMaskManager.ts', './GEventManager.ts', './BaseUIView.ts', './UIIndependentManager.ts', './FormType.ts', './GameUIConfig.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, UIOpacity, Widget, tween, v3, Component, UIManager, UIFormType, UIMaskManager, GEventManager, BaseUIView, UIIndependentManager, MaskType, UIConfigData;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      Widget = module.Widget;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIFormType = module.UIFormType;
    }, function (module) {
      UIMaskManager = module.default;
    }, function (module) {
      GEventManager = module.GEventManager;
    }, function (module) {
      BaseUIView = module.default;
    }, function (module) {
      UIIndependentManager = module.default;
    }, function (module) {
      MaskType = module.MaskType;
    }, function (module) {
      UIConfigData = module.UIConfigData;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "23e38o/R1ZPO6YoLgt1HF9G", "BaseUIForm", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseUIForm = exports('default', (_dec = ccclass('BaseUIForm'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseUIForm, _Component);

        function BaseUIForm() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.UIFormName = void 0;
          _this.MaskType = new MaskType();
          _this.CloseAndDestory = false;
          _this.baseUIView = null;
          return _this;
        }

        var _proto = BaseUIForm.prototype;
        /** 预先初始化 */

        _proto.__preInit = /*#__PURE__*/function () {
          var _preInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(obj) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.baseUIView) {
                      this.baseUIView = this.node.getComponent(BaseUIView);
                      this.baseUIView && this.baseUIView._preInit();
                    }

                    this.init(obj);
                    _context.next = 4;
                    return this.load();

                  case 4:
                    if (UIConfigData[this.UIFormName].layer === UIFormType.Normal) {
                      UIIndependentManager.getInstance().hideLoadingForm();
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function __preInit(_x) {
            return _preInit.apply(this, arguments);
          }

          return __preInit;
        }()
        /**
         * 消息初始化
         * 子类需重写此方法
         * @param obj
         */
        ;

        _proto.init = function init(obj) {}
        /** 异步加载 */
        ;

        _proto.load = /*#__PURE__*/function () {
          var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function load() {
            return _load.apply(this, arguments);
          }

          return load;
        }()
        /**
         * 显示窗体
         */
        ;

        _proto.DisPlay = function DisPlay() {
          var _this2 = this;

          if (UIConfigData[this.UIFormName].layer == UIFormType.PopUp) {
            this.node.setScale(0.4, 0.4, 0.4);
            var opecity = this.node.getComponent(UIOpacity);

            if (!opecity) {
              this.node.addComponent(UIOpacity);
            }

            this.node.getComponent(UIOpacity).opacity = 255;
            this.node.setSiblingIndex(this.node.parent.children.length);
            this.node.active = true;
            UIMaskManager.getInstance().addMaskWindow(this.node);
            this.ShowPopUpAnimation(function () {
              UIMaskManager.getInstance().showMask(UIConfigData[_this2.UIFormName].uiFormLucenyType, _this2.MaskType.IsEasing, _this2.MaskType.EasingTime);

              var widgets = _this2.node.getComponentsInChildren(Widget);

              for (var i = 0; i < widgets.length; i++) {
                widgets[i].updateAlignment();
              }
            });
          } else {
            this.node.active = true;
          }
        }
        /**
         * 隐藏, 需要重新showUIForm
         */
        ;

        _proto.Hiding = function Hiding() {
          var _this3 = this;

          if (UIConfigData[this.UIFormName].layer == UIFormType.PopUp) {
            UIMaskManager.getInstance().removeMaskWindow(this.node);
            this.HidePopUpAnimation(function () {
              _this3.node.active = false;
            });
          } else {
            this.node.active = false;
          }
        }
        /**
         * 暂时无效果, 预计实现成(去除冻结的效果)
         */
        ;

        _proto.ReDisPlay = function ReDisPlay() {
          this.node.active = true;
          if (UIConfigData[this.UIFormName].layer == UIFormType.PopUp) ;
        }
        /**
         * 暂时无效果,  预计实现成(冻结住窗口, 无法响应任何点击事件)
         */
        ;

        _proto.Freeze = function Freeze() {
          if (UIConfigData[this.UIFormName].layer == UIFormType.PopUp) ;
        }
        /**
         * 显示与关闭
         */
        ;

        _proto.ShowUIForm = function ShowUIForm(uiId, obj) {
          UIManager.GetInstance().ShowUIForms(uiId, obj);
        };

        _proto.CloseUIForm = function CloseUIForm() {
          UIManager.GetInstance().CloseUIForms(this.UIFormName);
        }
        /**
         * 弹窗动画
         */
        ;

        _proto.ShowPopUpAnimation = function ShowPopUpAnimation(callback) {
          var _this4 = this; // this.node.setScale(1, 1, 1);
          // this.node.getComponent(UIOpacity).opacity = 255;
          // callback()


          var durationTime = 0.15;
          tween(this.node) // .to(durationTime, { scale: v3(1.05, 1.05, 1.05) }, {
          //     'onUpdate': (target: Vec3, ratio: number) => {
          //         this.node.getComponent(UIOpacity).opacity = ratio * 150;
          //     }
          // })
          .to(durationTime, {
            scale: v3(1, 1, 1)
          }, {
            'onUpdate': function onUpdate(target, ratio) {
              _this4.node.getComponent(UIOpacity).opacity = ratio * 255;
            }
          }).call(function () {
            callback();
          }).start();
        };

        _proto.HidePopUpAnimation = function HidePopUpAnimation(callback) {
          var _this5 = this;

          var durationTime = 0.25;
          tween(this.node).to(durationTime, {
            scale: v3(0.2, 0.2, 0.2)
          }, {
            'onUpdate': function onUpdate(target, ratio) {
              _this5.node.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
            }
          }).call(function () {
            callback();
          }).start();
        }
        /**
         * 消息机制
         */
        ;

        _proto.SendMessage = function SendMessage(messagType, parmas) {
          GEventManager.emit(messagType, parmas);
        };

        _proto.ReceiveMessage = function ReceiveMessage(messagType, callback, targer) {
          GEventManager.on(messagType, callback, targer);
        };

        return BaseUIForm;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUIView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIBinder.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseUIBinder;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseUIBinder = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "565b7ig4NxGOo3tJrPVOtiO", "BaseUIView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseUIView = exports('default', (_dec = ccclass('BaseUIView'), _dec(_class = /*#__PURE__*/function (_BaseUIBinder) {
        _inheritsLoose(BaseUIView, _BaseUIBinder);

        function BaseUIView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIBinder.call.apply(_BaseUIBinder, [this].concat(args)) || this;
          _this.called = false;
          return _this;
        }

        var _proto = BaseUIView.prototype;
        /** 初始化 */

        _proto._preInit = function _preInit() {
          if (this.called) return;

          _BaseUIBinder.prototype.__preInit.call(this);
        };

        return BaseUIView;
      }(BaseUIBinder)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BezierNB.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Vec3, Tween, v3, Quat;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      v3 = module.v3;
      Quat = module.Quat;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "6db32g2mMlFNLWyx9Ivq+3y", "BezierNB", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BezierNB = exports('BezierNB', (_dec = ccclass('BezierNB'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function BezierNB() {}

        BezierNB.Instance = function Instance() {
          if (this.instance == null) {
            this.instance = new BezierNB();
          }

          return this.instance;
        }
        /**
         * 贝塞尔曲线飞行
         * @param prop 
         * @param startPos 
         * @param endPos 
         * @param segmentNum 曲线段数
         * @param time  时间
         * @param fHeight 曲线弯度
         */
        ;

        var _proto = BezierNB.prototype;

        _proto.BezierFlyAnim = function BezierFlyAnim(prop, startPos, endPos, segmentNum, time, fHeight) {
          if (fHeight === void 0) {
            fHeight = 10;
          }

          if (prop == null) {
            return time;
          }

          var x = Math.min(startPos.x, endPos.x) + Math.abs(startPos.x - endPos.x) / 2;
          var y = Math.min(startPos.y, endPos.y) + Math.abs(startPos.y - endPos.y) / 2;
          var z = startPos.z;
          var midP = new Vec3(x, y, z);
          var length = Math.sqrt(Math.pow(startPos.x - midP.x, 2) + Math.pow(startPos.y - midP.y, 2));
          var rangeRadomNum = this.randomNum(0, 10);

          if (rangeRadomNum == 1) {
            midP.x = fHeight / length * (endPos.x - midP.x) + midP.x;
            midP.y = endPos.y;
          } else {
            midP.x = endPos.x;
            midP.y = fHeight / length * (endPos.y - midP.y) + midP.y;
          }

          var arrRecPos = [];
          arrRecPos.push(startPos);
          arrRecPos.push(midP);
          arrRecPos.push(endPos);
          var nodeIndex = 0;
          var pathList = [];

          for (var i = 0; i < segmentNum; i++) {
            var t = i / segmentNum;
            var pixel = this.CalculateCubicBezierPoint(t, arrRecPos[nodeIndex], arrRecPos[nodeIndex + 1], arrRecPos[nodeIndex + 2]);
            pathList.push(pixel);
          }

          pathList.push(endPos);
          this.fishFly(prop, pathList);
          return time;
        };

        _proto.fishFly = function fishFly(prop, pathList) {
          var tw = new Tween(prop);
          prop.position = pathList[0];

          var moveToPoint = function moveToPoint(node, beforPos, pos) {
            var dir = v3(beforPos).subtract(pos).normalize(); //旋转

            var quat = new Quat();
            Quat.fromViewUp(quat, dir, Vec3.UP);
            tw.to(0.2, {
              position: pos // worldRotation: quat

            });
          };

          for (var i = 1; i < pathList.length; i++) {
            var point = pathList[i];
            moveToPoint(prop, pathList[i - 1], point);
          }

          tw.start();
        };

        _proto.randomNum = function randomNum(minNum, maxNum) {
          var value_a = Math.random() * (maxNum - minNum + 1) + minNum + "";
          return parseInt(value_a);
        };

        _proto.CalculateCubicBezierPoint = function CalculateCubicBezierPoint(t, p0, p1, p2) {
          var u = 1 - t;
          var tt = t * t;
          var uu = u * u;
          var p = v3(uu * p0.x, uu * p0.y, uu * p0.z);
          var np1 = v3(2 * u * t * p1.x, 2 * u * t * p1.y, 2 * u * t * p1.z);
          var np2 = v3(tt * p2.x, tt * p2.y, tt * p2.z);
          p = v3(p.x + np1.x + np2.x, p.y + np1.y + np2.y, p.z + np1.z + np2.z);
          return p;
        };

        return BezierNB;
      }(), _class2.instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BridgeManager.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, native;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      native = module.native;
    }],
    execute: function () {
      cclegacy._RF.push({}, "adcfcc36NVESZd2Ex5GYZpg", "BridgeManager", undefined);

      var BridgeManager = exports('BridgeManager', /*#__PURE__*/function () {
        function BridgeManager() {
          this.isDebugMode = false;
          this.rewardSuccessFunc = void 0;
          this.rewardFailFunc = void 0;
          this.androidJavaClass = 'com/google/android/gms/Docking';
        }

        BridgeManager.Instance = function Instance() {
          if (!this._instance) {
            this._instance = new this();
          }

          return this._instance;
        } //是否debug模式
        ;

        var _proto = BridgeManager.prototype;

        _proto.SetDebugMode = function SetDebugMode(isDebugMode) {
          this.isDebugMode = isDebugMode;
        }
        /**
         * 调用java静态方法,注意引擎版本
         * @param funcName 方法名
         * @param engineVerEM36 引擎版本,引擎版本小于3.6要设置为false
         * @returns
         */
        ;

        _proto.CallJavaFunc = function CallJavaFunc(funcName, engineVerEM36) {
          console.log('CallJavaFunc: ' + funcName);

          if (this.isDebugMode) {
            return;
          } // if (engineVerEM36) {
          //cocoscreator 3.6及以上版本用native.


          native.reflection.callStaticMethod(this.androidJavaClass, funcName, '()V'); // }
          // else {
          //     //cocos creator 3.6以下版本是jsb
          //     jsb.reflection.callStaticMethod(this.androidJavaClass, funcName, "()V");
          // }
        };

        _proto.CallJavaFuncWithString = function CallJavaFuncWithString(funcName, param) {
          if (this.isDebugMode) {
            return;
          }

          native.reflection.callStaticMethod(this.androidJavaClass, funcName, '(Ljava/lang/String;)V', param);
        }
        /**111
         * 调用激励视频
         * @param successFunc 成功回调
         * @param failFunc 失败回调
         */
        ;

        _proto.ShowRewardVideo = function ShowRewardVideo(successFunc, failFunc) {
          this.rewardSuccessFunc = successFunc;
          this.rewardFailFunc = failFunc;
          this.CallJavaFunc('ShowRewardVideo');

          if (this.isDebugMode) {
            this.rewardSuccessFunc();
          }
        }
        /**
         * java回调ts
         * @param msg
         */
        ;

        _proto.JavaCallBackFunc = function JavaCallBackFunc(msg) {
          // console.log("java回调js: "+msg);
          if (msg == 'RewardSuccess') {
            if (this.rewardSuccessFunc) {
              this.rewardSuccessFunc();
            }
          } else if (msg == 'RewardFail') {
            if (this.rewardFailFunc) {
              this.rewardFailFunc();
            }
          }
        };

        return BridgeManager;
      }()); //Andriod回调类似以下，回调此脚本的JavaCallBackFunc方法,参数为msg
      //CocosJavascriptJavaBridge.evalString("window.BridgeManager.JavaCallBackFunc('RewardSuccess')");

      BridgeManager._instance = void 0;
      window['BridgeManager'] = BridgeManager.Instance();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonPlus.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SoundManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, Button, SoundManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Button = module.Button;
    }, function (module) {
      SoundManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "3557dv0qJZPWrNBN7zIeGX5", "ButtonPlus", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode,
          menu = _decorator.menu,
          help = _decorator.help,
          inspector = _decorator.inspector;
      var ButtonPlus = exports('default', (_dec = ccclass('ButtonPlus'), _dec2 = menu('i18n:MAIN_MENU.component.ui/Button'), _dec3 = help('i18n:COMPONENT.help_url.button'), _dec4 = inspector('packages://buttonplus/inspector.js'), _dec5 = property({
        tooltip: "音效路径",
        type: '',
        multiline: true,
        formerlySerializedAs: '_N$string'
      }), _dec6 = property({
        tooltip: "屏蔽连续点击"
      }), _dec7 = property({
        tooltip: "屏蔽时间, 单位:秒"
      }), _dec8 = property({
        tooltip: "是否开启长按事件"
      }), _dec9 = property({
        tooltip: "长按时间"
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_Button) {
        _inheritsLoose(ButtonPlus, _Button);

        function ButtonPlus() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Button.call.apply(_Button, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "audioUrl", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "openContinuous", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "continuousTime", _descriptor3, _assertThisInitialized(_this));

          _this.continuous = false;
          _this._continuousTimer = null;

          _initializerDefineProperty(_this, "openLongPress", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "longPressTime", _descriptor5, _assertThisInitialized(_this));

          _this.longPressFlag = false;
          _this.longPressTimer = null;
          return _this;
        }

        var _proto = ButtonPlus.prototype;

        _proto.onEnable = function onEnable() {
          this.continuous = false;

          _Button.prototype.onEnable.call(this);
        };

        _proto.onDisable = function onDisable() {
          if (this._continuousTimer) {
            clearTimeout(this._continuousTimer);
            this._continuousTimer = null;
          }

          if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
          }

          _Button.prototype.onDisable.call(this);
        }
        /** 重写 */
        ;

        _proto._onTouchBegan = function _onTouchBegan(event) {
          if (!this.interactable || !this.enabledInHierarchy) return;

          if (this.openLongPress && !this.longPressFlag) {
            // 开启长按
            if (this.longPressTimer) clearTimeout(this.longPressTimer);
            this.longPressTimer = setTimeout(function () {
              // 还在触摸中 触发事件
              if (this["_pressed"]) {
                this.node.emit('longclickStart', this);
                this.longPressFlag = true;
              }
            }.bind(this), this.longPressTime * 1000);
          }

          this["_pressed"] = true;
          this["_updateState"]();
          event.stopPropagation();
        };

        _proto._onTouchEnded = function _onTouchEnded(event) {
          if (!this.interactable || !this.enabledInHierarchy) return;

          if (this["_pressed"] && this.longPressFlag) {
            this.node.emit('longclickEnd', this);
            this.longPressFlag = false;
          } else if (this["_pressed"] && !this.continuous) {
            this.continuous = this.openContinuous ? true : false;
            Component.EventHandler.emitEvents(this.clickEvents, event);
            this.node.emit('click', this);
            SoundManager.getInstance().playEffect(this.audioUrl);

            if (this.openContinuous) {
              this._continuousTimer = setTimeout(function () {
                this.continuous = false;
              }.bind(this), this.continuousTime * 1000);
            }
          }

          this["_pressed"] = false;
          this["_updateState"]();
          event.stopPropagation();
        };

        _proto._onTouchCancel = function _onTouchCancel() {
          if (!this.interactable || !this.enabledInHierarchy) return;

          if (this["_pressed"] && this.longPressFlag) {
            this.node.emit('longclickEnd', this);
            this.longPressFlag = false;
          }

          this["_pressed"] = false;
          this["_updateState"]();
        }
        /** 添加点击事件 */
        ;

        _proto.addClick = function addClick(callback, target) {
          this.node.off('click');
          this.node.on('click', callback, target);
        }
        /** 添加一个长按事件 */
        ;

        _proto.addLongClick = function addLongClick(startFunc, endFunc, target) {
          this.node.off('longclickStart');
          this.node.off('longclickEnd');
          this.node.on('longclickStart', startFunc, target);
          this.node.on('longclickEnd', endFunc, target);
        };

        return ButtonPlus;
      }(Button), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioUrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "openContinuous", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "continuousTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "openLongPress", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "longPressTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CloseADApi.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator, assetManager, director, Node, UITransform, Sprite, SpriteFrame, Widget, view, Label;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      director = module.director;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Widget = module.Widget;
      view = module.view;
      Label = module.Label;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a8931VvyRpLaphg7i3/4rkm", "CloseADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CloseADApi = exports('CloseADApi', (_dec = ccclass('CloseADApi'), _dec(_class = /*#__PURE__*/function () {
        function CloseADApi() {
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.PassiveVideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.TIMingData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.AdCustomBannerData = null;
          this.AdCustomTypeData = void 0;
          this.ADNewNativeAdData = null;
          this.ADNewNativeTypeData = null;
          this.ADNewConfig = void 0;
          this.AdGroup = 0;
          this.systemBannerAd = null;
          this.loadSucc_SystemBanner = false;
          this.isShow_SystemBanner = false;
          this.NUM_BannerUpdateTime = 30;
          this.interval_updateBanner = null;
          this.interstitialAd = null;
          this.rewardedVideoAd = null;
          this.loadSucc_Video = false;
          this.callback_Video = null;
          this.nativeRes = null;
          this.loadNativeRes = false;
          this.nativeAd = null;
          this.nativeBannerInfo = null;
          this.loadSucc_NativeBanner = false;
          this.isShow_NativeBanner = false;
          this.node_nativeBanner = null;
          this.nativeImageAd = null;
          this.nativeImageInfo = null;
          this.loadSucc_NativeImage = false;
          this.isShow_NativeImage = false;
          this.nativeIconAd = null;
          this.nativeIconInfo = null;
          this.loadSucc_NativeIcon = false;
          this.isShow_NativeIcon = false;
          this.navigateBoxPortalAd = null;
          this.loadSucc_NavigateBoxPortal = false;
          this.navigateBoxBannerAd = null;
          this.loadSucc_NavigateBoxBanner = false;
          this.temp_hasShowBanner = false;
          this.isShow_NavigateSettle = false;
          this.systemInfo = null;
          this.videoPath = void 0;
          this.clipIndexList = [];
        }

        var _proto = CloseADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          this.createAd();
          _callback && _callback();
          console.log('close ===================> onInit  ok');
        };

        _proto.createAd = function createAd() {
          this.loadNativeBannerRes();
        };

        _proto.setGroup = function setGroup(group) {
          this.AdGroup = group;
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {};

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createSystemBanner = function createSystemBanner() {};

        _proto.showBanner = function showBanner() {
          console.log('===============>展示banner');
          this.createNativeBanner();
        };

        _proto.hideBanner = function hideBanner() {
          console.log('===============>关闭banner');
        }
        /**
         * 展示系统banner
         */
        ;

        _proto.showSystemBanner = function showSystemBanner() {}
        /**
         * 隐藏系统banner
         */
        ;

        _proto.hideSystemBanner = function hideSystemBanner() {}
        /**
         * 刷新banner
         */
        ;

        _proto.updateBanner = function updateBanner() {}
        /**
         * 刷新系统banner
         */
        ;

        _proto.updateSystemBanner = function updateSystemBanner() {}
        /** */
        ;

        _proto.updateNativeBanner = function updateNativeBanner() {};

        _proto.createVideo = function createVideo() {};

        _proto.showVideo = function showVideo(_successCallback) {
          console.log('===============>展示banner');

          _successCallback(1);
        }
        /**展示 被动激励视频 */
        ;

        _proto.showPassiveVideo = function showPassiveVideo(_successCallback) {};

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createInsertAd = function createInsertAd() {};

        _proto.showInsertAd = function showInsertAd() {}
        /**
         * 创建互推盒子九宫格广告
         */
        ;

        _proto.createNavigateBoxPortal = function createNavigateBoxPortal() {};

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {
          console.log('===============>展示互推盒子九宫格广告');
        }
        /**
         * 创建互推盒子横幅广告
         */
        ;

        _proto.createNavigateBoxBanner = function createNavigateBoxBanner() {};

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {
          console.log('===============>展示互推盒子横幅广告广告');
        };

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {}
        /**
         * 加载原生banner广告资源
         */
        ;

        _proto.loadNativeBannerRes = function loadNativeBannerRes() {
          console.log('YDTXGameSDK', '--loadNativeBannerRes--');
          this.nativeRes = {
            NativeBannerBg: null,
            NativeBannerButton: null,
            NativeClose: null,
            NativeAdTip: null
          };
        };

        _proto.createNativeBanner = function createNativeBanner() {
          var _this = this;

          this.nativeBannerInfo = {
            adId: '123456',
            title: 'test',
            desc: 'test-------',
            Native_icon_url: 'http://localhost:10002/ad/TestBanner.png',
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null
          };
          assetManager.loadRemote(this.nativeBannerInfo.Native_icon_url, function (err, texture) {
            console.log('YDTXGameSDK', 'OPPO 原生大图加载成功');
            _this.nativeBannerInfo.Native_icon = texture;

            _this.showNativeBanner();
          });
        }
        /**
         * 展示原生banner
         */
        ;

        _proto.showNativeBanner = function showNativeBanner() {
          var _this2 = this;

          if (this.isShow_NavigateSettle) {
            console.log('YDTXGameSDK', ' 正在展示互推盒子 return');
            return;
          }

          this.isShow_NativeBanner = true;
          var scene = director.getScene(); //原生广告id

          var tempid = this.nativeBannerInfo.adId;
          this.reportNativeBannerShow(tempid);
          console.log('YDTXGameSDK', 'showNativeBanner========================');
          this.node_nativeBanner = new Node('node_nativeBanner');
          this.node_nativeBanner.addComponent(UITransform);
          scene.getChildByName('Canvas').addChild(this.node_nativeBanner);
          this.node_nativeBanner.addComponent(Sprite);
          this.node_nativeBanner.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerBg);
          this.node_nativeBanner.addComponent(Widget);
          this.node_nativeBanner.getComponent(Widget).isAlignHorizontalCenter = true;
          this.node_nativeBanner.getComponent(Widget).isAlignBottom = true;
          this.node_nativeBanner.getComponent(Widget).bottom = 0;
          var canvasSize = view.getVisibleSize();

          if (canvasSize.width < canvasSize.height) {
            this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width;
            this.node_nativeBanner.getComponent(UITransform).height = canvasSize.width * 0.18;
          } else {
            this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width / 2;
            this.node_nativeBanner.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).width * 0.18;
          }

          if (this.AdGroup != 0) this.node_nativeBanner.layer = this.AdGroup;
          this.node_nativeBanner.setSiblingIndex(999);
          this.node_nativeBanner.on(Node.EventType.TOUCH_START, function (event) {
            _this2.reportNativeBannerClick(tempid);
          }); // 广告

          var adTip = new Node('adTip');
          adTip.addComponent(UITransform);
          this.node_nativeBanner.addChild(adTip);
          adTip.addComponent(Sprite);
          adTip.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeAdTip);
          adTip.getComponent(UITransform).height = 0.2 * this.node_nativeBanner.getComponent(UITransform).height;
          adTip.getComponent(UITransform).width = adTip.getComponent(UITransform).height / 0.45;
          if (this.AdGroup != 0) adTip.layer = this.AdGroup;
          adTip.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - adTip.getComponent(UITransform).width / 2, -this.node_nativeBanner.getComponent(UITransform).height / 2 + adTip.getComponent(UITransform).height / 2); // 点击安装

          var bannerButton = new Node('bannerButton');
          bannerButton.addComponent(UITransform);
          this.node_nativeBanner.addChild(bannerButton);
          bannerButton.addComponent(Sprite);
          if (this.AdGroup != 0) bannerButton.layer = this.AdGroup;
          bannerButton.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerButton);
          bannerButton.getComponent(UITransform).width = this.node_nativeBanner.getComponent(UITransform).width * 0.255;
          bannerButton.getComponent(UITransform).height = bannerButton.getComponent(UITransform).width * 0.351;
          bannerButton.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width * 0.185, 0);

          if (this.nativeBannerInfo.Native_icon) {
            // icon
            var icon = new Node('icon');
            icon.addComponent(UITransform);
            this.node_nativeBanner.addChild(icon);
            if (this.AdGroup != 0) icon.layer = this.AdGroup;
            icon.addComponent(Sprite);
            icon.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_icon);
            icon.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height * 0.8;
            icon.getComponent(UITransform).width = icon.getComponent(UITransform).height;
            icon.setPosition(icon.getComponent(UITransform).width * 0.8 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          } else if (this.nativeBannerInfo.Native_BigImage) {
            // 大图
            var image = new Node('image');
            image.addComponent(UITransform);
            this.node_nativeBanner.addChild(image);
            if (this.AdGroup != 0) image.layer = this.AdGroup;
            image.addComponent(Sprite);
            image.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_BigImage);
            image.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
            image.getComponent(UITransform).width = image.getComponent(UITransform).height * 2;
            image.setPosition(image.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          } // 标题或描述


          var titleLabel = new Node('titleLabel');
          titleLabel.addComponent(UITransform);
          this.node_nativeBanner.addChild(titleLabel);
          if (this.AdGroup != 0) titleLabel.layer = this.AdGroup;
          titleLabel.addComponent(Label); // titleLabel.getComponent(UITransform).priority = 999;

          if (canvasSize.width < canvasSize.height) {
            titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().width / 1080);
          } else {
            titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().height / 1080);
          }

          if (this.nativeBannerInfo.desc == '') {
            titleLabel.getComponent(Label).string = this.nativeBannerInfo.title;
          } else {
            titleLabel.getComponent(Label).string = this.nativeBannerInfo.desc;
          }

          titleLabel.getComponent(Label).overflow = Label.Overflow.CLAMP;
          titleLabel.getComponent(Label).horizontalAlign = Label.HorizontalAlign.LEFT;
          titleLabel.getComponent(Label).verticalAlign = Label.VerticalAlign.CENTER;
          titleLabel.getComponent(Label).lineHeight = titleLabel.getComponent(Label).fontSize;
          titleLabel.getComponent(UITransform).width = this.node_nativeBanner.getComponent(UITransform).width - this.node_nativeBanner.getComponent(UITransform).height * 2 - bannerButton.getComponent(UITransform).width - 0.2 * this.node_nativeBanner.getComponent(UITransform).height / 0.45;
          titleLabel.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
          titleLabel.setPosition(0, -this.node_nativeBanner.getComponent(UITransform).width / 2 + this.node_nativeBanner.getComponent(UITransform).height * 2.1 + titleLabel.getComponent(UITransform).width / 2);
          var NativeClose = new Node('closeICON');
          NativeClose.addComponent(UITransform);
          this.node_nativeBanner.addChild(NativeClose); // NativeClose.getComponent(UITransform).priority = 999;

          NativeClose.addComponent(Sprite);
          if (this.AdGroup != 0) NativeClose.layer = this.AdGroup;
          NativeClose.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeClose);
          NativeClose.getComponent(UITransform).width = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          NativeClose.getComponent(UITransform).height = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          NativeClose.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - NativeClose.getComponent(UITransform).width / 2, this.node_nativeBanner.getComponent(UITransform).height / 2 - NativeClose.getComponent(UITransform).width / 2); // 监听原生banner关闭

          NativeClose.on(Node.EventType.TOUCH_START, function (event) {
            console.log('YDTXGameSDK', '原生banner关闭', _this2.NUM_BannerUpdateTime + 'S后再次刷新');

            _this2.hideNativeBanner();

            _this2.updateBanner(); // 清除触摸事件的冒泡
            // event.propagationStopped = true;

          });
        }
        /**
         * 隐藏原生banner
         */
        ;

        _proto.hideNativeBanner = function hideNativeBanner() {
          if (this.isShow_NativeBanner) {
            console.log('YDTXGameSDK', 'OPPO hideNativeBanner========================');
            this.isShow_NativeBanner = false;
            this.node_nativeBanner.removeFromParent();
            this.node_nativeBanner = null;
          }
        };

        _proto.showCustomBanner = function showCustomBanner() {};

        _proto.hideCustomBanner = function hideCustomBanner() {};

        _proto.reportNativeBannerShow = function reportNativeBannerShow(adId) {
          console.log('YDTXGameSDK', 'OPPO 该原生广告id上报展示', adId);
        };

        _proto.reportNativeBannerClick = function reportNativeBannerClick(adId) {
          console.log('YDTXGameSDK', 'OPPO 原生广告上报点击', adId);
        }
        /**原生大图 */
        ;

        _proto.createNativeImage = function createNativeImage() {
          this.nativeImageInfo = {
            adId: '88888888',
            title: '测试标题',
            desc: '测试详情',
            Native_icon: 'http://localhost:10002/ad/TestGetNativeAdIcon.png',
            Native_BigImage: 'http://localhost:10002/ad/TestGetNativeAdImage.png',
            NativeAdTip: 'http://localhost:10002/ad/TestGetNativeAdAdTip.png',
            NativeClose: 'http://localhost:10002/ad/TestGetNativeAdClose.png'
          };
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeAdInfo = function getNativeAdInfo(type) {
          return this.nativeImageInfo;
        };

        _proto.getHWNativeAdInfo = function getHWNativeAdInfo(_infoCallback) {
          _infoCallback && _infoCallback(this.nativeImageInfo);
        };

        _proto.reportNativeImageShow = function reportNativeImageShow(adId) {
          console.log('YDTXGameSDK', 'OPPO 该原生大图广告id上报展示', adId);
        };

        _proto.reportNativeImageClick = function reportNativeImageClick(adId) {
          console.log('YDTXGameSDK', 'OPPO 原生大图广告上报点击', adId);
        }
        /**刷新原生大图广告 */
        ;

        _proto.loadNativeImage = function loadNativeImage() {}
        /**原生icon */
        ;

        _proto.createNativeIcon = function createNativeIcon() {
          console.log('YDTXGameSDK', '--createNativeIcon--');
          this.nativeIconInfo = {
            adId: '88888888',
            title: '测试标题',
            desc: '测试详情',
            Native_icon: 'http://localhost:10002/ad/TestGetNativeAdIcon.png',
            Native_BigImage: 'http://localhost:10002/ad/TestGetNativeAdImage.png',
            NativeAdTip: 'http://localhost:10002/ad/TestGetNativeAdAdTip.png',
            NativeClose: 'http://localhost:10002/ad/TestGetNativeAdClose.png'
          };
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeIconAdInfo = function getNativeIconAdInfo(type) {
          console.log('YDTXGameSDK', '获取自定义原生Icon广告');
          return this.nativeIconInfo;
        };

        _proto.reportNativeIconShow = function reportNativeIconShow(adId) {
          console.log('YDTXGameSDK', 'OPPO 该原生Icon广告id上报展示', adId);
        };

        _proto.reportNativeIconClick = function reportNativeIconClick(adId) {
          console.log('YDTXGameSDK', 'OPPO 原生Icon广告上报点击', adId);
        }
        /**刷新原生Icon广告 */
        ;

        _proto.loadNativeIcon = function loadNativeIcon() {};

        _proto.addDesktop = function addDesktop(_callback) {}
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {};

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.recordClipRecorder = function recordClipRecorder(data) {};

        _proto.pauseGameVideo = function pauseGameVideo() {};

        _proto.resumeGameVideo = function resumeGameVideo() {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.phoneVibrate = function phoneVibrate(isLong) {};

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        _proto.showCustomAd = function showCustomAd() {};

        _proto.hideCustomAd = function hideCustomAd() {};

        _proto.showGridAd = function showGridAd() {};

        _proto.hideGridAd = function hideGridAd() {};

        _proto.navigateToScene = function navigateToScene(_succeedcallback, _failcallback) {};

        _proto.Share = function Share(_succeedcallback, _failcallback) {};

        _proto.showNewNativeAd = function showNewNativeAd() {};

        _proto.hideNewNativeAd = function hideNewNativeAd() {};

        _proto.showCustomType12 = function showCustomType12(type, playSuccessCall) {};

        _proto.showADNewNativeType12 = function showADNewNativeType12(type, playSuccessCall) {};

        _proto.ShowGameIconAd = function ShowGameIconAd() {};

        _proto.HideGameIconAd = function HideGameIconAd() {};

        _proto.ShowHomeIconAd = function ShowHomeIconAd() {};

        _proto.HideHomeIconAd = function HideHomeIconAd() {};

        _proto.ShowSideAd = function ShowSideAd() {};

        _proto.HideSideAd = function HideSideAd() {};

        _proto.ShowMoreGamesAd = function ShowMoreGamesAd() {};

        _proto.HideMoreGamesAd = function HideMoreGamesAd() {};

        _proto.ShowBannerNativeAd = function ShowBannerNativeAd() {};

        _proto.HideBannerNativeAd = function HideBannerNativeAd() {};

        _proto.hideCustomIconAd = function hideCustomIconAd() {};

        _proto.showCustomIconAd = function showCustomIconAd() {};

        return CloseADApi;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosAnalyticsPack.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AnalyticsParent.ts', './AnalyticsManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, AnalyticsParent, EAnalyticsEvent, EAnalyticsEventType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AnalyticsParent = module.default;
    }, function (module) {
      EAnalyticsEvent = module.EAnalyticsEvent;
      EAnalyticsEventType = module.EAnalyticsEventType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cb9b4SbWGBOwIW9bZ6ru6SF", "CocosAnalyticsPack", undefined);

      var CocosAnalyticsPack = exports('default', /*#__PURE__*/function (_AnalyticsParent) {
        _inheritsLoose(CocosAnalyticsPack, _AnalyticsParent);

        function CocosAnalyticsPack() {
          var _this;

          _this = _AnalyticsParent.call(this) || this;
          _this.initParams = null;
          _this.initSuccess = false;
          var type = typeof cocosAnalytics;
          _this.initSuccess = type != "undefined";
          return _this;
        }

        var _proto = CocosAnalyticsPack.prototype;

        _proto.init = function init(param) {
          this.initParams = param;
        };

        _proto.login = function login(event, param) {
          if (!this.initSuccess) return;

          if (event == EAnalyticsEvent.Start) {
            cocosAnalytics.CAAccount.loginStart({
              channel: this.initParams.channel
            });
          } else if (event == EAnalyticsEvent.Success) {
            cocosAnalytics.CAAccount.loginSuccess({
              userID: this.initParams.userId,
              // userID: 'dddddddd',
              age: 1,
              sex: 0,
              channel: this.initParams.channel
            });
          } else if (event == EAnalyticsEvent.Fail) {
            cocosAnalytics.CAAccount.loginFailed({
              channel: this.initParams.channel,
              reason: '登录失败' // 失败原因

            });
          } else if (event == EAnalyticsEvent.Cancel) {
            cocosAnalytics.CAAccount.logout();
          }
        };

        _proto.enableDebug = function enableDebug(debug) {
          if (!this.initSuccess) return;
          cocosAnalytics.enableDebug(debug);
        };

        _proto.raiseEvent = function raiseEvent(eventType, event, id, param) {
          if (!this.initSuccess) return;

          if (eventType == EAnalyticsEventType.Custom) {
            this._raiseCustomEvent(event, id, param);
          } else if (eventType == EAnalyticsEventType.Level) {
            this._raiseLevelEvent(event, id, param);
          }
        };

        _proto._raiseCustomEvent = function _raiseCustomEvent(event, id, param) {
          if (event == EAnalyticsEvent.Start) {
            cocosAnalytics.CACustomEvent.onStarted(id, param);
          } else if (event == EAnalyticsEvent.Success) {
            cocosAnalytics.CACustomEvent.onSuccess(id, param);
          } else if (event == EAnalyticsEvent.Fail) {
            cocosAnalytics.CACustomEvent.onFailed(id, param, param.failresult);
          } else if (event == EAnalyticsEvent.Cancel) {
            cocosAnalytics.CACustomEvent.onCancelled(id, param);
          }
        };

        _proto._raiseLevelEvent = function _raiseLevelEvent(event, id, param) {
          if (event == EAnalyticsEvent.Start) {
            cocosAnalytics.CALevels.begin({
              level: id
            });
          } else if (event == EAnalyticsEvent.Success) {
            cocosAnalytics.CALevels.complete({
              level: id
            });
          } else if (event == EAnalyticsEvent.Fail) {
            cocosAnalytics.CALevels.failed({
              level: id,
              reason: param.reason
            });
          }
        };

        return CocosAnalyticsPack;
      }(AnalyticsParent));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosHelper.ts", ['cc', './SysDefine.ts'], function (exports) {
  'use strict';

  var cclegacy, log, resources, SpriteFrame, SysDefine;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      SysDefine = module.SysDefine;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9abb73H1jJAeIkhS0Qb3GJO", "CocosHelper", undefined);

      var CocosHelper = exports('default', /*#__PURE__*/function () {
        function CocosHelper() {}
        /** 等待时间, 秒为单位 */

        /**  */


        CocosHelper.loadResSpine = function loadResSpine(name, call, errcall) {
          if (errcall === void 0) {
            errcall = null;
          }

          resources.load(name, SpriteFrame, function (err, assect) {
            if (err) {
              console.error("资源加载问题", err);
              errcall && errcall(err);
              return;
            }

            call && call(assect);
          });
        }
        /**
         * 寻找子节点
         */
        ;

        CocosHelper.FindChildInNode = function FindChildInNode(nodeName, rootNode) {
          if (rootNode.name == nodeName) {
            return rootNode;
          }

          for (var i = 0; i < rootNode.children.length; i++) {
            var node = this.FindChildInNode(nodeName, rootNode.children[i]);

            if (node) {
              return node;
            }
          }

          return null;
        }
        /** 检测前缀是否符合绑定规范 */
        ;

        CocosHelper.checkNodePrefix = function checkNodePrefix(name) {
          if (name[0] !== SysDefine.SYS_STANDARD_Prefix) {
            return false;
          }

          return true;
        }
        /** 检查后缀 */
        ;

        CocosHelper.checkBindChildren = function checkBindChildren(name) {
          if (name[name.length - 1] !== SysDefine.SYS_STANDARD_End) {
            return true;
          }

          return false;
        }
        /** 获得类型和name */
        ;

        CocosHelper.getPrefixNames = function getPrefixNames(name) {
          if (name === null) {
            return;
          }

          return name.split(SysDefine.SYS_STANDARD_Separator);
        };

        CocosHelper._getComponentName = function _getComponentName(component) {
          return component.name.match(/<.*>$/)[0].slice(1, -1);
        };

        return CocosHelper;
      }());

      CocosHelper.sleep = function (time) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(true);
          }, time * 1000);
        });
      };

      CocosHelper.loadRes = function (url, type) {
        if (!url || !type) {
          log("参数错误", url, type);
          return;
        }

        return new Promise(function (resolve, reject) {
          resources.load(url, type, function (err, asset) {
            if (err) {
              log("[\u8D44\u6E90\u52A0\u8F7D] \u9519\u8BEF " + err);
              resolve(null);
              return;
            }

            resolve(asset);
          });
        });
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CWebSocket.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, log;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17d5dw41apLLI4q0iQS0bsI", "CWebSocket", undefined);
      /**  */


      var CWebSocket = exports('default', /*#__PURE__*/function () {
        function CWebSocket() {
          this.ws = null;
          this.onConnect = null;
          this.onMessage = null;
          this.onError = null;
          this.onClose = null;
        }

        var _proto = CWebSocket.prototype;
        /** 连接网络 */

        _proto.connect = function connect(option) {
          var _this = this;

          if (this.ws && this.ws.readyState === WebSocket.CONNECTING) {
            log("已经连接上网络, 重新连接前请先调用close方法!");
            return false;
          }

          var url = "";

          if (typeof option == "string") {
            url = option;
          } else {
            url = option.protocol + "://" + option.ip + ":" + option.port;
          }

          this.ws = new WebSocket(url);
          this.ws.binaryType = "arraybuffer";
          this.ws.onopen = this.onConnect;

          this.ws.onmessage = function (event) {
            _this.onMessage(event.data);
          };

          this.ws.onclose = this.onClose;
          this.ws.onerror = this.onError;
          return true;
        }
        /** 发送消息 */
        ;

        _proto.send = function send(data) {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            log('网络连接已关闭, 无法发送消息');
            return false;
          }

          this.ws.send(JSON.stringify(data));
          return true;
        }
        /** 主动关闭连接 */
        ;

        _proto.close = function close() {
          if (this.ws && this.ws.readyState !== WebSocket.CLOSED) {
            this.ws.close();
            this.ws = null;
          }

          return true;
        };

        return CWebSocket;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FormType.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d6d028Kt+tDeqekh0z2iCnp", "FormType", undefined);

      var MaskType = exports('MaskType', // 点击阴影关闭
      // 缓动实现
      // 缓动时间
      function MaskType(ClickMaskClose, IsEasing, EasingTime) {
        if (ClickMaskClose === void 0) {
          ClickMaskClose = false;
        }

        if (IsEasing === void 0) {
          IsEasing = true;
        }

        if (EasingTime === void 0) {
          EasingTime = 0.2;
        }

        this.ClickMaskClose = false;
        this.IsEasing = true;
        this.EasingTime = 0.2;
        this.ClickMaskClose = ClickMaskClose;
        this.IsEasing = IsEasing;
        this.EasingTime = EasingTime;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEnum.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('GameType', void 0);

      cclegacy._RF.push({}, "71d03UjL+1NloFcuYhzgyjz", "GameEnum", undefined);

      var GameType;

      (function (GameType) {
        GameType[GameType["TowerDefense"] = 0] = "TowerDefense";
      })(GameType || (GameType = exports('GameType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SingletonClass.ts', './UIManager.ts', './GameUIConfig.ts', './GameEnum.ts', './JsonUtil.ts', './GEventManager.ts', './Loader.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SingletonClass, UIManager, UIID, GameType, JsonUtil, GEventManager, Event_Name, Loader;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SingletonClass = module.default;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      GameType = module.GameType;
    }, function (module) {
      JsonUtil = module.JsonUtil;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      Loader = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "82160JpoE5H86W2B9VPidpq", "GameManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameManager = exports('GameManager', (_dec = ccclass('GameManager'), _dec(_class = /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(GameManager, _SingletonClass);

        function GameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingletonClass.call.apply(_SingletonClass, [this].concat(args)) || this;
          _this.gameType = GameType.TowerDefense;
          _this.inGame = false;
          return _this;
        } //是否处于游戏状态


        GameManager.instance = function instance() {
          return _SingletonClass.instance.call(this);
        }
        /**加载游戏 */
        ;

        var _proto = GameManager.prototype;

        _proto.LoadGame = function LoadGame() {
          var table = JsonUtil.get('HallData');
          var data = table[this.gameType];
          UIManager.GetInstance().ShowUIForms(UIID.Loading, {
            bundleName: data.BundleName,
            openUI: data.OpenUI
          });
          this.inGame = true;
        };

        _proto.ExitGame = function ExitGame() {
          GEventManager.emit(Event_Name.GAME_RETURN_HALL, null);
          this.inGame = false;
          UIManager.GetInstance().ShowUIForms(UIID.HallUI);
          var table = JsonUtil.get('HallData');
          var bundleName = table[this.gameType].BundleName;
          Loader.releaseBundle(bundleName);
        };

        return GameManager;
      }(SingletonClass)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUIConfig.ts", ['cc', './SysDefine.ts'], function (exports) {
  'use strict';

  var cclegacy, UIFormType, UIFormShowMode, UIFormLucenyType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UIFormType = module.UIFormType;
      UIFormShowMode = module.UIFormShowMode;
      UIFormLucenyType = module.UIFormLucenyType;
    }],
    execute: function () {
      exports('UIID', void 0);

      var _UIConfigData;

      cclegacy._RF.push({}, "fa25f8JeE5FQod3VZUuYM0p", "GameUIConfig", undefined);

      var UIID;
      /** 打开界面方式的配置数据 */

      (function (UIID) {
        UIID[UIID["Loading"] = 1] = "Loading";
        UIID[UIID["HallUI"] = 2] = "HallUI";
        UIID[UIID["SignUI"] = 3] = "SignUI";
        UIID[UIID["SettingUI"] = 4] = "SettingUI";
        UIID[UIID["AddTimeTip"] = 5] = "AddTimeTip";
        UIID[UIID["TowerDefenseView"] = 6] = "TowerDefenseView";
        UIID[UIID["WaterPipeView"] = 7] = "WaterPipeView";
        UIID[UIID["RoomEscapeView"] = 8] = "RoomEscapeView";
        UIID[UIID["LongCatView"] = 9] = "LongCatView";
        UIID[UIID["WinUI"] = 10] = "WinUI";
      })(UIID || (UIID = exports('UIID', {})));

      var UIConfigData = exports('UIConfigData', (_UIConfigData = {}, _UIConfigData[UIID.Loading] = {
        script: 'LoadingUI',
        prefab: "UIForms/LoadingUI",
        bundle: "UI",
        layer: UIFormType.Independent,
        uiFormShowMode: UIFormShowMode.Normal,
        uiFormLucenyType: UIFormLucenyType.Lucency,
        closeAndDestory: 0
      }, _UIConfigData[UIID.HallUI] = {
        script: 'HallUI',
        prefab: "UIForms/HallUI",
        bundle: "UI",
        layer: UIFormType.Normal,
        uiFormShowMode: UIFormShowMode.Normal,
        uiFormLucenyType: UIFormLucenyType.Lucency,
        closeAndDestory: 0
      }, _UIConfigData[UIID.SignUI] = {
        script: 'SignUI',
        prefab: "UIForms/SignUI",
        bundle: "UI",
        layer: UIFormType.PopUp,
        uiFormShowMode: UIFormShowMode.Normal,
        uiFormLucenyType: UIFormLucenyType.ImPenetrable,
        closeAndDestory: 0
      }, _UIConfigData[UIID.SettingUI] = {
        script: 'SettingUI',
        prefab: "UIForms/SettingUI",
        bundle: "UI",
        layer: UIFormType.PopUp,
        uiFormShowMode: UIFormShowMode.Normal,
        uiFormLucenyType: UIFormLucenyType.ImPenetrable,
        closeAndDestory: 0
      }, _UIConfigData[UIID.AddTimeTip] = {
        script: 'AddTimeTip',
        prefab: "UIForms/AddTimeTip",
        bundle: "UI",
        layer: UIFormType.PopUp,
        uiFormShowMode: UIFormShowMode.Normal,
        uiFormLucenyType: UIFormLucenyType.ImPenetrable,
        closeAndDestory: 0
      }, _UIConfigData[UIID.TowerDefenseView] = {
        script: 'TowerDefenseView',
        prefab: "UI/prefabs/TowerDefenseView",
        bundle: "TowerDefense",
        layer: UIFormType.PopUp,
        uiFormShowMode: UIFormShowMode.Normal,
        uiFormLucenyType: UIFormLucenyType.Pentrate,
        closeAndDestory: 1
      }, _UIConfigData[UIID.WaterPipeView] = {
        script: 'WaterPipeView',
        prefab: "UI/prefabs/WaterPipeView",
        bundle: "WaterPipe",
        layer: UIFormType.Normal,
        uiFormShowMode: UIFormShowMode.HideOther,
        uiFormLucenyType: UIFormLucenyType.ImPenetrable,
        closeAndDestory: 1
      }, _UIConfigData[UIID.RoomEscapeView] = {
        script: 'RoomEscapeView',
        prefab: "UI/prefabs/RoomEscapeView",
        bundle: "RoomEscape",
        layer: UIFormType.Normal,
        uiFormShowMode: UIFormShowMode.HideOther,
        uiFormLucenyType: UIFormLucenyType.ImPenetrable,
        closeAndDestory: 1
      }, _UIConfigData[UIID.LongCatView] = {
        script: 'LongCatView',
        prefab: "UI/prefabs/LongCatView",
        bundle: "LongCat",
        layer: UIFormType.Normal,
        uiFormShowMode: UIFormShowMode.HideOther,
        uiFormLucenyType: UIFormLucenyType.ImPenetrable,
        closeAndDestory: 1
      }, _UIConfigData[UIID.WinUI] = {
        script: 'WinUI',
        prefab: "UIForms/WinUI",
        bundle: "UI",
        layer: UIFormType.PopUp,
        uiFormShowMode: UIFormShowMode.Independent,
        uiFormLucenyType: UIFormLucenyType.ImPenetrable,
        closeAndDestory: 0
      }, _UIConfigData));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GEventManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy, js;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }],
    execute: function () {
      exports('Event_Name', void 0);

      cclegacy._RF.push({}, "dfa36Qwc6JLgayIKDAwL5vP", "GEventManager", undefined);

      var GEventManager = exports('GEventManager', /*#__PURE__*/function () {
        function GEventManager() {} // 缓存的消息
        // 定时清理的间隔

        /**
         * 发布一个事件, 对于缓存的消息, 10s还没有被接收, 那么会定时回收
         * @param eventName 
         * @param parameter 
         */


        GEventManager.emit = function emit(eventName, parameter) {
          var array = this._eventMap[eventName];

          if (array === undefined) {
            //现在不需要存入
            return; // 将消息存入
          }

          for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (!element) continue;
            element.callback.call(element.target, parameter);
            element.once && array.splice(i, 1) && --i;
          }
        }
        /**
         * 订阅一个事件
         * @param eventName 
         * @param callback 
         * @param target
         */
        ;

        GEventManager.on = function on(eventName, callback, target, once) {
          if (once === void 0) {
            once = false;
          }

          if (this._eventMap[eventName] === undefined) {
            this._eventMap[eventName] = [];
          }

          this._eventMap[eventName].push(new ElementEvent(callback, target, once)); // 新订阅一个事件, 那么看看是不是有缓存的消息, 发布出去


          if (this._bufferEventMap[eventName] != undefined) {
            for (var i = 0; i < this._bufferEventMap[eventName].length; i++) {
              callback.call(target, this._bufferEventMap[eventName][i]);
            }

            this._bufferEventMap[eventName] = null;
            delete this._bufferEventMap[eventName];
          }
        };

        GEventManager.once = function once(eventName, callback, target) {
          this.on(eventName, callback, target, true);
        }
        /**
         * 取消监听一个事件
         * @param eventName 
         * @param callback 
         * @param target 
         */
        ;

        GEventManager.off = function off(eventName, callback, target) {
          var array = this._eventMap[eventName];
          if (array === undefined) return;

          for (var i = 0; i < array.length; i++) {
            var element = array[i];

            if (element && element.callback === callback && element.target === target) {
              array.splice(i, 1);
              break;
            }
          }

          if (array.length === 0) {
            this._eventMap[eventName] = null;
            delete this._eventMap[eventName];
          }
        }
        /**
         * 清空一个事件
         * @param eventName 
         */
        ;

        GEventManager.clear = function clear(eventName) {
          this._eventMap[eventName] = null;
          delete this._eventMap[eventName];
        }
        /** 自动清理bufferEventMap中的未接收消息 */
        ;

        GEventManager.autoClearBufferEvent = function autoClearBufferEvent(eventName) {
          var _this = this;

          for (var _iterator = _createForOfIteratorHelperLoose(this.clearTimers), _step; !(_step = _iterator()).done;) {
            var e = _step.value;

            if (e.eventName === eventName) {
              // 当前event已经开启了定时回收
              return;
            }
          }

          var clearTimer = setTimeout(function () {
            clearEvent(eventName);
          }, this.autoClearTimeNumber * 1000);
          this.clearTimers.push(new ElementTimer(eventName, clearTimer));

          var clearEvent = function clearEvent(eventName) {
            if (!_this._bufferEventMap[eventName]) {
              return;
            }

            _this._bufferEventMap[eventName] = null;
            delete _this._bufferEventMap[eventName];

            for (var i = _this.clearTimers.length - 1; i >= 0; i--) {
              if (_this.clearTimers[i].eventName === eventName) {
                _this.clearTimers.splice(i, 1);
              }
            }
          };
        };

        return GEventManager;
      }());
      GEventManager._eventMap = js.createMap();
      GEventManager._bufferEventMap = js.createMap();
      GEventManager.clearTimers = [];
      GEventManager.autoClearTimeNumber = 10;
      var ElementEvent = exports('ElementEvent', function ElementEvent(callback, target, once) {
        this.callback = void 0;
        this.target = void 0;
        this.once = void 0;
        this.callback = callback;
        this.target = target;
        this.once = once;
      });
      var Event_Name;

      (function (Event_Name) {
        Event_Name[Event_Name["SHOWPRIGRESS"] = 0] = "SHOWPRIGRESS";
        Event_Name[Event_Name["UPDATEPROGRESS"] = 1] = "UPDATEPROGRESS";
        Event_Name[Event_Name["HIDEPROGRESS"] = 2] = "HIDEPROGRESS";
        Event_Name[Event_Name["SHOWTOUCHMASK"] = 3] = "SHOWTOUCHMASK";
        Event_Name[Event_Name["HIDETOUCHMASK"] = 4] = "HIDETOUCHMASK";
        Event_Name[Event_Name["GAME_GUIDE_START"] = 5] = "GAME_GUIDE_START";
        Event_Name[Event_Name["HALL_ANALYTICS"] = 6] = "HALL_ANALYTICS";
        Event_Name[Event_Name["HALL_CREAT_EFFECT"] = 7] = "HALL_CREAT_EFFECT";
        Event_Name[Event_Name["HALL_REFRESH_SKIN"] = 8] = "HALL_REFRESH_SKIN";
        Event_Name[Event_Name["GAME_REFRESH_BTN_TIP"] = 9] = "GAME_REFRESH_BTN_TIP";
        Event_Name[Event_Name["GAME_UI_REFRESH_GOLD"] = 10] = "GAME_UI_REFRESH_GOLD";
        Event_Name[Event_Name["GAME_FLY_GOLD"] = 11] = "GAME_FLY_GOLD";
        Event_Name[Event_Name["GAME_INIT"] = 12] = "GAME_INIT";
        Event_Name[Event_Name["GAME_STOP"] = 13] = "GAME_STOP";
        Event_Name[Event_Name["GAME_UI_REFRESH_HP"] = 14] = "GAME_UI_REFRESH_HP";
        Event_Name[Event_Name["GAME_GET_GOLD_REFRESH_UI"] = 15] = "GAME_GET_GOLD_REFRESH_UI";
        Event_Name[Event_Name["GAME_CREAT_BULLET"] = 16] = "GAME_CREAT_BULLET";
        Event_Name[Event_Name["GAME_REFRESH_WEAPON"] = 17] = "GAME_REFRESH_WEAPON";
        Event_Name[Event_Name["GAME_COLLECT_BULLET"] = 18] = "GAME_COLLECT_BULLET";
        Event_Name[Event_Name["GAME_CREAT_ENEMY"] = 19] = "GAME_CREAT_ENEMY";
        Event_Name[Event_Name["GAME_CREAT_Effect"] = 20] = "GAME_CREAT_Effect";
        Event_Name[Event_Name["GAME_ENEMY_DIE"] = 21] = "GAME_ENEMY_DIE";
        Event_Name[Event_Name["GAME_END"] = 22] = "GAME_END";
        Event_Name[Event_Name["GAME_REVIVE_PLAYER"] = 23] = "GAME_REVIVE_PLAYER";
        Event_Name[Event_Name["GAME_SETTLEMENT"] = 24] = "GAME_SETTLEMENT";
        Event_Name[Event_Name["GAME_RETURN_HALL"] = 25] = "GAME_RETURN_HALL";
        Event_Name[Event_Name["GAME_AGAIN_LEVEL"] = 26] = "GAME_AGAIN_LEVEL";
        Event_Name[Event_Name["GAME_NEXT_LEVEL"] = 27] = "GAME_NEXT_LEVEL";
        Event_Name[Event_Name["GAME_PLAY_SOUNDS"] = 28] = "GAME_PLAY_SOUNDS";
        Event_Name[Event_Name["GAME_SET_BGM"] = 29] = "GAME_SET_BGM";
        Event_Name[Event_Name["GAME_SET_MUSIC_VOLUME"] = 30] = "GAME_SET_MUSIC_VOLUME";
        Event_Name[Event_Name["GAME_PLAY_VIBRATE"] = 31] = "GAME_PLAY_VIBRATE";
        Event_Name[Event_Name["GAME_SET_PLAY_STATE"] = 32] = "GAME_SET_PLAY_STATE";
        Event_Name[Event_Name["GAME_PLAY_MAGMA_EVAPORATE"] = 33] = "GAME_PLAY_MAGMA_EVAPORATE";
        Event_Name[Event_Name["GAME_PLAY_EAT_GEM"] = 34] = "GAME_PLAY_EAT_GEM";
        Event_Name[Event_Name["OPEN_AD_COMMON_BANNER"] = 35] = "OPEN_AD_COMMON_BANNER";
        Event_Name[Event_Name["WATER_CLICK_PAUSE"] = 36] = "WATER_CLICK_PAUSE";
        Event_Name[Event_Name["WATER_CLICK_CONTINUE"] = 37] = "WATER_CLICK_CONTINUE";
        Event_Name[Event_Name["WATER_CLICK_RESTART"] = 38] = "WATER_CLICK_RESTART";
        Event_Name[Event_Name["WATER_TIME_UP_ADD_TIME"] = 39] = "WATER_TIME_UP_ADD_TIME";
      })(Event_Name || (Event_Name = exports('Event_Name', {})));

      var ElementTimer = function ElementTimer(evnetName, timer) {
        this.eventName = void 0;
        this.timer = void 0;
        this.eventName = evnetName;
        this.timer = timer;
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HallUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './UIManager.ts', './GameUIConfig.ts', './JsonUtil.ts', './GameManager.ts', './GEventManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, EventHandler, instantiate, BaseUIForm, UIManager, UIID, JsonUtil, GameManager, GEventManager, Event_Name;

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
      Label = module.Label;
      Button = module.Button;
      EventHandler = module.EventHandler;
      instantiate = module.instantiate;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      JsonUtil = module.JsonUtil;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "967e6YyOlFIWbd+a0uvsimG", "HallUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HallUI = exports('HallUI', (_dec = ccclass('HallUI'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(HallUI, _BaseUIForm);

        function HallUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "itemsContent", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = HallUI.prototype;

        _proto.init = function init() {
          this.refreshUI();
        };

        _proto.refreshUI = function refreshUI() {
          this.refreshContent();
        };

        _proto.refreshContent = function refreshContent() {
          var table = JsonUtil.get('HallData');

          for (var i = 0; i < this.itemsContent.children.length; i++) {
            this.itemsContent.children[i].active = false;
          }

          for (var key in table) {
            var data = table[key];
            var node = this.instantiateItem();
            node.getChildByName('name').getComponent(Label).string = data.Name;
            var upBtn = node.getComponent(Button);
            upBtn.clickEvents = [];
            var eventHandler = new EventHandler();
            eventHandler.target = this.node;
            eventHandler.component = "HallUI";
            eventHandler.handler = "onClickEvent_selectGameType";
            eventHandler.customEventData = key + '';
            upBtn.clickEvents.push(eventHandler);
            node.active = true;
          }
        };

        _proto.instantiateItem = function instantiateItem() {
          for (var i = 0; i < this.itemsContent.children.length; i++) {
            if (!this.itemsContent.children[i].active) {
              return this.itemsContent.children[i];
            }
          }

          var node = instantiate(this.itemsContent.children[0]);
          node.setParent(this.itemsContent);
          return node;
        };

        _proto.onClickEvent_selectGameType = function onClickEvent_selectGameType(event, type) {
          GameManager.instance().gameType = parseInt(type);
          GameManager.instance().LoadGame();
        };

        _proto.onClickEvent_openSignUI = function onClickEvent_openSignUI() {
          UIManager.GetInstance().ShowUIForms(UIID.SignUI);
        };

        _proto.onClickBtnStart = function onClickBtnStart() {
          GameManager.instance().gameType = parseInt("2");
          GameManager.instance().LoadGame();
        };

        _proto.onClickBtnSetting = function onClickBtnSetting() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          UIManager.GetInstance().ShowUIForms(UIID.SettingUI);
        };

        return HallUI;
      }(BaseUIForm), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemsContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpRequest.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, error, warn;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      error = module.error;
      warn = module.warn;
    }],
    execute: function () {
      exports('HttpEvent', void 0);

      cclegacy._RF.push({}, "1e7d44vKDBH8r2FOagwnw5I", "HttpRequest", undefined);

      var urls = {}; // 当前请求地址集合

      var reqparams = {}; // 请求参数

      var HttpEvent;

      (function (HttpEvent) {
        HttpEvent["NO_NETWORK"] = "http_request_no_network";
        HttpEvent["UNKNOWN_ERROR"] = "http_request_unknown_error";
        HttpEvent["TIMEOUT"] = "http_request_timout";
      })(HttpEvent || (HttpEvent = exports('HttpEvent', {})));

      var HttpRequest = exports('HttpRequest', /*#__PURE__*/function () {
        function HttpRequest() {
          this.server = "https://analytics.oceanengine.com/api/v2/";
          this.timeout = 10000;
        }

        var _proto = HttpRequest.prototype;
        /**
         * HTTP GET请求
         * 例：
         * 
         * Get
            var complete = function(response){
                LogWrap.log(response);
            }
            var error = function(response){
                LogWrap.log(response);
            }
            this.get(name, complete, error);
        */

        _proto.get = function get(name, completeCallback, errorCallback) {
          this.sendRequest(name, null, false, completeCallback, errorCallback);
        };

        _proto.getWithParams = function getWithParams(name, params, completeCallback, errorCallback) {
          this.sendRequest(name, params, false, completeCallback, errorCallback);
        };

        _proto.getByArraybuffer = function getByArraybuffer(name, completeCallback, errorCallback) {
          this.sendRequest(name, null, false, completeCallback, errorCallback, 'arraybuffer', false);
        };

        _proto.getWithParamsByArraybuffer = function getWithParamsByArraybuffer(name, params, completeCallback, errorCallback) {
          this.sendRequest(name, params, false, completeCallback, errorCallback, 'arraybuffer', false);
        }
        /** 
         * HTTP POST请求
         * 例：
         *      
         * Post
            var param = '{"LoginCode":"donggang_dev","Password":"e10adc3949ba59abbe56e057f20f883e"}'
            var complete = function(response){
                    var jsonData = JSON.parse(response);
                    var data = JSON.parse(jsonData.Data);
                LogWrap.log(data.Id);
            }
            var error = function(response){
                LogWrap.log(response);
            }
            this.post(name, param, complete, error);
        */
        ;

        _proto.post = function post(name, params, completeCallback, errorCallback) {
          this.sendRequest(name, params, true, completeCallback, errorCallback);
        }
        /** 取消请求中的请求 */
        ;

        _proto.abort = function abort(name) {
          var xhr = urls[this.server + name];

          if (xhr) {
            xhr.abort();
          }
        }
        /**
         * 获得字符串形式的参数
         */
        ;

        _proto.getParamString = function getParamString(params) {
          var result = "";

          for (var name in params) {
            var data = params[name];

            if (data instanceof Object) {
              for (var key in data) {
                result += key + "=" + data[key] + "&";
              }
            } else {
              result += name + "=" + data + "&";
            }
          }

          return result.substr(0, result.length - 1);
        }
        /** 
         * Http请求 
         * @param name(string)              请求地址
         * @param params(JSON)              请求参数
         * @param isPost(boolen)            是否为POST方式
         * @param callback(function)        请求成功回调
         * @param errorCallback(function)   请求失败回调
         * @param responseType(string)      响应类型
         */
        ;

        _proto.sendRequest = function sendRequest(name, params, isPost, completeCallback, errorCallback, responseType, isOpenTimeout, timeout) {
          var _this = this;

          if (isOpenTimeout === void 0) {
            isOpenTimeout = true;
          }

          if (timeout === void 0) {
            timeout = this.timeout;
          }

          if (name == null || name == '') {
            error("请求地址不能为空");
            return;
          }

          var url, newUrl, paramsStr;

          if (name.toLocaleLowerCase().indexOf("http") == 0) {
            url = name;
          } else {
            url = this.server + name;
          }

          if (params) {
            paramsStr = this.getParamString(params);
            if (url.indexOf("?") > -1) newUrl = url + "&" + paramsStr;else newUrl = url + "?" + paramsStr;
          } else {
            newUrl = url;
          }

          if (urls[newUrl] != null && reqparams[newUrl] == paramsStr) {
            warn("\u5730\u5740\u3010" + url + "\u3011\u5DF2\u6B63\u5728\u8BF7\u6C42\u4E2D\uFF0C\u4E0D\u80FD\u91CD\u590D\u8BF7\u6C42");
            return;
          }

          var xhr = new XMLHttpRequest(); // 防重复请求功能

          urls[newUrl] = xhr;
          reqparams[newUrl] = paramsStr;

          if (isPost) {
            xhr.open("POST", url);
          } else {
            xhr.open("GET", newUrl);
          }

          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"); // xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

          var data = {};
          data.url = url;
          data.params = params; // 请求超时

          if (isOpenTimeout) {
            xhr.timeout = timeout;

            xhr.ontimeout = function () {
              _this.deleteCache(newUrl);

              data.event = HttpEvent.TIMEOUT;
              if (errorCallback) errorCallback(data);
            };
          }

          xhr.onloadend = function (a) {
            if (xhr.status == 500) {
              _this.deleteCache(newUrl);

              if (errorCallback == null) return;
              data.event = HttpEvent.NO_NETWORK; // 断网

              if (errorCallback) errorCallback(data);
            }
          };

          xhr.onerror = function () {
            _this.deleteCache(newUrl);

            if (errorCallback == null) return;

            if (xhr.readyState == 0 || xhr.readyState == 1 || xhr.status == 0) {
              data.event = HttpEvent.NO_NETWORK; // 断网 
            } else {
              data.event = HttpEvent.UNKNOWN_ERROR; // 未知错误
            }

            if (errorCallback) errorCallback(data);
          };

          xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            _this.deleteCache(newUrl);

            if (xhr.status == 200) {
              if (completeCallback) {
                if (responseType == 'arraybuffer') {
                  // 加载非文本格式
                  xhr.responseType = responseType;
                  if (completeCallback) completeCallback(xhr.response);
                } else {
                  // 加载非文本格式
                  var data = JSON.parse(xhr.response);

                  if (data.code != null) {
                    /** 服务器错误码处理 */
                    if (data.code == 0) {
                      if (completeCallback) completeCallback(data.data);
                    } else {
                      if (errorCallback) errorCallback(data);
                    }
                  } else {
                    if (completeCallback) completeCallback(data);
                  }
                }
              }
            }
          };

          if (params == null || params == "") {
            xhr.send();
          } else {
            // xhr.send(paramsStr!);                // 根据服务器接受数据方式做选择
            xhr.send(JSON.stringify(params));
          }
        };

        _proto.deleteCache = function deleteCache(url) {
          delete urls[url];
          delete reqparams[url];
        };

        return HttpRequest;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpTools.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "14fe26yXuZDApAkCmrtzzum", "HttpTools", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HttpTools = exports('HttpTools', (_dec = ccclass('HttpTools'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function HttpTools() {}

        HttpTools.getInstance = function getInstance() {
          if (this.instance == null) {
            this.instance = new HttpTools();
          }

          return this.instance;
        };

        var _proto = HttpTools.prototype;

        _proto.httpSend = function httpSend(options) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                var res = JSON.parse(xhr.responseText);
                resolve(res);
              }
            };

            xhr.timeout = options.timeout || 50000; // 5 seconds for timeout

            var method = options.method || 'GET';
            var url = options.url;
            options.data = options.data || {};

            if (method == 'get' || method == "GET") {
              console.log('url===>', url);
              xhr.open(method, url, true);
              xhr.send();
            } else {
              xhr.open(method, options.url, true);
              xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
              xhr.send(JSON.stringify(options.data));
            }
          });
        };

        return HttpTools;
      }(), _class2.instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HuaWeiADApi.ts", ['cc', './Loader.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, assetManager, director, Node, UITransform, Sprite, SpriteFrame, Widget, view, Label, Loader;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      director = module.director;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Widget = module.Widget;
      view = module.view;
      Label = module.Label;
    }, function (module) {
      Loader = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "c7d6b/7FkRJbpqvapfYKxv0", "HuaWeiADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HuaWeiADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function HuaWeiADApi() {
          this.videoType = "";
          this.arg = void 0;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.qg = window["qg"];
          this.AdGroup = 0;
          this.systemBannerAd = null;
          this.loadSucc_SystemBanner = false;
          this.isShow_SystemBanner = false;
          this.NUM_BannerUpdateTime = 30;
          this.interval_updateBanner = null;
          this.systemIntersAd = null;
          this.loadSucc_SystemInters = false;
          this.rewardedVideoAd = null;
          this.loadSucc_Video = false;
          this.callback_Video = null;
          this.nativeAd = null;
          this.nativeBannerInfo = null;
          this.loadSucc_NativeBanner = false;
          this.isShow_NativeBanner = false;
          this.node_nativeBanner = null;
          this.nativeImageAd = null;
          this.nativeImageInfo = null;
          this.loadSucc_NativeImage = false;
          this.isShow_NativeImage = false;
          this.callback_Native = null;
          this.nativeIconAd = null;
          this.nativeIconInfo = null;
          this.loadSucc_NativeIcon = false;
          this.isShow_NativeIcon = false;
          this.systemInfo = null;
          this.nativeRes = null;
          this.loadNativeRes = false;
          this.clipIndexList = [];
          this.videoPath = null;
        }

        var _proto = HuaWeiADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.qg !== null && this.qg !== undefined) {
            //从1078版本开始
            this.systemInfo = this.qg.getSystemInfoSync();
            console.log('MINIGAME ===> 设备信息.systemInfo===>', this.systemInfo);
            this.createAd();
          } else {
            this.qg = null;
          }

          _callback && _callback();
          console.log('MINIGAME ===> 华为 ===================> onInit ok');
        };

        _proto.createAd = function createAd() {
          // if (this.SystemBannerData.enabled && this.SystemBannerData.vendor_position != "") this.createSystemBanner();
          if (this.SystemIntersData && this.SystemIntersData.enabled && this.SystemIntersData.vendor_position != "") this.createInsertAd();
          if (this.VideoData.enabled && this.VideoData.vendor_position != "") this.createVideo();
          this.loadNativeBannerRes();
          if (this.NativeBannerData && this.NativeBannerData.enabled && this.NativeBannerData.vendor_position != "") this.createNativeBanner(); // if (this.NativeIntersData && this.NativeIntersData.enabled && this.NativeIntersData.vendor_position != "") this.createNativeImage();
        };

        _proto.setGroup = function setGroup(group) {
          this.AdGroup = group;
        }
        /**
         * 加载原生banner广告资源
         */
        ;

        _proto.loadNativeBannerRes = function loadNativeBannerRes() {
          var _this = this;

          console.log("MINIGAME ===> ", "--loadNativeBannerRes--");
          this.nativeRes = {
            NativeBannerBg: null,
            NativeBannerButton: null,
            NativeClose: null,
            NativeAdTip: null
          };
          var nativeBannerResArr = ["images/ad/NativeBannerBg", "images/ad/NativeBannerButton", "images/ad/NativeClose", "images/ad/NativeAdTip"];
          Loader.loadBundle("UI", function () {
            Loader.loadBundleArray("UI", nativeBannerResArr, function (texture) {
              _this.nativeRes.NativeBannerBg = texture[0];
              _this.nativeRes.NativeBannerButton = texture[1];
              _this.nativeRes.NativeClose = texture[2];
              _this.nativeRes.NativeAdTip = texture[3];
              _this.loadNativeRes = true;
            });
          });
        };

        _proto.onLogin = function onLogin(_callback) {
          console.log("Sign-in");

          if (this.qg !== null && this.qg !== undefined) {
            this.qg.gameLoginWithReal({
              forceLogin: 1,
              appid: "106656809",
              success: function success(data) {
                // 登录成功后，可以存储帐号信息,进入游戏。             
                console.log(" game login with real success:" + JSON.stringify(data));

                _callback(1);
              },
              fail: function fail(data, code) {
                console.log("game login with real fail:" + data + ", code:" + code); //根据状态码处理游戏的逻辑。
                //状态码为7004或者2012，表示玩家取消登录。
                //此时，建议返回游戏界面，可以让玩家重新进行登录操作。

                if (code == 7004 || code == 2012) {
                  console.log("玩家取消登录，返回游戏界面让玩家重新登录。");

                  _callback(2);
                } //状态码为7021表示玩家取消实名认证。
                //在中国大陆的情况下，此时需要禁止玩家进入游戏。


                if (code == 7021) {
                  console.log("The player has canceled identity verification. Forbid the player from entering the game.");

                  _callback(3);
                }
              }
            });
          }
        };

        _proto.onShare = function onShare(_callback) {};

        _proto.recordClipRecorder = function recordClipRecorder(data) {};

        _proto.pauseGameVideo = function pauseGameVideo() {};

        _proto.resumeGameVideo = function resumeGameVideo() {};

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createSystemBanner = function createSystemBanner() {
          var _this2 = this;

          if (this.qg !== null && this.qg !== undefined) {
            console.log("MINIGAME ===> 华为平台 创建Banner广告", this.SystemBannerData.vendor_position);
            this.systemBannerAd = this.qg.createBannerAd({
              adUnitId: this.SystemBannerData.vendor_position,
              style: {
                top: this.systemInfo.windowHeight - 57,
                left: (this.systemInfo.windowHeight - 360) / 2,
                height: 57,
                width: 360
              }
            });
            this.loadSucc_SystemBanner = false;
            this.systemBannerAd.onResize(function (size) {
              _this2.systemBannerAd.style.top = _this2.systemInfo.windowHeight - size.height;
              _this2.systemBannerAd.style.left = (_this2.systemInfo.windowWidth - size.width) / 2;
            });
            this.systemBannerAd.onError(function (err) {
              console.log('MINIGAME ===>横幅广告Banner ', JSON.stringify(err));
            }); // this.systemBannerAd.onClose(() => {
            //     console.log("MINIGAME ===> 横幅广告调用 onClose");
            // });

            this.systemBannerAd.onLoad(function () {
              console.log("MINIGAME ===> 横幅广告 加载完成");
              _this2.loadSucc_SystemBanner = true; // this.systemBannerAd.show();
            });
          }
        };

        _proto.showBanner = function showBanner() {
          var _this3 = this;

          if (this.loadSucc_NativeBanner) {
            this.showNativeBanner();
          } else if (this.loadSucc_SystemBanner) {
            this.showSystemBanner();
          } else {
            //华为预加载的时候onLoad没回调
            this.createSystemBanner();
            setTimeout(function () {
              _this3.isShow_SystemBanner = true;

              _this3.systemBannerAd.show();
            }, 2000);
          }
        };

        _proto.hideBanner = function hideBanner(close) {
          this.hideSystemBanner();
          this.hideNativeBanner();
        }
        /**
         * 展示系统banner
         */
        ;

        _proto.showSystemBanner = function showSystemBanner() {
          this.isShow_SystemBanner = true;
          this.systemBannerAd.show();
        }
        /**
         * 隐藏系统banner
         */
        ;

        _proto.hideSystemBanner = function hideSystemBanner() {
          console.log('隐藏系统banner', this.isShow_SystemBanner);

          if (this.isShow_SystemBanner && this.systemBannerAd) {
            this.isShow_SystemBanner = false; // this.systemBannerAd.offHide();

            this.systemBannerAd.hide();
          }
        }
        /**
        * 刷新banner
        */
        ;

        _proto.updateBanner = function updateBanner() {
          var _this4 = this;

          if (this.interval_updateBanner) clearInterval(this.interval_updateBanner); // 刷新广告条

          this.interval_updateBanner = setInterval(function () {
            if (_this4.loadSucc_NativeBanner) {
              _this4.updateNativeBanner();
            } else if (_this4.loadSucc_SystemBanner) {
              _this4.updateSystemBanner();
            }
          }, this.NUM_BannerUpdateTime * 1000);
        }
        /**
         * 刷新系统banner
         */
        ;

        _proto.updateSystemBanner = function updateSystemBanner() {
          this.hideSystemBanner();
          this.hideNativeBanner();
          this.showSystemBanner();
        }
        /** */
        ;

        _proto.updateNativeBanner = function updateNativeBanner() {
          this.hideNativeBanner();
          this.hideSystemBanner();
          this.showNativeBanner();
        };

        _proto.createVideo = function createVideo() {
          var _this5 = this;

          if (this.qg !== null && this.qg !== undefined) {
            /**创建rewardedVideoAd 对象*/
            console.log("MINIGAME ===> 华为平台 创建激励视频广告");
            this.rewardedVideoAd = this.qg.createRewardedVideoAd({
              adUnitId: this.VideoData.vendor_position
            });
            this.loadSucc_Video = false;
            this.rewardedVideoAd.onLoad(function () {
              console.log("MINIGAME ===> 激励视频广告 加载成功");
              _this5.loadSucc_Video = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('MINIGAME ===> 华为H5GameAPI 激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
            }); //监听视频广告播放完成

            this.rewardedVideoAd.onClose(function (res) {
              if (res.isEnded) {
                console.log("MINIGAME ===> ", "HUAWEI 激励视频广告完成，发放奖励");

                if (_this5.callback_Video) {
                  _this5.callback_Video(true);
                }
              } else {
                console.log("MINIGAME ===> ", "HUAWEI 激励视频广告关闭，不发放奖励");

                if (_this5.callback_Video) {
                  _this5.callback_Video(false);
                }
              }

              setTimeout(function () {
                _this5.rewardedVideoAd.load();
              }, 300);
            });
            this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_successCallback) {
          /**确保video正常创建并已经拉取到数据 */
          if (this.rewardedVideoAd && this.loadSucc_Video) {
            this.callback_Video = _successCallback;
            this.rewardedVideoAd.show();
            this.loadSucc_Video = false;
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            _successCallback(false);
          }
        };

        _proto.createInsertAd = function createInsertAd() {
          var _this6 = this;

          if (this.qg != null && this.qg != undefined) {
            console.log("MINIGAME ===> 华为  创建插屏广告 1078+");
            this.systemIntersAd = this.qg.createInterstitialAd({
              adUnitId: this.SystemIntersData.vendor_position
            });
            this.loadSucc_SystemInters = false;
            this.systemIntersAd.onLoad(function () {
              _this6.loadSucc_SystemInters = true;
            }); //监听插屏广告错误

            this.systemIntersAd.onError(function (err) {
              _this6.loadSucc_SystemInters = false;
              setTimeout(function () {
                _this6.systemIntersAd && _this6.systemIntersAd.load();
              }, 15 * 1000);
            }); //监听插屏广告关闭

            this.systemIntersAd.onClose(function () {
              console.log("MINIGAME ===> ", "HUAWEI 系统插屏广告关闭");
              _this6.loadSucc_SystemInters = false; // 系统插屏关闭后5s后再次load

              setTimeout(function () {
                _this6.systemIntersAd && _this6.systemIntersAd.load();
              }, 5 * 1000);
            });
            this.systemIntersAd.load();
          }
        };

        _proto.showInsertAd = function showInsertAd() {
          if (this.systemIntersAd && this.loadSucc_SystemInters) {
            this.systemIntersAd.show();
          }
        };

        _proto.createNativeBanner = function createNativeBanner() {
          var _this7 = this;

          console.log("MINIGAME ===> 原生banner", "--createNativeBanner--");
          this.nativeAd = this.qg.createNativeAd({
            adUnitId: this.NativeBannerData.vendor_position
          });
          this.nativeBannerInfo = {
            adId: null,
            title: null,
            desc: null,
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null
          };
          this.nativeAd.onLoad(function (res) {
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log("MINIGAME ===> ", "HUAWEI原生banner广告列表为空 return");
              return;
            }

            console.log("MINIGAME ===> ", "HUAWEI 原生banner广告加载成功：", JSON.stringify(res.adList[index]));
            if (res.adList[index].icon != "" && res.adList[index].imgUrlList.length > 0) ;
            _this7.nativeBannerInfo.adId = String(res.adList[index].adId);
            _this7.nativeBannerInfo.title = String(res.adList[index].title);
            _this7.nativeBannerInfo.desc = String(res.adList[index].desc);

            if (res.adList && res.adList[index].icon != "") {
              _this7.nativeBannerInfo.Native_icon_url = res.adList[index].icon;
              assetManager.loadRemote(String(res.adList[index].icon), function (err, texture) {
                _this7.nativeBannerInfo.Native_icon = texture;
              });
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this7.nativeBannerInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
              assetManager.loadRemote(String(res.adList[index].imgUrlList[0]), function (err, texture) {
                _this7.nativeBannerInfo.Native_BigImage = texture;
              });
            }

            _this7.loadSucc_NativeBanner = true;
          }); //监听原生广告加载错误

          this.nativeAd.onError(function (err) {
            console.log("MINIGAME ===> ", "HUAWEI 原生banner广告加载失败：", JSON.stringify(err));
            setTimeout(function () {
              _this7.nativeAd.load();
            }, 20 * 1000);
          });
          this.nativeAd.load();
        }
        /**
         * 展示原生banner
         */
        ;

        _proto.showNativeBanner = function showNativeBanner() {
          var _this8 = this;

          this.isShow_NativeBanner = true;
          var scene = director.getScene(); //原生广告id

          var tempid = this.nativeBannerInfo.adId;
          this.reportNativeBannerShow(tempid);
          console.log("MINIGAME ===> 原生banner", "showNativeBanner========================");
          this.node_nativeBanner = new Node("node_nativeBanner");
          this.node_nativeBanner.addComponent(UITransform);
          scene.getChildByName('Canvas').addChild(this.node_nativeBanner);
          this.node_nativeBanner.addComponent(Sprite);
          this.node_nativeBanner.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerBg);
          this.node_nativeBanner.addComponent(Widget);
          this.node_nativeBanner.getComponent(Widget).isAlignHorizontalCenter = true;
          this.node_nativeBanner.getComponent(Widget).isAlignBottom = true;
          this.node_nativeBanner.getComponent(Widget).bottom = 0;
          var canvasSize = view.getVisibleSize();

          if (canvasSize.width < canvasSize.height) {
            this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width;
            this.node_nativeBanner.getComponent(UITransform).height = canvasSize.width * 0.18;
          } else {
            this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width / 2;
            this.node_nativeBanner.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).width * 0.18;
          }

          if (this.AdGroup != 0) this.node_nativeBanner.layer = this.AdGroup;
          this.node_nativeBanner.setSiblingIndex(999);
          this.node_nativeBanner.on(Node.EventType.TOUCH_START, function (event) {
            _this8.reportNativeBannerClick(tempid);
          }); // 广告

          var adTip = new Node("adTip");
          adTip.addComponent(UITransform);
          this.node_nativeBanner.addChild(adTip);
          adTip.addComponent(Sprite);
          adTip.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeAdTip);
          adTip.getComponent(UITransform).height = 0.2 * this.node_nativeBanner.getComponent(UITransform).height;
          adTip.getComponent(UITransform).width = adTip.getComponent(UITransform).height / 0.45;
          if (this.AdGroup != 0) adTip.layer = this.AdGroup;
          adTip.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - adTip.getComponent(UITransform).width / 2, -this.node_nativeBanner.getComponent(UITransform).height / 2 + adTip.getComponent(UITransform).height / 2); // 点击安装

          var bannerButton = new Node("bannerButton");
          bannerButton.addComponent(UITransform);
          this.node_nativeBanner.addChild(bannerButton);
          bannerButton.addComponent(Sprite);
          if (this.AdGroup != 0) bannerButton.layer = this.AdGroup;
          bannerButton.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerButton);
          bannerButton.getComponent(UITransform).width = this.node_nativeBanner.getComponent(UITransform).width * 0.255;
          bannerButton.getComponent(UITransform).height = bannerButton.getComponent(UITransform).width * 0.351;
          bannerButton.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width * 0.185, 0);

          if (this.nativeBannerInfo.Native_icon) {
            // icon
            var icon = new Node("icon");
            icon.addComponent(UITransform);
            this.node_nativeBanner.addChild(icon);
            if (this.AdGroup != 0) icon.layer = this.AdGroup;
            icon.addComponent(Sprite);
            icon.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_icon);
            icon.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height * 0.8;
            icon.getComponent(UITransform).width = icon.getComponent(UITransform).height;
            icon.setPosition(icon.getComponent(UITransform).width * 0.8 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          } else if (this.nativeBannerInfo.Native_BigImage) {
            // 大图
            var image = new Node("image");
            image.addComponent(UITransform);
            this.node_nativeBanner.addChild(image);
            if (this.AdGroup != 0) image.layer = this.AdGroup;
            image.addComponent(Sprite);
            image.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_BigImage);
            image.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
            image.getComponent(UITransform).width = image.getComponent(UITransform).height * 2;
            image.setPosition(image.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          } // 标题或描述


          var titleLabel = new Node("titleLabel");
          titleLabel.addComponent(UITransform);
          this.node_nativeBanner.addChild(titleLabel);
          if (this.AdGroup != 0) titleLabel.layer = this.AdGroup;
          titleLabel.addComponent(Label); // titleLabel.getComponent(UITransform).priority = 999;

          if (canvasSize.width < canvasSize.height) {
            titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().width / 1080);
          } else {
            titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().height / 1080);
          }

          if (this.nativeBannerInfo.desc == "") {
            titleLabel.getComponent(Label).string = this.nativeBannerInfo.title;
          } else {
            titleLabel.getComponent(Label).string = this.nativeBannerInfo.desc;
          }

          titleLabel.getComponent(Label).overflow = Label.Overflow.CLAMP;
          titleLabel.getComponent(Label).horizontalAlign = Label.HorizontalAlign.LEFT;
          titleLabel.getComponent(Label).verticalAlign = Label.VerticalAlign.CENTER;
          titleLabel.getComponent(Label).lineHeight = titleLabel.getComponent(Label).fontSize;
          titleLabel.getComponent(UITransform).width = this.node_nativeBanner.getComponent(UITransform).width - this.node_nativeBanner.getComponent(UITransform).height * 2 - bannerButton.getComponent(UITransform).width - 0.2 * this.node_nativeBanner.getComponent(UITransform).height / 0.45;
          titleLabel.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
          titleLabel.setPosition(0, -this.node_nativeBanner.getComponent(UITransform).width / 2 + this.node_nativeBanner.getComponent(UITransform).height * 2.1 + titleLabel.getComponent(UITransform).width / 2);
          var NativeClose = new Node("closeICON");
          NativeClose.addComponent(UITransform);
          this.node_nativeBanner.addChild(NativeClose); // NativeClose.getComponent(UITransform).priority = 999;

          NativeClose.addComponent(Sprite);
          if (this.AdGroup != 0) NativeClose.layer = this.AdGroup;
          NativeClose.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeClose);
          NativeClose.getComponent(UITransform).width = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          NativeClose.getComponent(UITransform).height = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          NativeClose.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - NativeClose.getComponent(UITransform).width / 2, this.node_nativeBanner.getComponent(UITransform).height / 2 - NativeClose.getComponent(UITransform).width / 2); // 监听原生banner关闭

          NativeClose.on(Node.EventType.TOUCH_START, function (event) {
            console.log("MINIGAME ===> ", "原生banner关闭", _this8.NUM_BannerUpdateTime + "S后再次刷新");

            _this8.hideNativeBanner();

            _this8.updateBanner(); // 清除触摸事件的冒泡
            // event.event.propagationStopped = true;

          });
        }
        /**
         * 隐藏原生banner
         */
        ;

        _proto.hideNativeBanner = function hideNativeBanner() {
          if (this.isShow_NativeBanner) {
            console.log("MINIGAME ===> ", "HUAWEI原生banner hideNativeBanner========================");
            this.isShow_NativeBanner = false;
            this.node_nativeBanner.removeFromParent();
            this.node_nativeBanner = null;
          }
        };

        _proto.reportNativeBannerShow = function reportNativeBannerShow(adId) {
          console.log("MINIGAME ===> ", "HUAWEI 该原生banner广告id上报展示", adId);
          this.nativeAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeBannerClick = function reportNativeBannerClick(adId) {
          console.log("MINIGAME ===> ", "HUAWEI 原生banner广告上报点击", adId);
          this.nativeAd.reportAdClick({
            adId: adId
          });
        }
        /**原生大图 */
        ;

        _proto.createNativeImage = function createNativeImage() {
          var _this9 = this;

          console.log("MINIGAME ===> 原生大图", "--createNativeImage--");
          this.nativeImageAd = this.qg.createNativeAd({
            adUnitId: this.NativeIntersData.vendor_position
          });
          this.loadSucc_NativeImage = false;
          this.nativeImageInfo = {
            adId: null,
            title: '',
            desc: '',
            source: '',
            clickBtnTxt: '',
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null,
            dcr: this.NativeIntersData.dcr
          };
          this.nativeImageAd.onLoad(function (res) {
            console.info('ad data loaded: ' + JSON.stringify(res));
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log("MINIGAME ===> ", "HUAWEI 原生大图广告列表为空 return");
              return;
            } // if (res.adList[index].icon != "" && res.adList[index].imgUrlList.length > 0) {
            //     console.log("MINIGAME ===> ", "HUAWEI 原生大图广告同时存在原生ICON和大图");
            // } else {
            //     console.log("MINIGAME ===> ", "HUAWEI 原生大图广告只存在原生ICON或大图");
            // }


            _this9.nativeImageInfo.adId = String(res.adList[index].adId);
            _this9.nativeImageInfo.title = String(res.adList[index].title); // this.nativeImageInfo.desc = String(res.adList[index].desc);

            _this9.nativeImageInfo.source = String(res.adList[index].source);
            _this9.nativeImageInfo.clickBtnTxt = String(res.adList[index].clickBtnTxt);

            if (res.adList && res.adList[index].icon != "") {
              _this9.nativeImageInfo.Native_icon_url = res.adList[index].icon;
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this9.nativeImageInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
            }

            _this9.loadSucc_NativeImage = true;
            console.log("MINIGAME ===> ", "HUAWEI 原生大图广告加载成功：", _this9.nativeImageInfo);
            _this9.callback_Native && _this9.callback_Native(_this9.nativeImageInfo);
          }); //监听原生广告加载错误

          this.nativeImageAd.onError(function (err) {
            console.log("MINIGAME ===> ", "HUAWEI 原生大图广告加载失败：", JSON.stringify(err));
            _this9.callback_Native && _this9.callback_Native(null);
          }); // this.nativeImageAd.load();
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeAdInfo = function getNativeAdInfo(type) {
          if (!this.loadSucc_NativeImage) {
            console.log("MINIGAME ===> ", "自定义原生大图广告加载中....");
            return null;
          }

          console.log("MINIGAME ===> ", "获取自定义原生大图广告");
          return this.nativeImageInfo;
        }
        /**华为原生大图广告获取 */
        ;

        _proto.getHWNativeAdInfo = function getHWNativeAdInfo(_infoCallback) {
          this.callback_Native = _infoCallback;

          if (!this.nativeImageAd) {
            if (this.NativeIntersData && this.NativeIntersData.enabled && this.NativeIntersData.vendor_position != "") {
              this.createNativeImage();
            }
          }

          this.nativeImageAd && this.nativeImageAd.load();
        };

        _proto.reportNativeImageShow = function reportNativeImageShow(adId) {
          console.log("MINIGAME ===> ", "HUAWEI 该原生大图广告id上报展示", adId);
          this.nativeImageAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeImageClick = function reportNativeImageClick(adId) {
          console.log("MINIGAME ===> ", "HUAWEI 原生大图广告上报点击", adId);
          this.nativeImageAd.reportAdClick({
            adId: adId
          });
        }
        /**刷新原生大图广告 */
        ;

        _proto.loadNativeImage = function loadNativeImage() {}
        /**原生icon */
        ;

        _proto.createNativeIcon = function createNativeIcon() {
          var _this10 = this;

          console.log("MINIGAME ===> 原生icon", "--createNativeBanner--");
          this.nativeIconAd = this.qg.createNativeAd({
            adUnitId: this.NativeIconData.vendor_position
          });
          this.loadSucc_NativeIcon = false;
          this.nativeIconInfo = {
            adId: null,
            title: null,
            desc: null,
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null
          };
          this.nativeIconAd.onLoad(function (res) {
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log("MINIGAME ===> ", "HUAWEI 原生icon广告列表为空 return");
              return;
            }

            console.log("MINIGAME ===> ", "HUAWEI 原生icon广告加载成功：", JSON.stringify(res.adList[index]));

            if (res.adList[index].icon != "" && res.adList[index].imgUrlList.length > 0) {
              console.log("MINIGAME ===> ", "HUAWEI 原生icon广告同时存在原生ICON和大图");
            } else {
              console.log("MINIGAME ===> ", "HUAWEI 原生icon广告只存在原生ICON或大图");
            }

            _this10.nativeIconInfo.adId = String(res.adList[index].adId);
            _this10.nativeIconInfo.title = String(res.adList[index].title);
            _this10.nativeIconInfo.desc = String(res.adList[index].desc);

            if (res.adList && res.adList[index].icon != "") {
              _this10.nativeIconInfo.Native_icon_url = res.adList[index].icon;
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this10.nativeIconInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
            }

            _this10.loadSucc_NativeIcon = true;
            console.log("MINIGAME ===> ", "HUAWEI 原生大图广告加载成功：");
          }); //监听原生广告加载错误

          this.nativeIconAd.onError(function (err) {
            console.log("MINIGAME ===> ", "HUAWEI 原生icon广告加载失败：", JSON.stringify(err));
            setTimeout(function () {
              _this10.nativeIconAd.load();
            }, 20 * 1000);
          });
          this.nativeIconAd.load();
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeIconAdInfo = function getNativeIconAdInfo(type) {
          if (!this.loadSucc_NativeIcon) {
            console.log("MINIGAME ===> ", "自定义原生Icon广告加载中....");
            return null;
          }

          console.log("MINIGAME ===> ", "获取自定义原生Icon广告");
          return this.nativeIconInfo;
        };

        _proto.reportNativeIconShow = function reportNativeIconShow(adId) {
          console.log("MINIGAME ===> ", "HUAWEI 该原生Icon广告id上报展示", adId);
          this.nativeIconAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeIconClick = function reportNativeIconClick(adId) {
          console.log("MINIGAME ===> ", "HUAWEI 原生Icon广告上报点击", adId);
          this.nativeIconAd.reportAdClick({
            adId: adId
          });
        }
        /**刷新原生Icon广告 */
        ;

        _proto.loadNativeIcon = function loadNativeIcon() {
          this.nativeIconAd && this.nativeIconAd.load();
        }
        /**创建格子广告组件 */
        ;

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {};

        _proto.createNavigateBoxBanner = function createNavigateBoxBanner() {};

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {};

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {};

        _proto.addDesktop = function addDesktop(_callback) {
          if (this.qg != null && this.qg != undefined) {
            this.qg.installShortcut({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  _callback && _callback(true);
                } else {
                  _callback && _callback(false);
                }
              },
              fail: function fail(err) {},
              complete: function complete() {}
            });
          }
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {
          if (this.qg != null && this.qg != undefined) {
            this.qg.hasShortcutInstalled({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  _callback && _callback(true);
                } else {
                  _callback && _callback(false);
                }
              },
              fail: function fail(err) {},
              complete: function complete() {}
            });
          }
        };

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.phoneVibrate = function phoneVibrate(isLong) {
          if (this.qg !== null && this.qg !== undefined) {
            if (isLong) {
              this.qg.vibrateLong && this.qg.vibrateLong();
            } else {
              this.qg.vibrateShort && this.qg.vibrateShort();
            }
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        return HuaWeiADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InitAD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts', './AdsIdConfig.ts', './MiniSDK.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, sys, Component, AdManager, EPlatform, AdsIdConfig, MiniSDK;

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
      Node = module.Node;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      AdManager = module.default;
    }, function (module) {
      EPlatform = module.EPlatform;
      AdsIdConfig = module.default;
    }, function (module) {
      MiniSDK = module.MiniSDK;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "e6d472FgWVMIpByG8j8Kppn", "InitAD", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var InitAD = exports('InitAD', (_dec = ccclass('InitAD'), _dec2 = property({
        type: Enum(EPlatform)
      }), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InitAD, _Component);

        function InitAD() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "platfrom", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "startNode", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = InitAD.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this; // switch (sys.platform) {
          //     case sys.Platform.VIVO_MINI_GAME:
          //         AdsIdConfig.platform = EPlatform.VIVO;
          //         break;
          //     case sys.Platform.OPPO_MINI_GAME:
          //         AdsIdConfig.platform = EPlatform.OPPO;
          //         break;
          //     case sys.Platform.HUAWEI_QUICK_GAME:
          //         AdsIdConfig.platform = EPlatform.HUAWEI;
          //         break;
          //     case sys.Platform.DESKTOP_BROWSER:
          //         AdsIdConfig.platform = EPlatform.Close;
          //         break;
          //     default:
          //         AdsIdConfig.platform = this.platfrom;
          //         break;
          // }


          AdsIdConfig.platform = this.platfrom;
          AdManager.getInstance().platform = this.platfrom;
          this.scheduleOnce(function () {
            if (sys.platform === sys.Platform.VIVO_MINI_GAME || sys.platform === sys.Platform.OPPO_MINI_GAME || sys.platform === sys.Platform.HUAWEI_QUICK_GAME) {
              MiniSDK.getNetworkType(function (result) {
                if (result) {
                  AdManager.getInstance().onInit(_this2.GoLoadView.bind(_this2));
                } else {
                  MiniSDK.showDialog({
                    _title: '提示',
                    _msg: '无网络，请退出游戏重启网络',
                    callback1: function () {
                      MiniSDK.exitApplication();
                    }.bind(_this2)
                  });
                }
              });
            } else {
              AdManager.getInstance().onInit(_this2.GoLoadView.bind(_this2));
            }
          }, 0.1);
        };

        _proto.GoLoadView = function GoLoadView() {
          AdManager.getInstance().setGroup(33554432);

          if (AdsIdConfig.platform == EPlatform.HUAWEI) {
            this.HUAWEILogin();
            return;
          }

          this.startNode.active = true;

          if (AdsIdConfig.platform == EPlatform.KS) {
            if (AdManager.getInstance().LimitIDSwitch(10167956)) {
              AdManager.getInstance().showVideo(function () {}, false);
            }
          }
        };

        _proto.HUAWEILogin = function HUAWEILogin() {
          var _this3 = this;

          AdManager.getInstance().onLogin(function (res) {
            if (res == 1) {
              _this3.startNode.active = true;
            } else if (res == 2) {
              console.log("玩家取消登录");
              MiniSDK.showDialog({
                _title: '提示',
                _msg: '登录失败，是否重新登录？',
                cancelText: '退出游戏',
                confirmText: '重新登录',
                confirmColor: '#1C008A',
                callback1: function () {
                  this.HUAWEILogin();
                }.bind(_this3),
                callback2: function callback2() {
                  MiniSDK.exitApplication();
                }
              });
            } else if (res == 3) {
              MiniSDK.showDialog({
                _title: '提示',
                _msg: '取消实名认证',
                confirmText: '退出游戏',
                showCancel: false,
                callback1: function () {
                  MiniSDK.exitApplication();
                }.bind(_this3)
              });
            }
          });
        };

        return InitAD;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "platfrom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EPlatform.Close;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec3], {
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

System.register("chunks:///_virtual/Joystick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, view, Node, Vec2, Vec3, UITransformComponent, v3, v2, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      view = module.view;
      Node = module.Node;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      UITransformComponent = module.UITransformComponent;
      v3 = module.v3;
      v2 = module.v2;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "4afbdk/lNlKJoPjIjD/uBRt", "Joystick", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; //触摸类型

      var TOUCH_TYPE = Enum({
        DEFAULT: 0,
        //按钮和背景距离不变，背景位置与触碰点一致，不可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后无法恢复到初始位置
        FOLLOW: 1,
        //按钮和背景距离不变，背景位置与触碰点一致，不可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后恢复到初始位置
        FOLLOW_ALWAYS: 2,
        //按钮和背景距离不变，背景位置与触碰点一致，可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后恢复到初始位置
        FOLLOW_DOT: 3 //按钮和背景距离可改变，按钮位置与触碰点可不一致，不可改变按钮背景位置，按钮背景不随着按钮移动而移动，松手后恢复到初始位置

      }); //方向

      var DIRECTION_TYPE = Enum({
        FOUR: 4,
        EIGHT: 8,
        ALL: 0
      });
      var screenHeight = view.getVisibleSize().height; //屏幕可视范围高度

      var Joystick = exports('Joystick', (_dec = ccclass("Joystick"), _dec2 = property({
        type: Node,
        tooltip: '摇杆背景节点'
      }), _dec3 = property({
        type: Node,
        tooltip: '摇杆节点'
      }), _dec4 = property({
        type: TOUCH_TYPE,
        tooltip: '触摸类型'
      }), _dec5 = property({
        type: DIRECTION_TYPE,
        tooltip: '方向类型'
      }), _dec6 = property({
        tooltip: '启动半透明'
      }), _dec7 = property({
        tooltip: '点击跟随'
      }), _dec8 = property({
        tooltip: '内圈大小'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Joystick, _Component);

        function Joystick() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "ndRing", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ndDot", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "touchType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "directionType", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isEnableTransparent", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isFollowStart", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "innerSize", _descriptor7, _assertThisInitialized(_this));

          _this.onClickCb = null;
          _this.onEndCb = null;
          _this.clearFECb = null;
          _this.onBeginFECb = null;
          _this.onSuccessFECb = null;
          _this.isMoving = false;
          _this._deviation = new Vec2(0, 0);
          _this._angle = 0;
          _this._stickPos = new Vec3();
          _this._oriRingPos = new Vec3(0, 0);
          _this._targetRingPos = new Vec3(0, 0);
          _this._touchStartLocation = new Vec3();
          _this._touchMoveLocation = new Vec3();
          _this._touchEndLocation = new Vec3();
          _this._isOutInnerSize = false;
          _this._distanceRate = 0;
          _this._checkInterval = 0.04;
          _this._oldAngle = 0;
          _this._currentTime = 0;
          _this._oriDotPos = new Vec3();
          _this._movePos = new Vec3();
          _this._curRingPos_1 = new Vec3();
          _this._curRingPos_2 = new Vec3();
          return _this;
        }

        var _proto = Joystick.prototype; //

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this._touchStartEvent, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this); // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0

          this.node.on(Node.EventType.TOUCH_END, this._touchEndEvent, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
          this.ndRing.setPosition(this._oriRingPos);
          this.ndRing.active = true;
        };

        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this._touchStartEvent, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this); // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0

          this.node.off(Node.EventType.TOUCH_END, this._touchEndEvent, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this); //重置

          this.isMoving = false;
          this.ndDot.setPosition(this._oriDotPos);

          if (this._oriRingPos) {
            this.ndRing.setPosition(this._oriRingPos);
          }
        };

        _proto._touchStartEvent = function _touchStartEvent(event) {
          var _this$node$getCompone; // 记录触摸的世界坐标，给touch move使用
          // this.dot.opacity = 255;


          this._targetRingPos = null;
          var touch = event.getUILocation();

          this._touchStartLocation.set(touch.x, touch.y, 0);

          var touchPos = (_this$node$getCompone = this.node.getComponent(UITransformComponent)) == null ? void 0 : _this$node$getCompone.convertToNodeSpaceAR(this._touchStartLocation);

          if (!this._oriRingPos) {
            this._oriRingPos = this.ndRing.getPosition().clone();
          } // 记录摇杆位置，给touch move使用


          this._stickPos.set(touchPos);

          this._isOutInnerSize = false;

          if (!this.isFollowStart) {
            var _this$ndRing$getCompo, _this$ndRing$getCompo2;

            touchPos = (_this$ndRing$getCompo = this.ndRing.getComponent(UITransformComponent)) == null ? void 0 : _this$ndRing$getCompo.convertToNodeSpaceAR(this._touchStartLocation); //触摸点与圆圈中心的距离

            var distance = touchPos.length();
            var width = (_this$ndRing$getCompo2 = this.ndRing.getComponent(UITransformComponent)) == null ? void 0 : _this$ndRing$getCompo2.contentSize.width; //圆圈半径

            var radius = width / 2; //手指在圆圈内触摸,控杆跟随触摸点

            if (radius > distance) {
              this.ndDot.setPosition(touchPos);

              this._updateAngle(touchPos);

              return true;
            }

            return false;
          } else {
            //设置遥感可移动范围
            if (this.touchType === TOUCH_TYPE.FOLLOW) {
              touchPos.y = touchPos.y >= -screenHeight / 6 ? -screenHeight / 6 : touchPos.y;
            }

            this.ndRing.setPosition(touchPos);
            this.ndRing.active = true;
          }
        };

        _proto._touchMoveEvent = function _touchMoveEvent(event) {
          var _this$ndRing$getCompo3, _this$ndRing$getCompo4;

          var touch = event.getUILocation(); //事件拦截
          // event.propagationStopped = true;

          this._touchMoveLocation.set(touch.x, touch.y, 0);

          var touchPos = (_this$ndRing$getCompo3 = this.ndRing.getComponent(UITransformComponent)) == null ? void 0 : _this$ndRing$getCompo3.convertToNodeSpaceAR(this._touchMoveLocation); // if (this.touchType === TOUCH_TYPE.FOLLOW) {
          //     let offsetPos = cc.v3(touchPos.x - this._stickPos.x, touchPos.y - this._stickPos.y, 0);
          //     touchPos = offsetPos;
          // }

          var distance = touchPos.length();

          if (distance > this.innerSize) {
            this.isMoving = true;
            this._isOutInnerSize = true;
          } else {
            this._isOutInnerSize = false;
          } //有拖动且有角度才视为开始游戏


          if (this.isMoving) {
            this._currentTime = this._checkInterval;
          }

          var width = (_this$ndRing$getCompo4 = this.ndRing.getComponent(UITransformComponent)) == null ? void 0 : _this$ndRing$getCompo4.contentSize.width; //圆圈半径

          var radius = width / 2;
          var rate = 0; // 由于摇杆的postion是以父节点为锚点，所以定位要加上ring和dot当前的位置(stickX,stickY)

          if (radius > distance) {
            rate = Number((distance / radius).toFixed(3));
            this.ndDot.setPosition(touchPos);
          } else if (this.touchType == TOUCH_TYPE.DEFAULT || this.touchType == TOUCH_TYPE.FOLLOW || this.touchType == TOUCH_TYPE.FOLLOW_ALWAYS) {
            rate = 1; //控杆永远保持在圈内，并在圈内跟随触摸更新角度

            var radian = Math.atan2(touchPos.y, touchPos.x);
            var x = Math.cos(radian) * radius;
            var y = Math.sin(radian) * radius;

            this._movePos.set(x, y, 0);

            if (this.touchType === TOUCH_TYPE.FOLLOW_ALWAYS) {
              var _this$node$getCompone2;

              this._curRingPos_2.set(touch.x - x, touch.y - y, 0);

              var ringPos = (_this$node$getCompone2 = this.node.getComponent(UITransformComponent)) == null ? void 0 : _this$node$getCompone2.convertToNodeSpaceAR(this._curRingPos_2);
              this._targetRingPos = ringPos;
            }

            this.ndDot.setPosition(this._movePos);
          } else {
            // 点跟随移动
            this.ndDot.setPosition(touchPos);
          } //更新角度


          this._updateAngle(touchPos); //更新遥感移动距离百分比


          this._distanceRate = rate;
        };

        _proto._touchEndEvent = function _touchEndEvent(event) {
          if (!this.isMoving) {
            //可以判断为点击
            this.onClickCb && this.onClickCb();
          } else {
            var _this$ndRing$getCompo5;

            var touch = event.getUILocation();

            this._touchEndLocation.set(touch.x, touch.y, 0);

            var touchPos = (_this$ndRing$getCompo5 = this.ndRing.getComponent(UITransformComponent)) == null ? void 0 : _this$ndRing$getCompo5.convertToNodeSpaceAR(this._touchEndLocation);
            var isDragToInner = false;

            if (touchPos.length() < this.innerSize) {
              //取消掉
              isDragToInner = true;
              this.onEndCb && this.onEndCb(isDragToInner);
            } else {
              this.onEndCb && this.onEndCb(isDragToInner);
            }
          }

          this.isMoving = false;

          this._updateAngle(v3(0, 0, 0));

          this.ndDot.setPosition(this._oriDotPos);

          if (this.touchType === TOUCH_TYPE.DEFAULT) {
            this.ndRing.setPosition(v3(0, 0, 0));
          }

          if (this.touchType === TOUCH_TYPE.FOLLOW || this.touchType === TOUCH_TYPE.FOLLOW_ALWAYS || this.touchType === TOUCH_TYPE.FOLLOW_DOT) {
            this._targetRingPos = null;
            this.ndRing.setPosition(this._oriRingPos); // this.ndRing.active = false;
          }
        };

        _proto._updateAngle = function _updateAngle(pos) {
          this._angle = Math.round(Math.atan2(pos.y, pos.x) * 180 / Math.PI);
          return this._angle;
        };

        _proto.reset = function reset() {
          this.isMoving = false;
          this.ndDot.setPosition(this._oriDotPos);
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          //设置终终点按钮位置
          if (this._targetRingPos) {
            this._curRingPos_1.set(0, 0, 0);

            Vec3.lerp(this._curRingPos_1, this.ndRing.position, this._targetRingPos, 20 * deltaTime);
            this.ndRing.setPosition(this._curRingPos_1);
          }

          this._currentTime += deltaTime;

          if (this._currentTime >= this._checkInterval) {
            this._currentTime = 0;

            if (this.isMoving) {
              this._oldAngle = this.angle;
              var dir = this.angle > 90 || this.angle < -90 ? -1 : 1; // GameManager.getInstance().updateOrientation(dir);

              if (this.angle !== this._oldAngle) {
                this._oldAngle = this.angle;
              } // if (this.angle !== this._oldAngle) {
              // }

            } else {
              this.isMoving = false; // GameManager.getInstance().updateOrientation(0);
            }
          }

          var dotPos = this.ndDot.getPosition();
          this._deviation = v2(-dotPos.x / 94, dotPos.y / 94);
        };

        _createClass(Joystick, [{
          key: "distanceRate",
          get: //是否正在移动
          function get() {
            return this._distanceRate;
          }
        }, {
          key: "angle",
          get: function get() {
            return this._angle;
          },
          set: function set(v) {
            this._angle = v;
          }
        }, {
          key: "deviation",
          get: function get() {
            return this._deviation;
          },
          set: function set(v) {
            this._deviation = v;
          }
        }]);

        return Joystick;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndRing", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndDot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "touchType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TOUCH_TYPE.DEFAULT;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "directionType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DIRECTION_TYPE.ALL;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isEnableTransparent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isFollowStart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "innerSize", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonUtil.ts", ['cc', './Loader.ts'], function (exports) {
  'use strict';

  var cclegacy, JsonAsset, Loader;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      Loader = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f31cfEmTrxNu6qEBO3heqPN", "JsonUtil", undefined);
      /** 资源路径 */


      var path = "json/";
      /** 数据缓存 */

      var data = new Map();
      /** JSON数据表工具 */

      var JsonUtil = exports('JsonUtil', /*#__PURE__*/function () {
        function JsonUtil() {}

        JsonUtil.get = function get(name) {
          if (data.has(name)) return data.get(name);
        };

        JsonUtil.load = function load(name, callback) {
          if (data.has(name)) callback(data.get(name));else {
            var url = path + name;
            Loader.loadBundleRes('GameData', url, function (content) {
              data.set(name, content.json);
              callback(content.json);
            }, JsonAsset);
          }
        };

        JsonUtil.loadAsync = function loadAsync(name) {
          return new Promise(function (resolve, reject) {
            if (data.has(name)) {
              resolve(data.get(name));
            } else {
              var url = path + name;
              Loader.loadBundleRes('GameData', url, function (content) {
                data.set(name, content.json);
                resolve(content.json);
              }, JsonAsset);
            }
          });
        };

        JsonUtil.loadOtherAsync = function loadOtherAsync(url) {
          return new Promise(function (resolve, reject) {
            if (data.has(url)) {
              resolve(data.get(url));
            } else {
              Loader.loadBundleRes('GameData', url, function (content) {
                data.set(url, content.json);
                resolve(content.json);
              }, JsonAsset);
            }
          });
        };

        JsonUtil.release = function release(name) {
          var url = path + name;
          data["delete"](name);
          Loader.release('GameData', url);
        };

        return JsonUtil;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KSADApi.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "c50b9uly5dEM7QO+L0GyymJ", "KSADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var KSADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function KSADApi() {
          this.clipIndexList = void 0;
          this.videoPath = void 0;
          this.arg = void 0;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.PassiveVideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.TIMingData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.AdCustomBannerData = null;
          this.AdCustomTypeData = void 0;
          this.ADNewNativeAdData = null;
          this.ADNewNativeTypeData = null;
          this.ADNewConfig = void 0;
          this.wx = window['wx'];
          this.bannerAd = null;
          this._autoBannerClose = false;
          this.interstitialAd = null;
          this.rewardedVideoAd = null;
          this.m_videoAdIsLoaded = false;
          this.nativeAd = null;
          this.resTemp = null;
          this.gridAd = null;
          this.title = '超上瘾的解密游戏，挑战你的智商！';
          this.shareUrl = 'https://res.efunent.com/dev2/web2/LceFirePeople/qq/data/share.jpg';
          this.systemInfo = null;
          this.customIntersAd = null;
          this.customIconAd = null;
          this.loadSucc_IconAd = false;
          this.loadSucc_CuctomInters = false;
          this.CuctomIntervalTime = true;
          this.Time = new Date().getTime();
          this.MinTime = 60000;
          this.recorder = void 0;
        }

        var _proto = KSADApi.prototype;

        _proto.setGroup = function setGroup(group) {};

        _proto.onInit = function onInit(_callback) {
          if (this.wx !== null && this.wx !== undefined) {
            this.systemInfo = this.wx.getSystemInfoSync();
            this.Time = new Date().getTime();
            this.createInsertAd();
            this.createVideo();
          } else {
            this.wx = null;
          }

          _callback && _callback();
          console.log('wx ===================> onInit   ok');
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {
          if (this.wx != null && this.wx != undefined) {
            console.log('wx平台 分享');
            this.wx.shareAppMessage({
              title: this.title,
              imageUrl: this.shareUrl,
              success: function success() {
                _callback && _callback(1);
              },
              fail: function fail() {
                _callback && _callback(0);
              }
            });
          }
        };

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {
          if (this.recorder) {
            this.recorder.publishVideo({
              callback: function callback(error) {
                if (error != null && error != undefined) {
                  console.log('分享录屏失败: ' + JSON.stringify(error));
                  _callback && _callback('分享失败');
                  return;
                }

                console.log('分享录屏成功');
                _callback && _callback('1');
              }
            });
          }
        };

        _proto.createBanner = function createBanner() {};

        _proto.showBanner = function showBanner() {};

        _proto.hideBanner = function hideBanner(close) {}
        /**展示原生banner */
        ;

        _proto.showNativeBanner = function showNativeBanner() {}
        /**隐藏原生banner */
        ;

        _proto.hideNativeBanner = function hideNativeBanner() {};

        _proto.createVideo = function createVideo() {
          if (this.wx == null && this.wx == undefined) {
            return;
          }

          if (this.VideoData && this.VideoData.enabled && this.VideoData.vendor_position != '') {
            /**创建rewardedVideoAd 对象*/
            console.log('wx平台 创建激励视频广告');
            this.rewardedVideoAd = this.wx.createRewardedVideoAd({
              adUnitId: this.VideoData.vendor_position
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('wxH5GameAPI 激励视频 加载失败:code =====>:' + err.code + 'message ======>:' + JSON.stringify(err));
            });
          }
        };

        _proto.showVideo = function showVideo(_successCallback) {
          var _this = this;

          if (this.wx == null && this.wx == undefined) {
            return;
          }

          if (this.VideoData && this.VideoData.enabled && this.VideoData.vendor_position != '') {
            this.rewardedVideoAd.show();

            var onClose = function onClose(res) {
              if (res.isEnded) {
                console.log('激励视频广告完成，发放奖励');
                /**播放完毕 处理播放成功的逻辑 */

                _successCallback && _successCallback(true);
              } else {
                console.log('激励视频广告取消关闭，不发放奖励');
                /**播放失败 处理播放失败的逻辑 */
                // _failCallback && _failCallback();

                _successCallback && _successCallback(false);
              }

              _this.Time = new Date().getTime();

              _this.rewardedVideoAd.offClose(onClose);
            };

            this.rewardedVideoAd.onClose(onClose);
          }
        }
        /**展示 被动激励视频 */
        ;

        _proto.showPassiveVideo = function showPassiveVideo(_successCallback) {};

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createInsertAd = function createInsertAd() {
          if (this.wx == null && this.wx == undefined) {
            return;
          }

          if (this.SystemIntersData && this.SystemIntersData.enabled && this.SystemIntersData.vendor_position != '') {
            this.interstitialAd = this.wx.createInterstitialAd({
              adUnitId: this.SystemIntersData.vendor_position
            });
            this.interstitialAd.onError(function (res) {
              console.log('wx InsertAd load Error:' + JSON.stringify(res));
            });
          }
        };

        _proto.showInsertAd = function showInsertAd() {
          var _this2 = this;

          if (this.wx == null && this.wx == undefined) {
            return;
          }

          if (this.Timing() == false) {
            return;
          }

          if (this.SystemIntersData && this.SystemIntersData.enabled && this.SystemIntersData.vendor_position != '') {
            if (this.interstitialAd == null) {
              this.createInsertAd();
            }

            if (this.interstitialAd) {
              this.interstitialAd.show();

              var onClose = function onClose(res) {
                _this2.interstitialAd.offClose(onClose);

                _this2.interstitialAd.destroy();

                _this2.interstitialAd = null;
                _this2.Time = new Date().getTime();
              };

              this.interstitialAd.onClose(onClose);
            }
          }
        };

        _proto.showCustomAd = function showCustomAd() {};

        _proto.hideCustomAd = function hideCustomAd() {};

        _proto.showCustomIconAd = function showCustomIconAd() {};

        _proto.hideCustomIconAd = function hideCustomIconAd() {};

        _proto.createNativeAd = function createNativeAd() {};

        _proto.showNativeAd = function showNativeAd(adIdKey, _callback, openIdKey) {};

        _proto.onNativeAdClick = function onNativeAdClick(_id) {};

        _proto.onNativeReportAdShow = function onNativeReportAdShow(_id) {};

        _proto.createNativeIconAd = function createNativeIconAd() {};

        _proto.showNativeIconAd = function showNativeIconAd() {};

        _proto.onNativeIconAdClick = function onNativeIconAdClick(_id) {};

        _proto.showGridAd = function showGridAd() {};

        _proto.hideGridAd = function hideGridAd() {};

        _proto.saveDataToCache = function saveDataToCache(_key, _value) {};

        _proto.readDataFromCache = function readDataFromCache(_key) {};

        _proto.addDesktop = function addDesktop(_callback) {
          this.wx.addShortcut({
            success: function success(res) {
              console.log('MINIGAME ===> ', '添加桌面成功');

              _callback(true);
            },
            fail: function fail(res) {
              console.log('MINIGAME ===> ', '添加桌面失败：', JSON.stringify(res));

              _callback(false);
            }
          });
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {};

        _proto.StartRecorder = function StartRecorder(_duration) {
          this.recorder = this.wx.getGameRecorder();
          this.recorder.start();
        };

        _proto.stopRecordScreen = function stopRecordScreen() {
          if (this.recorder) {
            this.recorder.stop();
          }
        };

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.vibrateShort = function vibrateShort() {
          if (this.wx !== null && this.wx !== undefined) this.wx.vibrateShort && this.wx.vibrateShort();
        };

        _proto.vibrateLong = function vibrateLong() {
          if (this.wx !== null && this.wx !== undefined) this.wx.vibrateLong && this.wx.vibrateLong();
        };

        _proto.recordClipRecorder = function recordClipRecorder(data) {};

        _proto.pauseGameVideo = function pauseGameVideo() {};

        _proto.resumeGameVideo = function resumeGameVideo() {};

        _proto.getNativeAdInfo = function getNativeAdInfo(type) {};

        _proto.getHWNativeAdInfo = function getHWNativeAdInfo(_infoCallback) {};

        _proto.reportNativeImageClick = function reportNativeImageClick(id) {};

        _proto.reportNativeImageShow = function reportNativeImageShow(id) {};

        _proto.loadNativeImage = function loadNativeImage() {};

        _proto.getNativeIconAdInfo = function getNativeIconAdInfo(type) {};

        _proto.reportNativeIconClick = function reportNativeIconClick(_id) {};

        _proto.reportNativeIconShow = function reportNativeIconShow(_id) {};

        _proto.loadNativeIcon = function loadNativeIcon() {};

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {};

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {};

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {};

        _proto.phoneVibrate = function phoneVibrate(isLong) {
          if (isLong) {
            this.vibrateLong();
          } else {
            this.vibrateShort();
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        _proto.navigateToScene = function navigateToScene(_succeedcallback, _failcallback) {};

        _proto.Share = function Share(_succeedcallback, _failcallback) {};

        _proto.showNewNativeAd = function showNewNativeAd() {};

        _proto.hideNewNativeAd = function hideNewNativeAd() {};

        _proto.showCustomBanner = function showCustomBanner() {};

        _proto.hideCustomBanner = function hideCustomBanner() {};

        _proto.showCustomType12 = function showCustomType12(type, playSuccessCall) {};

        _proto.showADNewNativeType12 = function showADNewNativeType12(type, playSuccessCall) {};

        _proto.ShowGameIconAd = function ShowGameIconAd() {};

        _proto.HideGameIconAd = function HideGameIconAd() {};

        _proto.ShowHomeIconAd = function ShowHomeIconAd() {};

        _proto.HideHomeIconAd = function HideHomeIconAd() {};

        _proto.ShowSideAd = function ShowSideAd() {};

        _proto.HideSideAd = function HideSideAd() {};

        _proto.ShowMoreGamesAd = function ShowMoreGamesAd() {};

        _proto.HideMoreGamesAd = function HideMoreGamesAd() {};

        _proto.ShowBannerNativeAd = function ShowBannerNativeAd() {};

        _proto.HideBannerNativeAd = function HideBannerNativeAd() {};

        _proto.Timing = function Timing() {
          // 连续点击
          var nowTime = new Date().getTime();

          if (nowTime - this.Time > this.MinTime) {
            this.Time = nowTime;
            return true;
          }

          console.log("点慢点");
          return false;
        };

        return KSADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loader.ts", ['cc', './GEventManager.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, assetManager, GEventManager, Event_Name;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "c3d50YPcNtC+qkjYLpLNi99", "Loader", undefined);

      var ccclass = _decorator.ccclass;
      var Loader = exports('default', (_dec = ccclass('Loader'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function Loader() {}
        /**记录文件夹路径对应的资源数组 */

        /**记录所有加载完成的资源，包括通过文件夹加载的资源 */
        //#region 进度条及触摸遮罩

        /**显示进度条：发送事件，通知UI节点显示进度 */


        Loader.showProgressBar = function showProgressBar(rate) {
          if (undefined === rate) {
            rate = 0;
          }

          this.showMask();
          GEventManager.emit(Event_Name.SHOWPRIGRESS, rate);
        }
        /**
         * 根据资源加载进度更新进度条
         * @param completedCount    已加载完成的资源数量
         * @param totalCount        要加载的资源总数量
         * @param item              当前加载完成的资源
         */
        ;

        Loader.updateProgress = function updateProgress(completedCount, totalCount, item) {
          var rate = completedCount / totalCount;
          if (rate > 1) rate = 1;
          GEventManager.emit(Event_Name.UPDATEPROGRESS, rate);
        };

        Loader.hideProgressBar = function hideProgressBar(count) {
          if (count === void 0) {
            count = 1;
          }

          GEventManager.emit(Event_Name.HIDEPROGRESS, null);
          this.hideMask(count);
        } //显示遮罩，只屏蔽触摸事件，不显示进度条，不变暗屏幕
        ;

        Loader.showMask = function showMask(count) {
          if (count === void 0) {
            count = 1;
          }

          GEventManager.emit(Event_Name.SHOWTOUCHMASK, count);
        };

        Loader.hideMask = function hideMask(count) {
          if (count === void 0) {
            count = 1;
          }

          GEventManager.emit(Event_Name.HIDETOUCHMASK, count);
        } //#endregion
        //#region 子包、资源包加载

        /**子包加载状态记录 */
        ;
        /**
         * 加载资源包（与原加载子包接口用法一致）
         * @param name      资源包名称
         * @param cb        回调函数，只需后台预加载资源时，传入null即可
         * @param mask      加载过程中是否需要显示进度条并阻断玩家触摸操作，当需要加载完成后才能进行下一步操作时，请传入true
         * @param insert    插队加载，为true时，会在当前任务加载完后立即加载该资源包，队列中的其他任务延后加载
         */


        Loader.loadBundle = function loadBundle(name, cb, mask, insert) {
          if (mask === void 0) {
            mask = false;
          }

          if (insert === void 0) {
            insert = false;
          }

          this.loadSubpackage(name, cb, mask, insert);
        }
        /**
         * 加载子包资源
         * @param name      子包名称
         * @param cb        回调函数，只需后台预加载资源时，传入null即可
         * @param mask      加载过程中是否需要显示进度条并阻断玩家触摸操作，当需要加载完成后才能进行下一步操作时，请传入true
         * @param insert    插队加载，为true时，会在当前任务加载完后立即加载该资源包，队列中的其他任务延后加载
         */
        ;

        Loader.loadSubpackage = function loadSubpackage(name, cb, mask, insert) {
          if (undefined === mask) {
            mask = false;
          }

          if (undefined === insert) {
            insert = false;
          }

          var record = this.subpackageRecords[name];

          if (!record) {
            record = new SubpackageRecord(name, cb, mask);
            this.subpackageRecords[name] = record;
          }

          switch (record.state) {
            case LoadState.inited:
              {
                if (mask) this.showSubpackageProgress();

                if (insert && this.subpackageSequence.length > 0) {
                  this.subpackageSequence.splice(1, 0, name);
                  record.enterSequence();
                } else {
                  this.subpackageSequence.push(name);

                  if (this.subpackageSequence.length > 1) {
                    record.enterSequence();
                  } else {
                    this._loadSubpackage(name);
                  }
                }

                break;
              }

            case LoadState.waiting:
              {
                if (mask) this.showSubpackageProgress();
                record.pushCb(cb, mask);

                if (insert && this.subpackageSequence.length > 0) {
                  var index = this.subpackageSequence.indexOf(name);

                  if (index > 1) {
                    this.subpackageSequence.splice(index, 1);
                    this.subpackageSequence.splice(1, 0, name);
                    record.enterSequence();
                  } // } else {
                  //     this.subpackageSequence.push(name);
                  //     if (this.subpackageSequence.length > 1) {
                  //         record.enterSequence();
                  //     } else {
                  //         this._loadSubpackage(name);
                  //     }

                }

                break;
              }

            case LoadState.turnTo:
              {
                if (mask) this.showSubpackageProgress();
                record.pushCb(cb, mask);

                this._loadSubpackage(name);

                break;
              }

            case LoadState.loading:
              {
                if (mask) this.showSubpackageProgress();
                record.pushCb(cb, mask);
                break;
              }

            case LoadState.finished:
              {
                setTimeout(function () {
                  if (!!cb) cb();
                }, 0);
                break;
              }
          }
        };

        Loader._loadSubpackage = function _loadSubpackage(name) {
          var _this = this; // console.log("开始加载子包：", name);
          // console.log("子包加载队列：", this.subpackageSequence.toString());


          this.subpackageRecords[name].loadStart();
          assetManager.loadBundle(name, function (err, bundle) {
            if (err) {
              console.error("子包加载出错：", name);
              console.error(err);
              return;
            }

            console.log("子包加载完成：", name);

            var index = _this.subpackageSequence.indexOf(name);

            _this.subpackageSequence.splice(index, 1); // console.log("等待加载的子包列表：", this.subpackageSequence.toString());


            _this.hideSubpackageProgress();

            _this.subpackageRecords[name].loadFinish();

            if (_this.subpackageSequence.length > 0) {
              // setTimeout(() => {
              var str = _this.subpackageSequence[0]; // console.log("加载下一个子包：", str);

              var record = _this.subpackageRecords[str];

              if (!!record) {
                record.turnToLoad();
              }

              _this.loadSubpackage(str, null, !!_this.subpackageRecords[str].maskCount); // }, 0);

            }
          });
        };
        /**显示子包加载进度条 */


        Loader.showSubpackageProgress = function showSubpackageProgress() {
          if (null === this.subpackageProgressTimer) {
            this.showProgressBar();
            this.subpackageProgress = 0;
            this.subpackageProgressTimer = setInterval(this.updateSubpackageProgress.bind(this), 100);
          }
        };

        Loader.updateSubpackageProgress = function updateSubpackageProgress() {
          this.subpackageProgress += 0.03;

          if (this.subpackageProgress >= 1) {
            this.subpackageProgress = 0;
          }

          GEventManager.emit(Event_Name.UPDATEPROGRESS, this.subpackageProgress);
        };

        Loader.hideSubpackageProgress = function hideSubpackageProgress() {
          if (null !== this.subpackageProgressTimer) {
            var count = 0;

            for (var i = this.subpackageSequence.length - 1; i >= 0; --i) {
              count += this.subpackageRecords[this.subpackageSequence[i]].maskCount;
            }

            if (count == 0) {
              clearInterval(this.subpackageProgressTimer);
              this.subpackageProgressTimer = null;
              this.subpackageProgress = 0;
              this.hideProgressBar();
            }
          }
        } //#endregion
        //#region 资源加载

        /**
         * 从资源包加载单个资源，调用前请确保该资源包已加载完成
         * @param bundle    资源包名
         * @param url       资源相对路径
         * @param cb        加载回调
         * @param mask      加载过程中是否阻挡玩家触摸操作，默认阻挡
         */
        ;

        Loader.loadBundleRes = function loadBundleRes(bundle, url, cb, type, mask) {
          var _this2 = this;

          if (mask === void 0) {
            mask = false;
          }

          var b = assetManager.getBundle(bundle);

          if (!b) {
            console.error("资源包 " + bundle + " 尚未加载，无法获取资源:", url);
            cb(null);
            return;
          }

          var assetType = null;
          if (undefined === type) ;else if (typeof type === "boolean") ;else {
            assetType = type; // if (undefined === mask) {
            //     mask = true;
            // }
          }

          if (mask) {
            this.showMask();
          }

          if (null !== assetType) {
            b.load(url, assetType, function (err, res) {
              if (mask) {
                _this2.hideMask();
              }

              if (err) {
                console.error(err.message || err);
                cb(null);
                return;
              }

              cb(res);
            });
          } else {
            b.load(url, function (err, res) {
              if (mask) {
                _this2.hideMask();
              }

              if (err) {
                console.error(err.message || err);
                cb(null);
                return;
              }

              cb(res);
            });
          }
        }
        /**
         * 从资源包加载多个资源，调用前请确保该资源包已加载完成
         * @param bundle    资源包名
         * @param urls      资源相对路径
         * @param cb        加载回调
         * @param type      要加载的资源类型
         * @param mask      加载过程中是否显示加载进度条并阻挡玩家操作，默认为true
         */
        ;

        Loader.loadBundleArray = function loadBundleArray(bundle, urls, cb, type, mask) {
          var _this3 = this;

          var b = assetManager.getBundle(bundle);

          if (!b) {
            console.error("资源包 " + bundle + " 尚未加载，无法获取资源数组:", urls);
            cb(null);
            return;
          }

          var assetType = null;

          if (undefined === type) {
            mask = true;
          } else if (typeof type === "boolean") {
            mask = !!type;
          } else {
            assetType = type;

            if (undefined === mask) {
              mask = true;
            }
          }

          if (mask) {
            this.showProgressBar();
          }

          if (!!assetType) {
            b.load(urls, assetType, this.updateProgress.bind(this), function (err, res) {
              if (mask) {
                _this3.hideProgressBar();
              }

              if (err) {
                console.error(err.message || err);
                cb(null);
                return;
              }

              cb(res);
            });
          } else {
            b.load(urls, this.updateProgress.bind(this), function (err, res) {
              if (mask) {
                _this3.hideProgressBar();
              }

              if (err) {
                console.error(err.message || err);
                cb(null);
                return;
              }

              cb(res);
            });
          }
        }
        /**
         * 从资源包中加载文件夹，调用前请确保该资源包已加载完成
         * @param bundle    资源包名
         * @param dir       文件夹路径
         * @param cb        加载回调
         * @param type      要加载的文件夹中的资源类型
         * @param mask      加载过程中是否显示加载进度条并阻挡玩家操作，默认为true
         */
        ;

        Loader.loadBundleDir = function loadBundleDir(bundle, dir, cb, type, mask) {
          var _this4 = this;

          var b = assetManager.getBundle(bundle);

          if (!b) {
            console.error("资源包 " + bundle + " 尚未加载，无法获取资源文件夹:", dir);
            cb(null);
            return;
          }

          var assetType = null;

          if (undefined === type) {
            mask = true;
          } else if (typeof type === "boolean") {
            mask = !!type;
          } else {
            assetType = type;

            if (undefined === mask) {
              mask = true;
            }
          }

          if (mask) {
            this.showProgressBar();
          }

          if (!!assetType) {
            b.loadDir(dir, assetType, this.updateProgress.bind(this), function (err, arr) {
              if (mask) {
                _this4.hideProgressBar();
              }

              if (err) {
                console.log(err);
                cb(null);
                return;
              }

              cb(arr);
            });
          } else {
            b.loadDir(dir, this.updateProgress.bind(this), function (err, arr) {
              if (mask) {
                _this4.hideProgressBar();
              }

              if (err) {
                console.log(err);
                cb(null);
                return;
              }

              cb(arr);
            });
          }
        };

        Loader.loadBundleScene = function loadBundleScene(bundle, scene, cb, mask) {
          var _this5 = this;

          var b = assetManager.getBundle(bundle);

          if (!b) {
            console.error("资源包 " + bundle + " 尚未加载，无法加载场景:", scene);
            cb(null);
            return;
          }

          if (undefined === mask) {
            mask = true;
          }

          if (mask) {
            this.showProgressBar();
          }

          b.loadScene(scene, this.updateProgress.bind(this), function (err, res) {
            if (mask) {
              _this5.hideProgressBar();
            }

            if (!!err) {
              console.error(err);
              return;
            }

            cb(res);
          });
        } //#region 获取
        ;

        Loader.GetAssets = function GetAssets(abName, resUrl) {
          var assetBundle = assetManager.getBundle(abName);

          if (assetBundle == null) {
            console.error(abName + " is null,please load assetbundle first!");
            return;
          }

          var getAsset = assetBundle.get(resUrl);

          if (getAsset == null) {
            console.error("No asset find: " + resUrl + " in assetbundle: " + abName);
          }

          return getAsset;
        } //#endregion
        //#region 预加载

        /**
         * 预加载资源包中的单个资源，调用完后，你仍然需要通过 `loadBundleRes` 来完成加载。
         * @param bundle    资源包名称
         * @param url       资源路径
         * @param assetType 资源类型
         */
        ;

        Loader.preLoadBundleRes = function preLoadBundleRes(bundle, url, assetType) {
          var b = assetManager.getBundle(bundle);

          if (!b) {
            return;
          }

          if (undefined === assetType) {
            b.preload(url);
          } else {
            b.preload(url, assetType);
          }
        }
        /**
         * 预加载资源包中的资源数组，调用完后，你仍然需要通过 `loadBundleRes` 或'loadBundleArray'来完成加载。
         * @param bundle    资源包名称
         * @param urls      资源路径数组
         * @param assetType 资源类型
         */
        ;

        Loader.preLoadBundleArray = function preLoadBundleArray(bundle, urls, assetType) {
          var b = assetManager.getBundle(bundle);

          if (!b) {
            return;
          }

          if (undefined === assetType) {
            b.preload(urls);
          } else {
            b.preload(urls, assetType);
          }
        }
        /**
         * 预加载资源包中的文件夹，调用完后，你仍然需要通过 `loadBundleDir` 来完成加载。
         * @param bundle    资源包名称
         * @param dir       资源文件夹名称
         * @param assetType 资源类型
         */
        ;

        Loader.preLoadBundleDir = function preLoadBundleDir(bundle, dir, assetType) {
          var b = assetManager.getBundle(bundle);

          if (!b) {
            return;
          }

          if (undefined === assetType) {
            b.preloadDir(dir);
          } else {
            b.preloadDir(dir, assetType);
          }
        }
        /**
         * 预加载资源包中的场景文件，调用完后，你仍然需要通过 `loadBundleScene` 来完成加载。
         * @param bundle    资源包名称
         * @param scene     场景名
         */
        ;

        Loader.preLoadBundleScene = function preLoadBundleScene(bundle, scene) {
          var b = assetManager.getBundle(bundle);

          if (!b) {
            return;
          }

          b.preloadScene(scene);
        } //#region 卸载
        ;

        Loader.release = function release(bundle, url) {
          var b = assetManager.getBundle(bundle);

          if (!b) {
            return;
          }

          b.release(url);
        };

        Loader.releaseBundle = function releaseBundle(bundle) {
          var b = assetManager.getBundle(bundle);

          if (!b) {
            return;
          }

          b.releaseAll();
        };

        return Loader;
      }(), _class2.dirAsset = {}, _class2.singleAsset = {}, _class2.subpackageRecords = {}, _class2.subpackageSequence = [], _class2.subpackageProgressTimer = null, _class2.subpackageProgress = 0, _class2)) || _class));
      /**子包加载状态 */

      var SubpackageRecord = /*#__PURE__*/function () {
        /**子包名称 */

        /**加载状态 */

        /**回调数组 */
        function SubpackageRecord(name, cb, mask) {
          this.name = void 0;
          this.state = void 0;
          this.cbs = void 0;
          this.maskCount = void 0;
          this.name = name;
          this.state = LoadState.inited;
          this.cbs = [];
          if (!!cb) this.pushCb(cb);
          this.maskCount = mask ? 1 : 0;
        }

        var _proto = SubpackageRecord.prototype;

        _proto.pushCb = function pushCb(cb, mask) {
          if (!!cb) this.cbs.push(cb);
          if (!!mask) this.maskCount++;
        };

        _proto.enterSequence = function enterSequence() {
          this.state = LoadState.waiting;
        };

        _proto.loadStart = function loadStart() {
          this.state = LoadState.loading;
        };

        _proto.loadFinish = function loadFinish() {
          while (this.cbs.length > 0) {
            var cb = this.cbs.shift();
            if (!!cb) cb();
          }

          this.state = LoadState.finished;
          this.maskCount = 0;
        };

        _proto.turnToLoad = function turnToLoad() {
          this.state = LoadState.turnTo;
        };

        return SubpackageRecord;
      }();
      /**资源加载状态 */


      var LoadState;

      (function (LoadState) {
        LoadState[LoadState["inited"] = 1] = "inited";
        LoadState[LoadState["waiting"] = 2] = "waiting";
        LoadState[LoadState["loading"] = 3] = "loading";
        LoadState[LoadState["finished"] = 4] = "finished";
        LoadState[LoadState["turnTo"] = 5] = "turnTo";
      })(LoadState || (LoadState = {}));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './Loader.ts', './UIManager.ts', './GameUIConfig.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, ProgressBar, BaseUIForm, Loader, UIManager, UIID;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      Loader = module.default;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "50bc6NE2IRMba9bHXBgjDRY", "LoadingUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadingUI = exports('LoadingUI', (_dec = ccclass('LoadingUI'), _dec(_class = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(LoadingUI, _BaseUIForm);

        function LoadingUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;
          _this.progressBar = null;
          return _this;
        }

        var _proto = LoadingUI.prototype;

        _proto.init = function init(data) {
          var _this2 = this;

          this.progressBar = this.node.getChildByName('ProgressBar').getComponent(ProgressBar);
          this.progressBar.progress = 0.05;
          Loader.loadBundle(data.bundleName, function () {
            UIManager.GetInstance().ShowUIForms(UIID[data.openUI]);

            _this2.scheduleOnce(function () {
              _this2.closeUI();
            }, 0.5);
          });
        };

        _proto.closeUI = function closeUI() {
          UIManager.GetInstance().CloseUIForms(UIID.Loading);
          UIManager.GetInstance().CloseUIForms(UIID.HallUI);
        };

        return LoadingUI;
      }(BaseUIForm)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalStorageData.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0d98c64h2JHiJaP7HxbHil2", "LocalStorageData", undefined);

      var LocalStorageData = exports('default', /*#__PURE__*/function () {
        function LocalStorageData() {
          this.GameUserData = {
            id: 0,
            name: '点击修改名字',
            head: 0,
            headHave: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            level: 1,
            levelLock: [1, 1, 1, 1, 1, 1],
            gold: 0,
            apple: 0,
            vibration: 1,
            isFirstGame: 1,
            guideGame: 0,
            guide: [0, 0, 0, 0, 0],
            signData: [0, 0, 0, 0, 0, 0, 0],
            signDay: 0,
            signWeek: 0,
            isShare: false
          };
        }

        LocalStorageData.Instance = function Instance() {
          if (this.instance == null) {
            this.instance = new LocalStorageData();
          }

          return this.instance;
        };

        var _proto = LocalStorageData.prototype;

        _proto.setUserData = function setUserData() {
          localStorage.setItem("GameUserDataMW", JSON.stringify(this.GameUserData)); // LocalStorage.instance().setLocal("GameUserDataMW", JSON.stringify(this.GameUserData));
        };

        _proto.getUserData = function getUserData() {
          var GameUserData = localStorage.getItem("GameUserDataMW"); // let GameUserData = LocalStorage.instance().getLocal("GameUserDataMW");

          if (GameUserData) {
            this.GameUserData = JSON.parse(GameUserData);
          }

          var isnewday = false;
          var lgtime = new Date(this.GameUserData.lastLoginTime);
          var lyear = lgtime.getFullYear();
          var lmouh = lgtime.getMonth();
          var lday = lgtime.getDate();
          var ngtime = new Date();
          var nyear = ngtime.getFullYear();
          var nmouh = ngtime.getMonth();
          var nday = ngtime.getDate();

          if (nyear > lyear) {
            isnewday = true;
          } else if (nyear == lyear && lmouh > nmouh) {
            isnewday = true;
          } else if (nyear == lyear && lmouh == nmouh && nday != lday) {
            isnewday = true;
          } else {
            isnewday = false;
          } //新的一天


          if (isnewday) {
            this.initSign();
          }

          this.GameUserData.lastLoginTime = Date.now();
          this.setUserData();
        };

        _proto.initSign = function initSign() {
          var n = 0;

          for (var i = 0; i < this.GameUserData.signData.length; i++) {
            if (this.GameUserData.signData[i] == 1) {
              n++;
            }
          }

          if (n >= 7) {
            this.GameUserData.signData = [0, 0, 0, 0, 0, 0, 0];
            this.GameUserData.signWeek = 1;
            this.GameUserData.signDay = 0;
          }

          if (this.GameUserData.signData[this.GameUserData.signDay] == 1) {
            this.GameUserData.signDay += 1;
          }

          this.GameUserData.taskRate = 0;
          this.GameUserData.taskData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.GameUserData.taskReceive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        };

        _proto.setTypeData = function setTypeData(type, data) {
          this.GameUserData[type] = data;
          this.setUserData();
        };

        _proto.getTypeData = function getTypeData(type) {
          return this.GameUserData[type];
        };

        _proto.addTypeData = function addTypeData(type, num) {
          this.GameUserData[type] += num;
          this.setUserData();
        };

        return LocalStorageData;
      }());
      LocalStorageData.instance = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AdManager.ts', './AdsIdConfig.ts', './AdBridge.ts', './BridgeManager.ts', './BaiDuADApi.ts', './CloseADApi.ts', './HttpRequest.ts', './HuaWeiADApi.ts', './InitAD.ts', './KSADApi.ts', './AnalyticsManager.ts', './AnalyticsParent.ts', './CocosAnalyticsPack.ts', './md5.ts', './MeiZuADApi.ts', './PlatformAdApi.ts', './StatisticsManager.ts', './TiktokADApi.ts', './XmADApi.ts', './OppoADApi.ts', './QQADApi.ts', './MiniSDK.ts', './AdIconInfo.ts', './AdNativeInfo.ts', './VivoADApi.ts', './WXADApi.ts', './AdaptationManager.ts', './AnimRotate.ts', './BaseUIBinder.ts', './BaseUIForm.ts', './BaseUIView.ts', './BezierNB.ts', './ButtonPlus.ts', './CocosHelper.ts', './FormType.ts', './GEventManager.ts', './GameUIConfig.ts', './Joystick.ts', './JsonUtil.ts', './Loader.ts', './LocalStorageData.ts', './CWebSocket.ts', './HttpTools.ts', './NetInterface.ts', './NetManager.ts', './NetTest.ts', './PoolManager.ts', './ProgressBarTools.ts', './ProgressBarTween.ts', './SingletonClass.ts', './SoundManager.ts', './TipUI.ts', './TipsManager.ts', './ToolsHelper.ts', './UIHelper.ts', './UIIndependentManager.ts', './UIManager.ts', './UIMaskManager.ts', './UIMaskScript.ts', './SysDefine.ts', './StartScene.ts', './GameEnum.ts', './GameManager.ts', './MainScene.ts', './WinUI.ts', './AddTimeTip.ts', './HallUI.ts', './LoadingUI.ts', './SettingUI.ts', './SignUI.ts', './NavigateUI.ts', './PrivacyViewUi.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager.ts', './GameUIConfig.ts', './SoundManager.ts', './GEventManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, UIManager, UIID, SoundManager, GEventManager, Event_Name;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      SoundManager = module.default;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7d5f6mKJ3RDPrTHKF+8RTVe", "MainScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainScene = exports('MainScene', (_dec = ccclass('MainScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainScene, _Component);

        function MainScene() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = MainScene.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.start = function start() {
          UIManager.GetInstance().ShowUIForms(UIID.HallUI);
          SoundManager.getInstance().init();
          SoundManager.getInstance().playMusic();
        };

        _proto.onEnable = function onEnable() {
          GEventManager.on(Event_Name.GAME_PLAY_SOUNDS, this.playSounds, this);
        };

        _proto.playSounds = function playSounds(name) {
          SoundManager.getInstance().playEffect(name);
        };

        return MainScene;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/md5.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff73b/WxldDU6L/6CoYlUg2", "md5", undefined);
      /*
        TypeScript Md5
      ==============
        Based on work by
      * Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
      * André Cruz: https://github.com/satazor/SparkMD5
      * Raymond Hill: https://github.com/gorhill/yamd5.js
        Effectively a TypeScrypt re-write of Raymond Hill JS Library
        The MIT License (MIT)
        Copyright (C) 2014 Raymond Hill
        Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.
                        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                          Version 2, December 2004
         Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>
         Everyone is permitted to copy and distribute verbatim or modified
       copies of this license document, and changing it is allowed as long
       as the name is changed.
                    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
         TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
          0. You just DO WHAT THE FUCK YOU WANT TO.
          */


      var Md5 = exports('Md5', /*#__PURE__*/function () {
        // One time hashing functions
        Md5.hashStr = function hashStr(str, raw) {
          if (raw === void 0) {
            raw = false;
          }

          return this.onePassHasher.start().appendStr(str).end(raw);
        };

        Md5.hashAsciiStr = function hashAsciiStr(str, raw) {
          if (raw === void 0) {
            raw = false;
          }

          return this.onePassHasher.start().appendAsciiStr(str).end(raw);
        } // Private Static Variables
        ;

        Md5._hex = function _hex(x) {
          var hc = Md5.hexChars;
          var ho = Md5.hexOut;
          var n;
          var offset;
          var j;
          var i;

          for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];

            for (j = 0; j < 8; j += 2) {
              ho[offset + 1 + j] = hc.charAt(n & 0x0F);
              n >>>= 4;
              ho[offset + 0 + j] = hc.charAt(n & 0x0F);
              n >>>= 4;
            }
          }

          return ho.join('');
        };

        Md5._md5cycle = function _md5cycle(x, k) {
          var a = x[0];
          var b = x[1];
          var c = x[2];
          var d = x[3]; // ff()

          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b = (b << 22 | b >>> 10) + c | 0; // gg()

          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b = (b << 20 | b >>> 12) + c | 0; // hh()

          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b = (b << 23 | b >>> 9) + c | 0; // ii()

          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
        };

        function Md5() {
          this._dataLength = void 0;
          this._bufferLength = void 0;
          this._state = new Int32Array(4);
          this._buffer = new ArrayBuffer(68);
          this._buffer8 = void 0;
          this._buffer32 = void 0;
          this._buffer8 = new Uint8Array(this._buffer, 0, 68);
          this._buffer32 = new Uint32Array(this._buffer, 0, 17);
          this.start();
        }

        var _proto = Md5.prototype;

        _proto.start = function start() {
          this._dataLength = 0;
          this._bufferLength = 0;

          this._state.set(Md5.stateIdentity);

          return this;
        } // Char to code point to to array conversion:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
        // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
        ;

        _proto.appendStr = function appendStr(str) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var code;
          var i;

          for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);

            if (code < 128) {
              buf8[bufLen++] = code;
            } else if (code < 0x800) {
              buf8[bufLen++] = (code >>> 6) + 0xC0;
              buf8[bufLen++] = code & 0x3F | 0x80;
            } else if (code < 0xD800 || code > 0xDBFF) {
              buf8[bufLen++] = (code >>> 12) + 0xE0;
              buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
              buf8[bufLen++] = code & 0x3F | 0x80;
            } else {
              code = (code - 0xD800) * 0x400 + (str.charCodeAt(++i) - 0xDC00) + 0x10000;

              if (code > 0x10FFFF) {
                throw new Error('Unicode standard supports code points up to U+10FFFF');
              }

              buf8[bufLen++] = (code >>> 18) + 0xF0;
              buf8[bufLen++] = code >>> 12 & 0x3F | 0x80;
              buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
              buf8[bufLen++] = code & 0x3F | 0x80;
            }

            if (bufLen >= 64) {
              this._dataLength += 64;

              Md5._md5cycle(this._state, buf32);

              bufLen -= 64;
              buf32[0] = buf32[16];
            }
          }

          this._bufferLength = bufLen;
          return this;
        };

        _proto.appendAsciiStr = function appendAsciiStr(str) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var i;
          var j = 0;

          for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);

            while (i--) {
              buf8[bufLen++] = str.charCodeAt(j++);
            }

            if (bufLen < 64) {
              break;
            }

            this._dataLength += 64;

            Md5._md5cycle(this._state, buf32);

            bufLen = 0;
          }

          this._bufferLength = bufLen;
          return this;
        };

        _proto.appendByteArray = function appendByteArray(input) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var i;
          var j = 0;

          for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);

            while (i--) {
              buf8[bufLen++] = input[j++];
            }

            if (bufLen < 64) {
              break;
            }

            this._dataLength += 64;

            Md5._md5cycle(this._state, buf32);

            bufLen = 0;
          }

          this._bufferLength = bufLen;
          return this;
        };

        _proto.getState = function getState() {
          var self = this;
          var s = self._state;
          return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
          };
        };

        _proto.setState = function setState(state) {
          var buf = state.buffer;
          var x = state.state;
          var s = this._state;
          var i;
          this._dataLength = state.length;
          this._bufferLength = state.buflen;
          s[0] = x[0];
          s[1] = x[1];
          s[2] = x[2];
          s[3] = x[3];

          for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
          }
        };

        _proto.end = function end(raw) {
          if (raw === void 0) {
            raw = false;
          }

          var bufLen = this._bufferLength;
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var i = (bufLen >> 2) + 1;
          var dataBitsLen;
          this._dataLength += bufLen;
          buf8[bufLen] = 0x80;
          buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
          buf32.set(Md5.buffer32Identity.subarray(i), i);

          if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);

            buf32.set(Md5.buffer32Identity);
          } // Do the final computation based on the tail and length
          // Beware that the final length may not fit in 32 bits so we take care of that


          dataBitsLen = this._dataLength * 8;

          if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
          } else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);

            if (matches === null) {
              return;
            }

            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
          }

          Md5._md5cycle(this._state, buf32);

          return raw ? this._state : Md5._hex(this._state);
        };

        return Md5;
      }());
      Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
      Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      Md5.hexChars = '0123456789abcdef';
      Md5.hexOut = [];
      Md5.onePassHasher = new Md5();

      if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        console.error('Md5 self test failed.');
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MeiZuADApi.ts", ['cc', './TipsManager.ts', './AdsIdConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, TipsManager, AdsIdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      TipsManager = module.default;
    }, function (module) {
      AdsIdConfig = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "c5015y8osdMIKYgPxQstqes", "MeiZuADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MeiZuADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function MeiZuADApi() {
          this.videoType = void 0;
          this.arg = void 0;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.qg = window["qg"];
          this.bannerAd = null;
          this._autoBannerClose = false;
          this.interstitialAd = null;
          this.rewardedVideoAd = null;
          this.m_videoAdIsLoaded = false;
          this.nativeAd = null;
          this.resTemp = null;
          this.systemInfo = null;
        }

        var _proto = MeiZuADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.qg !== null && this.qg !== undefined) {
            this.systemInfo = this.qg.getSystemInfoSync();
            this.createVideo();
          } else {
            this.qg = null;
          }

          _callback && _callback();
          console.log('meizu ==> onInit ok  Tip:原生广告 1091版本开放,其他接口测试通过');
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {};

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createBanner = function createBanner() {};

        _proto.showBanner = function showBanner(adIdKey, openIdKey) {
          var _this = this;

          if (this.qg !== null && this.qg !== undefined) {
            this.hideBanner(true);
            this._autoBannerClose = false;
            console.log("meizu平台 创建横幅广告");
            this.bannerAd = this.qg.createBannerAd({
              adUnitId: AdsIdConfig.meizuId[adIdKey],
              style: {
                left: 0,
                top: this.systemInfo.screenHeight - this.systemInfo.screenWidth / 6.7,
                width: this.systemInfo.screenWidth,
                // 设置banner需要的宽度，横屏游戏宽度建议使用参考值1440，必须设置              
                height: this.systemInfo.screenWidth / 6.7
              }
            });
            this.bannerAd.onClose(function () {
              console.log("横幅广告调用 onClose");
              if (!_this._autoBannerClose) ;
            });
            this.bannerAd.onError(function (err) {
              console.log('横幅广告调用 onError', JSON.stringify(err));
            });
            this.bannerAd.onResize(function (res) {
              console.log("Banner 尺寸改变"); //重新修改位置                       

              _this.bannerAd.style.top = _this.systemInfo.screenHeight - res.height; //确定左上角位置，当前为底部位置            

              _this.bannerAd.style.left = (_this.systemInfo.screenWidth - res.width) / 2;
            });
            this.bannerAd.onLoad(function () {
              console.log("banner 广告加载成功");

              _this.bannerAd.show();
            });
          }
        };

        _proto.hideBanner = function hideBanner(close) {
          if (close === void 0) {
            close = false;
          }

          if (this.bannerAd) {
            console.log("meizu平台 销毁横幅广告");

            if (!close) {
              this._autoBannerClose = true;
            }

            this.bannerAd.destroy();
            this.bannerAd = null;
          }
        };

        _proto.createVideo = function createVideo() {
          var _this2 = this;

          if (this.qg !== null && this.qg !== undefined) {
            if (this.rewardedVideoAd) {
              this.rewardedVideoAd.destroy();
              this.rewardedVideoAd = null;
            }
            /**创建rewardedVideoAd 对象*/


            console.log("meizu平台 创建激励视频广告");
            this.rewardedVideoAd = this.qg.createRewardedVideoAd({
              adUnitId: AdsIdConfig.meizuId['video']
            });
            this.rewardedVideoAd.onLoad(function () {
              console.log("激励视频广告 加载成功");
              _this2.m_videoAdIsLoaded = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('meizuH5GameAPI 激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
              _this2.m_videoAdIsLoaded = false;
            });
            this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_type, _successCallback, _failCallback) {
          var _this3 = this;

          this.videoType = _type;
          /**确保video正常创建并已经拉取到数据 */

          if (this.rewardedVideoAd && this.m_videoAdIsLoaded) {
            this.rewardedVideoAd.show();

            var onClose = function onClose() {
              console.log('魅族没有失败，必须播完。激励视频广告完成，发放奖励');
              /**播放完毕 处理播放成功的逻辑 */

              setTimeout(function () {
                _successCallback && _successCallback();
              }, 200);

              _this3.rewardedVideoAd.load();

              _this3.rewardedVideoAd.offClose(onClose);
            };

            this.rewardedVideoAd.onClose(onClose);
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            _failCallback && _failCallback();
            this.createVideo();
          }
        };

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createInsertAd = function createInsertAd() {};

        _proto.showInsertAd = function showInsertAd(adIdKey, openIdKey, closeCall) {
          var _this4 = this;

          if (this.qg != null && this.qg != undefined) {
            if (this.interstitialAd) {
              this.interstitialAd.destroy();
              this.interstitialAd = null;
            }

            this.interstitialAd = this.qg.createInsertAd({
              adUnitId: AdsIdConfig.meizuId[adIdKey]
            });
            this.interstitialAd.onError(function (res) {
              console.log('meizu InsertAd load Error:' + JSON.stringify(res));

              _this4.interstitialAd.destroy();

              _this4.interstitialAd = null;
            });

            var onClose = function onClose(res) {
              console.log("用户关闭插屏广告并销毁");

              _this4.interstitialAd.offClose(onClose);

              _this4.interstitialAd.destroy();

              _this4.interstitialAd = null;
              closeCall && closeCall();
            };

            this.interstitialAd.onClose(onClose);
            this.interstitialAd.onLoad(function () {
              _this4.interstitialAd.show();
            });
            this.interstitialAd.load();
          }
        };

        _proto.createNativeAd = function createNativeAd() {};

        _proto.showNativeAd = function showNativeAd(adIdKey, _callback, openIdKey) {
          var _this5 = this;

          if (this.qg != null && this.qg != undefined) {
            if (this.systemInfo.platformVersion < 1091) {
              console.log('原生广告 1091版本开放');
              return;
            }

            if (this.nativeAd) {
              this.nativeAd.destroy();
              this.nativeAd = null;
            }

            this.nativeAd = this.qg.createNativeAd({
              adUnitId: AdsIdConfig.meizuId['native'][adIdKey]
            });
            this.nativeAd.onError(function (res) {
              console.log('meizu nativeAd load Error:' + JSON.stringify(res));

              _this5.nativeAd.destroy();

              _this5.nativeAd = null;

              _callback(null);
            });
            this.nativeAd.onLoad(function (res) {
              console.log("原生广告 加载成功 展示原生广告");

              if (res && res.adList) {
                _this5.resTemp = res.adList.pop();
                console.log("原生广告 res==>:", _this5.resTemp);

                if (_this5.resTemp) {
                  _this5.resTemp.openIdKey = openIdKey;

                  _callback(_this5.resTemp);

                  _this5.nativeAd.reportAdShow({
                    adId: _this5.resTemp.adId
                  });
                }
              }
            });
            this.nativeAd.load();
          }
        };

        _proto.onNativeAdClick = function onNativeAdClick(_id) {
          if (this.nativeAd) {
            this.nativeAd.reportAdClick({
              adId: _id
            });
          }
        };

        _proto.onNativeReportAdShow = function onNativeReportAdShow(_id) {};

        _proto.createNativeIconAd = function createNativeIconAd() {};

        _proto.showNativeIconAd = function showNativeIconAd() {};

        _proto.onNativeIconAdClick = function onNativeIconAdClick(_id) {}
        /**创建格子广告组件 */
        ;

        _proto.createGridAd = function createGridAd(adIdKey, openIdKey) {};

        _proto.saveDataToCache = function saveDataToCache(_key, _value) {};

        _proto.readDataFromCache = function readDataFromCache(_key) {};

        _proto.addDesktop = function addDesktop(_callback) {
          if (this.qg != null && this.qg != undefined) {
            this.qg.installShortcut({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                // if (res == false) {
                //     _callback && _callback(false);
                // } else {
                //     TipsManager.Instance().create('已存在桌面图标');
                // }
                _callback && _callback(true);
              },
              fail: function fail(err) {
                _callback && _callback(false);
              },
              complete: function complete() {}
            });
          }
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {
          if (this.qg != null && this.qg != undefined) {
            this.qg.hasShortcutInstalled({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  _callback && _callback(false);
                } else {
                  _callback && _callback(true);
                  TipsManager.Instance().create('已存在桌面图标');
                }
              },
              fail: function fail(err) {},
              complete: function complete() {}
            });
          }
        };

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.vibrateShort = function vibrateShort() {
          if (this.qg !== null && this.qg !== undefined) {
            this.qg.vibrateShort && this.qg.vibrateShort();
          }
        };

        _proto.vibrateLong = function vibrateLong() {
          if (this.qg !== null && this.qg !== undefined) {
            this.qg.vibrateLong && this.qg.vibrateLong();
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        return MeiZuADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniSDK.ts", ['cc', './AdsIdConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, sys, AdsIdConfig, EPlatform;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }, function (module) {
      AdsIdConfig = module.default;
      EPlatform = module.EPlatform;
    }],
    execute: function () {
      exports('SDKPlatForm', void 0);

      var _dec, _class, _class2;

      cclegacy._RF.push({}, "00571R9j+xHw7LJ8D43WAUJ", "MiniSDK", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SDKPlatForm;

      (function (SDKPlatForm) {
        SDKPlatForm[SDKPlatForm["Wechat"] = 0] = "Wechat";
        SDKPlatForm[SDKPlatForm["ByteBance"] = 1] = "ByteBance";
        SDKPlatForm[SDKPlatForm["QQ"] = 2] = "QQ";
        SDKPlatForm[SDKPlatForm["OV"] = 3] = "OV";
      })(SDKPlatForm || (SDKPlatForm = exports('SDKPlatForm', {})));

      var MiniSDK = exports('MiniSDK', (_dec = ccclass('MiniSDK'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function MiniSDK() {}

        MiniSDK.Init = function Init(platform) {
          MiniSDK.SDKPlatForm = platform;
        }
        /**
         * 获取网络类型.
         * Object object
         * success	Function	否	成功回调
         * fail	Function	    否	失败回调，可能是因为缺乏权限
         * complete	Function	否	执行结束后的回调
         * 
         * success回调参数： Object data
         * metered	Boolean	是否按照流量计费
         * type	String	网络类型，可能的值为2g，3g，4g，wifi，none
         * @param callback 带boolean类型参数的回调
         */
        ;

        MiniSDK.getNetworkType = function getNetworkType(callback) {
          if (sys.platform == sys.Platform.VIVO_MINI_GAME || sys.platform == sys.Platform.OPPO_MINI_GAME) {
            qg.getNetworkType({
              success: function success(res) {
                if (sys.platform === sys.Platform.VIVO_MINI_GAME) {
                  console.log("MINIGAME ===> vivo network getNetworkType type:", res.type);

                  if (res.type != 'none') {
                    if (callback) callback(true);
                  } else {
                    console.log('MINIGAME ===> vivo 无网络连接');
                    if (callback) callback(false);
                  }
                } else if (sys.platform === sys.Platform.OPPO_MINI_GAME) {
                  console.log("MINIGAME ===> oppo network getNetworkType type:", res.networkType);

                  if (res.networkType != 'none') {
                    if (callback) callback(true);
                  } else {
                    if (callback) callback(false);
                  }
                } else if (sys.platform === sys.Platform.HUAWEI_QUICK_GAME) {
                  console.log("MINIGAME ===> getNetworkType success networkType   " + res.networkType);

                  if (res.networkType != 'none') {
                    if (callback) callback(true);
                  } else {
                    if (callback) callback(false);
                  }
                }
              },
              fail: function fail(res) {
                if (callback) callback(false);
                console.log("MINIGAME ===> network getNetworkType   ", res.errMsg);
              },
              complete: function complete(res) {}
            });
          } else if (sys.platform == sys.Platform.HUAWEI_QUICK_GAME) {
            qg.getNetworkType({
              success: function success(res) {
                console.log("MINIGAME ===> getNetworkType success networkType   " + res.networkType);

                if (res.networkType != 'none') {
                  if (callback) callback(true);
                } else {
                  if (callback) callback(false);
                }
              },
              fail: function fail(res) {
                if (callback) callback(false);
                console.log("MINIGAME ===> network getNetworkType   ", res.errMsg);
              },
              complete: function complete(res) {}
            });
          } else {
            if (callback) callback(true);
          }
        }
        /**
         * 监听网络连接状态。如果多次调用，仅最后一次调用生效（vivo）
         * 监听网络状态变化事件（oppo）
         * @param callback  带boolean类型参数的回调
         */
        ;

        MiniSDK.subscribeNetworkStatus = function subscribeNetworkStatus(_callback) {
          if (sys.platform === sys.Platform.VIVO_MINI_GAME) {
            qg.subscribeNetworkStatus({
              callback: function callback(data) {
                console.log('MINIGAME ===> vivo network status ,type:', data.type);

                if (data.type != 'none') {
                  if (_callback) _callback(true);
                } else {
                  if (_callback) _callback(false);
                }
              }
            });
          } else if (sys.platform === sys.Platform.OPPO_MINI_GAME) {
            qg.onNetworkStatusChange(function (res) {
              console.log('MINIGAME ===> oppo network status ,isConnected:', res.isConnected, ',networkType:', res.netWorkType);

              if (res.isConnected) {
                if (res.netWorkType != 'none') {
                  if (_callback) _callback(true);
                } else {
                  if (_callback) _callback(false);
                }
              } else {
                if (_callback) _callback(false);
              }
            });
          } else if (sys.platform === sys.Platform.HUAWEI_QUICK_GAME) {
            hbs.onNetworkStatusChange(function (res) {
              console.log("MINIGAME ===> onNetworkStatusChange isConnected = " + res.isConnected + ", networkType = " + res.networkType);

              if (res.isConnected) {
                if (res.netWorkType != 'none') {
                  if (_callback) _callback(true);
                } else {
                  if (_callback) _callback(false);
                }
              } else {
                if (_callback) _callback(false);
              }
            });
          } else {
            if (_callback) _callback(true);
          }
        }
        /**
         * 显示对话框
         * 
         */
        ;

        MiniSDK.showDialog = function showDialog(dialogData) {
          if (sys.platform === sys.Platform.VIVO_MINI_GAME) {
            var dialogPanel = new DialogPanel();
            dialogPanel.title = dialogData._title;
            dialogPanel.message = dialogData._msg;
            var btn = new DailogButton();
            btn.text = '确定';
            /* let btn2: DailogButton = new DailogButton();
            btn2.text = '取消';
            let btn3: DailogButton = new DailogButton();
            btn3.text = '按钮3'; */

            dialogPanel.buttons.push(btn); //dialogPanel.buttons.push(btn2);
            //dialogPanel.buttons.push(btn3);

            dialogPanel.success = function (data) {
              console.log('MINIGAME ===> dialog 成功回调：', data.index);

              if (data.index == 0) {
                //第一个按钮的回调
                dialogData.callback1();
              } else if (data.index == 1) {
                //第二个按钮的回调
                if (dialogData.callback2) dialogData.callback2();
              } else if (data.index == 2) {
                //第三个按钮的回调
                if (dialogData.callback3) dialogData.callback3();
              }
            };

            dialogPanel.cancel = function () {
              console.log('MINIGAME ===> dialog 取消回调：');
            };

            dialogPanel.fail = function (data, code) {
              console.log('MINIGAME ===> dialog 失败回调：', data, ',====code', code);
            };

            if (sys.platform === sys.Platform.VIVO_MINI_GAME) qg.showDialog(dialogPanel);
          } else if (sys.platform == sys.Platform.OPPO_MINI_GAME) {
            qg.showModal({
              title: dialogData._title,
              content: dialogData._msg,
              success: function success(res) {
                if (res.confirm) {
                  console.log('MINIGAME ===> 用户点击确定');
                  if (dialogData.callback1) dialogData.callback1();
                } else if (res.cancel) {
                  console.log('MINIGAME ===> 用户点击取消');
                  if (dialogData.callback2) dialogData.callback2();
                }
              }
            });
          } else if (sys.platform == sys.Platform.HUAWEI_QUICK_GAME) {
            if (dialogData.showCancel == '' || dialogData.showCancel == null) {
              dialogData.showCancel = true;
            }

            qg.showModal({
              title: dialogData._title,
              content: dialogData._msg,
              showCancel: dialogData.showCancel,
              cancelText: dialogData.cancelText || '取消',
              confirmText: dialogData.confirmText || '确定',
              confirmColor: dialogData.confirmColor || '#576B95',
              success: function success(res) {
                if (res.confirm) {
                  console.log('MINIGAME ===> 用户点击确定');
                  if (dialogData.callback1) dialogData.callback1();
                } else if (res.cancel) {
                  console.log('MINIGAME ===> 用户点击取消');
                  if (dialogData.callback2) dialogData.callback2();
                }
              }
            });
          } else {
            console.log('MINIGAME ===> other platform show dialog');
          }
        }
        /**
         * 显示弹窗
         * @param _msg 要显示的文本
         * @param _duration vivo:0为短时，1为长时，默认0.Oppo:提示的延迟时间，默认为1500
         */
        ;

        MiniSDK.showToast = function showToast(_msg, _duration) {
          if (sys.platform == sys.Platform.VIVO_MINI_GAME) {
            qg.showToast({
              message: _msg,
              duration: _duration
            });
          } else if (sys.platform == sys.Platform.OPPO_MINI_GAME) {
            qg.showToast({
              title: _msg,
              icon: 'success',
              duration: _duration
            });
          } else if (sys.platform == sys.Platform.HUAWEI_QUICK_GAME) {
            qg.showToast({
              title: _msg,
              icon: 'success',
              duration: _duration
            });
          }
        }
        /**
         * 游戏切后台切换监听
         * @param callback 
         */
        ;

        MiniSDK.onApplication = function onApplication(callback) {
          if (sys.platform === sys.Platform.VIVO_MINI_GAME) {
            qg.onShow(function () {
              console.log('MINIGAME ===> vivo game enter foreground');
              if (callback) callback(true);
            });
            qg.onHide(function () {
              console.log('MINIGAME ===> vivo game enter background');
              if (callback) callback(false);
            });
          }
        }
        /**
         * 退出游戏
         */
        ;

        MiniSDK.exitApplication = function exitApplication() {
          if (AdsIdConfig.platform == EPlatform.VIVO) {
            qg.exitApplication();
          } else if (AdsIdConfig.platform == EPlatform.OPPO) {
            qg.exitApplication({});
          } else if (AdsIdConfig.platform == EPlatform.HUAWEI) {
            qg.exitApplication({});
          }
        };

        return MiniSDK;
      }(), _class2.SDKPlatForm = void 0, _class2)) || _class));
      /** 监听游戏切入前台的接口委托 */

      var DialogPanel = exports('DialogPanel', function DialogPanel() {
        this.title = 'title';
        this.message = 'message';
        this.buttons = [];
        this.success = void 0;
        this.cancel = void 0;
        this.fail = void 0;
      });
      var DailogButton = exports('DailogButton', function DailogButton() {
        this.text = '按钮';
        this.color = '#33dd44';
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NavigateUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts', './AdsIdConfig.ts', './LocalStorageData.ts', './GEventManager.ts', './TipsManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Component, AdManager, AdsIdConfig, EPlatform, LocalStorageData, GEventManager, Event_Name, TipsManager;

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
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      AdManager = module.default;
    }, function (module) {
      AdsIdConfig = module.default;
      EPlatform = module.EPlatform;
    }, function (module) {
      LocalStorageData = module.default;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      TipsManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "ea0aczzY1JMY7cJf/qYChjG", "NavigateUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var navigate_view_ui = exports('default', (_dec = property(Node), _dec2 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(navigate_view_ui, _Component);

        function navigate_view_ui() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "go_navigate_btn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "get_award_btn", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = navigate_view_ui.prototype;

        _proto.onEnable = function onEnable() {
          this.addEvent();
          this.init();
        };

        _proto.init = function init() {
          this.showNavigateInfo();
        };

        _proto.addEvent = function addEvent() {
          if (AdsIdConfig.platform == EPlatform.TikTok) {
            tt.onShow(this.navigateInfoCallBack);
          }
        };

        _proto.OnClick = function OnClick(event) {
          switch (event.target.name) {
            case 'qcbl_btn':
              this.goNavigateInfo();
              break;

            case 'lq_btn':
              this.getAwardInfo();
              break;

            case 'close_btn':
              this.node.destroy(); // AD.getInstance().desktopFlag((_result) => {
              // 	if (_result) {
              // 		AD.getInstance().addDeskTop((info) => { });
              // 	}
              // })
              // tt.offShow(this.navigateInfoCallBack);

              break;
          }
        };

        _proto.navigateInfoCallBack = function navigateInfoCallBack(res) {
          var self = this;
          var navigate_info = this.getData();
          console.log("启动场景字段：", res.launch_from, ", ", res.location);

          if (res.launch_from == 'homepage' || res.location == 'sidebar_card') {
            navigate_info.navigate_time = new Date().toLocaleDateString();
            this.setData(navigate_info);
            self.showNavigateInfo();
          }
        };

        _proto.showNavigateInfo = function showNavigateInfo() {
          var navigate_info = this.getData();
          this.go_navigate_btn.active = navigate_info.navigate_time != new Date().toLocaleDateString();

          if (this.go_navigate_btn.active) {
            navigate_info.get_award = false;
            this.setData(navigate_info);
          }

          this.get_award_btn.active = !this.go_navigate_btn.active;
          this.get_award_btn.getComponent(Button).interactable = !navigate_info.get_award;
        };

        _proto.goNavigateInfo = function goNavigateInfo() {
          AdManager.getInstance().navigateToScene(function () {}, function () {});
          this.node.destroy();
        };

        _proto.getAwardInfo = function getAwardInfo() {
          var navigate_info = this.getData();
          LocalStorageData.Instance().addTypeData('gold', 500);
          GEventManager.emit(Event_Name.GAME_UI_REFRESH_GOLD, null);
          TipsManager.Instance().create('获得500金币!');
          navigate_info.get_award = true;
          this.setData(navigate_info);
          this.showNavigateInfo();
        };

        _proto.getData = function getData() {
          var navigate_info = localStorage.getItem('TiktokNavigateInfo');

          if (navigate_info == null || !navigate_info) {
            return navigate_info = {
              navigate_time: 0,
              get_award: false
            };
          } else {
            return JSON.parse(navigate_info);
          }
        };

        _proto.setData = function setData(value) {
          localStorage.setItem('TiktokNavigateInfo', JSON.stringify(value));
        };

        return navigate_view_ui;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "go_navigate_btn", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "get_award_btn", [_dec2], {
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

System.register("chunks:///_virtual/NetInterface.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0ff5e9qRKtGcYUJzrms6Zc0", "NetInterface", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CWebSocket.ts'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy, log, js, CWebSocket;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      js = module.js;
    }, function (module) {
      CWebSocket = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34179btj/tNMbrRriXPOc37", "NetManager", undefined);

      var SocketState;

      (function (SocketState) {
        SocketState[SocketState["Closed"] = 0] = "Closed";
        SocketState[SocketState["Connecting"] = 1] = "Connecting";
        SocketState[SocketState["Connected"] = 2] = "Connected";
      })(SocketState || (SocketState = {}));
      /** 
       * 网络中心服务
       * 
       * 连接网络, 重连
       * 
       */


      var NetManager = exports('default', /*#__PURE__*/function () {
        function NetManager() {
          this.state = SocketState.Closed;
          this.socket = void 0;
          this.connectOption = void 0;
          this.reconnectTimes = 0;
          this.eventHandlers = js.createMap();
        }

        NetManager.getInstance = function getInstance() {
          if (this.instance == null) {
            this.instance = new NetManager();
          }

          return this.instance;
        }
        /** 属性 */
        ;

        var _proto = NetManager.prototype;
        /** 连接网络 */

        _proto.connect = function connect(connectOption, reconnectTimes) {
          if (!this.socket) {
            this.socket = new CWebSocket();
            this.addEventToSocket();
          }

          this.connectOption = connectOption;
          this.reconnectTimes = reconnectTimes;

          if (this.socket && this.state === SocketState.Closed) {
            this.socket.connect(this.connectOption);
          }

          this.state = SocketState.Connecting; // 连接中
        }
        /** 发送数据 */
        ;

        _proto.send = function send(msg) {
          if (this.state !== SocketState.Connected) {
            log('网络未连接！无法发送数据');
            return false;
          }

          return this.socket.send(msg);
        }
        /** 带回调的请求 */
        ;

        _proto.request = function request(msg, callback, target) {
          this.onEventHandler(msg.cmd, callback, target);
          this.send(msg);
        }
        /** 添加监听事件 */
        ;

        _proto.addEventToSocket = function addEventToSocket() {
          var self = this;
          /** 连接成功 */

          this.socket.onConnect = function (e) {
            log('连接网络成功!');
            self.state = SocketState.Connected; // GEventManager.emit('NetWork_Connect', null);
          };
          /** 收到消息 */


          this.socket.onMessage = function (msg) {
            var arr = self.eventHandlers[msg.cmd];

            if (!arr) {
              log("\u6536\u5230\u4E00\u4E2A\u672A\u77E5\u547D\u4EE4:" + msg.cmd);
              return;
            }

            for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
              var e = _step.value;
              if (e.target) e.callback.call(e.target, msg.data);else e.callback(msg.data);
            }
          };
          /** 连接被关闭 */


          this.socket.onClose = function (e) {
            if (self.reconnectTimes < 0) {
              self.connect(self.connectOption, self.reconnectTimes);
              return;
            }

            if (self.reconnectTimes === 0) {
              log("\u8FDE\u63A5\u5173\u95ED\uFF01");
              return;
            }

            self.reconnectTimes--;
            self.connect(self.connectOption, self.reconnectTimes);
          };
          /** 网络错误 */


          this.socket.onError = function (e) {
            log("\u7F51\u7EDC\u9519\u8BEF\uFF01");
          };
        }
        /**
         * ----------------------- 事件句柄 -----------------------------
         */
        ;

        _proto.onEventHandler = function onEventHandler(cmd, callback, target, once) {
          if (once === void 0) {
            once = false;
          }

          if (!this.eventHandlers[cmd]) {
            this.eventHandlers[cmd] = [];
          }

          this.eventHandlers[cmd].push(new EventHandler(callback, target, once));
        }
        /** 监听一次，收到该事件则取消监听 */
        ;

        _proto.onceEventHandler = function onceEventHandler(cmd, callback, target) {
          this.onEventHandler(cmd, callback, target, true);
        };

        _proto.offEventHandler = function offEventHandler(cmd, callback, target) {
          var arr = this.eventHandlers[cmd];

          if (!arr) {
            log("\u6CA1\u6709\u8FD9\u4E2A\u547D\u4EE4" + cmd + "\uFF0C\u8BF7\u6CE8\u610F");
            return;
          }

          for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] && arr[i].callback === callback && arr[i].target === target) {
              arr.splice(i, 1);
            }
          }

          if (arr.length === 0) {
            this.clearEventHandler[cmd];
          }
        };

        _proto.clearEventHandler = function clearEventHandler(cmd) {
          if (!this.eventHandlers[cmd]) {
            return;
          }

          this.eventHandlers[cmd] = null;
          delete this.eventHandlers[cmd];
        };

        return NetManager;
      }());
      /** 事件 */

      NetManager.instance = null;

      var EventHandler = function EventHandler(callback, target, once) {
        this.callback = void 0;
        this.target = void 0;
        this.once = void 0;
        this.callback = callback;
        this.target = target;
        this.once = once;
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetTest.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09c2cfAScJC9p/5ZQVi3fvp", "NetTest", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OppoADApi.ts", ['cc', './AdsIdConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, AdsIdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AdsIdConfig = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "b33a5qAFA1AILrpHP7bGxL4", "OppoADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var OppoADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function OppoADApi() {
          this.customIntersAd = null;
          this.customIntersAd12 = null;
          this.CuctomIntervalTime = true;
          this.customAdTop = 500;
          this.customAdWidth = 700;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.PassiveVideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.TIMingData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.AdCustomBannerData = null;
          this.AdCustomTypeData = [];
          this.ADNewNativeAdData = null;
          this.ADNewNativeTypeData = null;
          this.ADNewConfig = void 0;
          this.qg = window['qg'];
          this.AdGroup = 0;
          this.systemBannerAd = null;
          this.loadSucc_SystemBanner = false;
          this.isShow_SystemBanner = false;
          this.NUM_BannerUpdateTime = 30;
          this.interval_updateBanner = null;
          this.interstitialAd = null;
          this.rewardedVideoAd = null;
          this.loadSucc_Video = false;
          this.callback_Video = null;
          this.rewardedPassiveVideoAd = null;
          this.loadSucc_PassiveVideo = false;
          this.callback_PassiveVideo = null;
          this.nativeRes = null;
          this.loadNativeRes = false;
          this.nativeAd = null;
          this.nativeBannerInfo = null;
          this.loadSucc_NativeBanner = false;
          this.isShow_NativeBanner = false;
          this.node_nativeBanner = null;
          this.nativeImageAd = null;
          this.nativeImageInfo = null;
          this.loadSucc_NativeImage = false;
          this.isShow_NativeImage = false;
          this.nativeIconAd = null;
          this.nativeIconInfo = null;
          this.loadSucc_NativeIcon = false;
          this.isShow_NativeIcon = false;
          this.navigateBoxPortalAd = null;
          this.loadSucc_NavigateBoxPortal = false;
          this.navigateBoxBannerAd = null;
          this.loadSucc_NavigateBoxBanner = false;
          this.temp_hasShowBanner = false;
          this.isShow_NavigateSettle = false;
          this.systemInfo = null;
          this.clipIndexList = [];
          this.videoPath = void 0;
          this.VideoVendor_Pos = [];
          this.videoType = 1;
          this.PassiveVideoVendor_Pos = [];
          this.CustomType12 = [];
          this.CustomTypeVendor_Pos = [];
        }

        var _proto = OppoADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          console.log('oppo platform load config success...');

          if (this.qg !== null && this.qg !== undefined) {
            this.systemInfo = this.qg.getSystemInfoSync();
            console.log('MINIGAME ===> 设备信息.systemInfo===>', this.systemInfo);
            this.createAd();
          } else {
            this.qg = null;
          }

          _callback && _callback();
          console.log('MINIGAME ===> oppo ===================> onInit  ok');
        };

        _proto.createAd = function createAd() {
          if (this.SystemBannerData && this.SystemBannerData.enabled && this.SystemBannerData.vendor_position != '') this.createSystemBanner();
          if (this.VideoData && this.VideoData.enabled && this.VideoData.vendor_position != '') this.createVideo(); // if (this.PassiveVideoData && this.PassiveVideoData.enabled && this.PassiveVideoData.vendor_position != '') {
          //   // setTimeout(() => {
          //   //   this.createPassiveVideo();
          //   // }, 5 * 1000);
          // }

          if (this.JGGBoxData && this.JGGBoxData.enabled && this.JGGBoxData.vendor_position != '') this.createNavigateBoxPortal();
          if (this.BlockData && this.BlockData.enabled && this.BlockData.vendor_position != '') this.createNavigateBoxBanner(); // this.loadNativeBannerRes();

          if (this.NativeBannerData && this.NativeBannerData.enabled && this.NativeBannerData.vendor_position != '') this.createNativeBanner();
          if (this.NativeIntersData && this.NativeIntersData.enabled && this.NativeIntersData.vendor_position != '') this.createNativeImage();
          if (this.NativeIconData && this.NativeIconData.enabled && this.NativeIconData.vendor_position != '') this.createNativeIcon(); //创建原生模板广告

          if (this.AdCustomIntersData && this.AdCustomIntersData.enabled && this.AdCustomIntersData.vendor_position != '') this.createNativeCuston();
        };

        _proto.setGroup = function setGroup(group) {
          this.AdGroup = group;
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {};

        _proto.recordClipRecorder = function recordClipRecorder(data) {};

        _proto.pauseGameVideo = function pauseGameVideo() {};

        _proto.resumeGameVideo = function resumeGameVideo() {};

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createSystemBanner = function createSystemBanner() {
          var _this = this; // console.log("MINIGAME ===> ", "OPPO 系统banner加载", this.SystemBannerData.vendor_position);


          this.systemBannerAd = this.qg.createBannerAd({
            adUnitId: this.SystemBannerData.vendor_position,
            style: {// top: 300,
              // left: 0,
              // width: 900,
              // height: 50
            }
          });
          this.loadSucc_SystemBanner = true; // 监听系统banner错误

          this.systemBannerAd.onError(function (err) {// console.log("MINIGAME ===> ", "OPPO 系统banner加载/展示失败：", JSON.stringify(err));
          }); // 监听系统banner隐藏

          this.systemBannerAd.onHide(function () {
            console.log('MINIGAME ===> ', 'OPPO 系统banner关闭', _this.NUM_BannerUpdateTime + 'S之后再次刷新'); // this.updateBanner();
          });
        };

        _proto.showBanner = function showBanner() {
          if (this.loadSucc_NativeBanner) {
            this.showNativeBanner();
          } else if (this.loadSucc_SystemBanner) {
            // 111
            this.showSystemBanner();
          }
        };

        _proto.hideBanner = function hideBanner() {
          this.hideSystemBanner();
          this.hideNativeBanner(); // this.updateBanner();
        }
        /**
         * 展示系统banner
         */
        ;

        _proto.showSystemBanner = function showSystemBanner() {
          this.isShow_SystemBanner = true;
          this.systemBannerAd.show();
        }
        /**
         * 隐藏系统banner
         */
        ;

        _proto.hideSystemBanner = function hideSystemBanner() {
          if (this.isShow_SystemBanner && this.systemBannerAd) {
            this.isShow_SystemBanner = false;
            this.systemBannerAd.offHide();
            this.systemBannerAd.hide();
          }
        }
        /**
         * 刷新banner
         */
        ;

        _proto.updateBanner = function updateBanner() {
          var _this2 = this;

          if (this.interval_updateBanner) clearInterval(this.interval_updateBanner); // 刷新广告条

          this.interval_updateBanner = setInterval(function () {
            if (_this2.loadSucc_NativeBanner) {
              _this2.updateNativeBanner();
            } else if (_this2.loadSucc_SystemBanner) {
              _this2.updateSystemBanner();
            }
          }, this.NUM_BannerUpdateTime * 1000);
        }
        /**
         * 刷新系统banner
         */
        ;

        _proto.updateSystemBanner = function updateSystemBanner() {
          this.hideSystemBanner();
          this.hideNativeBanner();
          this.showSystemBanner();
        }
        /** */
        ;

        _proto.updateNativeBanner = function updateNativeBanner() {
          this.hideNativeBanner();
          this.hideSystemBanner();
          this.showNativeBanner();
        }
        /**
         * 创建原生插屏模板广告
         */
        ;

        _proto.createNativeCuston = function createNativeCuston() {
          var _this3 = this; // console.log('MINIGAME ===> ', 'OPPO 创建原生模板插屏模板广告:' + this.AdCustomIntersData.vendor_position);


          if (this.customIntersAd) {
            this.customIntersAd.offLoad(null);
            this.customIntersAd.offShow(null);
            this.customIntersAd.offError(null);
            this.customIntersAd.destroy();
            this.customIntersAd = null;
          }

          this.customIntersAd = this.qg.createCustomAd({
            adUnitId: this.AdCustomIntersData.vendor_position,
            // adUnitId: '764650',
            //竖屏设置
            style: {
              // // left: this.customAdLeft,
              // top: this.customAdTop
              top: 0,
              left: 800,
              width: this.qg.getSystemInfoSync().screenWidth
            } // //横屏设置
            // style: {
            //     left: 720,
            //     top: 100
            // }

          });
          this.customIntersAd.onLoad(function () {// console.log("MINIGAME ===> ", "OPPO 原生模板插屏广告加载完成")
          });
          this.customIntersAd.onError(function (err) {
            // console.log("MINIGAME ===> ", "OPPO 原生模板插屏广告加载错误! " + err)
            setTimeout(function () {
              _this3.createNativeCuston();
            }, 20 * 1000);
          });
          this.customIntersAd.onClick(function (obj) {// setTimeout(() => {
            //   this.createNativeCuston();
            // }, 2 * 1000);
          }); //监听插屏广告显示 修改bug

          this.customIntersAd.onShow(function () {// console.log("MINIGAME ===> ", "OPPO 原生模板插屏广告成功展示回调");
            // // 系统插屏关闭后2s后再次load  重复load有问题  注册的事件也没注销 在重复跑
            // setTimeout(() => {
            //   this.createNativeCuston();
            // }, 2 * 1000);
          });
        }
        /**
         * 展示原生模板插屏      原生模板广告 1 2
         */
        ;

        _proto.showCustomInters = function showCustomInters() {
          if (this.customIntersAd) {
            var time = this.AdCustomIntersData.day_limits; // setTimeout(() => {
            // console.log("MINIGAME ===> ", "OPPO 原生模板广告调用");

            this.customIntersAd.show().then(function () {// console.log("MINIGAME ===> ", "OPPO 原生模板广告展示成功==================");
            })["catch"](function (err) {// console.log("MINIGAME ===> ", "OPPO 原生模板广告展示错误:" + JSON.stringify(err));
            }); // }, time * 1000);
          }
        }
        /**
         * 调用原生模板广告
         */
        ;

        _proto.showCustomAd = function showCustomAd() {// this.showCustomInters();
        };

        _proto.hideCustomAd = function hideCustomAd() {
          this.customIntersAd && this.customIntersAd.hide();
        }
        /**激励视频 */
        ;

        _proto.createVideo = function createVideo() {
          var _this4 = this;

          if (this.qg !== null && this.qg !== undefined) {
            var posid = "";

            if (this.videoType == 1) {
              // 循环广告位
              if (!this.VideoVendor_Pos || this.VideoVendor_Pos.length == 0) {
                this.VideoVendor_Pos = [];
                this.VideoVendor_Pos = AdsIdConfig.getVendor_posAry(this.VideoData.vendor_position); //'123,aaa,456'); //
              }

              console.log(this.VideoVendor_Pos);
              var vendor_pos = this.VideoVendor_Pos.shift();
              console.log(vendor_pos);
              posid = vendor_pos;
            } else if (this.videoType == 2) {
              // 循环广告位
              if (!this.PassiveVideoVendor_Pos || this.PassiveVideoVendor_Pos.length == 0) {
                this.PassiveVideoVendor_Pos = [];
                this.PassiveVideoVendor_Pos = AdsIdConfig.getVendor_posAry(this.PassiveVideoData.vendor_position); //'123,aaa,456'); //
              }

              console.log(this.PassiveVideoVendor_Pos);

              var _vendor_pos = this.PassiveVideoVendor_Pos.shift();

              console.log(_vendor_pos);
              posid = _vendor_pos;
            }
            /**创建rewardedVideoAd 对象*/
            // console.log("MINIGAME ===> Oppo平台 创建激励视频广告");


            this.rewardedVideoAd = this.qg.createRewardedVideoAd({
              adUnitId: posid //this.VideoData.vendor_position

            });
            this.rewardedVideoAd && this.rewardedVideoAd.load();
            this.rewardedVideoAd.onLoad(function () {
              // console.log("MINIGAME ===> 激励视频广告 加载成功");
              _this4.loadSucc_Video = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              // console.log('MINIGAME ===>  激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
              // 会出现场景暂停了 没有继续情况
              if (_this4.callback_Video) {
                _this4.callback_Video(false, '视频加载失败 code:' + err.code);
              }

              _this4.loadSucc_Video = false;

              if (_this4.rewardedVideoAd) {
                setTimeout(function () {
                  _this4.rewardedVideoAd && _this4.rewardedVideoAd.load();
                }, 5 * 1000);
              }
            }); //监听视频广告播放完成

            this.rewardedVideoAd.onClose(function (res) {
              if (res.isEnded) {
                // console.log("MINIGAME ===> ", "OPPO 激励视频广告完成，发放奖励");
                if (_this4.callback_Video) {
                  _this4.callback_Video(true);
                }
              } else {
                // console.log("MINIGAME ===> ", "OPPO 激励视频广告关闭，不发放奖励");
                if (_this4.callback_Video) {
                  _this4.callback_Video(false);
                }
              }

              _this4.rewardedVideoAd.destroy();

              setTimeout(function () {
                // this.rewardedVideoAd.load();
                _this4.createVideo();
              }, 300);
            }); // this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_successCallback) {
          // /**确保video正常创建并已经拉取到数据 */
          if (this.rewardedVideoAd && this.loadSucc_Video) {
            // if(this.rewardedVideoAd){
            this.videoType = 1;
            this.callback_Video = _successCallback;
            this.rewardedVideoAd.show();
            this.loadSucc_Video = false;
          } else {
            _successCallback(false);
          } // } else {
          //   /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
          //   // TipsManager.Instance().create("广告还未准备好,请稍后再试");
          //   _successCallback(false);
          // }

        }
        /**被动 激励视频 */
        ;

        _proto.createPassiveVideo = function createPassiveVideo() {// if (this.qg !== null && this.qg !== undefined) {
          //   // 循环广告位
          //   if (!this.PassiveVideoVendor_Pos || this.PassiveVideoVendor_Pos.length == 0) {
          //     this.PassiveVideoVendor_Pos = [];
          //     this.PassiveVideoVendor_Pos = AdsIdConfig.getVendor_posAry(this.PassiveVideoData.vendor_position); //'123,aaa,456'); //
          //   }
          //   console.log(this.PassiveVideoVendor_Pos);
          //   let vendor_pos: string | undefined = this.PassiveVideoVendor_Pos.shift();
          //   console.log(vendor_pos);
          //   /**rewardedPassiveVideoAd 对象*/
          //   // console.log("MINIGAME ===> Oppo平台 创建激励视频广告");
          //   this.rewardedPassiveVideoAd = this.qg.createRewardedVideoAd({
          //     adUnitId: vendor_pos //this.PassiveVideoData.vendor_position
          //   });
          //   this.rewardedPassiveVideoAd.onLoad(() => {
          //     // console.log("MINIGAME ===> 激励视频广告 加载成功");
          //     this.loadSucc_PassiveVideo = true;
          //   });
          //   this.rewardedPassiveVideoAd.onError((err) => {
          //     // console.log('MINIGAME ===>  激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
          //     // 会出现场景暂停了 没有继续情况
          //     if (this.callback_PassiveVideo) {
          //       this.callback_PassiveVideo(false, '视频加载失败 code:' + err.code);
          //     }
          //     this.loadSucc_PassiveVideo = false;
          //     if (this.rewardedPassiveVideoAd) {
          //       setTimeout(() => {
          //         this.rewardedPassiveVideoAd && this.rewardedPassiveVideoAd.load();
          //       }, 5 * 1000);
          //     }
          //   });
          //   //监听视频广告播放完成
          //   this.rewardedPassiveVideoAd.onClose((res) => {
          //     if (res.isEnded) {
          //       // console.log("MINIGAME ===> ", "OPPO 激励视频广告完成，发放奖励");
          //       if (this.callback_PassiveVideo) {
          //         this.callback_PassiveVideo(true);
          //       }
          //     } else {
          //       // console.log("MINIGAME ===> ", "OPPO 激励视频广告关闭，不发放奖励");
          //       if (this.callback_PassiveVideo) {
          //         this.callback_PassiveVideo(false);
          //       }
          //     }
          //     setTimeout(() => {
          //       this.rewardedPassiveVideoAd.load();
          //     }, 300);
          //   });
          //   this.rewardedPassiveVideoAd.load();
          // }
        }
        /**展示 被动激励视频 */
        ;

        _proto.showPassiveVideo = function showPassiveVideo(_successCallback) {
          // /**确保video正常创建并已经拉取到数据 */
          // if (this.rewardedPassiveVideoAd && this.loadSucc_PassiveVideo) {
          if (this.rewardedVideoAd && this.loadSucc_Video) {
            this.videoType = 2;
            this.callback_Video = _successCallback;
            this.rewardedVideoAd.show();
            this.loadSucc_Video = false;
          } else {
            _successCallback(false);
          } //   this.loadSucc_PassiveVideo = false;
          // } else {
          //   /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
          //   // TipsManager.Instance().create("广告还未准备好,请稍后再试");
          //   _successCallback(false);
          // }

        };

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createInsertAd = function createInsertAd() {} // 插屏
        ;

        _proto.showInsertAd = function showInsertAd() {}
        /**
         * 创建互推盒子九宫格广告
         */
        ;

        _proto.createNavigateBoxPortal = function createNavigateBoxPortal() {
          var _this5 = this; // console.log("MINIGAME ===> ", "--createNavigateBoxPortal--");


          if (this.qg.getSystemInfoSync().platformVersionCode < 1076) {
            // console.log("MINIGAME ===> ", "OPPO 版本较低,不支持互推盒子广告");
            return;
          }

          this.navigateBoxPortalAd = this.qg.createGamePortalAd({
            adUnitId: this.JGGBoxData.vendor_position
          }); // 监听互推盒子九宫格广告加载成功

          this.navigateBoxPortalAd.onLoad(function () {
            // console.log("MINIGAME ===> ", "OPPO 互推盒子九宫格广告加载完成");
            _this5.loadSucc_NavigateBoxPortal = true;
          }); // 监听互推盒子九宫格广告加载失败

          this.navigateBoxPortalAd.onError(function (err) {
            // console.log("MINIGAME ===> ", "OPPO 互推盒子九宫格广告加载/展示失败：", JSON.stringify(err));
            _this5.loadSucc_NavigateBoxPortal = false;
            setTimeout(function () {
              _this5.navigateBoxPortalAd.load();
            }, 20 * 1000);
          }); // 监听互推盒子九宫格广告关闭

          this.navigateBoxPortalAd.onClose(function () {
            // console.log("MINIGAME ===> ", "OPPO 互推盒子九宫格广告关闭");
            // 关闭后再次加载互推盒子九宫格
            _this5.navigateBoxPortalAd.load(); // // 如果banner在展示时被互推盒子九宫格关闭则再次showBanner
            // this.showBanner();

          });
          this.navigateBoxPortalAd.load();
        };

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {
          if (this.loadSucc_NavigateBoxPortal) {
            this.hideBanner(); //修改bug

            if (this.navigateBoxPortalAd) {
              this.navigateBoxPortalAd.show();
            }
          }
        }
        /**
         * 创建互推盒子横幅广告
         */
        ;

        _proto.createNavigateBoxBanner = function createNavigateBoxBanner() {
          console.log('MINIGAME ===> ', '--createNavigateBoxBanner--');

          if (this.qg.getSystemInfoSync().platformVersionCode < 1076) {
            console.log('MINIGAME ===> ', 'OPPO 版本较低,不支持互推盒子广告');
            return;
          }

          this.navigateBoxBannerAd = this.qg.createGameBannerAd({
            adUnitId: this.BlockData.vendor_position
          });
          this.loadSucc_NavigateBoxBanner = true; // 监听互推盒子横幅广告加载失败

          this.navigateBoxBannerAd.onError(function (err) {
            // this.loadSucc_NavigateBoxBanner = false;
            console.log('MINIGAME ===> ', 'OPPO 互推盒子横幅广告出错:', JSON.stringify(err));
          });
        };

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {
          if (this.isShow_NavigateSettle) {
            console.log('MINIGAME ===> ', '已经调用过showNavigateBoxBanner,请勿重复调用');
            return;
          }

          this.isShow_NavigateSettle = true;

          if (this.loadSucc_NavigateBoxBanner) {
            this.hideBanner();
            console.log('MINIGAME ===> ', 'showNavigateBoxBanner=====================');
            this.navigateBoxBannerAd.show();
          }
        };

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {
          if (this.isShow_NavigateSettle) {
            console.log('MINIGAME ===> ', 'hideNavigateBoxBanner=====================');
            this.isShow_NavigateSettle = false;

            if (this.navigateBoxBannerAd) {
              this.navigateBoxBannerAd.hide();
            }
          }
        }
        /**
         * 加载原生banner广告资源
         */
        ;

        _proto.loadNativeBannerRes = function loadNativeBannerRes() {// console.log('MINIGAME ===> ', '--loadNativeBannerRes--');
          // this.nativeRes = {
          //   NativeBannerBg: null,
          //   NativeBannerButton: null,
          //   NativeClose: null,
          //   NativeAdTip: null
          // };
          // let nativeBannerResArr = ['images/ad/NativeBannerBg', 'images/ad/NativeBannerButton', 'images/ad/NativeClose', 'images/ad/NativeAdTip'];
          // assetManager.loadBundle('UI', (err, ab) => {
          //   console.log('加载原生广告ab包成功!');
          //   ab.load(nativeBannerResArr, (texture) => {
          //     this.nativeRes.NativeBannerBg = texture[0];
          //     this.nativeRes.NativeBannerButton = texture[1];
          //     this.nativeRes.NativeClose = texture[2];
          //     this.nativeRes.NativeAdTip = texture[3];
          //     this.loadNativeRes = true;
          //     console.log('加载原生广告资源成功!');
          //   });
          // });
        };

        _proto.createNativeBanner = function createNativeBanner() {// console.log('MINIGAME ===> 原生banner', '--createNativeBanner--');
          // this.nativeAd = this.qg.createNativeAd({
          //   posId: this.NativeBannerData.vendor_position
          // });
          // this.nativeBannerInfo = {
          //   adId: null,
          //   title: null,
          //   desc: null,
          //   Native_icon_url: null,
          //   Native_icon: null,
          //   Native_BigImage_url: null,
          //   Native_BigImage: null
          // };
          // this.nativeAd.onLoad((res) => {
          //   let index = 0;
          //   if (typeof res.adList != undefined && res.adList.length != 0) {
          //     index = res.adList.length - 1;
          //   } else {
          //     console.log('MINIGAME ===> ', 'OPPO原生banner广告列表为空 return');
          //     return;
          //   }
          //   console.log('MINIGAME ===> ', 'OPPO 原生banner广告加载成功：', JSON.stringify(res.adList[index]));
          //   if (res.adList[index].icon != '' && res.adList[index].imgUrlList.length > 0) {
          //     // console.log("MINIGAME ===> ", "OPPO 原生banner广告同时存在原生ICON和大图");
          //   } else {
          //     // console.log("MINIGAME ===> ", "OPPO 原生banner广告只存在原生ICON或大图");
          //   }
          //   this.nativeBannerInfo.adId = String(res.adList[index].adId);
          //   this.nativeBannerInfo.title = String(res.adList[index].title);
          //   this.nativeBannerInfo.desc = String(res.adList[index].desc);
          //   if (res.adList && res.adList[index].icon != '') {
          //     this.nativeBannerInfo.Native_icon_url = res.adList[index].icon;
          //     assetManager.loadRemote(String(res.adList[index].icon), (err, texture) => {
          //       this.nativeBannerInfo.Native_icon = texture;
          //     });
          //   }
          //   if (res.adList && res.adList[index].imgUrlList.length > 0) {
          //     this.nativeBannerInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
          //     assetManager.loadRemote(String(res.adList[index].imgUrlList[0]), (err, texture) => {
          //       this.nativeBannerInfo.Native_BigImage = texture;
          //     });
          //   }
          //   this.loadSucc_NativeBanner = true;
          // });
          // //监听原生广告加载错误
          // this.nativeAd.onError((err) => {
          //   console.log('MINIGAME ===> ', 'OPPO 原生banner广告加载失败：', JSON.stringify(err));
          //   setTimeout(() => {
          //     this.nativeAd.load();
          //   }, 20 * 1000);
          // });
          // this.nativeAd.load();
        }
        /**
         * 展示原生banner
         */
        ;

        _proto.showNativeBanner = function showNativeBanner() {// if (this.isShow_NavigateSettle) {
          //   console.log('MINIGAME ===> ', 'OPPO 正在展示互推盒子 return');
          //   return;
          // }
          // this.isShow_NativeBanner = true;
          // let scene = director.getScene();
          // //原生广告id
          // let tempid = this.nativeBannerInfo.adId;
          // this.reportNativeBannerShow(tempid);
          // console.log('MINIGAME ===> 原生banner', 'showNativeBanner========================');
          // this.node_nativeBanner = new Node('node_nativeBanner');
          // this.node_nativeBanner.addComponent(UITransform);
          // scene.getChildByName('Canvas').addChild(this.node_nativeBanner);
          // this.node_nativeBanner.addComponent(Sprite);
          // this.node_nativeBanner.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerBg);
          // this.node_nativeBanner.addComponent(Widget);
          // this.node_nativeBanner.getComponent(Widget).isAlignHorizontalCenter = true;
          // this.node_nativeBanner.getComponent(Widget).isAlignBottom = true;
          // this.node_nativeBanner.getComponent(Widget).bottom = 0;
          // let canvasSize = view.getVisibleSize();
          // if (canvasSize.width < canvasSize.height) {
          //   this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width;
          //   this.node_nativeBanner.getComponent(UITransform).height = canvasSize.width * 0.18;
          // } else {
          //   this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width / 2;
          //   this.node_nativeBanner.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).width * 0.18;
          // }
          // if (this.AdGroup != 0) this.node_nativeBanner.layer = this.AdGroup;
          // this.node_nativeBanner.setSiblingIndex(999);
          // this.node_nativeBanner.on(Node.EventType.TOUCH_START, (event) => {
          //   this.reportNativeBannerClick(tempid);
          // });
          // // 广告
          // let adTip = new Node('adTip');
          // adTip.addComponent(UITransform);
          // this.node_nativeBanner.addChild(adTip);
          // adTip.addComponent(Sprite);
          // adTip.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeAdTip);
          // adTip.getComponent(UITransform).height = 0.2 * this.node_nativeBanner.getComponent(UITransform).height;
          // adTip.getComponent(UITransform).width = adTip.getComponent(UITransform).height / 0.45;
          // if (this.AdGroup != 0) adTip.layer = this.AdGroup;
          // adTip.setPosition(
          //   this.node_nativeBanner.getComponent(UITransform).width / 2 - adTip.getComponent(UITransform).width / 2,
          //   -this.node_nativeBanner.getComponent(UITransform).height / 2 + adTip.getComponent(UITransform).height / 2
          // );
          // // 点击安装
          // let bannerButton = new Node('bannerButton');
          // bannerButton.addComponent(UITransform);
          // this.node_nativeBanner.addChild(bannerButton);
          // bannerButton.addComponent(Sprite);
          // if (this.AdGroup != 0) bannerButton.layer = this.AdGroup;
          // bannerButton.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerButton);
          // bannerButton.getComponent(UITransform).width = this.node_nativeBanner.getComponent(UITransform).width * 0.255;
          // bannerButton.getComponent(UITransform).height = bannerButton.getComponent(UITransform).width * 0.351;
          // bannerButton.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width * 0.185, 0);
          // if (this.nativeBannerInfo.Native_icon) {
          //   // icon
          //   let icon = new Node('icon');
          //   icon.addComponent(UITransform);
          //   this.node_nativeBanner.addChild(icon);
          //   if (this.AdGroup != 0) icon.layer = this.AdGroup;
          //   icon.addComponent(Sprite);
          //   icon.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_icon);
          //   icon.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height * 0.8;
          //   icon.getComponent(UITransform).width = icon.getComponent(UITransform).height;
          //   icon.setPosition(icon.getComponent(UITransform).width * 0.8 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          // } else if (this.nativeBannerInfo.Native_BigImage) {
          //   // 大图
          //   let image = new Node('image');
          //   image.addComponent(UITransform);
          //   this.node_nativeBanner.addChild(image);
          //   if (this.AdGroup != 0) image.layer = this.AdGroup;
          //   image.addComponent(Sprite);
          //   image.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_BigImage);
          //   image.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
          //   image.getComponent(UITransform).width = image.getComponent(UITransform).height * 2;
          //   image.setPosition(image.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          // }
          // // 标题或描述
          // let titleLabel = new Node('titleLabel');
          // titleLabel.addComponent(UITransform);
          // this.node_nativeBanner.addChild(titleLabel);
          // if (this.AdGroup != 0) titleLabel.layer = this.AdGroup;
          // titleLabel.addComponent(Label);
          // // titleLabel.getComponent(UITransform).priority = 999;
          // if (canvasSize.width < canvasSize.height) {
          //   titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().width / 1080);
          // } else {
          //   titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().height / 1080);
          // }
          // if (this.nativeBannerInfo.desc == '') {
          //   titleLabel.getComponent(Label).string = this.nativeBannerInfo.title;
          // } else {
          //   titleLabel.getComponent(Label).string = this.nativeBannerInfo.desc;
          // }
          // titleLabel.getComponent(Label).overflow = Label.Overflow.CLAMP;
          // titleLabel.getComponent(Label).horizontalAlign = Label.HorizontalAlign.LEFT;
          // titleLabel.getComponent(Label).verticalAlign = Label.VerticalAlign.CENTER;
          // titleLabel.getComponent(Label).lineHeight = titleLabel.getComponent(Label).fontSize;
          // titleLabel.getComponent(UITransform).width =
          //   this.node_nativeBanner.getComponent(UITransform).width -
          //   this.node_nativeBanner.getComponent(UITransform).height * 2 -
          //   bannerButton.getComponent(UITransform).width -
          //   (0.2 * this.node_nativeBanner.getComponent(UITransform).height) / 0.45;
          // titleLabel.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
          // titleLabel.setPosition(
          //   0,
          //   -this.node_nativeBanner.getComponent(UITransform).width / 2 + this.node_nativeBanner.getComponent(UITransform).height * 2.1 + titleLabel.getComponent(UITransform).width / 2
          // );
          // let NativeClose = new Node('closeICON');
          // NativeClose.addComponent(UITransform);
          // this.node_nativeBanner.addChild(NativeClose);
          // // NativeClose.getComponent(UITransform).priority = 999;
          // NativeClose.addComponent(Sprite);
          // if (this.AdGroup != 0) NativeClose.layer = this.AdGroup;
          // NativeClose.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeClose);
          // NativeClose.getComponent(UITransform).width = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          // NativeClose.getComponent(UITransform).height = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          // NativeClose.setPosition(
          //   this.node_nativeBanner.getComponent(UITransform).width / 2 - NativeClose.getComponent(UITransform).width / 2,
          //   this.node_nativeBanner.getComponent(UITransform).height / 2 - NativeClose.getComponent(UITransform).width / 2
          // );
          // // 监听原生banner关闭
          // NativeClose.on(Node.EventType.TOUCH_START, (event) => {
          //   console.log('MINIGAME ===> ', '原生banner关闭', this.NUM_BannerUpdateTime + 'S后再次刷新');
          //   this.hideNativeBanner();
          //   // this.updateBanner();
          //   // 清除触摸事件的冒泡
          //   // event.event.propagationStopped = true;
          // });
        }
        /**
         * 隐藏原生banner
         */
        ;

        _proto.hideNativeBanner = function hideNativeBanner() {
          if (this.isShow_NativeBanner) {
            console.log('MINIGAME ===> ', 'OPPO原生banner hideNativeBanner========================');
            this.isShow_NativeBanner = false;
            this.node_nativeBanner.active = false;
            this.node_nativeBanner.removeFromParent();
            this.node_nativeBanner = null;
            console.log('MINIGAME ===> ', 'OPPO原生banner hideNativeBanner========================end');
          }
        } // 信息流banner
        ;

        _proto.showCustomBanner = function showCustomBanner() {};

        _proto.hideCustomBanner = function hideCustomBanner() {};

        _proto.reportNativeBannerShow = function reportNativeBannerShow(adId) {
          console.log('MINIGAME ===> ', 'OPPO 该原生banner广告id上报展示', adId);
          this.nativeAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeBannerClick = function reportNativeBannerClick(adId) {
          console.log('MINIGAME ===> ', 'OPPO 原生banner广告上报点击', adId);
          this.nativeAd.reportAdClick({
            adId: adId
          });
        }
        /**原生大图 */
        ;

        _proto.createNativeImage = function createNativeImage() {
          var _this6 = this;

          console.log('MINIGAME ===> 原生大图', '--createNativeBanner--');
          this.nativeImageAd = this.qg.createNativeAd({
            posId: this.NativeIntersData.vendor_position
          });
          this.loadSucc_NativeImage = false;
          this.nativeImageInfo = {
            adId: null,
            title: null,
            desc: null,
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null,
            dcr: this.NativeIntersData.dcr
          };
          this.nativeImageAd.onLoad(function (res) {
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log('MINIGAME ===> ', 'OPPO 原生大图广告列表为空 return');
              return;
            }

            console.log('MINIGAME ===> ', 'OPPO 原生大图广告加载成功：', JSON.stringify(res.adList[index])); // if (res.adList[index].icon != "" && res.adList[index].imgUrlList.length > 0) {
            //     console.log("MINIGAME ===> ", "OPPO 原生大图广告同时存在原生ICON和大图");
            // } else {
            //     console.log("MINIGAME ===> ", "OPPO 原生大图广告只存在原生ICON或大图");
            // }

            _this6.nativeImageInfo.adId = String(res.adList[index].adId);
            _this6.nativeImageInfo.title = String(res.adList[index].title);
            _this6.nativeImageInfo.desc = String(res.adList[index].desc);

            if (res.adList && res.adList[index].icon != '') {
              _this6.nativeImageInfo.Native_icon_url = res.adList[index].icon;
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this6.nativeImageInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
            }

            _this6.loadSucc_NativeImage = true;
            console.log('MINIGAME ===> ', 'OPPO 原生大图广告加载成功：');
          }); //监听原生广告加载错误

          this.nativeImageAd.onError(function (err) {
            console.log('MINIGAME ===> ', 'OPPO 原生大图广告加载失败：', JSON.stringify(err));
            setTimeout(function () {
              _this6.nativeImageAd.load();
            }, 20 * 1000);
          });
          this.nativeImageAd.load();
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeAdInfo = function getNativeAdInfo(type) {
          if (!this.loadSucc_NativeImage) {
            console.log('MINIGAME ===> ', '自定义原生大图广告加载中....');
            return null;
          }

          console.log('MINIGAME ===> ', '获取自定义原生大图广告');
          return this.nativeImageInfo;
        };

        _proto.getHWNativeAdInfo = function getHWNativeAdInfo(_infoCallback) {};

        _proto.reportNativeImageShow = function reportNativeImageShow(adId) {
          console.log('MINIGAME ===> ', 'OPPO 该原生大图广告id上报展示', adId);
          this.nativeImageAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeImageClick = function reportNativeImageClick(adId) {
          console.log('MINIGAME ===> ', 'OPPO 原生大图广告上报点击', adId);
          this.nativeImageAd.reportAdClick({
            adId: adId
          });
        }
        /**刷新原生大图广告 */
        ;

        _proto.loadNativeImage = function loadNativeImage() {
          this.nativeImageAd && this.nativeImageAd.load();
        }
        /**原生icon */
        ;

        _proto.createNativeIcon = function createNativeIcon() {
          var _this7 = this;

          console.log('MINIGAME ===> 原生icon', '--createNativeBanner--');
          this.nativeIconAd = this.qg.createNativeAd({
            posId: this.NativeIconData.vendor_position
          });
          this.loadSucc_NativeIcon = false;
          this.nativeIconInfo = {
            adId: null,
            title: null,
            desc: null,
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null
          };
          this.nativeIconAd.onLoad(function (res) {
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log('MINIGAME ===> ', 'OPPO 原生icon广告列表为空 return');
              return;
            }

            console.log('MINIGAME ===> ', 'OPPO 原生icon广告加载成功：', JSON.stringify(res.adList[index]));

            if (res.adList[index].icon != '' && res.adList[index].imgUrlList.length > 0) {
              console.log('MINIGAME ===> ', 'OPPO 原生icon广告同时存在原生ICON和大图');
            } else {
              console.log('MINIGAME ===> ', 'OPPO 原生icon广告只存在原生ICON或大图');
            }

            _this7.nativeIconInfo.adId = String(res.adList[index].adId);
            _this7.nativeIconInfo.title = String(res.adList[index].title);
            _this7.nativeIconInfo.desc = String(res.adList[index].desc);

            if (res.adList && res.adList[index].icon != '') {
              _this7.nativeIconInfo.Native_icon_url = res.adList[index].icon;
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this7.nativeIconInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
            }

            _this7.loadSucc_NativeIcon = true;
            console.log('MINIGAME ===> ', 'OPPO 原生大图广告加载成功：');
          }); //监听原生广告加载错误

          this.nativeIconAd.onError(function (err) {
            console.log('MINIGAME ===> ', 'OPPO 原生icon广告加载失败：', JSON.stringify(err));
            setTimeout(function () {
              _this7.nativeIconAd.load();
            }, 20 * 1000);
          });
          this.nativeIconAd.load();
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeIconAdInfo = function getNativeIconAdInfo(type) {
          if (!this.loadSucc_NativeIcon) {
            console.log('MINIGAME ===> ', '自定义原生Icon广告加载中....');
            return null;
          }

          console.log('MINIGAME ===> ', '获取自定义原生Icon广告');
          return this.nativeIconInfo;
        };

        _proto.reportNativeIconShow = function reportNativeIconShow(adId) {
          console.log('MINIGAME ===> ', 'OPPO 该原生Icon广告id上报展示', adId);
          this.nativeIconAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeIconClick = function reportNativeIconClick(adId) {
          console.log('MINIGAME ===> ', 'OPPO 原生Icon广告上报点击', adId);
          this.nativeIconAd.reportAdClick({
            adId: adId
          });
        }
        /**刷新原生Icon广告 */
        ;

        _proto.loadNativeIcon = function loadNativeIcon() {
          this.nativeIconAd && this.nativeIconAd.load();
        };

        _proto.addDesktop = function addDesktop(_callback) {
          console.log('oppo addDesktop');

          if (this.qg != null && this.qg != undefined) {
            console.log('oppo addDesktop qg is correct!');
            this.qg.installShortcut({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  _callback && _callback(true);
                  console.log('创建成功');
                } else {
                  _callback && _callback(false); // TipsManager.Instance().create('已存在桌面图标');

                  console.log('已存在桌面图标');
                }
              },
              fail: function fail(err) {
                console.log('创建错误:' + err);
                console.log(err);

                if (err && err.data == 'short already exist' || err.code == -1) {
                  _callback(-1);
                }
              },
              complete: function complete() {}
            });
          }
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {
          if (this.qg != null && this.qg != undefined) {
            this.qg.hasShortcutInstalled({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  console.log('MINIGAME ===> ', 'OPPO 不存在桌面图标');
                  _callback && _callback(true);
                } else {
                  console.log('MINIGAME ===> ', 'OPPO 存在桌面图标');
                  _callback && _callback(false); // TipsManager.Instance().create('已存在桌面图标');
                }
              },
              fail: function fail(err) {},
              complete: function complete() {}
            });
          }
        };

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.phoneVibrate = function phoneVibrate(isLong) {
          if (this.qg !== null && this.qg !== undefined) {
            if (isLong) {
              this.qg.vibrateLong && this.qg.vibrateLong();
            } else {
              this.qg.vibrateShort && this.qg.vibrateShort();
            }
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {
          if (this.qg !== null && this.qg !== undefined) this.qg.reportMonitor(name, value);
        };

        _proto.showGridAd = function showGridAd() {};

        _proto.hideGridAd = function hideGridAd() {};

        _proto.navigateToScene = function navigateToScene(_succeedcallback, _failcallback) {};

        _proto.Share = function Share(_succeedcallback, _failcallback) {};

        _proto.showNewNativeAd = function showNewNativeAd() {};

        _proto.hideNewNativeAd = function hideNewNativeAd() {} // 原生模板广告 1 2
        // * playSuccessCall 回调兜底的

        /**模板1,2 */
        ;

        _proto.showCustomType12 = function showCustomType12(type, playSuccessCall) {
          var _this8 = this; // console.log('MINIGAME ===> ', 'OPPO 创建原生模板插屏模板广告:' + this.AdCustomIntersData.vendor_position);


          if (this.qg.createCustomAd) {
            if (this.CustomType12[type]) {
              this.CustomType12[type].offLoad(null);
              this.CustomType12[type].offShow(null);
              this.CustomType12[type].offError(null);
              this.CustomType12[type].destroy();
              this.CustomType12[type] = null;
            } // 循环广告位


            if (!this.CustomTypeVendor_Pos[type] || this.CustomTypeVendor_Pos[type].length == 0) {
              this.CustomTypeVendor_Pos[type] = [];
              this.CustomTypeVendor_Pos[type] = AdsIdConfig.getVendor_posAry(this.AdCustomTypeData[type].vendor_position); //'123,aaa,456'); //
            }

            var vendor_pos = this.CustomTypeVendor_Pos[type].shift();
            this.CustomType12[type] = this.qg.createCustomAd({
              adUnitId: vendor_pos,
              //this.AdCustomIntersData.vendor_position,
              //竖屏设置
              style: {
                top: 0,
                left: 800,
                width: this.qg.getSystemInfoSync().screenWidth
              }
            });
            this.CustomType12[type].onLoad(function () {// console.log("MINIGAME ===> ", "OPPO 原生模板插屏广告加载完成")
            });
            this.CustomType12[type].onError(function (err) {
              // console.log("MINIGAME ===> ", "OPPO 原生模板插屏广告加载错误! " + err)
              setTimeout(function () {
                _this8.createNativeCuston();
              }, 20 * 1000);
            });
            /*this.CustomType12[type].onClick((obj) => {
              // setTimeout(() => {
              //   this.createNativeCuston();
              // }, 2 * 1000);
            });*/
            //监听插屏广告显示 修改bug

            this.CustomType12[type].onShow(function () {// console.log("MINIGAME ===> ", "OPPO 原生模板插屏广告成功展示回调");
              // // 系统插屏关闭后2s后再次load  重复load有问题  注册的事件也没注销 在重复跑
              // setTimeout(() => {
              //   this.createNativeCuston();
              // }, 2 * 1000);
            });
            this.CustomType12[type].show().then(function () {// console.log("MINIGAME ===> ", "OPPO 原生模板广告展示成功==================");
            })["catch"](function (err) {// console.log("MINIGAME ===> ", "OPPO 原生模板广告展示错误:" + JSON.stringify(err));
            });
          }
        };

        _proto.hideCustomType12 = function hideCustomType12(type) {
          if (this.CustomType12[type]) {
            this.CustomType12[type].hide();
          }
        } // 原生自渲染 1 2
        ;

        _proto.showADNewNativeType12 = function showADNewNativeType12(type, playSuccessCall) {};

        _proto.hideCustomIconAd = function hideCustomIconAd() {};

        _proto.showCustomIconAd = function showCustomIconAd() {};

        _proto.ShowGameIconAd = function ShowGameIconAd() {};

        _proto.HideGameIconAd = function HideGameIconAd() {};

        _proto.ShowHomeIconAd = function ShowHomeIconAd() {};

        _proto.HideHomeIconAd = function HideHomeIconAd() {};

        _proto.ShowSideAd = function ShowSideAd() {};

        _proto.HideSideAd = function HideSideAd() {};

        _proto.ShowMoreGamesAd = function ShowMoreGamesAd() {};

        _proto.HideMoreGamesAd = function HideMoreGamesAd() {};

        _proto.ShowBannerNativeAd = function ShowBannerNativeAd() {};

        _proto.HideBannerNativeAd = function HideBannerNativeAd() {};

        return OppoADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlatformAdApi.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d3b4Z5S3RLtJ/pRBuQG8JD", "PlatformAdApi", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SingletonClass.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, NodePool, instantiate, SingletonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
    }, function (module) {
      SingletonClass = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "d7a0etVfkhLS6CReL2wP5GT", "PoolManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PoolManager = exports('PoolManager', (_dec = ccclass('PoolManager'), _dec(_class = /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(PoolManager, _SingletonClass);

        function PoolManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingletonClass.call.apply(_SingletonClass, [this].concat(args)) || this;
          _this.poolPrefab = {};
          _this.pools = {};
          return _this;
        }

        PoolManager.instance = function instance() {
          return _SingletonClass.instance.call(this);
        };

        var _proto = PoolManager.prototype;

        _proto.init = function init(name, node) {
          if (!this.poolPrefab[name]) {
            this.poolPrefab[name] = node;
            this.pools[name] = new NodePool(name);
          }
        };

        _proto.getPool = function getPool(name) {
          var pool = this.pools[name];

          if (!pool) {
            console.error('======>该对象池没有', name);
            return;
          }

          return pool;
        };

        _proto.getPoolNode = function getPoolNode(name) {
          var pool = this.getPool(name);
          var node = pool.get();

          if (!node) {
            node = instantiate(this.poolPrefab[name]);
          }

          node.active = true;
          return node;
        };

        _proto.putNode = function putNode(name, node) {
          var pool = this.getPool(name);
          node.active = false;
          pool.put(node);
        };

        _proto.clearAllPool = function clearAllPool() {
          for (var pool in this.pools) {
            this.pools[pool].clear();
            this.pools[pool] = null;
            this.poolPrefab[pool] = null;
          }
        };

        _proto.clearPool = function clearPool(name) {
          this.pools[name].clear();
          this.pools[name] = null;
          this.poolPrefab[name] = null;
        };

        return PoolManager;
      }(SingletonClass)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrivacyViewUi.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, director, Component, AdManager;

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
      instantiate = module.instantiate;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      AdManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "8fd23Lx78BJj7wfottyAsMl", "PrivacyViewUi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PrivacyViewUi = exports('PrivacyViewUi', (_dec = ccclass('PrivacyViewUi'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PrivacyViewUi, _Component);

        function PrivacyViewUi() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "privacyPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ovLabels", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PrivacyViewUi.prototype;

        _proto.onEnable = function onEnable() {
          if (this.ovLabels.length > 0) ;
        };

        _proto.showPrivacyView = function showPrivacyView() {
          var node = instantiate(this.privacyPrefab);
          node.parent = this.node;
          node.setPosition(0, 0, 0);
        };

        _proto.surePrivacy = function surePrivacy() {
          director.loadScene("MainScene");
          localStorage.setItem('akPrivacy', '1');
        };

        _proto.noPrivacy = function noPrivacy() {
          AdManager.getInstance().exitApplication();
          console.log('退出游戏');
        };

        _proto.closePrivacy = function closePrivacy() {
          this.node.active = false;
        };

        return PrivacyViewUi;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "privacyPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ovLabels", [_dec3], {
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

System.register("chunks:///_virtual/ProgressBarTools.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Component;

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
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "4d66eIPbEJCnoVbx0wS0wEO", "ProgressBarTools", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ProgressBarTools = exports('ProgressBarTools', (_dec = ccclass('ProgressBarTools'), _dec2 = property({
        tooltip: '进度条的节点',
        type: Node
      }), _dec3 = property({
        tooltip: '进度条的长度'
      }), _dec4 = property({
        tooltip: '当前进度条指示'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ProgressBarTools, _Component);

        function ProgressBarTools() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "BarSprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TotalLength", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "progress", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ProgressBarTools.prototype;

        _proto.start = function start() {
          if (!this.BarSprite) {
            this.BarSprite = this.node.children[0];
          }
        };

        _proto.onEnable = function onEnable() {
          this.BarSprite.getComponent(UITransform).width = 0;
        };

        _proto.update = function update() {
          if (this.progress <= 0) {
            this.BarSprite.active = false;
            return;
          }

          this.BarSprite.active = true;
          this.BarSprite.getComponent(UITransform).width = this.TotalLength * this.progress;
        };

        return ProgressBarTools;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BarSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TotalLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressBarTween.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Component;

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
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "fc834XDMk9O+Lsi88t1ig61", "ProgressBarTween", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ProgressBarTween = exports('ProgressBarTween', (_dec = ccclass('ProgressBarTween'), _dec2 = property({
        tooltip: '进度条的节点',
        type: Node
      }), _dec3 = property({
        tooltip: '进度条的长度'
      }), _dec4 = property({
        tooltip: '当前进度条指示'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ProgressBarTween, _Component);

        function ProgressBarTween() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "BarSprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TotalLength", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Progress", _descriptor3, _assertThisInitialized(_this));

          _this.tpro = 0;
          _this.updateTpro = 0;
          return _this;
        }

        var _proto = ProgressBarTween.prototype;

        _proto.start = function start() {
          if (!this.BarSprite) {
            this.BarSprite = this.node.children[0];
          }
        };

        _proto.update = function update() {
          if (this.updateTpro == 1) {
            return;
          }

          if (this.tpro >= this.updateTpro) {
            this.updateTpro += 0.01;
          }

          if (this.updateTpro > 1) {
            this.updateTpro = 1;
          }

          this.Progress = this.updateTpro;
          this.BarSprite.getComponent(UITransform).width = this.TotalLength * this.Progress;
        };

        return ProgressBarTween;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BarSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TotalLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Progress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QQADApi.ts", ['cc', './AdsIdConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, AdsIdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AdsIdConfig = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "99354IEbnBPuqz4v2JuF1LJ", "QQADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var QQADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function QQADApi() {
          this.videoType = void 0;
          this.arg = void 0;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.qq = window["qq"];
          this.bannerAd = null;
          this._autoBannerClose = false;
          this.interstitialAd = null;
          this.rewardedVideoAd = null;
          this.m_videoAdIsLoaded = false;
          this.title = '快来人啊大西瓜据点被攻占啦';
          this.shareUrl = "https://micro.dragon.efunent.com/web5_jqm/CubeWarfare/qq/data/share.jpg";
          this.appBoxAd = null;
          this.systemInfo = null;
        }

        var _proto = QQADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.qq !== null && this.qq !== undefined) {
            this.qq.showShareMenu({
              showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
            });
            this.systemInfo = this.qq.getSystemInfoSync();
            this.createVideo();
          } else {
            this.qq = null;
          }

          _callback && _callback();
          console.log('qq ===================> onInit OK');
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {
          if (this.qq != null && this.qq != undefined) {
            console.log("qq平台 分享");
            this.qq.shareAppMessage({
              title: this.title,
              imageUrl: this.shareUrl,
              success: function success() {
                _callback && _callback(1);
              },
              fail: function fail() {
                _callback && _callback(0);
              }
            });
          }
        };

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createBanner = function createBanner() {};

        _proto.showBanner = function showBanner(adIdKey, openIdKey) {
          var _this = this;

          if (this.qq !== null && this.qq !== undefined) {
            this.hideBanner(true);
            this._autoBannerClose = false;
            console.log("qq平台 创建横幅广告", AdsIdConfig.qqId[adIdKey]);
            var BannerAdWidth = 300;
            this.bannerAd = this.qq.createBannerAd({
              adUnitId: AdsIdConfig.qqId[adIdKey],
              style: {
                top: 0,
                left: 0,
                height: BannerAdWidth / 16 * 9,
                width: BannerAdWidth
              }
            });
            this.bannerAd.onResize(function (size) {
              // 底部居中显示
              _this.bannerAd.style.top = _this.systemInfo.windowHeight - size.height;
              _this.bannerAd.style.left = (_this.systemInfo.windowWidth - size.width) / 2;

              _this.bannerAd.show().then(function () {
                console.log('广告显示成功');
              })["catch"](function (err) {
                console.log('广告显示失败', JSON.stringify(err));
              });
            });
            this.bannerAd.onError(function (err) {
              console.log('Banner ad error', JSON.stringify(err));
            });
          }
        };

        _proto.hideBanner = function hideBanner(close) {
          console.log("qq平台 允许banner和插屏同时存在，不是必要可以不调用");

          if (this.bannerAd) {
            this.bannerAd.hide();
            this.bannerAd.destroy();
          }
        };

        _proto.createVideo = function createVideo() {
          var _this2 = this;

          if (this.qq !== null && this.qq !== undefined) {
            if (this.rewardedVideoAd) {
              this.rewardedVideoAd.destroy();
              this.rewardedVideoAd = null;
            }
            /**创建rewardedVideoAd 对象*/


            console.log("qq平台 创建激励视频广告");
            this.rewardedVideoAd = this.qq.createRewardedVideoAd({
              adUnitId: AdsIdConfig.qqId['video']
            });
            this.rewardedVideoAd.onLoad(function () {
              console.log("激励视频广告 加载成功");
              _this2.m_videoAdIsLoaded = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('qqH5GameAPI 激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
              _this2.m_videoAdIsLoaded = false;
            });
            this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_type, _successCallback, _failCallback) {
          var _this3 = this;

          this.videoType = _type;
          /**确保video正常创建并已经拉取到数据 */

          if (this.rewardedVideoAd && this.m_videoAdIsLoaded) {
            this.rewardedVideoAd.show();

            var onClose = function onClose(res) {
              if (res.isEnded) {
                console.log('激励视频广告完成，发放奖励');
                /**播放完毕 处理播放成功的逻辑 */

                _successCallback && _successCallback();

                _this3.rewardedVideoAd.load();
              } else {
                console.log('激励视频广告取消关闭，不发放奖励');
                /**播放失败 处理播放失败的逻辑 */

                _failCallback && _failCallback();

                _this3.rewardedVideoAd.load();
              }

              _this3.rewardedVideoAd.offClose(onClose);
            };

            this.rewardedVideoAd.onClose(onClose);
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            _failCallback && _failCallback();
            this.createVideo();
          }
        };

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createInsertAd = function createInsertAd() {};

        _proto.showInsertAd = function showInsertAd(adIdKey, openIdKey) {
          var _this4 = this;

          if (this.qq != null && this.qq != undefined) {
            if (this.interstitialAd) {
              this.interstitialAd.destroy();
              this.interstitialAd = null;
            }

            this.interstitialAd = this.qq.createInterstitialAd({
              adUnitId: AdsIdConfig.qqId[adIdKey]
            });
            this.interstitialAd.load();
            this.interstitialAd.onLoad(function () {
              console.log('==> onLoad');
              _this4.interstitialAd && _this4.interstitialAd.show && _this4.interstitialAd.show();
            });
            this.interstitialAd.onError(function (res) {
              console.log('qq InsertAd load Error:' + JSON.stringify(res));
            });

            var onClose = function onClose(res) {
              console.log("用户关闭插屏广告并销毁");

              _this4.interstitialAd.offClose(onClose);

              _this4.interstitialAd.destroy();

              _this4.interstitialAd = null;
            };

            this.interstitialAd.onClose(onClose);
          }
        };

        _proto.createNativeAd = function createNativeAd() {};

        _proto.showNativeAd = function showNativeAd(adIdKey, _callback, openIdKey) {};

        _proto.onNativeAdClick = function onNativeAdClick(_id) {};

        _proto.onNativeReportAdShow = function onNativeReportAdShow(_id) {};

        _proto.createNativeIconAd = function createNativeIconAd() {};

        _proto.showNativeIconAd = function showNativeIconAd() {};

        _proto.onNativeIconAdClick = function onNativeIconAdClick(_id) {};

        _proto.createGridAd = function createGridAd(adIdKey, openIdKey) {
          var _this5 = this;

          if (this.qq != null && this.qq != undefined) {
            if (this.appBoxAd) {
              this.appBoxAd.destroy();
              this.appBoxAd = null;
            }

            this.appBoxAd = this.qq.createAppBox({
              adUnitId: AdsIdConfig.qqId[adIdKey]
            });
            this.appBoxAd.onError(function (res) {});

            var onClose = function onClose(res) {
              console.log("用户关闭盒子广告并销毁");

              _this5.appBoxAd.offClose(onClose);

              _this5.appBoxAd.destroy();

              _this5.appBoxAd = null;
            };

            this.appBoxAd.onClose(onClose);
            this.appBoxAd.load().then(function () {
              _this5.appBoxAd && _this5.appBoxAd.show && _this5.appBoxAd.show();
            })["catch"](function (res) {
              console.log('qq appBoxAd load Error:' + JSON.stringify(res));
            });
          }
        };

        _proto.saveDataToCache = function saveDataToCache(_key, _value) {};

        _proto.readDataFromCache = function readDataFromCache(_key) {};

        _proto.addDesktop = function addDesktop(_callback) {
          if (this.qq != null && this.qq != undefined) {
            this.qq.saveAppToDesktop({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  _callback && _callback(2);
                } else {
                  _callback && _callback(1);
                }
              },
              fail: function fail(err) {
                _callback && _callback(0);
              },
              complete: function complete() {
                _callback && _callback(2);
              }
            });
          }
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {};

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark(_callback) {
          if (this.qq != null && this.qq != undefined) {
            console.log("qq 添加彩签");
            this.qq.addColorSign({
              success: function success(res) {
                console.log('添加彩签成功 ', res);
                _callback && _callback(1);
              },
              fail: function fail(err) {
                console.log('添加彩签失败', err);
                _callback && _callback(0);
              },
              complete: function complete(res) {
                console.log('添加彩签 complete: ', res);
                _callback && _callback(2);
              }
            });
          }
        };

        _proto.addSubscribeApp = function addSubscribeApp(_callback) {
          if (this.qq != null && this.qq != undefined) {
            console.log("qq 添加订阅");
            this.qq.subscribeAppMsg({
              subscribe: true,
              success: function success(res) {
                console.log("qq 订阅成功");
                _callback && _callback(1);
              },
              fail: function fail(res) {
                console.log("qq 订阅失败");
                _callback && _callback(0);
              }
            });
          }
        };

        _proto.vibrateShort = function vibrateShort() {
          if (this.qq != null && this.qq != undefined) this.qq.vibrateShort && this.qq.vibrateShort();
        };

        _proto.vibrateLong = function vibrateLong() {
          if (this.qq != null && this.qq != undefined) this.qq.vibrateLong && this.qq.vibrateLong();
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        return QQADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './GameManager.ts', './GEventManager.ts', './SoundManager.ts', './LocalStorageData.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, BaseUIForm, GameManager, GEventManager, Event_Name, SoundManager, LocalStorageData;

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
      Label = module.Label;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      SoundManager = module.default;
    }, function (module) {
      LocalStorageData = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;

      cclegacy._RF.push({}, "cd5a3DvqdZHw7KWn4ArlSy2", "SettingUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SettingUI = exports('SettingUI', (_dec = ccclass('SettingUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property([Node]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(SettingUI, _BaseUIForm);

        function SettingUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "RestartBtn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "BackHomeBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "settingBackHomeBtn", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TitleLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "soundNode", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SettingUI.prototype;

        _proto.init = function init() {
          if (GameManager.instance().inGame) {
            this.WPpause();
          } else {
            this.RestartBtn.active = false;
            this.BackHomeBtn.active = false;
            this.settingBackHomeBtn.active = true;
            this.TitleLabel.string = "设置";
          }
        };

        _proto.onClickEvent_closeUI = function onClickEvent_closeUI() {
          this.CloseUIForm();
          GEventManager.emit(Event_Name.WATER_CLICK_CONTINUE, null);
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
        };

        _proto.onBackHome = function onBackHome() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          GameManager.instance().ExitGame();
          this.CloseUIForm();
        };

        _proto.onWPRestart = function onWPRestart() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          GEventManager.emit(Event_Name.WATER_CLICK_RESTART, null);
          this.CloseUIForm();
        };

        _proto.WPpause = function WPpause() {
          this.RestartBtn.active = true;
          this.BackHomeBtn.active = true;
          this.settingBackHomeBtn.active = false;
          this.TitleLabel.string = "暂停";
        };

        _proto.refushUI = function refushUI() {
          var obj = SoundManager.getInstance().getVolumeToLocal();

          if (obj) {
            if (obj.effectVolume > 0) {
              this.setBtnStatus(0, true);
            } else {
              this.setBtnStatus(0, false);
            }

            if (obj.musicVolume > 0) {
              this.setBtnStatus(1, true);
            } else {
              this.setBtnStatus(1, false);
            }

            var vibration = LocalStorageData.Instance().getTypeData('vibration');

            if (vibration) {
              this.setBtnStatus(2, true);
            } else {
              this.setBtnStatus(2, false);
            }
          }
        };

        _proto.setBtnStatus = function setBtnStatus(id, isOn) {
          this.soundNode[id].active = isOn;
        };

        _proto.onClickEvent_Sound = function onClickEvent_Sound() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          var obj = SoundManager.getInstance().getVolumeToLocal();

          if (obj) {
            if (obj.effectVolume > 0) {
              this.setBtnStatus(0, false);
              SoundManager.getInstance().setEffectVolume(0);
            } else {
              this.setBtnStatus(0, true);
              SoundManager.getInstance().setEffectVolume(0.5);
            }
          }
        };

        _proto.onClickEvent_Music = function onClickEvent_Music() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          var obj = SoundManager.getInstance().getVolumeToLocal();

          if (obj) {
            if (obj.musicVolume > 0) {
              this.setBtnStatus(1, false);
              SoundManager.getInstance().setMusicVolume(0);
            } else {
              this.setBtnStatus(1, true);
              SoundManager.getInstance().setMusicVolume(0.5);
            }
          }
        };

        _proto.onClickEvent_Vibration = function onClickEvent_Vibration() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          var vibration = LocalStorageData.Instance().getTypeData('vibration');

          if (vibration) {
            this.setBtnStatus(2, false);
            LocalStorageData.Instance().setTypeData('vibration', false);
          } else {
            this.setBtnStatus(2, true);
            LocalStorageData.Instance().setTypeData('vibration', true);
          }
        };

        return SettingUI;
      }(BaseUIForm), _class3.prefabPath = "UIForms/SettingUI", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "RestartBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BackHomeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "settingBackHomeBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "TitleLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "soundNode", [_dec6], {
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

System.register("chunks:///_virtual/SignUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './TipsManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseUIForm, TipsManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      TipsManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "73d22P3aypAjYXRYecuEShZ", "SignUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SignUI = exports('SignUI', (_dec = ccclass('SignUI'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(SignUI, _BaseUIForm);

        function SignUI() {
          return _BaseUIForm.apply(this, arguments) || this;
        }

        var _proto = SignUI.prototype;

        _proto.init = function init() {
          TipsManager.Instance().create('打开签到');
        };

        _proto.onClickEvent_closeUI = function onClickEvent_closeUI() {
          this.CloseUIForm();
        };

        return SignUI;
      }(BaseUIForm), _class2.prefabPath = "UIForms/SignUI", _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SingletonClass.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "67a06/su7NC+4/+u6MNb/vX", "SingletonClass", undefined);

      var SingletonClass = exports('default', /*#__PURE__*/function () {
        function SingletonClass() {}

        SingletonClass.instance = function instance() {
          if (!this._ins) {
            this._ins = new this();
          }

          return this._ins;
        };

        return SingletonClass;
      }());
      SingletonClass._ins = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Loader.ts'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, find, AudioSource, game, Game, sys, Loader;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      AudioSource = module.AudioSource;
      game = module.game;
      Game = module.Game;
      sys = module.sys;
    }, function (module) {
      Loader = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7b7a3rjMAhKwoo3gZkZXoFW", "SoundManager", undefined);
      /**
       * 声音管理
       */


      var SoundManager = exports('default', /*#__PURE__*/function () {
        function SoundManager() {
          this.audioCache = {};
          this.audioSource = null;
          this.gameSource = null;
          this.musicVolume = 0.3;
          this.effectVolume = 0.3;
          this.volume = new Volume();
        }

        SoundManager.getInstance = function getInstance() {
          if (this.instance == null) {
            this.instance = new SoundManager();
          }

          return this.instance;
        };

        var _proto = SoundManager.prototype;

        _proto.init = function init() {
          var _this = this;

          var volume = this.getVolumeToLocal();

          if (volume) {
            this.volume = volume;
          } else {
            this.volume.musicVolume = 1;
            this.volume.effectVolume = 1;
          }

          this.audioSource = find('Canvas').getComponent(AudioSource);
          this.gameSource = find('Canvas/SoundManager').getComponent(AudioSource);
          this.setVolumeToLocal();
          game.on(Game.EVENT_HIDE, function () {
            _this.audioSource.pause();

            _this.gameSource.pause();
          }, this);
          game.on(Game.EVENT_SHOW, function () {
            if (_this.volume.musicVolume > 0) {
              _this.audioSource.play();
            }
          }, this);
        }
        /** volume */
        ;

        _proto.getVolume = function getVolume() {
          return this.volume;
        };

        _proto.start = function start() {};

        _proto.onlySetMusicVolume = function onlySetMusicVolume(musicVolume) {
          this.volume.musicVolume = musicVolume;
          this.setVolumeToLocal();
        }
        /**  */
        ;

        _proto.setMusicVolume = function setMusicVolume(musicVolume) {
          this.volume.musicVolume = musicVolume;
          this.setVolumeToLocal();

          if (this.volume.musicVolume > 0) {
            this.playMusic();
          } else {
            this.audioSource.stop();
          }
        };

        _proto.setEffectVolume = function setEffectVolume(effectVolume) {
          this.volume.effectVolume = effectVolume;
          this.setVolumeToLocal();
        }
        /** 播放背景音乐 */
        ;

        _proto.playMusic = /*#__PURE__*/function () {
          var _playMusic = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, loop) {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.volume.musicVolume <= 0)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    if (!this.audioSource) {
                      _context.next = 9;
                      break;
                    }

                    if (!(this.audioSource.clip == null)) {
                      _context.next = 8;
                      break;
                    }

                    Loader.loadSubpackage('Audio', function () {
                      Loader.loadBundleRes("Audio", 'bgm', function (sound) {
                        _this2.audioSource.clip = sound;

                        _this2.audioSource.play();
                      });
                    });
                    return _context.abrupt("return");

                  case 8:
                    this.audioSource.play();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function playMusic(_x, _x2) {
            return _playMusic.apply(this, arguments);
          }

          return playMusic;
        }();

        _proto.MusicState = function MusicState(isStop) {
          if (this.volume.musicVolume <= 0) {
            return;
          }

          if (isStop) {
            this.audioSource.stop();
          } else {
            if (!this.audioSource.playing) {
              this.audioSource.play();
            }
          }
        }
        /** 播放音效 */
        ;

        _proto.playEffect = /*#__PURE__*/function () {
          var _playEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, loop) {
            var _this3 = this;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!url || url === '')) {
                      _context2.next = 3;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 3:
                    if (!(this.volume.effectVolume <= 0)) {
                      _context2.next = 5;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 5:
                    if (!this.audioCache[url]) {
                      _context2.next = 8;
                      break;
                    }

                    this.gameSource.playOneShot(this.audioCache[url], 1);
                    return _context2.abrupt("return");

                  case 8:
                    Loader.loadSubpackage('Audio', function () {
                      Loader.loadBundleRes("Audio", url, function (sound) {
                        _this3.audioCache[url] = sound;

                        _this3.gameSource.playOneShot(sound, 1);
                      });
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function playEffect(_x3, _x4) {
            return _playEffect.apply(this, arguments);
          }

          return playEffect;
        }()
        /** 从本地读取 */
        ;

        _proto.getVolumeToLocal = function getVolumeToLocal() {
          var objStr = sys.localStorage.getItem("MFCreator_Volume");

          if (!objStr) {
            return null;
          }

          return JSON.parse(objStr);
        }
        /** 设置音量 */
        ;

        _proto.setVolumeToLocal = function setVolumeToLocal() {
          sys.localStorage.setItem("MFCreator_Volume", JSON.stringify(this.volume));
        } // update (dt) {}
        ;

        return SoundManager;
      }());
      SoundManager.instance = null;

      var Volume = function Volume() {
        this.musicVolume = 1;
        this.effectVolume = 1;
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Loader.ts', './LocalStorageData.ts', './ProgressBarTween.ts', './JsonUtil.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, director, Loader, LocalStorageData, ProgressBarTween, JsonUtil;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      director = module.director;
    }, function (module) {
      Loader = module.default;
    }, function (module) {
      LocalStorageData = module.default;
    }, function (module) {
      ProgressBarTween = module.ProgressBarTween;
    }, function (module) {
      JsonUtil = module.JsonUtil;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "86ba5j1/3lN4YCLIMMHIoqM", "StartScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var StartScene = exports('StartScene', (_dec = ccclass('StartScene'), _dec2 = property(ProgressBarTween), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StartScene, _Component);

        function StartScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "bar", _descriptor, _assertThisInitialized(_this));

          _this.preBundleList = [];
          _this.necessaryBundleList = ["MainScene", "GameData", 'UI'];
          _this.bundleLoadState = {};
          return _this;
        }

        var _proto = StartScene.prototype;

        _proto.onLoad = function onLoad() {
          //初始化游戏数据
          LocalStorageData.Instance().getUserData();
        };

        _proto.start = function start() {
          this.bar.Progress = 0;
          this.loadBundle();
        };

        _proto.loadBundle = function loadBundle() {
          var _this2 = this;

          var _loop = function _loop(i) {
            Loader.loadSubpackage(_this2.necessaryBundleList[i], function () {
              _this2.loadOneSubpackage(_this2.necessaryBundleList[i]);
            }, true);
          }; //加载进入主场景前必需的资源包


          for (var i = 0; i < this.necessaryBundleList.length; ++i) {
            _loop(i);
          } //预加载其他资源包


          for (var _i = 0, c = this.preBundleList.length; _i < c; ++_i) {
            Loader.loadBundle(this.preBundleList[_i], null, false, false);
          }
        } //子包加载状态
        ;

        _proto.loadOneSubpackage = function loadOneSubpackage(n) {
          this.bundleLoadState[n] = true;
          var tNum = 0;

          for (var i = 0; i < this.necessaryBundleList.length; i++) {
            if (this.bundleLoadState[this.necessaryBundleList[i]]) {
              tNum++;
            }
          }

          this.bar.Progress = tNum / this.necessaryBundleList.length / 2;
          this.loadMainScene();
        }
        /** 加载游戏本地JSON数据（自定义内容） */
        ;

        _proto.loadCustom = function loadCustom() {
          // 加载游戏本地JSON数据的多语言提示文本
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return JsonUtil.loadAsync("HallData");

                  case 2:
                    _context.next = 4;
                    return JsonUtil.loadAsync("TowerDefenseData");

                  case 4:
                    _context.next = 6;
                    return JsonUtil.loadAsync("TowerDefenseEnemys");

                  case 6:
                    resolve(null);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));
        };

        _proto.loadMainScene = function loadMainScene() {
          for (var i = this.necessaryBundleList.length - 1; i >= 0; --i) {
            if (!this.bundleLoadState[this.necessaryBundleList[i]]) {
              return;
            }
          }

          this.loaderScene();
        };

        _proto.loaderScene = /*#__PURE__*/function () {
          var _loaderScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadCustom();

                  case 2:
                    this.scheduleOnce(function () {
                      Loader.loadBundleScene("MainScene", "MainScene", function (res) {
                        director.runScene(res);
                      }, false);
                    }, 0.5);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function loaderScene() {
            return _loaderScene.apply(this, arguments);
          }

          return loaderScene;
        }();

        return StartScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StatisticsManager.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator, sys;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "44b1bH7v55Gk5p3QLz4hYm/", "StatisticsManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 抖音事件上传
       */

      var StatisticsManager = exports('StatisticsManager', (_dec = ccclass('StatisticsManager'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function StatisticsManager() {
          this.tt = window["tt"];
          this.version = '1.0.1';
        }

        StatisticsManager.getInstance = function getInstance() {
          if (this._statisticsManager == null) {
            this._statisticsManager = new StatisticsManager();
          }

          return this._statisticsManager;
        };

        var _proto = StatisticsManager.prototype;

        _proto.init = function init() {
          console.log('统计打点=======> init');

          if (this.tt == null && this.tt == undefined) {
            console.log('统计打点=======> tt == null');
            return;
          }
        };

        _proto.trackEvent = function trackEvent(id, params) {
          if (sys.isBrowser) {
            /* 浏览器测试 */
            return;
          }

          params.version = this.version;

          if (this.tt.uma == null && this.tt.uma == undefined) {
            return;
          }

          this.tt.uma.trackEvent(id, params);
          console.log('统计打点=======>', id);
        };

        return StatisticsManager;
      }(), _class2._statisticsManager = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SysDefine.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        UIFormLucenyType: void 0,
        UIFormShowMode: void 0,
        UIFormType: void 0
      });

      cclegacy._RF.push({}, "8991eM1DwxIdYk1iPPyaiXn", "SysDefine", undefined);
      /**窗体类型 */


      var UIFormType;
      /**显示类型 */

      (function (UIFormType) {
        UIFormType[UIFormType["Normal"] = 0] = "Normal";
        UIFormType[UIFormType["Fixed"] = 1] = "Fixed";
        UIFormType[UIFormType["PopUp"] = 2] = "PopUp";
        UIFormType[UIFormType["Independent"] = 3] = "Independent";
      })(UIFormType || (UIFormType = exports('UIFormType', {})));

      var UIFormShowMode;
      /**透明度类型 */

      (function (UIFormShowMode) {
        UIFormShowMode[UIFormShowMode["Normal"] = 0] = "Normal";
        UIFormShowMode[UIFormShowMode["ReverseChange"] = 1] = "ReverseChange";
        UIFormShowMode[UIFormShowMode["HideOther"] = 2] = "HideOther";
        UIFormShowMode[UIFormShowMode["Independent"] = 3] = "Independent";
      })(UIFormShowMode || (UIFormShowMode = exports('UIFormShowMode', {})));

      var UIFormLucenyType;
      /** UI配置结构体 */

      (function (UIFormLucenyType) {
        UIFormLucenyType[UIFormLucenyType["Lucency"] = 0] = "Lucency";
        UIFormLucenyType[UIFormLucenyType["Translucence"] = 1] = "Translucence";
        UIFormLucenyType[UIFormLucenyType["ImPenetrable"] = 2] = "ImPenetrable";
        UIFormLucenyType[UIFormLucenyType["Pentrate"] = 3] = "Pentrate";
      })(UIFormLucenyType || (UIFormLucenyType = exports('UIFormLucenyType', {})));
      /** 常量 */


      var SysDefine = exports('SysDefine', function SysDefine() {});
      SysDefine.SYS_PATH_CANVAS = "Canvas";
      SysDefine.SYS_PATH_UIFORMS_CONFIG_INFO = "UIFormsConfigInfo";
      SysDefine.SYS_PATH_CONFIG_INFO = "SysConfigInfo";
      SysDefine.SYS_UIROOT_NAME = "Canvas/UIROOT";
      SysDefine.SYS_UIMASK_NAME = "Canvas/UIROOT/UIMaskNode";
      SysDefine.SYS_UIAdaptation_NAME = "Canvas/UIROOT/UIAdaptationScript";
      SysDefine.SYS_MAP_NODE = "Canvas/UIROOT/Map";
      SysDefine.SYS_NORMAL_NODE = "Normal";
      SysDefine.SYS_FIXED_NODE = "Fixed";
      SysDefine.SYS_POPUP_NODE = "PopUp";
      SysDefine.SYS_INDEPENDENT_NODE = "Independent";
      SysDefine.SYS_MASK_NODE = 'UIMaskNode';
      SysDefine.SYS_LOAD_MASK = 'UILoadMask';
      SysDefine.SYS_STANDARD_Prefix = '_';
      SysDefine.SYS_STANDARD_Separator = '$';
      SysDefine.SYS_STANDARD_End = '#';
      SysDefine.SeparatorMap = {
        "_Node": "cc.Node",
        "_Label": "cc.Label",
        "_Button": "cc.Button",
        "_Sprite": "cc.Sprite",
        "_RichText": "cc.RichText",
        "_Mask": "cc.Mask",
        "_MotionStreak": "cc.MotionStreak",
        "_TiledMap": "cc.TiledMap",
        "_TiledTile": "cc.TiledTile",
        "_Spine": "sp.Spine",
        "_Graphics": "cc.Graphics",
        "_Animation": "cc.Animation",
        "_WebView": "cc.WebView",
        "_EditBox": "cc.EditBox",
        "_ScrollView": "cc.ScrollView",
        "_VideoPlayer": "cc.VideoPlayer",
        "_ProgressBar": "cc.ProgressBar",
        "_PageView": "cc.PageView",
        "_Slider": "cc.Slider",
        "_Toggle": "cc.Toggle"
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TiktokADApi.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts', './StatisticsManager.ts'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AdManager, StatisticsManager;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AdManager = module.default;
    }, function (module) {
      StatisticsManager = module.StatisticsManager;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "18720z6+oxIOJoC8X++Z+pE", "TiktokADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TiktokADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function TiktokADApi() {
          this.PassiveVideoData = void 0;
          this.AdCustomBannerData = void 0;
          this.AdCustomTypeData = void 0;
          this.ADNewNativeAdData = void 0;
          this.ADNewNativeTypeData = void 0;
          this.ADNewConfig = void 0;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.tt = window["tt"];
          this.bannerAd = null;
          this.loadSucc_SystemBanner = false;
          this.systemIntersAd = null;
          this.loadSucc_SystemInters = false;
          this.rewardedVideoAd = null;
          this.loadSucc_Video = false;
          this.callback_Video = null;
          this.isShow_Video = false;
          this.nativeAd = null;
          this.resTemp = null;
          this.recorder = null;
          this.videoPath = null;
          this.timeCount = 0;
          this.recordTime = 0;
          this.templateId = 0;
          this.systemInfo = null;
          this.clipIndexList = [];
        }

        var _proto = TiktokADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.tt !== null && this.tt !== undefined) {
            this.systemInfo = this.tt.getSystemInfoSync();
            console.log('MINIGAME ===> ', this.systemInfo);
            this.createAd();
            this.getLaunchOptions();
          } else {
            this.tt = null;
          }

          _callback && _callback();
          console.log('MINIGAME ===> toutiao ===================> onInit ok');
        };

        _proto.createAd = function createAd() {
          if (this.SystemBannerData.enabled && this.SystemBannerData.vendor_position != "") this.createSystemBanner();
          if (this.SystemIntersData && this.SystemIntersData.enabled && this.SystemIntersData.vendor_position != "") this.createSystemInters();
          if (this.VideoData.enabled && this.VideoData.vendor_position != "") this.createVideo();
        };

        _proto.getLaunchOptions = /*#__PURE__*/function () {
          var _getLaunchOptions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var launchOpt, param, options, ADData, param1, options1, ADData1;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    launchOpt = this.tt.getLaunchOptionsSync();

                    if (!launchOpt.query) {
                      _context.next = 16;
                      break;
                    }

                    if (!launchOpt.query.clickid) {
                      _context.next = 16;
                      break;
                    }

                    console.log(launchOpt.query.clickid);
                    param = {
                      "event_type": "active",
                      "context": {
                        "ad": {
                          "callback": launchOpt.query.clickid
                        }
                      },
                      "timestamp": Date.now()
                    };
                    options = {
                      data: param,
                      method: 'POST',
                      url: 'https://analytics.oceanengine.com/api/v2/conversion'
                    };
                    _context.next = 8;
                    return this.httpSend(options);

                  case 8:
                    ADData = _context.sent;
                    console.log('转化回调结果=====>', ADData);
                    param1 = {
                      "event_type": "lt_roi",
                      "context": {
                        "ad": {
                          "callback": launchOpt.query.clickid
                        }
                      },
                      "timestamp": Date.now()
                    };
                    options1 = {
                      data: param1,
                      method: 'POST',
                      url: 'https://analytics.oceanengine.com/api/v2/conversion'
                    };
                    _context.next = 14;
                    return this.httpSend(options1);

                  case 14:
                    ADData1 = _context.sent;
                    console.log('转化ROI回调结果=====>', ADData1);

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getLaunchOptions() {
            return _getLaunchOptions.apply(this, arguments);
          }

          return getLaunchOptions;
        }();

        _proto.httpSend = function httpSend(options) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                var res = JSON.parse(xhr.responseText);
                resolve(res);
              }
            };

            xhr.timeout = options.timeout || 50000; // 5 seconds for timeout

            var method = options.method || "GET";
            var url = options.url;
            options.data = options.data || {};

            if (method == "get" || method == "GET") {
              console.log("url===>", url);
              xhr.open(method, url, true);
              xhr.send();
            } else {
              xhr.open(method, options.url, true);
              xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
              xhr.send(JSON.stringify(options.data));
            }
          });
        };

        _proto.setGroup = function setGroup(group) {};

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {};

        _proto.StartRecorder = function StartRecorder(_duration) {
          if (_duration === void 0) {
            _duration = 300;
          }

          console.log('MINIGAME ===> 开始录屏');

          if (this.tt == null && this.tt == undefined) {
            return;
          }

          this.recorder = this.tt.getGameRecorderManager();
          this.recorder.start({
            duration: _duration
          });
        }; // 剪辑索引列表

        /**录屏选择录的时间 */


        _proto.recordClipRecorder = function recordClipRecorder(data) {
          if (this.recorder) {
            this.recorder.recordClip({
              timeRange: data,
              success: function success(r) {
                console.log('MINIGAME ===> 分享索引', r.index); // 裁剪唯一索引
                // this.clipIndexList.push(r.index);

                AdManager.getInstance().platformAdApi.clipIndexList.push(r.index);
              }
            });
          }
        };

        _proto.pauseGameVideo = function pauseGameVideo() {
          console.log("MINIGAME ===> ", "Tiktok 暂停录屏==================");
          this.recorder && this.recorder.pause();
        };

        _proto.resumeGameVideo = function resumeGameVideo() {
          console.log("MINIGAME ===> ", "Tiktok 继续录屏==================");
          this.recorder && this.recorder.resume();
        }
        /**
        * 
        * @param _duration 录屏停止时从后往前截取多少秒 
        */
        ;

        _proto.stopRecordScreen = function stopRecordScreen(_duration) {
          var _this = this;

          console.log('MINIGAME ===> 结束录屏', this.clipIndexList);

          if (this.tt == null && this.tt == undefined) {
            return;
          }

          this.recordClipRecorder([10, 0]);
          this.recorder.onStop(function (res) {
            _this.recorder.clipVideo({
              path: res.videoPath,
              timeRange: _this.clipIndexList,
              success: function success(res) {
                console.log('MINIGAME ===>', res.videoPath);
                AdManager.getInstance().platformAdApi.videoPath = res.videoPath;
              },
              fail: function fail(e) {
                console.error(e);
              }
            });

            console.log('MINIGAME ===> 结束录屏-录屏地址：' + res.videoPath);
          });
          this.recorder.stop();
        };

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {
          if (this.tt != null && this.tt != undefined) {
            console.log("MINIGAME ===> tt平台 调用分享");
            this.tt.shareAppMessage({
              channel: "video",
              templateId: templateId,
              title: _title,
              desc: _title,
              extra: {
                videoPath: this.videoPath,
                // 可用录屏得到的视频地址
                videoTopics: [_title, '小游戏'],
                video_title: ""
              },
              success: function success() {
                _callback && _callback(1);
              },
              fail: function fail(res) {
                _callback && _callback(0);
              }
            });
          }
        };

        _proto.createSystemBanner = function createSystemBanner() {
          var _this2 = this;

          if (this.tt !== null && this.tt !== undefined) {
            this.loadSucc_SystemBanner = false;
            console.log("MINIGAME ===> toutiao平台 创建横幅广告", this.SystemBannerData.vendor_position);
            this.bannerAd = this.tt.createBannerAd({
              adUnitId: this.SystemBannerData.vendor_position,
              style: {
                // width: this.systemInfo.screenWidth-100,
                width: 150,
                //下居中
                top: this.systemInfo.windowHeight - this.systemInfo.screenWidth / 16 * 9
              }
            }); // 尺寸调整时会触发回调，通过回调拿到的广告真实宽高再进行定位适配处理
            // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！

            this.bannerAd.onResize(function (size) {
              _this2.bannerAd.style.top = _this2.systemInfo.windowHeight - size.height;
              _this2.bannerAd.style.left = (_this2.systemInfo.windowWidth - size.width) / 2;
            });
            this.bannerAd.onLoad(function () {
              _this2.loadSucc_SystemBanner = true;
            });
          } else {
            console.log('MINIGAME ===> this.tt == null');
          }
        }
        /**
         * 展示系统banner
         */
        ;

        _proto.showSystemBanner = function showSystemBanner() {
          if (this.bannerAd) {
            console.log("MINIGAME ===> ", "Tiktok showSystemBanner========================");
            this.bannerAd.show();
          }
        }
        /**
         * 隐藏系统banner
         */
        ;

        _proto.hideSystemBanner = function hideSystemBanner() {
          if (this.bannerAd) {
            console.log("MINIGAME ===> ", "Tiktok hideSystemBanner========================");
            this.bannerAd.hide();
          }
        };

        _proto.hideBanner = function hideBanner() {
          if (this.bannerAd) {
            this.hideSystemBanner();
          }
        };

        _proto.showBanner = function showBanner() {
          if (this.loadSucc_SystemBanner) {
            this.showSystemBanner();
          }
        };

        _proto.createVideo = function createVideo() {
          var _this3 = this;

          if (this.tt !== null && this.tt !== undefined) {
            /**创建rewardedVideoAd 对象*/
            console.log("MINIGAME ===> toutiao平台 创建激励视频广告", this.VideoData.vendor_position);
            this.rewardedVideoAd = this.tt.createRewardedVideoAd({
              adUnitId: this.VideoData.vendor_position
            });
            this.rewardedVideoAd.onLoad(function () {
              console.log("MINIGAME ===> 激励视频广告 加载成功");
              _this3.loadSucc_Video = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('MINIGAME ===>  激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
              _this3.loadSucc_Video = false;
              setTimeout(function () {
                _this3.rewardedVideoAd && _this3.rewardedVideoAd.load();
              }, 10 * 1000);
            }); //监听视频广告播放完成

            this.rewardedVideoAd.onClose(function (res) {
              setTimeout(function () {
                if (res.isEnded) {
                  console.log("MINIGAME ===> ", "Tiktok 激励视频广告完成，发放奖励");

                  if (_this3.callback_Video) {
                    _this3.callback_Video(true);

                    _this3.loadSucc_Video = false;

                    _this3.rewardedVideoAd.load();
                  }
                } else {
                  console.log("MINIGAME ===> ", "Tiktok 激励视频广告取消，不发放奖励");

                  if (_this3.callback_Video) {
                    _this3.callback_Video(false);

                    _this3.loadSucc_Video = false;

                    _this3.rewardedVideoAd.load();
                  }
                }

                _this3.isShow_Video = false;
              }, 300);
              StatisticsManager.getInstance().trackEvent('ad', {
                "version": "1.0.1",
                "ad_type": 'rewarded'
              });
            });
            this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_successCallback) {
          var _this4 = this;
          /**确保video正常创建并已经拉取到数据 */


          if (this.rewardedVideoAd && this.loadSucc_Video) {
            if (this.isShow_Video) {
              console.log("MINIGAME ===> ", "视频正在播放中,请勿多次点击！");
              return;
            }

            this.isShow_Video = true;
            this.callback_Video = _successCallback;
            this.rewardedVideoAd.show().then(function () {
              console.log("MINIGAME ===> ", "Tiktok 激励视频广告显示成功");
            })["catch"](function (err) {
              console.log("MINIGAME ===> ", "Tiktok 激励视频广告组件出现问题", JSON.stringify(err)); // 可以手动加载一次

              _this4.rewardedVideoAd.load().then(function () {
                console.log("MINIGAME ===> ", "Tiktok 激励视频广告手动加载成功"); // 加载成功后需要再显示广告

                _this4.rewardedVideoAd.show()["catch"](function (err) {
                  console.log("MINIGAME ===> ", "Tiktok 激励视频广告播放失败", JSON.stringify(err));
                  _this4.isShow_Video = false;

                  _this4.callback_Video(false);
                });
              });
            });
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            this.isShow_Video = false;

            _successCallback(false);
          }

          StatisticsManager.getInstance().trackEvent('ad', {
            "version": "1.0.1",
            "ad_nvocation": 'rewarded'
          });
        };

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createSystemInters = function createSystemInters() {
          var _this5 = this;

          if (this.tt != null && this.tt != undefined) {
            console.log('MINIGAME ===> 创建插屏', this.SystemIntersData.vendor_position);
            this.systemIntersAd = this.tt.createInterstitialAd({
              adUnitId: this.SystemIntersData.vendor_position
            });
            this.systemIntersAd.onError(function (res) {
              console.log('MINIGAME ===> toutiao InsertAd load Error:' + JSON.stringify(res));

              if (_this5.systemIntersAd) {
                setTimeout(function () {
                  _this5.systemIntersAd && _this5.systemIntersAd.load();
                }, 10 * 1000);
              }
            });
            this.systemIntersAd.onLoad(function () {
              console.log("MINIGAME ===>插屏加载完成");
              _this5.loadSucc_SystemInters = true;
            }); //监听插屏广告关闭

            this.systemIntersAd.onClose(function () {
              console.log("MINIGAME ===> ", "Tiktok 关闭插屏,重新创建插屏广告");
              setTimeout(function () {
                _this5.systemIntersAd && _this5.systemIntersAd.load();
              }, 2 * 1000);
              _this5.loadSucc_SystemInters = false;
              StatisticsManager.getInstance().trackEvent('ad', {
                "version": "1.0.1",
                "ad_type": 'inter'
              });
            }); //加载一次

            this.systemIntersAd.load();
          }
        };

        _proto.showInsertAd = function showInsertAd() {
          if (this.tt != null && this.tt != undefined) {
            if (this.systemIntersAd && this.loadSucc_SystemInters) {
              console.log("MINIGAME ===> ", "Tiktok showSystemInters========================");
              this.systemIntersAd.show();
              StatisticsManager.getInstance().trackEvent('ad', {
                "version": "1.0.1",
                "ad_nvocation": 'inter'
              });
            }
          }
        };

        _proto.createNativeAd = function createNativeAd() {};

        _proto.showNativeAd = function showNativeAd(adIdKey, _callback, openIdKey) {};

        _proto.onNativeAdClick = function onNativeAdClick(_id) {};

        _proto.onNativeReportAdShow = function onNativeReportAdShow(_id) {};

        _proto.createNativeIconAd = function createNativeIconAd() {};

        _proto.showNativeIconAd = function showNativeIconAd() {};

        _proto.onNativeIconAdClick = function onNativeIconAdClick(_id) {};

        _proto.reportNativeBannerShow = function reportNativeBannerShow(adId) {};

        _proto.reportNativeBannerClick = function reportNativeBannerClick(adId) {};

        _proto.getNativeAdInfo = function getNativeAdInfo(type) {
          return null;
        };

        _proto.getHWNativeAdInfo = function getHWNativeAdInfo(_infoCallback) {};

        _proto.reportNativeImageShow = function reportNativeImageShow(type) {};

        _proto.reportNativeImageClick = function reportNativeImageClick(type) {};

        _proto.loadNativeImage = function loadNativeImage() {}
        /**原生icon广告获取 */
        ;

        _proto.getNativeIconAdInfo = function getNativeIconAdInfo(type) {};

        _proto.reportNativeIconShow = function reportNativeIconShow(adId) {};

        _proto.reportNativeIconClick = function reportNativeIconClick(adId) {};

        _proto.loadNativeIcon = function loadNativeIcon() {}
        /**创建格子广告组件 */
        ;

        _proto.createGridAd = function createGridAd(adIdKey, openIdKey) {};

        _proto.saveDataToCache = function saveDataToCache(_key, _value) {};

        _proto.readDataFromCache = function readDataFromCache(_key) {};

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {};

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {};

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {};

        _proto.addDesktop = function addDesktop(_callback) {
          this.tt.addShortcut({
            success: function success(res) {
              console.log("MINIGAME ===> ", "添加桌面成功");

              _callback(true);
            },
            fail: function fail(res) {
              console.log("MINIGAME ===> ", "添加桌面失败：", JSON.stringify(res));

              _callback(false);
            }
          });
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {
          if (this.tt != null && this.tt != undefined) {
            this.tt.checkShortcut({
              success: function success(res) {
                if (!res.status.exist || res.status.needUpdate) {
                  console.log("MINIGAME ===> ", "checkShortcut res:", JSON.stringify(res));
                  console.log("MINIGAME ===> ", "Tiktok 未创建桌面图标或图标需要更新");

                  _callback(true);
                } else {
                  console.log("MINIGAME ===> ", "Tiktok 已创建桌面图标");

                  _callback(false);
                }
              },
              fail: function fail(res) {
                console.log("MINIGAME ===> ", "Tiktok 添加桌面图标失败：", JSON.stringify(res.errMsg));

                _callback(false);
              }
            });
          }
        };

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.phoneVibrate = function phoneVibrate(isLong) {
          if (this.tt != null && this.tt != undefined) {
            if (isLong) {
              this.tt.vibrateLong && this.tt.vibrateLong();
            } else {
              this.tt.vibrateShort && this.tt.vibrateShort();
            }
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {
          if (this.tt != null && this.tt != undefined) this.tt.reportAnalytics(name, value);
        };

        _proto.navigateToScene = function navigateToScene(_succeedcallback, _failcallback) {
          this.tt.navigateToScene({
            scene: 'sidebar',
            success: function success(res) {
              console.log('navigate to scene success'); // 跳转成功回调逻辑

              if (_succeedcallback) _succeedcallback();
            },
            fail: function fail(res) {
              console.log('navigate to scene fail: ', res); // 跳转失败回调逻辑

              if (_failcallback) _failcallback();
            }
          });
        };

        _proto.tiktokCheckScene = function tiktokCheckScene(callback) {
          var appName = this.tt.getSystemInfoSync().appName;

          if (["Toutiao", "news_article_lite"].indexOf(appName) != -1) {
            callback(false);
            return;
          }

          this.tt.checkScene({
            scene: "sidebar",
            success: function success(res) {
              console.log("check scene success: ", res.isExist); //成功回调逻辑

              if (callback) {
                callback(res.isExist);
              }
            },
            fail: function fail(res) {
              console.log("check scene fail:", res); //失败回调逻辑

              if (callback) {
                callback(false);
              }
            }
          });
        };

        _proto.showPassiveVideo = function showPassiveVideo(_successCallback) {};

        _proto.showCustomType12 = function showCustomType12(type, playSuccessCall) {};

        _proto.showADNewNativeType12 = function showADNewNativeType12(type, playSuccessCall) {};

        _proto.showCustomBanner = function showCustomBanner(playSuccessCall) {};

        _proto.hideCustomBanner = function hideCustomBanner() {};

        _proto.showCustomAd = function showCustomAd() {};

        _proto.hideCustomAd = function hideCustomAd() {};

        _proto.showGridAd = function showGridAd() {};

        _proto.hideGridAd = function hideGridAd() {};

        _proto.ShowGameIconAd = function ShowGameIconAd() {};

        _proto.HideGameIconAd = function HideGameIconAd() {};

        _proto.ShowHomeIconAd = function ShowHomeIconAd() {};

        _proto.HideHomeIconAd = function HideHomeIconAd() {};

        _proto.ShowSideAd = function ShowSideAd() {};

        _proto.HideSideAd = function HideSideAd() {};

        _proto.ShowMoreGamesAd = function ShowMoreGamesAd() {};

        _proto.HideMoreGamesAd = function HideMoreGamesAd() {};

        _proto.ShowBannerNativeAd = function ShowBannerNativeAd() {};

        _proto.HideBannerNativeAd = function HideBannerNativeAd() {};

        _proto.hideCustomIconAd = function hideCustomIconAd() {};

        _proto.showCustomIconAd = function showCustomIconAd() {};

        return TiktokADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TipsManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TipUI.ts'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, UITransform, Layers, Label, LabelOutline, find, director, Director, NodePool, TipUI;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Layers = module.Layers;
      Label = module.Label;
      LabelOutline = module.LabelOutline;
      find = module.find;
      director = module.director;
      Director = module.Director;
      NodePool = module.NodePool;
    }, function (module) {
      TipUI = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "8ed0bcbHntAQZgKh8cUIEkY", "TipsManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TipsManager = exports('default', (_dec = ccclass('TipsManager'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        TipsManager.Instance = function Instance() {
          var _this = this;

          if (this.instance == null) {
            this.instance = new TipsManager();
          }

          director.once(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            _this.instance = null;
          });
          return this.instance;
        };

        function TipsManager() {
          var _this2 = this;

          this.pool = null;
          this.prefab = null;
          this.name = "TipUI";
          this.parentName = "Canvas/UIROOT/Independent";
          this.queue = [];
          this.pool = new NodePool(this.name);
          director.once(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            _this2.queue = [];
          });
        }
        /**
         * 创建
         * @param str 
         */


        var _proto = TipsManager.prototype;

        _proto.create = /*#__PURE__*/function () {
          var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(str) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.initTip(str);
                    return _context.abrupt("return", null);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function create(_x) {
            return _create.apply(this, arguments);
          }

          return create;
        }()
        /**
         * 回收
         * @param node 
         */
        ;

        _proto.putNode = function putNode(node) {
          this.pool.put(node);
          this.queue.shift();
          if (this.queue.length == 0) return;
          var nextStr = this.queue[0];
          this.initTip(nextStr);
        }
        /**
         * 不需要放入对象池
         * @param node 
         */
        ;

        _proto.removeTipeNode = function removeTipeNode(node) {
          node.removeFromParent();
          this.queue.shift();
          if (this.queue.length == 0) return;
          var nextStr = this.queue[0];
          this.initTip(nextStr);
        };

        _proto.initTip = function initTip(str) {
          var node = null;

          if (this.pool.size() == 0) {
            node = new Node('TipUI');
            node.addComponent(UITransform);
            node.addComponent(TipUI);
            var lableNode = new Node('Label');
            node.addChild(lableNode);
            lableNode.layer = Layers.Enum.UI_2D;
            var label = lableNode.addComponent(Label);
            label.fontSize = 28;
            label.isBold = true;
            label.addComponent(LabelOutline);
          } else {
            node = this.pool.get();
          }

          var parent = find(this.parentName);
          parent.addChild(node);
          var script = node.getComponent(TipUI);
          script.showInfo(str);
        };

        return TipsManager;
      }(), _class2.instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TipUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TipsManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Vec3, Label, tween, Component, TipsManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Label = module.Label;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      TipsManager = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "add73GZ0WxLfJgiakwalr92", "TipUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TipUI = exports('default', (_dec = ccclass('TipUI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TipUI, _Component);

        function TipUI() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TipUI.prototype;

        _proto.showInfo = function showInfo(tip) {
          var _this = this;

          var tipLabel = this.node.getChildByName('Label');
          tipLabel.setPosition(new Vec3(0, -200, 0));
          tipLabel.getComponent(Label).string = tip;
          var nodeTween = tween(tipLabel);
          nodeTween.to(0.8, {
            position: new Vec3(0, -50, 0)
          }).call(function () {
            TipsManager.Instance().putNode(_this.node);
          }).start();
        };

        return TipUI;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolsHelper.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator, v3;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
    }],
    execute: function () {
      var _class, _class2;

      cclegacy._RF.push({}, "486c4s29bZBDqB7A54rFpJV", "ToolsHelper", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ToolsHelper = exports('default', ccclass(_class = (_class2 = /*#__PURE__*/function () {
        function ToolsHelper() {}

        ToolsHelper.Instance = function Instance() {
          if (this.instance == null) {
            this.instance = new ToolsHelper();
          }

          return this.instance;
        }
        /**
         * 随机数
         * @param minNum 
         * @param maxNum 
         * @returns 
         */
        ;

        var _proto = ToolsHelper.prototype;

        _proto.randomNum = function randomNum(minNum, maxNum) {
          var value_a = Math.random() * (maxNum - minNum + 1) + minNum + "";
          return parseInt(value_a);
        }
        /**
         * 打乱数组
         * @param arr 
         * @returns 
         */
        ;

        _proto.disorderArr = function disorderArr(arr) {
          var arr2 = [];

          while (arr.length > 0) {
            var index = Math.floor(Math.random() * arr.length);
            arr2.push(arr[index]);
            arr.splice(index, 1);
          }

          return arr2;
        }
        /**
         * 时间转 时分秒
         * @param Time 
         * @returns 
         */
        ;

        _proto.CastSecondsToHours = function CastSecondsToHours(Time) {
          if (Time < 60) return Math.floor(Time) + '秒';

          if (Time < 3600 && Time >= 60) {
            return Math.floor(Time / 60) + '分' + Math.floor(Time % 60) + '秒';
          }

          if (Time >= 3600) {
            var Hour = Math.floor(Time / 3600);
            var s = Time % 3600;
            var Min = Math.floor(s / 60);
            return Math.floor(Hour) + '小时' + Math.floor(Min) + '分';
          }

          return Math.floor(Time / 3600);
        }
        /**
         * 时间转：：
         * @param Time 
         * @returns 
         */
        ;

        _proto.CastSecondsToHoursDD = function CastSecondsToHoursDD(Time) {
          var branch = '';
          var second = '';

          if (Time < 60) {
            second = Math.floor(Time) + '';

            if (second.length == 1) {
              second = '0' + second;
            }

            return '00:' + second;
          }

          if (Time < 3600 && Time >= 60) {
            branch = Math.floor(Time / 60) + '';

            if (branch.length == 1) {
              branch = '0' + branch;
            }

            second = Math.floor(Time % 60) + '';

            if (second.length == 1) {
              second = '0' + second;
            }

            return branch + ':' + second;
          }

          return Math.floor(Time / 3600);
        }
        /**
         * 截取小数
         * @param num 
         * @param n 
         */
        ;

        _proto.interceptDecimal = function interceptDecimal(num, n) {
          return parseInt(num * Math.pow(10, n) + 0.5 + '', 10) / Math.pow(10, n);
        };

        _proto.formatDecimal = function formatDecimal(num, decimal) {
          var numStr = num.toString();
          var index = numStr.indexOf('.');

          if (index !== -1) {
            numStr = numStr.substring(0, decimal + index + 1);
          } else {
            numStr = numStr.substring(0);
          }

          return parseFloat(numStr).toFixed(decimal);
        }
        /**
         * 两点间距离
         * @param pos1 
         * @param pos2 
         * @returns 
         */
        ;

        _proto.pointDistance = function pointDistance(pos1, pos2) {
          var a = pos1.x - pos2.x;
          var b = pos1.y - pos2.y;
          var c = pos1.z - pos2.z;
          return Math.sqrt(a * a + b * b + c * c);
        }
        /**
         * 显示名字限制长度，后面...代替
         * @param name 
         * @param length 
         * @returns 
         */
        ;

        _proto.nameLength = function nameLength(name, length) {
          if (name.length <= 0) {
            return '';
          }

          var newName = name + '';

          if (name.length < length) {
            return newName;
          }

          var jq = '';

          for (var i = 0; i < length; i++) {
            jq = jq + newName[i];
          }

          jq = jq + '...';
          return jq;
        }
        /**
         * 随机3D位置
         * @param minx 
         * @param maxx 
         * @param minz 
         * @param maxz 
         * @returns 
         */
        ;

        _proto.randomPosition = function randomPosition(minx, maxx, minz, maxz) {
          var value_x = Math.random() * (maxx - minx + 1) + minx + "";
          var value_z = Math.random() * (maxz - minz + 1) + minz + "";
          return v3(parseInt(value_x), 0, parseInt(value_z));
        } // 判断点是否在aabb 包围盒内 o为世界坐标，n为AABB
        ;

        _proto.checkCollide = function checkCollide(o, n) {
          if (o == undefined || n == undefined) return false;
          var rt = !(o.x >= n.x + n.width || o.x < n.x || o.y >= n.y + n.height || o.y < n.y);
          return rt;
        }
        /** 去重 */
        ;

        _proto.noRepeated = function noRepeated(arr) {
          var res = [arr[0]];

          for (var i = 1; i < arr.length; i++) {
            var repeat = false;

            for (var j = 0; j < res.length; j++) {
              if (arr[i] == res[j]) {
                repeat = true;
                break;
              }
            }

            if (!repeat) {
              res.push(arr[i]);
            }
          }

          return res;
        }
        /**
         * 复制二维数组
         * @param array 目标数组 
         */
        ;

        _proto.copy2DArray = function copy2DArray(array) {
          var newArray = [];

          for (var i = 0; i < array.length; i++) {
            newArray.push(array[i]);
          }

          return newArray;
        };

        return ToolsHelper;
      }(), _class2.instance = null, _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIHelper.ts", ['cc', './CocosHelper.ts', './SysDefine.ts'], function (exports) {
  'use strict';

  var cclegacy, warn, log, CocosHelper, SysDefine;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      warn = module.warn;
      log = module.log;
    }, function (module) {
      CocosHelper = module.default;
    }, function (module) {
      SysDefine = module.SysDefine;
    }],
    execute: function () {
      cclegacy._RF.push({}, "08fc7NVl71F2LebDUkZl4Kn", "UIHelper", undefined);

      var UIHelper = exports('default', /*#__PURE__*/function () {
        function UIHelper() {}

        UIHelper.getInstance = function getInstance() {
          if (this.instance === null) {
            this.instance = new UIHelper();
          }

          return this.instance;
        } // 绑定组件
        ;

        var _proto = UIHelper.prototype;

        _proto.bindComponent = function bindComponent(component) {
          this.bindNode(component.node, component);
        } // 绑定node
        ;

        _proto.bindNode = function bindNode(node, component) {
          if (component.$collector === node.uuid) {
            warn("\u91CD\u590D\u7ED1\u5B9A\u9000\u51FA." + node.name);
            return;
          }

          component.$collector = node.uuid;

          this._bindSubNode(node, component);
        } // 绑定子节点
        ;

        _proto._bindSubNode = function _bindSubNode(node, component) {
          var _this = this; // 检测前缀是否符合绑定规范


          var name = node.name;

          if (CocosHelper.checkBindChildren(name)) {
            if (CocosHelper.checkNodePrefix(name)) {
              // 获得这个组件的类型 和 名称
              var names = CocosHelper.getPrefixNames(name);

              if (names === null || names.length !== 2 || !SysDefine.SeparatorMap[names[0]]) {
                log(name + " \u547D\u4EE4\u4E0D\u89C4\u8303, \u8BF7\u4F7F\u7528_lab$xxx\u7684\u683C\u5F0F!");
                return;
              } // 未定义的类型


              if (!component[names[0] + "s"]) {
                log(name[0] + "s\u6CA1\u6709\u5728BaseUIForm\u4E2D\u5B9A\u4E49, \u5E76\u4E0D\u4F1A\u5F71\u54CD\u8FD0\u884C");
                component[names[0] + "s"] = {};
              }

              if (component[names[0] + "s"][names[1]]) {
                log(name + " \u5DF2\u7ECF\u88AB\u7ED1\u5B9A\u4E86, \u8BF7\u68C0\u67E5\u60A8\u662F\u5426\u51FA\u73B0\u4E86\u91CD\u540D\u7684\u60C5\u51B5!");
              }

              if (SysDefine.SeparatorMap[names[0]] === 'Node') {
                component[names[0] + "s"][names[1]] = node;
              } else {
                component[names[0] + "s"][names[1]] = node.getComponent(SysDefine.SeparatorMap[names[0]]);
              }
            } // 绑定子节点


            node.children.forEach(function (target) {
              _this._bindSubNode(target, component);
            });
          }
        };

        return UIHelper;
      }());
      UIHelper.instance = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIIndependentManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUIConfig.ts', './UIManager.ts'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, UIID, UIManager;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      UIManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "21ac7DtM+1Cm5lG3Y5Xgmv3", "UIIndependentManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /***
       * 独立窗体, 独立控制, 不受其他窗体控制
       * 
       * 这里专门用于处理  提示类窗体, 例如断线提示, 加载过场等
       */

      var UIIndependentManager = exports('default', (_dec = ccclass('UIIndependentManager'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function UIIndependentManager() {
          this.uiId = UIID.Loading;
        } // 单例


        UIIndependentManager.getInstance = function getInstance() {
          if (this.Instance == null) {
            this.Instance = new UIIndependentManager();
          }

          return this.Instance;
        };

        var _proto = UIIndependentManager.prototype;
        /** 设置加载页面 */

        _proto.setLoadingForm = function setLoadingForm(uiId) {
          this.uiId = uiId;
          UIManager.GetInstance().loadUIForms(this.uiId);
        };

        _proto.showLoadingForm = /*#__PURE__*/function () {
          var _showLoadingForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return UIManager.GetInstance().ShowUIForms(this.uiId);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function showLoadingForm() {
            return _showLoadingForm.apply(this, arguments);
          }

          return showLoadingForm;
        }()
        /** 隐藏加载form */
        ;

        _proto.hideLoadingForm = function hideLoadingForm() {
          UIManager.GetInstance().CloseUIForms(this.uiId);
        };

        return UIIndependentManager;
      }(), _class2.Instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './SysDefine.ts', './UIIndependentManager.ts', './Loader.ts', './GEventManager.ts', './AnimRotate.ts', './GameUIConfig.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, find, director, Director, Sprite, SpriteFrame, Node, BlockInputEvents, Layers, UITransform, Widget, log, instantiate, Prefab, Component, BaseUIForm, SysDefine, UIFormShowMode, UIFormType, UIIndependentManager, Loader, GEventManager, Event_Name, AnimRotate, UIConfigData;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      director = module.director;
      Director = module.Director;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      BlockInputEvents = module.BlockInputEvents;
      Layers = module.Layers;
      UITransform = module.UITransform;
      Widget = module.Widget;
      log = module.log;
      instantiate = module.instantiate;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      SysDefine = module.SysDefine;
      UIFormShowMode = module.UIFormShowMode;
      UIFormType = module.UIFormType;
    }, function (module) {
      UIIndependentManager = module.default;
    }, function (module) {
      Loader = module.default;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      AnimRotate = module.AnimRotate;
    }, function (module) {
      UIConfigData = module.UIConfigData;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "d8a34HjMi9JoLaykoNz43o9", "UIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIManager = exports('default', (_dec = ccclass('UIManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIManager, _Component);

        function UIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._NoNormal = null;
          _this._NoFixed = null;
          _this._NoPopUp = null;
          _this._NoIndependent = null;
          _this._NoLoadMask = null;
          _this._StaCurrentUIForms = [];
          _this._MapAllUIForms = {};
          _this._MapCurrentShowUIForms = {};
          _this._MapIndependentForms = {};
          return _this;
        } // 单例


        UIManager.GetInstance = function GetInstance() {
          var _this2 = this;

          if (this._Instance == null) {
            this._Instance = find(SysDefine.SYS_UIROOT_NAME).getComponent(this);
          }

          director.once(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            _this2._Instance = null;
          });
          return this._Instance;
        };

        var _proto = UIManager.prototype;

        _proto.onLoad = function onLoad() {
          // 初始化结点
          this._NoNormal = this.CreatUINode(SysDefine.SYS_NORMAL_NODE);
          this._NoFixed = this.CreatUINode(SysDefine.SYS_FIXED_NODE);
          this._NoPopUp = this.CreatUINode(SysDefine.SYS_POPUP_NODE);
          this._NoIndependent = this.CreatUINode(SysDefine.SYS_INDEPENDENT_NODE);
          var maskNode = this.CreatUINode(SysDefine.SYS_MASK_NODE);
          var maskSprite = maskNode.addComponent(Sprite);
          Loader.loadBundleRes("UI", "images/common/white", function (res) {
            maskSprite.spriteFrame = SpriteFrame.createWithImage(res);
          });
          maskNode.active = false;
          this._NoLoadMask = this.CreatUINode(SysDefine.SYS_LOAD_MASK);
          var node = new Node('load');

          this._NoLoadMask.addComponent(BlockInputEvents);

          this._NoLoadMask.addChild(node);

          node.layer = Layers.Enum.UI_2D;
          var sprite = node.addComponent(Sprite);
          Loader.loadBundleRes("UI", "images/common/load_pro", function (res) {
            sprite.spriteFrame = SpriteFrame.createWithImage(res);
          });
          node.addComponent(AnimRotate);
          this._NoLoadMask.active = false;
        };

        _proto.CreatUINode = function CreatUINode(name) {
          var node = new Node(name);
          this.node.addChild(node);
          node.layer = Layers.Enum.UI_2D;
          node.addComponent(UITransform);
          var nodeWidget = node.addComponent(Widget);
          nodeWidget.isAlignTop = true;
          nodeWidget.isAlignBottom = true;
          nodeWidget.isAlignLeft = true;
          nodeWidget.isAlignRight = true;
          nodeWidget.top = 0;
          nodeWidget.bottom = 0;
          nodeWidget.left = 0;
          nodeWidget.right = 0;
          return node;
        };

        _proto.start = function start() {};

        _proto.onEnable = function onEnable() {
          GEventManager.on(Event_Name.SHOWTOUCHMASK, this.showTouchMask, this);
          GEventManager.on(Event_Name.HIDETOUCHMASK, this.hideTouchMask, this);
        }
        /** 预加载加载UIForm */
        ;

        _proto.loadUIForms = /*#__PURE__*/function () {
          var _loadUIForms = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(uiId) {
            var _iterator, _step, name;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (typeof uiId === 'number') {
                      this.LoadFormsToAllUIFormsCatch(uiId);
                    } else {
                      for (_iterator = _createForOfIteratorHelperLoose(uiId); !(_step = _iterator()).done;) {
                        name = _step.value;
                        this.LoadFormsToAllUIFormsCatch(name);
                      }
                    }

                    return _context.abrupt("return", true);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadUIForms(_x) {
            return _loadUIForms.apply(this, arguments);
          }

          return loadUIForms;
        }()
        /** 加载Form时显示等待页面 */
        ;

        _proto.ShowUIFormWithLoading = /*#__PURE__*/function () {
          var _ShowUIFormWithLoading = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(uiId, waitFormName) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return UIIndependentManager.getInstance().showLoadingForm();

                  case 2:
                    _context2.next = 4;
                    return UIManager.GetInstance().ShowUIForms(uiId);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function ShowUIFormWithLoading(_x2, _x3) {
            return _ShowUIFormWithLoading.apply(this, arguments);
          }

          return ShowUIFormWithLoading;
        }()
        /**
         * 窗体是否正在显示
         * @param uiFormName 
         */
        ;

        _proto.UIFormIsShowing = function UIFormIsShowing(uiId) {
          var baseUIForms = this._MapAllUIForms[uiId];

          if (baseUIForms == null) {
            return false;
          }

          return baseUIForms.node.active;
        }
        /**
         * 重要方法 加载显示一个UIForm
         * @param uiFormName 
         * @param obj 初始化信息, 可以不要
         */
        ;

        _proto.ShowUIForms = function ShowUIForms(uiId, obj) {
          var _this3 = this;

          var uiFormName = UIConfigData[uiId].script;
          if (uiFormName === "" || uiFormName == null) return;

          if (this.UIFormIsShowing(uiId)) {
            log(uiFormName + "\u7A97\u4F53\u5DF2\u7ECF\u5728\u663E\u793A");
            return;
          }

          var baseUIForms = this.LoadFormsToAllUIFormsCatch(uiId, function (baseUIResult) {
            if (baseUIResult == null) {
              return;
            } // 是否清理栈内窗口
            // if (baseUIResult.UIType.IsClearStack) {
            //     this.ClearStackArray();
            // }


            switch (UIConfigData[uiId].uiFormShowMode) {
              case UIFormShowMode.Normal:
                // 普通模式显示
                _this3.LoadUIToCurrentCache(uiId, obj);

                break;

              case UIFormShowMode.ReverseChange:
                // 反向切换
                _this3.PushUIFormToStack(uiId, obj);

                break;

              case UIFormShowMode.HideOther:
                // 隐藏其他
                _this3.EnterUIFormsAndHideOther(uiId, obj);

                break;

              case UIFormShowMode.Independent:
                // 独立显示
                _this3.LoadUIFormsToIndependent(uiId, obj);

                break;
            }
          });
        }
        /**
         * 重要方法 关闭一个UIForm
         * @param uiFormName 
         */
        ;

        _proto.CloseUIForms = function CloseUIForms(uiId) {
          var config = UIConfigData[uiId];
          var uiFormName = config.script;
          if (uiFormName == "" || uiFormName == null) return;
          var baseUIForm = this._MapAllUIForms[uiId];
          if (baseUIForm == null) return;

          switch (config.uiFormShowMode) {
            case UIFormShowMode.Normal:
              // 普通模式显示
              this.ExitUIForms(uiId);
              break;

            case UIFormShowMode.ReverseChange:
              // 反向切换
              this.PopUIForm();
              break;

            case UIFormShowMode.HideOther:
              // 隐藏其他
              this.ExitUIFormsAndDisplayOther(uiId);
              break;

            case UIFormShowMode.Independent:
              this.ExitIndependentForms(uiId);
              break;
          } // 判断是否销毁该窗体


          if (config.closeAndDestory == 1) {
            this.destoryForm(baseUIForm, uiId);
          }
        }
        /**
         * 从全部的UI窗口中加载, 并挂载到结点上
         */
        ;

        _proto.LoadFormsToAllUIFormsCatch = function LoadFormsToAllUIFormsCatch(uiId, call) {
          var baseUIResult = this._MapAllUIForms[uiId];

          if (baseUIResult == null) {
            //加载指定名称的“UI窗体”
            this.LoadUIForm(uiId, function (res) {
              call && call(res);
            });
            return;
          }

          call && call(baseUIResult);
        }
        /**
         * 从resources中加载
         * @param uiFormName 
         */
        ;

        _proto.LoadUIForm = function LoadUIForm(uiId, call) {
          var _this4 = this;

          var config = UIConfigData[uiId];
          var strUIFormPath = config.script;

          if (strUIFormPath == "" || strUIFormPath == null) {
            return;
          }

          Loader.loadBundle(config.bundle, function () {
            Loader.loadBundleRes(config.bundle, config.prefab, function (res) {
              if (!res) {
                console.error("要显示的界面预制不存在：", strUIFormPath);
                call && call(null);
                return;
              }

              var node = instantiate(res);
              var baseUIForm = node.getComponent(BaseUIForm);

              if (baseUIForm == null) {
                call && call(null);
                return;
              }

              node.active = false;

              switch (config.layer) {
                case UIFormType.Normal:
                  UIManager.GetInstance()._NoNormal.addChild(node);

                  break;

                case UIFormType.Fixed:
                  UIManager.GetInstance()._NoFixed.addChild(node);

                  break;

                case UIFormType.PopUp:
                  UIManager.GetInstance()._NoPopUp.addChild(node);

                  break;

                case UIFormType.Independent:
                  UIManager.GetInstance()._NoIndependent.addChild(node);

                  break;
              }

              _this4._MapAllUIForms[uiId] = baseUIForm; // 初始化窗体名称

              baseUIForm.UIFormName = uiId;
              call && call(baseUIForm);
            }, Prefab, true);
          }, true);
        }
        /**
         * 清除栈内所有窗口
         */
        ;

        _proto.ClearStackArray = function ClearStackArray() {
          if (this._StaCurrentUIForms != null && this._StaCurrentUIForms.length >= 1) {
            this._StaCurrentUIForms = [];
            return true;
          }

          return false;
        }
        /**
         * 关闭栈顶窗口
         */
        ;

        _proto.CloseStackTopUIForm = function CloseStackTopUIForm() {
          if (this._StaCurrentUIForms != null && this._StaCurrentUIForms.length >= 1) {
            var uiFrom = this._StaCurrentUIForms[this._StaCurrentUIForms.length - 1];

            if (uiFrom.MaskType.ClickMaskClose) {
              uiFrom.CloseUIForm();
            }
          }
        }
        /**
         * 加载到缓存中, 
         * @param uiFormName 
         */
        ;

        _proto.LoadUIToCurrentCache = function LoadUIToCurrentCache(uiId, obj) {
          var baseUIForm = null;
          var baseUIFormFromAllCache = null;
          baseUIForm = this._MapCurrentShowUIForms[uiId];
          if (baseUIForm != null) return; // 要加载的窗口正在显示

          baseUIFormFromAllCache = this._MapAllUIForms[uiId];

          if (baseUIFormFromAllCache != null) {
            baseUIFormFromAllCache.__preInit(obj);

            this._MapCurrentShowUIForms[uiId] = baseUIFormFromAllCache;
            baseUIFormFromAllCache.DisPlay();
          }
        }
        /**
         * 加载到栈中
         * @param uiFormName 
         */
        ;

        _proto.PushUIFormToStack = function PushUIFormToStack(uiId, obj) {
          if (this._StaCurrentUIForms.length > 0) {
            var topUIForm = this._StaCurrentUIForms[this._StaCurrentUIForms.length - 1];
            topUIForm.Freeze();
          }

          var baseUIForm = this._MapAllUIForms[uiId];
          if (baseUIForm == null) return;

          baseUIForm.__preInit(obj); // 加入栈中, 同时设置其zIndex 使得后进入的窗体总是显示在上面


          this._StaCurrentUIForms.push(baseUIForm);

          baseUIForm.node.setSiblingIndex(this._StaCurrentUIForms.length);
          baseUIForm.DisPlay();
        }
        /**
         * 加载时, 关闭其他窗口
         */
        ;

        _proto.EnterUIFormsAndHideOther = function EnterUIFormsAndHideOther(uiId, obj) {
          var _this5 = this;

          var baseUIForm = this._MapCurrentShowUIForms[uiId];
          if (baseUIForm != null) return; // 隐藏其他窗口 

          for (var _key2 in this._MapCurrentShowUIForms) {
            this._MapCurrentShowUIForms[_key2].Hiding();

            this._MapCurrentShowUIForms[_key2] = null;
            delete this._MapCurrentShowUIForms[_key2];
          }

          this._StaCurrentUIForms.forEach(function (uiForm) {
            uiForm.Hiding();
            _this5._MapCurrentShowUIForms[uiForm.UIFormName] = null;
            delete _this5._MapCurrentShowUIForms[uiForm.UIFormName];
          });

          var baseUIFormFromAll = this._MapAllUIForms[uiId];
          if (baseUIFormFromAll == null) return;

          baseUIFormFromAll.__preInit(obj);

          this._MapCurrentShowUIForms[uiId] = baseUIFormFromAll;
          baseUIFormFromAll.DisPlay();
        }
        /** 加载到独立map中 */
        ;

        _proto.LoadUIFormsToIndependent = function LoadUIFormsToIndependent(uiId, obj) {
          var baseUIForm = this._MapAllUIForms[uiId];
          if (baseUIForm == null) return;

          baseUIForm.__preInit(obj);

          this._MapIndependentForms[uiId] = baseUIForm;
          baseUIForm.DisPlay();
        }
        /**
         * --------------------------------- 关闭窗口 --------------------------
         */

        /**
         * 关闭一个UIForm
         * @param uiFormName 
         */
        ;

        _proto.ExitUIForms = function ExitUIForms(uiId) {
          var baseUIForm = this._MapAllUIForms[uiId];
          if (baseUIForm == null) return;
          baseUIForm.Hiding();
          this._MapCurrentShowUIForms[uiId] = null;
          delete this._MapCurrentShowUIForms[uiId];
        };

        _proto.PopUIForm = function PopUIForm() {
          if (this._StaCurrentUIForms.length >= 2) {
            var topUIForm = this._StaCurrentUIForms.pop();

            topUIForm.Hiding();
            topUIForm = this._StaCurrentUIForms[this._StaCurrentUIForms.length - 1];
            topUIForm.ReDisPlay();
          } else if (this._StaCurrentUIForms.length >= 1) {
            var _topUIForm = this._StaCurrentUIForms.pop();

            _topUIForm.Hiding();
          }
        };

        _proto.ExitUIFormsAndDisplayOther = function ExitUIFormsAndDisplayOther(uiId) {
          var baseUIForm = this._MapCurrentShowUIForms[uiId];
          if (baseUIForm == null) return;
          baseUIForm.Hiding();
          this._MapCurrentShowUIForms[uiId] = null;
          delete this._MapCurrentShowUIForms[uiId];
        };

        _proto.ExitIndependentForms = function ExitIndependentForms(uiId) {
          var baseUIForm = this._MapAllUIForms[uiId];
          if (baseUIForm == null) return;
          baseUIForm.Hiding();
          this._MapIndependentForms[uiId] = null;
          delete this._MapIndependentForms[uiId];
        }
        /** 销毁 */
        ;

        _proto.destoryForm = function destoryForm(baseUIForm, uiId) {
          baseUIForm.node.destroy(); // 从allmap中删除

          this._MapAllUIForms[uiId] = null;
          delete this._MapAllUIForms[uiId];
        };

        _proto.showTouchMask = function showTouchMask(count) {
          this._NoLoadMask.active = true;
        };

        _proto.hideTouchMask = function hideTouchMask(count) {
          this._NoLoadMask.active = false;
        };

        _proto.onDisable = function onDisable() {
          GEventManager.off(Event_Name.SHOWTOUCHMASK, this.showTouchMask, this);
          GEventManager.off(Event_Name.HIDETOUCHMASK, this.hideTouchMask, this);
        } // update (dt) {}
        ;

        return UIManager;
      }(Component), _class2._Instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMaskManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SysDefine.ts', './UIMaskScript.ts', './BaseUIForm.ts'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, _inheritsLoose, cclegacy, _decorator, Node, UITransform, UIOpacity, find, director, Director, Sprite, Component, SysDefine, UIMaskScript, BaseUIForm;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      find = module.find;
      director = module.director;
      Director = module.Director;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      SysDefine = module.SysDefine;
    }, function (module) {
      UIMaskScript = module.default;
    }, function (module) {
      BaseUIForm = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "d960fusMGtLTJ7oASQqiIkn", "UIMaskManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIMaskManager = exports('default', (_dec = ccclass('UIMaskManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMaskManager, _Component);

        function UIMaskManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.uiMaskScript = null;
          _this.maskTexture = null;
          return _this;
        }

        UIMaskManager.getInstance = function getInstance() {
          var _this2 = this;

          if (this.instance == null) {
            this.instance = find(SysDefine.SYS_UIMASK_NAME).addComponent(this);
            director.once(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
              _this2.instance = null;
            });
          }

          return this.instance;
        };

        var _proto2 = UIMaskManager.prototype;
        /** 添加mask, 这个时候会阻断点击事件 */

        _proto2.addMaskWindow = function addMaskWindow(parent) {
          if (parent.getChildByName(SysDefine.SYS_MASK_NODE) || !parent.getComponent(BaseUIForm)) {
            return;
          }

          var textuer = this.getComponent(Sprite).spriteFrame;
          this.uiMaskScript = MaskNodePool.getInstance().get(parent, textuer);
        }
        /** 为mask添加颜色 */
        ;

        _proto2.showMask = function showMask(lucenyType, isEasing, time) {
          this.uiMaskScript.showMaskUI(lucenyType, time, isEasing);
        }
        /** 去掉mask */
        ;

        _proto2.removeMaskWindow = function removeMaskWindow(parent) {
          MaskNodePool.getInstance().put(parent);
        };

        return UIMaskManager;
      }(Component), _class2.instance = null, _class2)) || _class));
      /** 结点池 */

      var MaskNodePool = exports('MaskNodePool', /*#__PURE__*/function () {
        function MaskNodePool() {
          this.pool = [];
        }

        MaskNodePool.getInstance = function getInstance() {
          if (this.instance == null) {
            this.instance = new MaskNodePool();
          }

          return this.instance;
        };

        var _proto = MaskNodePool.prototype;

        _proto.init = function init(texture) {
          for (var i = 0; i < 3; i++) {
            var com = new Node(SysDefine.SYS_MASK_NODE).addComponent(UIMaskScript);
            com.addComponent(UITransform);
            com.addComponent(UIOpacity);
            com.init(texture);
            this.pool.push(com);
          }
        }
        /** 释放一个 */
        ;

        _proto.get = function get(parent, texture) {
          if (this.pool.length <= 0) {
            this.init(texture);
          }

          var com = this.pool.pop();
          com.reUse(parent.getComponent(BaseUIForm).UIFormName);
          parent.insertChild(com.node, 0);
          return com;
        }
        /** 回收结点 */
        ;

        _proto.put = function put(parent) {
          var node = parent.getChildByName(SysDefine.SYS_MASK_NODE);

          if (!node || !node.getComponent(UIMaskScript)) {
            return false;
          }

          node.removeFromParent();
          var com = node.getComponent(UIMaskScript);
          com.unUse();
          this.pool.push(com);
          return true;
        }
        /** 清除结点池 */
        ;

        _proto.clear = function clear() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.pool), _step; !(_step = _iterator()).done;) {
            var com = _step.value;
            com.unUse();
          }

          this.pool = [];
        };

        return MaskNodePool;
      }());
      MaskNodePool.instance = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMaskScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager.ts', './SysDefine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, UIOpacity, tween, Component, view, UITransform, Button, Sprite, Color, UIManager, UIFormLucenyType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
      view = module.view;
      UITransform = module.UITransform;
      Button = module.Button;
      Sprite = module.Sprite;
      Color = module.Color;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      UIFormLucenyType = module.UIFormLucenyType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "8c747L1GJ5MhZtILSqmnEYa", "UIMaskScript", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIMaskScript = exports('default', (_dec = ccclass('UIMaskScript'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMaskScript, _Component);

        function UIMaskScript() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.UIFormName = void 0;
          return _this;
        }

        var _proto = UIMaskScript.prototype;
        /**
         * 初始化
         */

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(texture) {
            var maskTexture, size, transform, sprite;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    maskTexture = texture;
                    size = view.getVisibleSize();
                    transform = this.node.getComponent(UITransform);
                    transform.height = size.height;
                    transform.width = size.width;
                    this.node.addComponent(Button);
                    this.node.on('click', this._clickMaskWindow, this);
                    sprite = this.node.addComponent(Sprite);
                    sprite.sizeMode = Sprite.SizeMode.CUSTOM;
                    sprite.spriteFrame = maskTexture;
                    this.node.getComponent(Sprite).color = new Color(0, 0, 0);
                    this.node.getComponent(UIOpacity).opacity = 100;
                    this.node.layer = 33554432;
                    this.node.active = true;

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init(_x) {
            return _init.apply(this, arguments);
          }

          return init;
        }()
        /** 使用 */
        ;

        _proto.reUse = function reUse(uiFormName) {
          this.UIFormName = uiFormName;
        }
        /** 释放 */
        ;

        _proto.unUse = function unUse() {
          this.UIFormName = 0;
          this.node.getComponent(UIOpacity).opacity = 0;
          this.node.active = true;
          tween(this.node).stop();
        } // 
        ;

        _proto.showMaskUI = function showMaskUI(lucenyType, time, isEasing) {
          if (isEasing === void 0) {
            isEasing = true;
          }

          var o = 0;

          switch (lucenyType) {
            case UIFormLucenyType.Lucency:
              o = 0;
              break;

            case UIFormLucenyType.ImPenetrable:
              o = 150;
              break;

            case UIFormLucenyType.Translucence:
              o = 200;
              break;

            case UIFormLucenyType.Pentrate:
              this.node.active = false;
              break;
          }

          if (isEasing) {
            // tween(this.node)
            //     .to(time, {
            //         'onUpdate': (target: Vec3, ratio: number) => {
            //             this.node.getComponent(UIOpacity).opacity = ratio * o;
            //         }
            //     })
            //     .start();
            this.node.getComponent(UIOpacity).opacity = o;
          } else {
            this.node.getComponent(UIOpacity).opacity = o;
          }
        };

        _proto._clickMaskWindow = function _clickMaskWindow() {
          UIManager.GetInstance().CloseStackTopUIForm();
        };

        return UIMaskScript;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VivoADApi.ts", ['cc', './AdsIdConfig.ts', './AdManager.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, assetManager, director, Node, UITransform, Sprite, SpriteFrame, Widget, view, Label, AdsIdConfig, AdType, AdManager;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      director = module.director;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Widget = module.Widget;
      view = module.view;
      Label = module.Label;
    }, function (module) {
      AdsIdConfig = module.default;
      AdType = module.AdType;
    }, function (module) {
      AdManager = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "55e36yT/vtBe7QOW6+S3rY3", "VivoADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // 01 宽范围 23宽高比  原生自渲染

      var ADNewNativeAry = [[90, 270, 180, 180], [720, 1080, 1080, 210], [520, 1080, 780, 640], [520, 1080, 780, 580], [520, 1080, 780, 640], [520, 1080, 780, 440], [520, 1080, 780, 800], [90, 270, 180, 180], [720, 1080, 1080, 330], [720, 1080, 1080, 246], [520, 1080, 780, 640]]; // 01 宽范围 23宽高比  原生模板

      var VivoADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function VivoADApi() {
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.PassiveVideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.TIMingData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.AdCustomBannerData = null;
          this.AdCustomTypeData = [];
          this.ADNewNativeAdData = null;
          this.ADNewNativeTypeData = [];
          this.ADNewConfig = void 0;
          this.qg = window['qg'];
          this.AdGroup = 0;
          this.systemBannerAd = null;
          this.loadSucc_SystemBanner = false;
          this.NUM_BannerUpdateTime = 30;
          this.interval_updateBanner = null;
          this.systemIntersAd = null;
          this.loadSucc_SystemInters = false;
          this.customNewNativeAd = null;
          this.customNewNativeTypeAd = [];
          this.customIntersAd = null;
          this.loadSucc_CuctomInters = false;
          this.CuctomIntervalTime = true;
          this.customBannerAd = null;
          this.CustomType12 = [];
          this.rewardedVideoAd = null;
          this.loadSucc_Video = false;
          this.callback_Video = null;
          this.rewardedPassiveVideoAd = null;
          this.loadSucc_PassiveVideo = false;
          this.callback_PassiveVideo = null;
          this.nativeRes = null;
          this.loadNativeRes = false;
          this.nativeAd = null;
          this.nativeBannerInfo = null;
          this.loadSucc_NativeBanner = false;
          this.isShow_NativeBanner = false;
          this.node_nativeBanner = null;
          this.nativeImageAd = null;
          this.nativeImageInfo = null;
          this.loadSucc_NativeImage = false;
          this.isShow_NativeImage = false;
          this.nativeIconAd = null;
          this.nativeIconInfo = null;
          this.loadSucc_NativeIcon = false;
          this.isShow_NativeIcon = false;
          this.navigateBoxPortalAd = null;
          this.loadSucc_NavigateBoxPortal = false;
          this.navigateBoxBannerAd = null;
          this.loadSucc_NavigateBoxBanner = false;
          this.temp_hasShowBanner = false;
          this.isShow_NavigateSettle = false;
          this.systemInfo = null;
          this.BannerVendor_Pos = [];
          this.VideoVendor_Pos = [];
          this.PassiveVideoVendor_Pos = [];
          this.InsertAdVendor_Pos = [];
          this.CustomBannerVendor_Pos = [];
          this.videoPath = void 0;
          this.clipIndexList = [];
          this.ADNewNativeTypeVendor_Pos = [];
          this.ADNewNativeType_b = [];
          this.ADNewNativeType_Call = [];
          this.isShowADNewNativeType12 = false;
          this.CustomTypeVendor_Pos = [];
        }

        var _proto = VivoADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.qg !== null && this.qg !== undefined) {
            this.systemInfo = this.qg.getSystemInfoSync();
            console.log('MINIGAME ===> 设备信息.systemInfo===>', this.systemInfo);
            this.createAd();
          } else {
            this.qg = null;
          }

          _callback && _callback();
          console.log('MINIGAME ===> Vivo ===================> onInit  ok');
        };

        _proto.createAd = function createAd() {
          var _this = this; //lsfcs .enabled  拿掉了 先测试啊
          // if (this.SystemBannerData && this.SystemBannerData.enabled && this.SystemBannerData.vendor_position != '') this.createSystemBanner();


          if (this.SystemIntersData && this.SystemIntersData && this.SystemIntersData.vendor_position != '') this.createInsertAd(); //.enabled

          if (this.AdCustomIntersData && this.AdCustomIntersData && this.AdCustomIntersData.vendor_position != '') this.createNativeCuston();
          if (this.ADNewNativeTypeData[1] && this.ADNewNativeTypeData[1] && this.ADNewNativeTypeData[1].vendor_position != '') this.createADNewNativeType12(1); //同类型只能显示一个

          if (this.ADNewNativeTypeData[2] && this.ADNewNativeTypeData[2] && this.ADNewNativeTypeData[2].vendor_position != '') this.createADNewNativeType12(2); // if (this.ADNewNativeAdData && this.ADNewNativeAdData && this.ADNewNativeAdData.vendor_position != '') this.createNewNativeCuston();

          if (this.VideoData && this.VideoData.vendor_position != '') this.createVideo();

          if (this.PassiveVideoData && this.PassiveVideoData.vendor_position != '') {
            setTimeout(function () {
              _this.createPassiveVideo();
            }, 5 * 1000);
          }

          if (this.JGGBoxData && this.JGGBoxData && this.JGGBoxData.vendor_position != '') this.createNavigateBoxPortal();
          if (this.BlockData && this.BlockData && this.BlockData.vendor_position != '') this.createNavigateBoxBanner(); //暂无原生自定义广告
          // this.loadNativeBannerRes();

          if (this.NativeBannerData && this.NativeBannerData && this.NativeBannerData.vendor_position != '') this.createNativeBanner();
          if (this.NativeIntersData && this.NativeIntersData && this.NativeIntersData.vendor_position != '') this.createNativeImage();
          if (this.NativeIconData && this.NativeIconData && this.NativeIconData.vendor_position != '') this.createNativeIcon();
        };

        _proto.setGroup = function setGroup(group) {
          this.AdGroup = group;
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {};

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createSystemBanner = function createSystemBanner() {
          var _this2 = this; // console.log("MINIGAME ===> ", "Vivo 系统banner加载");


          this.systemBannerAd = this.qg.createBannerAd({
            posId: this.SystemBannerData.vendor_position,
            style: {}
          });
          this.systemBannerAd.onLoad(function () {// this.loadSucc_SystemBanner = true;
            // console.log("MINIGAME ===> ", "VIVO 系统banner加载成功");
          }); // 监听系统banner错误

          this.systemBannerAd.onError(function (err) {// console.log("MINIGAME ===> ", "Vivo 系统banner加载/展示失败：", JSON.stringify(err));
          }); // 监听系统banner隐藏

          this.systemBannerAd.onClose(function () {
            // 每个场景用户关闭就不再出现
            _this2.hideBanner(); // 5s


            setTimeout(function () {
              _this2.showBanner();
            }, 5 * 1000);
          });
        }
        /**
         * 展示系统banner
         */
        ;

        _proto.showBanner = function showBanner(playSuccessCall) {
          if (AdManager.getInstance().playAbnormalAD()) {
            // 非屏蔽
            if (!this.SystemBannerData) {
              return;
            } // 循环广告位


            if (!this.BannerVendor_Pos || this.BannerVendor_Pos.length == 0) {
              this.BannerVendor_Pos = [];
              this.BannerVendor_Pos = AdsIdConfig.getVendor_posAry(this.SystemBannerData.vendor_position); //'123,aaa,456'); //
            }

            var vendor_pos = this.BannerVendor_Pos.shift();

            if (this.systemBannerAd) {
              this.systemBannerAd.offLoad(null);
              this.systemBannerAd.offError(null);
              this.systemBannerAd.destroy();
              this.systemBannerAd = null;
            }

            this.systemBannerAd = this.qg.createBannerAd({
              posId: vendor_pos,
              style: {}
            });
            this.systemBannerAd.onLoad(function () {}); // 监听系统banner错误

            this.systemBannerAd.onError(function (err) {
              if (playSuccessCall) {
                playSuccessCall(false);
                playSuccessCall = null;
              }
            });
            this.systemBannerAd.show().then(function () {
              console.log('banner广告展示完成');

              if (playSuccessCall) {
                playSuccessCall(true);
                playSuccessCall = null;
              }
            })["catch"](function (err) {
              console.log('banner广告展示失败', JSON.stringify(err));

              if (playSuccessCall) {
                playSuccessCall(false);
                playSuccessCall = null;
              }
            });
          }
        };

        _proto.hideBanner = function hideBanner() {
          this.hideSystemBanner();
          this.hideNativeBanner();
          if (this.interval_updateBanner) clearInterval(this.interval_updateBanner);
        }
        /**
         * 隐藏系统banner
         */
        ;

        _proto.hideSystemBanner = function hideSystemBanner() {
          if (this.systemBannerAd) {
            // this.systemBannerAd.offHide();
            this.systemBannerAd.hide();
          }
        }
        /**
         * 刷新banner
         */
        ;

        _proto.updateBanner = function updateBanner() {
          var _this3 = this;

          if (this.interval_updateBanner) clearInterval(this.interval_updateBanner); // 刷新广告条

          this.interval_updateBanner = setInterval(function () {
            if (_this3.loadSucc_NativeBanner) {
              _this3.updateNativeBanner();
            } else if (_this3.loadSucc_SystemBanner) {
              _this3.updateSystemBanner();
            }
          }, this.NUM_BannerUpdateTime * 1000);
        }
        /**
         * 刷新系统banner
         */
        ;

        _proto.updateSystemBanner = function updateSystemBanner() {// this.hideSystemBanner();
          // this.showSystemBanner();
        }
        /** */
        ;

        _proto.updateNativeBanner = function updateNativeBanner() {// this.hideSystemBanner();
          // this.showNativeBanner();
        }
        /**激励视频 */
        ;

        _proto.createVideo = function createVideo() {
          var _this4 = this;

          if (this.qg !== null && this.qg !== undefined) {
            /**创建rewardedVideoAd 对象*/
            console.log("MINIGAME ===> Vivo平台 创建激励视频广告"); // 循环广告位

            if (!this.VideoVendor_Pos || this.VideoVendor_Pos.length == 0) {
              this.VideoVendor_Pos = [];
              this.VideoVendor_Pos = AdsIdConfig.getVendor_posAry(this.VideoData.vendor_position); //'123,aaa,456'); //
            }

            console.log(this.VideoVendor_Pos);
            var vendor_pos = this.VideoVendor_Pos.shift();
            console.log(vendor_pos);

            if (this.rewardedVideoAd) {
              // 销毁之前的  重新创建  广告位轮动了，要重新创建
              this.rewardedVideoAd.offLoad(null);
              this.rewardedVideoAd.offError(null);
              this.rewardedVideoAd.offClose(null);
              this.rewardedVideoAd.destroy();
              this.rewardedVideoAd = null;
            }

            this.rewardedVideoAd = this.qg.createRewardedVideoAd({
              posId: vendor_pos //this.VideoData.vendor_position

            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('MINIGAME ===>  激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
              _this4.loadSucc_Video = false;

              if (_this4.callback_Video) {
                _this4.callback_Video(false, '视频加载失败 code:' + err.code);

                _this4.callback_Video = null;
              }

              setTimeout(function () {
                _this4.rewardedVideoAd && _this4.rewardedVideoAd.load();
              }, 10 * 1000);
            });
            this.rewardedVideoAd.onLoad(function () {
              console.log("MINIGAME ===> 激励视频广告 加载成功");
              _this4.loadSucc_Video = true;
            }); //监听视频广告播放完成

            this.rewardedVideoAd.onClose(function (res) {
              if (res.isEnded) {
                // console.log("MINIGAME ===> ", "Vivo 激励视频广告完成，发放奖励");
                if (_this4.callback_Video) {
                  _this4.callback_Video(true);

                  _this4.callback_Video = null;
                }
              } else {
                // console.log("MINIGAME ===> ", "Vivo 激励视频广告关闭，不发放奖励");
                if (_this4.callback_Video) {
                  _this4.callback_Video(false);

                  _this4.callback_Video = null;
                }
              }

              _this4.loadSucc_Video = false;
              setTimeout(function () {
                // this.rewardedVideoAd && this.rewardedVideoAd.load();
                _this4.createVideo();
              }, 100);
            });
          }
        };

        _proto.showVideo = function showVideo(_successCallback) {
          console.log(this.rewardedVideoAd);
          console.log(this.loadSucc_Video);
          /**确保video正常创建并已经拉取到数据 */

          if (this.rewardedVideoAd && this.loadSucc_Video) {
            this.callback_Video = _successCallback;
            this.rewardedVideoAd.show();
            this.loadSucc_Video = false;
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            _successCallback(false);
          }
        };

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {}
        /**被动 激励视频 */
        ;

        _proto.createPassiveVideo = function createPassiveVideo() {
          var _this5 = this;

          if (this.qg !== null && this.qg !== undefined) {
            // 循环广告位
            if (!this.PassiveVideoVendor_Pos || this.PassiveVideoVendor_Pos.length == 0) {
              this.PassiveVideoVendor_Pos = [];
              this.PassiveVideoVendor_Pos = AdsIdConfig.getVendor_posAry(this.PassiveVideoData.vendor_position); //'123,aaa,456'); //
            }

            console.log(this.PassiveVideoVendor_Pos);
            var vendor_pos = this.PassiveVideoVendor_Pos.shift();

            if (this.rewardedPassiveVideoAd) {
              // 销毁之前的  重新创建  广告位轮动了，要重新创建
              this.rewardedPassiveVideoAd.offLoad(null);
              this.rewardedPassiveVideoAd.offError(null);
              this.rewardedPassiveVideoAd.offClose(null);
              this.rewardedPassiveVideoAd.destroy();
              this.rewardedPassiveVideoAd = null;
            }

            this.rewardedPassiveVideoAd = this.qg.createRewardedVideoAd({
              posId: vendor_pos //this.PassiveVideoData.vendor_position

            });
            this.rewardedPassiveVideoAd.onError(function (err) {
              _this5.loadSucc_PassiveVideo = false;

              if (_this5.callback_PassiveVideo) {
                _this5.callback_PassiveVideo(2, '被动 视频加载失败 code:' + err.code);

                _this5.callback_PassiveVideo = null;
              }

              setTimeout(function () {
                _this5.rewardedPassiveVideoAd && _this5.rewardedPassiveVideoAd.load();
              }, 10 * 1000);
            });
            this.rewardedPassiveVideoAd.onLoad(function () {
              console.log("MINIGAME ===> 被动 激励视频广告 加载成功");
              _this5.loadSucc_PassiveVideo = true;
            }); //监听视频广告播放完成

            this.rewardedPassiveVideoAd.onClose(function (res) {
              if (res.isEnded) {
                if (_this5.callback_PassiveVideo) {
                  _this5.callback_PassiveVideo(1);

                  _this5.callback_PassiveVideo = null;
                }
              } else {
                if (_this5.callback_PassiveVideo) {
                  _this5.callback_PassiveVideo(2);

                  _this5.callback_PassiveVideo = null;
                }
              }

              _this5.loadSucc_PassiveVideo = false;
              setTimeout(function () {
                // this.rewardedPassiveVideoAd && this.rewardedPassiveVideoAd.load();
                // 重新创建
                _this5.createPassiveVideo();
              }, 100);
            });
          }
        };

        _proto.showPassiveVideo = function showPassiveVideo(_successCallback) {
          var _this6 = this;

          console.log(this.rewardedPassiveVideoAd);
          console.log(this.loadSucc_PassiveVideo);
          /**确保video正常创建并已经拉取到数据 */

          if (this.rewardedPassiveVideoAd && this.loadSucc_PassiveVideo) {
            this.callback_PassiveVideo = _successCallback;
            this.rewardedPassiveVideoAd.show().then(function () {// console.log('激励视频广告展示完成');
            })["catch"](function (err) {
              console.log('激励视频广告展示失败', JSON.stringify(err));

              if (_this6.callback_PassiveVideo) {
                console.log('激励视频广告展示失败 code:' + err.code);

                _this6.callback_PassiveVideo(2, '被动 视频加载失败 code:' + err.code);

                _this6.callback_PassiveVideo = null;
              }
            });
            this.loadSucc_PassiveVideo = false;
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            _successCallback(false);
          }
        };

        _proto.showPassiveVideoAward = function showPassiveVideoAward() {};

        _proto.showPassiveVideoFail = function showPassiveVideoFail() {} // 插屏
        ;

        _proto.createInsertAd = function createInsertAd() {
          var _this7 = this; // console.log("MINIGAME ===> ", "--createSystemInters--");


          if (!this.SystemIntersData) {
            return;
          }

          if (this.systemIntersAd) {
            this.systemIntersAd.offError(null);
            this.systemIntersAd.offClose(null);
            this.systemIntersAd.offLoad(null);
          } // 循环广告位


          if (!this.InsertAdVendor_Pos || this.InsertAdVendor_Pos.length == 0) {
            this.InsertAdVendor_Pos = [];
            this.InsertAdVendor_Pos = AdsIdConfig.getVendor_posAry(this.SystemIntersData.vendor_position); //'123,aaa,456'); //
          }

          var vendor_pos = this.InsertAdVendor_Pos.shift();
          this.systemIntersAd = this.qg.createInterstitialAd({
            posId: vendor_pos
          }); //监听插屏加载完成

          this.systemIntersAd.onLoad(function () {
            // console.log("MINIGAME ===> ", "VIVO 系统插屏广告加载完成")
            _this7.loadSucc_SystemInters = true;
          }); //监听插屏广告错误

          this.systemIntersAd.onError(function (err) {
            _this7.loadSucc_SystemInters = false;
            setTimeout(function () {
              _this7.createInsertAd();
            }, 10 * 1000);
          }); //监听插屏广告关闭

          this.systemIntersAd.onClose(function () {
            // console.log("MINIGAME ===> ", "VIVO 系统插屏广告关闭");
            _this7.loadSucc_SystemInters = false; // 系统插屏关闭后5s后再次load

            setTimeout(function () {
              _this7.createInsertAd(); //原生自渲染2 icon
              // this.showNewNativeAd();


              _this7.showBanner();
            }, 5 * 1000);
          });
        }
        /**
         * 展示系统插屏
         */
        ;

        _proto.showSystemInters = function showSystemInters(playSuccessCall) {
          if (this.systemIntersAd && this.loadSucc_SystemInters) {
            // console.log("MINIGAME ===> ", "VIVO showSystemInters==================");
            this.systemIntersAd.show().then(function () {
              // console.log("MINIGAME ===> ", "VIVO 系统插屏广告展示成功==================");
              if (playSuccessCall) {
                playSuccessCall(true);
                playSuccessCall = null;
              }
            })["catch"](function (err) {
              // console.log("MINIGAME ===> ", "VIVO 系统插屏展示错误:" + JSON.stringify(err));
              if (playSuccessCall) {
                playSuccessCall(false);
                playSuccessCall = null;
              }
            });
          } //  else {
          //   this.createInsertAd();
          // }

        };

        _proto.showInsertAd = function showInsertAd(playSuccessCall) {
          // if (this.loadSucc_CuctomInters && this.CuctomIntervalTime) {
          //     let time = this.AdCustomIntersData.ad_interval;
          //     this.showCustomInters();
          //     this.CuctomIntervalTime = false;
          //     setTimeout(() => {
          //         this.CuctomIntervalTime = true;
          //     }, time * 1000);
          //     return;
          // }
          if (this.loadSucc_SystemInters) {
            this.showSystemInters(playSuccessCall);
          }
        }
        /**
         * 创建 原生模板  插屏广告
         */
        ;

        _proto.createNativeCuston = function createNativeCuston() {
          var _this8 = this;

          if (!this.AdCustomIntersData) {
            console.log('VIVO 原生模板广告 createNativeCuston  没数据');
            return;
          }

          if (this.qg.createCustomAd) {
            console.log('MINIGAME ===> ', 'VIVO 创建原生模板广告');
            this.customIntersAd = this.qg.createCustomAd({
              posId: this.AdCustomIntersData.vendor_position,
              //竖屏设置
              style: {
                left: 0,
                // top: 720
                gravity: 'center'
              }
            });
            this.customIntersAd.onLoad(function () {
              _this8.loadSucc_CuctomInters = true;
            });
            this.customIntersAd.onError(function (err) {
              _this8.loadSucc_CuctomInters = false;
              setTimeout(function () {
                _this8.createNativeCuston();
              }, 20 * 1000);
            }); //监听插屏广告关闭

            this.customIntersAd.onClose(function () {
              _this8.loadSucc_CuctomInters = false; // 系统插屏关闭后2s后再次load

              setTimeout(function () {
                _this8.createNativeCuston(); //原生自渲染2 icon
                // this.showNewNativeAd();


                _this8.showBanner();
              }, 2 * 1000);
            });
          }
        }
        /**
         * 展示原生模板 插屏
         */
        ;

        _proto.showCustomInters = function showCustomInters() {
          if (this.customIntersAd && this.loadSucc_CuctomInters && this.AdCustomIntersData) {
            // if (this.customIntersAd) {
            var time = this.AdCustomIntersData.day_limits; // setTimeout(() => {

            this.customIntersAd.show().then(function () {// console.log("MINIGAME ===> ", "VIVO 原生模板插屏广告展示成功==================");
            })["catch"](function (err) {// console.log("MINIGAME ===> ", "VIVO 原生模板插屏展示错误:" + JSON.stringify(err));
            }); // }, time * 1000);
          }
        }
        /**
         * 显示原生模板广告
         */
        ;

        _proto.showCustomAd = function showCustomAd() {
          this.showCustomInters();
        }
        /**
         * 隐藏原生模板广告
         */
        ;

        _proto.hideCustomAd = function hideCustomAd() {
          if (this.customIntersAd) {
            this.customIntersAd.hide();
          }
        }
        /**
         * 自渲染 的 banner  信息流banner
         * config  位置配置信息
         * playSuccessCall 回调兜底的
         */
        ;

        _proto.showCustomBanner = function showCustomBanner(playSuccessCall) {
          var _this9 = this;

          if (this.qg.createNewNativeAd) {
            console.log('MINIGAME ===> ', 'VIVO 原生自渲染2.0');

            if (!this.AdCustomBannerData) {
              return;
            }

            if (this.customNewNativeAd) {
              //自渲染2.0icon  自渲染1 2   只能同时存在一个
              // 自渲染icon  删除
              this.hideNewNativeAd();
              this.hideADNewNativeType12(1);
              this.hideADNewNativeType12(2);
            }

            var styleMy = {
              // gravity: 'left',
              left: 100,
              top: this.qg.getSystemInfoSync().screenHeight - 500
            }; // 位置配置. ToDo  配置无效啊

            var config = 'E|75|20|50|50'; // if (this.ADNewConfig && this.ADNewConfig[AdType.样式信息流banner]) {
            //   config = this.ADNewConfig[AdType.样式信息流banner].vendor_position;
            // }

            if (config != '') {
              styleMy = {};
              styleMy = AdsIdConfig.gePosAndWidthCfg(config, this.qg.getSystemInfoSync().screenWidth, this.qg.getSystemInfoSync().screenHeight, ADNewNativeAry[1]);
            }

            console.log(styleMy);
            console.log(JSON.stringify(styleMy));

            if (this.customBannerAd) {
              this.customBannerAd.offError(null);
              this.customBannerAd.destroy();
              this.customBannerAd = null;
            } // 循环广告位


            if (!this.CustomBannerVendor_Pos || this.CustomBannerVendor_Pos.length == 0) {
              this.CustomBannerVendor_Pos = [];
              this.CustomBannerVendor_Pos = AdsIdConfig.getVendor_posAry(this.AdCustomBannerData.vendor_position); //'123,aaa,456'); //
            }

            var vendor_pos = this.CustomBannerVendor_Pos.shift();
            this.customBannerAd = this.qg.createNewNativeAd({
              posId: vendor_pos //this.AdCustomBannerData.vendor_position

            });
            this.customBannerAd.onLoad(function (res) {
              console.log('原生自渲染2.0  信息流banner  广告加载完成-onload触发', JSON.stringify(res));
              var formType = res.adList[0].formType[1];

              if (!formType || formType !== 1) {
                return;
              }

              var sys = _this9.qg.getSystemInfoSync();

              if (res && res.adList && ADNewNativeAry[formType]) {
                if (config != '') {
                  styleMy = {};
                  styleMy = AdsIdConfig.gePosAndWidthCfg(config, sys.screenWidth, sys.screenHeight, ADNewNativeAry[formType]);
                }

                var b = {
                  adId: res.adList[0].adId,
                  formType: formType,
                  //res.adList[0].formType[0],
                  style: styleMy
                };

                _this9.customBannerAd.show(b).then(function () {
                  console.log('原生自渲染2.0  信息流banner  广告展示完成');

                  if (playSuccessCall) {
                    playSuccessCall(true);
                    playSuccessCall = null;
                  }
                })["catch"](function (err) {
                  console.log('原生自渲染2.0  信息流banner  广告展示失败', JSON.stringify(err));

                  if (playSuccessCall) {
                    playSuccessCall(false);
                    playSuccessCall = null;
                  }
                });
              }
            });
            this.customBannerAd.onClose(function () {
              console.log('原生自渲染2.0  信息流banner  广告关闭'); // setTimeout(() => {
              //   this.createNewNativeCuston();
              // }, 20 * 1000);
            });
            this.customBannerAd.onError(function (err) {
              console.log('原生自渲染2.0  信息流banner  广告加载失败', err); // setTimeout(() => {
              //   this.createNewNativeCuston();
              // }, 20 * 1000);

              if (playSuccessCall) {
                playSuccessCall(false);
                playSuccessCall = null;
              }
            });
            var num = this.AdCustomBannerData.ad_interval;

            if (!num || num == 0) {
              num = 20;
            } // setTimeout(() => {
            //   //刷新
            //   if (this.customBannerAd) this.showCustomBanner();
            // }, num * 1000);

          }
        };

        _proto.hideCustomBanner = function hideCustomBanner() {
          if (this.customBannerAd) {
            this.customBannerAd.hide();
            this.customBannerAd.offLoad();
            this.customBannerAd.offClose();
            this.customBannerAd.offError();
            this.customBannerAd.destroy();
            this.customBannerAd = null;
          }
        }
        /**
         * 创建互推盒子九宫格广告
         */
        ;

        _proto.createNavigateBoxPortal = function createNavigateBoxPortal() {
          var _this10 = this; // console.log("MINIGAME ===> ", "--createNavigateBoxPortal--");


          this.navigateBoxPortalAd = this.qg.createBoxPortalAd({
            posId: this.JGGBoxData.vendor_position,
            marginTop: 350
          }); // 监听互推盒子九宫格广告加载成功

          this.navigateBoxPortalAd.onLoad(function () {
            // console.log("MINIGAME ===> ", "Vivo 互推盒子九宫格广告加载完成");
            _this10.loadSucc_NavigateBoxPortal = true;
          }); // 监听互推盒子九宫格广告加载失败

          this.navigateBoxPortalAd.onError(function (err) {
            // console.log("MINIGAME ===> ", "Vivo 互推盒子九宫格广告加载/展示失败：", JSON.stringify(err));
            _this10.loadSucc_NavigateBoxPortal = false;
            setTimeout(function () {
              _this10.createNavigateBoxPortal();
            }, 60 * 1000);
          }); // 监听互推盒子九宫格广告关闭

          this.navigateBoxPortalAd.onClose(function () {
            // console.log("MINIGAME ===> ", "Vivo 互推盒子九宫格广告关闭");
            // // 关闭后再次加载互推盒子九宫格
            setTimeout(function () {
              _this10.createNavigateBoxPortal();
            }, 60 * 1000);
          });
        }
        /**
         * 显示互推九宫格广告
         */
        ;

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {
          if (this.loadSucc_NavigateBoxPortal) {
            this.hideBanner();
            this.navigateBoxPortalAd.show();
          }
        }
        /**
         * 创建互推盒子横幅广告
         */
        ;

        _proto.createNavigateBoxBanner = function createNavigateBoxBanner() {
          var _this11 = this;

          console.log('MINIGAME ===> ', '--createNavigateBoxBanner--');

          if (this.qg.createBoxBannerAd) {
            this.navigateBoxBannerAd = this.qg.createBoxBannerAd({
              posId: this.BlockData.vendor_position
            });
          } else {
            console.log('MINIGAME ===> ', '暂不支持互推盒子相关 API');
            return;
          } // 监听互推盒子九宫格广告加载成功


          this.navigateBoxBannerAd.onLoad(function () {
            console.log('MINIGAME ===> ', 'VIVO 互推盒子横幅广告加载完成');
            _this11.loadSucc_NavigateBoxBanner = true;
          }); // 监听互推盒子横幅广告加载失败

          this.navigateBoxBannerAd.onError(function (err) {
            _this11.loadSucc_NavigateBoxBanner = false;
            console.log('MINIGAME ===> ', 'VIVO 互推盒子横幅广告出错:', JSON.stringify(err));
            setTimeout(function () {
              _this11.createNavigateBoxBanner();
            }, 30 * 1000);
          });
          this.navigateBoxPortalAd.onShow(function (err) {
            _this11.hideBanner();
          }); //监听互推横幅广告关闭

          this.navigateBoxBannerAd.onClose(function () {
            _this11.isShow_NavigateSettle = false; // 如果banner在展示时被互推盒子九宫格关闭则再次showBanner

            _this11.temp_hasShowBanner && _this11.showBanner();
          });
        };

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {
          if (this.isShow_NavigateSettle) {
            console.log('MINIGAME ===> ', '已经调用过showNavigateBoxBanner,请勿重复调用');
            return;
          }

          console.log('MINIGAME ===> ', 'showNavigateBoxBanner=====================', this.loadSucc_NavigateBoxBanner);

          if (this.loadSucc_NavigateBoxBanner) {
            this.isShow_NavigateSettle = true;
            this.hideBanner();
            this.navigateBoxBannerAd.show();
          }
        };

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {
          if (this.isShow_NavigateSettle) {
            console.log('MINIGAME ===> ', 'hideNavigateBoxBanner=====================');
            this.isShow_NavigateSettle = false;

            if (this.navigateBoxBannerAd) {
              this.navigateBoxBannerAd.hide();
            }
          }
        }
        /**
         * 加载原生banner广告资源
         */
        ;

        _proto.loadNativeBannerRes = function loadNativeBannerRes() {
          console.log('MINIGAME ===> ', '--loadNativeBannerRes--');
          this.nativeRes = {
            NativeBannerBg: null,
            NativeBannerButton: null,
            NativeClose: null,
            NativeAdTip: null
          };
        };

        _proto.createNativeBanner = function createNativeBanner() {
          var _this12 = this;

          console.log('MINIGAME ===> 原生banner', '--createNativeBanner--');
          this.nativeAd = this.qg.createNativeAd({
            posId: this.NativeBannerData.vendor_position
          });
          this.nativeBannerInfo = {
            adId: null,
            title: null,
            desc: null,
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null
          };
          this.nativeAd.onLoad(function (res) {
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log('MINIGAME ===> ', 'Vivo原生banner广告列表为空 return');
              return;
            }

            console.log('MINIGAME ===> ', 'Vivo 原生banner广告加载成功：', JSON.stringify(res.adList[index]));
            if (res.adList[index].icon != '' && res.adList[index].imgUrlList.length > 0) ;
            _this12.nativeBannerInfo.adId = String(res.adList[index].adId);
            _this12.nativeBannerInfo.title = String(res.adList[index].title);
            _this12.nativeBannerInfo.desc = String(res.adList[index].desc);

            if (res.adList && res.adList[index].icon != '') {
              _this12.nativeBannerInfo.Native_icon_url = res.adList[index].icon;
              assetManager.loadRemote(String(res.adList[index].icon), function (err, texture) {
                _this12.nativeBannerInfo.Native_icon = texture;
              });
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this12.nativeBannerInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
              assetManager.loadRemote(String(res.adList[index].imgUrlList[0]), function (err, texture) {
                _this12.nativeBannerInfo.Native_BigImage = texture;
              });
            }

            _this12.loadSucc_NativeBanner = true;
          }); //监听原生广告加载错误

          this.nativeAd.onError(function (err) {
            console.log('MINIGAME ===> ', 'Vivo 原生banner广告加载失败：', JSON.stringify(err));
            setTimeout(function () {
              _this12.nativeAd.load();
            }, 20 * 1000);
          });
          this.nativeAd.load();
        }
        /**
         * 展示原生banner
         */
        ;

        _proto.showNativeBanner = function showNativeBanner() {
          var _this13 = this;

          if (this.isShow_NavigateSettle) {
            console.log('MINIGAME ===> ', 'Vivo 正在展示互推盒子 return');
            return;
          }

          this.isShow_NativeBanner = true;
          var scene = director.getScene(); //原生广告id

          var tempid = this.nativeBannerInfo.adId;
          this.reportNativeBannerShow(tempid);
          console.log('MINIGAME ===> 原生banner', 'showNativeBanner========================');
          this.node_nativeBanner = new Node('node_nativeBanner');
          this.node_nativeBanner.addComponent(UITransform);
          scene.getChildByName('Canvas').addChild(this.node_nativeBanner);
          this.node_nativeBanner.addComponent(Sprite);
          this.node_nativeBanner.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerBg);
          this.node_nativeBanner.addComponent(Widget);
          this.node_nativeBanner.getComponent(Widget).isAlignHorizontalCenter = true;
          this.node_nativeBanner.getComponent(Widget).isAlignBottom = true;
          this.node_nativeBanner.getComponent(Widget).bottom = 0;
          var canvasSize = view.getVisibleSize();

          if (canvasSize.width < canvasSize.height) {
            this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width;
            this.node_nativeBanner.getComponent(UITransform).height = canvasSize.width * 0.18;
          } else {
            this.node_nativeBanner.getComponent(UITransform).width = canvasSize.width / 2;
            this.node_nativeBanner.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).width * 0.18;
          }

          if (this.AdGroup != 0) this.node_nativeBanner.layer = this.AdGroup;
          this.node_nativeBanner.setSiblingIndex(999);
          this.node_nativeBanner.on(Node.EventType.TOUCH_START, function (event) {
            _this13.reportNativeBannerClick(tempid);
          }); // 广告

          var adTip = new Node('adTip');
          adTip.addComponent(UITransform);
          this.node_nativeBanner.addChild(adTip);
          adTip.addComponent(Sprite);
          adTip.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeAdTip);
          adTip.getComponent(UITransform).height = 0.2 * this.node_nativeBanner.getComponent(UITransform).height;
          adTip.getComponent(UITransform).width = adTip.getComponent(UITransform).height / 0.45;
          if (this.AdGroup != 0) adTip.layer = this.AdGroup;
          adTip.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - adTip.getComponent(UITransform).width / 2, -this.node_nativeBanner.getComponent(UITransform).height / 2 + adTip.getComponent(UITransform).height / 2); // 点击安装

          var bannerButton = new Node('bannerButton');
          bannerButton.addComponent(UITransform);
          this.node_nativeBanner.addChild(bannerButton);
          bannerButton.addComponent(Sprite);
          if (this.AdGroup != 0) bannerButton.layer = this.AdGroup;
          bannerButton.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeBannerButton);
          bannerButton.getComponent(UITransform).width = this.node_nativeBanner.getComponent(UITransform).width * 0.255;
          bannerButton.getComponent(UITransform).height = bannerButton.getComponent(UITransform).width * 0.351;
          bannerButton.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width * 0.185, 0);

          if (this.nativeBannerInfo.Native_icon) {
            // icon
            var icon = new Node('icon');
            icon.addComponent(UITransform);
            this.node_nativeBanner.addChild(icon);
            if (this.AdGroup != 0) icon.layer = this.AdGroup;
            icon.addComponent(Sprite);
            icon.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_icon);
            icon.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height * 0.8;
            icon.getComponent(UITransform).width = icon.getComponent(UITransform).height;
            icon.setPosition(icon.getComponent(UITransform).width * 0.8 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          } else if (this.nativeBannerInfo.Native_BigImage) {
            // 大图
            var image = new Node('image');
            image.addComponent(UITransform);
            this.node_nativeBanner.addChild(image);
            if (this.AdGroup != 0) image.layer = this.AdGroup;
            image.addComponent(Sprite);
            image.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeBannerInfo.Native_BigImage);
            image.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
            image.getComponent(UITransform).width = image.getComponent(UITransform).height * 2;
            image.setPosition(image.getComponent(UITransform).width / 2 - this.node_nativeBanner.getComponent(UITransform).width / 2, 0);
          } // 标题或描述


          var titleLabel = new Node('titleLabel');
          titleLabel.addComponent(UITransform);
          this.node_nativeBanner.addChild(titleLabel);
          if (this.AdGroup != 0) titleLabel.layer = this.AdGroup;
          titleLabel.addComponent(Label); // titleLabel.getComponent(UITransform).priority = 999;

          if (canvasSize.width < canvasSize.height) {
            titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().width / 1080);
          } else {
            titleLabel.getComponent(Label).fontSize = 35 * (view.getDesignResolutionSize().height / 1080);
          }

          if (this.nativeBannerInfo.desc == '') {
            titleLabel.getComponent(Label).string = this.nativeBannerInfo.title;
          } else {
            titleLabel.getComponent(Label).string = this.nativeBannerInfo.desc;
          }

          titleLabel.getComponent(Label).overflow = Label.Overflow.CLAMP;
          titleLabel.getComponent(Label).horizontalAlign = Label.HorizontalAlign.LEFT;
          titleLabel.getComponent(Label).verticalAlign = Label.VerticalAlign.CENTER;
          titleLabel.getComponent(Label).lineHeight = titleLabel.getComponent(Label).fontSize;
          titleLabel.getComponent(UITransform).width = this.node_nativeBanner.getComponent(UITransform).width - this.node_nativeBanner.getComponent(UITransform).height * 2 - bannerButton.getComponent(UITransform).width - 0.2 * this.node_nativeBanner.getComponent(UITransform).height / 0.45;
          titleLabel.getComponent(UITransform).height = this.node_nativeBanner.getComponent(UITransform).height;
          titleLabel.setPosition(0, -this.node_nativeBanner.getComponent(UITransform).width / 2 + this.node_nativeBanner.getComponent(UITransform).height * 2.1 + titleLabel.getComponent(UITransform).width / 2);
          var NativeClose = new Node('closeICON');
          NativeClose.addComponent(UITransform);
          this.node_nativeBanner.addChild(NativeClose); // NativeClose.getComponent(UITransform).priority = 999;

          NativeClose.addComponent(Sprite);
          if (this.AdGroup != 0) NativeClose.layer = this.AdGroup;
          NativeClose.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(this.nativeRes.NativeClose);
          NativeClose.getComponent(UITransform).width = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          NativeClose.getComponent(UITransform).height = 0.27 * this.node_nativeBanner.getComponent(UITransform).height;
          NativeClose.setPosition(this.node_nativeBanner.getComponent(UITransform).width / 2 - NativeClose.getComponent(UITransform).width / 2, this.node_nativeBanner.getComponent(UITransform).height / 2 - NativeClose.getComponent(UITransform).width / 2); // 监听原生banner关闭

          NativeClose.on(Node.EventType.TOUCH_START, function (event) {
            console.log('MINIGAME ===> ', '原生banner关闭', _this13.NUM_BannerUpdateTime + 'S后再次刷新'); // this.hideNativeBanner();
            // this.updateBanner();
            // // 清除触摸事件的冒泡
            // // event.event.propagationStopped = true;
          });
        }
        /**
         * 隐藏原生banner
         */
        ;

        _proto.hideNativeBanner = function hideNativeBanner() {
          if (this.isShow_NativeBanner) {
            console.log('MINIGAME ===> ', 'Vivo原生banner hideNativeBanner========================');
            this.isShow_NativeBanner = false;
            this.node_nativeBanner.removeFromParent();
            this.node_nativeBanner = null;
          }
        };

        _proto.reportNativeBannerShow = function reportNativeBannerShow(adId) {
          console.log('MINIGAME ===> ', 'Vivo 该原生banner广告id上报展示', adId);
          this.nativeAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeBannerClick = function reportNativeBannerClick(adId) {
          console.log('MINIGAME ===> ', 'Vivo 原生banner广告上报点击', adId);
          this.nativeAd.reportAdClick({
            adId: adId
          });
        }
        /**原生大图 */
        ;

        _proto.createNativeImage = function createNativeImage() {
          var _this14 = this;

          console.log('MINIGAME ===> 原生大图', '--createNativeBanner--');
          this.nativeImageAd = this.qg.createNativeAd({
            posId: this.NativeIntersData.vendor_position
          });
          this.loadSucc_NativeImage = false;
          this.nativeImageInfo = {
            adId: null,
            title: null,
            desc: null,
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null
          };
          this.nativeImageAd.onLoad(function (res) {
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log('MINIGAME ===> ', 'Vivo 原生大图广告列表为空 return');
              return;
            }

            console.log('MINIGAME ===> ', 'Vivo 原生大图广告加载成功：', JSON.stringify(res.adList[index])); // if (res.adList[index].icon != "" && res.adList[index].imgUrlList.length > 0) {
            //     console.log("MINIGAME ===> ", "Vivo 原生大图广告同时存在原生ICON和大图");
            // } else {
            //     console.log("MINIGAME ===> ", "Vivo 原生大图广告只存在原生ICON或大图");
            // }

            _this14.nativeImageInfo.adId = String(res.adList[index].adId);
            _this14.nativeImageInfo.title = String(res.adList[index].title);
            _this14.nativeImageInfo.desc = String(res.adList[index].desc);

            if (res.adList && res.adList[index].icon != '') {
              _this14.nativeImageInfo.Native_icon_url = res.adList[index].icon;
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this14.nativeImageInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
            }

            _this14.loadSucc_NativeImage = true;
            console.log('MINIGAME ===> ', 'Vivo 原生大图广告加载成功：');
          }); //监听原生广告加载错误

          this.nativeImageAd.onError(function (err) {
            console.log('MINIGAME ===> ', 'Vivo 原生大图广告加载失败：', JSON.stringify(err));
            setTimeout(function () {
              _this14.nativeImageAd.load();
            }, 20 * 1000);
          });
          this.nativeImageAd.load();
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeAdInfo = function getNativeAdInfo(type) {
          if (!this.loadSucc_NativeImage) {
            console.log('MINIGAME ===> ', '自定义原生大图广告加载中....');
            return null;
          }

          console.log('MINIGAME ===> ', '获取自定义原生大图广告');
          return this.nativeImageInfo;
        };

        _proto.getHWNativeAdInfo = function getHWNativeAdInfo(_infoCallback) {};

        _proto.reportNativeImageShow = function reportNativeImageShow(adId) {
          console.log('MINIGAME ===> ', 'Vivo 该原生大图广告id上报展示', adId);
          this.nativeImageAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeImageClick = function reportNativeImageClick(adId) {
          console.log('MINIGAME ===> ', 'Vivo 原生大图广告上报点击', adId);
          this.nativeImageAd.reportAdClick({
            adId: adId
          });
        }
        /**刷新原生大图广告 */
        ;

        _proto.loadNativeImage = function loadNativeImage() {
          this.nativeImageAd && this.nativeImageAd.load();
        }
        /**原生icon */
        ;

        _proto.createNativeIcon = function createNativeIcon() {
          var _this15 = this;

          console.log('MINIGAME ===> 原生icon', '--createNativeBanner--');
          this.nativeIconAd = this.qg.createNativeAd({
            posId: this.NativeIconData.vendor_position
          });
          this.loadSucc_NativeIcon = false;
          this.nativeIconInfo = {
            adId: null,
            title: null,
            desc: null,
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null
          };
          this.nativeIconAd.onLoad(function (res) {
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log('MINIGAME ===> ', 'Vivo 原生icon广告列表为空 return');
              return;
            }

            console.log('MINIGAME ===> ', 'Vivo 原生icon广告加载成功：', JSON.stringify(res.adList[index]));

            if (res.adList[index].icon != '' && res.adList[index].imgUrlList.length > 0) {
              console.log('MINIGAME ===> ', 'Vivo 原生icon广告同时存在原生ICON和大图');
            } else {
              console.log('MINIGAME ===> ', 'Vivo 原生icon广告只存在原生ICON或大图');
            }

            _this15.nativeIconInfo.adId = String(res.adList[index].adId);
            _this15.nativeIconInfo.title = String(res.adList[index].title);
            _this15.nativeIconInfo.desc = String(res.adList[index].desc);

            if (res.adList && res.adList[index].icon != '') {
              _this15.nativeIconInfo.Native_icon_url = res.adList[index].icon;
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this15.nativeIconInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
            }

            _this15.loadSucc_NativeIcon = true;
            console.log('MINIGAME ===> ', 'Vivo 原生大图广告加载成功：');
          }); //监听原生广告加载错误

          this.nativeIconAd.onError(function (err) {
            console.log('MINIGAME ===> ', 'Vivo 原生icon广告加载失败：', JSON.stringify(err));
            setTimeout(function () {
              _this15.nativeIconAd.load();
            }, 20 * 1000);
          });
          this.nativeIconAd.load();
        }
        /**原生大图广告获取 */
        ;

        _proto.getNativeIconAdInfo = function getNativeIconAdInfo(type) {
          if (!this.loadSucc_NativeIcon) {
            console.log('MINIGAME ===> ', '自定义原生Icon广告加载中....');
            return null;
          }

          console.log('MINIGAME ===> ', '获取自定义原生Icon广告');
          return this.nativeIconInfo;
        };

        _proto.reportNativeIconShow = function reportNativeIconShow(adId) {
          console.log('MINIGAME ===> ', 'Vivo 该原生Icon广告id上报展示', adId);
          this.nativeIconAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeIconClick = function reportNativeIconClick(adId) {
          console.log('MINIGAME ===> ', 'Vivo 原生Icon广告上报点击', adId);
          this.nativeIconAd.reportAdClick({
            adId: adId
          });
        }
        /**刷新原生Icon广告 */
        ;

        _proto.loadNativeIcon = function loadNativeIcon() {
          this.nativeIconAd && this.nativeIconAd.load();
        };

        _proto.addDesktop = function addDesktop(_callback) {
          if (this.qg != null && this.qg != undefined) {
            this.qg.installShortcut({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  _callback && _callback(true);
                } else {
                  _callback && _callback(false); // TipsManager.Instance().create('已存在桌面图标');
                }
              },
              fail: function fail(err) {},
              complete: function complete() {}
            });
          }
        }
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {
          if (this.qg != null && this.qg != undefined) {
            this.qg.hasShortcutInstalled({
              success: function success(res) {
                // 判断图标未存在时，创建图标
                if (res == false) {
                  _callback && _callback(true);
                } else {
                  _callback && _callback(false); // TipsManager.Instance().create('已存在桌面图标');
                }
              },
              fail: function fail(err) {},
              complete: function complete() {}
            });
          }
        };

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.recordClipRecorder = function recordClipRecorder(data) {};

        _proto.pauseGameVideo = function pauseGameVideo() {};

        _proto.resumeGameVideo = function resumeGameVideo() {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.phoneVibrate = function phoneVibrate(isLong) {
          if (this.qg !== null && this.qg !== undefined) {
            if (isLong) {
              this.qg.vibrateLong && this.qg.vibrateLong();
            } else {
              this.qg.vibrateShort && this.qg.vibrateShort();
            }
          }
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {// if (this.qg !== null && this.qg !== undefined) this.qg.reportMonitor(name, value);
        };

        _proto.showGridAd = function showGridAd() {};

        _proto.hideGridAd = function hideGridAd() {};

        _proto.navigateToScene = function navigateToScene(_succeedcallback, _failcallback) {};

        _proto.Share = function Share(_succeedcallback, _failcallback) {}
        /**
         * 原生自渲染2.0 icon  原生icon
         * 常驻的 应无间隔配置    位置配置下：样式-原生icon  多广告位？todo
         */
        ;

        _proto.createNewNativeCuston = function createNewNativeCuston() {
          var _this16 = this;

          if (this.qg.createNewNativeAd) {
            console.log('MINIGAME ===> ', 'VIVO 原生自渲染2.0'); // 自渲染1 2  banner 去除

            this.hideCustomBanner();
            this.hideADNewNativeType12(1);
            this.hideADNewNativeType12(2);
            var styleMy = {
              // gravity: 'left',
              left: 100,
              top: this.qg.getSystemInfoSync().screenHeight - 500
            }; // 位置配置.

            var config = '';

            if (this.ADNewConfig && this.ADNewConfig[AdType.样式原生icon]) {
              config = this.ADNewConfig[AdType.样式原生icon].vendor_position;
            } else {
              config = "D|80|20|100|100";
            }

            this.customNewNativeAd = this.qg.createNewNativeAd({
              posId: this.ADNewNativeAdData.vendor_position
            });
            this.customNewNativeAd.onLoad(function (res) {
              console.log('原生自渲染2.0广告加载完成-onload触发', JSON.stringify(res));
              var formType = res.adList[0].formType[0]; //res.adList[0].formType.length - 1

              var sys = _this16.qg.getSystemInfoSync();

              if (res && res.adList && ADNewNativeAry[formType]) {
                if (config != '') {
                  styleMy = {};
                  styleMy = AdsIdConfig.gePosAndWidthCfg(config, sys.screenWidth, sys.screenHeight, ADNewNativeAry[formType]);
                }

                var b = {
                  adId: res.adList[0].adId,
                  formType: res.adList[0].formType[0],
                  //res.adList[0].formType.length - 1
                  style: styleMy // {
                  //   gravity: 'left',
                  //   // left: 50,
                  //   top: sys.screenHeight - 500
                  // }

                };

                _this16.customNewNativeAd.show(b).then(function () {
                  console.log('原生自渲染2.0广告展示完成');
                })["catch"](function (err) {
                  console.log('原生自渲染2.0广告展示失败', JSON.stringify(err));
                });
              }
            });
            this.customNewNativeAd.onClose(function () {
              console.log('原生自渲染2.0广告关闭'); // setTimeout(() => {
              //   this.createNewNativeCuston();
              // }, 20 * 1000);
            });
            this.customNewNativeAd.onError(function (err) {
              console.log('原生自渲染2.0广告加载失败', err); // setTimeout(() => {
              //   this.createNewNativeCuston();
              // }, 20 * 1000);
            });
          }
        } // 原生自渲染2.0
        ;

        _proto.showNewNativeAd = function showNewNativeAd() {
          if (this.isShowADNewNativeType12) {
            return;
          } // this.createNewNativeCuston();

        };

        _proto.hideNewNativeAd = function hideNewNativeAd() {
          if (this.customNewNativeAd) {
            this.customNewNativeAd.hide();
            this.customNewNativeAd.offLoad();
            this.customNewNativeAd.offClose();
            this.customNewNativeAd.offError();
            this.customNewNativeAd.destroy();
            this.customNewNativeAd = null;
          }
        }
        /**
         * 原生自渲染 1 2
         */
        ;

        _proto.createADNewNativeType12 = function createADNewNativeType12(type, isShow) {
          var _this17 = this; // ADNewNativeTypeData


          if (this.qg.createNewNativeAd) {
            // 自渲染icon banner 删除
            this.hideNewNativeAd();
            this.hideCustomBanner();
            console.log('MINIGAME ===> ', 'VIVO 原生自渲染   ' + type);

            if (!this.ADNewNativeTypeData || !this.ADNewNativeTypeData[type]) {
              return;
            } // 循环广告位


            if (!this.ADNewNativeTypeVendor_Pos[type] || this.ADNewNativeTypeVendor_Pos[type].length == 0) {
              this.ADNewNativeTypeVendor_Pos[type] = [];
              this.ADNewNativeTypeVendor_Pos[type] = AdsIdConfig.getVendor_posAry(this.ADNewNativeTypeData[type].vendor_position); //'123,aaa,456'); //
            }

            var vendor_pos = this.ADNewNativeTypeVendor_Pos[type].shift();
            this.customNewNativeTypeAd[type] = this.qg.createNewNativeAd({
              posId: vendor_pos
            }); // 原生自渲染 1 2 有问题

            this.customNewNativeTypeAd[type].onLoad(function (res) {
              if (res && res.adList) {
                // 样式
                _this17.ADNewNativeType_b[type] = res.adList[0];

                if (isShow) {
                  _this17.showADNewNativeType12(type);
                }
              }
            });
            this.customNewNativeTypeAd[type].onClose(function () {
              _this17.isShowADNewNativeType12 = false;
              _this17.ADNewNativeType_b[type] = null; // setTimeout(() => {
              //   //打开原生icon
              //   this.showNewNativeAd();
              // }, 2 * 1000);
              // 不好使  12交叉有问题  参数不对  直接每次拉最新的吧

              setTimeout(function () {
                _this17.createADNewNativeType12(type);
              }, 1 * 1000);
            });
            this.customNewNativeTypeAd[type].onError(function (err) {
              _this17.isShowADNewNativeType12 = false;

              if (_this17.ADNewNativeType_Call[type] && err.code != 200) {
                // {"data":{"errMsg":"ad is playing, please do not play again","errCode":200},"code":200}
                // 兜底
                _this17.ADNewNativeType_Call[type](false);

                _this17.ADNewNativeType_Call[type] = null;
              }
            });
          }
        }; //是否已经展示
        //原生自渲染1 2


        _proto.showADNewNativeType12 = function showADNewNativeType12(type, playSuccessCall) {
          var _this18 = this;

          this.ADNewNativeType_Call[type] = playSuccessCall;

          if (this.isShowADNewNativeType12) {
            console.error('显示了已经');
            return;
          }

          if (!this.customNewNativeTypeAd[type] || !this.ADNewNativeType_b[type]) {
            console.error('mei没初始化好');
            this.createADNewNativeType12(type, true);
            return;
          }

          var adList0 = this.ADNewNativeType_b[type]; // 随机下标

          var formTypeIdx = Math.floor(Math.random() * adList0.formType.length);
          var formType = adList0.formType[formTypeIdx]; // adId: res.adList[0].adId,

          var b = {
            adId: adList0.adId,
            formType: formType,
            //typeKind, //adList0.formType[0],
            style: {
              gravity: 'center' // // // width: typewidth
              // // left: 100,
              // // top: 500,
              // width: 720

            }
          }; // 测试 ToDo
          // let sys = this.qg.getSystemInfoSync();
          // let config = `D|80|20|100|100`;
          // if (config != '') {
          //   b = {};
          //   let style1 = AdsIdConfig.gePosAndWidthCfg(config, sys.screenWidth, sys.screenHeight, ADNewNativeAry[formType]);
          //   b = {
          //     adId: adList0.adId,
          //     formType: formType,
          //     style: style1
          //   };
          // }

          this.customNewNativeTypeAd[type].show(b).then(function () {
            _this18.isShowADNewNativeType12 = true;

            if (playSuccessCall) {
              // 兜底
              playSuccessCall(true);
              playSuccessCall = null;
            }
          })["catch"](function (err) {
            _this18.isShowADNewNativeType12 = false;

            if (playSuccessCall && err.code != 200) {
              //{"data":{"errMsg":"ad is playing, please do not play again","errCode":200},"code":200}
              // 兜底
              playSuccessCall(false);
              playSuccessCall = null;
            }
          });
        };

        _proto.hideADNewNativeType12 = function hideADNewNativeType12(type) {
          if (this.customNewNativeTypeAd[type]) {
            this.customNewNativeTypeAd[type].hide();
            this.customNewNativeTypeAd[type].offLoad();
            this.customNewNativeTypeAd[type].offClose();
            this.customNewNativeTypeAd[type].offError();
            this.customNewNativeTypeAd[type].destroy();
            this.customNewNativeTypeAd[type] = null;
          }
        }
        /**
         * 原生模板广告 1 2
         * playSuccessCall 回调兜底的
         */
        ;

        _proto.showCustomType12 = function showCustomType12(type, playSuccessCall) {
          if (this.qg.createCustomAd) {
            if (!this.AdCustomTypeData || !this.AdCustomTypeData[type]) {
              console.log('showCustomType12 无广告位数据 type: ' + type);
              return;
            }

            if (this.CustomType12[type]) {
              this.CustomType12[type].offError(null);
              this.CustomType12[type].destroy();
              this.CustomType12[type] = null;
            } // 循环广告位


            if (!this.CustomTypeVendor_Pos[type] || this.CustomTypeVendor_Pos[type].length == 0) {
              this.CustomTypeVendor_Pos[type] = [];
              this.CustomTypeVendor_Pos[type] = AdsIdConfig.getVendor_posAry(this.AdCustomTypeData[type].vendor_position); //'123,aaa,456'); //
            }

            var vendor_pos = this.CustomTypeVendor_Pos[type].shift();
            console.log('showCustomType12  vendor_position:' + this.AdCustomTypeData[type].vendor_position);
            this.CustomType12[type] = this.qg.createCustomAd({
              posId: vendor_pos,
              //this.AdCustomTypeData.vendor_position,
              // //竖屏设置
              style: {
                left: 0,
                gravity: 'center'
              }
            });
            this.CustomType12[type].onError(function (err) {
              console.log('原生模板广告加载失败 type:' + type, err);

              if (playSuccessCall) {
                // 兜底
                playSuccessCall(false);
                playSuccessCall = null;
              }
            }); // let num = this.AdCustomTypeData.ad_interval;

            this.CustomType12[type].show().then(function () {
              console.log('原生模板广告展示完成 type:' + type);

              if (playSuccessCall) {
                playSuccessCall(true);
                playSuccessCall = null;
              }
            })["catch"](function (err) {
              console.log('原生模板广告展示失败 type:' + type, JSON.stringify(err));

              if (playSuccessCall) {
                playSuccessCall(false);
                playSuccessCall = null;
              }
            });
          }
        };

        _proto.hideCustomType12 = function hideCustomType12(type) {
          if (this.CustomType12[type]) {
            this.CustomType12[type].hide();
          }
        };

        _proto.hideCustomIconAd = function hideCustomIconAd() {};

        _proto.showCustomIconAd = function showCustomIconAd() {};

        _proto.ShowGameIconAd = function ShowGameIconAd() {};

        _proto.HideGameIconAd = function HideGameIconAd() {};

        _proto.ShowHomeIconAd = function ShowHomeIconAd() {};

        _proto.HideHomeIconAd = function HideHomeIconAd() {};

        _proto.ShowSideAd = function ShowSideAd() {};

        _proto.HideSideAd = function HideSideAd() {};

        _proto.ShowMoreGamesAd = function ShowMoreGamesAd() {};

        _proto.HideMoreGamesAd = function HideMoreGamesAd() {};

        _proto.ShowBannerNativeAd = function ShowBannerNativeAd() {};

        _proto.HideBannerNativeAd = function HideBannerNativeAd() {};

        return VivoADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUIForm.ts', './GEventManager.ts', './GameManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, ParticleSystem2D, BaseUIForm, GEventManager, Event_Name, GameManager;

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
      Node = module.Node;
      ParticleSystem2D = module.ParticleSystem2D;
    }, function (module) {
      BaseUIForm = module.default;
    }, function (module) {
      GEventManager = module.GEventManager;
      Event_Name = module.Event_Name;
    }, function (module) {
      GameManager = module.GameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

      cclegacy._RF.push({}, "ad08d3a2mBPprxsuk1p5Koh", "WinUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WinUI = exports('WinUI', (_dec = ccclass('WinUI'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUIForm) {
        _inheritsLoose(WinUI, _BaseUIForm);

        function WinUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUIForm.call.apply(_BaseUIForm, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "lable", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextLevelBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "againLevelBtn", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "BackHomeBtn", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "WinTitle", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "FailTitle", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "BlackMask", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "LightEffect", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "WinPic", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "FailPic", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Effect1Node", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Effect2Node", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EffectNode", _descriptor13, _assertThisInitialized(_this));

          _this.level = 0;
          return _this;
        }

        var _proto = WinUI.prototype;

        _proto.init = function init(data) {
          this.level = data.level;

          if (data.isWin) {
            this.lable.string = '胜利';
            this.nextLevelBtn.active = true;
            this.againLevelBtn.active = false;
            this.BackHomeBtn.active = true;
            this.Effect1Node.active = true;
            this.Effect2Node.active = true;
            this.Effect1Node.getComponent(ParticleSystem2D).resetSystem();
            this.Effect2Node.getComponent(ParticleSystem2D).resetSystem();
            this.EffectNode.active = true;
            this.EffectNode.getComponent(ParticleSystem2D).resetSystem();
            this.WinTitle.active = true;
            this.FailTitle.active = false;
            this.BlackMask.active = false;
            this.LightEffect.active = true;
            this.WinPic.active = true;
            this.FailPic.active = false;
          } else {
            this.lable.string = '失败';
            this.nextLevelBtn.active = false;
            this.againLevelBtn.active = true;
            this.BackHomeBtn.active = false;
            this.Effect1Node.active = false;
            this.Effect2Node.active = false;
            this.EffectNode.active = false;
            this.WinTitle.active = false;
            this.FailTitle.active = true;
            this.BlackMask.active = true;
            this.LightEffect.active = false;
            this.WinPic.active = false;
            this.FailPic.active = true;
          }
        };

        _proto.OnClickEvent_againLevel = function OnClickEvent_againLevel() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          GEventManager.emit(Event_Name.GAME_AGAIN_LEVEL, {
            level: this.level
          });
          this.CloseUIForm();
        };

        _proto.OnClickEvent_nextLevel = function OnClickEvent_nextLevel() {
          if (GameManager.instance().gameType == parseInt("2")) {
            GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
            GEventManager.emit(Event_Name.GAME_AGAIN_LEVEL, {
              level: this.level
            });
          } else {
            GEventManager.emit(Event_Name.GAME_NEXT_LEVEL, {
              level: ++this.level
            });
          }

          this.CloseUIForm();
        };

        _proto.onClickEvent_BackToMenu = function onClickEvent_BackToMenu() {
          GEventManager.emit(Event_Name.GAME_PLAY_SOUNDS, 'bubble');
          GameManager.instance().ExitGame();
          this.CloseUIForm();
        };

        return WinUI;
      }(BaseUIForm), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextLevelBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "againLevelBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "BackHomeBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "WinTitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "FailTitle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "BlackMask", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "LightEffect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "WinPic", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "FailPic", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Effect1Node", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Effect2Node", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "EffectNode", [_dec14], {
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

System.register("chunks:///_virtual/WXADApi.ts", ['cc', './AdsIdConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, AdsIdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AdsIdConfig = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "7775aWiWAJPwJni5T/JFz9v", "WXADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WXADApi = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function WXADApi() {
          this.videoType = void 0;
          this.arg = void 0;
          this.SystemBannerData = null;
          this.SystemIntersData = null;
          this.VideoData = null;
          this.NativeBannerData = null;
          this.NativeIntersData = null;
          this.NativeIconData = null;
          this.JGGBoxData = null;
          this.BlockData = null;
          this.AdCustomIntersData = null;
          this.wx = window["wx"];
          this.bannerAd = null;
          this._autoBannerClose = false;
          this.interstitialAd = null;
          this.rewardedVideoAd = null;
          this.m_videoAdIsLoaded = false;
          this.nativeAd = null;
          this.resTemp = null;
          this.gridAd = null;
          this.title = '超上瘾的解密游戏，挑战你的智商！';
          this.shareUrl = "https://res.efunent.com/dev2/web2/LceFirePeople/qq/data/share.jpg";
          this.systemInfo = null;
        }

        var _proto = WXADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.wx !== null && this.wx !== undefined) {
            this.systemInfo = this.wx.getSystemInfoSync();
            this.createVideo();
          } else {
            this.wx = null;
          }

          _callback && _callback();
          console.log('wx ===================> onInit   ok');
        };

        _proto.onLogin = function onLogin() {};

        _proto.onShare = function onShare(_callback) {
          if (this.wx != null && this.wx != undefined) {
            console.log("wx平台 分享");
            this.wx.shareAppMessage({
              title: this.title,
              imageUrl: this.shareUrl,
              success: function success() {
                _callback && _callback(1);
              },
              fail: function fail() {
                _callback && _callback(0);
              }
            });
          }
        };

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.createBanner = function createBanner() {};

        _proto.showBanner = function showBanner(adIdKey, openIdKey) {
          var _this = this;

          if (this.wx !== null && this.wx !== undefined) {
            this.hideBanner(true);
            this._autoBannerClose = false;
            console.log("wx平台 创建横幅广告");
            this.bannerAd = this.wx.createBannerAd({
              adUnitId: AdsIdConfig.wxId[adIdKey],
              style: {
                left: 0,
                top: this.systemInfo.windowHeight - 300 / 2.88,
                width: 320
              }
            });
            this.bannerAd.onError(function (err) {
              console.log(err);
            });
            this.bannerAd.onResize(function (size) {
              _this.bannerAd.style.top = _this.systemInfo.windowHeight - size.height;
              _this.bannerAd.style.left = (_this.systemInfo.windowWidth - size.width) / 2;
            });
            this.bannerAd.onLoad(function () {
              console.log("横幅广告调用 onLoad");

              _this.bannerAd.show()["catch"](function (err) {
                return console.log('wx banner show失败==》', JSON.stringify(err));
              });
            });
          }
        };

        _proto.hideBanner = function hideBanner(close) {
          if (close === void 0) {
            close = false;
          }

          if (this.bannerAd) {
            console.log("wx平台 销毁横幅广告");

            if (!close) {
              this._autoBannerClose = true;
            }

            this.bannerAd.hide();
            this.bannerAd.destroy();
            this.bannerAd = null;
          }
        };

        _proto.createVideo = function createVideo() {
          var _this2 = this;

          if (this.wx !== null && this.wx !== undefined) {
            if (this.rewardedVideoAd) {
              this.rewardedVideoAd.destroy();
              this.rewardedVideoAd = null;
            }
            /**创建rewardedVideoAd 对象*/


            console.log("wx平台 创建激励视频广告");
            this.rewardedVideoAd = this.wx.createRewardedVideoAd({
              adUnitId: AdsIdConfig.wxId['video']
            });
            this.rewardedVideoAd.onLoad(function () {
              console.log("激励视频广告 加载成功");
              _this2.m_videoAdIsLoaded = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('wxH5GameAPI 激励视频 加载失败:code =====>:' + err.code + "message ======>:" + JSON.stringify(err));
              _this2.m_videoAdIsLoaded = false;
            });
            this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_type, _successCallback, _failCallback) {
          var _this3 = this;

          this.videoType = _type;
          /**确保video正常创建并已经拉取到数据 */

          if (this.rewardedVideoAd && this.m_videoAdIsLoaded) {
            this.rewardedVideoAd.show();

            var onClose = function onClose(res) {
              if (res.isEnded) {
                console.log('激励视频广告完成，发放奖励');
                /**播放完毕 处理播放成功的逻辑 */

                _successCallback && _successCallback();

                _this3.rewardedVideoAd.load();
              } else {
                console.log('激励视频广告取消关闭，不发放奖励');
                /**播放失败 处理播放失败的逻辑 */

                _failCallback && _failCallback();

                _this3.rewardedVideoAd.load();
              }

              _this3.rewardedVideoAd.offClose(onClose);
            };

            this.rewardedVideoAd.onClose(onClose);
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            _failCallback && _failCallback();
            this.createVideo();
          }
        };

        _proto.showVideoAward = function showVideoAward() {};

        _proto.showVideoFail = function showVideoFail() {};

        _proto.createInsertAd = function createInsertAd() {};

        _proto.showInsertAd = function showInsertAd(adIdKey, openIdKey) {
          var _this4 = this;

          if (this.wx != null && this.wx != undefined) {
            if (this.interstitialAd) {
              this.interstitialAd.destroy();
              this.interstitialAd = null;
            }

            this.interstitialAd = this.wx.createInterstitialAd({
              adUnitId: AdsIdConfig.wxId[adIdKey]
            });
            this.interstitialAd.onLoad(function () {
              _this4.interstitialAd.show();
            });
            this.interstitialAd.onError(function (res) {
              console.log('wx InsertAd load Error:' + JSON.stringify(res));

              _this4.interstitialAd.destroy();

              _this4.interstitialAd = null;
            });

            var onClose = function onClose(res) {
              console.log("用户关闭插屏广告并销毁");

              _this4.interstitialAd.offClose(onClose);

              _this4.interstitialAd.destroy();

              _this4.interstitialAd = null;
            };

            this.interstitialAd.onClose(onClose);
            this.interstitialAd.load();
          }
        };

        _proto.createNativeAd = function createNativeAd() {};

        _proto.showNativeAd = function showNativeAd(adIdKey, _callback, openIdKey) {};

        _proto.onNativeAdClick = function onNativeAdClick(_id) {};

        _proto.onNativeReportAdShow = function onNativeReportAdShow(_id) {};

        _proto.createNativeIconAd = function createNativeIconAd() {};

        _proto.showNativeIconAd = function showNativeIconAd() {};

        _proto.onNativeIconAdClick = function onNativeIconAdClick(_id) {};

        _proto.createGridAd = function createGridAd(adIdKey, openIdKey) {
          var _this5 = this;

          if (this.wx != null && this.wx != undefined) {
            if (this.gridAd) {
              this.gridAd.destroy();
              this.gridAd = null;
            }

            this.gridAd = this.wx.createGridAd({
              adUnitId: AdsIdConfig.wxId[adIdKey],
              style: {},
              adTheme: 'white',
              gridCount: 8
            });
            this.gridAd.onLoad(function () {
              _this5.gridAd.show();
            });
            this.gridAd.onError(function (res) {
              console.log('wx InsertAd load Error:' + JSON.stringify(res));

              _this5.gridAd.destroy();

              _this5.gridAd = null;
            });

            var onClose = function onClose(res) {
              console.log("用户关闭插屏广告并销毁");

              _this5.gridAd.offClose(onClose);

              _this5.gridAd.destroy();

              _this5.gridAd = null;
            };

            this.gridAd.onClose(onClose);
            this.gridAd.load();
          }
        };

        _proto.saveDataToCache = function saveDataToCache(_key, _value) {};

        _proto.readDataFromCache = function readDataFromCache(_key) {};

        _proto.addDesktop = function addDesktop(_callback) {}
        /**是否已经创建桌面图标 */
        ;

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {};

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark() {};

        _proto.addSubscribeApp = function addSubscribeApp() {};

        _proto.vibrateShort = function vibrateShort() {
          if (this.wx !== null && this.wx !== undefined) this.wx.vibrateShort && this.wx.vibrateShort();
        };

        _proto.vibrateLong = function vibrateLong() {
          if (this.wx !== null && this.wx !== undefined) this.wx.vibrateLong && this.wx.vibrateLong();
        };

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        return WXADApi;
      }()) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XmADApi.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "871865NwTZCYqOTuscBImWs", "XmADApi", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var XmADApi = exports('XmADApi', (_dec = ccclass('XmADApi'), _dec(_class = /*#__PURE__*/function () {
        function XmADApi() {
          this.SystemBannerData = void 0;
          this.SystemIntersData = void 0;
          this.VideoData = void 0;
          this.PassiveVideoData = null;
          this.NativeBannerData = void 0;
          this.NativeIntersData = void 0;
          this.NativeIconData = void 0;
          this.JGGBoxData = void 0;
          this.TIMingData = null;
          this.BlockData = void 0;
          this.AdCustomIntersData = null;
          this.AdCustomBannerData = null;
          this.AdCustomTypeData = void 0;
          this.ADNewNativeAdData = null;
          this.ADNewNativeTypeData = null;
          this.ADNewConfig = void 0;
          this.qg = window['qg'];
          this.systemInfo = null;
          this.systemBannerAd = null;
          this.loadSucc_SystemBanner = false;
          this.isShow_SystemBanner = false;
          this.NUM_BannerUpdateTime = 30;
          this.interval_updateBanner = null;
          this.systemIntersAd = null;
          this.loadSucc_SystemInters = false;
          this.rewardedVideoAd = null;
          this.loadSucc_Video = false;
          this.callback_Video = null;
          this.navigateBoxPortalAd = null;
          this.loadSucc_NavigateBoxPortal = false;
          this.nativeImageAd = null;
          this.nativeImageInfo = null;
          this.loadSucc_NativeImage = false;
          this.isShow_NativeImage = false;
          this.callback_Native = null;
          this.clipIndexList = void 0;
          this.videoPath = void 0;
        }

        var _proto = XmADApi.prototype;

        _proto.onInit = function onInit(_callback) {
          if (this.qg !== null && this.qg !== undefined) {
            this.systemInfo = this.qg.getSystemInfoSync();
            console.log('MINIGAME ===> 设备信息.systemInfo===>', this.systemInfo);
            this.createAd();
          } else {
            this.qg = null;
          }

          _callback && _callback();
          console.log('MINIGAME ===> 小米 ===================> onInit ok');
        }
        /**
         * 创建广告
         */
        ;

        _proto.createAd = function createAd() {
          if (this.SystemBannerData.enabled && this.SystemBannerData.vendor_position != '') this.createSystemBanner();
          console.log('MINIGAME ===> createAd');
          console.log(this.SystemIntersData.enabled);
          console.log(this.SystemIntersData.vendor_position);
          if (this.SystemIntersData && this.SystemIntersData.enabled && this.SystemIntersData.vendor_position != '') this.createInsertAd();
          if (this.VideoData.enabled && this.VideoData.vendor_position != '') this.createVideo(); // // this.loadNativeBannerRes();
          //原生广告

          if (this.NativeIntersData && this.NativeIntersData.enabled && this.NativeIntersData.vendor_position != '') this.createNativeImage();
        };

        _proto.createSystemBanner = function createSystemBanner() {
          var _this = this;

          console.log('MINIGAME ===> ', '小米 系统banner加载', this.SystemBannerData.vendor_position);
          this.systemBannerAd = this.qg.createBannerAd({
            adUnitId: this.SystemBannerData.vendor_position // style: {
            // }

          }); // this.loadSucc_SystemBanner = true;
          // 监听系统banner错误

          this.systemBannerAd.onError(function (err) {
            console.log('MINIGAME ===> ', '小米 系统banner加载/展示失败：', JSON.stringify(err));
            _this.loadSucc_SystemBanner = false;
          }); // 监听系统banner隐藏

          this.systemBannerAd.onClose(function () {
            console.log('MINIGAME ===> ', '小米 系统banner关闭', _this.NUM_BannerUpdateTime + 'S之后再次刷新'); // this.createSystemBanner();

            _this.systemBannerAd && _this.systemBannerAd.destroy();
            _this.loadSucc_SystemBanner = false;
          });
          this.systemBannerAd.onLoad(function () {
            _this.loadSucc_SystemBanner = true; // this.systemBannerAd.show();
          });
        }
        /**
         * 展示系统banner
         */
        ;

        _proto.showSystemBanner = function showSystemBanner() {
          this.isShow_SystemBanner = true;
          this.systemBannerAd.show();
        }
        /**
         * 隐藏系统banner
         */
        ;

        _proto.hideSystemBanner = function hideSystemBanner() {
          if (this.isShow_SystemBanner && this.systemBannerAd) {
            this.systemBannerAd && this.systemBannerAd.destroy();
            this.loadSucc_SystemBanner = false;
          }
        };

        _proto.showBanner = function showBanner() {
          var _this2 = this;

          if (!this.loadSucc_SystemBanner) {
            this.createSystemBanner();
          }

          setTimeout(function () {
            _this2.isShow_SystemBanner = true;

            _this2.systemBannerAd.show();
          }, 1000);
        };

        _proto.hideBanner = function hideBanner() {
          this.hideSystemBanner();
        }
        /**展示原生banner */
        ;

        _proto.showNativeBanner = function showNativeBanner() {}
        /**隐藏原生banner */
        ;

        _proto.hideNativeBanner = function hideNativeBanner() {};

        _proto.setGroup = function setGroup(group) {};

        _proto.onLogin = function onLogin(_callback) {
          console.log('xiaomi onLogin');

          if (this.qg !== null && this.qg !== undefined) {
            this.qg.login({
              success: function success(res) {
                console.log(' game login with real success:' + JSON.stringify(res));

                _callback(1);
              },
              fail: function fail(res) {
                console.log('game login with real fail:' + res);

                _callback(2);
              }
            });
          }
        };

        _proto.onShare = function onShare(_callback) {};

        _proto.ShareVideo = function ShareVideo(_title, templateId, _callback) {};

        _proto.recordClipRecorder = function recordClipRecorder(data) {};

        _proto.pauseGameVideo = function pauseGameVideo() {};

        _proto.resumeGameVideo = function resumeGameVideo() {};

        _proto.createInsertAd = function createInsertAd() {
          var _this3 = this;

          console.log('MINIGAME ===> createInsertAd');

          if (this.qg != null && this.qg != undefined) {
            console.log('MINIGAME ===> 小米  创建插屏广告');
            this.systemIntersAd = this.qg.createInterstitialAd({
              adUnitId: this.SystemIntersData.vendor_position
            });
            this.loadSucc_SystemInters = false;
            this.systemIntersAd.onLoad(function () {
              _this3.loadSucc_SystemInters = true;
            }); //监听插屏广告错误

            this.systemIntersAd.onError(function (err) {
              console.log('MINIGAME ===> ', '小米 系统插屏onError' + err);
              _this3.loadSucc_SystemInters = false;
              setTimeout(function () {
                _this3.createInsertAd(); // this.systemIntersAd && this.systemIntersAd.load()

              }, 15 * 1000);
            }); //监听插屏广告关闭

            this.systemIntersAd.onClose(function () {
              console.log('MINIGAME ===> ', '小米 系统插屏广告关闭');
              _this3.loadSucc_SystemInters = false; // this.systemIntersAd && this.systemIntersAd.destroy();
              // 系统插屏关闭后5s后再次load

              setTimeout(function () {
                // this.systemIntersAd && this.systemIntersAd.load()
                _this3.createInsertAd();
              }, 5 * 1000);
            }); // this.systemIntersAd.load();
          }
        };

        _proto.showInsertAd = function showInsertAd() {
          console.log('MINIGAME ===> showInsertAd');

          if (this.systemIntersAd && this.loadSucc_SystemInters) {
            this.systemIntersAd.show();
          }
        };

        _proto.createVideo = function createVideo() {
          var _this4 = this;

          console.log('MINIGAME ===> createVideo');

          if (this.qg !== null && this.qg !== undefined) {
            /**创建rewardedVideoAd 对象*/
            console.log('MINIGAME ===> 小米 创建激励视频广告');
            this.rewardedVideoAd = this.qg.createRewardedVideoAd({
              adUnitId: this.VideoData.vendor_position
            });
            this.rewardedVideoAd.onLoad(function () {
              console.log('MINIGAME ===> 激励视频广告 加载成功');
              _this4.loadSucc_Video = true;
            });
            this.rewardedVideoAd.onError(function (err) {
              console.log('MINIGAME ===>  激励视频 加载失败:code =====>:' + err.code + 'message ======>:' + JSON.stringify(err));
              _this4.loadSucc_Video = false;

              if (_this4.rewardedVideoAd) {
                setTimeout(function () {
                  _this4.rewardedVideoAd && _this4.rewardedVideoAd.load();
                }, 5 * 1000);
              }
            }); //监听视频广告播放完成

            this.rewardedVideoAd.onClose(function (res) {
              if (res.isEnded) {
                console.log('MINIGAME ===> ', '小米 激励视频广告完成，发放奖励');

                if (_this4.callback_Video) {
                  _this4.callback_Video(true);
                }
              } else {
                console.log('MINIGAME ===> ', '小米 激励视频广告关闭，不发放奖励');

                if (_this4.callback_Video) {
                  _this4.callback_Video(false);
                }
              }

              setTimeout(function () {
                _this4.rewardedVideoAd.load();
              }, 300);
            });
            this.rewardedVideoAd.load();
          }
        };

        _proto.showVideo = function showVideo(_successCallback) {
          console.log('MINIGAME ===> showVideo');
          /**确保video正常创建并已经拉取到数据 */

          if (this.rewardedVideoAd && this.loadSucc_Video) {
            this.callback_Video = _successCallback;
            this.rewardedVideoAd.show();
            this.loadSucc_Video = false;
          } else {
            /**没有成功创建广告或者没有成功load广告 就重新创建一个 */
            // TipsManager.Instance().create("广告还未准备好,请稍后再试");
            _successCallback(false);
          }
        }
        /**展示 被动激励视频 */
        ;

        _proto.showPassiveVideo = function showPassiveVideo(_successCallback) {}
        /**
         * 显示九宫格
         */
        ;

        _proto.showNavigateBoxPortal = function showNavigateBoxPortal() {
          console.log('xiaomi showNavigateBoxPortal');

          if (this.qg !== null && this.qg !== undefined) {
            this.qg.displayAd({
              type: 100,
              upid: this.JGGBoxData.vendor_position,
              success: function success(res) {
                console.log('成功显示九宫格');
                console.log(res); // 将会打印以下信息，表示调用成功
                // {errMsg: "", errCode: 0}
              },
              fail: function fail(res) {
                console.log('显示九宫格失败');
                console.log(res);
              }
            });
          }
        }
        /**原生大图 */
        ;

        _proto.createNativeImage = function createNativeImage() {
          var _this5 = this;

          console.log('MINIGAME ===> 原生大图', '--createNativeImage--');
          this.nativeImageAd = this.qg.createNativeAd({
            adUnitId: this.NativeIntersData.vendor_position // adUnitId: "u7m3hc4gvm"

          });
          this.loadSucc_NativeImage = false;
          this.nativeImageInfo = {
            adId: null,
            title: '',
            desc: '',
            source: '',
            clickBtnTxt: '',
            Native_icon_url: null,
            Native_icon: null,
            Native_BigImage_url: null,
            Native_BigImage: null,
            dcr: this.NativeIntersData.dcr
          };
          this.nativeImageAd.onLoad(function (res) {
            console.info('ad data loaded: ' + JSON.stringify(res));
            var index = 0;

            if (typeof res.adList != undefined && res.adList.length != 0) {
              index = res.adList.length - 1;
            } else {
              console.log('MINIGAME ===> ', '小米 原生大图广告列表为空 return');
              return;
            }

            _this5.nativeImageInfo.adId = String(res.adList[index].adId);
            _this5.nativeImageInfo.title = String(res.adList[index].title);
            _this5.nativeImageInfo.desc = String(res.adList[index].desc); // this.nativeImageInfo.source = String(res.adList[index].source)

            _this5.nativeImageInfo.clickBtnTxt = String(res.adList[index].clickBtnTxt);

            if (res.adList && res.adList[index].icon != '') {
              _this5.nativeImageInfo.Native_icon_url = res.adList[index].icon;
            }

            if (res.adList && res.adList[index].imgUrlList.length > 0) {
              _this5.nativeImageInfo.Native_BigImage_url = res.adList[index].imgUrlList[0];
            }

            _this5.loadSucc_NativeImage = true;
            console.log('MINIGAME ===> ', '小米 原生大图广告加载成功：', _this5.nativeImageInfo);
            _this5.callback_Native && _this5.callback_Native(_this5.nativeImageInfo);
          }); //监听原生广告加载错误

          this.nativeImageAd.onError(function (err) {
            console.log('MINIGAME ===> ', '小米 原生大图广告加载失败：', JSON.stringify(err));
            _this5.callback_Native && _this5.callback_Native(null);
          }); // this.nativeImageAd.load();
        }
        /**小米原生大图广告获取 */
        ;

        _proto.getNativeAdInfo = function getNativeAdInfo(_infoCallback) {
          this.callback_Native = _infoCallback;

          if (!this.nativeImageAd) {
            if (this.NativeIntersData && this.NativeIntersData.enabled && this.NativeIntersData.vendor_position != '') {
              this.createNativeImage();
            }
          }

          this.nativeImageAd && this.nativeImageAd.load();
        };

        _proto.reportNativeImageShow = function reportNativeImageShow(adId) {
          console.log('MINIGAME ===> ', '小米 该原生大图广告id上报展示', adId);
          this.nativeImageAd.reportAdShow({
            adId: adId
          });
        };

        _proto.reportNativeImageClick = function reportNativeImageClick(adId) {
          console.log('MINIGAME ===> ', '小米 原生大图广告上报点击', adId);
          this.nativeImageAd.reportAdClick({
            adId: adId
          });
        };

        _proto.getHWNativeAdInfo = function getHWNativeAdInfo(type) {};

        _proto.loadNativeImage = function loadNativeImage() {};

        _proto.getNativeIconAdInfo = function getNativeIconAdInfo(type) {};

        _proto.reportNativeIconClick = function reportNativeIconClick(_id) {};

        _proto.reportNativeIconShow = function reportNativeIconShow(_id) {};

        _proto.loadNativeIcon = function loadNativeIcon() {};

        _proto.showNavigateBoxBanner = function showNavigateBoxBanner() {};

        _proto.hideNavigateBoxBanner = function hideNavigateBoxBanner() {};

        _proto.addDesktop = function addDesktop(_callback) {};

        _proto.hasShortcutInstalled = function hasShortcutInstalled(_callback) {};

        _proto.StartRecorder = function StartRecorder(_duration) {};

        _proto.stopRecordScreen = function stopRecordScreen() {};

        _proto.createMoreGamesBtn = function createMoreGamesBtn() {};

        _proto.showMoreGamesBtn = function showMoreGamesBtn() {};

        _proto.jumpToGame = function jumpToGame(_packageName) {};

        _proto.addColorBookmark = function addColorBookmark(_callback) {};

        _proto.addSubscribeApp = function addSubscribeApp(_callback) {};

        _proto.phoneVibrate = function phoneVibrate(isLong) {};

        _proto.reportAnalytics = function reportAnalytics(name, value) {};

        _proto.showCustomAd = function showCustomAd() {};

        _proto.hideCustomAd = function hideCustomAd() {};

        _proto.showGridAd = function showGridAd() {};

        _proto.hideGridAd = function hideGridAd() {};

        _proto.navigateToScene = function navigateToScene(_succeedcallback, _failcallback) {};

        _proto.Share = function Share(_succeedcallback, _failcallback) {};

        _proto.showNewNativeAd = function showNewNativeAd() {};

        _proto.hideNewNativeAd = function hideNewNativeAd() {};

        _proto.showCustomBanner = function showCustomBanner() {};

        _proto.hideCustomBanner = function hideCustomBanner() {};

        _proto.showCustomType12 = function showCustomType12(type, playSuccessCall) {};

        _proto.showADNewNativeType12 = function showADNewNativeType12(type, playSuccessCall) {};

        return XmADApi;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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