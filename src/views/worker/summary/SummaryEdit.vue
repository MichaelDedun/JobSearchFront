<template>
    <span>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 text-center">
                    <form action="" method="post">
                    <label>
                        <span>Желаемая должность:</span>
                        <input type="text" v-model="summary.careerObjective">
                    </label>
                    <label>
                        <span>Дата вашего рождения:</span>
                        <input type="date" v-model="summary.dateOfBirth">
                    </label>
                    <br>
                     <label>
                        <span>Город проживания:</span>
                        <input type="text" v-model="summary.city">
                    </label>
                    <label>
                        <span>Пол:</span>
                        <select v-model="summary.sex">
                            <option value="Male" selected>Мужской</option>
                            <option value="Female">Женский</option>
                        </select>
                    </label>
                    <br>
                    <label>
                        <span>Ваше образование:</span>
                        <input type="text" v-model="summary.educationalInstitution">
                    </label>
                    <label>
                        <span>Желаемая заработная плата:</span>
                        <input type="text" v-model="summary.desiredSalary">
                    </label>
                    <br>
                    <label>
                        <span>Опишите Ваш прежний опыт работы:</span>
                        <textarea name="" id="" cols="30" rows="2" v-model="summary.workExperience"></textarea>
                    </label>
                    <br>
                    <label>
                        <span>Номер мобильного телефона:</span>
                        <input type="text" v-model="summary.mobilePhone">
                    </label>
                    <br>
                        <label>
                        <span>Ваши навыки:</span>
                        <textarea name="" id="" cols="30" rows="2" v-model="summary.skills"></textarea>
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
        name: "SummaryEdit",
        components: {Menu},
        data() {
            return {
                summary: ''
            }
        },
        methods: {
            edit: function () {
                let request = {
                    mobilePhone: this.summary.mobilePhone,
                    city: this.summary.city,
                    dateOfBirth: this.summary.dateOfBirth,
                    sex: this.summary.sex,
                    workExperience: this.summary.workExperience,
                    educationalInstitution: this.summary.educationalInstitution,
                    desiredSalary: this.summary.desiredSalary,
                    careerObjective: this.summary.careerObjective
                };
                this.$api.put('/summary', this.$route.params.summaryId, request)
                    .then(() => this.$router.push({path: '/summaries'}))
            }
        },
        created: function () {
            this.$api.getById('/summary', this.$route.params.summaryId).then(response =>
                this.summary = response.data
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