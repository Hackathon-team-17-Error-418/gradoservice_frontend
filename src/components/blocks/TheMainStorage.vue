<template>
  <div class="storage">
    <button class="storage_has">
      Текущий баланс склада
    </button>
    <button class="storage_add">
      Добавить товар на склад
    </button>
  </div>

  <div class="container">
    <p class="title">
      Деталь 1
    </p>
    <p class="counter">
      Количество деталей: 2
    </p>
    <button class="fix">
      Редактировать
    </button>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'TheMainStorage',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.storage {
  display: flex;
  flex-direction: row;
  gap: 10vh;
}

.storage_has {
  width: 90vh;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #D58C51;
  border: none;
  font-family: Montserrat, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
}

.storage_add {
  width: 90vh;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  border: 3px solid #D58C51;
  font-family: Montserrat, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20vh;
  width: 200vh;
  height: 20vh;
  border-radius: 10px;
  margin-top: 10px;
  border: 3px solid #D58C51;
}

.title, .container {
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
}

.fix {
  width: 50vh;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #D58C51;
  border: none;
  color: #8D7C7C;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
}

</style>
