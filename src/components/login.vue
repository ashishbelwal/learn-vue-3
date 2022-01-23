<template>
  <v-container class="login">
      <img src="@/assets/logo.svg" alt="" class="bgImg">
      <div class="wrapper">
          <div class="heading">
              <img src="@/assets/logo.png" alt="">
              <h2>Learn Vue 3</h2>
              <h4>Login</h4>
          </div>
         
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            type = "password"
            ></v-text-field>

            <v-btn
            color="deep-purple accent-1"
            elevation="2"
            class="mr-4 validate"
            @click="validate"
            >
            Validate
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            dark
            @click="reset"
            >
            Reset Form
            </v-btn>
        </v-form>
        <div class="switchBtn">
            <p>Already have an account?</p>
            <router-link :to="{name: 'signup'}" replace> Signup</router-link>
        </div>
      </div>
      <!-- /.wrapper -->
    
  </v-container>
</template>

<script>
    
    export default {
        name: "Login",

        data: () => ({
            valid: true,
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length > 6) || 'Password must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            }),

            methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>
<style lang="scss">
.bgImg{
    position: absolute;
    width: 178%;
    filter: hue-rotate(39deg);
    left: -100%;
    z-index: 1;
}
.theme--light.v-btn.v-btn--has-bg{
    background: #6645ea;
    color: #fff
}
.theme--light.v-btn.v-btn--has-bg:disabled{
    background: #8383837a;
    color: #fff;
}
.v-text-field > .v-input__control > .v-input__slot:after {
    border-color: #6645ea;
}
.switchBtn{
    height: 40px;
    margin-bottom: 30px;
    display: flex;
    text-align: left;
    justify-content: flex-start;
    padding-left: 30px;
    a{
        margin-left: 6px;
        font-size: 17px;
        color: #6645ea;
        text-decoration: none;
    }
}
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    position: relative;
    width: 100%;
    max-width: 100%;
    
    .wrapper{
        width: 100%;
        max-width: 450px;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0px 31px 109px -50px #606060;
        z-index: 2;
        .heading{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #6645ea;
            padding: 30px;
            color: #fff;
            img{
                width: 100px;
                filter: grayscale(1) brightness(2.2);
            }
        }
        form{
            padding: 40px 30px;
            padding-bottom: 20px;
            .v-btn:not(.v-btn--round).v-size--default {
                height: 36px;
                min-width: 64px;
                padding: 0 16px;
                margin-top: 25px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>