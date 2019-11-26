<template>
    <div class="row">
        <!-- lấy style ở trong Quote.vue -->
        <!-- lấy index ra truyền vào function deleteQuote, functuon deleteQuote sẽ dùng $emit gửi đến các component đang listen -->
        <!-- native dùng khi ấn vào nó sẽ ko refresh lại trang -->
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)"> {{ quote }} </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    export default {
        props: ['quotes'] ,
        components: {
            appQuote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index); 
            }
        }
    }
</script>

<style>

</style>