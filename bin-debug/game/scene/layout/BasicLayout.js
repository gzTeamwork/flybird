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
var BasicLayout = (function (_super) {
    __extends(BasicLayout, _super);
    /**
     * 基本布局
     * @param sw 容器宽度
     * @param sh 容器高度
     */
    function BasicLayout(sw, sh) {
        var _this = _super.call(this) || this;
        _this._createView(sw, sh);
        return _this;
    }
    /**
     * 初始化视图层
     */
    BasicLayout.prototype._createView = function (sw, sh) {
        this.width = sw;
        this.height = sh;
        this.bottomLayer = new egret.Sprite();
        this.addChildAt(this.bottomLayer, 50);
        this.bottomLayer.width = sw;
        this.bottomLayer.height = sh;
        this.mainLayer = new egret.Sprite();
        this.addChildAt(this.mainLayer, 40);
        this.frontLayer = new egret.Sprite();
        this.addChildAt(this.frontLayer, 30);
        this.uiLayer = new egret.Sprite();
        this.addChildAt(this.uiLayer, 20);
        this.particleLayer = new egret.Sprite();
        this.addChildAt(this.particleLayer, 10);
    };
    return BasicLayout;
}(egret.Sprite));
__reflect(BasicLayout.prototype, "BasicLayout");
//# sourceMappingURL=BasicLayout.js.map