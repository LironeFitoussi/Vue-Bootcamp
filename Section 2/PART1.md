## 🖥️ Vue Section 2 Part 1 – Quick Summary

### 🎬 Creating the App

```js
const app = Vue.createApp({
  // app config goes here
});
```

* `Vue.createApp({...})` initializes a new Vue application instance.
* Inside it, you define `data`, `methods`, and other app logic.

---

### 📦 `data()`

```js
data() {
  return {
    message: 'Hello World',
    count: 0
  }
}
```

* `data` is a function that returns an **object** with variables available to the template.
* All properties here can be accessed via `this` in methods or used directly in the template (`{{ }}`).

---

### 🛠️ `methods`

```js
methods: {
  greet() {
    console.log(this.message);
  }
}
```

* Define functions you can call from your template (e.g., on button clicks).
* Inside these functions, `this` refers to the Vue instance and can access `data()` properties.

---

### 🧲 Mounting the App

```js
app.mount('#app');
```

* Mounts the app to the DOM element with the specified selector.
* Required to activate the Vue app in the HTML.

---

## 🧩 Template Syntax

### 🔁 Looping – `v-for`

```html
<li v-for="(item, index) in items" :key="index">{{ item }}</li>
```

* Loops over an array and renders each item.
* Always add a `:key` for performance and tracking.

---

### 🧷 Binding Attributes – `v-bind`

```html
<img v-bind:src="imageUrl">
<!-- or shorthand -->
<img :src="imageUrl">
```

* Binds dynamic values (from `data`) to HTML attributes.

---

### 📤 Rendering Raw HTML – `v-html`

```html
<div v-html="htmlContent"></div>
```

* Renders raw HTML from a string.
* Use with caution – avoid injecting untrusted content.

---

### 📬 Template Output – `{{ }}`

```html
<p>{{ message }}</p>
<p>{{ count + 1 }}</p>
<p>{{ greetUser() }}</p>
```

* Outputs variables, expressions, or calls methods from the Vue instance.

---

### 🔄 `this` Keyword in Methods

```js
methods: {
  increment() {
    this.count++; // accesses the count variable from data()
  }
}
```

* In Vue methods, `this` refers to the component instance and allows access to `data`, `methods`, etc.




