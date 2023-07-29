// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-simple-robots', 'nuxt-simple-sitemap'],
  sitemap: {
    xslTips: false,
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge, chrome=1',
        },
        {
          name: 'author',
          content: 'Ruben',
        },
        {
          name: 'keywords',
          content:
            'wallpaper,black wallpaper, gradient wallpaper,aesthetic wallpaper,iphone wallpaper,wallpaper iphone,white wallpaper,pink wallpaper',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://rsms.me/',
        },
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css',
        },
      ],
    },
  },
})
