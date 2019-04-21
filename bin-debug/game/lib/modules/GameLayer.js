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
var GameLayer;
(function (GameLayer) {
    var LayerBase = (function (_super) {
        __extends(LayerBase, _super);
        function LayerBase(name) {
            var _this = _super.call(this) || this;
            _this.layerName = name;
            return _this;
        }
        return LayerBase;
    }(egret.DisplayObjectContainer));
    GameLayer.LayerBase = LayerBase;
    __reflect(LayerBase.prototype, "GameLayer.LayerBase");
    var LayerGroup = (function (_super) {
        __extends(LayerGroup, _super);
        function LayerGroup(name, type) {
            var _this = _super.call(this) || this;
            _this.layerType = type || 'BaseLayer';
            _this.layerName = name;
            return _this;
        }
        return LayerGroup;
    }(egret.DisplayObjectContainer));
    GameLayer.LayerGroup = LayerGroup;
    __reflect(LayerGroup.prototype, "GameLayer.LayerGroup");
    var LayerZoom = (function () {
        function LayerZoom() {
        }
        LayerZoom.prototype.data = function () {
            return {
                zoomList: {
                    BottomLayer: 5,
                    BaseLayer: 10,
                    MainLayer: 15,
                    EffectLayer: 20,
                    EffectNum: 25,
                }
            };
        };
        return LayerZoom;
    }());
    GameLayer.LayerZoom = LayerZoom;
    __reflect(LayerZoom.prototype, "GameLayer.LayerZoom");
})(GameLayer || (GameLayer = {}));
//# sourceMappingURL=GameLayer.js.map