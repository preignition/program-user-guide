import { defineAdditionalConfig } from 'vitepress'
import { getNav as getRootNav } from '../../../.vitepress/getNav.js'

const root = '/app/listserv'

export default defineAdditionalConfig({
  title: 'Accessible Listserv',
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav()
  }
})

function getNav() {
  const nav = getRootNav()
  nav.push({ text: 'Listserv App', link: `${root}/index` })
  nav.push({ text: 'Tutorials', link: `${root}/tutorial/index` })
  nav.push({ text: 'How-to', link: `${root}/how-to/index` })
  nav.push({ text: 'Reference', link: `${root}/reference/index` })
  nav.push({ text: 'Explanation', link: `${root}/explanation/index` })

  return nav
}

function getSidebar() {
  return [
    {
      text: 'Tutorials',
      link: 'index',
      base: `${root}/tutorial/`,
      items: [
        { text: 'Getting Started with Listserv', link: 'getting-started-with-listserv.md' }
      ]
    },
    {
      text: 'How-to Guides',
      link: 'index',
      base: `${root}/how-to/`,
      items: [
        { text: 'Subscribing & Preferences', link: 'subscribing-and-managing-preferences.md' },
        { text: 'Browsing Archives', link: 'browsing-and-searching-archives.md' },
        { text: 'Creating & Sending Broadcasts', link: 'creating-and-sending-broadcasts.md' },
        { text: 'Moderating Submissions', link: 'moderating-community-submissions.md' },
        { text: 'Analyzing Performance', link: 'analyzing-broadcast-performance.md' },
        { text: 'Configuring Settings', link: 'configuring-channel-settings.md' }
      ]
    },
    {
      text: 'Reference',
      link: 'index',
      base: `${root}/reference/`,
      items: [
        { text: 'Public Pages', link: 'public/index.md' },
        { text: 'Admin Pages', link: 'admin/index.md' },
        { text: 'Channel Settings', link: 'settings/index.md' }
      ]
    },
    {
      text: 'Explanation',
      link: 'index',
      base: `${root}/explanation/`,
      items: [
        { text: 'Dual-Route Architecture', link: 'dual-route-architecture.md' },
        { text: 'Broadcast Lifecycle & AI Moderation', link: 'broadcast-lifecycle-and-moderation.md' },
        { text: 'Subscriber Auth & Custom Claims', link: 'subscriber-identity-and-auth.md' },
        { text: 'Mailing Lists & Digest Engine', link: 'mailing-list-and-digest-architecture.md' }
      ]
    }
  ]
}
