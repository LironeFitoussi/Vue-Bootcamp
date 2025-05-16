import { createApp } from 'vue';
import App from './App.vue';

// Components
import FriendCard from './components/FriendCard.vue';

const app = createApp(App);

app.component('FriendCard', FriendCard);

app.mount('#app');
