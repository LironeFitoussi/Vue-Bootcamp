const app = Vue.createApp({
    data () {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    }, 
    watch: {
        message (newValue, oldValue) {
            console.log('message changed from', oldValue, 'to', newValue)
        }
    },
    methods: {
        changeMessage () {
            this.message = 'Hello World!'
        },
        boxSelected (box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected
            }            
        }
    }
})

app.mount('#styling')

console.log(app);
