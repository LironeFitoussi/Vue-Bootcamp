<template>
    <div class="user-card">
        <h2>Active User Details</h2>
        <div class="user-info">
            <p class="info-item">
                <span class="label">Name:</span>
                <span class="value">{{ name || 'Not Set' }}</span>
            </p>
            <p class="info-item">
                <span class="label">Age:</span>
                <span class="value">{{ age || 'Not Set' }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'age']
}
</script>

<style scoped>
.user-card {
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

.user-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.info-item {
    margin: 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
}

.label {
    font-weight: bold;
    color: var(--text-color);
    margin-right: 0.5rem;
}

.value {
    color: #666;
}
</style>