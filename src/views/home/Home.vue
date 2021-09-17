<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <banner :banner="banners"></banner>
    <recommend :recommend="recommends"></recommend>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Banner from './child/Banner.vue'
  import Recommend from './child/Recommend.vue'
  
  import {getHomeRequest} from '@/network/home.js'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      Banner,
      Recommend
    },
    created() {
      getHomeRequest().then(res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-navbar{
    color: #fff;
    background: #ff8198;
    }
    
</style>