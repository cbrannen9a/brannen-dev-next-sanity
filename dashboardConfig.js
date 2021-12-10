export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "61b2305d455d757a545c1a27",
                  title: "Sanity Studio",
                  name: "brannen-dev-next-studio",
                  apiId: "6d69b14c-3108-4b16-974f-769b7c3b536e",
                },
                {
                  buildHookId: "61b2305e4920e1b15246a230",
                  title: "Landing pages Website",
                  name: "brannen-dev-next",
                  apiId: "c41ff34e-a4de-44bc-98f9-5421e37ef4ea",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/cbrannen9a/brannen-dev-next-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://brannen-dev-next.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recently edited",
        order: "_updatedAt desc",
        limit: 10,
        types: ["page"],
      },
      layout: { width: "medium" },
    },
  ],
};
