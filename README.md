# JobCompass

> Master navigating the sea of irrelevant jobs with **JobCompass**

## 🚀 Live Demo

### 🌐 Open JobCompass Application: [https://job-compass-app.netlify.app/](https://job-compass-app.netlify.app/)

## 🎯 Problem & Solution

### The Problem

While there are numerous job search platforms available, even the most popular ones like LinkedIn have significant limitations:

- **Promoted jobs clutter** - Too many sponsored listings obscure relevant positions
- **No skill matching metrics** - Unclear whether a job matches your specific skills
- **Limited sorting options** - Can't sort by commute distance, skill relevance, or transfer convenience
- **Poor location intelligence** - No built-in commute calculations or transfer information
- **Generic experience** - One-size-fits-all approach without personalization

### Our Solution

JobCompass addresses these pain points by providing:

- **Smart skill matching** - See exactly which of your skills match each job posting
- **Intelligent sorting** - Sort by skill matches, commute time, transfer count, or posting date
- **Commute intelligence** - Real-time travel calculations with Google Maps integration
- **Guest mode** - Try the platform without signup barriers
- **Personalized experience** - Tailored job recommendations based on your profile

## 👥 Who This Is For

- **Job seekers** who want more intelligent job matching
- **Professionals** looking to optimize their commute
- **Career changers** who need clear skill gap analysis
- **Busy professionals** who want pre-filtered, relevant opportunities

## 📊 Success Metrics

- **Relevance score** - Higher percentage of skill-matched positions
- **Time saved** - Reduced time from search to application
- **Commute optimization** - Better work-life balance through location intelligence
- **User engagement** - Increased time spent on relevant job listings

## ✨ Key Features

### For Guest Users

- **🔍 Job Search** - Search and browse open positions without account
- **⚡ Smart Matching** - See skill matches with default profile
- **🗺️ Commute Preview** - Basic travel time calculations
- **📱 Try Before Signup** - Full preview mode to test functionality

### For Registered Users

- **👤 Personal Profile** - Custom skills, address, and avatar
- **❤️ Save Favorites** - Bookmark jobs for later review
- **🎯 Personalized Results** - Job matching based on your actual skills
- **🚀 Direct Application** - Apply to jobs through original postings
- **🔐 Account Management** - Password reset via email, profile deletion

### Smart Features

- **📈 Skill Matching** - Visual indicators showing skill alignment
- **🚃 Commute Calculator** - Travel time and transfer count for each job
- **🔄 Intelligent Sorting** - Multiple sorting options (skills, commute, date)
- **🎛️ Advanced Filters** - Job type, work mode, experience level
- **📧 Email Recovery** - Secure password reset functionality

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Deployed on Netlify** - https://job-compass-app.netlify.app/

### Backend

- **Node.js** (>=24.0.0) - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** (Neon DB) - Database
- **Firebase Admin** - File storage and authentication
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing
- **Nodemailer** - Email service
- **Multer** - File upload handling
- **Google Maps API** - Commute calculations
- **Deployed on Render** - https://job-compass-o40i.onrender.com

### Current Configuration

- **Job Search**: Currently using local job dataset for demonstration (real LinkedIn API integration available but requires paid API keys)
- **Database**: PostgreSQL hosted on Neon
- **File Storage**: Firebase for avatar uploads
- **Email Service**: SMTP for password reset functionality

### DevOps & Tools

- **Husky** - Git hooks
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Concurrently** - Run multiple commands

## 📁 Project Structure

```
job-compass/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── util/          # Utility functions
│   │   └── assets/        # Static assets
│   └── package.json
├── server/                 # Express backend application
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   ├── services/      # Business logic services
│   │   ├── db/            # Database configuration
│   │   ├── config/        # Configuration files
│   │   ├── data/          # Data files
│   │   └── util/          # Utility functions
│   └── package.json
├── .github/               # GitHub workflows
├── .husky/                # Git hooks
└── package.json           # Root package.json with workspace scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 24.0.0
- **npm** (comes with Node.js)
- **PostgreSQL** database (Neon DB recommended)
- **Firebase** Firebase service account (as JSON string)
- **SMTP credentials**
- **LinkedIn Job Search RapidAPI key**
- **Google Maps API** key for commute calculations

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HannaInIT/job-compass.git
   cd job-compass
   ```

2. **Install dependencies**

   ```bash
   npm run setup
   ```

   This will install dependencies for both client and server.

3. **Set up environment variables**

   In client and server directories, copy and rename the `.env.example` files into `.env`. Set all environmental variables.

4. **Run the development servers**

   ```bash
   npm run dev
   ```

   This will start both the client (Vite dev server) and server (Express with nodemon) concurrently.
   - Frontend: http://localhost:5173 (or the port Vite assigns)
   - Backend: http://localhost:3000 (or your configured PORT)

## 📜 Available Root Level Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run start` - Start the production server
- `npm run build` - Build the client for production
- `npm run setup` - Install dependencies for both client and server

## 🚢 Deployment

The project is deployed using modern cloud platforms:

- **Frontend**: Netlify - Automatic deployment from GitHub
- **Backend**: Render - Containerized Node.js application
- **Database**: Neon PostgreSQL - Serverless database
- **Storage**: Firebase - File and avatar storage

### Architecture

```
Frontend (Netlify) ↔ Backend (Render) ↔ Database (Neon)
                                     ↔ Storage (Firebase)
                                     ↔ Google Maps API
```

## 🏃‍♂️ Quick Start

### Try the Live Application

Visit [https://job-compass-app.netlify.app/](https://job-compass-app.netlify.app/) to experience JobCompass immediately.

**Guest Mode Demo:**

1. Search for "Frontend developer" or any tech role
2. Explore skill matching and commute calculations
3. Try sorting and filtering options
4. Experience the seamless user interface

**Full Experience:**

1. Create an account or login
2. Customize your profile (skills, address, avatar)
3. Save jobs to favorites
4. Get personalized job recommendations

## 📖 Project Origin

This project was originally created as a group project by three developers:

- **Yaroslav Kazeev** - [GitHub](https://github.com/YaroslavKazeev) | [LinkedIn](https://www.linkedin.com/in/yaroslavkazeev/)
- **Hanna Dubyna** - [GitHub](https://github.com/HannaInIT) | [LinkedIn](https://www.linkedin.com/in/hanna-dubyna/)
- **Yahya Al-Ademi** - [GitHub](https://github.com/YahyaAl-Ademi) | [LinkedIn](https://www.linkedin.com/in/yahya-al-ademi-12786555/)

## 🔄 Current Development

The project is currently maintained and further developed by **Hanna Dubyna** as an individual portfolio piece, featuring enhanced functionality and deployment optimizations.

## 📄 License

ISC

## 🙏 Acknowledgments

- Originally developed as part of [HackYourFuture](https://www.hackyourfuture.net/) curriculum
- Enhanced and maintained as an individual portfolio project
- Special thanks to the original team members and HYF mentors
- Thanks to all the APIs and services that make this platform possible
