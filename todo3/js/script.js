var app = new Vue({
            el: "#app",
            data: {
                newItem: "",
                todos: [],
                isDone: false
            },
            methods: {
                addItem: function () {
                    if(this.newItem == "") return;
                    var todo = {
                        item: this.newItem
                    };
                    this.todos.push(todo);
                    this.newItem = "";
                },
                deleteItem: function(index){
                    this.todos.splice(index, 1);
                }
            }
        })