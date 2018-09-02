import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"sugarpop","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:100,200,400,300,500,600,700"}],"script":[{"src":"\u002Fjs\u002Fvendor\u002Fjquery-2.2.4.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.12.9\u002Fumd\u002Fpopper.min.js","body":true,"integrity":"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K\u002FScQsAP7hUibX39j7fakFPskvXusvfa0b4Q","crossorigin":"anonymous","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fvendor\u002Fbootstrap.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key: 'IzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Feasing.min.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002FhoverIntent.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fsuperfish.min.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fjquery.ajaxchimp.min.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fjquery.magnific-popup.min.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fjquery-ui.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fowl.carousel.min.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fjquery.nice-select.min.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fmail-script.js","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fmain.js","type":"text\u002Fjavascript","body":true}],"css":[{"src":"~assets\u002Fmagnific-popup.css","lang":"css"}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

