<template>
    <div class="app-container">
        <h1>User Management</h1>
        <div class="content">
            <UserData @set-data="setData" />
            <ActiveUser :name="name" :age="age" />
        </div>
    </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default {
    components: {
        ActiveUser, UserData
    },
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        setData(name, age) {
            this.name = name
            this.age = age
        }
    }
}
</script>

<style>
/* Global styles */
:root {
    --primary-color: #4CAF50;
    --text-color: #333;
    --background-color: #f5f5f5;
    --border-radius: 8px;
    --spacing: 1rem;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
}

.app-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

h1 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;
}

.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    align-items: start;
}
</style>