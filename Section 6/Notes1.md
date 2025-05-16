## 🧠 Concepts

### Components

* **Reusable, encapsulated Vue instances** with their own data, template, and logic.
* Promotes **modularity** and **code reusability**.

### `app.component`

* Global registration method in Vue 3.
* Makes a component available throughout the entire app.

### `<template>`

* Declares the **HTML structure** of a Vue component.
* Must have **one root element**.

### `this.$emit`

* Emits a **custom event** from a child component to its parent.
* Used to trigger communication **upwards**.

---

## 🔧 Syntax

### 1. Component Definition

```js
// MyButton.vue
<template>
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  name: 'MyButton',
  methods: {
    handleClick() {
      this.$emit('clicked') // emit event to parent
    }
  }
}
</script>
```

### 2. Global Registration with `app.component`

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'

const app = createApp(App)
app.component('MyButton', MyButton) // globally registered
app.mount('#app')
```

### 3. Using `<template>`

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <MyButton @clicked="onButtonClicked" />
  </div>
</template>
```

### 4. Emitting with `this.$emit`

```js
this.$emit('eventName', payload)
```

Parent listens using:

```html
<MyComponent @eventName="handleEvent" />
```

---

## 💡 Tips

* Use **PascalCase** for component names in JS, **kebab-case** in templates.
* Prefer **global registration (`app.component`)** only when components are reused across multiple views.
* Always **define the emitted events** in child components using `emits: ['eventName']` in Vue 3 (optional but good practice).

---

## 📌 Summary Table

| Concept         | Description                                 | Scope            |
| --------------- | ------------------------------------------- | ---------------- |
| `app.component` | Registers component globally                | Application-wide |
| `<template>`    | Component's HTML structure                  | Component-level  |
| `this.$emit`    | Sends event from child to parent            | Component-level  |
| Component       | Self-contained Vue block (template + logic) | Reusable unit    |