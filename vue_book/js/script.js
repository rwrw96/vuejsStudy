var app = new Vue ({
    el: "#app",
    data: {
        monster: "",
        list: [
            { id: 1, monster: "キマイラ", HP:300},
            { id: 2, monster: "スライム", HP:100},
            { id: 3, monster: "ケルベロス", HP:500}
        ]
    },
    methods: {
        addMonster: function(){
            var max = this.list.reduce(function(a,b){
                return a.id > b.id ? a.id : b.id
            }, 0)
            this.list.push({
                id: max + 1,
                monster: this.monster,
                HP: 1000
            })
        }
    }
})