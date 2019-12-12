export const fruitMixin = {
    data() {
        return {
          text: 'hello there',
          fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
          filterText: ''
        }
    },
    computed: {
        // 1 kiểu computed hơi hướng khá giống với filter, nó giúp chúng ta cải thiện performance
        filteredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          });
        }
    } 
};
