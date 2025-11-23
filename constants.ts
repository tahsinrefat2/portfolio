import { Project, EducationItem, Achievement, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Tahsinul Refat",
  role: "AI/ML Engineer & Computer Scientist",
  tagline: "Building intelligent systems with multimodal deep learning and robust software engineering.",
  about: "I'm a recent Computer Science and Engineering graduate from North South University with a passion for machine learning and AI. My expertise includes developing multimodal deep learning models, managing complex datasets, and leading cross-functional teams. I thrive in challenging environments and have a proven track record in both academic and competitive settings.",
  location: "Bashundhara R/A, Dhaka, Bangladesh",
  email: "tahsinrefat2@gmail.com",
  phone: "+88 01832 433260",
  social: {
    linkedin: "https://linkedin.com/in/tahsinrefat2",
    github: "https://github.com/tahsinrefat2",
  },
  heroImage: "https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-6/491516517_4067997090137980_3615183756456686043_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=srFMmnwmI1wQ7kNvwHrw3OE&_nc_oc=AdlBsdtJvrbtovw1KVHxooND7eAQqvq6nTSjlHACegBmb0VQloKCB17hluBDpU3ee5M&_nc_zt=23&_nc_ht=scontent.fdac19-1.fna&_nc_gid=j0y0SOafRfO7-p9-Mdb9Yg&oh=00_AfSHpZdt9eCNQIdTyd5woPw3P2fGlA9FRmLioJxdEMW-EA&oe=687D8603"
};

export const EDUCATION: EducationItem[] = [
  {
    id: "nsu",
    degree: "B.Sc in Computer Science and Engineering",
    institution: "North South University",
    period: "05/2021 - 04/2025",
    grade: "CGPA: 3.22 (85% avg marks)"
  },
  {
    id: "hsc",
    degree: "Higher Secondary School Certificate",
    institution: "Major General Mahmudul Hasan Ideal College",
    period: "04/2017 - 04/2019",
    grade: "GPA: 4.00"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate",
    institution: "Bindubasini Govt. Boys' High School",
    period: "01/2012 - 02/2017",
    grade: "GPA: 5.00"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "innovation-challenge",
    title: "1st Runner Up - INNOVATION CHALLENGE",
    event: "NSU ECE CAPSTONE DESIGN PROJECT SHOWCASE (Season 16)",
    date: "04/2025",
    image: "https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-6/495177145_987680640233487_2083725387761585518_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mjCQik-9r7UQ7kNvwFnjr4T&_nc_oc=AdlsvCDY1qgB0qkG381fj9HjcCLftKCpU2AXs14XKP2UsNgHsN4BFefJzsTdnyTXBJY&_nc_zt=23&_nc_ht=scontent.fdac19-1.fna&_nc_gid=JVcw6PQalM_A4FAkQGZfdw&oh=00_AfRnADFFy9XN8qL9waKDecnDEFnwixXEn1bPq_lJiOmVDA&oe=687D9FEE"
  }
];

export const SKILLS: Skill[] = [
  { name: "Machine Learning", icon: "Brain", category: "tech" },
  { name: "Data Analysis", icon: "ChartLine", category: "tech" },
  { name: "Python", icon: "Code", category: "tech" },
  { name: "Neural Networks", icon: "Network", category: "tech" },
  { name: "Project Management", icon: "Kanban", category: "soft" },
  { name: "Team Leadership", icon: "Users", category: "soft" },
];

