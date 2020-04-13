// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const MOVE_LEFT = 1;
const MOVE_RIGHT = 2;
const MOVE_UP = 3;

cc.Class({
    extends: cc.Component,

    properties: {
        maxSpeed: 12,

    },

    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        let canvas = cc.find("/Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.moveFlags = 0;
        this.canJump = 0;
    },

    start: function () {
        this.body = this.getComponent(cc.RigidBody);
    },

    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                this.moveFlags |= MOVE_LEFT;
                this.updateMotorSpeed();
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this.moveFlags |= MOVE_RIGHT;
                this.updateMotorSpeed();
                break;

            case cc.macro.KEY.w:
            case cc.macro.KEY.up:
                this.canJump |= MOVE_UP;
                this.updateJump();
                break;

        }
    },

    onKeyUp(event) {

        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                this.moveFlags &= ~MOVE_LEFT;
                // this.updateMotorSpeed();
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this.moveFlags &= ~MOVE_RIGHT;
                // this.updateMotorSpeed();
                break;

            case cc.macro.KEY.w:
            case cc.macro.KEY.up:
                this.canJump &= ~MOVE_UP;
                // this.updateJump();
                break;

        }
    },

    onTouchStart: function (event) {
        let touchLoc = event.touch.getLocation();
        if (touchLoc.x < cc.winSize.width / 2) {
            this.moveFlags |= MOVE_LEFT;
        }
        else {
            this.moveFlags |= MOVE_RIGHT;
        }
        this.body.applyForceToCenter(cc.Vec2(0, touchLoc.y))

        // this.updateMotorSpeed();
    },

    onTouchEnd: function (event) {
        let touchLoc = event.touch.getLocation();
        if (touchLoc.x < cc.winSize.width / 2) {
            this.moveFlags &= ~MOVE_LEFT;
        }
        else {
            this.moveFlags &= ~MOVE_RIGHT;
        }
        // this.updateMotorSpeed();
    },



    updateMotorSpeed() {
        if (!this.body)
            return;
        var desiredSpeed = 0;
        if ((this.moveFlags & MOVE_LEFT) == MOVE_LEFT)
            desiredSpeed = -this.maxSpeed;
        else if ((this.moveFlags & MOVE_RIGHT) == MOVE_RIGHT)
            desiredSpeed = this.maxSpeed;
        this.body.angularVelocity = desiredSpeed;

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.moveFlags) {
            this.updateMotorSpeed();
        }

        // if (this.canJump) {
        //     this.updateJump();
        // }

    },

    updateJump: function () {
        console.log('jump')
        // 获取移动速度
        let velocity = this.body.linearVelocity;
        velocity.y = this.maxSpeed * 10;
        // 设置移动速度
        this.body.linearVelocity = velocity;
        // this.body.applyForce(cc.v2(0, this.maxSpeed * 10), cc.v2(this.x, this.y + 300), true);
        // this.body.applyForceToCenter(cc.Vec2(0, this.maxSpeed));
    }


    // update(dt) { },
}
);
