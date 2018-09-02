<template>
  <div>
    <AppBanner />
    <AppAbout />
    <AppAbout2 />
    <AppAbout3 />
    <AppCategories />
    <AppFooter />
  </div>

</template>

<script>
import AppBanner from '~/components/AppBanner.vue'
import AppAbout from '~/components/AppAbout.vue'
import AppAbout2 from '~/components/AppAbout2.vue'
import AppAbout3 from '~/components/AppAbout3.vue'
import AppCategories from '~/components/AppCategories.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppBanner,
    AppAbout,
    AppAbout2,
    AppAbout3,
    AppCategories,
    AppFooter
  }
}
</script>