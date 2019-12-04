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
                        <input type="text" v-model="careerObjective">
                    </label>
                    <label>
                        <span>Дата вашего рождения:</span>
                        <input type="date" v-model="dateOfBirth">
                    </label>
                    <br>
                     <label>
                        <span>Город проживания:</span>
                        <input type="text" v-model="city">
                    </label>
                    <label>
                        <span>Пол:</span>
                        <select v-model="sex">
                            <option value="Male" selected>Мужской</option>
                            <option value="Female">Женский</option>
                        </select>
                    </label>
                    <br>
                    <label>
                        <span>Ваше образование:</span>
                        <input type="text" v-model="educationalInstitution">
                    </label>
                    <label>
                        <span>Желаемая заработная плата:</span>
                        <input type="text" v-model="desiredSalary">
                    </label>
                    <br>
                    <label>
                        <span>Опишите Ваш прежний опыт работы:</span>
                        <textarea name="" id="" cols="30" rows="2" v-model="workExperience"></textarea>
                    </label>
                    <br>
                    <label>
                        <span>Номер мобильного телефона:</span>
                        <input type="text" v-model="mobilePhone">
                    </label>
                        <br>
                    <label>
                        <span>Опишите Ваши навыки:</span>
                        <textarea name="" id="" cols="30" rows="2" v-model="skills"></textarea>
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
        name: "SummaryForm",
        data() {
            return {
                mobilePhone: '',
                city: '',
                dateOfBirth: '',
                sex: '',
                workExperience: '',
                educationalInstitution: '',
                desiredSalary: '',
                careerObjective: '',
                skills: ''
            }
        },
        components: {Menu},
        methods: {
            create: function () {
                let request = {
                    mobilePhone: this.mobilePhone,
                    city: this.city,
                    dateOfBirth: this.dateOfBirth,
                    sex: this.sex,
                    workExperience: this.workExperience,
                    educationalInstitution: this.educationalInstitution,
                    desiredSalary: this.desiredSalary,
                    careerObjective: this.careerObjective
                };
                this.$api.post('/summary', request).then(response => {
                    let data = response.data;
                    let request = {skills: this.skills.split(",")};
                    this.$api.postPathId('/skills', data.id, request).then(() => this.$router.push({path: '/summaries'}))
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