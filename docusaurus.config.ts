import { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import sidebars from './sidebars'; // Make sure this path is correct

const config: Config = {
  title: 'La domus ',
  tagline: 'Bienvenue',
  favicon: 'img/favicon.ico',
  url: 'https://ladomus-web.vercel.app/',
  baseUrl: '/',
  organizationName: 'Dada972Dev',
  projectName: 'ladomusweb',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars'),
          editUrl: 'https://github.com/Dadadou972/wiki-ngbe/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Dadadou972/wiki-ngbe/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          to: 'blog',
          label: 'News',
          position: 'left',
        },
        {
          href: 'https://discord.gg/S59PsPvV9v',
          label: 'Collège rosa bonheur',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
          ,
          ],
        },
      copyright: `Copyright © ${new Date().getFullYear()} La domus web.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;