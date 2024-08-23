<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 pt-5">Register</h2>
    </div>
    <div class="row pt-5">
      <form class="form" @submit.prevent="register">
        <div class="form-control-wrapper">
          <span>
            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName" required />
          </span>
        </div>
        <div class="form-control-wrapper">
          <span>
            <input class="form-control" type="text" placeholder="Last name" v-model="payload.lastName" required />
          </span>
        </div>
        <div class="form-control-wrapper">
          <span>
            <input class="form-control" type="text" placeholder="Age" v-model="payload.userAge" required />
          </span>
        </div>
        <div class="form-control-wrapper">
          <span>
            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd" required />
          </span>
        </div>
        <div class="form-control-wrapper">
          <span>
            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPwd" required />
          </span>
        </div>
        <div class="form-control-wrapper d-md-flex d-block justify-content-between">
          <button type="submit" class="btn btn-success">Submit</button>
          <button type="reset" class="btn btn-dark">Reset</button>
        </div>
      </form>
    </div>
    <div class="row pt-5">
      <img src="https://github.com/Kifaa26/images-js/blob/main/louis%20vuitton.jpg?raw=true" alt="Banner Image"
        class="img-fluid w-100" loading="lazy" />
    </div>
    <!-- Success or Error Message -->
    <div v-if="registrationStatus === 'success'" class="alert alert-success mt-3">
      Registration successful!
    </div>
    <div v-if="registrationStatus === 'error'" class="alert alert-danger mt-3">
      Registration failed! Please try again.
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const payload = reactive({
  firstName: '',
  lastName: '',
  userAge: '',
  emailAdd: '',
  userPwd: '',
});

const registrationStatus = computed(() => store.state.registrationStatus);

function register() {
  store.dispatch('register', payload);
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.display-2 {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.btn-success {
  background-color: #000;
}

.btn-dark {
  background-color: #000;
}

.btn-success:hover {
  background-color:  #23272b;
}

.btn-dark:hover {
  background-color: #23272b;
}

</style>