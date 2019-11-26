<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ switchName() }}</p>
        <p>Age: {{ userAge }} </p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    
    export default {
        // lấy data từ thằng cha đến thằng con bằng props
        props: {
            myName: {
                type: String,
                required: true
            },
            userAge: {
                type: Number,
            },
            // thằng component con này lôi cái function resetFn từ cái props từ thằng cha ra 
            resetFn: Function
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            },
            // ở method resetName chúng ta sẽ tạo ra 1 cái even dạng emit tên là nameWasReset trỏ đến cái this.myName
            resetName() {
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName);
            }
        },
        // khi thằng component được tạo ra thì nó sẽ bật cái lắng nghe từ changeAge lên và data có tên là age sẽ được đính vào cái this.userAge ở component này
        created() {
            eventBus.$on('changeAge', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
