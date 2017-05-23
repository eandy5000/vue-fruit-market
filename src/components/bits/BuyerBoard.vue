<template>
    <div>
        <img :src="pear" />
        <img :src="apple" />
        <img :src="bananas" />
        <img :src="orange" />
    </div>
</template>

<script>
    import pear from '../../assets/pear.png'
    import apple from '../../assets/apple.png'
    import bananas from '../../assets/bananas.png'
    import orange from '../../assets/orange.png'
    export default {
      data () {
        return {
          pear,
          apple,
          bananas,
          orange
        }
      }
    }
</script>

<style>
    
</style> 
