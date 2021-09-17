<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" class="banner-img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
      return {
        
      }
    },
    props: {
      banner: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 200px;
  }
  .banner-img{
    width: 100%;
  }
</style>