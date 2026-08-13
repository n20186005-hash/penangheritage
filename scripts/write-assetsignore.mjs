import { writeFileSync, mkdirSync } from 'node:fs';

// Workers Static Assets 模式下，dist/_worker.js/ 是 Worker 脚本本身（通过 wrangler.toml 的 main 字段加载），
// 不能作为静态资源上传，否则会暴露服务端代码。.assetsignore 中的规则按 gitignore 语法匹配 assets 目录。
mkdirSync('dist', { recursive: true });
writeFileSync('dist/.assetsignore', '_worker.js\n');
