<template>
    <li class="friend-card">
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">
            {{ showDetails ? 'Hide Details' : 'Show Details' }}
        </button>
        <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{ phone }}</li>
            <li><strong>Email:</strong> {{ email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'FriendCard',
        props: {
            name: String,
            phone: String,
            email: String
        },
        data() {
            return {
                showDetails: false
            }
        },
        methods: {
            toggleDetails() {
                this.showDetails = !this.showDetails;
            }
        }
    }
</script>