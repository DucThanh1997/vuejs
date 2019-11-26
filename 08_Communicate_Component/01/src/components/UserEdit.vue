<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge"> đổi tuổi </button>
        <p> {{ this.userAge }} </p>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            userAge: {
                type: Number,
            },
            uppAge: Function
        },
        methods: {
            // gọi cái event này ra đặt là changeAge và làm nó để ý đến cái userAge
            editAge() {
                this.userAge = 22;
                // this.$emit("changeAge", this.userAge)
                // gọi thằng eventBus ra làm nó lắng nghe cái editage này rồi pass vào cái this.userAge
                // eventBus.$emit('changeAge', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>
<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
