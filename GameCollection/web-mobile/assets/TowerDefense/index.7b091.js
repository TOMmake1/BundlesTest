System.register("chunks:///_virtual/TD_Bullet.ts",["./rollupPluginModLoBabelHelpers.js","cc","./TD_GameEnum.ts","./TD_Props.ts","./GEventManager.ts","./ToolsHelper.ts","./PoolManager.ts","./TD_Enemy.ts"],(function(t){"use strict";var e,n,i,o,s,r,l,a,c,u,p,d,h,g,m,f,y,C;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,l=t.BoxCollider2D,a=t.Contact2DType,c=t.RigidBody2D,u=t.v2,p=t.Component},function(t){d=t.PhysicsGroup},function(t){h=t.TD_Props},function(t){g=t.GEventManager,m=t.Event_Name},function(t){f=t.default},function(t){y=t.PoolManager},function(t){C=t.TD_Enemy}],execute:function(){var _,T,v,k,E;s._RF.push({},"8ac9cU+XyRKf7yrNT9ukip+","TD_Bullet",void 0);var N=r.ccclass,B=r.property;t("TD_Bullet",(_=N("TD_Bullet"),T=B({tooltip:"子弹攻击时飞行速度"}),_((E=e((k=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s))||this,i(e,"speed",E,o(e)),e.num=1,e.c_ids=[],e.isLock=!1,e.lockWall=null,e.isAttack=!1,e}n(e,t);var s=e.prototype;return s.start=function(){this.node.getComponent(l).on(a.BEGIN_CONTACT,this.onBeginContact,this),this.node.getComponent(l).on(a.END_CONTACT,this.onEndContact,this)},s.init=function(t){if(this.c_ids=[],this.num=t.num,this.isLock=!1,this.lockWall=null,this.isAttack=!1,1!=t.type){if(t.ids)for(var e=0;e<t.ids.length;e++)this.c_ids.push(t.ids[e]);this.node.angle=0,this.node.getComponent(c).gravityScale=.5,this.node.getComponent(c).linearVelocity=u(0,0),this.node.getComponent(c).angularVelocity=0}else{this.node.getComponent(c).gravityScale=0,this.node.getComponent(c).angularVelocity=0,this.node.getComponent(c).linearVelocity=u(t.dir.x,t.dir.y).multiplyScalar(this.speed);var n=Math.atan2(t.dir.y,t.dir.x);this.node.angle=180*n/Math.PI+90}},s.onBeginContact=function(t,n,i){if(n.group==d.Props){if(1==n.tag){var o=n.node.getComponent(h);0==o.propType?-1==this.c_ids.indexOf(o.id)&&(this.c_ids.push(o.id),this.createrbullet(o.propNum,o.id)):1==o.propType?o.propNum>0&&(this.putBulletNode(),o.addPropNum(-this.num)):2==o.propType?this.isLock||(o.addPropNum(-this.num),this.isLock=!0,this.lockWall=o):3==o.propType&&(this.putBulletNode(),g.emit(m.GAME_COLLECT_BULLET,this.num))}else if(2==n.tag)n.node.getComponent(h).setActive(!1),g.emit(m.GAME_REFRESH_WEAPON,null);else if(3==n.tag){if(this.isAttack)return;this.isAttack=!0,n.node.getComponent(C).Injured({attack:this.num}),this.putBulletNode()}}else if(n.group==d.Wall);else if(n.group==d.Bullet&&!this.isLock){var s=n.node.getComponent(e);s.isLock&&(this.isLock=!0,this.lockWall=s.lockWall,this.lockWall.addPropNum(-this.num))}},s.onEndContact=function(t,e,n){},s.createrbullet=function(t,e){for(var n=0;n<t;n++){var i=this.getCreaterNum();i>t-n&&(i=t-n),n+=i,g.emit(m.GAME_CREAT_BULLET,{type:0,num:i,wordPos:this.node.getWorldPosition(),ids:f.Instance().copy2DArray(this.c_ids)})}},s.getCreaterNum=function(){var t=this.node.parent.children.length;return t<50?1:t<100?2:t<200?5:t<300?10:20},s.putBulletNode=function(){var t=this;this.scheduleOnce((function(){y.instance().putNode("bullet0",t.node)}))},e}(p)).prototype,"speed",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),v=k))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/TD_Cannon.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GEventManager.ts"],(function(t){"use strict";var n,i,e,o,a,s,r,c,u,l;return{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,s=t._decorator,r=t.Label,c=t.Component},function(t){u=t.GEventManager,l=t.Event_Name}],execute:function(){var h,m,p,f,g,T,d;a._RF.push({},"19669VQET9PVbxWwnhQdIq/","TD_Cannon",void 0);var w=s.ccclass,y=s.property;t("TD_Cannon",(h=w("TD_Cannon"),m=y({tooltip:"攻击间隔"}),p=y({tooltip:"自动攻击"}),h((T=n((g=function(t){function n(){for(var n,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=t.call.apply(t,[this].concat(a))||this,e(n,"attackTime",T,o(n)),e(n,"isAuto",d,o(n)),n.isAttack=!1,n.nowTime=0,n.nowDate=0,n.cannonNum=0,n.isStop=!1,n}i(n,t);var a=n.prototype;return a.init=function(t){this.isStop=!1,this.isAttack=this.isAuto,this.cannonNum=t.cannonNum,this.node.getChildByName("Label").getComponent(r).string=this.cannonNum+""},a.getNowDate=function(){var t=Date.now();this.nowDate=t},a.update=function(t){this.isStop||this.isAttack&&this.cannonNum>0&&(this.nowTime+=t,this.nowTime>=this.attackTime&&(this.nowTime=0,this.creterBullet()))},a.setAttackState=function(t){this.isAuto||(this.isAttack=t,t||(this.nowTime=1))},a.creterBullet=function(){this.cannonNum--,this.cannonNum<0?this.cannonNum=0:(this.node.getChildByName("Label").getComponent(r).string=this.cannonNum+"",u.emit(l.GAME_CREAT_BULLET,{type:0,num:1,wordPos:this.node.getChildByName("start").getWorldPosition()}))},n}(c)).prototype,"attackTime",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),d=n(g.prototype,"isAuto",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),f=g))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/TD_Enemy.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Loader.ts","./TableTowerDefenseEnemys.ts","./PoolManager.ts","./GEventManager.ts"],(function(t){"use strict";var e,i,n,s,a,o,h,c,l,r,d;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t._decorator,s=t.sp,a=t.v3,o=t.Component},function(t){h=t.default},function(t){c=t.TableTowerDefenseEnemys},function(t){l=t.PoolManager},function(t){r=t.GEventManager,d=t.Event_Name}],execute:function(){var m;i._RF.push({},"7ac86ogksNCkawrkN9Q68Eh","TD_Enemy",void 0);var p,u=n.ccclass;n.property;!function(t){t[t.idle=0]="idle",t[t.move=1]="move",t[t.attack=2]="attack",t[t.die=3]="die"}(p||(p={}));t("TD_Enemy",u("TD_Enemy")(m=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).enemyId=0,e.spine=null,e.enemyTable=new c,e.hp=0,e.attack=0,e.speed=0,e.isStop=!0,e.state=p.idle,e.isAttack=!1,e.faceAnim=["idle","walk","attack","dead"],e}e(i,t);var n=i.prototype;return n.init=function(t){this.enemyId=t.id,this.spine||(this.spine=this.node.getChildByName("body").getComponent(s.Skeleton),this.spine.setCompleteListener(this.animComplete.bind(this))),this.enemyTable.init(this.enemyId),this.hp=this.enemyTable.HP,this.attack=this.enemyTable.Attack,this.speed=this.enemyTable.Speed,this.load("TowerDefense",this.enemyTable.AnimName),this.state=p.move,this.isStop=!1,this.isAttack=!1},n.load=function(t,e){var i=this;this.node.active=!1,h.loadBundleRes(t,e,(function(t){t?(i.spine.skeletonData=t,i.spine.skeletonData.addRef(),i.node.active=!0,i.spine.setAnimation(0,"idle",!0)):console.error("动画名为【"+e+"】的角色资源不存在")}),s.SkeletonData)},n.update=function(t){if(!this.isStop&&this.state!=p.die)if(this.state==p.attack&&this.node.getPosition().x<-220)this.monsterAttack();else if(this.node.getPosition().x<-220)this.state=p.attack;else{var e=a(-this.speed,0);this.node.setPosition(this.node.getPosition().add(e.multiplyScalar(t))),this.state=p.move,this.playAnim()}},n.monsterAttack=function(){var t=this;this.isStop||this.state!=p.die&&(this.isAttack||(this.isAttack=!0,this.state=p.attack,this.playAnim(),this.scheduleOnce((function(){t.isAttack=!1}),1.5)))},n.playAnim=function(){var t=!0;this.state!=p.die&&this.state!=p.attack||(t=!1);var e=this.faceAnim[this.state];this.spine.animation!=e&&this.spine.setAnimation(0,e,t)},n.animComplete=function(t){var e=t.animation.name;e==this.faceAnim[2]&&(this.spine.setAnimation(0,"idle",!0),r.emit(d.GAME_UI_REFRESH_HP,this.attack)),e==this.faceAnim[3]&&(this.node.active=!1,l.instance().putNode("enemy1",this.node),r.emit(d.GAME_ENEMY_DIE,null))},n.Injured=function(t){if(this.hp<=0)return!1;this.hp-=t.attack,this.hp<0&&(this.hp=0),this.hp<=0&&(this.state=p.die,this.playAnim())},i}(o))||m);i._RF.pop()}}}));

