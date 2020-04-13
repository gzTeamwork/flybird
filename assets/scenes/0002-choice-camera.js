cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        // this.camera = this.getComponent(cc.Camera);
        this.camera = cc.find("/Canvas/Main Camera")
    },

    // called every frame, uncomment this function to activate update callback
    lateUpdate: function (dt) {
        let targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.node.position = new cc.Vec2(this.node.parent.convertToNodeSpaceAR(targetPos).x, this.node.parent.convertToNodeSpaceAR(targetPos).y + cc.winSize.height / 3);

        let ratio = (targetPos.y > cc.winSize.height) ? (targetPos.y / cc.winSize.height) : 1;
        this.camera.zoomRatio = 1 - (0.5 - ratio) * 0.5;
    },
});