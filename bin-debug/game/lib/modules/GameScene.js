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
var GameScene;
(function (GameScene) {
    var basicScene = (function (_super) {
        __extends(basicScene, _super);
        function basicScene(exmlPath) {
            var _this = _super.call(this) || this;
            _this.skinName = exmlPath;
            return _this;
        }
        return basicScene;
    }(eui.Component));
    GameScene.basicScene = basicScene;
    __reflect(basicScene.prototype, "GameScene.basicScene");
})(GameScene || (GameScene = {}));
//# sourceMappingURL=GameScene.js.map