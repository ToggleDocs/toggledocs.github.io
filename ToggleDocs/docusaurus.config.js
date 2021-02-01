module.exports = {
  title: 'Toggle Documentation',
  tagline: 'All the docs! (For open-source projects)',
  url: 'https://toggledocs.github.io',
  baseUrl: '/ToggleCorp/build/index/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ToggleDocs', // Usually your GitHub org/user name.
  projectName: 'toggledocs.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Toggle Docs',
      logo: {
        alt: 'Toggle Documentation',
        src: 'https://github.com/toggledocs/toggledocs.github.io/ToggleDocs/static/img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/togglecorporation',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/togglecorporation',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ToggleCorp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ToggleCorp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Toggle Corporation.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/toggledocs/toggledocs.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/toggledocs/toggledocs.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
