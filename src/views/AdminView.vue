<template>
  <div class="admin-page">
    <h1 class="display-4 text-center pt-5">Admin</h1>

    <section class="management-section">
      <h2 class="display-5 text-center">Users</h2>
      <button class="btn btn-success mb-3" @click="openUserForm">Add User</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <th scope="row">{{ user._id }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <button class="btn btn-primary" @click="editUser(user)">Edit</button>
              <button class="btn btn-danger" @click="deleteUser(user._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="management-section">
      <h2 class="display-5 text-center">Products</h2>
      <button class="btn btn-success mb-3" @click="openProductForm">Add Product</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <th scope="row">{{ product._id }}</th>
            <td>{{ product.prodName }}</td>
            <td>{{ product.prodCategory }}</td>
            <td>{{ product.prodAmount }}</td>
            <td>
              <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
              <button class="btn btn-danger" @click="deleteProduct(product._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <UserFormModal v-if="showUserForm" @close="closeUserForm" @save="saveUser" :user="selectedUser"/>
    <ProductFormModal v-if="showProductForm" @close="closeProductForm" @save="saveProduct" :product="selectedProduct"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserFormModal from '@/components/UserFormModal.vue'
import ProductFormModal from '@/components/ProductFormModal.vue'

export default {
  components: { UserFormModal, ProductFormModal },
  data() {
    return {
      showUserForm: false,
      showProductForm: false,
      selectedUser: null,
      selectedProduct: null,
    }
  },
  computed: {
    ...mapState(['users', 'products']),
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchProducts', 'deleteUser', 'deleteProduct']),
    
    openUserForm(user = null) {
      this.selectedUser = user
      this.showUserForm = true
    },
    closeUserForm() {
      this.showUserForm = false
      this.selectedUser = null
    },
    saveUser(user) {
      if (user._id) {
        this.$store.dispatch('updateUser', user)
      } else {
        this.$store.dispatch('register', user)
      }
      this.closeUserForm()
    },

    openProductForm(product = null) {
      this.selectedProduct = product
      this.showProductForm = true
    },
    closeProductForm() {
      this.showProductForm = false
      this.selectedProduct = null
    },
    saveProduct(product) {
      if (product._id) {
        this.$store.dispatch('updateProduct', product)
      } else {
        this.$store.dispatch('addProduct', product)
      }
      this.closeProductForm()
    },

    editUser(user) {
      this.openUserForm(user)
    },
    editProduct(product) {
      this.openProductForm(product)
    },
  },
  created() {
    this.fetchUsers()
    this.fetchProducts()
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
  font-family: "Playfair Display", serif;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Playfair Display", serif;
}

button {
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #2e2e2e;
}

.admin-page {
  padding: 20px;
  font-family: "Playfair Display", serif;
}
.management-section {
  padding: 20px;
  font-family: "Playfair Display", serif;
}
</style>