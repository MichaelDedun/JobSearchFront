<template>
    <span>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <div class="search-wrapper">
                    <div class="col-md-12 text-center">
                        <form action="" method="post">
                            <label>
                                <span>Поиск резюме:</span>
                                <input type="text" placeholder="Категория, навыки">
                            </label>
                            <input type="button" value="Найти">
                        </form>
                    </div>
                </div>
            </div>
            <br>
            <SummaryItem v-for="summary in summaries" :key="summary.id" :summaries="summaries"
                         :summary="summary"></SummaryItem>
        </div>
    </span>
</template>

<script>
    import Menu from "../components/Menu";
    import SummaryItem from "@/views/employer/SummaryItem";
    export default {
        name: "SearchSummary",
        data() {
            return {
                summaries: []
            }
        },
        components: {SummaryItem, Menu,},
        created: function () {
            if (window.localStorage.getItem("userType") === 'ADMIN') {
                this.$api.get('/summary/fresh').then(response => this.summaries = response.data)
            }

        }
    }
</script>
<style scoped>

    .search-wrapper {
        position: relative;
        left: 10%;
        width: 80%;
        padding: 23px 0 25px 0;
        -webkit-border-radius: 0 0 20px 20px;
        -moz-border-radius: 0 0 20px 20px;
        border-radius: 0 0 20px 20px;
        background-color: #1a8ecb;
    }

    .search-wrapper form label span {
        color: #000;
        font-size: 18px;
    }

    .search-wrapper form input[type=text] {
        margin-left: 10px;
        padding-left: 5px;
        width: 200px;
        height: 40px;
        color: #000;
        font-size: 16px;
        -webkit-border-radius: 10px 0 0 10px;
        -moz-border-radius: 10px 0 0 10px;
        border-radius: 10px 0 0 10px;
    }

    .search-wrapper form input[type=button] {
        width: 100px;
        height: 40px;
        margin-top: 3px;
        color: #000;
        background-color: #fff;
        border: none;
        border-left: 1px solid #1a8ecb;
        -webkit-border-radius: 0 10px 10px 0;
        -moz-border-radius: 0 10px 10px 0;
        border-radius: 0 10px 10px 0;
    }
</style>