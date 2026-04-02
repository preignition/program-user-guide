export function getSidebar() {
  return [
    {
      text: 'Survey App', link: '/app/survey/index',
      items: [
        { text: 'Tutorials', link: '/app/survey/tutorial/index' },
        { text: 'How-to Guides', link: '/app/survey/how-to/index' },
        { text: 'Reference', link: '/app/survey/reference/index' },
        { text: 'Explanation', link: '/app/survey/explanation/index' }

      ]
    },
    { text: 'Customer App', link: '/app/customer/index', items: [] },
    { text: 'User App', link: '/app/user/index' },


    {
      text: 'APIs',
      items: [
      ]
    }
  ]
}
