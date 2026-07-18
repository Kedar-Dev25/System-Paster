# 🚀 System Paster

**Transfer text between devices instantly using QR codes.**

> Stop wasting time searching through messages. Just paste 📋 → scan 📱 → done ✨

---

## 🤔 Why System Paster?

### The Problem (Traditional Way) ❌

```
📱 Open WhatsApp → 🔍 Search chat → 📝 Paste text → 📤 Send
                                              ↓
🆚 Multiple taps | Searching | App switching | SLOW 🐢
                                              ↓
💻 Another device → Open WhatsApp → 🔍 Find message → 📋 Copy
```

**7 steps. 3-5 minutes. Annoying.**

---

### The Solution (System Paster) ✅

```
💻 Open website → 📋 Paste text → ✋ Click send
         ↓
      🤖 Magic ✨
         ↓
📱 Scan QR → 🎯 Get text → 📋 Copy
```

**4 steps. 5 seconds. Done.**

---

## 📊 Quick Comparison

| 🎯 Feature | 💬 WhatsApp | 🚀 System Paster |
|:-----------|:--------:|:----------------:|
| **⏱️ Time Taken** | 3-5 min | 5-10 sec |
| **📚 Steps** | 7 | 4 |
| **🔐 Login Required** | ✅ Yes | ❌ No |
| **🔍 Search Time** | 1-2 min | ⚡ Instant |
| **🌐 Cross-Platform** | ✅ Yes | ✅ Yes |
| **🔒 Privacy** | Server-stored | Session-based |
| **📱 Mobile Friendly** | ✅ Yes | ✅ Yes |

---

## ✨ Features at a Glance

<table>
<tr>
<td width="50%">

### 🔗 QR-Based Transfer
Generate unique QR for every transfer

### 🔓 Zero Login
No signup, no password, no headache

### ⚡ Lightning Fast
5 seconds to share anything

### 🆔 Unique Sessions
Each transfer gets its own ID

</td>
<td width="50%">

### 🎯 One-Click Copy
Instant clipboard access

### 🌍 Any Device
Desktop, tablet, mobile

### 💼 Simple UI
No complexity, just works

### 🔐 Secure
Temporary storage, auto-delete

</td>
</tr>
</table>

---

## 🔄 How It Works (Visual Flow)

```
┌─────────────────────────────────────────────────────────────────┐
│                       🚀 SENDER SIDE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  📝 User enters text in React app                               │
│         ↓                                                        │
│  🎲 Generate Unique Session ID (SID)                            │
│         ↓                                                        │
│  📮 Send to Spring Boot Backend (/api/send)                     │
│         ↓                                                        │
│  💾 Store in MySQL Database                                     │
│         ↓                                                        │
│  📲 Generate QR Code (encodes SID)                              │
│         ↓                                                        │
│  🖼️  Display QR to user                                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ 📸 QR Code Scanned
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      📱 RECEIVER SIDE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🔗 React Router extracts SID from URL                          │
│         ↓                                                        │
│  🔄 Request Backend (/api/retrieve/:sid)                        │
│         ↓                                                        │
│  📥 Spring Boot fetches from Database                           │
│         ↓                                                        │
│  ✅ Text displayed on screen                                    │
│         ↓                                                        │
│  📋 One-click copy to clipboard                                 │
│         ↓                                                        │
│  🎉 Done!                                                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

```
┌──────────────────────────────────────────────────────────────┐
│                    🎨 FRONTEND (React)                       │
├──────────────────────────────────────────────────────────────┤
│  ⚛️  React.js        →  Component-based UI                   │
│  ⚡ Vite            →  Lightning-fast dev server             │
│  🌐 Axios           →  HTTP requests to backend              │
│  🛣️  React Router    →  Client-side routing                  │
│  🎨 Tailwind CSS    →  Modern styling                        │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                   🔧 BACKEND (Spring Boot)                   │
├──────────────────────────────────────────────────────────────┤
│  ☕ Java            →  Core language                         │
│  🌱 Spring Boot     →  REST API framework                    │
│  🗄️  Spring Data JPA →  Database ORM                         │
│  📡 REST APIs       →  HTTP endpoints                        │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                  💾 DATABASE & TOOLS                         │
├──────────────────────────────────────────────────────────────┤
│  🗄️  MySQL          →  Relational database                  │
│  🐙 Git/GitHub      →  Version control                       │
│  💻 VS Code         →  Code editor                           │
│  🧪 Postman         →  API testing                           │
└──────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
System-Paster/
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── 🧩 components/
│   │   │   ├── TextInput.jsx
│   │   │   ├── QRDisplay.jsx
│   │   │   └── MessageReceiver.jsx
│   │   ├── 📄 pages/
│   │   │   ├── SendPage.jsx
│   │   │   └── ReceivePage.jsx
│   │   ├── 🔌 services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── 🔧 backend/
│   ├── src/main/java/com/systempaster/
│   │   ├── 🎛️  controller/
│   │   │   └── MessageController.java
│   │   ├── ⚙️  service/
│   │   │   └── MessageService.java
│   │   ├── 🗄️  repository/
│   │   │   └── MessageRepository.java
│   │   ├── 📦 model/
│   │   │   └── Message.java
│   │   └── 🚀 SystemPasterApplication.java
│   ├── 📝 pom.xml
│   └── ⚙️  application.properties
│
└── 📚 docs/
    └── API_DOCUMENTATION.md
