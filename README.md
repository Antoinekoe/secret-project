# Secret Project

[![Secret Project](public/images/screenshot-git.PNG)]()

ENGLISH VERSION - A landing page where you get a random name and a random secret when you refresh the page.

## ✨ Features

- **Random Name Generation:** Get a new random name every time you refresh the page.
- **Random Secret Generation:** Receive a random secret with each refresh.
- **Simple and Clean UI:** Minimalist design for a smooth user experience.
- **Instant Refresh:** No need to click buttons—just refresh the page for new content.

## 🛠️ Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
- **Backend:**
  - Node.js
  - Express
  - Axios
- **Other:**
  - Git for version control

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Antoinekoe/secret-project.git
   cd secret-project
   ```

2. **Install dependencies (if using Node.js/Express):**

   ```bash
   npm install
   ```

3. **Start the server (if using Node.js/Express):**

   ```bash
   nodemon index.js
   ```

   The app will be accessible at `http://localhost:[PORT]` (replace `[PORT]` with the port configured in your server file, usually 3000).

## 🗂️ Project Structure

```
Secret Project/
├── public/              # Static files
│   ├── images/          # Images folder
│   └── styles           # CSS folder
|          └── main.css  # Main CSS file
├── views/               # Source files
│   └── index.ejs        # Main EJS file
│
├── index.js             # Main JS file
├── package.json         # npm configuration file
├── package-lock.json    # npm configuration file
├── .gitignore           # Git ignore file
├── LICENSE              # License file
└── README.md            # This file
```

## 🤝 How to Contribute

Contributions are welcome! To contribute:

1. **Fork the repository.**
2. **Create a branch for your feature or bugfix:**

   ```bash
   git checkout -b feature/my-new-feature
   # or
   git checkout -b bugfix/bug-fix
   ```

3. **Make your changes and commit them with clear and descriptive messages.**
4. **Push your branch to your fork:**

   ```bash
   git push origin feature/my-new-feature
   ```

5. **Create a pull request (PR) to the `main` branch of the original repository.**

## 🔧 Potential Improvements (TODO)

- Add more name and secret options.
- Add animations or transitions for new content.
- Implement user authentication for personalized secrets.
- Add a database to store user-generated secrets.
- Improve mobile responsiveness.

## 🔑 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
