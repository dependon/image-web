# Simple-Image-Filter 官方网站部署文档

## 项目概述

本文档提供了 Simple-Image-Filter 官方网站的部署和维护指南。该网站是为 GitHub 项目 [simple-image-filter](https://github.com/dependon/simple-image-filter) 创建的官方展示网站，使用 React 和 Bootstrap 开发。

## 网站结构

网站包含以下主要页面：

1. **首页** - 展示软件概述和主要特点
2. **功能特点页面** - 详细介绍软件的图像处理和滤镜功能
3. **下载页面** - 提供 Windows 和 Linux 版本的下载和安装指南
4. **文档页面** - 包含软件安装指南、使用教程和常见问题解答

## 技术栈

- **前端框架**：React.js
- **样式框架**：Bootstrap
- **路由**：React Router
- **开发环境**：Node.js

## 本地开发

### 环境要求

- Node.js (v14.0.0 或更高版本)
- npm (v6.0.0 或更高版本)

### 安装依赖

```bash
cd simple-image-filter-website
npm install
```

### 启动开发服务器

```bash
npm start
```

开发服务器将在 http://localhost:3000 启动（如果该端口被占用，将自动使用下一个可用端口）。

### 构建生产版本

```bash
npm run build
```

构建后的文件将位于 `build` 目录中，可以部署到任何静态网站托管服务。

## 部署指南

### 方法一：使用 Node.js 开发服务器

1. 克隆仓库并安装依赖：
   ```bash
   git clone <仓库地址>
   cd simple-image-filter-website
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm start
   ```

3. 服务器将在 http://localhost:3000 启动（或下一个可用端口）。

### 方法二：部署静态文件

1. 构建生产版本：
   ```bash
   npm run build
   ```

2. 将 `build` 目录中的文件部署到任何静态网站托管服务，如 GitHub Pages、Netlify、Vercel 等。

### 方法三：使用 Docker 部署

1. 创建 Dockerfile：
   ```dockerfile
   FROM node:14 as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/build /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. 构建并运行 Docker 镜像：
   ```bash
   docker build -t simple-image-filter-website .
   docker run -p 80:80 simple-image-filter-website
   ```

## 网站维护

### 更新内容

1. 修改相应的组件文件：
   - 首页：`src/pages/HomePage.tsx`
   - 功能特点：`src/pages/FeaturesPage.tsx`
   - 下载页面：`src/pages/DownloadPage.tsx`
   - 文档页面：`src/pages/DocsPage.tsx`

2. 如需更新导航或页脚，修改：
   - 导航栏：`src/components/Header.tsx`
   - 页脚：`src/components/Footer.tsx`

### 添加新页面

1. 在 `src/pages` 目录中创建新的页面组件
2. 在 `src/App.tsx` 中添加新的路由

### 更新样式

修改 `src/App.css` 文件或在组件中使用内联样式。

## 故障排除

### 常见问题

1. **启动失败**：检查 Node.js 版本和依赖安装
2. **路由问题**：确保 `BrowserRouter` 配置正确
3. **样式问题**：检查 Bootstrap 是否正确导入

### 联系支持

如有任何问题，请联系网站维护人员或提交 GitHub Issue。

## 许可证

网站代码基于与 Simple-Image-Filter 项目相同的 GPLv3+ 许可证发布。

版权所有 © 2025
