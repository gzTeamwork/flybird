module GameWorld {
	export class BaseWorld {

		public Game;

		public Layers: { [key: string]: number } = {
			 'Bottom': 0, 'Main': 1, 'Effect': 2, 'Ui': 3, 'Pad': 4 
			}

		//	获取图层组编号
		public getLayersIndex = (name: string): number | null => {
			return this.Layers[name] || null;
		}

		public constructor(Game) {
			this.Game = Game;
		}

		//	创建图层		
		public createLayers(Layers: { [key: string]: number }){

			this.Layers = Object.assign(this.Layers, Layers)
			console.log("需要创建的图层", this.Layers)
			for (let e in this.Layers) {
				let i = this.Layers[e];
				if (i > 0) {
					let _layer = new GameLayer.LayerGroup(e, e + 'Layer');

					_layer.width = this.Game.stage.stageWidth;
					_layer.height = this.Game.stage.stageHeight;
					this.Game.addChildAt(_layer, i);
					let testText = new egret.TextField();
					testText.x = i, testText.y = i * 50;
					_layer.addChild(testText);
				}
			}
		}
		//	加载场景
		public loadScene = (sceneName: string, layerName: string) => {
			let _scene = new GameScene.basicScene(sceneName);
			let _layer = this.Game.getChildAt(this.getLayersIndex(layerName));
			_scene.width = this.Game.stageWidth,_scene.height = this.Game.stageHeight;
			_layer.addChildAt(_scene,0);
		}
	}
}