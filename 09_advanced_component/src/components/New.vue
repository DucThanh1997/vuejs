<template>
    <div>
        <h1> new </h1>
        <h3> Bản tình ca ngày xưa của đôi mình anh vẫn hay hát khi vui </h3>
        <button @click="counter++"> buff </button>
        <p> {{ counter }} </p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            };
        },
        destroyed() {
            console.log("destroyed!")
        },
        // khi không ở trong component này cái này sẽ chạy
        deactivated() {
            console.log("deactivated!")
        },
        // khi chuyển về nó sẽ chạy cái này
        activated() {
            console.log("activated!")
        }
    }
</script>
<!-- cái slot này khá hay. Về mặt data hay các thẻ html thì bên truyền đi sẽ lo còn style thì bên nhận (có thẻ <slot> tự điều chỉnh) -->
<style scoped>

</style>