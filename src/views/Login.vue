<template>
    <div class="background">
        <div class="background-theme"></div>
        <div class="wrapper">
            <form action="" method="post" class="text-center">
                <label>
                    <div>Введите логин:</div>
                    <input type="text" v-model="username">
                </label>
                <br>
                <label>
                    <div>Введите пароль:</div>
                    <input type="password" v-model="password">
                </label>
                <br>
                <input type="button" value="Войти" @click="logIn"><br>
                <router-link :to="{path: `/registration`}">Зарегистрироваться</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            logIn: function () {
                const auth = 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64');
                window.localStorage.setItem('token', auth);
                this.$api.get('/user')
                    .then(response => {
                        window.localStorage.setItem('username', this.username);
                        window.localStorage.setItem('userType', response.data);
                        this.$router.push({path: '/search'});
                    });
            }
        }
    }
</script>

<style scoped>
    .background {
        background: url('../assets/BG.jpg') center top no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        padding-top: 200px;
        min-height: 100vh;
        position: relative;
        color: #fafafa;
    }

    .background-theme {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.55);
    }

    .wrapper {
        background-color: rgba(0, 0, 0, 0.65);
        position: relative;
        margin: 0 auto;
        padding-top: 50px;
        width: 300px;
        height: 350px;
        border: 1px solid #1a8ecb;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
    }

    label {
        font-size: 18px;
        font-family: "Oswald", sans-serif;
    }

    label div {
        margin-bottom: 5px;
    }

    input {
        padding: 0 10px;
        margin-bottom: 15px;
        border: 1px solid #fff;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
    }

    input[type=button] {
        height: 40px;
        width: 100px;
        background-color: #1a8ecb;
        color: #fafafa;
        border: none;
    }
</style>