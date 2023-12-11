<template>
  <div :class="{
    'card': true,
    'card_repair': repair
  }">
    <img :src="urlImg" alt="" :class="{
      'preview': true,
      'preview_repair': repair
    }">

    <div :class="{
    'container': true,
    'container_repair': repair
  }">
      <span :class="{
        'title': true,
        'title_repair': repair
      }">
        {{ title }}
      </span>

      <span :class="{
      'history': true,
      'history_repair': repair
    }">
        история авто
      </span>

      <button class="check"
      v-if="!repair">
        Пройти контроль
      </button>

      <button class="add"
      v-if="!repair"
      @click="$emit('click-add')">
        Отправить на ремонт
      </button>

      <input
      placeholder="Что было отремонтировано"
      type="text"
      class="input__text"
      v-else-if="repair">

      <button
      class="finish"
      @click="$emit('click-repair')"
      v-show="repair">
        Завершить ремонт
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardCar',
  components: {
  },
  props: {
    urlImg: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    repair: {
      type: Boolean,
      default: false
    },
    basket: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15vh;
  width: 200vh;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  border: 3px solid #D58C51;
}

.history {
  color: #D58C51;
  font-family: Montserrat, sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 5vh;
}

.container_repair {
  gap: 3px;
}

.preview {
  // width: 643px;
  width: 80vh;
  // height: 398px;
  height: 50vh;
}

// .preview_repair {
//   width: 40vh;
//   height: 25vh;
// }

.title {
  font-size: 48px;
  color:black;
}

.title__repair {
  font-size: 30px;
}

.history {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 32px;
  text-decoration-line: underline;
  cursor: pointer;
}

// .history__repair {
//   display: none;
// }

.check, .add, .finish {
  width: 70vh;
  height: 50px;
  background: none;
  border-radius: 50px;
  border: solid 3px #D58C51;
  color: #000;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 32px;
  cursor: pointer;
}

.check:hover {
  background-color: #D58C51;
}

.add:hover {
  background-color: #D58C51;
}

.finish:hover {
  background-color: #D58C51;
}

.input__text {
  width: 70vh;
  height: 20vh;
  border-radius: 10px;
  border: 3px solid #D58C51;
}

// .check_repair, .add_repair, .finish {
//   display: none;
// }

// .finish_repair {
//   width: 70vh;
//   height: 50px;
//   background: none;
//   border-radius: 50px;
//   border: solid 3px #D58C51;
//   color: #000;
//   font-family: Montserrat;
//   font-weight: 400;
//   font-size: 32px;
//   cursor: pointer;
// }
</style>
