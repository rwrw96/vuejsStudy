var app = new Vue({
    el: "#app",
    methods: {
        addClick: function(event) {
            var todo = {
                item: this.newItem
            }
            
            }
        },
    data: {
        newItem: "",
        todos: []
    }
})