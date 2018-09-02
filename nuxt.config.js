module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sugarpop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700' }
    ],
    script: [
      { src: '/js/vendor/jquery-2.2.4.min.js', type: 'text/javascript' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', body: true, integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q', crossorigin: 'anonymous', type: 'text/javascript' },
      { src: '/js/vendor/bootstrap.min.js', type: 'text/javascript' },
      { src: "https://maps.googleapis.com/maps/api/js?key: 'IzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA", type: 'text/javascript', body: true },
      { src: '/js/easing.min.js', type: 'text/javascript', body: true },
      { src: '/js/hoverIntent.js', type: 'text/javascript', body: true },
      { src: '/js/superfish.min.js', type: 'text/javascript', body: true },
      { src: '/js/jquery.ajaxchimp.min.js', type: 'text/javascript', body: true },
      { src: '/js/jquery.magnific-popup.min.js', type: 'text/javascript', body: true },
      { src: '/js/jquery-ui.js', type: 'text/javascript', body: true },
      { src: '/js/owl.carousel.min.js', type: 'text/javascript', body: true },
      { src: '/js/jquery.nice-select.min.js', type: 'text/javascript', body: true },
      { src: '/js/mail-script.js', type: 'text/javascript', body: true },
      { src: '/js/main.js', type: 'text/javascript', body: true }
    ],
    css: [{
      src: '~assets/linearicons.css', lang: 'css',
      src: '~assets/owl.carousel.css', lang: 'css',
      src: '~assets/font-awesome.min.css', lang: 'css',
      src: '~assets/nice-select.css', lang: 'css',
      src: '~assets/magnific-popup.css', lang: 'css'
    }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  plugins: [
    '~/plugins/directives.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        const vueLoader = config.module.rules.find((loader) => loader.loader === 'vue-loader')
        vueLoader.options.transformToRequire = {
          video: 'src',
          source: 'src'
        };

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

