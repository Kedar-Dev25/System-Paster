# 🚀 System Paster

**Transfer text between devices instantly using QR codes.**

Ever wished you could just beam text from one device to another? No apps. No logins. No searching through endless chats. Just paste, scan, done. That's System Paster.

---

## ❌ The Problem with Traditional Methods

Let's be real. When you need to move a quick piece of text between devices, this is what happens:

1. Open WhatsApp
2. Search your own chat or message yourself
3. Paste the text
4. Send it
5. Open WhatsApp on another device
6. Find the message (again)
7. Copy the text

**Result**: 7 steps, 3-5 minutes wasted on something that should take 10 seconds.

---

## ✅ The System Paster Solution

Here's how it actually works:

1. Open the website
2. Paste your text
3. Click send
4. Scan the QR code from another device
5. Copy your text instantly

**That's it. No login. No account. No searching. Just pure simplicity.**

---

## 📊 The Comparison

| Feature | Traditional Method | System Paster |
|---------|-------------------|---------------|
| **Steps** | 7️⃣ | 5️⃣ |
| **Time Required** | ⏱️ 3-5 minutes | ⚡ 10-30 seconds |
| **Login Needed** | ✋ Yes | ✅ No |
| **Works Everywhere** | 📱 Limited | 🌐 All browsers |
| **Searching Required** | 🔍 Yes | ✨ No |
| **Privacy** | 🖥️ Server-stored | 🔒 Temporary session |

---

## 🎯 Key Features

- **🔗 QR-Based Transfers** — Unique QR code for every transfer
- **🔓 Zero Login Required** — No signup, no passwords, no headaches
- **⚡ Blazing Fast** — Transfer text in seconds across devices
- **🆔 Unique Sessions** — Each transfer gets its own secure ID
- **📱 Works Everywhere** — Desktop, tablet, mobile browsers
- **🔒 Auto Expiring** — Messages disappear automatically for privacy

---

## 🔄 How It Works

```
📱 Device 1: Sender
    ↓
📝 Paste your text
    ↓
🎲 Generate unique Session ID
    ↓
💾 Backend stores temporarily
    ↓
📲 QR code appears on screen
    ↓
📸 Device 2: Receiver scans QR
    ↓
🔗 Backend retrieves instantly
    ↓
✨ Text appears on Device 2
    ↓
📋 One-click copy & done!
```

### Architecture Overview

- **🎨 Frontend**: React handles the UI and displays your QR code
- **⚙️ Backend**: Spring Boot API manages the data flow
- **💾 Database**: MySQL keeps your message safe (temporarily)
- **📲 QR Code**: Encodes the session ID for seamless scanning

---

## 🛠️ Tech Stack

**Frontend**
- ⚛️ React.js — Modern UI components
- ⚡ Vite — Lightning-fast development
- 🌐 Axios — Talk to the backend
- 🛣️ React Router — Handle URL sessions

**Backend**
- ☕ Java + Spring Boot — Powerful API
- 🗄️ Spring Data JPA — Database magic
- 💾 MySQL — Secure storage

**Tools**
- 🐙 Git & GitHub — Version control
- 💻 VS Code — Code editor

---

## 📁 Project Structure

```
System-Paster/
├── 🎨 frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TextInput.jsx
│   │   │   ├── QRDisplay.jsx
│   │   │   └── MessageReceiver.jsx
│   │   ├── pages/
│   │   │   ├── SendPage.jsx
│   │   │   └── ReceivePage.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.jsx
│   └── package.json
│
├── ⚙️ backend/
│   ├── src/main/java/com/systempaster/
│   │   ├── controller/
│   │   │   └── MessageController.java
│   │   ├── service/
│   │   │   └── MessageService.java
│   │   ├── repository/
│   │   │   └── MessageRepository.java
│   │   ├── model/
│   │   │   └── Message.java
│   │   └── SystemPasterApplication.java
│   └── pom.xml
│
└── 📚 docs/
    └── API_DOCUMENTATION.md
```

---

## 🔌 API Endpoints

### 1️⃣ Create Session

Generates a unique session ID for each transfer. This ID gets encoded into your QR code.

```http
POST /session
```

**Response** 📤

```json
{
  "sid": "363c9d43-8920-4a6d-8a2f-8cdb85b3574c"
}
```

---

### 2️⃣ Save Message

Store your text message with the session ID. It lives temporarily in the database until retrieved.

```http
POST /save
Content-Type: application/json
```

**Request** 📥

```json
{
  "sid": "363c9d43-8920-4a6d-8a2f-8cdb85b3574c",
  "message": "Hello from System Paster"
}
```

**Response** ✅

```json
{
  "message": "Saved successfully"
}
```

---

### 3️⃣ Retrieve Message

Get the stored message using the session ID. Receiver devices call this to fetch the text instantly.

```http
POST /get-message
Content-Type: application/json
```

**Request** 📥

```json
{
  "sid": "363c9d43-8920-4a6d-8a2f-8cdb85b3574c"
}
```

**Response** 📨

```json
{
  "message": "Hello from System Paster"
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Java JDK (v11+)
- MySQL (v8+)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
🎉 Runs on `http://localhost:5173`

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
🎉 Runs on `http://localhost:8080`

### Database Setup
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

---

## 💡 Use Cases

- 📋 Share code snippets instantly
- 📞 Transfer phone numbers in seconds
- 🔗 Pass URLs without typing
- 📝 Quick temporary notes
- 🔑 Share API keys securely

---

## 🎯 Future Enhancements

- 🔄 Real-time WebSocket transfers
- 📁 File sharing support
- 🖼️ Image uploads
- ⏰ Custom message expiry
- 🔐 End-to-end encryption
- 📲 PWA support
- 🎨 Mobile UI improvements

---

## 🤝 Contributing

Want to make System Paster better? We'd love your help!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m '✨ Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## ℹ️ About This Project

System Paster solves a real, everyday frustration: getting text from one device to another shouldn't be complicated. This project showcases **full-stack development** done right—clean UI, powerful backend, and efficient data flow.

Perfect for developers who value their time and want a no-nonsense way to share quick information across devices.

---

## 🆘 Support

Found a bug? Have an idea? [Create an issue](../../issues) on GitHub. We're here to help!

---

## 📄 License

Open source under the MIT License.

---

<div align="center">

**Built with ❤️ for developers who hate wasting time**

[Star ⭐](https://github.com/Kedar-Dev25/System-Paster) us on GitHub!

</div>
