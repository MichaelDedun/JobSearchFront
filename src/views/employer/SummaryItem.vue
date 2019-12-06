<template>
    <div class="col-md-12 text-center">
        <div class="summaryItem">
            <div class="field">Желаемая должность: {{careerObjective}}</div>
            <div class="field">Опыт работы: {{workExperience}}</div>
            <div class="field">Желаемая зарплата: {{desiredSalary}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SummaryItem",
        props: ['summary'],
        data() {
            return {
                id: this.summary.id,
                mobilePhone: this.summary.mobilePhone,
                city: this.summary.city,
                dateOfBirth: this.summary.dateOfBirth,
                sex: this.summary.sex,
                workExperience: this.summary.workExperience,
                educationalInstitution: this.summary.educationalInstitution,
                desiredSalary: this.summary.desiredSalary,
                careerObjective: this.summary.careerObjective,
                skills: ''
            }
        },
        methods: {
            del: function () {
                this.$api.deleteById("/summary", this.id)
                    .then(() => this.$router.go())
            }
        }
    }
</script>

<style scoped>
    .summaryItem {
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