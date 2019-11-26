<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- chuyển giá trị cho selected component -->
                <button @click="selectedComponent = 'appQuote'"> Quote </button>
                <button @click="selectedComponent = 'appNew'"> New </button>
                <button @click="selectedComponent = 'appAuthor'"> Author </button>

                <p> {{ selectedComponent }} </p>
                <!-- giúp cho component không bị destroyed khi chuyển sang 1 component khác -->
                <keep-alive>
                    <!-- chọn component cho trang. Đây là cách chọn component động -->
                    <component :is="selectedComponent"></component> 
                </keep-alive>
               <!--<app-quote>-->
                <!-- chuyển dòng này sang bên component con -->
                   <!-- <h1 slot="title"> {{ quoteTitle }} </h1> -->
                   <!-- bạn có thể đặt tên cho cái slot đó để phân biệt -->
                   <!-- <p slot="p">  aaaaa </p>
                   <p> dwwww </p>
               </app-quote> -->
            </div> 
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import New from './components/New.vue';
    import Author from './components/Author.vue';
    export default {
        data: function() {
            return {
                quoteTitle: 'Đăng ngu lồn',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
