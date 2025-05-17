<template>
  <header class="main-header">
    <div class="container">
      <h1>More on Vue Components</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped>
.main-header {
  width: 100%;
  height: 5rem;
  background-color: #14005e;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  margin: 0;
  font-size: 2rem;
  text-align: center;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>