<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['admin', 'author'].includes(value)
    },
    caption: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        'badge--admin': this.type === 'admin',
        'badge--author': this.type === 'author',
      };
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #2e2e2e;
  font-weight: 600;
  transition: all 0.3s ease;
}

.badge--admin {
  background-color: #810036;
  color: white;
}

.badge--author {
  background-color: #002c8a;
  color: white;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>