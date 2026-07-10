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

仓库名：`jay-portfolio`  
线上地址：`https://<username>.github.io/jay-portfolio/`

推送 `main` 分支后，GitHub Actions 会自动构建并部署（见 `.github/workflows/deploy.yml`）。

### 首次部署前（仅需一次）

在 GitHub 仓库中：

1. **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 推送代码到 `main` 分支

### 本地模拟 GitHub Pages 构建

**Windows (PowerShell):**

```powershell
$env:GITHUB_PAGES_BASE_PATH="/jay-portfolio"
npm run build
```

**macOS / Linux:**

```bash
GITHUB_PAGES_BASE_PATH=/jay-portfolio npm run build
```

构建产物在 `out/`（已被 `.gitignore` 忽略，不会提交）。

### 部署检查清单

- `output: "export"` 已启用
- `images.unoptimized: true` 已启用
- `basePath` / `assetPrefix` 在 CI 中设为 `/jay-portfolio`
- `public/.nojekyll` 已包含
- `out/` 不提交，由 Actions 在云端构建