```

---

## 🔌 API Endpoints

### 📤 Send Message
```http
POST /api/send
Content-Type: application/json

{
  "text": "Your awesome text here"
}

✅ Response:
{
  "sid": "xyz-abc-123",
  "qrCode": "data:image/png;base64,...",
  "expiresIn": 3600
}
```

### 📥 Retrieve Message
```http
GET /api/retrieve/:sid

✅ Response:
{
  "text": "Your awesome text here",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## 🚀 Getting Started (3 Easy Steps)

### Step 1️⃣ Clone & Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
🎉 Frontend runs on `http://localhost:5173`

### Step 2️⃣ Setup Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
🎉 Backend runs on `http://localhost:8080`

### Step 3️⃣ Setup Database
```sql
CREATE DATABASE system_paster;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) UNIQUE NOT NULL,
  text LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP DEFAULT DATE_ADD(NOW(), INTERVAL 1 HOUR)
);

CREATE INDEX idx_session_id ON messages(session_id);
```

✅ **Done!** Open `http://localhost:5173` and start sharing! 🎉

---

## 🎯 Use Cases

```
📋 → Share code snippets quickly
📞 → Pass phone numbers between devices
🔗 → Instant URL sharing
✍️ → Quick notes transfer
🎟️ → Share promo codes/tickets
📍 → Send addresses/locations
🔑 → Pass API keys securely
```

---

## 🚀 Future Roadmap

<table>
<tr>
<td>

### Phase 1 (Coming Soon) 🔜
- 🔄 WebSocket real-time transfer
- 📁 File sharing support
- 🖼️ Image upload & share

</td>
<td>

### Phase 2 (Future) 📅
- ⏰ Message expiry settings
- 🔒 End-to-end encryption
- 📲 PWA support

</td>
<td>

### Phase 3 (Wishlist) 💭
- 🌍 Multi-language support
- 📊 Analytics dashboard
- 🎨 Custom themes

</td>
</tr>
</table>

---

## 🤝 Contributing

Love System Paster? Help us make it even better! 💪

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Make changes & commit
git commit -m '✨ Add amazing feature'

# 4. Push to branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

---

## 📞 Need Help?

- 🐛 **Found a bug?** [Create an issue](../../issues)
- 💡 **Have an idea?** [Suggest a feature](../../discussions)
- 📧 **Want to chat?** Open a discussion!

---

## 📄 License

This project is open source under the **MIT License** 📜

---

## 🎬 Demo Workflow

```
┌─────────────────────────────────────────────────────┐
│  Step 1: Paste           Step 2: Send              │
│  ┌───────────────┐      ┌─────────────┐            │
│  │ Ctrl+V paste  │  →   │ Click Send  │            │
│  └───────────────┘      └─────────────┘            │
│           ↓                      ↓                  │
│  Step 3: QR Generated   Step 4: Scan on Phone    │
│  ┌───────────────┐      ┌─────────────┐            │
│  │ ┌─────────┐   │      │ 📱 QR Scan  │            │
│  │ │███ QR ██│   │      │ Code        │            │
│  │ │██ CODE██│   │      └─────────────┘            │
│  │ └─────────┘   │             ↓                   │
│  └───────────────┘   Step 5: Text Appears        │
│                      ┌─────────────┐              │
│                      │ "Your text" │              │
│                      └─────────────┘              │
│                             ↓                     │
│                      Step 6: Copy ✅             │
│                           DONE! 🎉              │
└─────────────────────────────────────────────────────┘
```

---

## 👨‍💻 Why I Built This

System Paster is more than just a tool—it's a solution to a real everyday problem. Built as a **full-stack portfolio project** to showcase:

✅ **Full-Stack Development** – Frontend to backend to database  
✅ **REST API Design** – Clean, scalable endpoints  
✅ **Real-World Problem Solving** – Features people actually need  
✅ **Clean Architecture** – Modular, maintainable code  
✅ **DevOps Ready** – Production-deployment friendly  

Perfect for learning or as a portfolio piece! 🚀

---

## 🌟 Show Your Support

If you found System Paster useful, please ⭐ star the repo! It helps other developers find it too!

---

<div align="center">

### Made with ❤️ for developers who value their time

**[GitHub](https://github.com/Kedar-Dev25) • [Portfolio](#) • [Twitter](#)**

</div>
