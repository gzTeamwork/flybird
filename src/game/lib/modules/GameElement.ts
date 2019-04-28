module GameElement {
    export class baseElement extends egret.Sprite {
        public constructor() {
            super()
        }
    }

    export class physicsElement extends baseElement {
        public physicsBody: p2.Body;

        public createRigid = (x: number, y: number): void => {
            this.physicsBody = new p2.Body({
                type: p2.Body.STATIC,
                position: [x, y]
            })
        }
    }

    export class rigidElement extends physicsElement {

        public physicsBody: p2.Body;

        public constructor() {
            super();
            this.createRigid(0, 0);
        }

        public setShape = (shape, skin) => {
            skin.width = this.width;
            skin.heigth = this.height;
            this.physicsBody.displays = [skin];
            this.physicsBody.addShape(shape);
        }
    }

    export abstract class elementShapeDict {
        static getShape = (name: string, element: baseElement): p2.Shape => {
            let shape = new p2.Box({ width: element.width, height: element.height })
            return shape
        }
    }
}