<template>
  <HomeNav />
  <h1>Ant Design官方图标库</h1>
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
import antIcon from '@/assets/antIcon.json';
import HomeNav from '@/components/home/HomeNav.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: "AboutView",
  data() {
    return {
      icon: []
    };
  },
  mounted() {
    this.icon = antIcon.icon;
  },
  methods: {
    copy(item) {
      //复制v-icon整个标签
      let copyText = document.createElement("input");
      copyText.value = `<v-icon name="${item}"></v-icon>`;
      document.body.appendChild(copyText);
      copyText.select();
      document.execCommand("copy");
      document.body.removeChild(copyText);
      this.$message({
        message: "复制成功",
        type: "success"
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
  },
  components: { HomeNav, Footer }
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
}

.to_top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 30px;
}
</style>
