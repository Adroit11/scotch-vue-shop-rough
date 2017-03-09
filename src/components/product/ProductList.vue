<template>
  <div>
    <template v-for="product in products">
      <product-item :product="product"></product-item>
    </template>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    data () {
      console.log('debug', this.$store.getters.allProducts)
      return {
        products: this.$store.getters.allProducts
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>
