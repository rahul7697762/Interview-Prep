# PrepWise - AI-Powered Interview Practice Platform

PrepWise is a modern, AI-powered interview preparation platform that helps job seekers practice real interview questions and receive instant feedback through voice-based conversations. Built with Next.js 15, TypeScript, and integrated with Vapi AI for voice interactions.

## 🚀 Features

### Core Features
- **AI-Powered Voice Interviews**: Practice with realistic AI interviewers using natural voice conversations
- **Real-time Feedback**: Get instant, comprehensive feedback on your interview performance
- **Multiple Interview Types**: Support for technical, behavioral, and mixed interview formats
- **Tech Stack Customization**: Tailored questions based on your specific technology stack
- **Interview History**: Track your past interviews and review feedback
- **User Authentication**: Secure sign-up and sign-in with Firebase Authentication

### Technical Features
- **Voice Recognition**: Real-time speech-to-text using Deepgram
- **Natural Voice Synthesis**: Human-like AI voice responses using 11Labs
- **Responsive Design**: Modern, mobile-friendly UI built with Tailwind CSS
- **Real-time Communication**: WebSocket-based voice communication
- **Performance Analytics**: Detailed scoring across multiple categories

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Backend & AI
- **Vapi AI** - Voice AI platform for real-time conversations
- **OpenAI GPT-4** - AI model for interview questions and feedback
- **Firebase** - Authentication and database
- **Deepgram** - Speech-to-text transcription
- **11Labs** - Text-to-speech synthesis

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase** project setup
- **Vapi AI** account and API keys
- **OpenAI** API key
- **Deepgram** API key
- **11Labs** API key

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd interview
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin SDK
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email

# Vapi AI Configuration
VAPI_API_KEY=your_vapi_api_key
VAPI_PUBLIC_KEY=your_vapi_public_key



# Deepgram Configuration
DEEPGRAM_API_KEY=your_deepgram_api_key

# 11Labs Configuration
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

### 4. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Download your Firebase service account key and save it as `prepwise-1090f-firebase-adminsdk-fbsvc-6357037e76.json` in the root directory

### 5. Vapi AI Setup

1. Sign up at [Vapi AI](https://vapi.ai/)
2. Get your API keys from the dashboard
3. Configure your assistant settings in `constants/index.ts`

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📱 Usage

### 1. Authentication
- Sign up with your email and password
- Sign in to access your dashboard

### 2. Start an Interview
- Navigate to the interview section
- Select your desired role and tech stack
- Choose interview type (Technical, Behavioral, or Mixed)
- Click "Start Interview" to begin

### 3. Voice Interview
- Allow microphone access when prompted
- Speak naturally with the AI interviewer
- Answer questions and ask follow-ups
- The interview will be automatically transcribed

### 4. Review Feedback
- After completing the interview, receive instant feedback
- Review scores across different categories:
  - Communication Skills
  - Technical Knowledge
  - Problem Solving
  - Cultural Fit
  - Confidence and Clarity
- View detailed strengths and areas for improvement

## 🏗️ Project Structure

```
interview/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (root)/            # Main application routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   └── ...               # SDK configurations
├── types/                # TypeScript type definitions
├── constants/            # Application constants
└── public/               # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🙏 Acknowledgments

- [Vapi AI](https://vapi.ai/) for voice AI capabilities
- [OpenAI](https://openai.com/) for GPT-4 integration
- [Firebase](https://firebase.google.com/) for backend services
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

**PrepWise** - Your AI-powered interview preparation companion 🚀

