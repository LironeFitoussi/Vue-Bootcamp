<template>
    <div class="form-card">
        <h2>Update User Data</h2>
        <form @submit.prevent="submitData">
            <div class="form-group">
                <label for="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    v-model="name"
                    placeholder="Enter name"
                    required
                />
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input 
                    type="number" 
                    id="age" 
                    v-model="age"
                    placeholder="Enter age"
                    min="0"
                    required
                />
            </div>
            <button type="submit">Update User</button>
        </form>
    </div>
</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('set-data', this.name, this.age)
        }
    }
}
</script>

<style scoped>
.form-card {
    background: white;
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    color: var(--primary-color);
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-weight: bold;
    color: var(--text-color);
}

input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

input:focus {
    outline: none;
    border-color: var(--primary-color);
}

button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}
</style>