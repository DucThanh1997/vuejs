<template>
    <div>
        <div>
            <!-- component con nhận code html bằng dòng slow -->
            <slot name = "title"></slot>
            <!-- gọi các dòng qua tên -->
            
        </div>
        <hr>
        <div>
            <!-- nếu 1 slot ko được đặt tên khi truyền thì nó sẽ là default slot gọi ra mà ko cần tên -->
            <slot></slot>
            <!-- nếu 1 slot không tồn tại thì chúng ta có thể pass giá trị default vào, ở dưới đây giá trị default là chơi -->
            <slot name="lolo">chơi </slot>
        </div>
        <hr>
        <div>
            <slot name = "p"></slot>
        </div>
    </div>
</template>

<script>
</script>
<!-- cái slot này khá hay. Về mặt data hay các thẻ html thì bên truyền đi sẽ lo còn style thì bên nhận (có thẻ <slot> tự điều chỉnh) -->
<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center; 
    }
    h1 {
        color: red;
    }
</style>