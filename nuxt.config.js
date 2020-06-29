export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - Axel4Design | Front-End Developer',
        title: process.env.npm_package_name || '',
        htmlAttrs: {
            lang: 'en',
            amp: true
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                name: 'google-site-verification',
                content: 'fI2vvvnwrdwwqZVmas-9SSN4XRAo4ETE6Rx0_C_Ubk8'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },

            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,400;1,900&display=swap'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#c62828' },
    /*
     ** Global CSS
     */
    css: ['@/assets/css/main.scss', 'aos/dist/aos.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~plugins/vue-particles', ssr: false },
        { src: '~plugins/aos', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify',
        /* VUe Scroll to */
        'vue-scrollto/nuxt',
        // Or if you have custom options...
        [
            'vue-scrollto/nuxt',
            {
                duration: 1000,
                easing: 'ease-in-out'
            }
        ]
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: ['@/assets/css/*.scss']
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        theme: {
            dark: true,
            themes: {
                dark: {
                    colorOne: '#000',
                    colorTow: '#ca0a0a',
                    colorThree: '#fff'
                },
                light: {
                    colorOne: '#fff',
                    colorTow: '#ca0a0a',
                    colorThree: '#000'
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        vandor: ['aos']
        /* transpile: ['VueParticles'] */
    }
}
