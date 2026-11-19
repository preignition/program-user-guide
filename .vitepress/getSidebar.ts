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
          items: [
            {
              text: "Analytics & Behavior (2.4.0)",
              link: "2026-11-18-analytics-and-behavior",
            },
            { text: "Confidence Index", link: "survey/confidence-index" },
          ],
        },
        {
          text: "Listserv App",
          items: [{ text: "Import an Audience", link: "listserv/audience-import" }],
        },
        {
          text: "Form Builder",
          items: [
            { text: "Scroll Page Before Next", link: "form-builder/scroll-page-before-next" },
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
