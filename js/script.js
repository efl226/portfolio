// --- CUSTOM CURSOR LOGIC ---
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, .project-card, button, .skill-tag')) cursor.style.transform = 'scale(3)';
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, .project-card, button, .skill-tag')) cursor.style.transform = 'scale(1)';
        });

        // --- PROJECT CONTENT DATABASE ---
        const projectPages = {
            ipsos: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                <header class="cs-hero reveal">
                    <h1 class="cs-title">Ipsos Growth Hub:<br>Architecting an AI Ecosystem</h1>
                    <div class="cs-meta-grid">
                        <div><span>Role</span>Lead Technical Architect</div>
                        <div><span>Tech</span>Vertex AI, Power Automate, SharePoint API</div>
                        <div><span>Scope</span>Global Enterprise (200+ Users)</div>
                        <div><span>Year</span>2024</div>
                    </div>
                </header>
                <!-- Added onerror fallback to help debug -->
                <img 
                    src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/ContentHubPhoto.png" 
                    class="full-width-img reveal" 
                    onerror="this.onerror=null; this.src='https://via.placeholder.com/2000x1000/1a1a1a/b7ff00?text=IMAGE+NOT+FOUND+(CHECK+REPO+PRIVACY)';"
                    alt="Ipsos Content Hub Interface"
                >
                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div><span class="cs-label">The Challenge</span><h2 class="cs-big-text">Overcoming Enterprise Scale & Decentralization</h2></div>
                        <div><p style="color: #aaa; margin-bottom: 2rem;">As a global leader in market research, Ipsos struggled with "knowledge silos." Critical documentation was decentralized and difficult to discover. Standard low-code solutions failed at scale, hitting 2,000-item delegation limits.</p><div class="cs-stat-box"><div class="cs-stat-number">20k+</div><span class="cs-stat-label">ASSETS INDEXED</span></div></div>
                    </div>
                </section>
                <section class="cs-section reveal">
                    <span class="cs-label">The Hybrid Strategy</span><h2 class="cs-big-text" style="margin-bottom: 4rem;">Backend Engineering meets UX</h2>
                    <div class="cs-grid-2">
                        <div class="cs-tech-diagram"><h4 style="color: white; margin-bottom: 1rem;">// THE BACKEND PIVOT</h4><p>Bypassed SharePoint limitations by re-engineering the pipeline through Power Automate to communicate directly with the Search API via custom HTTP requests.</p><img 
                                src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/Screenshot%202025-08-07%20131821.png" 
                                style="display: block; margin: 2rem auto 0 auto; width: 50%; border: 1px solid var(--border);" 
                                alt="Backend Architecture Diagram"
                            ></div>
                        <div><h4 style="color: white; margin-bottom: 1rem; text-transform: uppercase;">User-Centric Framework</h4><p style="color: #aaa; margin-bottom: 2rem;">I didn't just build a database; I built a product. Using the "Jobs To Be Done" (JTBD) framework, I mapped distinct user journeys for six specific roles.</p><div style="background: var(--surface); padding: 2rem; border-left: 2px solid var(--accent);"><strong style="color: white; display: block; margin-bottom: 0.5rem;">Intelligent Indexing</strong><p style="font-size: 0.9rem; color: #888;">Structured data for Google Vertex AI Search, allowing the system to index not just titles, but the actual contents of the documents.</p></div></div>
                    </div>
                </section>
                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div><span class="cs-label">Measurable Impact</span></div>
                        <div><ul class="cs-impact-list" style="color: #ccc;"><li><strong>Scalability:</strong> Architected a system that handles global-scale documentation without bottlenecks.</li><li><strong>High-Stakes Delivery:</strong> Presented the functional MVP to 200+ employees at the NY Town Hall.</li><li><strong>Continuity:</strong> Led the technical handover for outside contractors.</li></ul></div>
                    </div>
                </section>
            `,
            sway: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                <header class="cs-hero reveal"><h1 class="cs-title">Sway:<br>Zero-to-One Event Ecosystem</h1><div class="cs-meta-grid"><div><span>Role</span>Product Manager & Lead Designer</div><div><span>Tech</span>Figma, Bubble.io, Airtable, Stripe</div><div><span>Timeline</span>1 Month (MVP)</div><div><span>Type</span>Startup / FinTech</div></div></header>
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000" class="full-width-img reveal">
                <section class="cs-section reveal"><div class="cs-grid-2"><div><span class="cs-label">The Startup Hustle</span><h2 class="cs-big-text">Intern to Lead PM</h2></div><div><p class="large-p">I joined Sway as a UX Intern, but quickly earned the CEO's trust to lead the product. My mission was to architect a seamless event management ecosystem from scratch.</p><div style="margin-top: 3rem; border-left: 2px solid var(--accent); padding-left: 2rem;"><h4 style="color:white; margin-bottom: 1rem;">THE SPRINT STRATEGY</h4><p style="color: #aaa;">I structured the roadmap into <strong>three 2-week sprints</strong>, managing a team of three developers to hit an aggressive MVP deadline.</p></div></div></div></section>
                <section class="cs-section reveal"><span class="cs-label">Feature Deep Dive</span><h2 class="cs-big-text">FinTech Trust & Complex IA</h2><p style="color: #aaa; max-width: 600px; margin-bottom: 4rem;">Designing for transparency in high-value transactions and simplifying complex financial data.</p><div class="cs-gallery-grid"><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Payment+Confirmation+UI"><span class="cs-gallery-caption">01 // Payment Transparency</span></div><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Booking+Overview+UI"><span class="cs-gallery-caption">02 // Booking Overview</span></div><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Budget+Builder+Tool"><span class="cs-gallery-caption">03 // Budget Builder</span></div><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Agenda+Builder+UI"><span class="cs-gallery-caption">04 // Agenda Builder</span></div></div></section>
                <section class="cs-section reveal"><div class="cs-grid-2"><div class="cs-tech-diagram"><h4 style="color: white; margin-bottom: 1rem;">// LOW-CODE / HIGH-LOGIC</h4><p>Architected a bridge between Figma designs and a functional Bubble.io frontend, powered by robust Airtable & Stripe pipelines.</p><div class="code-snippet"><span class="fn">stripe.webhook</span> -> <span class="hl">Airtable Automation</span><br><span class="fn">IF</span> status == 'succeeded':<br>&nbsp;&nbsp;<span class="hl">Bubble_DB</span>.update(booking_status)<br>&nbsp;&nbsp;<span class="hl">User_UI</span>.trigger(confetti_animation)</div></div><div><span class="cs-label">Reflections</span><h3 style="color: white; font-size: 2rem; margin-bottom: 1rem;">Transparency is Key</h3><p style="color: #aaa; font-size: 1.1rem; line-height: 1.6;">Leading this project taught me that in FinTech, clarity isn't just aesthetic—it's functional. By prioritizing "Payment Transparency" and flexible "Management Suites," we reduced user anxiety and increased conversion.</p></div></div></section>
            `,
            bardive: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                <header class="cs-hero reveal"><h1 class="cs-title">BarDive:<br>Social Transparency for Nightlife</h1><div class="cs-meta-grid"><div><span>Role</span>Co-Founder & Lead Designer</div><div><span>Tech</span>React Native, Firebase, Google Maps API</div><div><span>Status</span>Seed Funded ($1K)</div><div><span>Year</span>2023</div></div></header>
                <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=2000" class="full-width-img reveal">
                <section class="cs-section reveal"><div class="cs-grid-2"><div><span class="cs-label">The Mission</span><h2 class="cs-big-text">Revitalizing Local Nightlife</h2><p class="large-p" style="margin-top: 2rem;">Addressing the "FOMO" problem space by providing real-time transparency into bar occupancy and social vibes.</p></div><div><div style="background: var(--surface); padding: 2rem; border-left: 2px solid var(--accent); margin-bottom: 2rem;"><strong style="color: white; display: block; margin-bottom: 0.5rem;">User Research Strategy</strong><p style="font-size: 0.9rem; color: #888;">We interviewed <strong>200+ college students</strong> and <strong>8 bar owners</strong>. The insight? Students fear missing out but also fear empty bars. Bar owners wanted a way to broadcast "hype" without expensive ads.</p></div><div class="cs-stat-box"><div class="cs-stat-number">200+</div><span class="cs-stat-label">USER INTERVIEWS CONDUCTED</span></div></div></div></section>
                <section class="cs-section reveal"><span class="cs-label">Competitive Differentiation</span><h2 class="cs-big-text">Contextual Privacy vs. The Giants</h2><div class="cs-grid-2"><div><p style="color: #aaa; margin-bottom: 2rem;">Apps like Snap Maps track you everywhere. Apps like BarGlance are often outdated. BarDive solves this through <strong>Contextual Privacy</strong>: location sharing only activates when you check in at a registered partner bar.</p><table class="comparison-table"><thead><tr><th>Feature</th><th>Snap Maps</th><th>BarDive</th></tr></thead><tbody><tr><td>Location Tracking</td><td>Always On (Creepy)</td><td>Only at Partner Bars</td></tr><tr><td>Social Focus</td><td>Broad / Friends</td><td>Nightlife / Events</td></tr><tr><td>Data Privacy</td><td>Low</td><td>High (Self-Expiring)</td></tr></tbody></table></div><div class="cs-tech-diagram"><h4 style="color: white; margin-bottom: 1rem;">// THE BIO-PIC MAP</h4><p>The map logic prioritizes "Visual Density" over precise tracking. Clusters of user profile pictures indicate occupancy.</p><div class="code-snippet"><span class="fn">const</span> <span class="hl">MapMarker</span> = (user) => {<br>&nbsp;&nbsp;<span class="fn">if</span> (!user.isCheckedIn) <span class="hl">return null</span>;<br>&nbsp;&nbsp;<span class="hl">return</span> &lt;BioPic expiry={user.checkInTime + 4h} /&gt;<br>}</div></div></div></section>
                <section class="cs-section reveal"><span class="cs-label">Safety-First Design</span><h2 class="cs-big-text" style="margin-bottom: 3rem;">Designing for a Safe Night Out</h2><div class="cs-grid-2"><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Safe+Night+Out+Resources"><span class="cs-gallery-caption">Self-Expiring Location</span><p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">Locations automatically vanish after 4 hours or upon checkout.</p></div><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Resource+Hub+UI"><span class="cs-gallery-caption">Resource Hub</span><p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">Integrated one-tap access to campus safety, Uber/Lyft, and emergency contacts.</p></div></div></section>
                <section class="cs-section reveal"><div class="cs-grid-2"><div><span class="cs-label">Pitch & Validation</span><h3 style="color: white; font-size: 2rem; margin-bottom: 1rem;">From Figma to Funding</h3><p style="color: #aaa; font-size: 1.1rem; line-height: 1.6;">Our user-centric approach won the <strong>Eureka Pitch Night</strong>, securing $1,000 in seed funding to move from high-fidelity Figma prototypes to a functional React Native MVP.</p></div><div><span class="cs-label">Founder's Reflection</span><div style="background: #111; padding: 2rem; border: 1px dashed var(--border);"><p style="color: #ccc; font-style: italic;">"The biggest challenge wasn't the code—it was the balance. Wearing the hats of both Lead Designer and Front-End Engineer taught me that the best code is often the code you <strong>don't</strong> write."</p></div></div></div></section>
            `,
            resonant: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                <header class="cs-hero reveal"><h1 class="cs-title">ResonantDesign:<br>The Hybrid Archive System</h1><div class="cs-meta-grid"><div><span>Role</span>Full Stack Developer</div><div><span>Tech</span>React, Python, NLP</div><div><span>Status</span>Hi-Fi Prototype</div><div><span>Year</span>2024</div></div></header>
                <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=2000" class="full-width-img reveal">
                <section class="cs-section reveal"><div class="cs-grid-2"><div><span class="cs-label">The Challenge</span><h2 class="cs-big-text">The Crisis of Connection</h2><p class="large-p" style="margin-top: 2rem;">Platforms like Spotify treat music as disposable utility—"background noise" optimized for retention rather than engagement.</p></div><div><div style="background: var(--surface); padding: 2rem; border-left: 2px solid var(--accent); margin-bottom: 2rem;"><strong style="color: white; display: block; margin-bottom: 0.5rem;">The Solution: Latent Space Navigation</strong><p style="font-size: 0.9rem; color: #888;">ResonantDesign re-imagines the music library not as a list, but as a <strong>living neural network</strong>.</p></div></div></div></section>
                <section class="cs-section reveal"><span class="cs-label">Technical Highlight</span><h2 class="cs-big-text">The Python Intelligence Pipeline</h2><div class="cs-grid-2"><div><p style="color: #aaa; margin-bottom: 2rem;">The core of the system is a custom Python ETL pipeline that automates the "Intelligence." It fetches metadata from MusicBrainz, lyrics from Genius, and then uses <strong>NLP Vector Embeddings</strong> to mathematically calculate the relationship between every album in your library.</p><ul class="cs-impact-list" style="color: #ccc; font-size: 0.9rem;"><li><strong>Ingestion:</strong> Automated fetching via Last.fm & Genius APIs.</li><li><strong>Vectorization:</strong> Uses <code>sentence-transformers</code> to convert lyrics to high-dimensional vectors.</li><li><strong>Math:</strong> Calculates Cosine Similarity to generate the graph edges.</li></ul></div><div class="cs-tech-diagram"><h4 style="color: white; margin-bottom: 1rem;">// THE DNA SCHEMA</h4><p>Albums are broken down into four distinct dimensions for analysis.</p><div class="code-snippet"><span class="fn">class</span> <span class="hl">AlbumDNA</span>:<br>&nbsp;&nbsp;visual: ColorPalette<br>&nbsp;&nbsp;sonic: BPM_Energy_Vector<br>&nbsp;&nbsp;genetic: Credits_List<br>&nbsp;&nbsp;semantic: <span class="fn">Lyrical_Embedding(768)</span></div></div></div></section>
                <section class="cs-section reveal"><span class="cs-label">Key Features</span><h2 class="cs-big-text" style="margin-bottom: 3rem;">UX Mechanics of the Archive</h2><div class="cs-gallery-grid"><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=The+Passport+UI"><span class="cs-gallery-caption">The Passport</span></div><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Neural+Filters+UI"><span class="cs-gallery-caption">Neural Filters</span></div><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Spotlight+Mode+UI"><span class="cs-gallery-caption">Spotlight Mode</span></div><div class="cs-gallery-item"><img src="https://via.placeholder.com/600x400/1a1a1a/555?text=Graph+View+UI"><span class="cs-gallery-caption">Force-Directed Graph</span></div></div></section>
            `
        };

        // --- NAVIGATION LOGIC ---
        function openProject(id) {
            const container = document.getElementById('project-view');
            const home = document.getElementById('home-view');
            const about = document.getElementById('about-view');
            const nav = document.getElementById('main-nav');

            container.innerHTML = projectPages[id] || projectPages['ipsos'];
            
            home.style.display = 'none';
            about.style.display = 'none';
            container.style.display = 'block';
            
            window.scrollTo(0, 0);
            initObservers();
        }

        function showHome() {
            document.getElementById('project-view').style.display = 'none';
            document.getElementById('about-view').style.display = 'none';
            document.getElementById('home-view').style.display = 'block';
            window.scrollTo(0, 0);
            initObservers();
        }

        function showAbout() {
            document.getElementById('home-view').style.display = 'none';
            document.getElementById('project-view').style.display = 'none';
            document.getElementById('about-view').style.display = 'block';
            window.scrollTo(0, 0);
            initObservers();
        }

        // --- ANIMATION OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        function initObservers() {
            setTimeout(() => {
                document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
            }, 100);
        }

        window.onload = () => {
            initObservers();
            lucide.createIcons();
        };