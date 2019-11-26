<template>
    <div class="container">
        <!-- pass cái event -->
        <app-header :quoteCount = "quotes.length" :maxQuotes="maxQuotes"></app-header>
        <new-quote @quoteAdded="newQuote"></new-quote> 
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"> </app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info"> Info: nhấn vào để xóa</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'
    import Header from './components/Header.vue'
    export default {
        data: function() {
            return {
                quotes: [
                    'lô'
                ],
                maxQuotes: 10,
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert("xóa bớt đi đầy rồi");
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            },
        },
        components: {
            newQuote: NewQuote,
            appQuoteGrid: QuoteGrid,
            appHeader: Header,
        },
    }
</script>

<style>
</style>
