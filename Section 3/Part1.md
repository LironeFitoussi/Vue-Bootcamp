## 🔀 Vue – Conditionals & Lists

---

### ✅ Conditionals

#### `v-if`

```html
<p v-if="isVisible">Visible!</p>
```

* Adds/removes the element from the **DOM** entirely.
* Best for conditional rendering where the element may not exist at all.

#### `v-else`

```html
<p v-if="isLoggedIn">Welcome</p>
<p v-else>Please log in</p>
```

* Must be placed **immediately after** a `v-if` or `v-else-if`.

#### `v-show`

```html
<p v-show="isVisible">I’m always in the DOM</p>
```

* Always renders the element, but uses `display: none` when false.
* Better for toggling visibility frequently.

---

### 🔁 Displaying Lists with `v-for`

#### Through an **Array**

```html
<li v-for="(item, index) in items" :key="index">{{ item }}</li>
```

* `item` is the value; `index` is optional.
* **Always use `:key`** for performance and predictable updates.

#### Through an **Object**

```html
<div v-for="(value, key, index) in user" :key="key">
  {{ key }}: {{ value }}
</div>
```

* Access key, value, and index in each loop.

#### Through a **Number Range**

```html
<span v-for="n in 5" :key="n">{{ n }}</span>
```

* Loops from `1` to `5`.
* Great for rendering repeated elements without data source.

---

### 🗑️ Removing Items by Index

```html
<ul>
  <li v-for="(item, idx) in items" :key="item.id">
    {{ item.name }}
    <button @click="removeItem(idx)">Remove</button>
  </li>
</ul>
```

```js
methods: {
  removeItem(index) {
    this.items.splice(index, 1);
  }
}
```

* Use `splice(index, 1)` to remove item from array reactively.

---

### 🧷 Lists and Keys

* Always add `:key` when looping:

  ```html
  <li v-for="item in list" :key="item.id">{{ item }}</li>
  ```
* Helps Vue track elements when updating/reordering.
* Keys should ideally be **unique and stable** (e.g., IDs).

---

### 🛑 `@click.stop` – Stop Propagation

```html
<div @click="parentClicked">
  <button @click.stop="childClicked">Click Me</button>
</div>
```

* `.stop` modifier stops the click from bubbling to the parent.
* Cleaner than calling `event.stopPropagation()` manually.

---

## ✅ Summary Table

| Feature          | Use for...                                |
| ---------------- | ----------------------------------------- |
| `v-if / v-else`  | Conditional rendering (DOM removed/added) |
| `v-show`         | Toggle visibility without DOM removal     |
| `v-for` (array)  | Display list items                        |
| `v-for` (object) | Iterate over object keys/values           |
| `v-for="n in 5"` | Render a fixed number of times            |
| `:key`           | Improve rendering efficiency              |
| `@click.stop`    | Prevent event bubbling                    |