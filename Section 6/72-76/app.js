const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Max",
          phone: "123-456-7890",
          email: "dummymail1@exmaple.com",
          showDetails: false,
        },
        {
          id: 2,
          name: "Manuel",
          phone: "123-752-7890",
          email: "dummymail2@example.com",
          showDetails: false,
        },
        {
          id: 3,
          name: "Alex",
          phone: "123-456-4078",
          email: "dummymail3@example.com",
          showDetails: false,
        },
        {
          id: 4,
          name: "John",
          phone: "123-456-1427",
          email: "dummymail4@example.com",
          showDetails: false,
        },
      ],
    };
  },
  methods: {
    toggleDetails(friendId) {
      const friend = this.friends.find(friend => friend.id === friendId);
      if (friend) {
        friend.showDetails = !friend.showDetails;
      }
    }
  },
  computed: {},
  watch: {},
});

app.component("friend-card", {
  template: `
    <div class="friend-card">
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ friend.showDetails ? "Hide" : "Show" }} Details
      </button>
      <ul v-if="friend.showDetails">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </div>
  `,
  props: ["friend"],
  methods: {
    toggleDetails() {
      this.$emit("toggle-details", this.friend.id);
    },
  },
});

app.mount("#app");
