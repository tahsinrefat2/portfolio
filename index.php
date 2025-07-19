<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tahsinul Refat | AI/ML Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #8b5cf6;
            --dark: #0f172a;
            --light: #f8fafc;
            --gray: #64748b;
            --card-bg: rgba(15, 23, 42, 0.8);
            --card-border: rgba(99, 102, 241, 0.3);
            --bg-gradient: linear-gradient(135deg, #0f172a, #1e293b);
            --text-color: #f8fafc;
            --text-secondary: #cbd5e1;
            --shadow-color: rgba(0, 0, 0, 0.2);
            --particle-color: rgba(100, 100, 255, 0.7);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: var(--bg-gradient);
            color: var(--text-color);
            line-height: 1.6;
            overflow-x: hidden;
            position: relative;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 20%);
            z-index: -1;
        }

        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        section {
            padding: 100px 0;
        }

        /* Header & Navigation */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            padding: 20px 0;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--card-border);
            transition: all 0.3s ease;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            color: var(--light);
            text-decoration: none;
            font-weight: 500;
            position: relative;
            padding: 5px 0;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            display: flex;
            align-items: center;
            gap: 50px;
            z-index: 2;
        }

        .hero-text {
            flex: 1;
        }

        .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            position: relative;
        }

        .profile-img {
            width: 350px;
            height: 350px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid var(--primary);
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
            animation: float 6s ease-in-out infinite;
        }

        .hero h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 20px;
            line-height: 1.1;
        }

        .highlight {
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            position: relative;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: #cbd5e1;
            max-width: 600px;
        }

        .hero-btns {
            display: flex;
            gap: 20px;
            margin-top: 40px;
        }

        .btn {
            padding: 12px 30px;
            border-radius: 30px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: 0.5s;
        }

        .btn:hover::before {
            left: 100%;
        }

        .btn-primary {
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
        }

        .btn-secondary {
            background: transparent;
            color: var(--light);
            border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
            background: rgba(37, 99, 235, 0.1);
        }

        /* Sections */
        .section-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5rem;
            margin-bottom: 20px;
            position: relative;
            display: inline-block;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 70px;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border-radius: 2px;
        }

        /* Cards */
        .card {
            background: var(--card-bg);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            border: 1px solid var(--card-border);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(37, 99, 235, 0.3);
        }

        .card-title {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--primary);
        }

        .card-subtitle {
            color: var(--secondary);
            margin-bottom: 15px;
            font-weight: 500;
        }

        /* Education */
        .education-item {
            position: relative;
            padding-left: 30px;
            margin-bottom: 40px;
        }

        .education-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 8px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: var(--primary);
        }

        .education-item::after {
            content: '';
            position: absolute;
            left: 7px;
            top: 23px;
            width: 2px;
            height: calc(100% + 25px);
            background: var(--primary);
        }

        .education-item:last-child::after {
            display: none;
        }

        /* Achievements */
        .achievements-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .achievement-card {
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            height: 300px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .achievement-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .achievement-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(15, 23, 42, 0.9));
            padding: 20px;
            transform: translateY(0);
            transition: transform 0.5s ease;
        }

        .achievement-card:hover .achievement-overlay {
            transform: translateY(-100%);
            background: rgba(15, 23, 42, 0.95);
        }

        .achievement-card:hover .achievement-img {
            transform: scale(1.1);
        }

        .achievement-title {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: white;
        }

        .achievement-desc {
            color: #cbd5e1;
            margin-bottom: 15px;
        }

        .achievement-link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        /* Projects */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .project-card {
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            height: 300px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .project-content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 25px;
            background: linear-gradient(transparent, rgba(15, 23, 42, 0.95));
            transform: translateY(100px);
            transition: transform 0.4s ease;
        }

        .project-card:hover .project-content {
            transform: translateY(0);
        }

        .project-card:hover .project-img {
            transform: scale(1.1);
        }

        .project-title {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: white;
        }

        /* Project Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 2000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .modal.active {
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
        }

        .modal-content {
            background: var(--dark);
            border-radius: 15px;
            width: 80%;
            max-width: 900px;
            padding: 40px;
            position: relative;
            border: 1px solid var(--primary);
            box-shadow: 0 10px 50px rgba(37, 99, 235, 0.3);
            transform: translateY(50px);
            transition: transform 0.3s ease;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal.active .modal-content {
            transform: translateY(0);
        }

        .close-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 1.5rem;
            color: var(--light);
            cursor: pointer;
            transition: color 0.3s;
            z-index: 1;
        }

        .close-modal:hover {
            color: var(--primary);
        }

        .modal-header {
            margin-bottom: 30px;
        }

        .modal-title {
            font-size: 2rem;
            margin-bottom: 10px;
            color: var(--primary);
        }

        .modal-subtitle {
            color: var(--secondary);
            font-size: 1.2rem;
        }

        .modal-body {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .modal-img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .modal-section {
            margin-bottom: 20px;
        }

        .modal-section-title {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: var(--primary);
            position: relative;
            padding-bottom: 10px;
        }

        .modal-section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background: var(--primary);
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .tech-item {
            background: rgba(37, 99, 235, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            border: 1px solid var(--primary);
        }

        /* Project Categories */
        .project-categories {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .category-btn {
            padding: 10px 20px;
            border-radius: 30px;
            background: transparent;
            color: var(--light);
            border: 2px solid var(--primary);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .category-btn.active, .category-btn:hover {
            background: var(--primary);
            color: white;
        }

        .project-category {
            display: none;
        }

        .project-category.active {
            display: block;
        }

        /* Skills */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .skill-item {
            background: rgba(30, 41, 59, 0.6);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            transition: transform 0.3s ease;
            border: 1px solid var(--card-border);
            backdrop-filter: blur(5px);
        }

        .skill-item:hover {
            transform: translateY(-5px) scale(1.05);
            background: rgba(37, 99, 235, 0.1);
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
        }

        .skill-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: var(--primary);
        }

        /* Contact */
        .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 40px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 15px;
            background: var(--card-bg);
            padding: 20px;
            border-radius: 10px;
            flex: 1;
            min-width: 250px;
            border: 1px solid var(--card-border);
            transition: transform 0.3s ease;
        }

        .contact-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
        }

        .contact-icon {
            font-size: 1.8rem;
            color: var(--primary);
        }

        /* Animations */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .float {
            animation: float 6s ease-in-out infinite;
        }

        .fade-in {
            animation: fadeIn 1s ease forwards;
        }

        /* Footer */
        footer {
            background: rgba(15, 23, 42, 0.95);
            padding: 30px 0;
            text-align: center;
            border-top: 1px solid var(--card-border);
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--card-bg);
            color: var(--light);
            font-size: 1.3rem;
            transition: all 0.3s ease;
            border: 1px solid var(--card-border);
        }

        .social-links a:hover {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            transform: translateY(-5px);
            color: white;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .hero-content {
                flex-direction: column-reverse;
                text-align: center;
            }
            
            .hero-text {
                margin-top: 30px;
            }
            
            .hero p {
                margin-left: auto;
                margin-right: auto;
            }
            
            .hero-btns {
                justify-content: center;
            }
            
            .profile-img {
                width: 250px;
                height: 250px;
            }
            
            .modal-content {
                width: 90%;
                padding: 30px;
            }
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 3rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .projects-grid, .achievements-container {
                grid-template-columns: 1fr;
            }
            
            .contact-item {
                min-width: 100%;
            }
            
            .section-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Background Particles -->
    <canvas class="particles"></canvas>

    <!-- Header -->
    <header>
        <div class="container">
            <nav>
                <div class="logo">TR</div>
                <div class="nav-links">
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Tahsinul <span class="highlight">Refat</span></h1>
                    <p>Results-driven Computer Science graduate with hands-on experience in machine learning, data curation, and project leadership. Skilled in developing multimodal AI models and communicating technical insights.</p>
                    <div class="hero-btns">
                        <a href="#projects" class="btn btn-primary">View My Projects</a>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-6/491516517_4067997090137980_3615183756456686043_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=srFMmnwmI1wQ7kNvwHrw3OE&_nc_oc=AdlBsdtJvrbtovw1KVHxooND7eAQqvq6nTSjlHACegBmb0VQloKCB17hluBDpU3ee5M&_nc_zt=23&_nc_ht=scontent.fdac19-1.fna&_nc_gid=j0y0SOafRfO7-p9-Mdb9Yg&oh=00_AfSHpZdt9eCNQIdTyd5woPw3P2fGlA9FRmLioJxdEMW-EA&oe=687D8603" alt="Tahsinul Refat" class="profile-img">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="card">
                <p>I'm a recent Computer Science and Engineering graduate from North South University with a passion for machine learning and AI. My expertise includes developing multimodal deep learning models, managing complex datasets, and leading cross-functional teams.</p>
                <p>I thrive in challenging environments and have a proven track record in both academic and competitive settings. My technical skills are complemented by strong communication abilities, allowing me to convey complex concepts to diverse audiences.</p>
                <div class="skills-container">
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-brain"></i></div>
                        <h3>Machine Learning</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-chart-line"></i></div>
                        <h3>Data Analysis</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-project-diagram"></i></div>
                        <h3>Project Management</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-network-wired"></i></div>
                        <h3>Neural Networks</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education">
        <div class="container">
            <h2 class="section-title">Education</h2>
            <div class="card">
                <div class="education-item">
                    <h3 class="card-title">B.Sc in Computer Science and Engineering</h3>
                    <p class="card-subtitle">North South University</p>
                    <p>05/2021 - 04/2025</p>
                    <p>CGPA: 3.22 (85% marks on avg)</p>
                </div>
                <div class="education-item">
                    <h3 class="card-title">Higher Secondary School Certificate</h3>
                    <p class="card-subtitle">Major General Mahmudul Hasan Ideal College, Tangail</p>
                    <p>04/2017 - 04/2019</p>
                    <p>GPA: 4.00</p>
                </div>
                <div class="education-item">
                    <h3 class="card-title">Secondary School Certificate</h3>
                    <p class="card-subtitle">Bindubasini Govt. Boys' High School, Tangail</p>
                    <p>01/2012 - 02/2017</p>
                    <p>GPA: 5.00</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements">
        <div class="container">
            <h2 class="section-title">Achievements</h2>
            <div class="achievements-container">
                <div class="achievement-card">
                    <img src="https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-6/495177145_987680640233487_2083725387761585518_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mjCQik-9r7UQ7kNvwFnjr4T&_nc_oc=AdlsvCDY1qgB0qkG381fj9HjcCLftKCpU2AXs14XKP2UsNgHsN4BFefJzsTdnyTXBJY&_nc_zt=23&_nc_ht=scontent.fdac19-1.fna&_nc_gid=JVcw6PQalM_A4FAkQGZfdw&oh=00_AfRnADFFy9XN8qL9waKDecnDEFnwixXEn1bPq_lJiOmVDA&oe=687D9FEE" alt="Innovation Challenge" class="achievement-img">
                    <div class="achievement-overlay">
                        <h3 class="achievement-title">1st Runner Up - INNOVATION CHALLENGE</h3>
                        <p class="achievement-desc">Season - 16 (04/2025)</p>
                        <p class="achievement-desc">NSU ECE CAPSTONE DESIGN PROJECT SHOWCASE</p>
                    </div>
                    <a href="#achievement-details" class="achievement-link"></a>
                </div>
                 <!--<div class="achievement-card">
                    <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Academic Excellence" class="achievement-img">
                    <div class="achievement-overlay">
                        <h3 class="achievement-title">Academic Excellence</h3>
                        <p class="achievement-desc">Consistent high performance throughout academic career</p>
                        <p class="achievement-desc">Perfect GPA in Secondary School Certificate</p>
                    </div>
                    <a href="#achievement-details" class="achievement-link"></a>
                </div>
                <div class="achievement-card">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Project Leadership" class="achievement-img">
                    <div class="achievement-overlay">
                        <h3 class="achievement-title">Project Leadership</h3>
                        <p class="achievement-desc">Successfully led multiple cross-functional teams</p>
                        <p class="achievement-desc">Delivered complex AI projects on time</p>
                    </div>
                    <a href="#achievement-details" class="achievement-link"></a>
                </div> -->
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <div class="container">
            <h2 class="section-title">Projects</h2>
            
            <div class="project-categories">
                <button class="category-btn active" data-category="all">All Projects</button>
                <button class="category-btn" data-category="ml">ML/DL Projects</button>
                <button class="category-btn" data-category="web">Web Development</button>
                <button class="category-btn" data-category="other">Other Projects</button>
            </div>
            
            <!-- ML/DL Projects -->
            <div class="project-category active" id="ml-projects">
                <div class="projects-grid">
                    <div class="card project-card" data-project="postureaware" data-type="ml">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="PostureAware Project" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">PostureAware</h3>
                            <p>Multimodal Deep Learning Approach for Pain Assessment</p>
                        </div>
                    </div>
                    <div class="card project-card" data-project="youtube" data-type="ml">
                        <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="YouTube Project" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">YouTube Video Success Prediction</h3>
                            <p>Machine Learning model to classify video success</p>
                        </div>
                    </div>
                    <div class="card project-card" data-project="skincancer" data-type="ml">
                        <img src="https://analyticsindiamag.com/wp-content/uploads/2018/04/scdl-1.jpg" alt="Skin Cancer Project" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">Skin Cancer Classification</h3>
                            <p>Hybrid Deep Learning with Clinical Metadata</p>
                        </div>
                    </div>
                    <div class="card project-card" data-project="astar" data-type="ml">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="A* Algorithm Project" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">Optimized A* Algorithm</h3>
                            <p>With Weighted Heuristics for Pathfinding</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Web Development Projects -->
            <div class="project-category" id="web-projects">
                <div class="projects-grid">
                    <div class="card project-card" data-project="virtualexam" data-type="web">
                        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Virtual Exam Project" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">VirtualExam</h3>
                            <p>Comprehensive online examination system</p>
                        </div>
                    </div>
                    <div class="card project-card" data-project="clubmanagement" data-type="web">
                        <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80" alt="Club Management Project" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">ClubManagementBD</h3>
                            <p>Complete sports club management system</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Other Projects -->
            <div class="project-category" id="other-projects">
                <div class="projects-grid">
                    <div class="card project-card" data-project="sap1" data-type="other">
                        <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="SAP-1 Project" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">SAP-1 Microcomputer</h3>
                            <p>Digital logic implementation in Logisim</p>
                        </div>
                    </div>
                    <div class="card project-card" data-project="obstaclecar" data-type="other">
                        <img src="https://media.licdn.com/dms/image/v2/D562DAQHJ7DOAYFPJ-Q/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1705081520757?e=1753286400&v=beta&t=P3-OgQhl-sy6JldkXUMJRr09VGp0gQlU2V01wROrKRE" alt="Obstacle Avoiding Car" class="project-img">
                        <div class="project-content">
                            <h3 class="project-title">Obstacle Avoiding Car</h3>
                            <p>Autonomous vehicle with ultrasonic sensors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Project Modals -->
    <div class="modal" id="postureaware-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">PostureAware</h2>
                <p class="modal-subtitle">A Multimodal Deep Learning Approach for Pain Assessment using Wearable Sensors</p>
            </div>
            <div class="modal-body">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="PostureAware Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>Developed a multimodal deep learning model combining CNN-LSTM for time-series sensor data and MLP for user metadata to predict pain intensity, frequency, and location among garment workers.</p>
                    <p>The system uses wearable sensors to monitor posture and movement patterns, correlating them with self-reported pain data to create predictive models that can identify early signs of work-related musculoskeletal disorders.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Technical Details</h3>
                    <p>The model architecture combines:</p>
                    <ul>
                        <li>CNN layers for spatial feature extraction from sensor arrays</li>
                        <li>LSTM layers for temporal pattern recognition</li>
                        <li>MLP branch for processing demographic and work-related metadata</li>
                        <li>Fusion layer to combine multimodal inputs</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">TensorFlow</span>
                        <span class="tech-item">Keras</span>
                        <span class="tech-item">Pandas</span>
                        <span class="tech-item">NumPy</span>
                        <span class="tech-item">Matplotlib</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>Achieved 87% accuracy in pain intensity prediction and 82% accuracy in pain location classification, significantly outperforming single-modality approaches.</p>
                    <p>The system demonstrated potential for early intervention in occupational health settings, with promising results in field tests with garment factory workers.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="youtube-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">YouTube Video Success Prediction</h2>
                <p class="modal-subtitle">A Machine Learning Perspective</p>
            </div>
            <div class="modal-body">
                <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="YouTube Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>Developed a predictive pipeline to classify Bangla YouTube video success using a self-curated dataset from YouTube Data API V3 (16,000+ videos).</p>
                    <p>The system analyzes video metadata, content features, and early performance metrics to predict long-term success, helping content creators optimize their strategies.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Technical Details</h3>
                    <p>Key components include:</p>
                    <ul>
                        <li>Custom YouTube API data collection pipeline</li>
                        <li>Feature engineering for video performance metrics</li>
                        <li>Text processing for Bangla video titles and descriptions</li>
                        <li>Comparative analysis of multiple ML classifiers</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">Scikit-learn</span>
                        <span class="tech-item">XGBoost</span>
                        <span class="tech-item">YouTube API</span>
                        <span class="tech-item">NLTK</span>
                        <span class="tech-item">Pandas</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>Trained and fine-tuned Decision Tree, Random Forest, KNN, and XGBoost classifiers using RandomizedSearchCV and Stratified K-Fold Cross-Validation.</p>
                    <p>XGBoost achieved the best performance with 78% accuracy in classifying videos into success categories, providing actionable insights for content creators.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="skincancer-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">Advanced Skin Cancer Classification</h2>
                <p class="modal-subtitle">Hybrid Deep Learning and Clinical Metadata Integration</p>
            </div>
            <div class="modal-body">
                <img src="https://analyticsindiamag.com/wp-content/uploads/2018/04/scdl-1.jpg" alt="Skin Cancer Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>Employed ISIC dataset comprising 10,000+ annotated images and patient data for binary classification (benign vs. malignant).</p>
                    <p>The hybrid model combines visual analysis of dermatoscopic images with clinical patient data to improve diagnostic accuracy beyond image-only approaches.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Technical Details</h3>
                    <p>Model architecture features:</p>
                    <ul>
                        <li>Custom CNN architecture for image feature extraction</li>
                        <li>Metadata processing pipeline for clinical data</li>
                        <li>Attention mechanisms for focus on lesion features</li>
                        <li>Grad-CAM visualization for model interpretability</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">TensorFlow</span>
                        <span class="tech-item">Keras</span>
                        <span class="tech-item">OpenCV</span>
                        <span class="tech-item">Matplotlib</span>
                        <span class="tech-item">Pandas</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>Achieved 92% accuracy in classification, outperforming dermatologist benchmarks on the same dataset.</p>
                    <p>The integration of clinical metadata improved model performance by 8% compared to image-only approaches, demonstrating the value of multimodal medical AI systems.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="insurance-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">Medical Insurance Cost Prediction</h2>
                <p class="modal-subtitle">Machine Learning Regression Model</p>
            </div>
            <div class="modal-body">
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Insurance Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>Constructed and trained a machine learning regression model to predict medical insurance costs based on demographic and medical factors.</p>
                    <p>The system helps insurance providers set accurate premiums and enables consumers to understand cost drivers in healthcare expenses.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Technical Details</h3>
                    <p>Key features include:</p>
                    <ul>
                        <li>Comprehensive EDA to identify cost correlations</li>
                        <li>Feature engineering for medical and demographic data</li>
                        <li>Comparison of multiple regression approaches</li>
                        <li>SHAP value analysis for model interpretability</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">Scikit-learn</span>
                        <span class="tech-item">XGBoost</span>
                        <span class="tech-item">SHAP</span>
                        <span class="tech-item">Matplotlib</span>
                        <span class="tech-item">Seaborn</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>Achieved an R² score of 0.87, significantly outperforming traditional actuarial methods on the same dataset.</p>
                    <p>Identified smoking status, BMI, and age as the most significant cost drivers, providing actionable insights for both insurers and policyholders.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="astar-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">Optimized A* Algorithm</h2>
                <p class="modal-subtitle">With Weighted Heuristics for Pathfinding</p>
            </div>
            <div class="modal-body">
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="A* Algorithm Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>Pathfinding is a critical task in robotics, gaming, and AI, requiring algorithms that are both efficient and accurate. Among these, the A* algorithm is a cornerstone for its balance between optimality and computational efficiency.</p>
                    <p>This project presents an in-depth analysis comparing the classic A* algorithm with an enhanced variant, employing weighted heuristics and early stopping techniques to optimize performance.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Technical Details</h3>
                    <p>Key features include:</p>
                    <ul>
                        <li>Implementation of classic A* algorithm with Manhattan distance heuristic</li>
                        <li>Enhanced version with weighted heuristics for faster convergence</li>
                        <li>Early stopping techniques to reduce unnecessary computations</li>
                        <li>Comparative analysis across multiple randomized environments</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">NumPy</span>
                        <span class="tech-item">Matplotlib</span>
                        <span class="tech-item">Pygame</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>Experimental results reveal that the enhanced algorithm achieves significant improvements in computational efficiency while maintaining path optimality, making it a viable choice for real-time applications.</p>
                    <p>The weighted heuristic approach reduced computation time by 35% on average while maintaining 98% of the path optimality of the classic A* algorithm.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="virtualexam-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">VirtualExam</h2>
                <p class="modal-subtitle">Comprehensive Online Examination System</p>
            </div>
            <div class="modal-body">
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Virtual Exam Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>VirtualExam is a comprehensive online examination system designed to streamline the process of creating, managing, and conducting exams in educational institutions.</p>
                    <p>This project aims to address the challenges of traditional examination methods by providing a flexible, efficient, and secure digital platform for both administrators and students.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Key Features</h3>
                    <ul>
                        <li>Streamlined examination processes with intuitive interface for creating and scheduling exams</li>
                        <li>Automated grading for objective-type questions with instant feedback</li>
                        <li>Enhanced accessibility with mobile-friendly responsive design</li>
                        <li>Robust security measures including randomized questions and time limits</li>
                        <li>Comprehensive course management with student enrollment</li>
                        <li>Detailed performance analysis and reports</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">PHP</span>
                        <span class="tech-item">JavaScript</span>
                        <span class="tech-item">Bootstrap</span>
                        <span class="tech-item">MySQL</span>
                        <span class="tech-item">Apache</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>The system was successfully deployed in a test environment with over 200 students, demonstrating significant improvements in examination efficiency and reduced administrative workload.</p>
                    <p>Feedback from users highlighted the intuitive interface and reliability of the system as key strengths.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="clubmanagement-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">ClubManagementBD</h2>
                <p class="modal-subtitle">Complete Sports Club Management System</p>
            </div>
            <div class="modal-body">
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80" alt="Club Management Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>A comprehensive sports club management system built with PHP, HTML, CSS, and JavaScript.</p>
                    <p>The system provides complete CRUD operations for club management, team management, players management, tournament management, results management, scores, and more.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Key Features</h3>
                    <ul>
                        <li>Complete club management with member registration and profiles</li>
                        <li>Team creation and player management</li>
                        <li>Tournament scheduling and management</li>
                        <li>Real-time score tracking and results management</li>
                        <li>Comprehensive reporting and statistics</li>
                        <li>User-friendly administrative dashboard</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">PHP</span>
                        <span class="tech-item">HTML5</span>
                        <span class="tech-item">CSS3</span>
                        <span class="tech-item">JavaScript</span>
                        <span class="tech-item">MySQL</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>The system was successfully implemented for a local sports club, streamlining their operations and reducing administrative workload by approximately 60%.</p>
                    <p>The intuitive interface received positive feedback from both administrators and club members.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="sap1-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">SAP-1 Microcomputer</h2>
                <p class="modal-subtitle">Digital Logic Implementation in Logisim</p>
            </div>
            <div class="modal-body">
                <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="SAP-1 Project" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>The SAP-1 (Simple as Possible) microcomputer is a foundational model for understanding basic computer architecture.</p>
                    <p>This project implements a SAP-1 design in Logisim, a digital logic circuit simulation tool. The microcomputer supports five operations: LDA (Load Accumulator), ADD, SUB, OUT (Output), and HLT (Halt), demonstrating the core functionalities of a basic von Neumann architecture.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">System Components</h3>
                    <ul>
                        <li>Program Counter (PC): Manages instruction sequencing</li>
                        <li>Memory Address Register (MAR): Stores instruction addresses</li>
                        <li>Random Access Memory (RAM): Stores instructions and data</li>
                        <li>Instruction Register (IR): Holds current instruction</li>
                        <li>Controller/Sequencer: Generates control signals</li>
                        <li>Arithmetic Logic Unit (ALU): Performs arithmetic operations</li>
                        <li>Accumulator (ACC): Stores ALU results</li>
                        <li>B Register: Temporary data storage</li>
                        <li>Output Register: Displays results</li>
                        <li>Clock: Synchronizes operations</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">Logisim</span>
                        <span class="tech-item">Digital Logic</span>
                        <span class="tech-item">Computer Architecture</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>The project successfully demonstrated the fundamental operations of a basic computer system, providing valuable insights into computer architecture principles.</p>
                    <p>The implementation was able to execute all five designed operations correctly, validating the design approach.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="obstaclecar-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">Obstacle Avoiding Car</h2>
                <p class="modal-subtitle">Autonomous Vehicle with Ultrasonic Sensors</p>
            </div>
            <div class="modal-body">
                <img src="https://media.licdn.com/dms/image/v2/D562DAQHJ7DOAYFPJ-Q/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1705081520757?e=1753286400&v=beta&t=P3-OgQhl-sy6JldkXUMJRr09VGp0gQlU2V01wROrKRE" alt="Obstacle Avoiding Car" class="modal-img">
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Project Overview</h3>
                    <p>The Obstacle Avoiding Car is an innovative and autonomous vehicle designed to navigate its surroundings intelligently and avoid obstacles in its path.</p>
                    <p>This project combines the power of Arduino Uno R3, HC SR04 ultrasonic sensors, L293D Motor Driver Shield, servo motor, and DC motors to create a versatile and efficient obstacle avoidance system.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">System Components</h3>
                    <ul>
                        <li>Arduino Uno R3: The microcontroller that processes sensor data and controls the system</li>
                        <li>HC SR04 Ultrasonic Sensors: For obstacle detection using ultrasonic waves</li>
                        <li>L293D Motor Driver Shield: Controls the DC motors that drive the car's wheels</li>
                        <li>Servo Motor: Controls the orientation of the ultrasonic sensors for environment scanning</li>
                        <li>DC Motors: Drive the wheels of the car with precise control</li>
                    </ul>
                    
                    <div class="tech-stack">
                        <span class="tech-item">Arduino</span>
                        <span class="tech-item">C++</span>
                        <span class="tech-item">Embedded Systems</span>
                        <span class="tech-item">Electronics</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">How It Works</h3>
                    <p>The HC SR04 sensors continuously send and receive ultrasonic signals, allowing the Arduino Uno to calculate the distances to surrounding objects. When an obstacle is detected within a predefined range, the Arduino triggers the servo motor to rotate the sensors for a better view.</p>
                    <p>Based on the gathered information, the Arduino then commands the DC motors through the L293D Motor Driver Shield to navigate around obstacles, ensuring a collision-free path.</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Results</h3>
                    <p>The car successfully navigated complex environments with multiple obstacles, demonstrating reliable obstacle detection and avoidance capabilities.</p>
                    <p>The project was showcased at the university tech fair and received recognition for its innovative approach to autonomous navigation.</p>
                    <p><a href="https://lnkd.in/gUUm3stF" target="_blank" style="color: var(--primary); text-decoration: none; font-weight: 500;">Check out the project with photos here</a></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Skills Section -->
    <section id="skills">
        <div class="container">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="card">
                <div class="skills-container">
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fab fa-python"></i></div>
                        <h3>Python</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-database"></i></div>
                        <h3>Data Curation</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-robot"></i></div>
                        <h3>AI Models</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-users"></i></div>
                        <h3>Team Leadership</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-comments"></i></div>
                        <h3>Technical Communication</h3>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fas fa-fire"></i></div>
                        <h3>Work Under Pressure</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                    <div>
                        <h3>Email</h3>
                        <p>tahsinrefat2@gmail.com</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-phone"></i></div>
                    <div>
                        <h3>Phone</h3>
                        <p>+88 01832 433260</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div>
                        <h3>Location</h3>
                        <p>Bashundhara R/A, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="social-links">
                <a href="https://linkedin.com/in/tahsinrefat2" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/tahsinrefat2" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:tahsinrefat2@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>
            <p>&copy; 2025 Tahsinul Refat. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Particles animation for background
        const canvas = document.querySelector('.particles');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, 255, ${Math.random() * 0.5 + 0.2})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function createParticles() {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            
            requestAnimationFrame(animateParticles);
        }

        // Initialize particles
        createParticles();
        animateParticles();

        // Handle window resize
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = 'none';
            }
        });

        // Project card animations
        const projectCards = document.querySelectorAll('.project-card, .achievement-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.03)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });

        // Project modal functionality
        const modals = {
            'postureaware': document.getElementById('postureaware-modal'),
            'youtube': document.getElementById('youtube-modal'),
            'skincancer': document.getElementById('skincancer-modal'),
            'insurance': document.getElementById('insurance-modal'),
            'astar': document.getElementById('astar-modal'),
            'virtualexam': document.getElementById('virtualexam-modal'),
            'clubmanagement': document.getElementById('clubmanagement-modal'),
            'sap1': document.getElementById('sap1-modal'),
            'obstaclecar': document.getElementById('obstaclecar-modal')
        };

        // Open modal when project card is clicked
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Check if click was on the achievement link
                if (e.target.classList.contains('achievement-link')) {
                    return; // Let the link handle navigation
                }
                
                const projectId = card.getAttribute('data-project');
                const modal = modals[projectId];
                
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal when X is clicked
        document.querySelectorAll('.close-modal').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const modal = closeBtn.closest('.modal');
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close modal when clicking outside content
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    if (modal.classList.contains('active')) {
                        modal.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });

        // Project category filtering
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Get category
                const category = btn.getAttribute('data-category');
                
                // Show/hide categories
                if (category === 'all') {
                    document.querySelectorAll('.project-category').forEach(cat => {
                        cat.classList.add('active');
                    });
                } else {
                    document.querySelectorAll('.project-category').forEach(cat => {
                        cat.classList.remove('active');
                    });
                    document.getElementById(`${category}-projects`).classList.add('active');
                }
            });
        });

        // Animate elements when they come into view
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.card, .section-title, .skill-item, .contact-item, .achievement-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('fade-in');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
    </script>
</body>
</html>
