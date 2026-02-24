import DefaultTheme from 'vitepress/theme'
import ArticleMetadata from './ArticleMetadata.vue'
import { h } from 'vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(ArticleMetadata)
    })
  }
}
