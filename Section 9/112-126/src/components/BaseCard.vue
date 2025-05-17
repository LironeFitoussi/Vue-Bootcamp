<template>
    <div class="card">
        <header v-if="$slots.header">
            <slot name="header"/>
        </header>
        <div class="content">
            <slot name="content"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseCard',
};
</script>

<style scoped>
.card {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

header {
    padding: 1rem;
    border-bottom: 1px solid #eee;
}

.content {
    padding: 1rem;
}

header :deep(h2) {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
}
</style>