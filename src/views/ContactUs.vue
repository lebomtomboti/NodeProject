<template>
 <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center align-items-center mt-3 mb-3">
            <h2 class="headings contact-heading">Contact Us</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <img src="" alt="">
          </div>
          <div class="col-md-6">
            <div class="container">
              <form class="mt-5" action="https://formspree.io/f/xqkrjaaa" method="POST">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com" name="email">
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"
                    name="message"></textarea>
                </div>
                <button type="submit" class="btn custom-submit-button">Submit</button>
              </form>
              <br>
              <!-- <div class="row py-3">
                <div class="col auto px-5">
                  <i class="fa-sharp fa-solid fa-phone fa-beat fa-2x" style="color: #000000;"></i>
                </div>
                <div class="col">
                  <p class="contact-info">021 695 1455</p>
                </div>
              </div>
              <div class="row py-3 d-flex justify-content-center align-items-center">
                <div class="col auto px-5">
                  <i class="fa-sharp fa-solid fa-envelope fa-beat fa-2x" style="color: #000000;"></i>
                </div>
                <div class="col">
                  <p class="contact-info">info@allureperfumes.co.za</p>
                </div>
              </div>
              <div class="row py-3">
                <div class="col auto px-5">
                  <i class="fa-sharp fa-solid fa-location-dot fa-beat fa-2x" style="color: #000000;"></i>
                </div>
                <div class="col d-flex justify-content-center">
                  <p class="contact-info">F46, Dreyer St, Claremont, Cape Town, 7708</p>
                </div> -->
              <!-- </div> -->
            </div>
            </div>
          </div>
        </div>
    </template>

<script>
import axios from 'axios'

export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      },
      submitted: false
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('https://formspree.io/f/xqkrjaaa', this.formData)
        this.submitted = true;
        this.formData = {
          name: "",
          email: "",
          message: ""
        };
      } catch (error) {
        console.error('Form submission error:', error)
      }
    }
  }
};
</script>

<style scoped>

.custom-submit-button {
  background-color: rgb(0, 0, 0);
  color: white;
  border: none;
}

.custom-submit-button:hover {
  background-color: #969696;
}

.container {
  overflow-x: hidden;
}

</style>