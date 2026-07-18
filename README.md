# System Paster

**Transfer text between devices instantly using QR codes.**

Stop wasting time searching through messages. System Paster lets you share text across devices in seconds—no account, no login, no hassle. Just paste, scan, and done.

---

## Why System Paster?

We've all been there: you need to move a quick piece of text from your laptop to your phone. Or from your phone to a tablet. What should take 5 seconds ends up taking 5 minutes.

### The Traditional Way (WhatsApp)

1. Open WhatsApp
2. Search your own chat or message yourself
3. Paste the text
4. Send it
5. Open WhatsApp on another device
6. Find the message again
7. Copy the text

**Result:** Multiple taps, searching through messages, switching apps. Tedious.

### The System Paster Way

1. Open the website
2. Paste your text
3. Click send
4. Scan the QR code from another device
5. Instantly get your text
6. Copy it

**That's it. No login. No account. No searching messages.**

### Comparison

| Feature | WhatsApp Method | System Paster |
|---------|-----------------|---------------|
| **Steps** | 7 | 6 |
| **Account Required** | Yes | No |
| **Search Time** | 1-2 min | 0 sec |
| **Cross-Platform** | Yes | Yes |
| **Privacy** | Server-stored | Session-based |
| **Speed** | Slow | Instant |

---

## Features

✨ **QR-Based Instant Transfer** – Generate a unique QR code for each transfer  
🔐 **Zero Authentication** – No sign-up, no login, no passwords  
⚡ **Fast Device-to-Device Sharing** – Transfer across any devices with a browser  
🆔 **Unique Session IDs** – Each transfer gets its own secure session identifier  
📱 **Simple & Clean Workflow** – Minimal clicks, maximum efficiency  
🌐 **Cross-Platform Compatible** – Works on desktop, tablet, and mobile  

---

## How It Works

System Paster uses a straightforward client-server architecture that keeps things fast and simple:

```
Sender Device
    ↓
  React Frontend (Paste text)
    ↓
  Generate Unique Session ID (SID)
    ↓
  Generate QR Code (encodes SID)
    ↓
  Spring Boot REST API (/api/send)
    ↓
  Store Message in MySQL Database
    ↓
Receiver scans QR with another device
    ↓
  React Router extracts SID from URL
    ↓
  Spring Boot fetches message (/api/retrieve/:sid)
    ↓
  Message displayed on receiver device
    ↓
  Copy & Done! ✓
```

**Key Process Flow:**

1. **Sender** enters text on the web app
2. **Frontend** generates a unique Session ID and requests QR code generation
3. **Backend** stores the message temporarily in the database with the SID
4. **QR Code** is generated and displayed to the sender
5. **Receiver** scans the QR code with their device
6. **Backend** retrieves the message using the SID
7. **Receiver** gets instant access to the text

---

## Tech Stack

### Frontend
- **React.js** – UI library for building interactive components
- **Vite** – Lightning-fast build tool and dev server
- **Axios** – HTTP client for API calls
- **React Router** – Client-side routing for SID extraction
- **CSS/Tailwind** – Styling for a clean, modern interface

### Backend
- **Java** – Core language
- **Spring Boot** – Framework for building REST APIs
- **Spring Data JPA** – ORM for database operations
- **MySQL** – Relational database for storing messages and sessions

### Development Tools
- **Git & GitHub** – Version control
- **VS Code** – Code editor
- **Postman** – API testing

---

## Project Structure

```
System-Paster/
│
├── frontend/
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
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── backend/
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
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── docs/
│   └── API_DOCUMENTATION.md
│
├── .gitignore
└── README.md
```

---

## API Endpoints

### Send Message
```
POST /api/send
Content-Type: application/json

{
  "text": "Your text here"
}

Response:
{
  "sid": "unique-session-id-123abc",
  "qrCode": "data:image/png;base64,...",
  "expiresIn": 3600
}
```

### Retrieve Message
```
GET /api/retrieve/:sid

Response:
{
  "text": "Your text here",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## Getting Started

### Prerequisites
- Node.js (v16+) and npm
- Java JDK (v11+)
- MySQL (v8+)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Database Setup
```sql
CREATE DATABASE system_paster;
USE system_paster;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) UNIQUE NOT NULL,
  text LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP DEFAULT DATE_ADD(NOW(), INTERVAL 1 HOUR)
);

CREATE INDEX idx_session_id ON messages(session_id);
```

Visit `http://localhost:5173` to start using System Paster!

---

## Future Improvements

🚀 **Real-time WebSocket Transfer** – Live updates without page refresh  
📁 **File Sharing** – Transfer files beyond just text  
🖼️ **Image Sharing** – Seamlessly share images between devices  
⏰ **Message Expiry** – Auto-delete messages after a set time  
🔒 **End-to-End Encryption** – Encrypt messages for enhanced security  
📲 **PWA Support** – Install as an app on your home screen  
🎨 **Enhanced Mobile UI** – Optimized experience for smaller screens  
📊 **Analytics Dashboard** – Track transfers and usage statistics  
🌍 **Multi-Language Support** – Reach global users  

---

## Developer Note

System Paster was built to solve a real, everyday problem that many of us face in our daily workflows. It's a practical demonstration of full-stack web development—combining a responsive frontend, a robust backend API, and database management into a simple yet powerful tool.

Whether you're transferring a code snippet, a phone number, a URL, or any quick text, System Paster removes friction from your workflow. This project showcases:

- **Full-Stack Development** – Frontend, backend, and database working in harmony
- **REST API Design** – Clean, scalable endpoints
- **Real-World Problem Solving** – Building features that people actually need
- **Clean Code Architecture** – Modular, maintainable code structure
- **DevOps & Deployment** – Ready for production deployment

Perfect for learning or as a portfolio project to demonstrate your development capabilities.

---

## Contributing

We welcome contributions! Whether it's bug fixes, feature requests, or improvements, feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Support

Have questions or found a bug? [Create an issue](../../issues) and we'll help you out!

---

**Made with ❤️ for developers who value their time**
