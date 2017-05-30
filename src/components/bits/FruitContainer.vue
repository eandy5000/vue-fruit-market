<template>
    <div>
        <h3>{{name}}</h3>
        <img :src="image" />
        <h5>{{counter}}</h5>
        <button @click="addFruit()">Buy</button>
        <button @click="subFruit()">Sell</button>
    </div>
</template>

<script>
    export default {
      props: ['name', 'image', 'counter', 'addFruit', 'subFruit'],
      methods: {}
    }
</script>

<style scoped>
    div {
        border: .1em solid black;
        border-radius: 1em;
        padding: 1em 2em;
    }
</style>
