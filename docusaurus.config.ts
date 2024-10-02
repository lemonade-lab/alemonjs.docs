import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

/**
 *
 * @param config
 * @returns
 */
const defineConfig = (config: Config) => config

const number = '粤ICP备2021060137号'
const icon =
  '<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>'
const link = `<a class="footer__link-item navbar__item" href="https://beian.miit.gov.cn/" target="_blank"> ${number} ${icon} </a>`

export default defineConfig({
  title: 'AlemonJS',
  tagline: '阿柠檬，基于 JavaScript 所构建的跨平台开发框架',
  url: 'https://alemonjs.com',
  baseUrl: '/',
  organizationName: 'lemonade-lab',
  projectName: 'alemonjs-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lemonade-lab/alemonjs-docs/tree/main/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AlemonJS',
      logo: {
        alt: 'AlemonJS Logo',
        src: 'img/alemon.png'
      },
      items: [
        {
          position: 'left',
          label: 'Dev DOCS',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar'
        },
        {
          position: 'left',
          label: 'Edit DOCS',
          href: 'https://github.com/lemonade-lab/alemonjs-docs/blob/main/docs/intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab',
          label: 'Lemonade-lab'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab/create-alemonjs//blob/main/README.md',
          label: 'Template'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab/alemonjs',
          label: 'AlemonJS Code'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: '简介',
              to: '/docs/intro'
            },
            {
              label: '开发文档',
              to: '/docs/category/开发文档'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: 'lemonade-lab',
              href: 'https://github.com/lemonade-lab'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'alemonjs',
              href: 'https://github.com/lemonade-lab/alemonjs'
            },
            {
              label: 'chat-space',
              href: 'https://github.com/lemonade-lab/chat-space'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LEMONADE | ${link}`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: true,
        language: ['en', 'zh'],
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }
    ]
  ],
  stylesheets: []
})
