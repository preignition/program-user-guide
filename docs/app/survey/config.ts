import { defineAdditionalConfig } from 'vitepress'

function getSidebar() {
  console.info('getSidebar')
  return [

    {
      text: 'Tutorials',
      link: '/app/survey/tutorial',
      items: [
        { text: 'Training Course', link: '/app/survey/tutorial/session-1-create-a-new-survey.md' },
      ]
    },
    { text: 'How-to Guides', link: '/app/survey/how-to' },
    { text: 'Reference', link: '/app/survey/reference' },
    { text: 'Explanation', link: '/app/survey/explanation' }


  ]
}


export default defineAdditionalConfig({
  themeConfig: {
    sidebar: getSidebar()
  }
})

// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "Accessible Data Documentation",
//   description: "Documentation for Accessible Data documentation applications ",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     logo: '/assets/a14y_logo_style.svg',
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'accessilbe surveys', link: 'https://accessiblesurveys.com' },
//       { text: 'accessible data', link: 'https://a11ydata.com' }
//     ],
//     editLink: {
//       pattern: 'https://github.com/preignition/program-user-guide/edit/main/docs/:path',
//       text: 'Edit this page on GitHub'
//     },

//     sidebar: getSidebar(),

//     socialLinks: [
//       { icon: 'linkedin', link: 'https://www.linkedin.com/company/19765136' },
//       { icon: 'bluesky', link: 'https://bsky.app/profile/accessibledata.bsky.social' },
//       { icon: 'github', link: 'https://github.com/preignition/program-user-guide' }
//     ]
//   },

//   additionalConfig(path) {
//     return [{
//       title: `Hello from ${path}`
//     }]
//   }
// })
