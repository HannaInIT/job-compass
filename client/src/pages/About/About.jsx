import "./About.css";

import { images } from "../../assets";
import { Filter, Map, Lock, User, Heart, Zap } from "lucide-react";

export default function About() {
  const contributors = [
    {
      name: "Yaroslav Kazeev",
      role: "Full Stack Developer",
      avatar: images.yaroslavAvatar,
      description:
        "Initiated the project idea and identified key issues with relevance in existing job search platforms. Contributed to defining the core concept and implemented essential features related to job filtering and customization.",
      gitHub: "https://github.com/YaroslavKazeev",
      linkedin: "https://www.linkedin.com/in/yaroslavkazeev/",
    },
    {
      name: "Hanna Dubyna",
      role: "Full Stack Developer",
      avatar: images.hannaAvatar,
      description:
        "Led UI/UX design and brought key features to life — from route calculation and Firebase-powered avatar uploads to LinkedIn API integration, guest user experience, and database connection. Also built the About page and core navigation.",
      gitHub: "https://github.com/HannaInIT",
      linkedin: "https://www.linkedin.com/in/hanna-dubyna/",
    },

    {
      name: "Yahya Al-Ademi",
      role: "Full Stack Developer",
      avatar: images.yahyaAvatar,
      description:
        "Designed and implemented the full authentication architecture for the application, covering secure backend workflows (user registration, login, hashing, token-based password reset, email delivery) and complete frontend integration using React Context.",
      gitHub: "https://github.com/YahyaAl-Ademi",
      linkedin: "https://www.linkedin.com/in/yahya-al-ademi-12786555/",
    },
  ];

  const features = [
    {
      icon: <Filter className="feature-icon" />,
      title: "Smart filtering and sorting",
      description:
        "Filter by job type, work mode, and experience level, and sort listings based on what matters most to you — all in one flexible tool.",
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Smart matching",
      description: "Real-time job search with smart matching feature",
    },
    {
      icon: <Map className="feature-icon" />,
      title: "Commute calculator",
      description:
        "See travel time and number of transfers from your home to workplace",
    },

    {
      icon: <Heart className="feature-icon" />,
      title: "Save to favorites",
      description: "Mark interesting job posts to easily view them later",
    },

    {
      icon: <Lock className="feature-icon" />,
      title: "Secure and modern architecture",
      description:
        "Meets modern security standards, secure authentication, and protection against malicious scripts.",
    },

    {
      icon: <User className="feature-icon" />,
      title: "User-friendly interface",
      description: "Intuitive design makes job discovery fast and efficient",
    },
  ];

  return (
    <div className="about-page content-container">
      <main className="about-main">
        <h1 className="about-title">About the project</h1>

        {/* Project Overview */}
        <div className="project-overview">
          <div className="overview-item">
            <div className="overview-text">
              <h3 className="overview-title">What the project does</h3>
              <p className="overview-description">
                Our platform helps users find jobs by allowing detailed searches
                with filters such as location, experience level, and skills.
                This makes it easier to match candidates with positions that
                suit them.
              </p>
              <span className="overview-note">
                Developed collaboratively by three developers.
              </span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 className="contributors-title">Contributors</h2>

        <div className="contributor-grid-flex">
          {contributors.map((contributor, index) => (
            <div key={index} className="contributor-card">
              <div className="contributor-content">
                <div className="contributor-heading">
                  <img
                    src={contributor.avatar}
                    alt={`${contributor.name}'s avatar`}
                    className="contributor-avatar"
                  />
                  <div className="name-and-role">
                    <h3 className="contributor-name">{contributor.name}</h3>
                    <p className="contributor-role">{contributor.role}</p>
                  </div>
                </div>

                <p className="contributor-description">
                  {contributor.description}
                </p>
              </div>

              <div className="contributor-links">
                <a
                  href={contributor.gitHub}
                  className="link-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href={contributor.linkedin}
                  className="link-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-section">
          <h2 className="contact-title">Get in touch?</h2>
          <p className="contact-text-primary">
            Have questions or feedback? We would love to hear from you.
          </p>

          <p className="contact-text-secondary">
            Drop us a line at{" "}
            <a
              href="mailto:ann10062016@gmail.com?subject=Question about JobCompass"
              className="email-link"
            >
              ann10062016@gmail.com
            </a>{" "}
            and we will get back to you as soon as possible!
          </p>
        </div>
      </main>
    </div>
  );
}
