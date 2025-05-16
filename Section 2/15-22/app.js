// Vue.createApp({
//     data() {
//         return {
//             message: 'Hello Vue!'
//         }
//     }
// }).mount('#app')

const app = Vue.createApp({
    data() {
        return {
            title: 'My Course Goals',
            coursGoalA: "<h2>Learn Vue.js in 30 days</h2>",
            coursGoalB: "Master Vue.js in 30 days",
            vueLink: 'https://vuejs.org/',
            // coursGoals: [],
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
                return this.coursGoalA
            } else {
                return this.coursGoalB
            }
        },
        // addGoal() {
        //     this.coursGoals.push(this.coursGoal)
        // }
    }
})
app.mount('#user-goal')