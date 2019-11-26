<template>
    <div class="row">
        <!-- cái này là bootstrap -->
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">  
                <label> Quote </label>
                <!-- v-model để đính cái giá trị được nhập vào ở trong textarea vào quote -->
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">  
                <!-- tạo ra 1 event add thêm 1 cái quote với content ở trên phần textarea rồi emit sang các component khác -->
                <button class="btn btn-primary" @click.prevent="createNew"> Add Quote </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            };
        },
        methods: {
            createNew() {
                // sau khi emit nó sẽ đưa biến quote về rỗng
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            } 
        }
    }
</script>

<style>

</style>