<template>
    <div class="click-counter">
        <div class="counter-num">次数：{{num}}</div>
        <button class="counter-btn" @click="handleClick">增加</button>
        <button class="counter-reset-btn" @click="handleResetClick">重置</button>
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
  // 接受外部传入的属性initNum
  props: {
    initNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      num: this.initNum // 使用传入的值作为初始
    }
  },
  methods: {
    handleClick () {
      this.num += 1
      this.notifyNum()
    },
    handleResetClick () {
      this.num = 0
      this.notifyNum()
    },
    notifyNum () {
      this.$emit('clicknum', {
        num: this.num
      })
    }
  }

}
</script>

<style>
.click-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  background-color: #ffffff;
  padding: 10px;
}

.counter-num,
.counter-btn,
.counter-reset-btn {
  flex: 1;
  margin: 3px;
}
</style>


