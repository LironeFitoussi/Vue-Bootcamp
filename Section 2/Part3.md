## 🧠 Vue – Reactivity: `v-model`, `computed`, and `watch`

---

### 🎛️ `v-model` – Two-Way Binding (on inputs)

```html
<input v-model="name" />
<p>Hello, {{ name }}!</p>
```

* **Two-way binding** between input and data.
* Automatically updates the `data` property when user types.
* Also updates the input when the `data` changes.

> Works on: `<input>`, `<textarea>`, `<select>`, and even custom components.

---

### 💡 `computed` – Reactive Cached Properties

```js
computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
```

* Like `methods`, but **cached** and **reactive**.
* Only re-evaluated when **dependent data changes**.
* Useful for **derived data** (e.g., total price, formatted text).

> ✅ Use when you want to display something **based on data**
> ❌ Don’t use for side effects or async code

---

### 👀 `watch` – Watchers (Observe & React)

```js
watch: {
  count(newVal, oldVal) {
    console.log('Count changed from', oldVal, 'to', newVal);
  },
  searchQuery(val) {
    this.fetchResults(val);
  }
}
```

* Watches for changes in specific `data` or `computed` properties.
* **Good for side effects** (like fetching data, logging, etc).
* Provides both the **new** and **old** values.

> ✅ Use `watch` when you need to **perform actions** on data changes
> ✅ Useful for **API calls**, **timers**, **manual DOM actions**, etc.

---

## 📌 Quick Comparison

| Feature    | Use case                     | Reactive | Cached | Two-way? | Side effects? |
| ---------- | ---------------------------- | -------- | ------ | -------- | ------------- |
| `v-model`  | Bind form inputs to data     | ✅        | ❌      | ✅        | ❌             |
| `computed` | Derived data for display     | ✅        | ✅      | ❌        | ❌             |
| `watch`    | React to changes & run logic | ✅        | ❌      | ❌        | ✅             |