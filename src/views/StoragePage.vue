<template>
  <TheHeaderHome />
  <TheMainStorage />
</template>

<script>
// import { ref } from 'vue'
import TheHeaderHome from '@/components/blocks/TheHeaderHome'
import TheMainStorage from '@/components/blocks/TheMainStorage'

export default {
  name: 'StoragePage',
  components: {
    TheHeaderHome,
    TheMainStorage
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
