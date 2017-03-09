<template>
  <div v-if="cart.length > 0">
    <template v-for="product in cart">
      <transition-group name="list">
        <product-details :product="product" :key="product.id"></product-details>
      </transition-group>
    </template>
  </div>
  <div v-else class="title"><h1>Your cart is empty</h1></div>
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  export default {
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      productDetails: ProductDetails
    }
  }
</script>
