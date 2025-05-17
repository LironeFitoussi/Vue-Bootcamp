<template>
  <base-card>
    <template #header>
      <h2>Available Badges</h2>
    </template>
    <template #content>
      <ul class="badge-list">
        <li v-for="badge in badges" :key="badge.type">
          <base-badge :type="badge.type" :caption="badge.caption"></base-badge>
        </li>
      </ul>
    </template>
  </base-card>
</template>

<script>
import BaseBadge from './BaseBadge.vue';
import BaseCard from './BaseCard.vue';

export default {
  components: {
    BaseBadge,
    BaseCard
  },
  data() {
    return {
      badges: [
        { type: 'admin', caption: 'ADMIN' },
        { type: 'author', caption: 'AUTHOR' }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
  font-size: 1.5rem;
}

.badge-list {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 768px) {
  .badge-list {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>