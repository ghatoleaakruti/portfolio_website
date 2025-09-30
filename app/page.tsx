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
        "A comprehensive quantitative trading strategy developed for Tesla (TSLA) stock as part of Data Science Engineering Methods & Tools course at Northeastern University. Key features include:\n\n- Built end-to-end trading strategy using Python with multiple regression models and ensemble methods\n- Engineered 50+ financial features including technical indicators, macroeconomic factors, and sentiment analysis\n- Applied PCA and statistical feature selection to optimize model interpretability\n- Implemented trading execution with position sizing, risk management, and volatility adaptation\n- Achieved superior Sharpe ratio and lowest maximum drawdown compared to benchmarks",
      technologies: ["Python", "Machine Learning", "Financial Modeling", "PCA", "NewsAPI", "TextBlob"],
      icon: <LineChart className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti/tesla_trading_strategy",
    },
    {
      title: "Healthcare Management System",
      description:
        "SQL stored procedures for patient records, staff schedules, and administrative tasks with column-level encryption and Power BI dashboards.",
      detailedDescription:
        "A comprehensive healthcare management system designed to streamline patient record management, staff scheduling, and administrative tasks. The system utilizes SQL stored procedures with column-level encryption to ensure data security and compliance with healthcare regulations. Key features include:\n\n- Patient record management with secure access controls\n- Staff scheduling and resource allocation\n- Administrative task automation\n- Power BI dashboards for data visualization and analytics\n- Encrypted data storage for sensitive patient information\n- Role-based access control for different user types",
      technologies: ["SQL", "Power BI", "Python", "GUI"],
      icon: <Database className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti/DMDD_Project",
    },
    {
      title: "Mean Reversion Strategy on S&P 500 Stocks",
      description:
        "Quantitative trading strategy using Bollinger Bands and Z-score thresholds, achieving a Sharpe Ratio of 1.8.",
      detailedDescription:
        "A sophisticated quantitative trading strategy implemented on S&P 500 stocks using mean reversion principles. The strategy leverages Bollinger Bands and Z-score thresholds to identify trading opportunities when prices deviate significantly from their historical means. Key achievements include:\n\n- Achieved a Sharpe Ratio of 1.8, indicating strong risk-adjusted returns\n- Implemented backtesting framework to validate strategy performance\n- Developed risk management protocols to limit drawdowns\n- Created automated execution system for trade entries and exits\n- Incorporated market regime detection to adapt to changing market conditions\n- Utilized statistical analysis to optimize parameter selection",
      technologies: ["Python", "Finance", "DeFi", "Smart Contracts"],
      icon: <LineChart className="h-12 w-12 text-taupe-600" />,
      githubLink: "https://github.com/ghatoleaakruti/Mean_Reversion_Strategy",
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
      githubLink: "https://github.com/codexvala-da/Organ-Donation-Management-and-Collaboration-Platform",
    },
  ]

  // Skills data
  const skills = {
    aiml: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "AI Agents"],
    languages: ["Python", "Java", "C++", "SQL", "Rust", "Solidity", "JavaScript"],
    frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Flask", "Spring Boot", "Git", "Docker"],
    cloud: ["Google Cloud Platform", "AWS", "Azure", "Heroku", "MLOps", "CI/CD"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "BigQuery"],
    dataAnalysis: ["Pandas", "NumPy", "XGBoost", "Tableau", "Power BI", "Seaborn", "Matplotlib"],
    blockchain: ["Smart Contracts", "DAO Integration", "DeFi Architecture", "Web3"],
  }

  // Certifications data
  const certifications = [
    {
      title: "Analyze Data to Answer Questions",
      provider: "Google",
      date: "February 2025",
      category: "Data Analytics",
    },
    {
      title: "Data Analysis with R Programming",
      provider: "Google",
      date: "February 2025",
      category: "Data Analytics",
    },
    {
      title: "Process Data From Dirty to Clean",
      provider: "Google",
      date: "February 2025",
      category: "Data Analytics",
    },
    {
      title: "Share Data Through the Art of Visualization",
      provider: "Google",
      date: "February 2025",
      category: "Data Analytics",
    },
    {
      title: "Prepare Data for Exploration",
      provider: "Google",
      date: "November 2024",
      category: "Data Analytics",
    },
    {
      title: "C++ Templates and the STL",
      provider: "LinkedIn",
      date: "September 2023",
      category: "Programming",
    },
    {
      title: "Introduction to Data Structures and Algorithms in C++",
      provider: "Pluralsight",
      date: "September 2023",
      category: "Programming",
    },
    {
      title: "Learning C++",
      provider: "LinkedIn",
      date: "September 2023",
      category: "Programming",
    },
    {
      title: "Beautiful C++14: STL Algorithms",
      provider: "Pluralsight",
      date: "August 2023",
      category: "Programming",
    },
    {
      title: "Beautiful C++17: Updating Legacy Code",
      provider: "Pluralsight",
      date: "August 2023",
      category: "Programming",
    },
    {
      title: "Design Patterns in C++20: Creational",
      provider: "Pluralsight",
      date: "August 2023",
      category: "Programming",
    },
    {
      title: "Practical C++14 and C++17 Features",
      provider: "Pluralsight",
      date: "August 2023",
      category: "Programming",
    },
    {
      title: "The Essentials of COM",
      provider: "Pluralsight",
      date: "August 2023",
      category: "Programming",
    },
    {
      title: "Visual Studio 2022 Playbook",
      provider: "Pluralsight",
      date: "August 2023",
      category: "Tools",
    },
    {
      title: "C++ Fundamentals Including C++17",
      provider: "Pluralsight",
      date: "July 2023",
      category: "Programming",
    },
    {
      title: "Learn to Program with C++17",
      provider: "Pluralsight",
      date: "July 2023",
      category: "Programming",
    },
    {
      title: "Reading Legacy C++",
      provider: "Pluralsight",
      date: "July 2023",
      category: "Programming",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      provider: "Google",
      date: "February 2022",
      category: "Data Analytics",
    },
    {
      title: "Foundations: Data, Data, Data Everywhere",
      provider: "Google",
      date: "January 2022",
      category: "Data Analytics",
    },
    {
      title: "Learn Linux From Scratch",
      provider: "Udemy",
      date: "November 2021",
      category: "Operating Systems",
    },
    {
      title: "Complete Introduction to C++ Programming",
      provider: "Udemy",
      date: "April 2021",
      category: "Programming",
    },
    {
      title: "Python in Data Science",
      provider: "Udemy",
      date: "March 2021",
      category: "Data Science",
    },
    {
      title: "Data Structures and Algorithms in Java",
      provider: "Udemy",
      date: "October 2020",
      category: "Programming",
    },
    {
      title: "Java Programming Certificate",
      provider: "MyCaptain",
      date: "July 2020",
      category: "Programming",
    },
    {
      title: "Ethical Hacking",
      provider: "Azure Skynet Solutions Pvt. Ltd",
      date: "June 2020",
      category: "Cybersecurity",
    },
    {
      title: "Introduction to Programming Using Python",
      provider: "MyCaptain",
      date: "June 2020",
      category: "Programming",
    },
    {
      title: "C Programming Certificate",
      provider: "MyCaptain",
      date: "January 2020",
      category: "Programming",
    },
    {
      title: "Data Analysis with Tableau",
      provider: "Edureka",
      date: "",
      category: "Data Analytics",
    },
    {
      title: "Data Analytics in Excel",
      provider: "Simplilearn",
      date: "",
      category: "Data Analytics",
    },
    {
      title: "R Programming for Statistical Computing",
      provider: "freeCodeCamp",
      date: "",
      category: "Data Science",
    },
    {
      title: "SAS for Data Analytics",
      provider: "freeCodeCamp",
      date: "",
      category: "Data Analytics",
    },
    {
      title: "Statistics and Probability",
      provider: "freeCodeCamp",
      date: "",
      category: "Data Science",
    },
  ]

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
            href="#certifications"
            className="hover:text-taupe-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Certifications
          </Link>
          <Link
            href="#contact"
            className="hover:text-taupe-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#volunteering"
            className="hover:text-taupe-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Volunteering
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
            Software Developer | Data Analyst | AI/ML Researcher
          </p>
          <p className="text-md md:text-lg max-w-2xl mb-10 text-brown-600">
            Software developer and AI researcher specializing in intelligent agents, machine learning systems, and
            automation. Currently developing AI-powered copilot solutions and synthetic data generation pipelines for
            manufacturing workflows. Passionate about building scalable data-driven applications and deploying
            innovative AI solutions in real-world scenarios.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-taupe-500 hover:bg-taupe-600 text-white">2+ Years Experience</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full border-sand-400 text-brown-700 hover:bg-sand-100 bg-transparent"
                >
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
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-brown-800">About Me</h2>
              <div className="space-y-4 text-brown-600">
                <p>
                  I am a software developer and AI researcher with a strong focus on building intelligent systems and
                  autonomous agents. My work spans machine learning, automation workflows, and scalable AI-driven
                  solutions across healthcare, finance, and engineering domains.
                </p>
                <p>
                  I hold a Bachelor's degree in Mechanical Engineering and am currently pursuing my MS in Information
                  Systems at Northeastern University. My research interests lie at the intersection of AI agents,
                  machine learning pipelines, synthetic data generation, and cloud-based intelligent systems. I'm
                  passionate about developing AI copilots that enhance human productivity and automate complex
                  engineering workflows.
                </p>
                <p>
                  I thrive in collaborative environments, applying computational thinking and structured problem-solving
                  to create innovative solutions that bridge the gap between research and practical applications.
                </p>
              </div>

              <div className="mt-10">
                <div className="mt-10 space-y-8">
                  {/* Skills Section */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-brown-800 flex items-center gap-2">
                      <Code size={20} /> Skills
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">AI/ML & Research</h4>
                        <p className="text-sm text-brown-600">{skills.aiml.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Programming Languages</h4>
                        <p className="text-sm text-brown-600">{skills.languages.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Frameworks & Libraries</h4>
                        <p className="text-sm text-brown-600">{skills.frameworks.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Cloud & DevOps</h4>
                        <p className="text-sm text-brown-600">{skills.cloud.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Data Science & Analytics</h4>
                        <p className="text-sm text-brown-600">{skills.dataAnalysis.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Databases</h4>
                        <p className="text-sm text-brown-600">{skills.databases.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Blockchain & Web3</h4>
                        <p className="text-sm text-brown-600">{skills.blockchain.join(", ")}</p>
                      </div>
                    </div>
                  </div>

                  {/* Education Section */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-brown-800 flex items-center gap-2">
                      <GraduationCap size={20} /> Education
                    </h3>
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
                  </div>

                  {/* Certifications Section */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-brown-800 flex items-center gap-2">
                      <Award size={20} /> Recent Certifications
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Recent Certifications</h4>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium">Google Data Analytics Professional Certificate</span>
                            <span className="text-brown-500"> - In Progress (2024-2025)</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Advanced C++ Programming</span>
                            <span className="text-brown-500"> - Pluralsight & LinkedIn (2023)</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Data Science & Analytics</span>
                            <span className="text-brown-500"> - Multiple Platforms (2020-2022)</span>
                          </div>
                        </div>
                        <p className="text-xs text-brown-500 mt-2">
                          View complete list in the Certifications section below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <h3 className="text-xl font-bold text-brown-800">AI Research and Development Intern</h3>
                  <p className="text-brown-600">Foundation EGI, Boston, MA (Hybrid)</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Jul 2025 – Present</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>
                  Developing AI-powered copilot solutions that bridge design and manufacturing workflows through
                  intelligent automation.
                </li>
                <li>
                  Building synthetic data generation pipelines for training machine learning models on engineering
                  workflows.
                </li>
                <li>
                  Implementing cloud-based AI pipelines and data workflows using Google Cloud Platform and modern MLOps
                  practices.
                </li>
                <li>
                  Conducting research on data interoperability standards and semantic understanding for AI-driven
                  engineering processes.
                </li>
              </ul>
              <div className="mt-3">
                <span className="text-sm text-brown-500 font-medium">Skills: </span>
                <span className="text-sm text-brown-600">
                  AI/ML, Intelligent Agents, Google Cloud, Synthetic Data Generation, Automation, Python
                </span>
              </div>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Associate Software Developer</h3>
                  <p className="text-brown-600">Siemens Digital Industries Software, Pune, India</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Dec 2023 – Aug 2024</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Enhanced engineering software environments with new features and improvements.</li>
                <li>Resolved customer-reported bugs and issues reported through QA testing.</li>
                <li>Developed and implemented automated testing procedures for new features and bug fixes.</li>
                <li>Volunteered for the Family Day event in 2024, focusing on organization and management.</li>
              </ul>
              <div className="mt-3">
                <span className="text-sm text-brown-500 font-medium">Skills: </span>
                <span className="text-sm text-brown-600">C++, Software Development, Automation Testing</span>
              </div>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Graduate Training Engineer (GTE)</h3>
                  <p className="text-brown-600">Siemens Digital Industries Software, Pune, India</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Jul 2022 – Dec 2023</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Collaborated with team TMinus 1 on reducing and solving customer PRs and QA tested defects.</li>
                <li>Implemented new features in the UI and backend for engineering software.</li>
                <li>Added automated testing procedures to avoid complications and regressions.</li>
                <li>Researched and prototyped for upcoming features.</li>
                <li>
                  Studied and worked in Agile methodologies using C++ programming language for implementing features and
                  fixing issues.
                </li>
              </ul>
              <div className="mt-3">
                <span className="text-sm text-brown-500 font-medium">Skills: </span>
                <span className="text-sm text-brown-600">
                  Agile Methodologies, Object-Oriented Programming (OOP), C++
                </span>
              </div>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Data Science Intern</h3>
                  <p className="text-brown-600">Technocolabs Software (Remote)</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Jun 2021 – Jul 2021</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Worked with a team of 8 interns on "Stock market prediction using sentiment analysis" project.</li>
                <li>
                  Performed cleaning and exploratory analysis of news datasets, conducting sentiment analysis on
                  financial data.
                </li>
                <li>
                  Created a deep learning model to predict stock prices based on news article headlines and
                  opening/closing prices.
                </li>
                <li>Developed webpage using HTML, CSS and deployed using Flask and Heroku.</li>
              </ul>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Web Development Intern</h3>
                  <p className="text-brown-600">Paathshaala (Remote)</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Jan 2021 – Feb 2021</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Actively participated in the development and enhancement of the Paathshala website.</li>
                <li>Leveraged WordPress to design and build engaging and user-friendly web pages.</li>
                <li>Collaborated with the web development team to implement responsive design principles.</li>
                <li>Gained hands-on experience in customizing WordPress themes, plugins, and widgets.</li>
              </ul>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Student Intern</h3>
                  <p className="text-brown-600">MasterJi</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Oct 2020 – Dec 2020</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Worked as a technical-cum-non technical intern with manager on data creation and management.</li>
                <li>Managed data on Google Cloud Firebase interface for client applications.</li>
                <li>Developed Android applications using Android Studio for vendor use.</li>
                <li>Performed non-technical work including blog writing, PR creation, and data entry.</li>
              </ul>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Leadership Roles</h3>
                  <p className="text-brown-600">Youth India Foundation</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Jul 2020 – Mar 2021</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-brown-700">
                    Assistant National Event Planning Team (Jan 2021 – Mar 2021)
                  </h4>
                  <ul className="text-brown-600 list-disc pl-5 text-sm">
                    <li>Coordinated planning and execution of events on a national level.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-brown-700">
                    Vice President Maharashtra Outreach (Dec 2020 – Jan 2021)
                  </h4>
                  <ul className="text-brown-600 list-disc pl-5 text-sm">
                    <li>Approached colleges in Maharashtra to promote foundation goals and gain new participants.</li>
                    <li>Managed selection, onboarding, and team allocation of new joiners.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-brown-700">Management Team Head (Oct 2020 – Dec 2020)</h4>
                  <ul className="text-brown-600 list-disc pl-5 text-sm">
                    <li>Coordinated with team members for smooth planning and execution of events.</li>
                    <li>Assisted in searching for sponsors and participants for events.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteering Section */}
        <section id="volunteering" className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-brown-800">Volunteering & Leadership</h2>
          <div className="space-y-8">
            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Senator</h3>
                  <p className="text-brown-600">Graduate Student Government, Northeastern University</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Feb 2025 – Present</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Representing graduate students' interests and concerns in university governance.</li>
                <li>
                  Participating in policy discussions and decision-making processes affecting graduate student life.
                </li>
                <li>
                  Advocating for improved resources, services, and support systems for the graduate student community.
                </li>
              </ul>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">
                    Siemens Mainstream Engineering Family Day Event 2024
                  </h3>
                  <p className="text-brown-600">Siemens Digital Industries Software</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Dec 2023 – Mar 2024</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Worked with the team to plan the Family Day event for the department.</li>
                <li>Took charge of organizing and overseeing the planning and execution of various activities.</li>
                <li>
                  Managed arrangements for refreshments and coordinated the distribution of presents or gifts during the
                  event.
                </li>
              </ul>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Siemens Mainstream Engineering Family Day</h3>
                  <p className="text-brown-600">Siemens Digital Industries Software</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Dec 2022 – Feb 2023</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>Worked with the team to plan the Family Day event for the department.</li>
                <li>Took charge of organizing and overseeing the planning and execution of various activities.</li>
                <li>
                  Managed arrangements for refreshments and coordinated the distribution of presents or gifts during the
                  event.
                </li>
              </ul>
            </div>

            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brown-800">Cyclothon Event</h3>
                  <p className="text-brown-600">MKSSS Cummins College of Engineering for Women</p>
                </div>
                <p className="text-brown-500 mt-1 md:mt-0">Mar 2022 – Apr 2022</p>
              </div>
              <ul className="text-brown-600 list-disc pl-5 space-y-1">
                <li>
                  Took the lead in organizing and executing the cyclothon event as part of the technical fest at Cummins
                  College of Engineering for Women.
                </li>
                <li>
                  Oversaw the management of volunteers and participants, ensuring their involvement and coordination
                  before and during the event.
                </li>
                <li>
                  Managed the procurement of necessary materials for the event, liaising with vendors and college
                  committees to acquire the required supplies.
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

        {/* Certifications Section */}
        <section id="certifications" className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-brown-800">Certifications</h2>
          <div className="space-y-8">
            {/* Data Analytics Certifications */}
            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-brown-800 flex items-center gap-2">
                <Database className="h-5 w-5 text-taupe-600" />
                Data Analytics & Data Science
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications
                  .filter((cert) => cert.category === "Data Analytics" || cert.category === "Data Science")
                  .map((cert, index) => (
                    <div key={index} className="border-l-4 border-taupe-400 pl-4">
                      <h4 className="font-medium text-brown-700">{cert.title}</h4>
                      <p className="text-sm text-brown-600">{cert.provider}</p>
                      {cert.date && <p className="text-xs text-brown-500">{cert.date}</p>}
                    </div>
                  ))}
              </div>
            </div>

            {/* Programming Certifications */}
            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-brown-800 flex items-center gap-2">
                <Code className="h-5 w-5 text-taupe-600" />
                Programming & Software Development
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications
                  .filter((cert) => cert.category === "Programming")
                  .map((cert, index) => (
                    <div key={index} className="border-l-4 border-sand-400 pl-4">
                      <h4 className="font-medium text-brown-700">{cert.title}</h4>
                      <p className="text-sm text-brown-600">{cert.provider}</p>
                      {cert.date && <p className="text-xs text-brown-500">{cert.date}</p>}
                    </div>
                  ))}
              </div>
            </div>

            {/* Other Certifications */}
            <div className="bg-cream-200/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-brown-800 flex items-center gap-2">
                <Award className="h-5 w-5 text-taupe-600" />
                Specialized Skills & Tools
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications
                  .filter(
                    (cert) =>
                      cert.category !== "Programming" &&
                      cert.category !== "Data Analytics" &&
                      cert.category !== "Data Science",
                  )
                  .map((cert, index) => (
                    <div key={index} className="border-l-4 border-sage-400 pl-4">
                      <h4 className="font-medium text-brown-700">{cert.title}</h4>
                      <p className="text-sm text-brown-600">{cert.provider}</p>
                      {cert.date && <p className="text-xs text-brown-500">{cert.date}</p>}
                    </div>
                  ))}
              </div>
            </div>
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
                className="rounded-full border-sand-400 text-brown-700 hover:bg-sand-100 bg-transparent"
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
