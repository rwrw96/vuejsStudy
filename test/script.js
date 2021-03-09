var app = new Vue ({
    el: "#app",
    data: {
        message: "hello,vue.js!"
    },
    methods: {
        changeItem: function(){

        }
    },
    computed: {
        reverseMessage: function(){
            return this.message.split("").reverse().join("");
        }
    }
})