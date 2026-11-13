export type CursorFxConfig = {
	enable: boolean; // 是否启用鼠标动效（光晕跟随 + 浅色圆点拖尾 + 悬停光环 + 点击涟漪 + 卡片聚光）
	glowSize: number; // 光晕直径（px），会按视口宽度自动钳制
	glowColor: string; // 光晕颜色（支持 CSS 颜色值）
	ringSize: number; // 悬停光环直径（px）
	followLerp: number; // 光晕跟随缓动系数（0-1，越大跟随越紧）
	trailCount: number; // 拖尾圆点数量（0 = 关闭拖尾）
	trailSize: number; // 拖尾头部圆点直径（px），尾部圆点按比例缩小
	trailColor: string; // 拖尾圆点颜色（浅色，支持 CSS 颜色值）
};

/** 鼠标动效管理器契约（CursorFx.astro 内联实现） */
export interface CursorFxManagerLike {
	init(): void;
	stop(): void;
	getIsRunning(): boolean;
}

export type SakuraConfig = {
	enable: boolean; // 是否启用樱花特效
	sakuraNum: number; // 樱花数量，默认21
	limitTimes: number; // 樱花越界限制次数，-1为无限循环
	size: {
		min: number; // 樱花最小尺寸倍数
		max: number; // 樱花最大尺寸倍数
	};
	opacity: {
		min: number; // 樱花最小不透明度
		max: number; // 樱花最大不透明度
	};
	speed: {
		horizontal: {
			min: number; // 水平移动速度最小值
			max: number; // 水平移动速度最大值
		};
		vertical: {
			min: number; // 垂直移动速度最小值
			max: number; // 垂直移动速度最大值
		};
		rotation: number; // 旋转速度
		fadeSpeed: number; // 消失速度，不应大于最小不透明度
	};
	zIndex: number; // 层级，确保樱花在合适的层级显示
};
