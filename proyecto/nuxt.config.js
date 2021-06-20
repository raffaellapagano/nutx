export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'final',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { hid : 'autor', name : 'autor',content : 'Raffaella Pagano' },
        { hid : 'keywords', name : 'keywords',content : 'Nuxt' },
        { hid : 'generator', name : 'generator',content : 'Visual Studio Code' },
        { hid : 'description', name : 'description',content : 'Nuxt Framework' },
        { hid : 'Content-Type', 'http-equiv' : 'Content-Type',content : 'text/html; charset=ISO-8859-1' },
        { hid : 'X-UA-Compatible', 'http-equiv' : 'X-UA-Compatible',content : 'IE=10, IE=9, IE=8, IE=7, IE=EDGE, chrome=1' },
    ],
    script: 
      [
        {
          type : "text/javascript",
          src : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
          src: '"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"',
          src: '~/node_modules\bootstrap\dist\js'
        }
      ],
    link: [
      { rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 
      '~/node_modules/bootstrap/dist/css/bootstrap.css',
      '~/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
