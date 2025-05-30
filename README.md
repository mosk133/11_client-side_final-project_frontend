# Final Project – Client-Side Development

**Author:** Guillem Martin Garcia  
**Production URL:** [https://11-final-project-frontend.netlify.app/](https://11-final-project-frontend.netlify.app/)

## 🚀 Production

You can view the live application here:  
🔗 [https://11-final-project-frontend.netlify.app/](https://11-final-project-frontend.netlify.app/)

---

## 🛠️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/mosk133/11_client-side_final-project_frontend.git
cd 11_client-side_final-project_frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

This will start the app at `http://localhost:5173` by default.

---

## ✅ Available Scripts

-   `npm run dev` – Start development server
-   `npm run build` – Build for production
-   `npm run preview` – Preview the built app
-   `npm run lint` – Lint the codebase
-   `npm run lint:fix` – Lint and fix issues
-   `npm run format` – Format code with Prettier
-   `npm run test` – Run tests in watch mode
-   `npm run test:run` – Run tests once (used in CI)

---

## 🧪 Testing & Linting

-   Uses **Vitest** for testing
-   Uses **ESLint** for linting
-   **Husky** hooks are configured for:
    -   `pre-commit`: format code with Prettier
    -   `pre-push`: run tests

---

## 🗂️ Project Structure

```
├── .github
├── .husky
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── BookCard.jsx
│   │   ├── BookCard.module.css
│   │   ├── BookCard.test.jsx
│   │   ├── BookForm.jsx
│   │   ├── BookForm.module.css
│   │   ├── BookForm.test.jsx
│   │   ├── BooksList.jsx
│   │   ├── BooksList.module.css
│   │   ├── BooksList.test.jsx
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   └── Header.test.jsx
│   ├── hooks
│   │   ├── useBookForm.js
│   │   ├── useBooks.js
│   │   └── useUIStates.js
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   ├── main.jsx
│   └── variables.css
│
├── .env
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── vite.config.js
├── index.html
├── package-lock.json
└── package.json
```

---

## 🔗 GitHub Repository

[https://github.com/mosk133/11_client-side_final-project_frontend](https://github.com/mosk133/11_client-side_final-project_frontend)
