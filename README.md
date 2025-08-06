# Archive Access – Chrome Extension

This Chrome extension allows you to view the archive of the currently viewed webpage by redirecting it to [archive.is](http://archive.is/).

## 🔧 How It Works

When you click the extension button, it grabs the current tab's URL and redirects your browser to `http://archive.is/<current-url>`.


## 📦 Files Included

- `manifest.json` — Chrome extension manifest file.
- `content.js` — Background script to handle tab redirection.
- `README.md` — This help file.

> **Optional:** Add an icon named `icon.png` for the extension button.

## 🖥️ How to Install Locally

1. Download or clone this folder.
2. Open **Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in top right).
4. Click **"Load unpacked"** and select the folder.
5. Click the extension icon to archive the current page.

## 🛑 Permissions

- `"tabs"` – To get the current URL and redirect it.
- `"scripting"` – Required for manifest v3 background tasks.
- `"host_permissions"` – To allow access to any URL you visit.

---

🧪 Built for local usage and basic archiving tasks.


