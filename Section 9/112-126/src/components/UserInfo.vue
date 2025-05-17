<template>
  <section class="user-info">
    <div class="user-header">
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p class="info-text">{{ infoText }}</p>
  </section>
</template>

<script>
import BaseBadge from './BaseBadge.vue';

export default {
  components: {
    BaseBadge
  },
  props: {
    fullName: {
      type: String,
      required: true
    },
    infoText: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      validator: (value) => ['admin', 'author'].includes(value)
    }
  }
};
</script>

<style scoped>
.user-info {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5rem;
  background-color: white;
  transition: transform 0.3s ease;
}

.user-info:hover {
  transform: translateY(-2px);
}

.user-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

.info-text {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
</style>