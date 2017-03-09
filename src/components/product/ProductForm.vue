<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="Name" v-model="model.name">
      </div>
      <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control" placeholder="Price" v-model="model.price">
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <select type="text" class="form-control" v-model="model.manufacturer">
          <option value="">--Select Manufacturer--</option>
          <template v-for="manufacturer in manufacturers">
            <option :value="manufacturer.id">{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input type="text" class="form-control" placeholder="Image" v-model="model.image">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    props: ['model', 'manufacturers', 'isEditing'],
    methods: {
      saveProduct () {
        this.$emit('save-product', this.model)
      }
    }
  }
</script>
