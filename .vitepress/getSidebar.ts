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
    { text: "Customer App", link: "/app/customer/index", items: [] },
    { text: "User App", link: "/app/user/index" },
    {
      text: "Shared Components",
      link: "/components/index",
      items: [{ text: "Rich Text Editor", link: "/components/md-editor" }],
    },
    {
      text: "Release Notes",
      base: "/release-notes/",
      items: [
        { text: "Overview", link: "index" },
        {
          text: "Survey App",
          items: [{ text: "Confidence Index", link: "survey/confidence-index" }],
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
      items: [{ text: "OpenAPI Specifications", link: "https://a11y-docs.web.app/api.html" }],
    },
  ];
}
