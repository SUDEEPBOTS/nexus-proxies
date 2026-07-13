<div align="center">
  <h1>Nexus Proxies</h1>
  <p><b>Premium Proxy Generator & Formatter for Webshare</b></p>
  
  <p>
    <a href="https://railway.app/"><img src="https://img.shields.io/badge/Deployed%20on-Railway-0B0D0E?style=for-the-badge&logo=railway" alt="Railway"></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"></a>
  </p>
</div>

---

## 🌟 About Nexus Proxies

Nexus Proxies is a beautiful, glassmorphic Single Page Application (SPA) built with React and Vite. It securely connects to the **Webshare API** using your personal token to fetch your premium proxies and automatically formats them into 1-click **Telegram SOCKS5 links** (`tg://socks?server=...`).

### ✨ Features
- **Zero Backend Required:** Directly fetches from Webshare using browser CORS.
- **Glassmorphism UI:** Stunning dark-mode interface with vibrant gradients.
- **1-Click Copy:** Copy individual proxy links or copy all of them at once.
- **Client-Side Security:** Your API key never leaves your browser (only sent to Webshare.io).
- **Responsive Design:** Looks amazing on Mobile, Tablet, and Desktop.

---

## 🚀 Quick Deployment (Railway)

This project is fully configured for [Railway.app](https://railway.app/).

1. Fork or upload this repository to your GitHub.
2. Go to your Railway Dashboard.
3. Click **New Project** -> **Deploy from GitHub repo**.
4. Select this repository. Railway will automatically detect the Vite build process and deploy it using the `npm start` (serve) command.

### Manual Local Setup

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/nexus-proxies.git
cd nexus-proxies

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Your app will be running at `http://localhost:5173`.

## 🛠️ Tech Stack
* **Framework:** React 18
* **Build Tool:** Vite
* **Styling:** Vanilla CSS (Glassmorphism & CSS Variables)
* **Animations:** Framer Motion
* **Icons:** Lucide React

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.
