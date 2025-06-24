// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import PricingCalculator from "./components/PricingCalculator";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="p-4">
        <PricingCalculator />
      </main>
      <Footer />
    </div>
  );
}

// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">UGC Stack India</h1>
      <div>
        <a href="#" className="px-3 text-sm font-medium">Pricing</a>
        <a href="#" className="px-3 text-sm font-medium">Invoice</a>
        <a href="#" className="px-3 text-sm font-medium">Contracts</a>
      </div>
    </nav>
  );
}

// src/components/PricingCalculator.jsx
import React, { useState } from "react";

export default function PricingCalculator() {
  const [followers, setFollowers] = useState(0);
  const [platform, setPlatform] = useState("Instagram");
  const [rate, setRate] = useState(0);

  const calculateRate = () => {
    let baseRate = platform === "Instagram" ? 0.5 : 0.3;
    setRate((followers * baseRate).toFixed(2));
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">📈 UGC Pricing Calculator</h2>
      <div className="mb-4">
        <label className="block mb-1">Platform</label>
        <select
          className="w-full p-2 rounded"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option>Instagram</option>
          <option>Youtube</option>
          <option>TikTok</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Follower Count</label>
        <input
          type="number"
          className="w-full p-2 rounded"
          value={followers}
          onChange={(e) => setFollowers(e.target.value)}
        />
      </div>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={calculateRate}
      >
        Calculate Rate
      </button>
      <div className="mt-4 text-lg font-bold">
        Suggested Rate: ₹{rate}
      </div>
    </div>
  );
}

// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400">
      Built with ❤️ for UGC Creators in India
    </footer>
  );
}

// src/styles/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white;
}

/* tailwind.config.js */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

/* postcss.config.js */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

/* .gitignore */
node_modules
.env
dist

/* public/index.html */
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UGC Stack India</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>

