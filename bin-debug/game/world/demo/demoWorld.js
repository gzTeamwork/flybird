// TypeScript file
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
var demoWolrd = (function (_super) {
    __extends(demoWolrd, _super);
    function demoWolrd(Game) {
        var _this = _super.call(this, Game) || this;
        _this.createLayers({});
        //  加载demo场景
        _this.loadScene('src/game/world/demo/scene/demoEnter.exml', 'Bottom');
        _this.createGravity(0, 0.98);
        return _this;
    }
    return demoWolrd;
}(GameWorld.physicsWorld));
__reflect(demoWolrd.prototype, "demoWolrd");
//# sourceMappingURL=demoWorld.js.map