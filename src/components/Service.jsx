import { Code, Smartphone, Brush, Cloud, ShieldCheck, Users } from "lucide-react";

export const services = [
    {
        slug: "web-development",
        title: "Web Development",
        icon: <Code className="w-10 h-10 text-blue-400 group-hover:scale-110 transition" />,
        iconColor: "text-blue-400",
        bgColor: "bg-blue-400/20",
        description: "Fast, scalable websites using React, Next.js and modern frameworks.",
        longDescription: [
            "We specialize in building blazing-fast, modern web applications tailored for scalability and SEO.",
            " From e-commerce to dashboards, we craft interactive UIs using React, Next.js, and modern JAMstack."
        ],
        features: [
            "Custom web app development",
            "Next.js, React, and Vite.js integration",
            "Headless CMS and API connectivity",
            "E-commerce integration",
            "Responsive UI and performance optimization"
        ],
        benefits: [
            "Blazing-fast load times",
            "SEO-ready with SSR & SSG",
            "Easily maintainable codebase",
            "Secure and scalable architecture",
            "Flexible CMS and content control"
        ],
        faqs: [
            {
                q: "Do you build websites from scratch?",
                a: "Yes, all our web projects are tailored to your exact business needs."
            },
            {
                q: "Is SEO included?",
                a: "Absolutely — we follow best SEO practices and support technical SEO features."
            }
        ],
    },
    {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        icon: <Smartphone className="w-10 h-10 text-green-400 group-hover:scale-110 transition" />,
        description: "Cross-platform mobile apps with Flutter and React Native.",
        iconColor: "text-green-400",
        bgColor: "bg-green-400/20",
        longDescription: [
            "We build scalable, performant mobile apps tailored for iOS, Android, and cross-platform needs.",
            " Whether you're launching an MVP or scaling a product, our team ensures responsive UX and rock-solid performance."
        ],
        features: [
            "iOS and Android Native App Development",
            "Cross-Platform Apps using Flutter & React Native",
            "UI/UX Design optimized for mobile interfaces",
            "API Integration & Cloud Syncing",
            "App Store & Play Store Deployment"
        ],
        benefits: [
            "Cost-efficient cross-platform solutions",
            "Agile development with quick iterations",
            "Clean, maintainable codebase",
            "Security-first development",
            "Performance optimized for all devices"
        ],
        faqs: [
            {
                q: "How long does it take to build a mobile app?",
                a: "Typically between 4–12 weeks depending on complexity and features."
            },
            {
                q: "Do you offer app maintenance?",
                a: "Yes, we offer ongoing support, bug fixing, and performance optimization."
            }
        ],
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        icon: <Brush className="w-10 h-10 text-pink-400 group-hover:scale-110 transition" />,
        description: "Intuitive and modern designs that improve user engagement.",
        iconColor: "text-pink-400",
        bgColor: "bg-pink-400/20",
        longDescription: [
            "We craft user experiences that are not just beautiful but also highly functional and conversion-optimized.",
            " Every pixel is placed with purpose, based on real user data and interaction insights."
        ],
        features: [
            "User Interface Design (UI)",
            "User Experience Research & Wireframing",
            "Interactive Prototypes",
            "Mobile-first responsive design",
            "Design Systems & Style Guides"
        ],
        benefits: [
            "User-friendly, accessible interfaces",
            "Faster user task completion",
            "Consistent brand presence",
            "Frictionless user flows",
            "Boost in engagement & retention"
        ],
        faqs: [
            {
                q: "Do you deliver designs in Figma or XD?",
                a: "Yes, we work with Figma primarily and can export to any format you need."
            },
            {
                q: "Can you redesign my existing site/app?",
                a: "Absolutely — we often improve legacy systems with modern UX."
            }
        ],
    },
    {
        slug: "cloud-integration",
        title: "Cloud Integration",
        icon: <Cloud className="w-10 h-10 text-purple-400 group-hover:scale-110 transition" />,
        description: "Deploy, scale, and manage on AWS, Firebase, and GCP.",
        iconColor: "text-purple-400",
        bgColor: "bg-purple-400/20",
        longDescription: [
            "We empower your apps to run efficiently and securely on the cloud using modern DevOps practices.",
            " Be it AWS, GCP, Firebase, or custom solutions — we handle deployments, scalability, and backups."
        ],
        features: [
            "Cloud Infrastructure Setup",
            "CI/CD Pipeline Configuration",
            "Serverless Functions & APIs",
            "Database Management",
            "Monitoring and Auto-scaling"
        ],
        benefits: [
            "Automatic scaling & high availability",
            "Reduced infrastructure costs",
            "Fast deployment & rollback",
            "Built-in monitoring tools",
            "Simplified backend operations"
        ],
        faqs: [
            {
                q: "Which platforms do you support?",
                a: "We support AWS, Google Cloud, Firebase, and others as per your preference."
            },
            {
                q: "Can I migrate my existing app to cloud?",
                a: "Yes, we assist with full cloud migration and infrastructure redesign."
            }
        ],
    },
    {
        slug: "qa-testing",
        title: "QA & Testing",
        icon: <ShieldCheck className="w-10 h-10 text-red-400 group-hover:scale-110 transition" />,
        description: "Manual and automated testing for flawless experience.",
        iconColor: "text-red-400",
        bgColor: "bg-red-400/20",
        longDescription: [
            "We ensure your application works flawlessly through rigorous functional, performance, and security testing.",
            " Our QA process is integrated into every step of development with test automation where it matters."
        ],
        features: [
            "Manual Testing (Functional, UI, UX)",
            "Automation Testing with Cypress, Playwright",
            "Performance & Load Testing",
            "Security & Vulnerability Scanning",
            "Bug Reporting & Tracking Integration"
        ],
        benefits: [
            "Early bug detection & fewer regressions",
            "Faster release cycles",
            "Confident feature rollouts",
            "Smooth user experience",
            "Better performance under load"
        ],
        faqs: [
            {
                q: "Do you provide both manual and automation testing?",
                a: "Yes, we provide both — based on the need and scale of your application."
            },
            {
                q: "Can you integrate with our CI/CD pipeline?",
                a: "Absolutely — we integrate with tools like GitHub Actions, GitLab, CircleCI, etc."
            }
        ],

    },
    {
        slug: "it-consulting",
        title: "IT Consulting",
        icon: <Users className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition" />,
        description: "Get expert tech strategy and architecture planning.",
        iconColor: "text-yellow-400",
        bgColor: "bg-yellow-400/20",
        longDescription: [
            "We help startups and enterprises plan the right tech stack, architecture, and roadmap for their product or business.",
            " From MVP launches to enterprise replatforming — we bring experience, clarity, and execution speed."
        ],
        features: [
            "Tech Stack Advisory",
            "Architecture Planning",
            "Team Augmentation Strategy",
            "Security & Compliance Planning",
            "Cost Optimization & Auditing"
        ],
        benefits: [
            "Avoid costly tech debt",
            "Choose the right tools from day one",
            "Improve team velocity",
            "Architect scalable systems",
            "Reduce infrastructure costs"
        ],
        faqs: [
            {
                q: "Is this only for startups?",
                a: "No — we consult for both early-stage startups and large enterprises."
            },
            {
                q: "Do you help with RFPs and planning documents?",
                a: "Yes — we prepare roadmaps, tech specs, and business documentation."
            }
        ],

    }
];
