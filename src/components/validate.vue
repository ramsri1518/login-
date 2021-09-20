<template>
  <div>
    
    <main class="box">
      <h1>Login form</h1>
      <form>
        <div class="form-group inputBox" :class="{ 'form-group--error': $v.username.$error }">
         
          <input
            type="text"
            name="userName"
            v-model="$v.username.$model"
            placeholder=" username"
            
          />
          <div class="error" v-if="$v.username.$error && !$v.username.required">Please enter your username</div>
          <div class="error" v-if="$v.username.$error && !$v.username.minLength">Username must have at least 5 letters.</div>
        </div>
                              
        <div class="form-group inputBox" :class="{ 'form-group--error': $v.password.$error }">
         
          <input
            type="password"
            name="userPassword"
            v-model="$v.password.$model"
            placeholder="type your password"
           
          />
          <div class="error" v-if="$v.password.$error && !$v.password.required">Please enter your username</div>
              <div class="error" v-if="$v.password.$error && !$v.password.minLength">Username must have at least 5 letters.</div>
        </div>
              
        <div>
          

          <input type="button" class="btn btn-success" value="Submit" @click="submit()" style="float: left; width: 100px;">
        
        </div>
      </form>
    </main>
    
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

export default {
  name: "validate",
  data: function () {
    return {
     
      username:"",
      password:""
    };
  },
    validations: {
    username: {
      required,
    
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(4)
    }
  },
  
  
  methods: {
    submit() {
       this.$v.$touch();
       if (!this.$v.$invalid) {
         console.log("hiiii");
      this.$router.push(`username=${this.username}&password=${this.password}`).catch(() => {});
      }
     
      
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
h1{
  color: white;
}

body {
  font-family: sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  display: none;
}

.box {
  background-color: rgb(69, 57, 124);
  border-radius: 10px;
  
  margin: auto auto;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.box .inputBox input {
 
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  border-radius: 5px;
  outline: none;
  padding: 10px 0;
  width: 100%;
}

.box input[type="submit"],
.box button[type="submit"],
a.button {
  font-family: sans-serif;
  background: #03a9f4;
  font-size: 11px;
 
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 2px 0;
  display: inline-block;
}

.box input[type="submit"]:hover,
.box button[type="submit"]:hover,
a.button:hover {
  opacity: 0.8;
}

#tsparticles {
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.error{
  color: rgba(202, 50, 50, 0.87);
}
</style>
