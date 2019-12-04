<template>
    <span>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <button type="button" @click="() => this.$router.push({path: '/vacancies/create'})"
                        class="new-vacancy-button">
                    <h4>Создать вакансию</h4>
                </button>
                <VacancyItem v-for="vacancy in vacancies" :key="vacancy.id" :vacancies="vacancies"
                             :vacancy="vacancy"></VacancyItem>
            </div>
        </div>
    </span>
</template>

<script>
    import Menu from "../../../components/Menu";
    import VacancyItem from "@/components/vacancy/VacancyItem";

    export default {
        name: "EmployerVacancies",
        data() {
            return {
                vacancies: []
            }
        },
        components: {VacancyItem, Menu},
        created: function () {
            this.$api.get('/vacancy').then(response =>
                response.data.forEach(r => this.vacancies.push(r))
            )
        }
    }
</script>

<style scoped>
    .new-vacancy-button {
        margin: 10px auto;
        background-color: #1a8ecb;
        min-width: 70%;
        height: 80px;
        border-radius: 8px;
        border: 1px solid #1a8ecb;
    }

    .new-vacancy-button h4 {
        color: #fafafa;
    }
</style>