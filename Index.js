Vue.createApp({
data() {
    return{

        word:"",
        upper:"",
        lower:"",
    }
},

    Methods: {

        reveal(){
            console.log()
            this.wordtolower = this.word.toLowerCase()
            this.wordtoupper = this.word.toUpperCase()

        }
    }

}).mount("#app")