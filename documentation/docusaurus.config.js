/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Urban Dhobi",
  tagline: "It's in the name ye dingus",
  url: "https://thesidehustle.github.io",
  baseUrl: "/urban-dhobi/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "thesidehustle", // Usually your GitHub org/user name.
  projectName: "urban-dhobi", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Urban Dhobi",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/docs/intro", label: "Documentation", position: "left" },
        {
          href: "https://github.com/thesidehustle/urban-dhobi.git",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/urbandhobi",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/wise__introvert",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/thesidehustle/urban-dhobi.git",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Urban Dhobi, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/thesidehustle/urban-dhobi/edit/master/documentation/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
