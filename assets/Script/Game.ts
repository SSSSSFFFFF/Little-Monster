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

    @property(cc.Prefab)
    starPrefab: cc.Prefab = null;
    // 星星产生后消失时间的随机范围
    @property
    maxStarDuration = 0;
    @property
    minStarDuration = 0;
    // 地面节点，用于确定星星生成的高度
    @property(cc.Node)
    ground :cc.Node  =null
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    @property(cc.Node)
    player: cc.Node = null
    node:any
    groundY:number;

    //functions 

    spawnNewStar() {
        // 使用给定的模板在场景中生成一个新节点
        var newStar: any = cc.instantiate(this.starPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newStar);
        // 为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
    }
    getNewStarPosition() {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
       
        var randY = this.groundY + Math.random() * this.player.getComponent('player').jumpHeight + 50;
        // 根据屏幕宽度，随机得到一个星星 x 坐标
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星坐标
        return cc.v2(randX, randY);
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 获取地平面的 y 轴坐标
        console.log(this.ground.y)
        this.groundY = this.ground.y + this.ground.height / 2;
        // 生成一个新的星星
        this.spawnNewStar();
    }

    start () {

    }

    // update (dt) {}
}
