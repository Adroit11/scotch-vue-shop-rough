<template>
  <product-form
    @save-product="updateProduct"
    :model="model"
    :manufacturers="manufacturers"
    :isEditing="true"></product-form>
</template>

<script>
  import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    data () {
      const pById = this.$store.getters.productById(this.$route.params['id'])
      const manufacturers = this.$store.getters.allManufacturers
      const model = Object.assign({}, pById, {manufacturer: manufacturers.filter(m => m.id === pById.manufacturer.id)[0].id})
      return {
        model,
        manufacturers: this.$store.getters.allManufacturers
      }
    },
    methods: {
      updateProduct (model) {
        console.log('model', model)
        this.$store.commit('updateProduct', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
