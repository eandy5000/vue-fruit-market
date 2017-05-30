<template>
    <div class="container">
    
    <fruit-container
      name="Apple"
      :image="apple"
    ></fruit-container>
    
    <fruit-container
      name="Pear"
      :image="pear"
    ></fruit-container>
    
    <fruit-container
      name="Orange"
      :image="orange"
    ></fruit-container>
    
    <fruit-container
      name="Bananas"
      :image="bananas"
    ></fruit-container>
    </div>
</template>

<script>
    import pear from '../../assets/pear.png'
    import apple from '../../assets/apple.png'
    import bananas from '../../assets/bananas.png'
    import orange from '../../assets/orange.png'
    import FruitContainer from './FruitContainer.vue'
    export default {
      data () {
        return {
          pear,
          apple,
          bananas,
          orange
        }
      },
      components: {
        FruitContainer
      }
    }
</script>

<style scoped>
    .container {
      display: flex;
      justify-content: space-around;
    }
    .fruit {
      border: 1px solid black;
      border-radius: 1em;
      padding: 3em;
    }
</style> 
