<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name </button>
        <p> {{ name }} </p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                
                <app-user-detail :myName="name" 
                                 @nameWasReset="name = $event"
                                 :resetFn="resetName"
                                 :userAge="age"></app-user-detail>
                <!-- listen đến cái event nameWasReset ở cái component con và gán name bằng cái tên được thay đổi ở cái event đó -->
                <!-- chuyền data name vào component con 1 cách động -->
                <!-- name ở đầu tiên để đặt tên cho nó -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" 
                               @changeAge="age = $event"
                               :uppAge="upAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'max',
                age: 18
            };
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            },
            // ở thằng component cha tạo 1 function là resetName xong pass nó vào cái resetFn ở phần import thằng component con
            resetName() {
                this.name = 'Thanh';
            },
            
            upAge() {
                this.age = 25;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>

<!-- trong cái này thì 2 component ngang hàng chưa liên kết được với nhau -->


<!-- để pass dữ liệu từ thằng component con này đến thằng component con kia chúng ta sẽ chuyển từ thằng cha về thằng còn -->

<!-- sau sẽ dùng bus nhanh hơn -->