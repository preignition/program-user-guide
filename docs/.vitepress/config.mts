import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Accessible Data Documentation",
  description: "Documentation for Accessible Data documentation applications ",
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

    sidebar: [
      {
        text: 'Survey App', link: '/app/survey',
        items: [
          { text: 'Tutorials', link: '/app/survey/tutorial' },
          { text: 'How-to Guides', link: '/app/survey/how-to' },
          { text: 'Reference', link: '/app/survey/reference' },
          { text: 'Explanation', link: '/app/survey/explanation' }

        ]
      },
      { text: 'Customer App', link: '/app/customer', items: [] },
      { text: 'User App', link: '/app/user' },
      //{ text: 'Discussion ', link: '/app/discussion' },


      {
        text: 'APIs',
        items: [
        ]
      }],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/19765136' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/accessibledata.bsky.social' },
      { icon: 'github', link: 'https://github.com/preignition/program-user-guide' }
    ]
  }
})
