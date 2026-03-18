import { defineConfig } from 'vitepress'
import { getNav as getRootNav } from './getNav.ts'
import { getSidebar } from './getSidebar.ts'
import { getSocialLinks } from './getSocialLinks.ts'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Accessible Data Documentation",
  description: "Documentation for Accessible Data documentation applications ",
  // assetsDir: 'assets',
  srcExclude: ['**/README.md', '**/TODO.md'],
  cleanUrls: true,
  // lastUpdated: true,
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/a14y_logo_style.svg',
    editLink: {
      pattern: 'https://github.com/preignition/program-user-guide/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
        indexName: 'vitepress',
        askAi: {
          assistantId: 'YaVSonfX5bS8',
          sidePanel: true
        }
      }
    },
    nav: getNav(),
    sidebar: getSidebar(),
    socialLinks: getSocialLinks()
  },

  // additionalConfig(path) {
  //   return [{
  //     title: `Hello from ${path}`,
  //     'app/survey/': surveyConfig
  //   }]
  // }
})

function getNav() {
  const nav = getRootNav()
  nav.push({ text: 'Accessible Surveys', link: 'https://accessiblesurveys.com' })
  return nav
} 