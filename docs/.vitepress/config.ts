import { defineConfig } from 'vitepress'

function getSidebar() {
  console.info('getSidebar')
  return [
    {
      text: 'Survey App', link: '/app/survey/index',
      items: [
        { text: 'Tutorials', link: '/app/survey/tutorial/index' },
        { text: 'How-to Guides', link: '/app/survey/how-to/index' },
        { text: 'Reference', link: '/app/survey/reference/index' },
        { text: 'Explanation', link: '/app/survey/explanatio/indexn' }

      ]
    },
    { text: 'Customer App', link: '/app/customer/index', items: [] },
    { text: 'User App', link: '/app/user/index' },
    //{ text: 'Discussion ', link: '/app/discussion' },


    {
      text: 'APIs',
      items: [
      ]
    }
  ]
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Accessible Data Documentation",
  description: "Documentation for Accessible Data documentation applications ",
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/a14y_logo_style.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'accessilbe surveys', link: 'https://accessiblesurveys.com' },
      { text: 'accessible data', link: 'https://a11ydata.com' }
    ],
    editLink: {
      pattern: 'https://github.com/preignition/program-user-guide/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: getSidebar(),

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/19765136' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/accessibledata.bsky.social' },
      { icon: 'github', link: 'https://github.com/preignition/program-user-guide' }
    ]
  },

  additionalConfig(path) {
    return [{
      title: `Hello from ${path}`,
      // '/app/survey': surveyConfig
    }]
  }
})