System.register("chunks:///_virtual/TD_GameEnum.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){var u,c;e({ColliderTag:void 0,PhysicsGroup:void 0}),t._RF.push({},"3270cO67ElDo7wNZLq/Zvd6","TD_GameEnum",void 0),function(e){e[e.DEFAULT=1]="DEFAULT",e[e.Wall=2]="Wall",e[e.Bullet=4]="Bullet",e[e.Props=8]="Props"}(u||(u=e("PhysicsGroup",{}))),c||(c=e("ColliderTag",{})),t._RF.pop()}}}));

System.register("chunks:///_virtual/TD_Props.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ToolsHelper.ts"],(function(t){"use strict";var e,i,o,r,n,s,p,a,u,l,c,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){n=t.cclegacy,s=t._decorator,p=t.Enum,a=t.tween,u=t.Label,l=t.Component,c=t.v3},function(t){h=t.default}],execute:function(){var f,m,v,d,y,b,T,P,g,w,N,z,D,_,M;n._RF.push({},"e53637+UyBKoYTl90J1AFmj","TD_Props",void 0);var x=s.ccclass,L=s.property,S=p({"数量x":0,"数量-":1,"阻挡":2,"收集":3,"机枪":4});t("TD_Props",(f=x("TD_Props"),m=L({type:S,tooltip:"道具类型"}),v=L({tooltip:"数量"}),d=L({tooltip:"是否移动"}),y=L({tooltip:"移动速度"}),b=L({tooltip:"移动起点"}),T=L({tooltip:"移动终点"}),f((w=e((g=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n))||this,o(e,"propType",w,r(e)),o(e,"propNum",N,r(e)),o(e,"isMove",z,r(e)),o(e,"moveSpeed",D,r(e)),o(e,"startPos",_,r(e)),o(e,"endPos",M,r(e)),e.id=0,e.moveTween=a(),e}i(e,t);var n=e.prototype;return n.onEnable=function(){this.id=h.Instance().randomNum(1,999),this.refreshNum(),this.startMove()},n.addPropNum=function(t){var e=this;this.propNum+=t,this.propNum<0&&(this.propNum=0),this.refreshNum(),this.propType==S.阻挡&&this.propNum<=0&&this.scheduleOnce((function(){e.node.active=!1}))},n.refreshNum=function(){if(this.propType!=S.收集&&this.propType!=S.机枪){this.node.getChildByName("Label").getComponent(u).string=["x","-",""][this.propType]+this.propNum}},n.setActive=function(t){var e=this;this.scheduleOnce((function(){e.node.active=t}))},n.startMove=function(){var t=this;if(this.isMove){this.moveTween&&this.moveTween.stop(),this.node.setPosition(this.startPos),this.moveTween=a(this.node);var e=h.Instance().pointDistance(this.startPos,this.endPos)/this.moveSpeed;this.moveTween.to(e,{position:this.endPos}).to(e,{position:this.startPos}).call((function(){t.startMove()})).start()}},e}(l)).prototype,"propType",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return S.数量x}}),N=e(g.prototype,"propNum",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),z=e(g.prototype,"isMove",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),D=e(g.prototype,"moveSpeed",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),_=e(g.prototype,"startPos",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return c(0,0,0)}}),M=e(g.prototype,"endPos",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return c(0,0,0)}}),P=g))||P));n._RF.pop()}}}));

