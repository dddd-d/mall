<template>
  <div class="recommend">
    <div v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    data() {
      return {
        
      }
    },
    props: ['recommend']
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 25px;
    border-bottom: 10px solid #eee;
  }
  .recommend a{
    color: #000;
  }
  .recommend a img{
    width: 75px;
    margin-bottom: 10px;
    ;
  }
  .recommend > div{
    flex: 1;
  }
  
</style>