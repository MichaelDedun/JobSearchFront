<template>
    <span>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <button type="button" @click="() => this.$router.push({path: '/summaries/create'})"
                        class="new-summary-button">
                    <h4>Создать резюме</h4>
                </button>
                <SummaryItem v-for="summary in summaries" :key="summary.id" :summaries="summaries"
                             :summary="summary"></SummaryItem>
            </div>
        </div>
    </span>
</template>

<script>
    import Menu from "../../../components/Menu";
    import SummaryItem from "@/components/summary/SummaryItem";

    export default {
        name: "WorkerSummaries",
        data() {
            return {
                summaries: []
            }
        },
        components: {SummaryItem, Menu},
        created: function () {
            this.$api.get('/summary').then(response =>
                response.data.forEach(r => this.summaries.push(r))
            )
        }
    }
</script>

<style scoped>
    .new-summary-button {
        margin: 10px auto;
        background-color: #1a8ecb;
        min-width: 70%;
        height: 80px;
        border-radius: 8px;
        border: 1px solid #1a8ecb;
    }

    .new-summary-button h4 {
        color: #fafafa;
    }
</style>