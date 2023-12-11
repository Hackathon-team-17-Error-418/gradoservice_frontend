<template>
  <div class="main__repair">
    <span>
      Общее количество заявок на ремонт:
    </span>
    <span>
      {{ repairCars.length }}
    </span>
    <CardCar
    v-for="(card, idx) in repairCars"
    :key="idx"
    :urlImg="card.url"
    :title="card.title"
    repair
    @click-ready="readyCarToRepair(card.idx)"
  />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { ref } from 'vue'

import CardCar from '../elements/CardCar.vue'

export default {
  name: 'TheMainRepair',
  components: {
    CardCar
  },
  props: {
  },
  setup () {
    const store = useStore()

    const repairCars = computed(() => {
      return store.getters.getRepairCars
    })

    const readyCarToRepair = (val) => {
      console.log(val)
      // store.commit('SetRemoveCar', id)
    }

    return {
      repairCars,
      readyCarToRepair
    }
  }
}
</script>

<style lang="scss" scoped>
.main__repair {
  width: 200vh;
  height: 88px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #D58C51;
  font-size: 48px;
  padding-left: 20px;
  text-align: center;
  vertical-align: middle;
  line-height: 88px;
  color: #fff;
}

</style>
