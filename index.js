new Vue({
    el: '#exercise',
    data: {
        name: "Nikola Tesla",
        age: "23",
        photoLink: "https://1.bp.blogspot.com/-4Jej4E3Aoqg/XnaVUE1wl2I/AAAAAAAASjI/lc0C5Lm-PMoMgoJoqk18vTcVjzwqZD0SQCLcBGAsYHQ/s1600/nurullah%2Bguc.jpg",
        photoDescription: "Bu resim Nurullah GÜÇ'e aittir."
    },
    methods: {
        multiplacationAge: function() {
            return this.age * 5
        },
        produceRandomNum: function() {
            return Math.random()
        },
        catchName: function(event) {
            this.name = event.target.value
        }
    }
})