// dev 前置检查：修复被截断的 Astro 内容缓存 + 清理残留 dev server
// 由 package.json 的 "dev"/"start" 脚本自动调用，正常情况零开销（<1s）。
//
// 背景：Astro dev 在内容同步（content sync）过程中被强杀或有第二个实例
// 抢占端口退出时，可能把 .astro/data-store.json 截断成残缺版（只有 meta，
// 丢失 spec/posts 集合），导致下次启动报
// "About page content not found"（getEntry("spec","about") 查不到），
// 以及站点统计（文章/分类/标签）全部归零。
// 本脚本检测到残缺缓存时直接删除，让 dev server 启动时完整重建。

import { existsSync, readFileSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const astroDir = join(process.cwd(), ".astro");
const dataStore = join(astroDir, "data-store.json");

// 无缓存 → 正常首次启动，无需处理
if (!existsSync(dataStore)) {
	console.log("[dev-check] 无内容缓存，dev server 将完整重建");
	process.exit(0);
}

// 残缺特征 1：文件过小。健康缓存随内容量增长（本项目正常 >30KB），
// 残缺版只有 meta 段（约 6.5KB）。
const size = statSync(dataStore).size;
if (size < 10 * 1024) {
	console.log(
		`[dev-check] 检测到残缺的内容缓存（${size} bytes < 10KB），已删除以便重建`,
	);
	rmSync(dataStore, { force: true });
	rmSync(join(astroDir, "collections"), { recursive: true, force: true });
	rmSync(join(astroDir, "content-assets.mjs"), { force: true });
	rmSync(join(astroDir, "content-modules.mjs"), { force: true });
	process.exit(0);
}

// 残缺特征 2：JSON 解析失败（写到一半被杀）
try {
	JSON.parse(readFileSync(dataStore, "utf-8"));
} catch {
	console.log("[dev-check] 内容缓存 JSON 损坏，已删除以便重建");
	rmSync(dataStore, { force: true });
	rmSync(join(astroDir, "collections"), { recursive: true, force: true });
	rmSync(join(astroDir, "content-assets.mjs"), { force: true });
	rmSync(join(astroDir, "content-modules.mjs"), { force: true });
	process.exit(0);
}

// 缓存健康，直接放行
process.exit(0);
