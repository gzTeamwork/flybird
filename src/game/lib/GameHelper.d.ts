// TypeScript file

declare namespace GH {
    interface ImageHelper {

        getImageResourceByName?(resourceName: string): void,

        fixScale?(ImgSp: egret.Bitmap, scaleMode: number, sw: number, sh: number): void,
        fixAlignCenter?(ObjSp: egret.DisplayObject, maxWidth: number, maxHeight: number, originX: number, orightY: number): void,

    }
}