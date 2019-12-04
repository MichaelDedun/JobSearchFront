<template>
    <div class="col-md-12 text-center">
        <div class="vacancyItem">
            <div class="field">Категория: {{category}}</div>
            <div class="field">Желаемый опыт работы: {{necessaryExperience}}</div>
            <div class="field">Зарплата: {{salary}}</div>
            <a href="#" class="delete" data-toggle="modal" data-target="#modal-delete">Удалить</a>
            <span class="more">
                <router-link :to="{path: `/vacancies/${this.id}`}">
                    Подробнее
                </router-link>
            </span>
        </div>

        <div class="modal fade" id="modal-delete" tabindex="-1" role="dialog" aria-labelledby="no-matter"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="exampleModalLabel">Вы уверены?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <button type="button" class="btn btn-secondary cancel-button" data-dismiss="modal">Отмена
                        </button>
                        <button type="button" class="btn btn-primary delete-button" @click="del">Удалить</button>
                    </div>
                </div>
            </div>
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

    .more {
        position: absolute;
        bottom: 3px;
        right: 5px;
        font-size: 1rem;
    }

    .delete {
        position: absolute;
        bottom: 3px;
        right: 100px;
        font-size: 1rem;
    }

    #modal-delete .modal-title {
        color: #000;
    }

    #modal-delete .cancel-button {
        margin: 0 20px;
        background-color: #1a8ecb;
        color: #fafafa;
    }

    #modal-delete .delete-button {
        margin: 0 20px;
        background-color: darkred;
        color: #fafafa;
    }
</style>