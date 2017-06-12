<template>
    <a v-if="logic" @click="func()">{{text}}</a>
</template>

<script>
    export default {
      props: ['logic', 'text', 'func']
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        border: .1em solid black;
        border-radius: .5em;
        padding: .3em;
        transition: .3s all linear;
    }
    a:hover {
        background-color: black;
        color: white;
    }

</style>
