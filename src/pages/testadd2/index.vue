<template>
  <div class="container btns">
    <button class="calbtn" @click="hanleDecrement">-</button>
    <span class="calnum">{{count}}</span>
    <button class="calbtn" @click="hanleIncrement">+</button>
  </div>
</template>

<script>

export default {
  computed: {
    count () {
      return this.$Vuex.state.count
    }
  },

  methods: {
    hanleIncrement () {
      this.$Vuex.commit('increment')
    },

    hanleDecrement () {
      this.$Vuex.commit('decrement')
    }
  }
}
</script>

<style scoped>
.btns {
  display: flex;
  align-items: center;
}
.calnum {
  color: red;
  font-size: 32px;
}
</style>
