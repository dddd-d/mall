<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#c00">
        <div slot="tab-bar-icon" class="iconfont icon-home"></div>
        <div slot="tab-bar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort" activeColor="#c00">
        <div slot="tab-bar-icon" class="iconfont icon-sort"></div>
        <div slot="tab-bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#c00">
        <div slot="tab-bar-icon" class="iconfont icon-cart"></div>
        <div slot="tab-bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#c00">
        <div slot="tab-bar-icon" class="iconfont icon-my"></div>
        <div slot="tab-bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
  export default {
    name: 'MainTabBar',
    data() {
      return {
        
      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  @import url('~@/assets/font/iconfont.css');
</style>