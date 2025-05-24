"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Code,
  GraduationCap,
  Award,
  Menu,
  X,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Download,
  FileText,
  Database,
  LineChart,
  Bitcoin,
  Bot,
  Heart,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Projects data
  const projects = [
    {
      title: "Tesla Stock Return Prediction & Quant Trading Strategy",
      description:
        "End-to-end quantitative trading strategy for Tesla using Python with regression and ensemble models, achieving superior Sharpe ratio and lowest drawdown compared to benchmarks.",
      detailedDescription:
        "A comprehensive quantitative trading strategy developed for Tesla (TSLA) stock as part of Data Science Engineering Methods & Tools course at Northeastern University. This project demonstrates advanced financial modeling, feature engineering, and algorithmic trading implementation. Key achievements and methodologies include:\n\n• Built end-to-end quantitative trading strategy using Python with multiple regression models (OLS, LASSO, Ridge) and ensemble methods (Random Forest, Bagging, Gradient Boosting) to forecast daily returns from 2020–2024\n\n• Engineered over 50 sophisticated financial features including:\n  - Technical indicators (RSI, ATR, OBV)\n  - Macroeconomic factors (FRED, ADS, yield curves)\n  - Candlestick pattern labels\n  - Sentiment scores using NewsAPI and TextBlob for market sentiment analysis\n\n• Applied Principal Component Analysis (PCA) and statistical feature selection (p-value ≤ 0.05) to reduce multicollinearity and optimize model interpretability and performance\n\n• Implemented sophisticated trading execution simulation with:\n  - Confidence-weighted position sizing\n  - ATR-based risk management protocols\n  - Stop-loss logic for downside protection\n  - VIX-adjusted leverage rules for volatility adaptation\n\n• Achieved superior performance metrics, outperforming baseline models and established benchmarks (Buy-and-Hold, Buffett strategy) with the highest Sharpe ratio and lowest maximum drawdown\n\n• Delivered comprehensive analytical insights through return attribution analysis, feature importance evaluation, and strategy benchmarking to assess both predictive accuracy and trading performance",
      technologies: ["Python", "Machine Learning", "Financial Modeling", "PCA", "NewsAPI", "TextBlob"],
      icon: <LineChart className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti",
    },
    {
      title: "Healthcare Management System",
      description:
        "SQL stored procedures for patient records, staff schedules, and administrative tasks with column-level encryption and Power BI dashboards.",
      detailedDescription:
        "A comprehensive healthcare management system designed to streamline patient record management, staff scheduling, and administrative tasks. The system utilizes SQL stored procedures with column-level encryption to ensure data security and compliance with healthcare regulations. Key features include:\n\n- Patient record management with secure access controls\n- Staff scheduling and resource allocation\n- Administrative task automation\n- Power BI dashboards for data visualization and analytics\n- Encrypted data storage for sensitive patient information\n- Role-based access control for different user types",
      technologies: ["SQL", "Power BI", "Python", "GUI"],
      icon: <Database className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti",
    },
    {
      title: "Mean Reversion Strategy on S&P 500 Stocks",
      description:
        "Quantitative trading strategy using Bollinger Bands and Z-score thresholds, achieving a Sharpe Ratio of 1.8.",
      detailedDescription:
        "A sophisticated quantitative trading strategy implemented on S&P 500 stocks using mean reversion principles. The strategy leverages Bollinger Bands and Z-score thresholds to identify trading opportunities when prices deviate significantly from their historical means. Key achievements include:\n\n- Achieved a Sharpe Ratio of 1.8, indicating strong risk-adjusted returns\n- Implemented backtesting framework to validate strategy performance\n- Developed risk management protocols to limit drawdowns\n- Created automated execution system for trade entries and exits\n- Incorporated market regime detection to adapt to changing market conditions\n- Utilized statistical analysis to optimize parameter selection",
      technologies: ["Python", "Finance", "DeFi", "Smart Contracts"],
      icon: <LineChart className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti",
    },
    {
      title: "Crypto Portfolio Optimizer (DeFiQuant)",
      description:
        "Decentralized portfolio optimizer using Python, Rust, and Solidity with DAO-based governance and ML-based strategy selection.",
      detailedDescription:
        "DeFiQuant is an innovative decentralized portfolio optimizer that combines traditional finance principles with blockchain technology. The system uses Python for data analysis, Rust for performance-critical components, and Solidity for smart contract implementation. Notable features include:\n\n- DAO-based governance allowing stakeholders to vote on strategy parameters\n- Machine learning algorithms for optimal strategy selection based on market conditions\n- Integration with multiple DeFi protocols for liquidity provision and yield farming\n- Risk management system with automatic portfolio rebalancing\n- On-chain execution of trades with gas optimization\n- Comprehensive analytics dashboard for performance monitoring",
      technologies: ["Python", "Rust", "Solidity", "ML"],
      icon: <Bitcoin className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti",
    },
    {
      title: "AI-Enabled Quadruped Robot",
      description:
        "6 DOF quadruped robot using AutoCAD and MATLAB with gait control systems and OpenAI-based simulation.",
      detailedDescription:
        "An advanced quadruped robot with 6 degrees of freedom per leg, designed and implemented using AutoCAD for mechanical design and MATLAB for control systems. The robot incorporates AI-based decision making for navigation and obstacle avoidance. Key components include:\n\n- Detailed mechanical design using AutoCAD with 3D printed components\n- Sophisticated gait control systems implemented in MATLAB\n- OpenAI-based simulation environment for testing and training\n- Sensor fusion for environmental awareness and mapping\n- Real-time control system with feedback loops for stability\n- Energy-efficient locomotion algorithms for extended operation\n- Computer vision integration for object recognition",
      technologies: ["AutoCAD", "MATLAB", "OpenAI", "3D Printing"],
      icon: <Bot className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti",
    },
    {
      title: "Cross Border Organ Donation System",
      description: "Java-based approval tracking dashboard with email notification systems using Java Mail API.",
      detailedDescription:
        "A critical healthcare application designed to facilitate and streamline cross-border organ donation processes. The system provides comprehensive tracking of organ availability, matching, and approval workflows across different healthcare systems and countries. Key features include:\n\n- Java-based approval tracking dashboard for real-time status monitoring\n- Automated email notification system using Java Mail API for timely alerts\n- Multi-level approval workflow with role-based permissions\n- Integration with hospital systems for patient data synchronization\n- Secure data transmission protocols for sensitive medical information\n- Reporting and analytics for process optimization\n- Mobile-responsive interface for on-the-go access by medical professionals",
      technologies: ["Java", "Swing", "SQL", "API"],
      icon: <Heart className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti",
    },
  ]

  // Skills data
  const skills = {
    languages: ["Python", "Java", "C++", "SQL", "Rust", "Solidity"],
    frameworks: ["Flask", "Spring Boot", "Git", "Jira", "Heroku", "Android Studio", "NetBeans"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "BigQuery"],
    methodologies: ["Agile", "Scrum", "Object-Oriented Programming", "CI/CD"],
    dataAnalysis: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Tableau", "Seaborn", "Matplotlib"],
    blockchain: ["Smart Contracts", "DAO Integration", "On-chain Data Feeds", "DeFi Architecture"],
    os: ["macOS", "Windows", "Linux"],
  }

  return (
    <div className="min-h-screen bg-cream-100 text-brown-800 relative overflow-hidden">
      {/* Particle effect background */}
      <div className="absolute inset-0 z-0">
        <div className="stars-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <header className="relative z-10 px-6 py-4 flex justify-end items-center">
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brown-800"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <nav
          className={`${mobileMenuOpen ? "flex flex-col absolute top-16 right-0 bg-cream-200 p-4 rounded-md shadow-lg" : "hidden"} md:flex md:flex-row md:static md:bg-transparent md:shadow-none gap-6`}
        >
          <Link
            href="#about"
            className="hover:text-taupe-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-taupe-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-taupe-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-brown-800">Hello I'm</span>
            <br />
            <span className="bg-gradient-to-r from-taupe-600 to-sand-500 text-transparent bg-clip-text">
              Aakruti Ghatole
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 text-brown-600">
            Software Developer | Data Analyst | Blockchain Enthusiast
          </p>
          <p className="text-md md:text-lg max-w-2xl mb-10 text-brown-600">
            Aspiring full-stack developer and data analyst with experience in software development, quantitative
            finance, and blockchain integration. Proven expertise in creating data-driven applications, building
            end-to-end automation pipelines, and deploying solutions in real-world scenarios.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-taupe-500 hover:bg-taupe-600 text-white">2+ Years Experience</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full border-sand-400 text-brown-700 hover:bg-sand-100">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="/cv/aakruti-ghatole-sde.pdf" download className="flex items-center cursor-pointer">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Software Developer CV</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/cv/aakruti-ghatole-da.pdf" download className="flex items-center cursor-pointer">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Data Analyst CV</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/cv/aakruti-ghatole-blockchain.pdf" download className="flex items-center cursor-pointer">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Blockchain CV</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/profile-photo.png"
                alt="Aakruti Ghatole"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-brown-800">About Me</h2>
              <div className="space-y-4 text-brown-600">
                <p>
                  I am a software developer and aspiring data engineer with a strong background in building scalable
                  systems across diverse domains including healthcare, finance, and blockchain.
                </p>
                <p>
                  I hold a Bachelor's degree in Mechanical Engineering and am currently pursuing my MS in Information
                  Systems at Northeastern University. My technical interests lie at the intersection of full-stack
                  development, quantitative analytics, and emerging Web3 technologies.
                </p>
                <p>
                  I enjoy working in cross-functional teams, applying structured problem-solving, and contributing to
                  innovation in user-focused systems.
                </p>
              </div>

              <div className="mt-10">
                <Tabs defaultValue="skills">
                  <TabsList className="bg-cream-200">
                    <TabsTrigger
                      value="skills"
                      className="flex items-center gap-2 data-[state=active]:bg-sand-100 data-[state=active]:text-taupe-700"
                    >
                      <Code size={16} /> Skills
                    </TabsTrigger>
                    <TabsTrigger
                      value="education"
                      className="flex items-center gap-2 data-[state=active]:bg-sand-100 data-[state=active]:text-taupe-700"
                    >
                      <GraduationCap size={16} /> Education
                    </TabsTrigger>
                    <TabsTrigger
                      value="certifications"
                      className="flex items-center gap-2 data-[state=active]:bg-sand-100 data-[state=active]:text-taupe-700"
                    >
                      <Award size={16} /> Certifications
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="skills" className="mt-4 text-brown-700">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Languages & Programming</h4>
                        <p className="text-sm text-brown-600">{skills.languages.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Frameworks & Tools</h4>
                        <p className="text-sm text-brown-600">{skills.frameworks.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Databases & Cloud</h4>
                        <p className="text-sm text-brown-600">{skills.databases.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Web3/Blockchain</h4>
                        <p className="text-sm text-brown-600">{skills.blockchain.join(", ")}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="education" className="mt-4 text-brown-700">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Northeastern University, Boston, MA</h4>
                        <p className="text-sm text-brown-500">
                          Master of Science in Information Systems (Sept 2024 – Dec 2026)
                        </p>
                        <ul className="text-sm text-brown-600 list-disc pl-5 mt-1">
                          <li>
                            Courses: Application Development in Java, Database Management in SQL, Data Structures and
                            Algorithms, Financial Modelling
                          </li>
                          <li>Graduate Student Government Senator (Feb 2026 – Present)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Cummins College of Engineering for Women, Pune</h4>
                        <p className="text-sm text-brown-500">
                          Bachelor of Technology in Mechanical Engineering (Aug 2018 – June 2022)
                        </p>
                        <ul className="text-sm text-brown-600 list-disc pl-5 mt-1">
                          <li>
                            Relevant Courses: Introduction to Cybersecurity, C/C++ Programming, Engineering Design
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="certifications" className="mt-4 text-brown-700">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Google Data Analytics Certification</h4>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-brown-800">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Associate Software Developer</h3>
                  <p className="text-brown-600">Siemens Digital Industries Software, Pune, India</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">July 2022 – Aug 2024</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>
                  Developed and optimized UI components within the Function Configuration Framework (FCF), resulting in
                  a 20% increase in responsiveness.
                </li>
                <li>
                  Led efforts in defect triage and resolution using data analysis and QA logs, contributing to a 15%
                  reduction in recurring issues.
                </li>
                <li>
                  Refactored core components in C++ using Component Object Model (COM), improving application
                  maintainability and reducing load times by 10%.
                </li>
                <li>
                  Created automated test cases integrated into internal QA pipelines, reducing manual testing cycles by
                  25% and accelerating product release timelines.
                </li>
                <li>
                  Utilized Polarion dashboards for agile sprint planning, workload tracking, and defect management,
                  improving transparency and stakeholder alignment.
                </li>
              </ul>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Data Science Intern</h3>
                  <p className="text-brown-600">Technocolabs Software (Remote)</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">June 2021 – July 2021</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>
                  Developed a sentiment analysis model using NLP techniques to predict stock trends with 85% accuracy.
                </li>
                <li>
                  Implemented a fully automated ETL pipeline for ingesting, cleaning, and processing financial news data
                  from multiple APIs.
                </li>
                <li>
                  Built and deployed a Flask-based web application on Heroku featuring real-time dashboards for model
                  outputs and sentiment visualization.
                </li>
                <li>
                  Designed UI interfaces and backend logic to support high-volume user activity post-launch, handling up
                  to 300% traffic growth.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-brown-800">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="p-6 flex flex-col items-center">
                      <div className="mb-4 bg-cream-300/50 p-6 rounded-full">{project.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-brown-800 text-center">{project.title}</h3>
                      <p className="text-brown-600 mb-4 text-center">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {project.technologies.map((tech, techIndex) => {
                          // Alternate between different pastel colors
                          const bgColors = [
                            "bg-sand-100 text-taupe-700",
                            "bg-taupe-100 text-taupe-700",
                            "bg-sage-100 text-sage-700",
                          ]
                          const colorIndex = techIndex % bgColors.length

                          return (
                            <span key={techIndex} className={`text-xs ${bgColors[colorIndex]} px-2 py-1 rounded`}>
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-taupe-600 hover:text-taupe-800 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        <span className="text-sm">View on GitHub</span>
                      </a>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-cream-50">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-brown-800 flex items-center gap-3">
                      {project.icon && (
                        <span className="text-taupe-600">
                          {React.cloneElement(project.icon, { className: "h-6 w-6" })}
                        </span>
                      )}
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => {
                        const bgColors = [
                          "bg-sand-100 text-taupe-700",
                          "bg-taupe-100 text-taupe-700",
                          "bg-sage-100 text-sage-700",
                        ]
                        const colorIndex = techIndex % bgColors.length

                        return (
                          <span key={techIndex} className={`text-xs ${bgColors[colorIndex]} px-2 py-1 rounded`}>
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                    <div className="text-brown-600 whitespace-pre-line">{project.detailedDescription}</div>
                    <div className="mt-6 flex justify-end">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-taupe-600 hover:text-taupe-800 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>View Project on GitHub</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-brown-800">Get In Touch</h2>
          <div className="max-w-2xl mx-auto bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
            <p className="text-center mb-6 text-brown-600">
              Feel free to reach out if you're looking to collaborate or just want to connect!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-brown-700">
                <MapPin className="text-taupe-600" />
                <span>Boston, MA</span>
              </div>
              <div className="flex items-center gap-3 text-brown-700">
                <Mail className="text-taupe-600" />
                <a href="mailto:ghatole.a@northeastern.edu" className="hover:text-taupe-700 transition-colors">
                  ghatole.a@northeastern.edu
                </a>
              </div>
              <div className="flex items-center gap-3 text-brown-700">
                <Phone className="text-taupe-600" />
                <a href="tel:+18573518805" className="hover:text-taupe-700 transition-colors">
                  (857)-351-8805
                </a>
              </div>
              <div className="flex items-center gap-3 text-brown-700">
                <Github className="text-taupe-600" />
                <a
                  href="https://github.com/ghatoleaakruti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-taupe-700 transition-colors"
                >
                  github.com/ghatoleaakruti
                </a>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button className="rounded-full bg-taupe-500 hover:bg-taupe-600 text-white">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-sand-400 text-brown-700 hover:bg-sand-100"
                onClick={() => window.open("https://linkedin.com/in/aakruti-ghatole", "_blank")}
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 text-center text-brown-500 text-sm">
        <p>© {new Date().getFullYear()} Aakruti Ghatole. All rights reserved.</p>
      </footer>
    </div>
  )
}
