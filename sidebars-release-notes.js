// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  releaseNotes: [
    // Release Notes Parent
    {
      type: "category",
      label: "Release Notes",
      link: {
        // type: "generated-index",
        type: "doc",
        id: "whats-new",
      },
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "What's New",
          id: "whats-new",
          // link: {
          //   type: "doc",
          //   id: "whats-new",
          // },
          // collapsed: true,
          // items: [],
        },
        {
          type: "doc",
          label: "Early Access",
          id: "early-access",
          // link: {
          //   type: "doc",
          //   id: "whats-new",
          // },
          // collapsed: true,
          // items: [],
        },
        {
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "generated-index",
            slug: "continuous-integration",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "continuous-integration",
            },
          ],
        },
        {
          type: "category",
          label: "Continuous Delivery",
          link: {
            type: "generated-index",
            slug: "continuous-delivery",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "continuous-delivery",
            },
          ],
        },

        {
          type: "category",
          label: "Feature Flags",
          link: {
            type: "generated-index",
            slug: "feature-flags",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "feature-flags",
            },
          ],
        },
        {
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "generated-index",
            slug: "cloud-cost-management",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "cloud-cost-management",
            },
          ],
        },
        {
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "generated-index",
            slug: "service-reliability-management",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "service-reliability-management",
            },
          ],
        },
        {
          type: "category",
          label: "Security Testing Orchestration",
          link: {
            type: "generated-index",
            slug: "security-testing-orchestration",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "security-testing-orchestration",
            },
          ],
        },
        {
          type: "category",
          label: "Chaos Engineering",
          link: {
            type: "generated-index",
            slug: "chaos-engineering",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "chaos-engineering",
            },
          ],
        },
        {
          type: "category",
          label: "Harness Platform",
          link: {
            type: "generated-index",
            slug: "platform",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "platform",
            },
          ],
        },
        {
          type: "category",
          label: "Self-Managed Enterprise Edition",
          link: {
            type: "generated-index",
            slug: "self-managed-ee",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "self-managed-ee",
            },
          ],
        },
        {
          type: "category",
          label: "Harness FirstGen",
          link: {
            type: "generated-index",
            slug: "first-gen",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "first-gen",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      label: "Subscribe via RSS",
      href: "pathname:///release-notes/rss.xml",
      className: "sidebar-item-rss",
      customProps: {
        target: "_blank",
      },
    },

    //Additional Items in this parent can go here.
  ],
};

module.exports = sidebars;
