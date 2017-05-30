<template>
    <div
        @click="test"
    >
        <h3>{{name}}</h3>
        <img :src="image" />
    </div>
</template>

<script>
    export default {
      props: ['name', 'image'],
      methods: {
        test () {
          console.log(this.name)
        }
      }
    }
</script>

<style scoped>
    div {
        border: .1em solid black;
        border-radius: 1em;
        padding: 3em;
    }
</style>
