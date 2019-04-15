// TypeScript file


abstract class GameImageHelper implements GH.ImageHelper {

    static fixScale(ImgSp: egret.Bitmap, scaleMode: 0, sw: number, sh: number): void {
        if (scaleMode == 0) {
            // let nw = 
        }
    }

    static fixAlignCenter(Obj: egret.DisplayObject, W: number = 0, H: number = 0, X: number | boolean = false, Y: number | boolean = false): void {
        if (X !== false) {
            Obj.x = (<number>X - Obj.width) / 2;
        }
        if (Y !== false) {
            Obj.y = (<number>Y - Obj.height) / 2;
        }
    }
}

