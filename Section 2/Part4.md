## 🎨 Vue – Styling: Dynamic CSS and Inline Styles

---

### 🎯 1. `:style` – Inline Dynamic Styling

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Hello</div>
```

* Binds **inline styles** to DOM elements dynamically.
* Accepts an **object** or an **array of style objects**.

```js
data() {
  return {
    activeColor: 'red',
    fontSize: 18
  }
}
```

➡️ You can also bind **multiple** style objects:

```html
<div :style="[baseStyles, overrideStyles]"></div>
```

---

### 🎯 2. Dynamic CSS Classes – Object Syntax

```html
<div class="demo" :class="{ active: boxASelected }" @click="selectBox('A')"></div>
```

* `:class="{ className: condition }"` → Adds class only if condition is true.
* You can **combine static class** (`demo`) with **dynamic class** (`active`).

```js
data() {
  return {
    boxASelected: true
  }
}
```

---

### 🎯 3. Dynamic Classes – Array Syntax

```html
<div :class="[isActive ? 'active' : '', customClass]"></div>
```

* Use an **array of strings** to bind multiple dynamic classes.
* Can mix conditions and variables.

```js
data() {
  return {
    isActive: true,
    customClass: 'highlighted'
  }
}
```

---

### 📌 Comparison

| Syntax Type       | Example                                          | Use Case                     |
| ----------------- | ------------------------------------------------ | ---------------------------- |
| `:style` (object) | `:style="{ color: 'red' }"`                      | Inline styles                |
| `:class` (object) | `:class="{ active: isActive }"`                  | Conditional class binding    |
| `:class` (array)  | `:class="[baseClass, isActive ? 'active' : '']"` | Dynamic multiple class names |