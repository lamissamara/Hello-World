

new Vue({
      el: '#app',
      data() {
        return {
          items: [],
          newItem: ''
        }
      },
      methods: {
        addItem() {
          if (this.newItem !== '') {
            this.items.push(this.newItem);
            this.newItem = '';
          }
        },
        deleteItem(index) {
          this.items.splice(index, 1);
        }
      }
    });