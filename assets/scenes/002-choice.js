// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        is_debug: false,    // 调试信息
        gravity: cc.v2(0, -320),    //系统默认重力

        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;

        if (this.is_debug) { //开启调试信息

            var Bits = cc.PhysicsManager.DrawBits;

            cc.director.getPhysicsManager().debugDrawFlags = Bits.e_jointBit | Bits.e_shapeBit;

        }

        else {// 关闭调试信息

            cc.director.getPhysicsManager().debugDrawFlags = 0;

        }


        cc.director.getPhysicsManager().gravity = this.gravity;

        let manager = cc.director.getPhysicsManager();
        // 开启物理步长的设置
        manager.enabledAccumulator = true;

        // 物理步长，默认 FIXED_TIME_STEP 是 1/60
        manager.FIXED_TIME_STEP = 1 / 30;

        // 每次更新物理系统处理速度的迭代次数，默认为 10
        manager.VELOCITY_ITERATIONS = 8;

        // 每次更新物理系统处理位置的迭代次数，默认为 10
        manager.POSITION_ITERATIONS = 8;
    },

    start() {

    },

});
