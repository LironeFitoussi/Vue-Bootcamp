Vue.createApp({
  data() {
    return {
        user: {
            name: 'John Doe',
            age: 30,
        },
        url: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
    }
  },
  methods: {
    getRandomNumber() {
        return Math.round(Math.random(1, 10) * 10)
    }
  }
}).mount('#assignment')