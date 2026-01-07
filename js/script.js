const projectData = {
            p1: {
                title: "Ipsos Growth Hub",
                role: "UX/UI Designer & Lead Developer",
                techList: "Microsoft Power Platform, Google Cloud, Figma",
                objective: "Ipsos's critical documentation was decentralized across various resources. This made it difficult for employees to discover relevant information efficiently, leading to wasted time and knowledge silos.",
                logic: "Move beyond a simple file storage system and create a single, intelligent, and scalable application that could serve as the central knowledge base for the entire company. The goal was to build an intuitive platform that would not only house tens of thousands of documents but also allow users to find the exact information they needed through powerful, context-aware search and filtering.",
                hero: "https://www.usailighting.com/stuff/contentmgr/files/4/eff41788426238be72adec33178e2b5f/image/ipsos200park_pho_002_web_large.jpg"
            },
            p2: {
                title: "Ipsos Growth Hub",
                role: "UX/UI Designer & Lead Developer",
                techList: "Microsoft Power Platform, Google Cloud, Figma",
                objective: "Ipsos's critical documentation was decentralized across various resources. This made it difficult for employees to discover relevant information efficiently, leading to wasted time and knowledge silos.",
                logic: "Move beyond a simple file storage system and create a single, intelligent, and scalable application that could serve as the central knowledge base for the entire company. The goal was to build an intuitive platform that would not only house tens of thousands of documents but also allow users to find the exact information they needed through powerful, context-aware search and filtering.",
                hero: "https://via.placeholder.com/1600x900/141414/ffffff?text=KINETIX+HARDWARE"
            },
            p3: {
                title: "EcoStat",
                role: "Frontend Engineer",
                techList: "D3.js, WebGL, Node.js",
                objective: "Translating invisible environmental sensor data into high-fidelity, real-time storytelling tools.",
                logic: "d3.csv('/api/sensors').then(data => {\n  renderFluidSim(data);\n  // Animation loop at 60fps for data flow\n});",
                hero: "https://via.placeholder.com/1600x900/141414/ffffff?text=ECOSTAT+VISUALS"
            }
        };
        // Custom Cursor
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Hover scales for cursor
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, .project-card, button')) {
                cursor.style.transform = 'scale(3)';
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, .project-card, button')) {
                cursor.style.transform = 'scale(1)';
            }
        });


        // Navigation Logic
        function openProject(id) {
            const data = projectData[id] || projectData.p1;
            document.getElementById('p-title').innerText = data.title;
            document.getElementById('p-role').innerText = data.role;
            document.getElementById('p-tech-list').innerText = data.techList;
            document.getElementById('p-objective').innerText = data.objective;
            document.getElementById('p-logic').innerText = data.logic;
            document.getElementById('p-hero').src = data.hero;

            document.getElementById('home-view').style.display = 'none';
            document.getElementById('main-nav').style.display = 'none';
            document.getElementById('project-view').style.display = 'block';
            window.scrollTo(0, 0);
            initObservers();
        }

        function showHome() {
            document.getElementById('home-view').style.display = 'block';
            document.getElementById('main-nav').style.display = 'flex';
            document.getElementById('project-view').style.display = 'none';
            window.scrollTo(0, 0);
            initObservers();
        }

        // Animation Observers
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        function initObservers() {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }

        window.onload = () => {
            initObservers();
            lucide.createIcons();
        };