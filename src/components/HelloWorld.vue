<template>
  <HomeNav />
  <div class="demo-icon">
    <ul class="demo-icon-list">
      <li class="icon-item" v-for="item in icon" :key="item">
        <v-icon :name="item"></v-icon>
        <span @click="copy(item)">{{ item }}</span>
      </li>
    </ul>
  </div>
  <Footer />
  <v-icon class="to_top" @click="toTop()" name="up-circle-fill"></v-icon>
</template>

<script>
import defaultIcon from '../assets/defaultIcon.json';
import HomeNav from './home/HomeNav.vue';
import Footer from './Footer.vue';
export default {
  name: "HelloWorld",
  components: { HomeNav, Footer },

  data() {
    return {
      // icon: ['gitee', 'csdn', 'js', 'email', 'zhuye', 'h5', 'boshimao', 'css3', 'my', 'dingwei', 'xuanze'],
      icon: []
    };
  },
  mounted() {
    console.log(defaultIcon);
    this.icon = defaultIcon.icon;

    //去除icon1中元素的前缀v-icon-
    // let arr = [];
    // this.icon1 = this.icon1.map(item => arr.push(item.replace('v-icon-', '')));
    // console.log(arr);
    //截取arr的一半
    // this.icon2 = arr.slice(0, arr.length / 2);
    // this.icon3 = arr.slice(arr.length / 2, arr.length);

  },
  methods: {
    copy(item) {
      //复制v-icon整个标签
      let copyText = document.createElement('input');
      copyText.value = `<v-icon name="${item}"></v-icon>`;
      document.body.appendChild(copyText);
      copyText.select();
      document.execCommand('copy');
      document.body.removeChild(copyText);
      this.$message({
        message: '复制成功',
        type: 'success'
      });
    },
    toTop() {
      //平滑滚动到顶部
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        let speed = top / 4;
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop -= speed;
        } else {
          document.body.scrollTop -= speed;
        }
        if (top == 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  }
}
</script>

<style scoped lang="less">
.demo-icon {
  margin: 50px;

  .demo-icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid var(--el-border-color);
    border-left: 1px solid var(--el-border-color);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    .icon-item {
      text-align: center;
      color: var(--el-text-color-regular);
      height: 100px;
      font-size: 13px;
      border-right: 1px solid var(--el-border-color);
      border-bottom: 1px solid var(--el-border-color);
      transition: background-color var(--el-transition-duration);
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      span {
        cursor: pointer;
        position: relative;
        height: 35px;
        line-height: 35px;

        &::before {
          content: '';
          position: absolute;
          width: 80%;
          height: 1px;
          border-top: 1px dashed #ccc;
          left: 10%;
          top: -6px;
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: #000;
    margin: 10px;

    &:hover {
      color: #41b883;
      transition: 1s;
    }
  }
}

.to_top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 30px;
}
</style>
