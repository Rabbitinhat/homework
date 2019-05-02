# [React](http://www.react.com) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

React is JavaScript library for building user interfaces.

* **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes, Declarative views make your code more predictable, simpler to understand, and easier to debug.

* **Component-Based**: Build encapsulated components that manage their own state, the compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

* **Learn Once, Write Anywhere**: We don't makes assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native]().

[Learn how to use React in your own project.]()

## Installation

---

React has been designed for gradual adoption from the start, and **you can use as little or as much React as you need:**

* Use [Online Playgrounds]() to get a taste of React.

* [Add React to a Website] as a `<script>` tag in one minute.

* [Create a New React App] if you're looking for a powerful JavaScript toolchain.

You can use React as a `<script>` tag from a [CDN](), or as a `react` package on [npm]().

## Examples

---

We have several examples [on the website](). Here is the first one to get you started;

```js
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />
  document.getElementById('container')
);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. If you're using React as a `<script>` tag, read [this section] on integrating JSX; otherwise, the [recommended JavaScript toolchains]() handle it automatically.