<template>
    <div class="menu">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="logo test">
                        <router-link :to="{path: `/`}">Job Search Service</router-link>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="text-right" v-if="userName == null">
                        <li>
                            <router-link :to="{path: `/login`}">Войти</router-link>
                        </li>
                    </ul>
                    <ul class="text-right" v-else-if="userType === 'USER'">
                        <li>
                            <router-link :to="{path: `/summaries`}">Личный кабинет</router-link>
                        </li>
                        <li><a href="#" @click="logout">Выйти</a></li>
                        <li>{{userName}}</li>
                    </ul>
                    <ul class="text-right" v-else>
                        <li>
                            <router-link :to="{path: `/vacancies`}">Личный кабинет</router-link>
                        </li>
                        <li><a href="#" @click="logout">Выйти</a></li>
                        <li>{{userName}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                userName: '',
                userType: ''
            }
        },
        methods: {
            logout: function () {
                window.localStorage.clear();
                this.$router.push({path: `/`});
            }
        },
        created() {
            this.userName = window.localStorage.getItem('username');
            this.userType = window.localStorage.getItem('userType');
        }
    }
</script>

<style scoped>

    .menu {
        padding: 10px 0;
        background-color: rgba(0, 0, 0, 0.85);
    }

    .logo {
        text-transform: uppercase;
        color: #fafafa;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 25px;
        letter-spacing: 2px;
    }

    .test a{
        text-decoration: none;
        color: white;
    }

    ul {
        margin: 5px 0;
        width: 100%;
        list-style: none;
        color: #1a8ecb;
    }

    ul li {
        display: inline-block;
        margin: 0 10px;
        color: #1a8ecb;
    }

    ul li a {
        color: #1a8ecb;
    }
</style>