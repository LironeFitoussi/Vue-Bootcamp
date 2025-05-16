const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Komo",
      joke: "",
      confirmedName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    addFive(num) {
      this.counter += num;
    },
    reduceFive(num) {
      this.counter -= num;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    setName (e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    setJoke(e) {
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);      
      this.joke =  formProps.joke;
    },
  },
});

app.mount('#events');
