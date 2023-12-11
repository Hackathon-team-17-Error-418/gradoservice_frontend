<template>
  <button :class="{
    'rectanglebtn': !revers,
    'rectanglebtn_revers': revers
    }"
    :type="typeBtn">
    {{ textBtn }}
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'BaseButton',
  components: {
  },
  props: {
    textBtn: {
      type: String,
      default: ''
    },
    revers: {
      type: Boolean,
      default: false
    },
    typeBtn: {
      type: String,
      default: 'button'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.rectanglebtn {
  width: 260px;
  height: 70px;
  border-radius: 50px;
  background: #D58C51;
  border: none;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  cursor: pointer;
}

.rectanglebtn:hover {
  background: none;
  border: solid 3px #D58C51;
  color: #8D7C7C;
}

.rectanglebtn:active {
  width: 260px;
  height: 70px;
  border-radius: 50px;
  background: none;
  border: solid 1px #D58C51;
  color: #8D7C7C;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  cursor: pointer;
}

.rectanglebtn_revers {
  width: 260px;
  height: 70px;
  border-radius: 50px;
  background: none;
  border: solid 3px #D58C51;
  color: #8D7C7C;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  cursor: pointer;
}

.rectanglebtn_revers:hover {
  background: #D58C51;
  border: none;
  color: #fff;
}
</style>
