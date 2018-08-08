<template>
    <div class="container" @click="clickHandle">
        <div class="message">{{msg}}</div>
        <ClickCounter></ClickCounter> 
    </div> 
</template>
<script>
import ClickCounter from '../../components/click-counter'
export default {
  components: { ClickCounter },
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    clickHandle () {
      this.msg = 'Clicked!!!!'
    }
  }
}
</script>
<style>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>

