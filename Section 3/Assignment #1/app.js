const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            listIsVisible: true,
        }
    },
    methods: {
        addTask() {
            if (this.enteredValue.trim() === '') {
                return
            }
            this.tasks.push(this.enteredValue)
            this.enteredValue = ''
            console.log(this.tasks);
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        toggleList() {
            this.listIsVisible = !this.listIsVisible
        },
    },
})

app.mount('#assignment')