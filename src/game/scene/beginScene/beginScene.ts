// TypeScript file

class BeginScene extends BasicLayout {
    public constructor(sw,sh){
        super(sw,sh);
        let bgImg = GameImageHelper.getImageResourceByName('bg_jungle_jpg')
        this.bottomLayer.addChild(bgImg);
        
    }

}