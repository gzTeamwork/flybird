module GameScene {
	export class basicScene extends eui.Component {
		public constructor(exmlPath: string) {
			super();
			this.skinName = exmlPath;
		}
	}
}