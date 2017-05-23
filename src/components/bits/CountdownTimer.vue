<template>
    <div>
        {{count}}
        <button v-if="count === 0" @click="restart">Start</button>
        <button v-else v-on:click="countDown">Start</button>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          countStart: 5,
          count: 5
        }
      },
      methods: {
        countDown () {
          this.$store.commit('gameOnToggle')
          const setInt = setInterval(() => {
            this.count--
            if (this.count === 0) {
              clearInterval(setInt)
              this.$store.commit('gameOnToggle')
            }
          }, 1000)
        },
        restart () {
          this.count = this.countStart
          this.countDown()
        }
      }
    }
</script>

<style>
    
</style>
