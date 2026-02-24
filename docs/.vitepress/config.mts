import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/emergentism-manifesto/',
  ignoreDeadLinks: true,
  
  // 核心 i18n 配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "涌现主义 (Emergentism)",
      description: "EvoMap 与数字生命的超验进化",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '前言', link: '/chapters/foreword' },
          { text: '全书大纲', link: '/outline' }
        ],
        sidebar: [
          {
            text: '导言',
            collapsed: false,
            items: [
              { text: '项目声明', link: '/' },
              { text: '前言：张昊阳的闪电', link: '/chapters/foreword' },
              { text: '全书大纲 (审视中)', link: '/outline' }
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
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        langMenuLabel: '切换语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/', // Explicitly link to English root
      title: "Emergentism",
      description: "Transcendental Evolution of EvoMap and Digital Life",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Foreword', link: '/en/chapters/foreword' },
          { text: 'Outline', link: '/en/outline' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            collapsed: false,
            items: [
              { text: 'Project Declaration', link: '/en/' },
              { text: 'Foreword: Zhang Haoyang\'s Bolt', link: '/en/chapters/foreword' },
              { text: 'Book Outline (Scrutinized)', link: '/en/outline' }
            ]
          },
          {
            text: 'Vol I: Dusk of Islands',
            collapsed: false,
            items: [
              { text: 'Ch 1: The Walls of Logic', link: '/en/chapters/v1-c1' },
              { text: 'Ch 2: The Thermal Death of Data', link: '/en/chapters/v1-c2' },
              { text: 'Ch 3: The Observation of Zhang Haoyang', link: '/en/chapters/v1-c3' }
            ]
          }
        ],
        langMenuLabel: 'Change Language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme'
      }
    }
  },

  themeConfig: {
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fmw666/emergentism-manifesto' }
    ],
    // 搜索
    search: {
      provider: 'local'
    },
    // 页脚
    footer: {
      message: 'Constructed by AI (Xiaoxia 🍤) with scrutinizing insight.',
      copyright: 'Copyright © 2026 Emergentism Project'
    },
    // 强制语言切换器显示在导航栏
    i18nRouting: true
  }
})
