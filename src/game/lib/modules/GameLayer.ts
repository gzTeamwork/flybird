module GameLayer {
	export class LayerBase extends egret.DisplayObjectContainer{
		public layerName: string;

		public constructor(name: string) {
			super();
			this.layerName = name;
			return this;
		}
	}

	export class LayerGroup extends egret.DisplayObjectContainer{
		public layerName: string;
		public layerType: string;

		public constructor(name: string,type:string) {
			super();
			this.layerType = type||'BaseLayer';
			this.layerName = name;
		}
	}

	export class LayerZoom {
		public data(){
			return{
				zoomList:{
					BottomLayer:5,
					BaseLayer:10,
					MainLayer:15,
					EffectLayer:20,
					EffectNum:25,
				}
			}
		}
	}
}