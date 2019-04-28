module GameWorld {
	export class BaseWorld {

		public Game;

		public constructor(Game, Opts = []) {
			this.Game = Game;

		}

		public Layers: { [key: string]: number } = {
			'Bottom': 0, 'Main': 1, 'Effect': 2, 'Ui': 3, 'Pad': 4
		}


		//	获取图层组编号
		public getLayersIndex = (name: string): number | null => {
			return this.Layers[name] || null;
		}

		//	获取图层
		public getLayer = (name: string): GameLayer.LayerGroup => {
			return this.Game.getChildAt(this.getLayersIndex(name)) || null;
		}

		//	插入元素到图层
		public addChildTo(element, layersName: string) {
			this.getLayer(layersName).addChild(element);
		}

		//	创建图层		
		public createLayers(Layers: { [key: string]: number }) {

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
			_scene.width = this.Game.stageWidth, _scene.height = this.Game.stageHeight;
			_layer.addChildAt(_scene, 0);
		}
	};
	// 重力世界
	export class physicsWorld extends BaseWorld {
		public Gravity: p2.World;

		public constructor(Game) {
			super(Game);

		}

		public createGravity = (x: number = 0, y: number = 0) => {
			var factor: number = 50;
			!!this.Gravity ? '' : this.Gravity = new p2.World();
			this.Gravity.sleepMode = p2.World.BODY_SLEEPING;
			this.Gravity.gravity = [x, y];

			egret.Ticker.getInstance().register(function (dt) {
				if (dt < 10) {
					return;
				}
				if (dt > 1000) {
					return;
				}
				this.Gravity.step(dt / 1000);

				var stageHeight: number = egret.MainContext.instance.stage.stageHeight;
				var l = this.Gravity.bodies.length;

				for (var i: number = 0; i < l; i++) {
					var boxBody: p2.Body = this.Gravity.bodies[i];
					var box: egret.DisplayObject = boxBody.displays[0];
					if (box) {
						box.x = boxBody.position[0] * factor;
						box.y = stageHeight - boxBody.position[1] * factor;
						box.rotation = 360 - (boxBody.angle + boxBody.shapes[0].angle) * 180 / Math.PI;
						if (boxBody.sleepState == p2.Body.SLEEPING) {
							box.alpha = 0.5;
						}
						else {
							box.alpha = 1;
						}
					}
				}
			}, this);
		}

		public addChildTo(element: GameElement.physicsElement, layerName: string) {
			super.addChildTo(element, layerName);
			this.Gravity.addBody(element.physicsBody);
		}
	}
}