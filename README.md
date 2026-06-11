# Ansari Garments Digital Showroom

A premium digital showroom and admin dashboard built with Express, Mongoose (MongoDB), WebSockets, Tailwind, and GSAP.

## 📂 Project Architecture

```
Ansari-Garments/
│
├── server/                     # Backend MVC components
│   ├── server.js               # Main server application file
│   ├── routes/                 # Express routing controllers
│   │   └── products.js
│   ├── models/                 # Mongoose schemas & database models
│   │   └── Product.js
│   ├── middleware/             # Request auth middlewares
│   │   └── auth.js
│   └── config/                 # Env loading & config exports
│       └── config.js
│
├── public/                     # Static client files (served by Express)
│   ├── index.html              # Customer storefront
│   ├── admin.html              # Admin inventory dashboard
│   ├── map-assets.html         # Asset helper preview page
│   ├── css/
│   │   └── style.css           # Styling rules override
│   ├── js/
│   │   ├── script.js           # Storefront UI & rotation script
│   │   └── admin.js            # Admin panel control script
│   ├── Assets/                 # Image assets (Topwear, Bottomwear, and Uploaded)
│   └── mapping.json            # Visual mappings config
│
├── database/                   # Persistent local database files
│   ├── seed.js                 # Seeding script for catalog products
│   └── db-data/                # Embedded database storage folders
│
├── .env                        # Local configuration variables
├── .gitignore                  # Git untracked pattern matching rules
├── package.json                # Project configurations & dependency versions
├── package-lock.json           # Locked sub-dependency trees
└── README.md                   # Project instructions
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (version 18+ recommended)
- A local MongoDB instance running at `mongodb://127.0.0.1:27017/ansari_garments` (optional, server will fall back to an embedded database if not detected).

### Installation
Install dependencies at the project root:
```bash
npm install
```

### Start the Server
Start the development server:
```bash
npm start
```
The server will be available at:
- **Storefront**: [http://localhost:3000/](http://localhost:3000/)
- **Admin Panel**: [http://localhost:3000/admin.html](http://localhost:3000/admin.html) (Access Key: `AnsariAdmin2026`)

## 💡 Offline Preview Mode
Both pages can also be opened directly via the filesystem (`file://` protocol) in your browser. All additions, deletions, and catalog updates will be persisted to your browser's local storage and synced offline.
