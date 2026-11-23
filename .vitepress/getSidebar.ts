export function getSidebar() {
  return [
    {
      text: "Survey App",
      link: "/app/survey/index",
      items: [
        { text: "Tutorials", link: "/app/survey/tutorial/index" },
        { text: "How-to Guides", link: "/app/survey/how-to/index" },
        { text: "Reference", link: "/app/survey/reference/index" },
        { text: "Explanation", link: "/app/survey/explanation/index" },
      ],
    },
    {
      text: "Listserv App",
      link: "/app/listserv/index",
      items: [
        { text: "Tutorials", link: "/app/listserv/tutorial/index" },
        { text: "How-to Guides", link: "/app/listserv/how-to/index" },
        { text: "Reference", link: "/app/listserv/reference/index" },
        { text: "Explanation", link: "/app/listserv/explanation/index" },
      ],
    },
    {
      text: "Customer Portal",
      link: "/app/customer/index",
      items: [
        { text: "Tutorials", link: "/app/customer/tutorial/index" },
        { text: "How-to Guides", link: "/app/customer/how-to/index" },
        { text: "Reference", link: "/app/customer/reference/index" },
        { text: "Explanation", link: "/app/customer/explanation/index" },
      ],
    },
    { text: "User App", link: "/app/user/index" },
    { text: "Blog App", link: "/app/blog/index" },
    { text: "Discussion App", link: "/app/discussion/index" },
    {
      text: "Shared Components",
      link: "/components/index",
      items: [
        { text: "Rich Text Editor", link: "/components/md-editor" },
        { text: "Quota Card", link: "/components/quota-card" },
      ],
    },
    {
      text: "Release Notes",
      base: "/release-notes/",
      items: [
        { text: "Overview", link: "index" },
        {
          text: "Survey App",
          collapsed: true,
          items: [
            {
              text: "Analytics & Behavior (2.4.0)",
              link: "2026-11-18-analytics-and-behavior",
            },
            {
              text: "Survey Emails & Review (2.2.0)",
              link: "2026-10-20-survey-emails-and-review",
            },
            {
              text: "One Question Per Page (1.3.1)",
              link: "2026-08-16-one-question-per-page-layout",
            },
            {
              text: "Section Library & Sharing (1.3.0)",
              link: "2026-08-15-section-library-and-sharing",
            },
            {
              text: "Campaigns & UTM Tracking (1.1.0)",
              link: "2026-07-08-campaigns-and-utm-tracking",
            },
            {
              text: "Item Randomization (1.0.2)",
              link: "2026-05-28-survey-randomization",
            },
            {
              text: "Account Email Sync (1.0.0)",
              link: "2026-05-27-account-email-synchronization",
            },
            {
              text: "Confidence Index (1.0.1)",
              link: "2026-05-25-confidence-index",
            },
            {
              text: "Scroll Page Before Next (1.0.0)",
              link: "2026-05-20-scroll-page-before-next",
            },
          ],
        },
        {
          text: "Listserv App",
          collapsed: true,
          items: [
            {
              text: "Know Who Received It (1.2.0)",
              link: "2026-11-23-listserv-confirm-receipts",
            },
            {
              text: "Audience Import (1.1.0)",
              link: "2026-11-03-listserv-audience-import",
            },
          ],
        },
        {
          text: "Customer Portal & API",
          collapsed: true,
          items: [
            {
              text: "Team API Keys & Endpoints (1.2.0)",
              link: "2026-08-11-api-keys-and-definition-endpoints",
            },
          ],
        },
        {
          text: "Shared Components",
          collapsed: true,
          items: [
            {
              text: "Theme-Aware Markdown (1.1.6)",
              link: "2026-06-05-theme-aware-markdown",
            },
          ],
        },
      ],
    },
    {
      text: "APIs",
      items: [{ text: "OpenAPI Specifications", link: "/api.html", target: "_blank" }],
    },
  ];
}
