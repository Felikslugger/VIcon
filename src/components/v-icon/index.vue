<template>
  <i :class="'v-icon-' + name"></i>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    name: String
  }
}
</script>

<style>
@import url('./iconfont.css')
</style>