<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data() {
      return {
      }
    },
          
  }
</script>

<style scoped>
  #tabbar{
    display: flex;
    height: 49px;
    background: #f6f6f6;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.03);
  }
</style>