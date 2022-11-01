<template>
  
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions('ui', ['CHANGE_WINDOW_WIDTH']),
      changeWindowWidth() {
        this.CHANGE_WINDOW_WIDTH(window.innerWidth)
      },
      computed: {
        ...mapGetters('ui', ['GET_WINDOW_WIDTH'])
      }
    },
    mounted() {
      this.changeWindowWidth()
      window.addEventListener('resize', this.changeWindowWidth)
    },
  }
</script>

<style lang="scss">
  @import '@/assets/styles/main.scss'
</style>
