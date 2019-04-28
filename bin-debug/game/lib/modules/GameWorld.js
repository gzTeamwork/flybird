var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameWorld;
(function (GameWorld) {
    var BaseWorld = (function () {
        function BaseWorld(Game, Opts) {
            if (Opts === void 0) { Opts = []; }
            var _this = this;
            this.Layers = {
                'Bottom': 0, 'Main': 1, 'Effect': 2, 'Ui': 3, 'Pad': 4
            };
            //	获取图层组编号
            this.getLayersIndex = function (name) {
                return _this.Layers[name] || null;
            };
            //	获取图层
            this.getLayer = function (name) {
                return _this.Game.getChildAt(_this.getLayersIndex(name)) || null;
            };
            //	加载场景
            this.loadScene = function (sceneName, layerName) {
                var _scene = new GameScene.basicScene(sceneName);
                var _layer = _this.Game.getChildAt(_this.getLayersIndex(layerName));
                _scene.width = _this.Game.stageWidth, _scene.height = _this.Game.stageHeight;
                _layer.addChildAt(_scene, 0);
            };
            this.Game = Game;
        }
        //	插入元素到图层
        BaseWorld.prototype.addChildTo = function (element, layersName) {
            this.getLayer(layersName).addChild(element);
        };
        //	创建图层		
        BaseWorld.prototype.createLayers = function (Layers) {
            this.Layers = Object.assign(this.Layers, Layers);
            console.log("需要创建的图层", this.Layers);
            for (var e in this.Layers) {
                var i = this.Layers[e];
                if (i > 0) {
                    var _layer = new GameLayer.LayerGroup(e, e + 'Layer');
                    _layer.width = this.Game.stage.stageWidth;
                    _layer.height = this.Game.stage.stageHeight;
                    this.Game.addChildAt(_layer, i);
                    var testText = new egret.TextField();
                    testText.x = i, testText.y = i * 50;
                    _layer.addChild(testText);
                }
            }
        };
        return BaseWorld;
    }());
    GameWorld.BaseWorld = BaseWorld;
    __reflect(BaseWorld.prototype, "GameWorld.BaseWorld");
    ;
    // 重力世界
    var physicsWorld = (function (_super) {
        __extends(physicsWorld, _super);
        function physicsWorld(Game) {
            var _this = _super.call(this, Game) || this;
            _this.createGravity = function (x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                var factor = 50;
                !!_this.Gravity ? '' : _this.Gravity = new p2.World();
                _this.Gravity.sleepMode = p2.World.BODY_SLEEPING;
                _this.Gravity.gravity = [x, y];
                egret.Ticker.getInstance().register(function (dt) {
                    if (dt < 10) {
                        return;
                    }
                    if (dt > 1000) {
                        return;
                    }
                    this.Gravity.step(dt / 1000);
                    var stageHeight = egret.MainContext.instance.stage.stageHeight;
                    var l = this.Gravity.bodies.length;
                    for (var i = 0; i < l; i++) {
                        var boxBody = this.Gravity.bodies[i];
                        var box = boxBody.displays[0];
                        if (box) {
                            box.x = boxBody.position[0] * factor;
                            box.y = stageHeight - boxBody.position[1] * factor;
                            box.rotation = 360 - (boxBody.angle + boxBody.shapes[0].angle) * 180 / Math.PI;
                            if (boxBody.sleepState == p2.Body.SLEEPING) {
                                box.alpha = 0.5;
                            }
                            else {
                                box.alpha = 1;
                            }
                        }
                    }
                }, _this);
            };
            return _this;
        }
        physicsWorld.prototype.addChildTo = function (element, layerName) {
            _super.prototype.addChildTo.call(this, element, layerName);
            this.Gravity.addBody(element.physicsBody);
        };
        return physicsWorld;
    }(BaseWorld));
    GameWorld.physicsWorld = physicsWorld;
    __reflect(physicsWorld.prototype, "GameWorld.physicsWorld");
})(GameWorld || (GameWorld = {}));
//# sourceMappingURL=GameWorld.js.map