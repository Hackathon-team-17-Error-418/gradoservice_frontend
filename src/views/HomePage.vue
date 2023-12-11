<template>
  <TheHeaderHome />
  <TheMainHome />
</template>

<script>
// import { ref } from 'vue'
import TheHeaderHome from '@/components/blocks/TheHeaderHome'
import TheMainHome from '@/components/blocks/TheMainHome'

export default {
  name: 'HomePage',
  components: {
    TheHeaderHome,
    TheMainHome
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
