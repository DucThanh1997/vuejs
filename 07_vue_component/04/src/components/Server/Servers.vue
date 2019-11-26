<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
</script>
<!-- cái scoped cho phép chúng ta chỉ đặt style ở trong cái file này thôi -->
<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
