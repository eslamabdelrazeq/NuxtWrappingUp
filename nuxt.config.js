import axios from 'axios'
const bodyParser = require('body-parser')
export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Global CSS
     */
    css: ['~assets/styles/main.css'],

    loading: { color: "#FF0000" },
    loadingIndicator: {
        name: "circle",
        color: "#fa923f"
    },
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        "~plugins/core-components.js",
        "~plugins/date-filter.js"
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build',
    ],
    /*
     ** Nuxt.js modules 
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt/content
        '@nuxt/content',
        '@nuxtjs/toast',
        'cookie-universal-nuxt'
    ],
    workbox: {
        runtimeCaching: [{
                urlPattern: 'localhost:3000/.*',
                handler: 'cacheFirst',
                method: 'GET'
            },
            {
                urlPattern: 'localhost:8088/.*',
                handler: 'cacheFirst',
                method: 'GET'
            },
            {
                urlPattern: 'https://nuxtwrappingup.firebaseio.com/.*',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            },
            {
                urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            },
            {
                urlPattern: 'https://cdn.mos.cms.futurecdn.net/.*',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            },
            {
                urlPattern: 'https://cdn.mos.cms.futurecdn.net/.*',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            },
            {
                urlPattern: 'https://cdn.mos.cms.futurecdn.net/.*',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            }
        ]
    },
    pwa: {
        meta: {
            title: 'My PWA',
            author: 'Me',
        },
        manifest: {
            name: 'Nuxt.js PWAs are so easy',
            short_name: 'Nuxt.js PWA',
            lang: 'en',
        }
    },
    toast: {
        position: 'top-center',
        register: [ // Register custom toasts
            {
                name: 'my-error',
                message: 'Oops...Something went wrong',
                options: {
                    type: 'error'
                }
            }
        ]
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.BASE_URL || 'https://nuxtwrappingup.firebaseio.com',
        credentials: false
    },
    /*
     ** Content module configuration
     ** See https://content.nuxtjs.org/configuration
     */
    content: {},
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
    env: {
        baseUrl: process.env.BASE_URL || 'https://nuxtwrappingup.firebaseio.com',
        authSignupUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
        authSigninUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
        fbAPIKey: 'AIzaSyCNSj4NIpiYjfxhEYTwBhMl1Z2nPbnu52k'
    },
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    router: {
        middleware: 'log',
    },
    serverMiddleware: [
        bodyParser.json(),
        '~/api'
    ],
    generate: {
        routes: function() {
            return axios
                .get("https://nuxtwrappingup.firebaseio.com/nuxtwrappingup.json")
                .then(res => {
                    const routes = [];
                    for (const key in res.data) {
                        routes.push({
                            route: "/products/" + key,
                            payload: { productData: res.data[key] }
                        });
                    }
                    return routes;
                });
        }
    }
}