<template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
    components: {
        'app-server-status': ServerStatus
    }
}
</script>
<!-- gọi ServerStatus ra từ file vue cùng tên -->
<!-- đặt tên là app-server-status cho ServerStatus -->
<!-- sang main.js để gọi cho cái app -->