<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
  import uuid from 'uuid/v4'
  import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    data () {
      return {
        model: {},
        manufacturers: this.$store.getters.allManufacturers
      }
    },
    methods: {
      addProduct (model) {
        model.id = uuid()
        console.log('model', model)
        this.$store.commit('addProduct', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
