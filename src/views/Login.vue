<template>
  <section class="h-100 gradient-form" style="background-color: #efccc9">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <img
                      id="logo-login"
                      src="@/assets/logo.png"
                      style="width: 150px"
                      alt=""
                    />
                  </div>

                  <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                      <form>
                        <div class="form-group">
                          <label class="form-control-label">USERNAME</label>
                          <input
                            type="text"
                            v-model="username"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <label class="form-control-label">PASSWORD</label>
                          <input
                            type="password"
                            v-model="password"
                            class="form-control"
                            i
                          />
                        </div>

                        <div class="col-lg-12 loginbttm">
                          <div class="col-lg-6 login-btm login-text"></div>
                          <div class="col-lg-6 login-btm login-button">
                            <button
                              type="button"
                              @click="login"
                              class="btn btn-outline-primary"
                            >
                              LOGIN
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="signup col-xl">
                    <p class="d-inline-block">Don't have an account?</p>
                    <router-link class="signup-router" to="/signup"
                      >Sign up</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-6 d-flex gradient-custom-2">
                <div
                  class="text-white px-3 py-4 p-md-5 mx-md-4"
                  style="display: inline-block; width: 100%"
                >
                  <h4 class="mb-4">Roomie: a FIPU project</h4>
                  <p
                    class="githubLogo small mb-0"
                    style="display: inline-block"
                  >
                    <a href="https://github.com/ennidore/roomie"
                      ><img style="width: 70px" src="@/assets/GitHub_Logo.png"
                    /></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  //funkcija
  data() {
    return {
      username: "",
      password: "",
    };
  },
  //objekt
  methods: {
    //funkcija
    login() {
      alert("OK");
    },
  },
};
</script>

<style lang="scss">
html {
  background-color: #efccc9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: none;
}

#logo-login {
  margin-bottom: none;
  margin-top: 10px;
}

//Form
.login-form {
  margin-top: 25px;
  text-align: left;
}

input[type="text"] {
  background-color: white;
  border: none;
  border-bottom: 2px solid #247178;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}

input[type="password"] {
  background-color: white;
  border: none;
  border-bottom: 2px solid #247178;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
}
.form-group {
  margin-bottom: 40px;
  outline: 0px;
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #ae3f34;
  outline: 0;
  background-color: #efccc9;
  color: #ecf0f5;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0;
}

label {
  margin-bottom: 0px;
}

.form-control-label {
  font-size: 11px;
  color: #247178;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-outline-primary {
  border-color: #247178;
  color: #247178;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
  background-color: #247178;
  border-color: #247178;
}

.login-btm {
  float: right;
}

.login-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 30px;
}

.signup {
  margin-top: 8rem;
  text-align: center;
}

.signup-router {
  margin-left: 15px;
  text-decoration: none;
  background-color: transparent;
  color: #247178;
}

.signup-router:hover {
  font-weight: bold;
  color: #247178;
}

.githubLogo {
  width: 70px;
}

//Gradient text box
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to bottom,
    #d67f77,
    #ce655c,
    #c64c40,
    #ae3f34
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, #d67f77, #ce655c, #c64c40, #ae3f34);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>
