# SuperGrok Help

SuperGrok Help 是一个面向中文用户的 Grok / SuperGrok 教程站、SEO 站和落地页站。网站用于整理国内使用教程、购买前说明、账号服务介绍、常见问题和新手指南，并将购买按钮统一跳转到超哥 AI 服务。

本站为第三方 Grok / SuperGrok 使用教程与服务说明站，非 xAI、Grok 官方网站，与 xAI 无隶属关系。

## 技术栈

- Next.js 16
- TypeScript
- Tailwind CSS
- App Router
- 静态生成与 SEO metadata
- Vercel 部署友好

## 本地运行

```bash
npm install
npm run dev
```

本地默认访问：

```bash
http://localhost:3000
```

生产构建：

```bash
npm run build
npm run start
```

## 部署到 Vercel

1. 将项目推送到 GitHub 仓库 `supergrok.help`。
2. 在 Vercel 新建项目并导入该 GitHub 仓库。
3. Framework Preset 选择 `Next.js`。
4. Build Command 使用 `npm run build`。
5. Output Directory 保持默认。
6. 部署完成后绑定域名 `supergrok.help`。

## 修改购买链接

统一配置在：

```text
config/site.ts
```

主要字段：

- `orderUrl`：页面主要 CTA 购买链接
- `navOrderUrl`：导航栏“前往下单”链接
- `articleOrderUrl`：文章页固定底部 CTA 链接
- `brandName`：网站品牌名
- `serviceName`：服务名称

## 修改文章内容

文章数据在：

```text
data/articles.ts
```

每篇文章包含：

- `title`
- `slug`
- `category`
- `excerpt`
- `seoTitle`
- `seoDescription`
- `date`
- `content`
- `faqs`
- `relatedArticles`

新增文章后，Next.js 会自动在 `/articles` 列表展示，并为 `/articles/[slug]` 生成静态详情页，同时加入 `sitemap.xml`。

## SEO

- 每个页面配置独立 `title`、`description` 和 `canonical`
- 自动生成 `/sitemap.xml`
- 自动生成 `/robots.txt`
- 文章页包含 Article JSON-LD 和 FAQ JSON-LD
- SuperGrok 与 Grok 账号服务页面包含 Product / Service JSON-LD
- 所有购买入口跳转到超哥 AI 服务
