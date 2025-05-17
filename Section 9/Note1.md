## 🎨 Scoped Styles

### 🧠 Concept

Scoped styles in Vue ensure that styles apply only to the component they are defined in, avoiding leakage into child or parent components.

### 🔧 Syntax

```html
<style scoped>
.button {
  color: red;
}
</style>
```

Vue adds unique attributes to elements and styles (e.g., `data-v-123abc`) to scope the styles.

---

## 🕳️ Slots & `v-slot`

### 🧠 Concept

Slots allow a parent component to inject content into a child component. Useful for building flexible, reusable components.

### 🔧 Basic Slot Usage

**Child component (`BaseLayout.vue`):**

```html
<slot></slot> <!-- Default slot -->
```

**Parent component:**

```html
<BaseLayout>
  <p>This will be injected</p>
</BaseLayout>
```

### 🔧 Named Slots

```html
<!-- Child -->
<slot name="header"></slot>
<slot></slot>
<slot name="footer"></slot>

<!-- Parent -->
<BaseLayout>
  <template v-slot:header>
    <h1>Header</h1>
  </template>
  <p>Main content</p>
  <template v-slot:footer>
    <p>Footer</p>
  </template>
</BaseLayout>
```

---

## 🎯 Scoped Slots

### 🧠 Concept

Scoped slots are slots that expose data from the child component to the parent, useful for custom rendering.

### 🔧 Syntax

**Child component:**

```html
<slot :user="userData"></slot>
```

**Parent component:**

```html
<MyComponent v-slot="{ user }">
  <p>{{ user.name }}</p>
</MyComponent>
```

---

## 🖌️ Styling Slotted Content

### 💡 Tips

* Slotted content is styled by the parent, **not** the child.
* To target slotted elements from the child, use `::v-deep` or `>>>`.

```html
<style scoped>
::v-deep .custom-slot-style {
  font-weight: bold;
}
</style>
```

> 💡 Use `::v-deep` for deep styling slotted or child component content in scoped CSS.

---

## 📌 Summary

| Feature       | Purpose                              | Key Syntax             |
| ------------- | ------------------------------------ | ---------------------- |
| `scoped`      | Restricts styles to local component  | `<style scoped>`       |
| Slot          | Default content insertion point      | `<slot></slot>`        |
| Named Slot    | Multiple insertion points            | `<slot name="header">` |
| Scoped Slot   | Pass data from child to slot content | `<slot :user="data">`  |
| Styling Slots | Style from parent or use `::v-deep`  | `::v-deep .class`      |