<template>
  <div class="footer">
    <span><v-icon name="dribbble"></v-icon>made by FeliksChen</span>
    <a href="https://gitee.com/felikschen/v-icon" target="_blank"><v-icon name="gitee"></v-icon></a>
    <a href="https://blog.csdn.net/qq_47770336?spm=1010.2135.3001.5421" target="_blank"><v-icon
        name="csdn"></v-icon></a>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #41b883;

  a {
    text-decoration: none;
    color: #000;
    margin: 10px;

    &:hover {
      color: #41b883;
      background-color: #000;
      border-radius: 50%;
      transition: 1s;
    }
  }
}
</style>