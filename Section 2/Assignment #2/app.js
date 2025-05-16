Vue.createApp({
  data() {
    return {
        typer: "",
        confirmedTyper: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello!");
    },
    setTyper(e) {
        console.log(e.target.value);
        
        this.typer = e.target.value;
    },
    setDisplayTyper() {
        this.confirmedTyper = this.typer;
    }   
  },
}).mount("#assignment");
