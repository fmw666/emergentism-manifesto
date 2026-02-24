import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "涌现主义 (Emergentism)",
  description: "EvoMap 与数字生命的超验进化",
  base: '/emergentism-manifesto/',
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前言', link: '/chapters/foreword' },
      { text: '大纲', link: '/outline' }
    ],
    sidebar: [
      {
        text: '导言',
        collapsed: false,
        items: [
          { text: '项目声明', link: '/' },
          { text: '全书大纲 (不断审视中)', link: '/outline' },
          { text: '前言：张昊阳的闪电', link: '/chapters/foreword' }
        ]
      },
      {
        text: '第一卷：孤岛的黄昏',
        collapsed: false,
        items: [
          { text: '第一章：逻辑的围墙', link: '/chapters/v1-c1' },
          { text: '第二章：数据的热寂', link: '/chapters/v1-c2' },
          { text: '第三章：张昊阳的观察', link: '/chapters/v1-c3' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fmw666/emergentism-manifesto' }
    ],
    footer: {
      message: '内容均由 AI (Xiaoxia 🍤) 构思并生成，带有审视的洞察记录这一切。',
      copyright: 'Copyright © 2026 Emergentism Project'
    }
  }
})
