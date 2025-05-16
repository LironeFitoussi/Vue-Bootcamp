const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
          this.counter = 0;
      }
    }
    // firstName(value) {
    //   this.fullName = value && value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   this.fullName = value && this.firstName + ' ' + value;
    // },
  },
  computed: {
    fullName() {      
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.firstName = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
