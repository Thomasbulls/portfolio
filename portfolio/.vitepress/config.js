import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portfolio",
  description: "Peidong's Portfolio Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'My Journey',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'About Me', link: '/about' },
          { text: 'Skills and Expertise', link: '/skills' },
        ]
      },
      {
        text: 'Projects (Stay tuned)',
        items: [
          { text: 'AITok', link: '/aitok' },
          { text: 'E-Commerce Clone', link: '/ecommerce' },
          { text: 'Real Land Realty', link: '/realland' },
        ]
      },
      {
        text: 'Contact Me',
        items: [
          { text: 'Contact', link: '/contact' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Thomasbulls' }
    ],

  }
})
