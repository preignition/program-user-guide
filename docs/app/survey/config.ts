import { defineAdditionalConfig } from "vitepress";
import { getNav as getRootNav } from "../../../.vitepress/getNav.js";

const root = "/app/survey";

export default defineAdditionalConfig({
  title: "Accessible Surveys",
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav(),
  },
});

function getNav() {
  const nav = getRootNav();
  nav.push({ text: "Survey App", link: `${root}/index` });
  nav.push({ text: "Tutorials", link: `${root}/tutorial/index` });
  nav.push({ text: "How-to", link: `${root}/how-to/index` });
  nav.push({ text: "Reference", link: `${root}/reference/index` });
  nav.push({ text: "Explanation", link: `${root}/explanation/index` });

  return nav;
}

function getSidebar() {
  return [
    {
      text: "Tutorials",
      link: `index`,
      base: `${root}/tutorial/`,
      items: [
        { text: "Create a new survey", link: `session-1-creating-a-new-survey.md` },
        { text: "Add accessibility options", link: `session-2-adding-accessibility-options.md` },
        { text: "Translate a survey", link: `session-3-localization.md` },
        { text: "Deploy a survey", link: `session-4-distributing.md` },
        { text: "Analyze survey responses", link: `session-5-analyzing-survey-responses.md` },
      ],
    },
    {
      text: "How-to",
      link: `index`,
      base: `${root}/how-to/`,
      items: [
        {
          text: "Creating and editing",
          collapsed: true,
          items: [
            { text: "Create a new survey", link: `creating-a-new-survey.md` },
            { text: "Edit a survey", link: `editing-a-survey.md` },
            { text: "Test a form", link: `testing-a-form.md` },
            { text: "Mark a survey as favorite", link: `marking-a-survey-as-favorite.md` },
            { text: "Delete a survey", link: `deleting-a-survey.md` },
            { text: "Restore deleted survey items", link: `restore-deleted-items.md` },
            { text: "Add content to a form", link: `adding-content-to-a-form.md` },
            { text: "Put text above a question", link: `text-above-a-question.md` },
            { text: "Control content visibility", link: `controlling-visibility.md` },
            { text: "Provide rich formatting", link: `providing-rich-formatting.md` },
            { text: "Use form logic", link: `logic-expression.md` },
            { text: "Add images to the image library", link: `adding-images-to-library.md` },
            { text: "Randomize survey items", link: `randomizing-items.md` },
            { text: "Style a survey", link: "styling-a-survey.md" },
            { text: "Set access rights for forms", link: `access-rights.md` },
            {
              text: "Share content across multiple forms and surveys",
              link: `sharing-content.md`,
              items: [
                { text: "Share a section with other teams", link: `how-to-share-section.md` },
                { text: "Share options across multiple questions", link: `sharing-options.md` },
                {
                  text: "Share logical expressions across multiple items",
                  link: `sharing-logical-expressions.md`,
                },
              ],
            },
          ],
        },
        {
          text: "Accessibility",
          collapsed: true,
          items: [
            { text: "Activate accessibility modes", link: `activating-accessibility-modes.md` },
            { text: "Use Read Aloud", link: `read-aloud.md` },
            { text: "Choose a form layout", link: `form-layout-and-accessibility.md` },
            { text: "Add an accessibility menu", link: `adding-an-accessibility-menu.md` },
            { text: "Use Easy Read", link: `use-easy-read.md` },
            { text: "Use Sign Language", link: `use-sign-language.md` },
            { text: "Use tooltips", link: `use-tooltips.md` },
          ],
        },
        {
          text: "Localization",
          collapsed: true,
          items: [
            { text: "Create a multilingual survey", link: `localize-survey.md` },
            { text: "Use import/export to translate forms", link: `import-export.md` },
          ],
        },
        {
          text: "Distribution",
          collapsed: true,
          items: [
            { text: "Publish a survey", link: `publishing-a-survey.md` },
            { text: "Send invitations to a team audience", link: `send-invitations.md` },
            { text: "Configure respondent emails", link: `respondent-emails.md` },
            { text: "Track campaigns and UTM links", link: `campaigns-and-utm.md` },
            { text: "Configure respondent account types", link: `respondent-account-types.md` },
            { text: "Set up webhooks", link: `webhooks.md` },
            { text: "Use survey batches", link: `using-batches.md` },
            {
              text: "Redirect respondents after completing a survey",
              link: `configure-redirection.md`,
            },
            { text: "Set survey terms", link: `survey-terms.md` },
          ],
        },
        {
          text: "Analytics and Export",
          collapsed: true,
          items: [
            { text: "Analyze survey responses", link: `survey-analytics.md` },
            { text: "Analyze respondent behavior", link: `behavior-analytics.md` },
            { text: "Export survey data", link: `exporting-survey-data.md` },
            { text: "Purge collected data", link: `purging-collected-data.md` },
          ],
        },
      ],
    },
    {
      text: "Reference",
      collapsed: true,
      link: `index.md`,
      base: `${root}/reference/`,
      items: [
        {
          text: "Build Survey",
          base: `${root}/reference/build/`,
          link: `index.md`,
          collapsed: true,
          items: [
            {
              text: "Compose",
              base: `${root}/reference/build/compose/`,
              link: `index.md`,
              items: [
                { text: "Form", link: `form.md` },
                { text: "Text Page", link: `text-page.md` },
                { text: "Page", link: `page.md` },
                { text: "Section", link: `section.md` },
                { text: "Question", link: `question.md` },
                { text: "Account Email", link: `account-email.md` },
              ],
            },
            { text: "Behavior", link: `behavior.md` },
            { text: "Localize", link: `localize.md` },
            { text: "Image Library", link: `image-library.md` },
            { text: "Review", link: `review.md` },
            { text: "Prompts", link: `prompt.md` },
            { text: "Restore", link: `restore.md` },
          ],
        },
        { text: "Test Survey", link: `test/index.md` },
        {
          text: "Share Survey",
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
            { text: "Transfer", link: `transfer/index.md` },
            { text: "Import/Export", link: `import-export/index.md` },
            { text: "Email", link: `email/index.md` },
            { text: "Batch", link: `batch/index.md` },
            { text: "Campaign", link: `campaign/index.md` },
            { text: "Webhooks", link: `webhook/index.md` },
            { text: "Behavioral Tracking", link: `behavioral-tracking.md` },
            { text: "Terms", link: `terms/index.md` },
          ],
        },
        {
          text: "Analyze Survey",
          collapsed: true,
          base: `${root}/reference/analyze/`,
          items: [
            { text: "Survey Analytics", link: `survey.md` },
            { text: "Behavioral Analytics", link: `behavior.md` },
            { text: "Progress", link: `progress.md` },
          ],
        },
        {
          text: "Markdown Reference",
          collapsed: true,
          link: "index.md",
          base: `${root}/reference/content/markdown/`,
          items: [
            { text: "Visibility Control", link: `visibility-control.md` },
            { text: "Convenient Class", link: `convenient-class.md` },
            { text: "CSS Tokens", link: `css-tokens.md` },
            { text: "Info Boxes", link: `info-boxes.md` },
            { text: "Web Components", link: `available-web-components.md` },
          ],
        },
        {
          text: "Logic Expression",
          collapsed: true,
          base: `${root}/reference/content/logic-expression/`,
          link: `index.md`,
          items: [
            { text: "Introduction", link: `introduction.md` },
            { text: "Advanced", link: `advanced.md` },
            { text: "Jexl Syntax", link: `jexl-syntax.md` },
          ],
        },
      ],
    },
    {
      text: "Explanation",
      // collapsed: true,
      base: `${root}/explanation/`,
      link: `index.md`,
      items: [
        {
          text: "Architecture and Key Concepts",
          collapsed: true,
          items: [
            {
              text: "Understanding Survey, Form, Page, Section and Question Hierarchy",
              link: `understanding-survey-hierarchy.md`,
            },
            { text: "How does the compose view work", link: `how-does-the-compose-view-work.md` },
            { text: "The concept of Modes", link: `the-concept-of-modes.md` },
            { text: "Building and Versioning", link: `survey-versioning.md` },
            { text: "Understanding Form Logic", link: `understanding-form-logic.md` },
            {
              text: "Test and Production Survey Links",
              link: `test-and-production-survey-links.md`,
            },
            { text: "The Role of Batches", link: `the-role-of-batches.md` },
            { text: "Respondent accounts", link: `survey-respondent-accounts.md` },
            { text: "Resuming Incomplete Surveys", link: `resuming-incomplete-surveys.md` },
          ],
        },
        {
          text: "Survey Quality",
          collapsed: true,
          items: [
            {
              text: "How to choose the right question type",
              link: `choosing-the-right-question-type.md`,
            },
            { text: "Using Markdown", link: `using-markdown.md` },
            { text: "Confidence Index", link: `confidence-index.md` },
            {
              text: "Understanding Section Sharing & Reusability",
              link: `understanding-section-sharing.md`,
            },
            { text: "Understanding Randomization", link: `understanding-randomization.md` },
            {
              text: "Choosing a form layout for cognitive accessibility",
              link: `choosing-a-form-layout.md`,
            },
          ],
        },
        {
          text: "Accessible Formats and Production",
          collapsed: true,
          items: [
            {
              text: "Producing Surveys in Plain Language or Easy Read",
              link: "producing-plain-language-easy-read.md",
            },
            {
              text: "Producing Surveys in Sign Languages",
              link: "producing-sign-language.md",
            },
          ],
        },
        {
          text: "Data Privacy, security and Ethics",
          collapsed: true,
          items: [
            { text: "Authentication and Identity", link: `authentication.md` },
            { text: "Authorization and Security Rules", link: `authorization.md` },
            { text: "Data Privacy and Security", link: `data-privacy-and-security.md` },
            { text: "GDPR Compliance and Survey Privacy", link: `gdpr-compliance.md` },
            { text: "Writing a Survey Privacy Policy", link: `writing-a-privacy-policy.md` },
          ],
        },
        {
          text: "Useful web-related or technical concepts",
          collapsed: true,
          items: [
            { text: "What is JSON?", link: `what-is-json.md` },
            { text: "Understanding CSS Units", link: `understanding-css-units.md` },
            { text: "Understanding CSS Variables", link: `understanding-css-variables.md` },
          ],
        },
      ],
    },
  ];
}
