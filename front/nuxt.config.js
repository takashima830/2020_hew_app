export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  env: {
    apiUrl: process.env.API_URL,
    HostFrontUrl: process.env.HOST_FRONT_URL
  },

  ssr: false,
  head: {
    title: 'agri',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  router: {
    middleware: ['auth']
  },
  loading: {
    color: 'green',
    failedColor: 'red',
    height: '5px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/css/destyle.css',
    '@assets/css/common.scss',
    'swiper/css/swiper.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios/axios.js',
    '~/plugins/axios/index.js',
    '~/plugins/vue-line-clamp/index.js',
    '~/plugins/vue-awesome-swiper/index.js',
    {
      src: '~/plugins/vue-social-share/index.js',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources',
    'vue-social-sharing/nuxt'
  ],
  auth: {
    plugins: ['~/plugins/my-auth/my-auth.js'],
    redirect: {
      login: '/login',   // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/',  // ログアウト時のリダイレクトURL
      callback: false,   // Oauth認証等で必要となる コールバックルート
      home: '/',         // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        token: {
          property: 'access_token'
        },
        user: {
          property: false
        },
        endpoints: {
          login: {url: 'auth', method: 'post'},
          user: {url: 'user/', method: 'get'},
          logout: false
        },
      }
    }
  },
  styleResources: {
    scss: [
      '~/assets/css/variables.scss',
      '~/assets/css/mixins/*.scss',
      // '~/assets/css/mixins/*.scss'
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: [
      'vue-awesome-swiper'
    ]
  },
  watchers: {
    webpack: {
      poll: 1000
    }
  }
}
