<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="product">
      <router-link :to="'/details/'+product._id" class="product-link">
        <div class="product__image">
          <img
            class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="product__description">
          <small>{{product.manufacturer.name}}</small>
          <h4>{{product.name}}</h4>
        </div>
      </router-link>
      <div class="product__price-cart">
        <p>${{product.price}}</p>
        <product-button :product="product"></product-button>
        <!--<button class="button"><i class="fa fa-cart-plus"></i> Add to Cart</button>-->
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton.vue'
  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>
