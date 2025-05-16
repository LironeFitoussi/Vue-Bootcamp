# 🌟 Vue.js Fundamentals Recap

This section laid the **core foundation** for working effectively with **Vue.js**, focusing on its **declarative approach**, **reactivity system**, and how Vue interfaces with the **DOM**.

---

## 🧠 Declarative Thinking in Vue

Vue encourages a **declarative programming style**:

* You **define the desired UI state**, not the step-by-step instructions.
* Vue **figures out how to update the DOM** to reflect your defined state.
* This model simplifies building **dynamic, reactive interfaces**.

---

## 🔌 Connecting Vue to the DOM

To activate Vue on a webpage:

* Use the **`.mount()`** method to **connect your Vue app** to a specific DOM element.
* A **CSS selector** identifies the section of the page where Vue takes control.

```javascript
const app = Vue.createApp({ ... });
app.mount('#app');
```

---

## 🛠 Template Syntax & Bindings

Vue templates are powerful thanks to its **binding system**:

### 🔹 Data Interpolation

* Display data using **double curly braces**:

  ```html
  {{ message }}
  ```

### 🔹 Attribute Binding

* Use **`v-bind`** to bind HTML attributes to dynamic values:

  ```html
  <img v-bind:src="imageUrl">
  ```
* Shorthand syntax:

  ```html
  <img :src="imageUrl">
  ```

### 🔹 Event Binding

* Use **`v-on`** to listen for user interactions:

  ```html
  <button v-on:click="doSomething">Click</button>
  ```
* Shorthand syntax:

  ```html
  <button @click="doSomething">Click</button>
  ```

---

## 🔄 Vue's Reactivity System

Vue automatically **tracks dependencies** and **updates the DOM** when reactive data changes.

### 📌 Key Concepts:

* **`data()`** defines reactive state.
* **Computed properties**: Automatically re-evaluate when dependencies change.
* **Watchers**: Run custom code when specific data changes.

```javascript
computed: {
  reversedMessage() {
    return this.message.split('').reverse().join('');
  }
}
```

---

## 🎨 Dynamic Styling with Vue

Vue supports **dynamic CSS classes and inline styles** through bindings:

### Class Binding:

```html
<div :class="{ active: isActive }"></div>
```

### Style Binding:

```html
<div :style="{ color: activeColor }"></div>
```

* You can also use **array or object syntax** for more complex scenarios.

---

## ✅ What You Should Do Next

* **Review** any lecture that felt unclear.
* **Complete the challenge** at the end of the section to reinforce your understanding.
* Remember: These concepts will be **used throughout the rest of the course**.

---

### 🚀 Summary

By mastering this module, you've learned the **essential building blocks** of Vue:

* Declarative UI logic
* Mounting Vue apps
* Data & event binding
* Reactivity system
* Dynamic styling

These tools will empower you to build **responsive, data-driven applications** with confidence.