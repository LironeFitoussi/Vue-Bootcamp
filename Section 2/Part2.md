## 🎯 Vue – Event Handling Summary

### 🖱️ `v-on:click` (shorthand: `@click`)

```html
<button v-on:click="sayHello">Click me</button>
<!-- or -->
<button @click="sayHello">Click me</button>
```

* Calls the `sayHello` method when clicked.
* You **don’t need `()`** unless passing arguments.

---

### 📤 Passing Arguments to Methods

```html
<button @click="sayHello('Lirone')">Greet</button>
```

* Calls the method with an argument.
* In this case, you **must** use parentheses `()`.

---

### ❗ Important Rule:

> ✅ Use `()` only if you pass parameters.
> ❌ If you write `sayHello()` with no arguments, it **will still call the function immediately** when the component is rendered — not on click!

---

### 🧾 Accessing the Event Object

```html
<input @input="handleInput($event)">
```

* `$event` refers to the native DOM event object.
* Can be used inside any handler.

---

### 🧩 Passing Params + Event

```html
<button @click="handleClick('Product A', $event)">Buy</button>
```

* You can pass both custom arguments and the event.
* Make sure to **use parentheses** and pass `$event` explicitly.

---

### 🛑 Event Modifiers – Cleaner Code

```html
<form @submit.prevent="submitForm"> ... </form>
```

* `.prevent` = automatically calls `e.preventDefault()`
* No need to access `event` manually in this case.

**Other common modifiers:**

* `.stop` – stopPropagation()
* `.capture`, `.self`, `.once`, `.passive`

---

### 🖱️ Mouse Click Modifiers

```html
<button @click.right="rightClicked">Right click</button>
<button @click.middle="middleClicked">Middle click</button>
<button @click.left="leftClicked">Left click</button>
```

* Triggers methods only on specific mouse buttons.

---

### ⌨️ Keyboard Modifiers – `@keyup.[key]`

```html
<input @keyup.enter="submitOnEnter" />
```

* Triggers the method only when pressing `Enter`.

**Other keys:** `.esc`, `.tab`, `.delete`, `.space`, `.arrow-up`, etc.

---

### 🧷 `v-once`

```html
<h1 v-once>{{ message }}</h1>
```

* Renders the element **only once**.
* Skips all future reactivity/updates for this part of the DOM.