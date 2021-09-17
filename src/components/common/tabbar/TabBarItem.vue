<template>
  <div class="tab-bar-item" @click="getUrl" :style="isActive ? {color: activeColor} : {}">
    <div>
      <slot name="tab-bar-icon"></slot>
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data() {
      return {
        
      }
    },
    props: {
      path: {
        type: String
      },
      activeColor: {
        type: String,
        default: '#000'
      }
    },
    methods: {
      getUrl() {
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive: {
        set() {

        },
        get() {
          return this.$route.path.includes(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
  }
  .tab-bar-item .iconfont{
    margin-top: 3px;
    font-size: 22px;
  }
</style>