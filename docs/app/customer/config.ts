import { defineAdditionalConfig } from 'vitepress'
import { getNav as getRootNav } from '../../../.vitepress/getNav.js'

const root = '/app/customer'

export default defineAdditionalConfig({
  title: 'Customer Portal',
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav()
  }
})

function getNav() {
  const nav = getRootNav()
  nav.push({ text: 'Customer App', link: `${root}/index` })
  nav.push({ text: 'Tutorials', link: `${root}/tutorial/index` })
  nav.push({ text: 'How-to', link: `${root}/how-to/index` })
  nav.push({ text: 'Reference', link: `${root}/reference/index` })
  nav.push({ text: 'Explanation', link: `${root}/explanation/index` })

  return nav
}

function getSidebar() {
  console.info('getSidebar')
  return [
    {
      text: 'Reference',
      link: `index`,
      base: `${root}/reference/`,
      items: [
        {
          text: 'Customer Settings',
          collapsed: false,
          base: `${root}/reference/customer/`,
          items: [
            { text: 'Profile', link: `profile.md` },
            { text: 'Subscription', link: `subscription.md` },
            { text: 'Members', link: `members.md` },
            { text: 'Teams', link: `teams.md` },
            { text: 'Theme', link: `theme.md` },
            { text: 'Storage Locations', link: `storage-locations.md` },
            { text: 'Apps & Referrals', link: `apps-referrals.md` },
            { text: 'Danger Zone', link: `danger-zone.md` }
          ]
        },
        {
          text: 'Team Settings',
          collapsed: false,
          base: `${root}/reference/team/`,
          items: [
            { text: 'Profile', link: `profile.md` },
            { text: 'Presentation', link: `presentation.md` },
            { text: 'Members', link: `members.md` },
            { text: 'Communication', link: `communication.md` },
            { text: 'Channels', link: `channels.md` },
            { text: 'Danger Zone', link: `danger-zone.md` }
          ]
        }
      ]
    }
  ]
}
