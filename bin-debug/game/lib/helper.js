// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameImageHelper = (function () {
    function GameImageHelper() {
    }
    GameImageHelper.fixScale = function (ImgSp, scaleMode, sw, sh) {
        if (scaleMode == 0) {
            // let nw = 
        }
    };
    GameImageHelper.fixAlignCenter = function (Obj, W, H, X, Y) {
        if (W === void 0) { W = 0; }
        if (H === void 0) { H = 0; }
        if (X === void 0) { X = false; }
        if (Y === void 0) { Y = false; }
        if (X !== false) {
            Obj.x = (X - Obj.width) / 2;
        }
        if (Y !== false) {
            Obj.y = (Y - Obj.height) / 2;
        }
    };
    return GameImageHelper;
}());
__reflect(GameImageHelper.prototype, "GameImageHelper", ["GH.ImageHelper"]);
//# sourceMappingURL=helper.js.map