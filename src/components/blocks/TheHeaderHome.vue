<template>
  <div class="header">
    <logoIcon />
    <router-link to="/">
      <BaseButton text-btn="Диагностика" revers/>
    </router-link>

    <router-link to="/repair">
      <BaseButton text-btn="Ремонт" revers/>
    </router-link>

    <router-link to="/storage">
      <BaseButton text-btn="Склад" revers/>
    </router-link>

    <router-link to="/auth">
      <BaseButton text-btn="Выйти" revers/>
    </router-link>
  </div>
</template>

<script>
// import { ref } from 'vue'
import logoIcon from '../icons/logoIcon.vue'
import BaseButton from '../ui/BaseButton.vue'

export default {
  name: 'TheHeaderHome',
  components: {
    logoIcon,
    BaseButton
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 6vh;
  padding-right: 6vh;
}
</style>
