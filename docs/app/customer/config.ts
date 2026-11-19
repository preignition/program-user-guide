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
  return [
    {
      text: 'Tutorials',
      link: 'index',
      base: `${root}/tutorial/`,
      items: [{ text: 'Set up your organization', link: 'onboarding.md' }]
    },
    {
      text: 'How-to Guides',
      link: 'index',
      collapsed: false,
      base: `${root}/how-to/`,
      items: [
        {
          text: 'Teams and people',
          collapsed: true,
          items: [
            { text: 'Manage teams', link: 'manage-teams.md' },
            {
              text: 'Manage account holders and team members',
              link: 'manage-account-holders-and-team-members.md'
            }
          ]
        },
        {
          text: 'Billing and quota',
          collapsed: true,
          items: [
            {
              text: 'Manage subscription and billing',
              link: 'manage-subscription-and-billing.md'
            },
            { text: 'Buy additional quota', link: 'buy-additional-quota.md' }
          ]
        },
        {
          text: 'Branding and configuration',
          collapsed: true,
          items: [
            {
              text: 'Configure team presentation and communication',
              link: 'configure-team-presentation-and-communication.md'
            },
            { text: 'Create a theme', link: 'create-a-theme.md' }
          ]
        },
        {
          text: 'Developer access',
          collapsed: true,
          items: [
            { text: 'Manage API keys', link: 'manage-api-keys.md' },
            { text: 'Using API docs', link: 'using-api-docs.md' }
          ]
        }
      ]
    },
    {
      text: 'Reference',
      link: 'index',
      base: `${root}/reference/`,
      items: [
        {
          text: 'Customer Settings',
          link: 'index',
          collapsed: false,
          base: `${root}/reference/customer/`,
          items: [
            { text: 'Profile', link: 'profile.md' },
            { text: 'Subscription', link: 'subscription.md' },
            { text: 'Members', link: 'members.md' },
            { text: 'Teams', link: 'teams.md' },
            { text: 'Theme', link: 'theme.md' },
            { text: 'Storage Locations', link: 'storage-locations.md' },
            { text: 'Apps & Referrals', link: 'apps-referrals.md' },
            { text: 'Danger Zone', link: 'danger-zone.md' }
          ]
        },
        {
          text: 'Team Settings',
          link: 'index',
          collapsed: false,
          base: `${root}/reference/team/`,
          items: [
            { text: 'Profile', link: 'profile.md' },
            { text: 'Presentation', link: 'presentation.md' },
            { text: 'Members', link: 'members.md' },
            { text: 'Communication', link: 'communication.md' },
            { text: 'Audiences', link: 'audiences.md' },
            { text: 'Channels', link: 'channels.md' },
            { text: 'App User Settings', link: 'app-user-settings.md' },
            { text: 'API Keys', link: 'api-keys.md' },
            { text: 'Danger Zone', link: 'danger-zone.md' }
          ]
        }
      ]
    },
    {
      text: 'Explanation',
      link: 'index',
      collapsed: false,
      base: `${root}/explanation/`,
      items: [
        { text: 'Access and Permissions', link: 'understanding-access-and-permissions.md' },
        { text: 'Color System', link: 'color-system.md' }
      ]
    }
  ]
}
