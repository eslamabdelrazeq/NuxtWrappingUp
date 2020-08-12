<template>
  <div style="text-align: center;">
    <div class="container register-form">
      <div class="form">
        <div class="note">
          <h1>Login.</h1>
        </div>

        <form @submit.prevent="submit">
          <div class="form-content">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email *"
                    required
                    v-model="email"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Your Password *"
                    required
                    v-model="password"
                  />
                </div>
              </div>
            </div>
            <button type="submit" class="btnSubmit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'empty',
  // middleware: 'auth',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((data) => {
          this.$toast.success('Successfully logged in').goAway(1500)
          this.$router.push('/products')
        })
        .catch((e) => {
          this.$toast.error('error').goAway(1500)
        })
    },
  },
}
</script>
<style scoped>
.note {
  text-align: center;
  height: 80px;
  background: -webkit-linear-gradient(left, #0072ff, #8811c5);
  color: #fff;
  font-weight: bold;
  line-height: 80px;
}
.form-content {
  padding: 5%;
  border: 1px solid #ced4da;
  margin-bottom: 2%;
}
.form-control {
  border-radius: 1.5rem;
}
.btnSubmit {
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  width: 20%;
  cursor: pointer;
  background: #0062cc;
  color: #fff;
}
</style>
