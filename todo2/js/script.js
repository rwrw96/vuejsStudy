var app = new Vue({
    el: "#app",
    data: {
        todos: [],
        newItem: ""
    },
    methods: {
        addItem: function(){
            if(this.newItem == "") return;
            var todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo);
            this.newItem = "";
        },
        deleteItem: function(index){
            this.todos.splice(index, 1);
        }
    }
})