System.register("chunks:///_virtual/TD_Role.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GEventManager.ts","./TD_Enemy.ts","./ProgressBarTools.ts"],(function(t){"use strict";var e,i,n,a,o,r,s,l,h,c,u,p,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,s=t.sp,l=t.v3,h=t.Component},function(t){c=t.GEventManager,u=t.Event_Name},function(t){p=t.TD_Enemy},function(t){m=t.ProgressBarTools}],execute:function(){var d,f,g,y,v,S,w;o._RF.push({},"c0d51kHWVdP2Iw3O4ZELY9a","TD_Role",void 0);var A,k=r.ccclass,C=r.property;!function(t){t[t.idle=0]="idle",t[t.move=1]="move",t[t.attack=2]="attack",t[t.die=3]="die"}(A||(A={}));t("TD_Role",(d=k("TD_Role"),f=C({tooltip:"攻击间隔"}),g=C({tooltip:"机枪攻击间隔"}),d((S=e((v=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,n(e,"attackInterval",S,a(e)),n(e,"attackInterval1",w,a(e)),e.roleSpine=null,e.health=100,e.nowHealth=100,e.healthProgressBar=null,e.bulletNum=0,e.isStop=!1,e.weaponType=0,e.time=0,e.weaponCD=.3,e.roleState=A.idle,e.faceAnim=["1_/idle","walk","Riven/Attack","dead"],e}i(e,t);var o=e.prototype;return o.init=function(){this.isStop=!1,this.weaponType=0,this.health=100,this.nowHealth=this.health,this.weaponCD=this.attackInterval,this.healthProgressBar||(this.healthProgressBar=this.node.getChildByName("ProgressBar").getComponent(m)),this.roleSpine||(this.roleSpine=this.node.getChildByName("body").getComponent(s.Skeleton),this.roleSpine.setCompleteListener(this.animComplete.bind(this))),this.roleState=A.idle,this.playAnim()},o.refreshWeapon=function(){this.weaponType=1,this.weaponCD=this.attackInterval1},o.refreshHealth=function(t){var e=this;this.nowHealth-=t,this.nowHealth<=0&&(this.nowHealth=0,c.emit(u.GAME_END,!1)),this.healthProgressBar.progress=this.nowHealth/this.health,this.healthProgressBar.node.active=!0,this.unscheduleAllCallbacks(),this.scheduleOnce((function(){e.healthProgressBar.node.active=!1}),1)},o.update=function(t){if(!this.isStop){if(this.bulletNum<=0)return this.roleState=A.idle,void this.playAnim();this.time+=t,this.time>=this.weaponCD&&(this.roleAttack(),this.time=0)}},o.getEnemyTager=function(){for(var t=this.node.parent.getChildByName("enemys"),e=0,i=0;i<t.children.length;i++){var n=t.children[i];if(n.position.x<720&&3!=n.getComponent(p).state)return n.getWorldPosition();if(++e>5)return l(0,0,0)}return l(0,0,0)},o.roleAttack=function(){var t=this.getEnemyTager();if(0==t.length())return this.roleState=A.idle,void this.playAnim();this.bulletNum--,this.bulletNum<0&&(this.bulletNum=0);var e=this.node.getChildByName("start").getWorldPosition(),i=l(t.x-e.x,t.y+25-e.y).normalize();c.emit(u.GAME_CREAT_BULLET,{type:1,num:1,wordPos:this.node.getChildByName("start").getWorldPosition(),dir:i}),this.roleState=A.attack,this.playAnim()},o.playAnim=function(){var t=!1;this.roleState!=A.die&&this.roleState!=A.attack||(t=!0);var e=this.faceAnim[this.roleState];this.roleSpine.animation!=e&&this.roleSpine.setAnimation(0,e,t)},o.animComplete=function(t){t.animation.name==this.faceAnim[2]&&this.roleSpine.setAnimation(0,this.faceAnim[0],!0)},o.addBullet=function(t){this.bulletNum+=t},e}(h)).prototype,"attackInterval",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),w=e(v.prototype,"attackInterval1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.2}}),y=v))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/TowerDefense",["./TD_Bullet.ts","./TD_Cannon.ts","./TD_Enemy.ts","./TD_GameEnum.ts","./TD_Props.ts","./TD_Role.ts","./TowerDefenseGame.ts","./TowerDefenseView.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/TowerDefenseGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./TD_Cannon.ts","./GEventManager.ts","./Loader.ts","./PoolManager.ts","./TD_Bullet.ts","./UIManager.ts","./GameUIConfig.ts","./TableTowerDefenseData.ts","./TD_Enemy.ts","./TD_Role.ts"],(function(e){"use strict";var t,n,o,s,i,l,a,h,r,c,u,f,d,E,m,y,v,p;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,s=e.Node,i=e.v3,l=e.instantiate,a=e.Component},function(e){h=e.TD_Cannon},function(e){r=e.GEventManager,c=e.Event_Name},function(e){u=e.default},function(e){f=e.PoolManager},function(e){d=e.TD_Bullet},function(e){E=e.default},function(e){m=e.UIID},function(e){y=e.TableTowerDefenseData},function(e){v=e.TD_Enemy},function(e){p=e.TD_Role}],execute:function(){var _;n._RF.push({},"eff63U2xCRNpZlJA1XYeMhl","TowerDefenseGame",void 0);var N=o.ccclass;o.property,e("TowerDefenseGame",N("TowerDefenseGame")(_=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).cannonNode=null,t.cannonScript=null,t.roleNode=null,t.level=0,t.gameType=0,t.isTouch=!1,t.table=new y,t.cannonPos=i(),t.bulletPrefab=null,t.levelNode=null,t.enemyPrefab=null,t.enemyNum=0,t.isStop=!0,t.enemyEnd=!1,t.enemysData=[],t.createrIdx=0,t.startPos=i(400,-500),t}t(n,e);var o=n.prototype;return o.onLoad=function(){},o.onEnable=function(){this.node.on(s.EventType.TOUCH_START,this._touchStartEvent,this),this.node.on(s.EventType.TOUCH_MOVE,this._touchMoveEvent,this),this.node.on(s.EventType.TOUCH_END,this._touchEndEvent,this),this.node.on(s.EventType.TOUCH_CANCEL,this._touchEndEvent,this),r.on(c.GAME_CREAT_BULLET,this.createrBullet,this),r.on(c.GAME_COLLECT_BULLET,this.roleCollectBullet,this),r.on(c.GAME_REFRESH_WEAPON,this.refreshRoleWeapon,this),r.on(c.GAME_UI_REFRESH_HP,this.refreshRoleHealthy,this),r.on(c.GAME_ENEMY_DIE,this.gameEnmeyDie,this),r.on(c.GAME_END,this.gameEnd,this),r.on(c.GAME_RETURN_HALL,this.returnHall,this)},o.init=function(e){var t=this;if(this.isStop=!1,this.level=e.level,this.gameType=e.gameType,this.enemyEnd=!1,this.getLevelData(),this.cannonNode=this.node.getChildByName("cannonNode"),this.cannonScript=this.cannonNode.getComponent(h),this.cannonScript.init({cannonNum:this.table.Bullet}),this.cannonNode.setPosition(i(0,500,0)),this.roleNode=this.node.getChildByName("role").getComponent(p),this.loadGameLevelNode(),this.bulletPrefab||u.loadBundleRes("TowerDefense","Game/prefabs/bullet0",(function(e){t.bulletPrefab=e,f.instance().init("bullet0",t.bulletPrefab)})),!this.enemyPrefab){u.loadBundleArray("TowerDefense",["Game/prefabs/enemy1"],(function(e){f.instance().init("enemy1",e[0]),t.startInitEnemys()}))}this.roleNode.init()},o.getLevelData=function(){this.table.init(this.level),this.setEnemysData(this.table.Enemys)},o.loadGameLevelNode=function(){var e=this;u.loadBundleRes("TowerDefense","Game/prefabs/"+this.table.Name,(function(t){e.levelNode=l(t),e.levelNode.setParent(e.node),e.levelNode.setPosition(i(0,0,0)),e.levelNode.active=!0}))},o.update=function(e){},o._touchStartEvent=function(e){this.isTouch=!0,this.cannonScript.setAttackState(!0)},o._touchMoveEvent=function(e){if(!this.isStop){var t=e.getUIDelta();this.cannonPos=this.cannonNode.getPosition(),this.cannonPos.x+=2.5*t.x,this.cannonPos.x=this.cannonPos.x<-300?-300:this.cannonPos.x,this.cannonPos.x=this.cannonPos.x>300?300:this.cannonPos.x,this.cannonNode.setPosition(this.cannonPos)}},o._touchEndEvent=function(e){this.isTouch=!1,this.cannonScript.setAttackState(!1)},o.createrBullet=function(e){var t=this;this.isStop||this.bulletPrefab&&this.scheduleOnce((function(){var n=f.instance().getPoolNode("bullet0");n.setParent(t.node.getChildByName("bullets")),n.setWorldPosition(e.wordPos),n.getComponent(d).init(e),n.active=!0}))},o.putAllBullet=function(){for(var e=this.node.getChildByName("bullets").children.length,t=0;t<e;t++)f.instance().putNode("bullet0",this.node.getChildByName("bullets").children[0])},o.putAllEnemys=function(){for(var e=this.node.getChildByName("enemys").children.length,t=0;t<e;t++)f.instance().putNode("enemy1",this.node.getChildByName("enemys").children[0])},o.setEnemysData=function(e){this.enemysData=[],this.createrIdx=0;for(var t=e.split("|"),n=0;n<t.length;n++){var o=t[n].split(":");this.enemysData.push({time:o[0],enemys:o.splice(1)})}},o.startInitEnemys=function(){var e=this;this.scheduleOnce((function(){for(var t=0,n=0;n<e.enemysData[e.createrIdx].enemys.length/2;n++){for(var o=0;o<e.enemysData[e.createrIdx].enemys[2*n+1];o++)e.createEnemy({id:e.enemysData[e.createrIdx].enemys[2*n],pos:i(e.startPos.x+40*(Math.floor(o/3)+t/3),e.startPos.y-o%3*60)}),console.log(Math.floor(o/3)+t/3);t+=e.enemysData[e.createrIdx].enemys[2*n+1]}if(e.createrIdx++,e.createrIdx>=e.enemysData.length)return console.log("出怪结束"),void(e.enemyEnd=!0);e.startInitEnemys()}),this.enemysData[this.createrIdx].time)},o.createEnemy=function(e){this.enemyNum++;var t=f.instance().getPoolNode("enemy1");t.setParent(this.node.getChildByName("enemys")),t.setPosition(e.pos),t.getComponent(v).init(e)},o.gameEnmeyDie=function(){this.enemyNum--,console.log(this.enemyNum),this.enemyEnd&&this.enemyNum<=0&&(console.log("游戏胜利"),this.isStop=!0,E.GetInstance().ShowUIForms(m.WinUI,{isWin:!0,level:this.level}),this.initMap())},o.roleCollectBullet=function(e){this.roleNode.addBullet(e)},o.refreshRoleWeapon=function(){this.roleNode.refreshWeapon()},o.refreshRoleHealthy=function(e){this.roleNode.refreshHealth(e)},o.gameEnd=function(e){console.log("游戏结束"),E.GetInstance().ShowUIForms(m.WinUI,{isWin:!1,level:this.level}),this.initMap()},o.initMap=function(){this.putAllBullet(),this.putAllEnemys(),this.cannonScript.isStop=!0,this.roleNode.isStop=!0,this.levelNode.destroy()},o.returnHall=function(){this.isStop=!0,this.bulletPrefab=null,this.enemyPrefab=null,this.putAllBullet(),this.levelNode.destroy(),f.instance().clearPool("bullet0"),f.instance().clearPool("enemy1"),E.GetInstance().CloseUIForms(m.TowerDefenseView)},o.onDisable=function(){this.node.off(s.EventType.TOUCH_START,this._touchStartEvent,this),this.node.off(s.EventType.TOUCH_MOVE,this._touchMoveEvent,this),this.node.off(s.EventType.TOUCH_END,this._touchEndEvent,this),this.node.off(s.EventType.TOUCH_CANCEL,this._touchEndEvent,this),r.off(c.GAME_CREAT_BULLET,this.createrBullet,this),r.off(c.GAME_COLLECT_BULLET,this.roleCollectBullet,this),r.off(c.GAME_REFRESH_WEAPON,this.refreshRoleWeapon,this),r.off(c.GAME_UI_REFRESH_HP,this.refreshRoleHealthy,this),r.off(c.GAME_ENEMY_DIE,this.gameEnmeyDie,this),r.off(c.GAME_END,this.gameEnd,this),r.off(c.GAME_RETURN_HALL,this.returnHall,this)},n}(a))||_);n._RF.pop()}}}));

