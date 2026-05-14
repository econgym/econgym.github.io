# EconGym Challenge — Competition Website

A static GitHub Pages-style website for the **EconGym Challenge: AI agent-Driven Economic Simulation of Household Behavior**, a NeurIPS 2026 competition. The design is inspired by the [PokéAgent Challenge](https://pokeagent.github.io/) website.

## 一句话概括

参赛者为 **EconGym** 中的异质家庭 agent 设计决策策略（LLM / RL / rule-based），使 10,000 个 agent 在给定宏观经济政策下产生的人口行为分布尽可能逼近真实的美国家庭调查数据（**Survey of Consumer Finances**），是一个 dynamic simulation 任务。

## 文件结构

```
.
├── index.html      # 主页面（包含所有 section）
├── styles.css      # 样式表（深色科技风 + 渐变色）
├── script.js       # 倒计时、移动端导航、滚动动画、复制引用
└── README.md       # 本文件
```

## 本地预览

直接用浏览器打开 `index.html` 即可。也可以用任意静态服务器：

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库（例如 `econgym-challenge`）。
2. 把这个目录里的文件全部 push 到 `main` 分支。
3. 进入仓库 **Settings → Pages**，将 **Source** 设为 `main` 分支的根目录。
4. 几分钟后即可通过 `https://<your-username>.github.io/econgym-challenge/` 访问。

如果想用自定义域名（例如 `econgym.github.io`），把仓库改名为 `<username>.github.io` 即可。

## 包含的 Section

- **Hero**：标题、副标题、方法学标签、CTA 按钮、截止日期倒计时
- **Track**：竞赛任务卡片（含 4 个行为维度、关键统计数据、Coming Soon 占位）
- **About / Problem Background**：问题背景（Behavior Cloning / RL / LLM 局限性）
- **Key Research Areas**：4 大研究前沿
- **Leaderboard**：排行榜占位（Coming Soon）
- **Rules**：参赛规则简述
- **Prizes**：奖项设置
- **Organizers**：组织团队占位
- **FAQ**：常见问题
- **Citation**：BibTeX 引用（可一键复制）
- **Footer**：联系方式与快速链接

## 自定义

- **截止日期**：修改 `script.js` 顶部的 `deadline` 变量。
- **颜色主题**：修改 `styles.css` 中 `:root` 下的 CSS 变量。
- **章节内容**：直接编辑 `index.html` 中对应 section。
- **Logo**：替换 `.logo-icon` 内的 inline SVG。
