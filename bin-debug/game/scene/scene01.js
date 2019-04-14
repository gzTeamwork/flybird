"use strict";
// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var scene01 = (function () {
    function scene01(GDO) {
        this._GDO = GDO;
        var sky = this._GDO.createBitmapByName("bg_jpg");
        this._GDO.addChild(sky);
        var stageW = this._GDO.stage.stageWidth;
        var stageH = this._GDO.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this._GDO.addChild(topMask);
        var icon = this._GDO.createBitmapByName("egret_icon_png");
        this._GDO.addChild(icon);
        icon.x = 26;
        icon.y = 33;
        var line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this._GDO.addChild(line);
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this._GDO.addChild(colorLabel);
        var textfield = new egret.TextField();
        this._GDO.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this._GDO.textfield = textfield;
    }
    return scene01;
}());
exports.scene01 = scene01;
__reflect(scene01.prototype, "\"d:/phpStudy/PHPTutorial/WWW/Egret/flybird/flybird/src/game/scene/scene01\".scene01");
//# sourceMappingURL=scene01.js.map