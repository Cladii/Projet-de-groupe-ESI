<template>
    <div>
        <h1>Login</h1>
        <input id="input_email" type="email" name="username" v-model="input.username" placeholder="Username" data-cy="username_field" />
        <input id="input_psswd" type="password" name="password" v-model="input.password" placeholder="Password" data-cy="password_field"/>
        <button id="login" type="button" v-on:click="login()" data-cy="loginButton"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
    </div>
    <!--<form>
        <div class="vue-tempalte">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
        </div>
    </form>-->
    
</template>

<script>
    const API_URL = "http://127.0.0.1:8000/user/";
    const API_AUTH = {
        username: "admin",
        password: "admin",
    };
    import axios from "axios";
    export default {
        name: "Login",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                users: [],
                error_message: "",
            }
            
        },
        methods: {
            getUsers() {
                console.log(API_URL);
                this.error_message = "";
                axios({
                    method: "get",
                    url: API_URL,
                    auth: API_AUTH,
                })
                .then((response) => (this.users = response.data))
                .catch((error) => {
                    this.error_message = "Impossible de charger les données.";
                    console.log("Erreur status : " + error.response.status);
                    console.log("Erreur data : " + JSON.stringify(error.response.data));
                });
            },
            login() {
                this.users.forEach(user => {
                    if(user.username == this.input.username && user.password == this.input.password) {
                        this.$store.commit("setAuthentication", {status : true, direct: user.isDirector,});
                        this.$router.replace({ name: "home" });
                    }
                    /*if(this.input.username == "admin" && this.input.password == "pass"){
                    this.$store.commit("setAuthentication", true, false);
                    this.$router.replace({ name: "secure" });*/
                
                });
                /*if(this.input.username == "admin" && this.input.password == "pass") {
                    this.$store.commit("setAuthentication", true);
                    this.$router.replace({ name: "secure" });
                    // Additional logic here...
                } else {
                    console.log("The username and / or password is incorrect");
                }*/
            }
        },
        mounted(){
            this.getUsers();
        }
}
</script>

<style scoped>
    #input{
        text-align: center;
        margin-right: 1%;
    }
</style>