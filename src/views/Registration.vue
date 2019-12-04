<template>
    <div class="background">
        <div class="background-theme"></div>
        <div class="wrapper">

            <div class="choice text-center">
                <input type="button" class="choice-button" value="Я соискатель" @click="changeChoice(true)"
                       v-bind:style="[isWorker ? {'background-color': '#1a8ecb'} : {'background-color': '#000'}]">
                <input type="button" class="choice-button" value="Я работадатель" @click="changeChoice(false)"
                       v-bind:style="[isWorker ? {'background-color': '#000'} : {'background-color': '#1a8ecb'}]">
            </div>

            <form action="" method="post" class="worker-form text-center" v-if="isWorker">
                <label>
                    <input type="text" placeholder="Имя" v-model="firstName">
                </label>
                <br>
                <label>
                    <input type="text" placeholder="Фамилия" v-model="lastName">
                </label>
                <br>
                <label>
                    <input type="email" placeholder="Почта" v-model="email">
                </label>
                <br>
                <label>
                    <input type="text" placeholder="Логин" v-model="login">
                </label>
                <br>
                <label>
                    <input type="password" placeholder="Пароль" v-model="password">
                </label>
                <br>
                <input type="button" value="Зарегистрироваться" @click="register"><br>
                <router-link :to="{path: `/login`}">Войти</router-link>
            </form>

            <form action="" method="post" class="employer-form text-center" v-if="!isWorker">
                <label>
                    <input type="text" placeholder="Название" v-model="companyName">
                </label>
                <br>
                <label>
                    <input type="text" placeholder="Обратная связь" v-model="feedback">
                </label>
                <br>
                <label>
                    <input type="email" placeholder="Почта" v-model="email">
                </label>
                <br>
                <label>
                    <input type="text" placeholder="Логин" v-model="login">
                </label>
                <br>
                <label>
                    <input type="password" placeholder="Пароль" v-model="password">
                </label>
                <br>
                <input type="button" value="Зарегистрироваться" @click="register"><br>
                <router-link :to="{path: `/login`}">Войти</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                isWorker: true,
                firstName: '',
                lastName: '',
                companyName: '',
                feedback: '',
                email: '',
                login: '',
                password: ''
            }
        },
        methods: {
            changeChoice: function (value) {
                this.isWorker = value
            },
            register: function () {
                if (this.isWorker) {
                    this.$api.register('/worker/registration', {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        login: this.login,
                        password: this.password
                    }).then(() => this.$router.push({path: '/login'}))
                } else
                    this.$api.register('/employer/registration', {
                        companyName: this.companyName,
                        feedback: this.feedback,
                        email: this.email,
                        login: this.login,
                        password: this.password
                    }).then(() => this.$router.push({path: '/login'}))
            }
        }
    }
</script>

<style scoped>
    .background {
        background: url('../assets/BG.jpg') center top no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        padding-top: 100px;
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
        padding-bottom: 20px;
        width: 350px;
        border: 1px solid #1a8ecb;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
    }

    .choice .choice-button {
        display: inline-block;
        margin: 0 10px 20px 10px;
        height: 40px;
        border: 1px solid #1a8ecb;
        width: 130px;
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
        width: 180px;
        background-color: #1a8ecb;
        color: #fafafa;
        border: none;
    }

</style>