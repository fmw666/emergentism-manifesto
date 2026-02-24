---
name: vitepress-master
description: Implements and maintains VitePress docs with stable markdown rendering, i18n routing, and lint-safe formatting. Use when the user asks about VitePress setup, i18n, markdown rendering issues, theme config, or docs build quality.
---

# VitePress Master

## 适用场景

- 用户提到：VitePress、多语言、`docs/.vitepress/config.*`、Markdown 样式异常、构建报错。
- 用户要求：修复文档渲染、统一 Markdown 规范、补齐 i18n 页面或导航。

## 快速工作流

1. 先定位问题：确认是 Markdown 语法、主题 CSS、还是 VitePress 配置。
2. 修复后做双重验证：
   - `npx markdownlint-cli2 "docs/**/*.md"`
   - `npm run docs:build`
3. 对 i18n 变更，检查 `root` 和语言分支（如 `en`）是否都可访问且无死链。

## Markdown 渲染稳定性规则（重点）

### 1) 中文语境下 `**` 强调的安全写法

- 推荐：在强调块前后留空格，尤其是前一个字符是中文时。
- 示例（推荐）：
  - `而是一场 **“数字人文主义的文艺复兴”**。`
  - `而是成为了 **“高维观测者”**。`
  - `唯一的 **“负熵”**。`
- 避免：
  - `而是一场**“数字人文主义的文艺复兴”**。`
  - `唯一的**“负熵”**。`

说明：不同 Markdown 解析器对“强调分隔符边界”处理不一致。中文字符与 `**` 紧贴时，可能导致粗体不生效或吞掉后续样式。

### 2) 常见格式错误

- `**` 未闭合（后续整段样式异常）。
- 列表标记空格不规范（`*   item`）。
- 列表前后缺空行。
- 标题层级跳级（`#` 后直接 `###`）。

## 推荐 markdownlint 配置（VitePress 友好）

在仓库根目录添加 `.markdownlint-cli2.yaml`：

```yaml
config:
  MD013: false
  MD025: false
  MD033: false
```

原因：

- `MD013`：文档段落较长时不强制断行。
- `MD025`：frontmatter + 页面 H1 在文档站常见，不作为错误。
- `MD033`：VitePress 中 `<ArticleMetadata />` 这类组件语法合法且常用。

## i18n 实施清单（VitePress）

1. 在 `docs/.vitepress/config.ts|config.mts` 使用 `locales`。
2. 同步维护各语言 `themeConfig.nav` 与 `themeConfig.sidebar`。
3. 每个侧边栏链接都要有对应页面（避免语言切换后 404）。
4. 统一链接风格（避免混用 `.html` 后缀）。
5. 变更后必须构建验证。

## 官方参考（必须优先）

- VitePress Internationalization: https://vitepress.dev/guide/i18n
- VitePress Config Reference: https://vitepress.dev/reference/site-config
- VitePress Theme Config: https://vitepress.dev/reference/default-theme-config
- VitePress Markdown Extensions: https://vitepress.dev/guide/markdown

## 输出要求

- 先给出“已定位的问题 + 根因”。
- 再给“最小改动修复”。
- 最后给“验证结果”（lint + build）。
