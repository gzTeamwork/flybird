// TypeScript file

class BasicLayout extends egret.Sprite {
    /**
     * 基本布局
     * @param sw 容器宽度
     * @param sh 容器高度
     */
    public constructor(sw, sh) {
        super();
        this._createView(sw,sh);
        
    }

    public bottomLayer: egret.Sprite;
    public mainLayer: egret.Sprite;
    public frontLayer: egret.Sprite;
    public uiLayer: egret.Sprite;
    public particleLayer: egret.Sprite;

    /**
     * 初始化视图层
     */
    private _createView(sw,sh): void {
        
        this.width = sw
        this.height = sh
        this.bottomLayer = new egret.Sprite();
        this.addChildAt(this.bottomLayer,50);
        this.bottomLayer.width = sw;
        this.bottomLayer.height = sh;

        this.mainLayer = new egret.Sprite();
        this.addChildAt(this.mainLayer,40);
       
        this.frontLayer = new egret.Sprite();
        this.addChildAt(this.frontLayer,30);

        this.uiLayer = new egret.Sprite();
        this.addChildAt(this.uiLayer,20);

        this.particleLayer = new egret.Sprite();
        this.addChildAt(this.particleLayer,10);

    }

}