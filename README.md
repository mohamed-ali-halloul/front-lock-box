#  Lock Box — Frontend

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Redux](https://img.shields.io/badge/Redux-State_Management-764ABC?style=flat-square&logo=redux)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![GitHub repo size](https://img.shields.io/github/repo-size/mohamed-ali-halloul/front-lock-box?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/mohamed-ali-halloul/front-lock-box?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

> The frontend application for **Lock Box** — a secure digital vault to store and manage your sensitive information.

---

##  Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Related Repositories](#related-repositories)
- [Contributing](#contributing)
- [License](#license)

---

##  About

**Lock Box Frontend** is the client-side application of the Lock Box project. It provides a clean and secure interface for users to store, manage, and retrieve their confidential data, interacting with the [back-end-lock-box](https://github.com/mohamed-ali-halloul/back-end-lock-box) API.

---

##  Tech Stack

| Technology | Description |
|---|---|
| React | UI library |
| Redux | Global state management |
| React Router | Client-side routing |
| Axios | HTTP requests to the backend |
| CSS / HTML | Styling |

---

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mohamed-ali-halloul/front-lock-box.git

# Navigate into the project
cd front-lock-box

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file at the root:

```env
REACT_APP_API_URL=http://localhost:8080/api
```

---

##  Available Scripts

```bash
# Start the development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## 📁 Project Structure

```
front-lock-box/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page views (Login, Dashboard, Vault...)
│   ├── store/           # Redux store & slices
│   ├── services/        # API service functions
│   └── App.js
├── package.json
└── README.md
```

---

##  Related Repositories

| Repository | Description |
|---|---|
| [back-end-lock-box](https://github.com/mohamed-ali-halloul/back-end-lock-box) | REST API backend for Lock Box |

---

##  Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

##  License

This project is licensed under the MIT License

---

<p align="center">Made by <a href="https://github.com/mohamed-ali-halloul">Mohamed Ali Halloul</a></p>
