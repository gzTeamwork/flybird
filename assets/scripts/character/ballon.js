// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        //  最大速率
        maxSpeed: 10,
        hightDashboard: cc.ProgressBar
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


    moveFlags: 0,
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let controllerArea = cc.find("/Canvas");
        controllerArea.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        controllerArea.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.moveFlags = 0;
        this.hightDashboard.totalLength = this.maxSpeed
        this.hightDashboard.progress = 0
    },

    touchStartPoint: null,
    touchStartTime: null,
    touchEndPoint: null,
    touchEndTime: null,
    touchStatus: 0,

    onTouchStart(event) {
        let touchLoc = event.touch.getLocation();
        this.touchStartPoint = touchLoc;
        this.touchStartTime = new Date().getTime();
        this.touchStatus = 1;
    },

    onTouchEnd(event) {
        let touchLoc = event.touch.getLocation();
        let touchTime = new Date().getTime();
        this.touchEndPoint = touchLoc;

        this.moveFlags = 1;
        this.touchStatus = 0;
        //  结算动力
        this.pushBallon(
            this.touchStartPoint,
            this.touchEndPoint,
            this.maxSpeed,
            this
        )

    },
    body: null,
    start() {
        this.body = this.getComponent(cc.RigidBody);
    },

    update: function (dt) {
        if (this.moveFlags) {
            this.pushBallon(
                this.touchStartPoint,
                this.touchEndPoint,
                this.maxSpeed,
                this
            )
        }


        // if (this.touchStatus) {
        // let yd = this.body.linearVelocity.y
        // this.hightDashboard.progress = Math.abs(yd) / this.maxSpeed
        // }

    },
    lateUpdate: function () {
        let yd = this.body.linearVelocity.y
        this.hightDashboard.progress = Math.abs(yd) / this.maxSpeed
    },
    pushBallon: function (sp, ep, ms = 1, character) {

        this.moveFlags = 0;

        if (!this.body)
            return;

        // 排除3,4象限操作 - 往下划
        if (sp.y > ep.y) {
            console.log('下划动作,操作无效')
            return;
        }

        let xd, yd;
        xd = (ep.x - sp.x) * 5;
        yd = Math.abs(sp.y - ep.y) * 5;
        yd = yd > this.maxSpeed ? this.maxSpeed : yd
        // 施力
        character.body.angularVelocity = xd / 3;
        character.body.linearVelocity = cc.Vec2(xd, yd);




    }
});
