// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    }, 
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    app: {
        head: {
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "anonymous"
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Exo&display=swap"
                },
            ]
        }
    }
})
