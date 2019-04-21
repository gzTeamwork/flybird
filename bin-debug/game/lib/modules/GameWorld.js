var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameWorld;
(function (GameWorld) {
    var BaseWorld = (function () {
        function BaseWorld(Game) {
            var _this = this;
            this.Layers = {
                'Bottom': 0, 'Main': 1, 'Effect': 2, 'Ui': 3, 'Pad': 4
            };
            //	获取图层组编号
            this.getLayersIndex = function (name) {
                return _this.Layers[name] || null;
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
})(GameWorld || (GameWorld = {}));
//# sourceMappingURL=GameWorld.js.map