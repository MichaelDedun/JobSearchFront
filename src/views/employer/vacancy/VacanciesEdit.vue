<template>
    <span>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 text-center">
                    <form action="" method="post">
                    <label>
                        <span>Категория:</span>
                        <input type="text" v-model="vacancy.category">
                    </label>
                    <br>
                     <label>
                        <span>Требуемый опыт работы:</span>
                        <input type="text" v-model="vacancy.necessaryExperience">
                    </label>
                    <br>
                    <label>
                        <span>Зарплата:</span>
                        <input type="text" v-model="vacancy.salary">
                    </label>
                    <br>
                    <input type="button" value="Редактировать" @click="edit"><br>
                </form>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
    import Menu from "@/components/Menu"

    export default {
        name: "VacancyEdit",
        components: {Menu},
        data() {
            return {
                vacancy: ''
            }
        },
        methods: {
            edit: function () {
                let request = {
                    category: this.vacancy.category,
                    necessaryExperience: this.vacancy.necessaryExperience,
                    salary: this.vacancy.salary
                };
                this.$api.put('/vacancy', this.$route.params.vacancyId, request)
                    .then(() => this.$router.push({path: '/vacancies'}))
            }
        },
        created: function () {
            this.$api.getById('/vacancy', this.$route.params.vacancyId).then(response =>
                this.vacancy = response.data
            )
        }
    }
</script>

<style scoped>
    form {
        padding: 20px;
        margin: 2vh 0;
        border: 1px solid #1a8ecb;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
    }

    label span {
        color: #0e0e0e;
        margin-right: 10px;
        display: block;
    }

    input, select, textarea {
        margin: 10px;
        border: 1px solid #1a8ecb;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        padding-left: 3px;
    }

    input[type=button] {
        margin-top: 20px;
        height: 50px;
        width: 170px;
        color: #fafafa;
        background-color: #1a8ecb;
    }
</style>