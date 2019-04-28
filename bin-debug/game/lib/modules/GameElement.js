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
var GameElement;
(function (GameElement) {
    var baseElement = (function (_super) {
        __extends(baseElement, _super);
        function baseElement() {
            return _super.call(this) || this;
        }
        return baseElement;
    }(egret.Sprite));
    GameElement.baseElement = baseElement;
    __reflect(baseElement.prototype, "GameElement.baseElement");
    var physicsElement = (function (_super) {
        __extends(physicsElement, _super);
        function physicsElement() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.createRigid = function (x, y) {
                _this.physicsBody = new p2.Body({
                    type: p2.Body.STATIC,
                    position: [x, y]
                });
            };
            return _this;
        }
        return physicsElement;
    }(baseElement));
    GameElement.physicsElement = physicsElement;
    __reflect(physicsElement.prototype, "GameElement.physicsElement");
    var rigidElement = (function (_super) {
        __extends(rigidElement, _super);
        function rigidElement() {
            var _this = _super.call(this) || this;
            _this.setShape = function (shape, skin) {
                skin.width = _this.width;
                skin.heigth = _this.height;
                _this.physicsBody.displays = [skin];
                _this.physicsBody.addShape(shape);
            };
            _this.createRigid(0, 0);
            return _this;
        }
        return rigidElement;
    }(physicsElement));
    GameElement.rigidElement = rigidElement;
    __reflect(rigidElement.prototype, "GameElement.rigidElement");
    var elementShapeDict = (function () {
        function elementShapeDict() {
        }
        elementShapeDict.getShape = function (name, element) {
            var shape = new p2.Box({ width: element.width, height: element.height });
            return shape;
        };
        return elementShapeDict;
    }());
    GameElement.elementShapeDict = elementShapeDict;
    __reflect(elementShapeDict.prototype, "GameElement.elementShapeDict");
})(GameElement || (GameElement = {}));
//# sourceMappingURL=GameElement.js.map