System.register("chunks:///_virtual/TowerDefenseView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseUIForm.ts","./TowerDefenseGame.ts","./GameManager.ts","./GEventManager.ts"],(function(e){"use strict";var n,t,i,a,o,s,r,l;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,i=e._decorator},function(e){a=e.default},function(e){o=e.TowerDefenseGame},function(e){s=e.GameManager},function(e){r=e.GEventManager,l=e.Event_Name}],execute:function(){var c;t._RF.push({},"819d1IIWxRFy7RFAtwuNkUf","TowerDefenseView",void 0);var u=i.ccclass;i.property,e("TowerDefenseView",u("TowerDefenseView")(c=function(e){function t(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))||this).tdGame=null,n}n(t,e);var i=t.prototype;return i.onEnable=function(){r.on(l.GAME_AGAIN_LEVEL,this.againLevelGame,this),r.on(l.GAME_NEXT_LEVEL,this.nextLevelGame,this)},i.init=function(){this.tdGame=this.node.getChildByName("game").getComponent(o),this.tdGame.init({level:0,gameType:0})},i.OnClickEvent_changerWearom=function(){},i.OnClickEvent_returnHall=function(){s.instance().ExitGame()},i.againLevelGame=function(e){this.tdGame.init({level:e.level,gameType:0})},i.nextLevelGame=function(e){this.tdGame.init({level:e.level,gameType:0})},i.onDisable=function(){r.off(l.GAME_AGAIN_LEVEL,this.againLevelGame,this),r.off(l.GAME_NEXT_LEVEL,this.nextLevelGame,this)},t}(a))||c);t._RF.pop()}}}));

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