<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/"><i class="fa fa-home"></i> Home</router-link></li>
          <li><router-link to="/admin"><i class="fa fa-user"></i> Admin</router-link></li>
        </ul>
        <ul class="nav__right">
          <li><router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({{cartItemsCount}})</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cartItems: this.$store.state.cart
    }
  },
  computed: {
    cartItemsCount () {
      return this.cartItems.length
    }
  }
}
</script>

<style>

</style>
