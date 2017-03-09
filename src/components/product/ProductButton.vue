<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    <button v-else class="button button-danger" @click="removeFromCart(product.id)"><i class="fa fa-trash"></i> Remove from Cart</button>
  </div>
</template>

<script>
  export default {
    props: ['product'],
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      isAdding () {
        return this.cart.indexOf(this.product) < 0
      }
    },
    methods: {
      addToCart () {
        this.$store.commit('addToCart', this.product)
      },
      removeFromCart (id) {
        this.$store.commit('removeFromCart', id)
      }
    }
  }
</script>
