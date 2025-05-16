const app = Vue.createApp({
    data() {
        return {
            tempStyle: '',
            style: '',
            isVisible: true,
            bg: '',
        };
    },
    methods: {
        setStyle(e) {
            this.tempStyle = e.target.value;
        },
        applyStyle() {
            this.style = this.tempStyle;
        },
        toggleView() {
            this.isVisible = !this.isVisible;
        },
        setBgColor(e) {
            this.bg = e.target.value;
        },
    }
});

app.mount('#assignment');