// --- CUSTOM CURSOR LOGIC ---
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, .project-card, button, .skill-tag, .gallery-thumb')) cursor.style.transform = 'scale(3)';
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, .project-card, button, .skill-tag, .gallery-thumb')) cursor.style.transform = 'scale(1)';
        });

        // --- PROJECT CONTENT DATABASE ---
        const projectPages = {
            ipsos: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                
                <header class="cs-hero reveal">
                    <div style="display: flex; align-items: left; gap: 2rem;">
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Ipsos_logo.svg" alt="Ipsos Logo" style="width: auto; height: 175px;">
                            <h1 class="cs-title">Ipsos Growth Hub:<br>The Enterprise App</h1>
                    </div> 
                    <div class="cs-meta-grid">
                        <div><span>Role</span>Lead Technical Architect</div>
                        <div><span>Stack</span>Power Platform, Vertex AI, SharePoint</div>
                        <div><span>Scope</span>10,000+ Users (US Org)</div>
                        <div><span>Year</span>Summer 2024</div>
                    </div>
                </header>

                <img 
                    src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/ContentHubPhoto.png" 
                    class="full-width-img reveal" 
                    style="object-fit: contain; background: var(--surface);"
                    onerror="this.onerror=null; this.src='https://via.placeholder.com/2000x1000/1a1a1a/b7ff00?text=Ipsos+Content+Hub+UI';"
                    alt="Ipsos Content Hub Interface"
                >

                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">The Context</span>
                            <h2 class="cs-big-text" style="margin-bottom: 2rem;">Centralizing the Silos</h2>
                            <p style="color: #aaa; margin-bottom: 2rem;">
                                As a global organization, Ipsos's critical documentation—from client intelligence to
                                training materials—was decentralized across various resources. This made it difficult
                                for employees to discover relevant information efficiently, leading to wasted time and
                                knowledge silos.
                            </p>
                            <p style="color: #aaa; margin-bottom: 2rem;">
                                    The challenge was to move beyond a simple file storage system and create a single,
                                    intelligent, and scalable application that could serve as the central knowledge base
                                    for the entire company. The goal was to build an intuitive platform that would not only
                                    house tens of thousands of documents but also allow users to find the exact
                                    information they needed through powerful, context-aware search and filtering.
                            </p>
                        </div>
                        <div>
                            <div class="cs-stat-box" style="margin-top: 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                                <div>
                                    <div class="cs-stat-number">9</div>
                                    <span class="cs-stat-label">METADATA DIMENSIONS</span>
                                </div>
                                <div>
                                    <div class="cs-stat-number">50k+</div>
                                    <span class="cs-stat-label">DOCUMENTS INDEXED</span>
                                </div>
                                <div>
                                    <div class="cs-stat-number">19</div>
                                    <span class="cs-stat-label"># OF ORGANIZATIONS ACROSS IPSOS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">The Engineering Pivot</span>
                    <h2 class="cs-big-text" style="margin-bottom: 4rem;">Breaking the SharePoint Barrier</h2>
                    
                    <div class="cs-grid-2">
                        <div class="cs-tech-diagram">
                            <h4 style="color: white; margin-bottom: 1rem;">// THE DELEGATION WORKAROUND</h4>
                            <p>Standard Power Apps connections hit a hard 2,000-item delegation limit, making a global library impossible. I architected a custom pipeline to bypass this.</p>
                            <div class="code-snippet">
                                <span class="fn">HTTP_Request</span> (SharePoint Search API) {<br>
                                &nbsp;&nbsp;method: "POST",<br>
                                &nbsp;&nbsp;body: { querytext: <span class="hl">"user_input"</span>, rowlimit: 50 }<br>
                                } -> <span class="hl">Parse_JSON</span> -> <span class="fn">Return_Collection</span>
                                <img 
                                    src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/Screenshot%202025-08-07%20131821.png" 
                                    style="display: block; margin: 2rem auto 0 auto; width: 40%; border: 1px solid var(--border);" 
                                    alt="Backend Architecture Diagram"
                                >
                            </div>
                            
                        </div>
                        <div>
                            <h4 style="color: white; margin-bottom: 1rem; text-transform: uppercase;">Learning the Ecosystem</h4>
                            <p style="color: #aaa; margin-bottom: 2rem;">
                                Coming into a Microsoft-centric environment, I had to master the Power Platform ecosystem from scratch. I built a pipeline using <strong>Power Automate</strong> to communicate directly with the SharePoint Search API via custom HTTP requests, effectively bypassing standard limitations and unlocking the ability to query tens of thousands of documents instantly.
                            </p>
                            <!-- NEW SVG LOGOS SECTION -->
                            <div style="display: flex; justify-content: center; gap: 2rem; align-items: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/PowerApps_scalable.svg" style="height: 100%; width: auto; opacity: 0.9;" alt="Power Apps">
                                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/PowerAutomate_scalable.svg" style="height: 100%; width: auto; opacity: 0.9;" alt="Power Automate">
                            </div>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">UX Strategy</span>
                    <h2 class="cs-big-text" style="margin-bottom: 3rem;">Systematizing Discovery</h2>
                    
                    <div class="cs-grid-2" style="margin-bottom: 4rem;">
                        <div>
                            <h4 style="color: white; text-transform: uppercase; margin-bottom: 1rem;">Unified Search</h4>
                            <p style="color: #aaa; margin-bottom: 1.5rem;">
                                <strong>The Problem:</strong> How do you pinpoint a specific document across an entire US organization?
                            </p>
                            <p style="color: #aaa;">
                                Users shouldn't fight the filter bar. I designed a "Unified Search" engine that masks extreme complexity behind a simple UI. It combines deep-content 
                                keyword logic (looking <em>inside</em> files) with 9 distinct metadata tags. A single "Search" action aggregates all these criteria into one payload, 
                                dispatching it to the backend. It was essential to design something that didn't just list files, but quickly highlighted relevant infomation, allowing 
                                employees to assess value in milliseconds.
                            </p>
                        </div>
                        <div>
                            <h4 style="color: white; text-transform: uppercase; margin-bottom: 1rem;">One Screen, Six Contexts</h4>
                            <p style="color: #aaa; margin-bottom: 1.5rem;">
                                Through user research, I discovered that daily work across the entire organization fell into six distinct "buckets," with most employees operating primarily within just one.
                            </p>
                            <p style="color: #aaa;">
                                Instead of building static pages, I engineered a <strong>Single Dynamic Screen</strong> architecture that adapts to these intents. For example, a Client Officer selecting <em>"Prospect & Engage"</em> sees pre-filtered client acquisition data, while a Marketer in <em>"Amplify Fame"</em> gets instant access to brand templates. Each view not only filters the document library but also dynamically surfaces links to the specific external tools those roles use daily, drastically reducing context switching.
                            </p>
                        </div>
                    </div>
                    <h4 style="color: white; text-transform: uppercase; margin-bottom: 1rem;">Key Features</h4>
                    <div class="cs-gallery-grid">
                        <div class="cs-gallery-item">
                            <span class="cs-gallery-caption">01 // Content Hub</span>
                            <img 
                                src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/ContentHubPhoto.png" 
                                style="display: block; width: 100%; border: 1px solid var(--border);" 
                                alt="Ipsos Content Hub Interface"
                            >
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">The central nervous system of the app, capable of filtering 20k+ assets in under 2 seconds.</p>
                        </div>
                        <div class="cs-gallery-item">
                            <span class="cs-gallery-caption">02 // Dynamic Contexts</span>
                            <img 
                                src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/Screenshot%202025-08-07%20131440.png" 
                                style="display: block; width: 100%; border: 1px solid var(--border);" 
                                alt="Prepare & Learn Interface"
                            >
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;"> The "Prospect & Engage" context dynamically surfaces client acquisition data and external tools tailored to each role.</p>
                        </div>
                        <div class="cs-gallery-item">
                            <span class="cs-gallery-caption">03 // Hit Highlighting</span>
                            <img 
                                src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/pdfviewer.png" 
                                style="display: block; width: 100%; border: 1px solid var(--border);" 
                                alt="Intelligent Indexing Logic"
                            >
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">To speed up relevance assessment, the search results display text snippets with the user's keywords <strong>bolded</strong> dynamically.</p>
                        </div>
                        <div class="cs-gallery-item">
                            <span class="cs-gallery-caption">04 // Personalized Favorites</span>
                            <img 
                                src="https://raw.githubusercontent.com/efl226/portfolio/main/images/ipsos/Screenshot%202025-08-07%20131559.png"                                 style="display: block; width: 100%; border: 1px solid var(--border);" 
                                alt="Ipsos Favorites Hub Interface"
                            >
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">Implemented a separate SharePoint list with item-level permissions, ensuring every user's "Saved" collection is secure and private.</p>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">The AI Layer</span>
                    <h2 class="cs-big-text" style="margin-bottom: 4rem;">The Intelligent Companion</h2>
                    <div class="cs-grid-2">
                        <div>
                            <p style="color: #aaa; margin-bottom: 2rem;">
                                Towards the end of the internship, I architected the "Future State" of the hub: an AI companion powered by <strong>Google Vertex AI</strong>.
                            </p>
                            <p style="color: #aaa; margin-bottom: 2rem;">
                                The challenge was ingestion. I built a custom pipeline using <strong>Python</strong> and <strong>Power Automate</strong> to not only upload documents to a Google Cloud Storage bucket but to simultaneously generate a corresponding JSON manifest for each file. This ensured every document was indexed with the correct metadata schema required by Vertex AI.
                            </p>
                            <p style="color: #aaa;">
                                This architecture allowed the AI to read through thousands of permitted (public-only) documents and their associated tags, delivering a search experience that understood context, not just keywords.
                            </p>
                        </div>
                        
                        <!-- UPDATED PIPELINE DIAGRAM WITH SVG IMAGES -->
                        <div style="background: var(--surface); padding: 2rem; border-left: 2px solid var(--accent);">
                            <strong style="color: white; display: block; margin-bottom: 2rem;">Pipeline Architecture</strong>
                            
                            <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                                <div style="text-align: center;">
                                    <div style="width: 50px; height: 50px; background: #222; border: 1px solid #444; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem auto;">
                                        <!-- Placeholder SVG 1 -->
                                        <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/documents-svgrepo-com.svg" style="width: 20px; height: 20px;" alt="Docs">
                                    </div>
                                    <span style="font-size: 0.6rem; color: #888; font-family: monospace;">DOCS</span>
                                </div>
                                
                                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/right-arrow-svgrepo-com.svg" style="width: 24px; height: 24px; opacity: 0.5;" alt="arrow">
                                
                                <div style="text-align: center;">
                                    <div style="width: 50px; height: 50px; background: #222; border: 1px solid var(--accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem auto;"><span style="color: var(--accent); font-weight: bold; font-size: 0.8rem;">PY</span></div>
                                    <span style="font-size: 0.6rem; color: #888; font-family: monospace;">SCRIPT</span>
                                </div>
                                
                                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/right-arrow-svgrepo-com.svg" style="width: 24px; height: 24px; opacity: 0.5;" alt="arrow">
                                
                                <div style="text-align: center;">
                                    <div style="width: 50px; height: 50px; background: #222; border: 1px solid #444; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem auto;">
                                        <!-- Placeholder SVG 3 -->
                                        <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/json-svgrepo-com.svg" style="width: 20px; height: 20px;" alt="JSON">
                                    </div>
                                    <span style="font-size: 0.6rem; color: #888; font-family: monospace;">Structured Data</span>
                                </div>
                                
                                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/right-arrow-svgrepo-com.svg" style="width: 24px; height: 24px; opacity: 0.5;" alt="arrow">
                                
                                <div style="text-align: center;">
                                    <div style="width: 50px; height: 50px; background: #222; border: 1px solid #444; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem auto;">
                                        <!-- Placeholder SVG 4 -->
                                        <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/ai-svgrepo-com.svg" style="width: 20px; height: 20px;" alt="Vertex AI">
                                    </div>
                                    <span style="font-size: 0.6rem; color: #888; font-family: monospace;">VERTEX AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">Measurable Impact</span>
                            <div style="background: var(--surface); padding: 2.5rem; border-top: 4px solid var(--accent); margin-top: 2rem;">
                                <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; line-height: 1.6; color: #fff; font-style: italic; margin-bottom: 1.5rem;">
                                    "Ethan was a summer intern for me and was a whiz at product management. He built something entirely new from scratch, was remarkable at understanding the requirements, even when they were not always clear, and demonstrated an insane capacity to learn whatever he needed to keep the project on track. He's graduating in May, snap him up!"
                                </p>
                                <div>
                                    <strong style="display: block; color: var(--accent); font-family: monospace; letter-spacing: 1px; margin-bottom: 0.2rem;"> - ANNE HUNTER</strong>
                                    <span style="display: block; font-size: 0.75rem; color: #888; text-transform: uppercase;">Senior Vice President, B2B Products and Go-to-Market, North America</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: white; margin-bottom: 1rem;">From Intern to Architect</h4>
                            <ul class="cs-impact-list" style="color: #ccc;">
                                <li><strong>Scalability:</strong> Successfully architected a system that handles global-scale documentation without performance bottlenecks.</li>
                                <li><strong>High-Stakes Delivery:</strong> Presented the functional MVP to 200+ employees at the NY Regional Town Hall.</li>
                                <li><strong>Continuity:</strong> My performance led to a transition from intern to part-time employee to lead the technical handover for outside contractors.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            `,
            sway: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                
                <header class="cs-hero reveal">
                        <div style="display: flex; align-items: left; gap: 2rem;">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtcDmJyqK7725KWv84RLD7JaQnskWaQKchw&s" alt="Sway Logo" style="width: auto; height: 175px;">
                            <h1 class="cs-title">Zero-to-One Event Management Software</h1>
                        </div> 
                    
                    <div class="cs-meta-grid">
                        <div><span>Role</span>Product Development and Management Intern</div>
                        <div><span>Tech</span>Figma, Bubble.io, Airtable, Stripe</div>
                        <div><span>Timeline</span>2-3 Months (MVP)</div>
                        <div><span>Type</span>Startup / FinTech</div>
                    </div>
                </header>

                <img src="https://d2t0b1pkzfgfyi.cloudfront.net/prod/company/6564ca37e67eda001c3bf434/1701105194699_SWAY%20-%20Web%20Primary-min.png" class="full-width-img reveal" alt="Sway Platform Overview">

                <section class="cs-section reveal">
                        
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">The Startup Hustle</span>
                            <h2 class="cs-big-text">Intern to PM</h2>
                            <p class="large-p" style="margin-top: 2rem;">
                                Sway is a corporate event management and experience solutions company, providing full-service event planning, fractional event management, and venue sourcing for businesses and organizations. I played a pivotal role in the development of Sway's MVP, a full-service event management platform.
                            </p>

                        </div>
                        <div>
                            <div style="margin-top: 3rem; border-left: 2px solid var(--accent); padding-left: 2rem;">
                                <h4 style="color:white; margin-bottom: 1rem;">MY CONTRIBUTIONS</h4>
                                <p style="color: #aaa;">
                                    Initially, I was focused on product development and UX design for the application.My main contributions included: development and design of the payment flow and shopping cart, prototyping an event management dashboard, and developing the blog page with optimized SEO.
                                </p>
                                <p style="color: #aaa; margin-top: 1rem;">
                                    After a few weeks, I was able to quickly gain the trust of the CEO. The CEO recognized my strong understanding of the direction we wanted to take the product and assigned me an additional role in product management. In this role, I developed and administered a product roadmap organized into three two-week sprints to ultimately release our MVP by the end of my internship, tasking myself and the two other developers to implement key features.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">FinTech Logic</span>
                    <h2 class="cs-big-text" style="margin-bottom: 3rem;">Transparent Payment Flow</h2>
                    
                    <div class="cs-grid-2">
                        <div style="grid-column: span 2;">
                            <p style="color: #aaa; max-width: 800px; margin-bottom: 3rem;">
                                The core business model relied on a complex transaction flow: charge a deposit to secure interest, confirm the booking manually with the venue, and <em>then</em> charge the full amount. This required a delicate UX balance—users needed to feel secure authorizing a large payment that wouldn't happen immediately.
                            </p>
                        </div>
                        <div class="cs-gallery-item">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/sway/checkoutsummarypage.png" alt="Deposit UI">
                            <span class="cs-gallery-caption">Step 1: The Deposit</span>
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">Clear micro-copy explaining the "Hold vs. Charge" mechanic to reduce abandonment.</p>
                        </div>
                        <div class="cs-gallery-item">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/sway/firstpaymentpage.png" alt="Confirmation UI">
                            <span class="cs-gallery-caption">Step 2: Confirmation</span>
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">The "booking confirmed" state that triggers the final Stripe capture via webhooks.</p>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">Feature Deep Dive</span>
                    <h2 class="cs-big-text">Event Management Suite</h2>
                    <p style="color: #aaa; max-width: 600px; margin-bottom: 4rem;">Designing for transparency in high-value transactions and simplifying complex financial data.</p>
                    
                    <div class="cs-gallery-grid">
                        <div class="cs-gallery-item">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/sway/Booking%20Details%20actual.png" alt="Payment Confirmation UI">
                            <span class="cs-gallery-caption">01 // Payment Transparency</span>
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">
                               The Booking Overview page gives users a high-level snapshot of their event, including venue details, experiences, payment status (pending or paid), 
                               and a suggested agenda. A key focus was determining the most essential information for a quick event overview and designing a layout that presents it clearly and intuitively.
                            </p>
                        </div>
                        <div class="cs-gallery-item">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/sway/Spaces%20Page.jpg" alt="Booking Overview UI">
                            <span class="cs-gallery-caption">02 // Booking Overview</span>
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">
                                This interactive prototype streamlines venue management after an event is booked, providing users with a clear and intuitive way to oversee their space. 
                                The dashboard offers quick access to essential venue details, along with tools for organizing and managing related files and documents.
                            </p>
                        </div>
                        <div class="cs-gallery-item">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/sway/Booking%20Details.jpg" alt="Budget Builder Tool">
                            <span class="cs-gallery-caption">03 // Budget Builder</span>
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">
                                The Agenda Builder feature helps users seamlessly plan event schedules. This interactive tool allows users to create multiple agendas, organize major and sub-events, and easily rearrange elements using drag-and-drop functionality. 
                                A well-structured visual hierarchy ensures an intuitive experience, guiding users through the process of building clear and effective event agendas.
                            </p>
                        </div>
                        <div class="cs-gallery-item">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/sway/budget%20builder%202.jpg" alt="Agenda Builder Tool">
                            <span class="cs-gallery-caption">04 // Agenda Builder</span>
                            <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;">
                                Budget Builder is a dynamic, customizable dashboard that empowers users to organize and tailor their budgets with ease. Users can add and rearrange budget items, each displaying key financial details such as total actual cost, expected cost, and its percentage of the overall budget. Each item also includes a detailed cost breakdown for deeper insight. 
                                At the top, a color-coded visual indicator dynamically reflects the overall budget in relation to the planned total, providing users with a clear and intuitive overview of their financial planning.
                            </p>
                        </div>
                    </div>
                </section>

            `,
            bardive: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                
                <header class="cs-hero reveal">
                    <div style="display: flex; align-items: left; gap: 2rem;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/bardive/BarDive%20Logo%20SVG.svg" alt="BarDive Logo" style="width: auto; height: 175px;">
                            <h1 class="cs-title">BarDive:<br>Social Transparency for Nightlife</h1>
                    </div> 
                    
                    <div class="cs-meta-grid">
                        <div><span>Role</span>Co-Founder & Lead Designer</div>
                        <div><span>Tech</span>React Native, Firebase, Google Maps API</div>
                        <div><span>Status</span>Seed Funded ($1K)</div>
                        <div><span>Year</span>2023</div>
                    </div>
                </header>

                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">Project Overview</span>
                            <h2 class="cs-big-text">The Nightlife Network</h2>
                            <p class="large-p" style="margin-top: 2rem;">
                                Established in October 2024, my Co-Founder and I created BarDive, a mobile app that provides real-time insights into local bars, enabling college students to connect and engage with their social scene and community.
                            </p>
                        </div>
                        <div style="border-left: 2px solid var(--accent); padding-left: 2rem; margin-top: 6rem;">
                            <h4 style="color: white; text-transform: uppercase; margin-bottom: 1.5rem;">My Contributions</h4>
                            <p style="color: #aaa; margin-bottom: 1.5rem;">As a co-founder, my impact extends to all facets of the company. My main contributions include:</p>
                            <ul style="list-style: none; color: #b7ff00; line-height: 1.6; font-size: 1.5rem; font-weight: 700; display: grid; grid-template-columns: 1fr; gap: 1rem;">
                                <li>1. Product Design</li>
                                <li>2. Pitching to Investors</li>
                                <li>3. Business Development</li>
                                <li>4. Brand Creation and Design</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">The Problem</span>
                    <h2 class="cs-big-text" style="margin-bottom: 4rem;">The Disconnected Night Out</h2>
                    
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <!-- Problem 1: Image -->
                        <div style="background: var(--surface); border: 1px solid var(--border); padding: 2rem;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/iphone-style-smartphone-material-svgrepo-com.svg" style="width: 50px; height: 50px; object-fit: cover; margin-bottom: 1rem;">
                            <h4 style="color: white; margin-bottom: 0.5rem;">Decision Paralysis</h4>
                            <p style="color: #888; font-size: 0.9rem;">Bar-goers need multiple apps (Maps, Insta, Chats) in the decision-making process for a simple night out.</p>
                        </div>

                        <!-- Problem 2: FOMO -->
                        <div style="background: var(--surface); border: 1px solid var(--border); padding: 2rem;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/user-multiple-svgrepo-com.svg" style="width: 50px; height: 50px; object-fit: cover; margin-bottom: 1rem;">
                            <h4 style="color: white; margin-bottom: 0.5rem;">F.O.M.O.</h4>
                            <p style="color: #888; font-size: 0.9rem;">Amplified by social media, often people are more concerned about missing out on an experience rather than the experience itself.</p>
                        </div>

                        <!-- Problem 3: Decline -->
                        <div style="background: var(--surface); border: 1px solid var(--border); padding: 2rem;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/trending-down-svgrepo-com.svg" style="width: 50px; height: 50px; object-fit: cover; margin-bottom: 1rem;">
                            <h4 style="color: white; margin-bottom: 0.5rem;">Declining Attendance</h4>
                            <p style="color: #888; font-size: 0.9rem;">Bars are experiencing a noticeable decrease in attendance from Gen Z, who prioritize unique and personalized experiences.</p>
                        </div>

                        <!-- Problem 4: Marketing -->
                        <div style="background: var(--surface); border: 1px solid var(--border); padding: 2rem;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/marketing-svgrepo-com.svg" style="width: 50px; height: 50px; object-fit: cover; margin-bottom: 1rem;">
                            <h4 style="color: white; margin-bottom: 0.5rem;">Ineffective Marketing</h4>
                            <p style="color: #888; font-size: 0.9rem;">Many bars lack the tools to effectively reach their target audience, relying on outdated methods that fail to engage younger demographics.</p>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">The Solution</span>
                    <h2 class="cs-big-text" style="margin-bottom: 4rem;">Social Transparency</h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 4rem;">
                        <!-- Col 1 -->
                        <div>
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/map-pin-svgrepo-com.svg" style="width: 50px; height: 50px; object-fit: cover; margin-bottom: 1rem;">
                            <h4 style="color: var(--accent); text-transform: uppercase; margin-bottom: 1rem;">Location Sharing</h4>
                            <p style="color: #aaa; font-size: 0.9rem; line-height: 1.6;">
                                BarDive only shares your location at registered bars, ensuring greater privacy. Your location is visible only to friends on the app, while non-friends appear as part of the total attendee count. This creates a more exclusive and secure experience.
                            </p>
                        </div>
                        <!-- Col 2 -->
                        <div>
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/market-shop-shopping-ecommerce-cart-buy-online-svgrepo-com.svg" style="width: 50px; height: 50px; object-fit: cover; margin-bottom: 1rem;">
                            <h4 style="color: var(--accent); text-transform: uppercase; margin-bottom: 1rem;">Promoting Local Biz</h4>
                            <p style="color: #aaa; font-size: 0.9rem; line-height: 1.6;">
                                So far, we’ve partnered with <strong style="color: white; background: rgba(183, 255, 0, 0.1); padding: 0 4px;">eight bars</strong> in the Bethlehem, PA area. They register events and deals in exchange for promotion. We are also organizing a BarDive-themed bar crawl for next semester.
                            </p>
                        </div>
                        <!-- Col 3 -->
                        <div>
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/svgs/safe-shield-protection-svgrepo-com.svg" style="width: 50px; height: 50px; object-fit: cover; margin-bottom: 1rem;">
                            <h4 style="color: var(--accent); text-transform: uppercase; margin-bottom: 1rem;">Safe Nights Out</h4>
                            <p style="color: #aaa; font-size: 0.9rem; line-height: 1.6;">
                                Safety is a top priority. Features allow users to limit visibility to specific friends and auto-stop sharing at night. We also include a resource hub for handling overconsumption and emergency contacts.
                            </p>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">Key Features</span>
                    <h2 class="cs-big-text" style="margin-bottom: 4rem;">The Experience</h2>
                    
                    <div class="cs-grid-2">
                        <!-- Feature 1 -->
                        <div>
                            <div style="background: #111; border: 1px solid var(--border); padding: 2rem; display: flex; justify-content: center; margin-bottom: 2rem;">
                                <!-- Vertical Placeholder -->
                                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/bardive/Zoomed%20In(mollys).png" style="height: 50vh; width: auto; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                            </div>
                            <h3 style="color: white; margin-bottom: 0.5rem;">The Bio-Pic Map</h3>
                            <p style="color: #888;">See "Who's There" instantly. The map prioritizes visual density using profile pictures, creating a heat map of social activity rather than just dry data points.</p>
                        </div>
                        <!-- Feature 2 -->
                        <div>
                            <div style="background: #111; border: 1px solid var(--border); padding: 2rem; display: flex; justify-content: center; margin-bottom: 2rem;">
                                <!-- Vertical Placeholder -->
                                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/bardive/Who's%20Going%20Out%20Tab.png" style="height: 50vh; width: auto; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                            </div>
                            <h3 style="color: white; margin-bottom: 0.5rem;">Who's Going Out Tab</h3>
                            <p style="color: #888;">Before the night starts, users will get a push notification asking them where they are going that night. This feature will help users plan ahead so they do not have to wait for the bars will fill up. </p>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">Design System</span>
                    <h2 class="cs-big-text" style="margin-bottom: 2rem;">From Wireframe to Code</h2>
                    <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;"> 
                        <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/bardive/wireframes.png" style="width: 75%; height: auto;" alt="Figma Design System">
                    </div>
                </section>

                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">Pitch & Validation</span>
                            <h3 style="color: white; font-size: 2rem; margin-bottom: 1rem;">Eureka Pitch Night</h3>
                            
                            <!-- Video Player -->
                            <div style="margin-bottom: 2rem; border: 1px solid var(--border);">
                                <video 
                                    controls 
                                    width="100%" 
                                    style="aspect-ratio: 16/9; display: block; background: #000;"
                                    poster="https://raw.githubusercontent.com/efl226/portfolio/main/images/bardive/BarDive%20Logo%20SVG.svg"
                                >
                                    <source src="https://raw.githubusercontent.com/efl226/portfolio/main/images/bardive/BarDive%20Eureka%20Pitch%20Night.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            
                            <p style="color: #aaa; font-size: 1.1rem; line-height: 1.6;">
                                We pitched BarDive to the university board and investors, highlighting our user-centric approach and verified market need.
                            </p>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: center;">
                            <div style="background: var(--surface); border: 1px solid var(--border); padding: 3rem; text-align: center;">
                                <h4 style="color: #888; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem;">Validation</h4>
                                <div style="font-size: 4rem; font-weight: 900; color: var(--accent); line-height: 1;">$1,000</div>
                                <span style="display: block; color: white; margin-top: 1rem; font-weight: 700;">SEED FUNDING SECURED</span>
                                <p style="color: #666; margin-top: 1rem; font-size: 0.9rem;">Awarded "Best Pitch" at Eureka Night</p>
                            </div>
                        </div>
                    </div>
                </section>
            `,
            resonant: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                <header class="cs-hero reveal"><h1 class="cs-title">ResonantDesign:<br>The Hybrid Archive System</h1><div class="cs-meta-grid"><div><span>Role</span>Full Stack Developer</div><div><span>Tech</span>React, Python, NLP</div><div><span>Status</span>Hi-Fi Prototype</div><div><span>Year</span>2024</div></div></header>
                <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=2000" class="full-width-img reveal">
                <section class="cs-section reveal"><div class="cs-grid-2"><div><span class="cs-label">The Challenge</span><h2 class="cs-big-text">The Crisis of Connection</h2><p class="large-p" style="margin-top: 2rem;">Platforms like Spotify treat music as disposable utility—"background noise" optimized for retention rather than engagement.</p></div><div><div style="background: var(--surface); padding: 2rem; border-left: 2px solid var(--accent); margin-bottom: 2rem;"><strong style="color: white; display: block; margin-bottom: 0.5rem;">The Solution: Latent Space Navigation</strong><p style="font-size: 0.9rem; color: #888;">ResonantDesign re-imagines the music library not as a list, but as a <strong>living neural network</strong>.</p></div></div></div></section>
                <section class="cs-section reveal"><span class="cs-label">Technical Highlight</span><h2 class="cs-big-text">The Python Intelligence Pipeline</h2><div class="cs-grid-2"><div><p style="color: #aaa; margin-bottom: 2rem;">The core of the system is a custom Python ETL pipeline that automates the "Intelligence." It fetches metadata from MusicBrainz, lyrics from Genius, and then uses <strong>NLP Vector Embeddings</strong> to mathematically calculate the relationship between every album in your library.</p><ul class="cs-impact-list" style="color: #ccc; font-size: 0.9rem;"><li><strong>Ingestion:</strong> Automated fetching via Last.fm & Genius APIs.</li><li><strong>Vectorization:</strong> Uses <code>sentence-transformers</code> to convert lyrics to high-dimensional vectors.</li><li><strong>Math:</strong> Calculates Cosine Similarity to generate the graph edges.</li></ul></div><div class="cs-tech-diagram"><h4 style="color: white; margin-bottom: 1rem;">// THE DNA SCHEMA</h4><p>Albums are broken down into four distinct dimensions for analysis.</p><div class="code-snippet"><span class="fn">class</span> <span class="hl">AlbumDNA</span>:<br>&nbsp;&nbsp;visual: ColorPalette<br>&nbsp;&nbsp;sonic: BPM_Energy_Vector<br>&nbsp;&nbsp;genetic: Credits_List<br>&nbsp;&nbsp;semantic: <span class="fn">Lyrical_Embedding(768)</span></div></div></div></section>
                <section class="cs-section reveal"><span class="cs-label">Key Features</span><h2 class="cs-big-text" style="margin-bottom: 3rem;">UX Mechanics of the Archive</h2><div class="cs-gallery-grid"><div class="cs-gallery-item">
                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20172114.png">
                <span class="cs-gallery-caption">The Passport</span></div><div class="cs-gallery-item">
                    <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20171956.png">
                <span class="cs-gallery-caption">Neural Filters</span></div><div class="cs-gallery-item">
                    <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20172150.png">
                <span class="cs-gallery-caption">Spotlight Mode</span></div><div class="cs-gallery-item">
                    <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20172203.png">
                <span class="cs-gallery-caption">Force-Directed Graph</span></div></div></section>
            `,
            aromaaid: `
                <div class="back-nav"><button class="back-btn" onclick="showHome()">← Archive</button></div>
                
                <header class="cs-hero reveal">
                    <h1 class="cs-title">Aroma Aid:<br>Design for the Senses</h1>
                    <div class="cs-meta-grid">
                        <div><span>Role</span>UX Researcher & Designer</div>
                        <div><span>Tech</span>Figma, Prototyping</div>
                        <div><span>Scope</span>Health & Wellness</div>
                        <div><span>Year</span>2023</div>
                    </div>
                </header>

                <!-- Hero Image Placeholder -->
                <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/Aroma%20Aid%20Mockups%20scents.jpg" class="full-width-img reveal" style="object-fit: cover;" alt="AromaAid Hero">

                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">Project Overview</span>
                            <h2 class="cs-big-text">Sensory Rehabilitation</h2>
                            <p class="large-p" style="margin-top: 2rem;">
                                As part of a design case study, I was challenged to create a user experience centered around the sense of smell. I uncovered Smell Retention Therapy (SRT)—a process helping patients recover their senses post-COVID-19.
                            </p>
                        </div>
                        <div style="border-left: 2px solid var(--accent); padding-left: 2rem;">
                            <h4 style="color: white; text-transform: uppercase; margin-bottom: 1.5rem;">My Contributions</h4>
                            <p style="color: #aaa;">
                                AromaAid is a mobile app designed to support SRT patients by tracking progress and accessing essential products. I led user research, wireframing, and high-fidelity prototyping to create an intuitive experience for sensory recovery.
                            </p>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">UX Research</span>
                    <h2 class="cs-big-text" style="margin-bottom: 4rem;">The Science of Smell</h2>
                    
                    <div class="cs-grid-2">
                        <div>
                            <h4 style="color: white; margin-bottom: 1rem;">The Problem Space</h4>
                            <p style="color: #aaa; margin-bottom: 2rem;">
                                According to a National Library of Medicine study on smell loss due to COVID-19, <strong>54.7%</strong> of people are only partially recovered, and <strong>7.5%</strong> have had no recovery after two years.
                            </p>
                            <h4 style="color: white; margin-bottom: 1rem;">Smell Retention Therapy (SRT)</h4>
                            <p style="color: #aaa;">
                                SRT helps the brain reorganize itself via neuroplasticity. Patients sniff four essential oils (rose, eucalyptus, cloves, lemon) multiple times a day for at least 12 weeks to retrain their brain.
                            </p>
                        </div>
                        <div style="background: var(--surface); padding: 2rem; border: 1px solid var(--border);">
                            <h4 style="color: var(--accent); margin-bottom: 1.5rem; text-transform: uppercase;">The Solution</h4>
                            <ul style="list-style: none; color: #ccc; line-height: 1.8;">
                                <li>1. A mobile application that tracks scent training</li>
                                <li>2. Instructs people on daily therapy sessions</li>
                                <li>3. Provides a timer and visuals to enhance effects</li>
                                <li>4. Tracks progress through data analytics</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">Visual Identity</span>
                            <h2 class="cs-big-text">Style Tile & Trust</h2>
                            <p style="color: #aaa; margin-top: 1rem;">
                                I chose a color palette similar to modern fitness and health apps. This familiarity is crucial; as a therapy app, building immediate user trust is paramount to the product's success.
                            </p>
                        </div>
                        <div>
                            <!-- Placeholder for Style Tile Image -->
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/style%20tile.png" style="width: 100%; border: 1px solid var(--border); background-color: #fff; padding: 1rem;" alt="Style Tile">
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">Prototyping</span>
                    <h2 class="cs-big-text" style="margin-bottom: 3rem;">Low-Fidelity Framework</h2>
                    <div class="cs-grid-2">
                        <div>
                            <p style="color: #aaa; margin-bottom: 2rem;">My main motivations behind the low-fidelity prototypes were:</p>
                            <ul class="cs-impact-list" style="color: #ccc;">
                                <li>Make therapy accessible/trackable as the main page.</li>
                                <li>Enhance the process with visuals and timers.</li>
                                <li>Create a simplified hub with only 5 core navigation options.</li>
                            </ul>
                        </div>
                        <div>
                            <!-- Placeholder for Lo-Fi Image -->
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/wireframes.png" style="width: 100%; border: 1px solid var(--border);" alt="Wireframes">
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <span class="cs-label">Final Design</span>
                    <h2 class="cs-big-text" style="margin-bottom: 4rem;">High-Fidelity Flow</h2>
                    
                    <!-- Gallery Grid for Final Designs -->
                    <div class="cs-gallery-grid" style="grid-template-columns: repeat(4, 1fr);">
                        <div class="cs-gallery-item" style="grid-column: span 1;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/Tracking(New).jpg" alt="Therapy Start Page">
                            <span class="cs-gallery-caption">Therapy Start</span>
                        </div>
                        <div class="cs-gallery-item" style="grid-column: span 1;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/Rose%20Next.png" alt="Smell Phase">
                            <span class="cs-gallery-caption">Smell Phase</span>
                        </div>
                        <div class="cs-gallery-item" style="grid-column: span 1;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/Visual.png" alt="Rating Phase">
                            <span class="cs-gallery-caption">Rating Phase</span>
                        </div>
                        <div class="cs-gallery-item" style="grid-column: span 1;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/Rose%20Rest.png" alt="Progress Page">
                            <span class="cs-gallery-caption">Progress Page</span>
                        </div>
                        
                        <!-- Row 2 -->
                        <div class="cs-gallery-item" style="grid-column: span 2;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/4%20main%20screens.png" alt="Calendar View">
                            <span class="cs-gallery-caption">Calendar Month-View</span>
                        </div>
                        <div class="cs-gallery-item" style="grid-column: span 2;">
                            <img src="https://raw.githubusercontent.com/efl226/portfolio/main/images/aromaaid/scent%20test.jpg" alt="Smell Strength Summary">
                            <span class="cs-gallery-caption">Smell Strength Summary</span>
                        </div>
                    </div>
                </section>

                <section class="cs-section reveal">
                    <div class="cs-grid-2">
                        <div>
                            <span class="cs-label">Conclusion</span>
                            <h3 style="color: white; font-size: 2rem; margin-bottom: 1rem;">Closing the Market Gap</h3>
                            <p style="color: #aaa; font-size: 1.1rem; line-height: 1.6;">
                                I identified a critical gap: there was no interface to track the progress of a patient undergoing SRT. AromaAid provides tracking, analysis, and visual guides to help users complete their therapy.
                            </p>
                        </div>
                        <div style="background: #111; padding: 2rem; border: 1px dashed var(--border);">
                            <h4 style="color: #888; text-transform: uppercase; margin-bottom: 1rem;">Reflections & Next Steps</h4>
                            <p style="color: #ccc; font-style: italic;">
                                "The interface has areas for improvement. I assumed users were familiar with the therapy process; moving forward, I would develop an analysis page to better inform users of their progress and refine the onboarding flow to be more educational."
                            </p>
                        </div>
                    </div>
                </section>
            `
        };

        // --- GALLERY DATA (UPDATED FOR MULTIPLE IMAGES) ---
        const galleryData = [
            { 
                title: "Flatpack Furniture", 
                desc: "A modular chair design from a single sheet of plywood.", 
                images: [
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/chair/Final%20Chair%202%20smaller.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/chair/Final%20Chair%202.jpg",
                ] 
            },
            { 
                title: "Resonant Design", 
                desc: "Capstone Project (On-Going): Hybrid music archive system using NLP processing and React Framework.", 
                images: [
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20171956.png",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20172114.png",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20172150.png",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/resonantdesign/Screenshot%202025-12-26%20172203.png"
                ] 
            },
            { 
                title: "Silo Lamp", 
                desc: "Metalworking Project: A lamp inspired by birds eye view of farm landscapes", 
                images: [
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/lamp/finalimage.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/lamp/firstdrafts.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/lamp/finaldraft.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/lamp/3d%20render.png"

                ] 
            },
            { 
                title: "HealthGaurd", 
                desc: "UX Case Study: Health monitoring app for the future.", 
                images: [
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/healthguard/Alex%203%20new.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/healthguard/ALex%204.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/healthguard/final%20health.png"

                ] 
            },
            { 
                title: "Surfacing Study", 
                desc: "Analysis of surface textures in industrial design.", 
                images: ["https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/surface/Img2586.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/surface/Img2587.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/surface/Img2589.jpg"
                ] 
            },
            { 
                title: "Mouse Concept", 
                desc: "Mouse design inspired by the exterior of the Toyota 4Runner 2023", 
                images: ["https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/mouse/Mouse%20Rending%20Front%20angle.png",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/mouse/front%20close.png",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/mouse/mouse%20up%20close.png"
                ] 
            },
            { 
                title: "3D Printed Shoe", 
                desc: "Custom sneaker design utilizing 3D printing technology.", 
                images: ["https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/shoe/foot%20no%20background%20.png",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/shoe/IMG_6698.jpeg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/shoe/IMG_6704.jpeg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/shoe/IMG_6713.jpeg"
                ] 
            },
            { 
                title: "Sketches", 
                desc: "Various sketches in different mediums.", 
                images: ["https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/sketches/sKETCHES.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/sketches/Hangover%20Hank.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/sketches/IMG_1162.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/sketches/IMG_1471.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/sketches/Parfum.jpg",
                    "https://raw.githubusercontent.com/efl226/portfolio/main/images/industrialDesign/sketches/ToothTutor.jpg"
                ] 
            },
            { 
                title: "Self Portrait", 
                desc: "Project from 2D Design class.", 
                images: ["https://raw.githubusercontent.com/efl226/portfolio/main/images/misc/Self--portait%20FINAL.jpg"] 
            }
        ];

        let currentProjectIndex = 0;
        let currentImageIndex = 0;

        // --- NAVIGATION LOGIC ---
        function openProject(id) {
            const container = document.getElementById('project-view');
            const home = document.getElementById('home-view');
            const about = document.getElementById('about-view');
            const gallery = document.getElementById('gallery-view');

            container.innerHTML = projectPages[id] || projectPages['ipsos'];
            
            home.style.display = 'none';
            about.style.display = 'none';
            gallery.style.display = 'none';
            container.style.display = 'block';
            
            window.scrollTo(0, 0);
            initObservers();
            
            // Re-run icons AFTER content injection
            lucide.createIcons();
        }

        function showHome() {
            document.getElementById('project-view').style.display = 'none';
            document.getElementById('about-view').style.display = 'none';
            document.getElementById('gallery-view').style.display = 'none';
            document.getElementById('home-view').style.display = 'block';
            window.scrollTo(0, 0);
            initObservers();
        }

        function showAbout() {
            document.getElementById('home-view').style.display = 'none';
            document.getElementById('project-view').style.display = 'none';
            document.getElementById('gallery-view').style.display = 'none';
            document.getElementById('about-view').style.display = 'block';
            window.scrollTo(0, 0);
            initObservers();
        }

        function showGallery() {
            document.getElementById('home-view').style.display = 'none';
            document.getElementById('project-view').style.display = 'none';
            document.getElementById('about-view').style.display = 'none';
            
            const galleryView = document.getElementById('gallery-view');
            galleryView.style.display = 'block';
            
            // Render the gallery if empty
            renderGallery();
            
            window.scrollTo(0, 0);
        }

        function renderGallery() {
            const container = document.getElementById('gallery-container');
            
            // If already rendered, just re-trigger animations
            if (container.children.length > 0) {
                const items = container.children;
                Array.from(items).forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100 + (index * 50));
                });
                return;
            }

            galleryData.forEach((item, index) => {
                const div = document.createElement('div');
                // Removed 'reveal' class to decouple from global observer
                div.className = 'gallery-thumb'; 
                // Inline styles for the staggered animation logic
                div.style.opacity = '0';
                div.style.transform = 'translateY(20px)';
                div.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                div.onclick = () => openLightbox(index);
                // Use the first image as the thumbnail
                div.innerHTML = `
                    <img src="${item.images[0]}" alt="${item.title}">
                    <div class="gallery-overlay-text">
                        <span class="gallery-title-sm">${item.title}</span>
                    </div>
                `;
                container.appendChild(div);
                
                // Staggered animation trigger
                setTimeout(() => {
                    div.style.opacity = '1';
                    div.style.transform = 'translateY(0)';
                }, 100 + (index * 50));
            });
        }

        // --- LIGHTBOX LOGIC ---
        function openLightbox(index) {
            currentProjectIndex = index;
            currentImageIndex = 0; // Start at the first image
            updateLightboxContent();
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'flex';
            // Slight delay for opacity transition
            setTimeout(() => lightbox.classList.add('active'), 10);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        function changeSlide(step) {
            const project = galleryData[currentProjectIndex];
            
            // Cycle images within the current project
            currentImageIndex += step;
            
            if (currentImageIndex < 0) {
                currentImageIndex = project.images.length - 1;
            } else if (currentImageIndex >= project.images.length) {
                currentImageIndex = 0;
            }
            
            updateLightboxContent();
        }

        function updateLightboxContent() {
            const item = galleryData[currentProjectIndex];
            const currentImgSrc = item.images[currentImageIndex];
            
            document.getElementById('lb-img').src = currentImgSrc;
            document.getElementById('lb-title').innerText = item.title;
            
            // Add counter if there are multiple images
            const counterText = item.images.length > 1 
                ? ` <span style="font-size: 0.8rem; color: var(--accent);">(${currentImageIndex + 1}/${item.images.length})</span>` 
                : "";
                
            document.getElementById('lb-desc').innerHTML = item.desc + counterText;
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('lightbox').style.display === 'flex') {
                if (e.key === 'ArrowLeft') changeSlide(-1);
                if (e.key === 'ArrowRight') changeSlide(1);
                if (e.key === 'Escape') closeLightbox();
            }
        });

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