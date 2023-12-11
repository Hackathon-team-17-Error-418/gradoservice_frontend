<template>
  <TheHeaderHome />
  <TheMainRepair />
</template>

<script>
// import { ref } from 'vue'
import TheHeaderHome from '@/components/blocks/TheHeaderHome'
import TheMainRepair from '@/components/blocks/TheMainRepair'

export default {
  name: 'RepairPage',
  components: {
    TheHeaderHome,
    TheMainRepair
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
