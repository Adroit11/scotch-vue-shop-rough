<template>
  <!--<transition-->
    <!--name="custom"-->
    <!--enter-active-class="animated zoomIn"-->
  <!--&gt;-->
  <div>
    <div class="breadcrumb">
      <div class="container">
        <ul>
          <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
          <li><a>Product</a></li>
        </ul>
      </div>
    </div>
    <product-details :product="product" :isAdding="true"></product-details>
  </div>
  <!--</transition>-->
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  export default {
    data () {
      return {
        product: this.$store.getters.productById(this.$route.params['id'])
      }
    },
    components: {
      'product-details': ProductDetails
    }
  }
</script>
