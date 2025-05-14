# magpyl 🐦

> Lightweight, client-side search for static blogs and sites – no backend required.

**magpyl** is a tiny TypeScript library that adds full-text search to static sites and blogs. Designed for integration with static site generators like [11ty](https://www.11ty.dev/), it lets end users zero in on content— the way a _magpie hones in on sparkle._

## ✨ Features

- 🧠 Smart client-side search
- 🔍 Works entirely in the browser – no backend needed
- ⚡ Fast, lightweight, and framework-agnostic
- 🧩 Easily integrates with 11ty and other static site generators
- 💡 Simple integration using a `<form>` and your content index
- 🔧 Built in TypeScript - modern and type-safe

## 🚀 Installation

```bash
pnpm add magpyl
```

or

```bash
yarn add magpyl
```

or

```bash
npm install magpyl
```

## 🔧 Usage

```ts
import { createSearch } from "magpyl";
```

<!-- @TODO: Check this after implementation -->

## HTML Integration

<!-- @TODO: Check this after implementation -->

```html
<form id="search-form">
  <input type="search" id="search-input" placeholder="Search..." />
</form>
<ul id="results"></ul>

<script type="module">
  import { createSearch } from "magpyl";
  import index from "./search-index.json";

  const search = createSearch(index);
  const input = document.getElementById("search-input");
  const resultsEl = document.getElementById("results");

  input.addEventListener("input", () => {
    const results = search(input.value);
    resultsEl.innerHTML = results
      .map((r) => `<li><a href="${r.url}">${r.title}</a></li>`)
      .join("");
  });
</script>
```

## 🧱 Generating the Search Index

Generate a statis JSON index of your content using your static site generator. For now, this library is especially implemented for the [11ty Framework](https://11ty.dev). Future integration with other frameworks possible.

<!-- @TODO: Finish these instructions on how to create 11ty collection or search.json -->

## Documentation

Further documentation, examples, and 11ty plugins coming soon.

## 🐦 Why "magpyl"?

**Magpies** are famous for spotting and collecting shiny things. `magpyl` helps your users do just that — find the shiny stuff in your content that your users want the most!

## License

This project is licensed under the [MIT License](https://mit-license.org)
