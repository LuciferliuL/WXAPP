<template>
    <div class="container">
        <div>计数结果：{{count}}</div>
        <navigator url="../testadd2/main" class="navlink">进入计数器页面</navigator>
    </div>
</template>

<script>

export default {
  computed: {
    count () {
      return this.$Vuex.state.count
    }
  }
}
</script>

<style>
.navlink {
  text-decoration: underline;
}
</style>

