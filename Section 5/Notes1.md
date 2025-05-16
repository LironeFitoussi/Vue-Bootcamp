## 🧠 Concepts: `ref` vs `$refs` in Vue

### `ref` (Composition API)

* Part of the **Composition API** introduced in Vue 3.
* Used to create **reactive references** to DOM elements or values.

### `$refs` (Options API)

* Part of the **Options API** (used in Vue 2 and Vue 3).
* Provides **direct access** to DOM elements or child components in the template.
* Not reactive — only available **after the component is mounted**.

---

## 🔧 Syntax

### Using `ref` (Composition API)

```vue
<script setup>
import { ref, onMounted } from 'vue'

const inputEl = ref(null)

onMounted(() => {
  inputEl.value.focus() // Access DOM directly
})
</script>

<template>
  <input ref="inputEl" />
</template>
```

### Using `$refs` (Options API)

```vue
<template>
  <input ref="inputEl" />
</template>

<script>
export default {
  mounted() {
    this.$refs.inputEl.focus() // Access DOM directly
  }
}
</script>
```

---

## 💡 Tips

* Use `ref()` for **reactive values or DOM access** in the Composition API.
* `$refs` are only accessible **after the DOM is rendered** (e.g., in `mounted()`).
* Avoid overusing `$refs`—prefer data-binding and Vue's reactivity when possible.

---

## 📌 Summary Table

| Feature     | `ref()`                   | `$refs`               |
| ----------- | ------------------------- | --------------------- |
| API Type    | Composition API           | Options API           |
| Reactivity  | ✅ Reactive                | ❌ Not reactive        |
| Use Case    | DOM refs, reactive values | DOM or component refs |
| Access Time | Anytime (via `.value`)    | After `mounted()`     |