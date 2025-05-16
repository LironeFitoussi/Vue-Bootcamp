const app = Vue.createApp({
  data() {
    return { 
      enteredValue: '',
      goals: [],
      userData: {
        name: 'Max',
        age: 30
      }
    };
  },
  methods: {
    addGoal() {      
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
