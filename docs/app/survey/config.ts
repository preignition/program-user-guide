import { defineAdditionalConfig } from 'vitepress'
import { getNav as getRootNav } from '../../.vitepress/getNav.js'

const root = '/app/survey'

export default defineAdditionalConfig({
  title: 'Accessible Surveys',
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav()
  }
})

function getNav() {
  const nav = getRootNav()
  nav.push({ text: 'Survey App', link: `${root}/index` })
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
      text: 'Tutorials',
      link: `index`,
      base: `${root}/tutorial/`,
      items: [
        { text: 'Create a new survey', link: `session-1-creating-a-new-survey.md` },
        { text: 'Add accessibility options', link: `session-2-adding-accessibility-options.md` },
        { text: 'Translate a survey', link: `session-3-localization.md` },
        { text: 'Deploy a survey', link: `session-4-distribution.md` },
        { text: 'Analyze survey responses', link: `session-5-analyzing-survey-responses.md` },

      ]
    },
    {
      text: 'How-to',
      link: `index`,
      base: `${root}/how-to/`,
      items: [
        {
          text: 'Creating and editing',
          collapsed: true,
          items: [
            { text: 'Create a new survey', link: `creating-a-new-survey.md` },
            { text: 'Edit a survey', link: `editing-a-survey.md` },
            { text: 'Test a survey', link: `testing-a-survey.md` },
            { text: 'Publish a survey', link: `publishing-a-survey.md` },
            { text: 'Mark a survey as favorite', link: `marking-a-survey-as-favorite.md` },
            { text: 'Delete a survey', link: `deleting-a-survey.md` },
            { text: 'Add content to a form', link: `adding-content-to-a-form.md` },
            { text: 'Provide rich formatting', link: `providing-rich-formatting.md` },
            { text: 'Use form logic', link: `form-logic.md` },
            { text: 'Set access rights for forms', link: `access-rights-for-forms.md` },
            { text: 'Share options across multiple questions', link: `sharing-options-across-multiple-questions.md` },
            { text: 'Share content across multiple forms and surveys', link: `sharing-content-across-multiple-forms-and-surveys.md` },
          ]
        },
        {
          text: 'Accessibility',
          collapsed: true,
          items: [
            { text: 'Add an accessibility menu', link: `add-accessibility-menu.md` },
            { text: 'Activate accessibility modes', link: `activate-accessibility-modes.md` },
            { text: 'Use Easy Read', link: `use-easy-read.md` },
            { text: 'Use Sign Language', link: `use-sign-language.md` },
            { text: 'Use tooltips', link: `use-tooltips.md` },
          ]
        },
        {
          text: 'Localization',
          collapsed: true,
          items: [
            { text: 'create a multilingual survey', link: `create-multilingual-survey.md` },
            { text: 'Translate a survey', link: `translate-survey.md` },
            { text: 'Use import/export to translate a survey', link: `use-import-export-to-translate-survey.md` },
          ]
        },
        {
          text: 'Distribution',
          collapsed: true,
          items: [
            { text: 'Distribute a survey', link: `distribute-survey.md` },
            { text: 'Create alias survey links', link: `create-alias-survey-links.md` },
            { text: 'Use survey batches', link: `use-survey-batches.md` },
            { text: 'Redirect respondents after completing a survey', link: `redirect-respondents-after-completing-survey.md` },
            { text: 'Set survey terms', link: `set-survey-terms.md` },
          ]
        },
        {
          text: 'Analytics and Export',
          collapsed: true,
          items: [
            { text: 'Analyze survey responses', link: `analyze-survey-responses.md` },
            { text: 'Export survey data', link: `export-survey-data.md` },
          ]
        },
      ]
    },
    {
      text: 'Reference',
      collapsed: true,
      link: `index.md`,
      base: `${root}/reference/`,
      items: [

      ]
    },
    {
      text: 'Explanation',
      // collapsed: true,
      base: `${root}/explanation/`,
      link: `index.md`,
      items: [
        {
          text: 'Principles', collapsed: true, items: [
            { text: 'We have different needs', link: `` },
            { text: 'Accessibility First', link: `` },
            { text: 'Rooted in the disability movement', link: `` },
          ]
        },
        {
          text: 'Architecture and Key Concepts', collapsed: true, items: [
            { text: 'Understanding Survey, Form, Page, Section and Question Hierarchy', link: `` },
            { text: 'How does the compose view work', link: `` },
            { text: 'Building and Versioning', link: `` },
            { text: 'Understanding Form Logic', link: `` },
            { text: 'Test and Production Survey Links', link: `` },
            { text: 'The Role of Batches', link: `` },
            { text: 'Respondent accounts', link: `` },
            { text: 'Using Survey Batches', link: `` },
          ]
        }, {
          text: 'Survey Quality', collapsed: true, items: [
            { text: 'How to choose the right question type', link: `` },
            { text: 'Using Markdown', link: `` },
          ]
        }, {
          text: 'Data Privacy, security and Ethics', collapsed: true, items: [
            { text: 'Data Privacy and Security', link: `` },
          ]
        }


      ]

    }
  ]
}
