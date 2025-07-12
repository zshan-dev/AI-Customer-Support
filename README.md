# Headstart-AI's Bot 🤖

A modern, AI-powered chat interface built with Next.js and Tailwind CSS, designed to provide intelligent customer support for the Headstarter AIs platform.
- Check it out here: https://ai-customer-support-virid.vercel.app/

## ✨ Features

- **Real-time AI Chat**: Powered by OpenRouter API with advanced language models
- **Professional UI**: Clean, modern interface built with Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Loading States**: Smooth animations and visual feedback
- **Error Handling**: Graceful error management and user-friendly messages

## 🚀 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: OpenRouter API (DeepSeek Chat v3)
- **Styling**: Tailwind CSS with custom components
- **Development**: Turbopack for fast development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- OpenRouter API key

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zshan-dev/AI-Customer-Support
   cd ai-bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Starting a Conversation
1. Open the application in your browser
2. You'll see a welcome message from Headstarters Bot
3. Type your message in the input field
4. Press Enter or click the send button
5. Wait for the AI response

### Supported Queries
The bot is specifically trained to help with:
- Headstarters platform questions
- Technical interview practice guidance
- Account and subscription issues
- Troubleshooting login problems
- Microphone and access issues
- Platform navigation help

## 🔧 Configuration

### API Configuration
The bot uses OpenRouter API with the following settings:
- **Model**: `deepseek/deepseek-chat-v3-0324:free`
- **Base URL**: `https://openrouter.ai/api/v1`
- **System Prompt**: Customized for Headstarters support

### Customization
You can modify the system prompt in `app/api/chat/route.js` to change the bot's behavior and knowledge base.

## 📁 Project Structure

```
ai-bot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js          # API endpoint for chat
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.js                 # Root layout component
│   └── page.js                   # Main chat interface
├── public/                       # Static assets
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── next.config.mjs              # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 UI Components

### Chat Interface
- **Header**: Clean branding with Headstarter-Ai's Bot title
- **Message Area**: Scrollable chat history with user/AI message bubbles
- **Input Area**: Text input with send button and loading states
- **Loading Animation**: Animated dots during AI processing

### Design Features
- Professional color scheme (blue and gray)
- Responsive layout for all screen sizes
- Smooth animations and transitions
- Accessible design with proper focus states

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key for AI responses | Yes |

## 📝 API Endpoints

### POST `/api/chat`
Handles chat messages and returns AI responses.

**Request Body:**
```json
{
  "message": "Your question here"
}
```

**Response:**
```json
{
  "response": "AI response here"
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Development Features
- **Hot Reload**: Changes reflect immediately
- **Turbopack**: Fast development builds
- **Error Overlay**: Clear error messages
- **TypeScript Support**: Ready for TypeScript migration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
---

**Built for Headstarter-AI**
