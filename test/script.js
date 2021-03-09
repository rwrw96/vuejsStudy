var app = new Vue ({
    el: "#app",
    data: {
        // message: "hello,vue.js!"
        firstName: "",
        lastName: ""
    },
    computed: {
        fullName: function() {
            return this.firstName + " " + this.lastName ;
        }
    }
})