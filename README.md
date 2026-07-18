# System Paster

**Transfer text between devices instantly using QR codes.**

Stop wasting time searching through messages. Paste your text, generate a QR code, scan it from another device, and you're done. No login. No account. No hassle.

---

## Why System Paster?

### The Problem with Traditional Methods

Most people use WhatsApp or similar apps to transfer small pieces of text between devices:

1. Open WhatsApp
2. Search your own chat or message yourself
3. Paste the text
4. Send it
5. Open WhatsApp on another device
6. Find the message
7. Copy the text

**Result**: 7 steps, 3-5 minutes wasted on every transfer.

### The System Paster Solution

1. Open the website
2. Paste your text
3. Click send
4. Scan the QR code from another device
5. Copy your text instantly

**That's it. No login. No account. No searching.**

### Quick Comparison

| Feature | Traditional Method | System Paster |
|---------|-------------------|---------------|
| Steps | 7 | 5 |
| Time Required | 3-5 minutes | 10-30 seconds |
| Login Needed | Yes | No |
| Device Support | Limited | All browsers |
| Searching Required | Yes | No |
| Privacy | Server-stored | Temporary session |

---

## Key Features

🔗 **QR-Based Transfers** - Unique QR code generated for each transfer  
🔓 **No Authentication** - No signup, no login, no passwords  
⚡ **Instant Sharing** - Transfer text in seconds between any devices  
🎯 **Session-Based** - Each transfer gets a unique session ID  
📱 **Cross-Platform** - Works on desktop, tablet, and mobile browsers  
🔒 **Secure Sessions** - Temporary storage with automatic expiration  

---

## How It Works

```
User Device 1
    ↓
Paste text in web app
    ↓
Generate unique Session ID
    ↓
Backend stores message temporarily in database
    ↓
QR code generated and displayed
    ↓
User scans QR from Device 2
    ↓
Backend retrieves message using Session ID
    ↓
Text displayed instantly on Device 2
    ↓
Copy to clipboard ✓
```

### Architecture Overview

- **Frontend**: React app handles user input and QR code display
- **Backend**: Spring Boot REST API manages message storage and retrieval
- **Database**: MySQL stores messages temporarily with expiration
- **QR Code**: Encodes the session ID for easy scanning between devices

---

## Tech Stack

**Frontend**
- React.js - User interface
- Vite - Build tool
- Axios - API client
- React Router - URL-based session retrieval

**Backend**
- Java with Spring Boot - REST API
- Spring Data JPA - Database operations
- MySQL - Message storage

**Tools**
- Git & GitHub - Version control
- VS Code - Development environment

---

## Project Structure

```
System-Paster/
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
│   │   └── App.jsx
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
│   └── pom.xml
│
└── docs/
    └── API_DOCUMENTATION.md
```

---

## API Endpoints

### Send Message
```
POST /api/send
Content-Type: application/json

Request:
{
  "text": "Your text here"
}

Response:
{
  "sid": "abc123xyz",
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
- Node.js (v16+)
- Java JDK (v11+)
- MySQL (v8+)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
Runs on `http://localhost:8080`

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

## Use Cases

- Share code snippets between devices
- Transfer phone numbers quickly
- Pass URLs instantly
- Share temporary notes
- Transfer API keys securely

---

## Future Enhancements

- Real-time WebSocket transfers
- File sharing support
- Image sharing capability
- Custom message expiry settings
- End-to-end encryption option
- Progressive Web App (PWA) support
- Mobile app optimization

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## About This Project

System Paster was created to solve a real everyday problem: transferring small pieces of text between devices without unnecessary steps or accounts. It demonstrates full-stack web development with a clean, functional interface and a scalable backend architecture.

Whether you're sharing a code snippet, a phone number, or a quick note, System Paster removes friction from your workflow.

---

## Support

Found a bug or have a suggestion? [Create an issue](../../issues) on GitHub.

---

## License

This project is open source under the MIT License.
