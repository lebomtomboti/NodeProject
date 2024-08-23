<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>{{ product ? 'Edit Product' : 'Add Product' }}</h2>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="productForm.name" placeholder="Product Name" required />
          <input type="text" v-model="productForm.category" placeholder="Category" required />
          <input type="number" v-model="productForm.Amount" placeholder="Amount" required />
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
    data() {
      return {
        productForm: {
          name: this.product?.name || '',
          category: this.product?.category || '',
          amount: this.product?.amount || '',
        }
      }
    },
    methods: {
      submitForm() {
        this.$emit('save', { ...this.productForm, _id: this.product?._id })
      }
    }
  }
  </script>
  
  <style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-family: "Playfair Display", serif;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 400px;
  max-width: 90%;
  position: relative;
  font-family: "Playfair Display", serif;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

h2 {
  margin-top: 0;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Playfair Display", serif;
}

button {
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #ccc;
}
  </style>