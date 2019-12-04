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
                        <input type="text" v-model="category">
                    </label>
                        <br>
                    <label>
                        <span>Требуемый опыт работы:</span>
                        <input type="text" v-model="necessaryExperience">
                    </label>
                    <br>
                    <label>
                        <span>Зарплата:</span>
                        <input type="text" v-model="salary">
                    </label>
                        <br>
                    <label>
                        <span>Требования:</span>
                        <textarea name="" id="" cols="30" rows="2" v-model="requirements"></textarea>
                    </label>
                    <br>
                    <input type="button" value="Создать" @click="create"><br>
                </form>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
    import Menu from "@/components/Menu"

    export default {
        name: "VacancyForm",
        data() {
            return {
                category: '',
                necessaryExperience: '',
                salary: '',
                requirements: ''
            }
        },
        components: {Menu},
        methods: {
            create: function () {
                let request = {
                    category: this.category,
                    necessaryExperience: this.necessaryExperience,
                    salary: this.salary
                };
                this.$api.post('/vacancy', request).then(response => {
                    let data = response.data;
                    let request = {requirements: this.requirements.split(",")};
                    this.$api.postPathId('/requirements', data.id, request).then(() => this.$router.push({path: '/vacancies'}))
                });
            }
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