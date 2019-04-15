// TypeScript file


abstract class GameImageHelper implements GH.ImageHelper {
    static getImageResourceByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    static fixScale(ImgSp: egret.Bitmap, scaleMode: 0, sw: number, sh: number): void {
        if (scaleMode == 0) {
            // let nw = 
        }
    }

    static fixAlignCenter(Obj: egret.DisplayObject, W: number = 0, H: number = 0, X: number | boolean = false, Y: number | boolean = false): void {
        if (X !== false) {
            Obj.x = (X > Obj.width ? (<number>X - Obj.width) : Obj.width - <number>X) / 2;
        }
        if (Y !== false) {
            Obj.y = (<number>Y - Obj.height) / 2;
        }
    }
}

