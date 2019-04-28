// TypeScript file

class demoWolrd extends GameWorld.physicsWorld {
    public constructor(Game) {
        super(Game);

        this.createLayers({});
        //  加载demo场景
        this.loadScene('src/game/world/demo/scene/demoEnter.exml', 'Bottom');

        this.createGravity(0, 0.98)
    }
}