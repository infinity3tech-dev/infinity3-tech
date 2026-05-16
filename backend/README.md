# Express.js Backend for Infinity3 Chatbot

## Setup

1. **Install dependencies:**
```bash
cd backend
npm install
```

2. **Add your API key to `.env`:**
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=8000
```

3. **Run the backend:**
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

4. **Test the health endpoint:**
```bash
curl http://localhost:8000/api/health
```

## API Endpoints

### GET /api/health
Returns server status.

**Response:**
```json
{
  "status": "OK",
  "message": "Infinity3 Express backend is running"
}
```

### POST /api/chat
Send a chat message and get AI response.

**Request:**
```json
{
  "message": "Hello!"
}
```

**Response:**
```json
{
  "reply": "Hello! 👋 Welcome to Infinity3 Technology..."
}
```

## Features

### ✅ Smart Fallback System
- **Common questions** (hello, courses, internships, contact) get instant responses
- **Rate limiting** is handled gracefully with fallback messages
- **Network errors** trigger local fallback responses
- **Gemini unavailable** → chatbot still works with predefined answers

### ✅ Rate Limit Protection
- **2-second cooldown** between requests to prevent spam

### ✅ Error Handling
- Graceful degradation when external services fail
- Always provides some response to users

## Technology Stack

- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing for React frontend
- **Axios** - HTTP client for Gemini API calls
- **Dotenv** - Environment variable management

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini AI API key | Yes |
| `PORT` | Server port (default: 8000) | No |