export const PROJECTS: Project[] = [
  {
    id: "postureaware",
    title: "PostureAware",
    subtitle: "Multimodal Deep Learning for Pain Assessment",
    description: "Predicting musculoskeletal pain intensity and location using wearable sensors and demographic data.",
    fullDescription: [
      "Developed a multimodal deep learning model combining CNN-LSTM for time-series sensor data and MLP for user metadata.",
      "The system monitors posture and movement patterns to identify early signs of work-related musculoskeletal disorders.",
      "Achieved 87% accuracy in pain intensity prediction and 82% accuracy in pain location classification."
    ],
    techStack: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    stats: [
      { label: "Accuracy", value: "87%" },
      { label: "Modality", value: "Hybrid" }
    ]
  },
  {
    id: "youtube-prediction",
    title: "YouTube Success Prediction",
    subtitle: "XGBoost Classification Model",
    description: "A machine learning pipeline to classify Bangla YouTube video success using metadata and early performance metrics.",
    fullDescription: [
      "Curated a dataset of 16,000+ videos using YouTube Data API V3.",
      "Engineered features from video metadata and utilized NLP for Bangla titles.",
      "XGBoost achieved the best performance with 78% accuracy after RandomizedSearchCV tuning."
    ],
    techStack: ["Python", "Scikit-learn", "XGBoost", "YouTube API", "NLTK"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "skin-cancer",
    title: "Skin Cancer Classification",
    subtitle: "Hybrid Deep Learning & Metadata",
    description: "Advanced classification system using ISIC dataset images combined with patient clinical data.",
    fullDescription: [
      "Utilized custom CNN architecture for feature extraction from dermatoscopic images.",
      "Integrated patient metadata (age, sex, anatomical site) to improve diagnostic accuracy.",
      "Achieved 92% accuracy, outperforming image-only baselines by 8%."
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Pandas"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1579684385180-1ea55f9f898b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    stats: [
      { label: "Accuracy", value: "92%" },
      { label: "Dataset", value: "ISIC" }
    ]
  },
  {
    id: "astar-opt",
    title: "Optimized A* Algorithm",
    subtitle: "Pathfinding with Weighted Heuristics",
    description: "Enhanced A* algorithm implementation with weighted heuristics for faster convergence in pathfinding.",
    fullDescription: [
      "Compared classic A* with weighted heuristic variants in randomized environments.",
      "Reduced computation time by 35% on average while maintaining 98% path optimality.",
      "Implemented early stopping techniques to reduce unnecessary node exploration."
    ],
    techStack: ["Python", "NumPy", "Matplotlib", "Pygame"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "virtual-exam",
    title: "VirtualExam",
    subtitle: "Online Examination System",
    description: "Comprehensive platform for conducting secure online exams with automated grading.",
    fullDescription: [
      "Streamlined examination process for administrators and students.",
      "Features automated grading, randomized questions, and time limit enforcement.",
      "Successfully deployed in a test environment with over 200 students."
    ],
    techStack: ["PHP", "JavaScript", "Bootstrap", "MySQL", "Apache"],
    category: "web",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: "club-mgmt",
    title: "ClubManagementBD",
    subtitle: "Sports Club ERP",
    description: "A complete management solution for sports clubs handling players, tournaments, and scoring.",
    fullDescription: [
      "Provides complete CRUD operations for member and team management.",
      "Includes tournament scheduling and real-time score tracking modules.",
      "Reduced administrative workload by approximately 60% for a local club."
    ],
    techStack: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    category: "web",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1605&q=80"
  },
  {
    id: "sap-1",
    title: "SAP-1 Microcomputer",
    subtitle: "Digital Logic Simulation",
    description: "Implementation of the SAP-1 architecture in Logisim demonstrating von Neumann principles.",
    fullDescription: [
      "Implemented PC, MAR, RAM, IR, Controller, ALU, and Accumulator components.",
      "Successfully executes 5 fundamental operations (LDA, ADD, SUB, OUT, HLT).",
      "Validates core computer architecture concepts through simulation."
    ],
    techStack: ["Logisim", "Digital Logic", "Computer Arch"],
    category: "other",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "obstacle-car",
    title: "Autonomous Robot Car",
    subtitle: "Arduino-based Navigation",
    description: "Self-driving vehicle capable of detecting and avoiding obstacles using ultrasonic sensors.",
    fullDescription: [
      "Powered by Arduino Uno R3 with HC SR04 ultrasonic sensors and L293D driver.",
      "Features servo-controlled scanning to map immediate surroundings.",
      "Demonstrated reliable navigation in complex environments with multiple obstacles."
    ],
    techStack: ["Arduino", "C++", "Embedded Systems"],
    category: "other",
    image: "https://media.licdn.com/dms/image/v2/D562DAQHJ7DOAYFPJ-Q/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1705081520757?e=1753286400&v=beta&t=P3-OgQhl-sy6JldkXUMJRr09VGp0gQlU2V01wROrKRE",
    link: "https://lnkd.in/gUUm3stF"
  }
];