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

<style>
  .product {
    background: #FFF;
    padding: 15px;
    margin-bottom: 15px;
    transition: all 200ms ease-in;
  }

  .product:hover {
    transform: scale(1.1) translateY(-15px);
    box-shadow: 7px 9px 18px -2px rgba(61,61,61,1);

  }

  .product-link {
    display: block;
    color: #3D3D3D;
  }

  .product-link:hover {
    color: #3D3D3D;
    text-decoration: none;
  }

  .product .product__image {
    width: 100%;
  }

  .product__image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .product__description {
    width: 100%;
  }

  .product__description small {
    color: #808080;
  }

  .product__description h4 {
    margin: 3px 0 5px 0;
  }

  .product__price-cart {
    display: flex;
    margin-top: 10px;
  }

  .product__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
</style>
