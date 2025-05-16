Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    computed: {
        result() {
            if (this.counter === 37) {
                return this.counter;
            } else if (this.counter < 37) {
                return 'Not there yet';
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        addFive() {
            this.counter += 5;
        },
        addOne() {
            this.counter += 1;
        }
    },
    watch: {
        counter(value) {
            if (value !== 0) {
                setTimeout(() => {
                    this.counter = 0;
                }, 5000);
            }
        }
    }
}).mount('#assignment');
    