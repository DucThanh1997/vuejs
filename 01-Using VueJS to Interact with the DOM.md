## VueJs Template
- Cú pháp
![image](https://user-images.githubusercontent.com/45547213/57670568-1db39580-763a-11e9-91f7-80938e4a4516.png)

Bạn có thể gọi luôn tên của function hoặc biến mà không cần lèo nhèo các cú pháp khác

Còn nếu bạn muốn gọi biến trong js thì phải thêm `this` vào trước

![image](https://user-images.githubusercontent.com/45547213/57670666-784cf180-763a-11e9-835e-7a475308da2b.png)

Ngoài ra bạn có thể gán giá trị vào thuộc tính bằng cách sử dụng v-bind
![image](https://user-images.githubusercontent.com/45547213/57670862-59029400-763b-11e9-99f2-5a7ed7bb860c.png)

Ví dụ ta có title: là thành đẹp trai nhưng khi xuống dưới chúng ta lại gán nó 1 giá trị khác . Bây giờ muốn in ra giá trị cũ là thành đẹp trai
thì làm như nào??
![image](https://user-images.githubusercontent.com/45547213/57681344-b279bb80-7659-11e9-9da0-a33c446ccf6b.png)
Làm như này =))))

- Cách hoạt động
![image](https://user-images.githubusercontent.com/45547213/57670386-45562e00-7639-11e9-8579-1fec79cb676b.png)
VueJs không xuất hiện ở render cuối cùng output ra màn hình mà nó được xử lý ở 1 layer khác nên như bạn thấy ở phần element không có 
`{{ title }}` mà chỉ có giá trị của nó
