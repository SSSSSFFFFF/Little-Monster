// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property 
    jumpHeight = 0;
    
    // 主角跳跃持续时间
    @property
    jumpDuration: number = 0;
    // 最大移动速度
    @property
    maxMoveSpeed: number = 0;
    // 加速度
    @property
    accel: number =  0;
    jumpAction: cc.ActionInterval;

     setJumpAction() {
    // 跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    // 下落
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    // 不断重复
    return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    onLoad () {
        // 初始化跳跃动作
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    }
    start () {

    }

    // update (dt) {}
}
