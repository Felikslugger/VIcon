<template>
  <h1>狗</h1>
  <div class="threejs-demo">
    <div class="threejs-demo__container">
      <div class="threejs-demo__container__canvas" ref="canvas"></div>
    </div>
  </div>
</template>
<script>
//使用three.js画一个多边形
import * as THREE from 'three';

export default {
  name: 'ThreeJsDemo',
}
</script>