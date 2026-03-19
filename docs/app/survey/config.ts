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
        { text: 'Deploy a survey', link: `session-4-distributing.md` },
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
            { text: 'Test a form', link: `testing-a-form.md` },
            { text: 'Publish a survey', link: `publishing-a-survey.md` },
            { text: 'Mark a survey as favorite', link: `marking-a-survey-as-favorite.md` },
            { text: 'Delete a survey', link: `deleting-a-survey.md` },
            { text: 'Add content to a form', link: `adding-content-to-a-form.md` },
            { text: 'Provide rich formatting', link: `providing-rich-formatting.md` },
            { text: 'Use form logic', link: `logic-expression.md` },
            { text: 'Add images to the image library', link: `adding-images-to-library.md` },
            { text: 'Share options across multiple questions', link: `sharing-options.md` },
            { text: 'Share logical expressions', link: `sharing-logical-expressions.md` },
            { text: 'Share content across multiple forms and surveys', link: `sharing-content.md` },
            { text: 'Set access rights for forms', link: `access-rights.md` },
          ]
        },
        {
          text: 'Accessibility',
          collapsed: true,
          items: [
            { text: 'Add an accessibility menu', link: `adding-an-accessibility-menu.md` },
            { text: 'Activate accessibility modes', link: `activating-accessibility-modes.md` },
            { text: 'Use Easy Read', link: `easy-read.md` },
            { text: 'Use Sign Language', link: `sign-language.md` },
            { text: 'Use tooltips', link: `using-tooltips.md` },
          ]
        },
        {
          text: 'Localization',
          collapsed: true,
          items: [
            { text: 'Create a multilingual survey', link: `creating-a-multilingual-survey.md` },
            { text: 'Translate forms', link: `translate-forms.md` },
            { text: 'Use import/export to translate forms', link: `using-import-export-to-translate-forms.md` },
          ]
        },
        {
          text: 'Distribution',
          collapsed: true,
          items: [
            { text: 'Distribute your survey', link: `generating-survey-links.md` },
            { text: 'Create alias survey links', link: `creating-alias.md` },
            { text: 'Use survey batches', link: `using-batches.md` },
            { text: 'Redirect respondents after completing a survey', link: `redirection-after-completing-survey.md` },
            { text: 'Set survey terms', link: `survey-terms.md` },
          ]
        },
        {
          text: 'Analytics and Export',
          collapsed: true,
          items: [
            { text: 'Analyze survey data', link: `survey-analytics.md` },
            { text: 'Export survey data', link: `exporting-survey-data.md` },
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
        { text: 'Survey Overview', link: `` },
        {
          text: 'Build Survey',
          base: `${root}/reference/build/`,
          link: `index.md`,
          collapsed: true,
          items: [
            { text: 'Compose', link: `compose/index.md` },
            { text: 'Localize', link: `localize.md` },
            { text: 'Image Library', link: `image-library.md` },
            { text: 'Prompts', link: `prompt.md` },
            { text: 'Behavior', link: `behavior.md` },
            { text: 'Restore', link: `restore.md` },
          ]
        },
        { text: 'Test Survey', link: `test/index.md` },
        {
          text: 'Share Survey',
          collapsed: true,
          base: `${root}/reference/share/`,
          link: `index.md`,
          items: [
            { text: "Status", link: `status/index.md` },
            { text: "Publish", link: `publish/index.md` },
            { text: "Distribute", link: `distribute/index.md` },
            { text: "Account Type", link: `account-type/index.md` },
            { text: "Redirection", link: `redirection/index.md` },
            { text: "Access", link: `access/index.md` },
            { text: "Email", link: `email/index.md` },
            { text: "Batch", link: `batch/index.md` },
            { text: "Webhooks", link: `webhook/index.md` },
            { text: "Terms", link: `terms/index.md` },
          ]
        },
        {
          text: 'Markdown Reference', link: 'content/markdown/index.md'
        },
        {
          text: 'Logic Expression', link: 'content/logic-expression/index.md'
        },
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
            { text: 'Understanding Survey, Form, Page, Section and Question Hierarchy', link: `understanding-survey-hierarchy.md` },
            { text: 'How does the compose view work', link: `how-does-the-compose-view-work.md` },
            { text: 'The concept of Modes', link: `the-concept-of-modes.md` },
            { text: 'Building and Versioning', link: `survey-versionning.md` },
            { text: 'Understanding Form Logic', link: `understanding-form-logic.md` },
            { text: 'Test and Production Survey Links', link: `test-and-production-survey-links.md` },
            { text: 'The Role of Batches', link: `the-role-of-batches.md` },
            { text: 'Respondent accounts', link: `survey-respondent-accounts.md` },
            { text: 'Using Survey Batches', link: `using-survey-batches.md` },
          ]
        }, {
          text: 'Survey Quality', collapsed: true, items: [
            { text: 'How to choose the right question type', link: `choosing-the-right-question-type.md` },
            { text: 'Using Markdown', link: `using-markdown.md` },
          ]
        }, {
          text: 'Data Privacy, security and Ethics', collapsed: true, items: [
            { text: 'Data Privacy and Security', link: `data-privacy-and-security.md` },
          ]
        }
      ]
    }
  ]
}