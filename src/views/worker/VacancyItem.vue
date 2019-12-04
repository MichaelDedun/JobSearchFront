<template>
    <div class="col-md-12 text-center">
        <div class="vacancyItem">
            <div class="field">Категория: {{category}}</div>
            <div class="field">Желаемый опыт работы: {{necessaryExperience}}</div>
            <div class="field">Зарплата: {{salary}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VacancyItem",
        props: ['vacancy'],
        data() {
            return {
                id: this.vacancy.id,
                category: this.vacancy.category,
                necessaryExperience: this.vacancy.necessaryExperience,
                salary: this.vacancy.salary
            }
        },
        methods: {
            del: function () {
                this.$api.deleteById("/vacancy", this.id)
                    .then(() => this.$router.go())
            }
        }
    }
</script>

<style scoped>
    .vacancyItem {
        position: relative;
        margin: 10px auto;
        padding: 20px;
        width: 72%;
        height: 80px;
        border-radius: 8px;
        border: 1px solid #1a8ecb;
    }

    .field {
        color: #000;
        margin: 0 20px;
        display: inline-block;
    }
</style>