<template>
  <nav>
    <img src="../../assets/vicon.png" alt="">
    <div class="can_hide">
      <a href="/">iconfont</a>
      <router-link to="/about">官方图标库</router-link>
      <a class="more" @click="showMore()">其他组件</a>
    </div>
    <div v-if="showmore" class="more_content">
      <ul>
        <li>时间组件</li>
        <li>提示组件</li>
        <li><router-link to="/three">three-js-DEMO</router-link></li>
        <li>bbb</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HomeNav',
  data() {
    return {
      showmore: false
    }
  },
  methods: {
    showMore() {
      this.showmore = !this.showmore;
    }
  }
}
</script>

<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: whitesmoke;

  img {
    width: 200px;
  }

  .can_hide {
    position: absolute;
    left: 240px;
    top: 22px;
    height: 100px;
    line-height: 100px;

    a {
      font-size: 2rem;
      margin-left: 40px;
      text-decoration: none;
    }

    .more::after {
      content: '▼';
      margin-left: 5px;
    }
  }

  .more_content {
    position: absolute;
    top: 83px;
    left: 613px;

    ul {
      list-style: none;
      padding: 1px 20px;
      background-color: #fff;
      border-radius: 5px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: -9px;
        left: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
      }

      li {
        margin: 10px 0;
      }
    }
  }
}
</style>