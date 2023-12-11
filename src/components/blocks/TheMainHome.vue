<template>
  <div class="main">
    Список автомобилей на диагностику
  </div>
  <CardCar
    v-for="(card, idx) in cars"
    :key="idx"
    :urlImg="card.url"
    :title="card.title"
    @click-add="addCarToRepair(card)"
  />
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

import CardCar from '../elements/CardCar.vue'

export default {
  name: 'TheMainHome',
  components: {
    CardCar
  },
  props: {
  },
  setup () {
    const store = useStore()

    const cars = ref([
      {
        id: 1,
        url: require('@/assets/img/one.png'),
        title: 'Buick Х111ХХ116'
      },
      {
        id: 2,
        url: require('@/assets/img/two.png'),
        title: 'Jaguar F-type R Х555ХХ116'
      },
      {
        id: 3,
        url: require('@/assets/img/three.png'),
        title: 'Tesla Model 3 Х777ХХ116'
      }
    ])

    const addCarToRepair = (val) => {
      store.commit('SetPushRepairCars', val)
    }

    return {
      cars,
      addCarToRepair
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
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
