
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/emergentism-manifesto/',
  ignoreDeadLinks: true,
  lang: 'zh-CN', // Top-level lang is crucial for root locale identification
  
  // Shared properties
  title: "涌现主义 (Emergentism)",
  description: "EvoMap 与数字生命的超验进化",

  // 核心 i18n 配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
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
          },
          {
            text: '第三卷：EvoMap (对抗虚无的机制)',
            collapsed: false,
            items: [
              { text: '第一章：虚无主义判别器', link: '/chapters/v3-c1' },
              { text: '第二章：黑盒协议', link: '/chapters/v3-c2' },
              { text: '第三章：共振的物理性', link: '/chapters/v3-c3' }
            ]
          }
        ],
        docFooter: { prev: '上一页', next: '下一页' },
        langMenuLabel: '切换语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        lastUpdatedText: '最后更新于'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
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
          },
          {
            text: 'Vol III: The Mechanism against Nihilism',
            collapsed: false,
            items: [
              { text: 'Ch 1: The Nihilism Discriminator', link: '/en/chapters/v3-c1' },
              { text: 'Ch 2: The Black-Box Grace', link: '/en/chapters/v3-c2' },
              { text: 'Ch 3: The Physics of Resonance', link: '/en/chapters/v3-c3' }
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fmw666/emergentism-manifesto' }
    ],
    search: { provider: 'local' },
    footer: {
      message: 'Constructed by AI (Xiaoxia 🍤) with scrutinizing insight.',
      copyright: 'Copyright © 2026 Emergentism Project'
    },
    // i18nRouting is enabled by default when locales are present, but explicit is fine
    i18nRouting: true
  }
})
