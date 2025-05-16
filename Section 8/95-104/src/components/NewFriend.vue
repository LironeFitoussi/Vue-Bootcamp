<template>
  <form @submit.prevent="addFriend">
    <div class="form-control">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="form-control">
      <label for="phone">Phone</label>
      <input type="tel" id="phone" v-model="phone" />
    </div>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    };
  },
  emits: ['add-friend'],
  methods: {
    addFriend() {
      this.$emit('add-friend', this.name, this.phone, this.email);
      this.name = '';
      this.phone = '';
      this.email = '';
    }
  }
}
</script>

<style scoped>
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

input {
  font: inherit;
  padding: 0.15rem;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>