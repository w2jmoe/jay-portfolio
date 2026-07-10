# Jay Wu Sales Page

Jay Wu 的个人 Sales Page，基于 Next.js + TypeScript + Tailwind CSS 构建。

## 开发

### 环境要求

- Node.js 18 或更高版本（需包含 npm）
- Windows 用户可直接使用项目根目录的 `start.bat`

### 方式一：双击启动（推荐，Windows）

1. 在项目根目录双击 `start.bat`
2. 脚本会自动检测 `node_modules`：
   - 不存在时自动执行 `npm install`
   - 存在时直接进入开发模式
3. 看到 `Starting development server...` 后，在浏览器打开 [http://localhost:3000](http://localhost:3000)

### 方式二：命令行启动

```bash
npm install
npm run dev
```

### 其他命令

```bash
npm run build   # 生产构建（静态导出到 out/）
npm run lint    # 代码检查
```

## 部署到 GitHub Pages

项目已配置为静态导出，构建产物位于 `out/` 目录。

### 根域名站点（username.github.io）

```bash
npm run build
```

将 `out/` 目录内容推送到 `gh-pages` 分支，或在仓库 Settings → Pages 中选择该目录部署。

### 项目子路径站点（username.github.io/repo-name）

构建前设置仓库名作为 base path，例如仓库名为 `Sales_Page`：

**Windows (PowerShell):**

```powershell
$env:GITHUB_PAGES_BASE_PATH="/Sales_Page"
npm run build
```

**macOS / Linux:**

```bash
GITHUB_PAGES_BASE_PATH=/Sales_Page npm run build
```

### 部署检查清单

- `output: "export"` 已启用
- `images.unoptimized: true` 已启用（静态导出兼容）
- `public/.nojekyll` 已包含（避免 Jekyll 处理 `_next` 目录）
- 仅在子路径部署时需要 `GITHUB_PAGES_BASE_PATH`
