export const profile = {
    name: 'Mikołaj Gosztyła',
    title: 'Junior Software Engineer',
    location: 'Kraków, Poland',
    email: 'mikosztyla@gmail.com',
    links: {
        github: 'https://github.com/Mikosztyla',
        linkedin: 'https://www.linkedin.com/in/mikosztyla',
        itch: 'https://bulba1265.itch.io/',
    },
    about: [
        'Junior software engineer pursuing a master\'s degree in computer science at AGH University, with over 2 years of industry experience in Java and C# backend development across microservices and production systems.',
        'I work on enterprise platforms where reliability matters - from monitoring microservices at scale to resolving complex production incidents. I care about clean code, disciplined testing, and shipping software that holds up under real-world load.',
        'Outside of my day job, I lead community initiatives at AGH Code Industry and build games in Unity - experience that sharpened my teamwork, ownership, and ability to deliver under pressure.',
    ],
    experience: [
        {
            title: 'Software Developer',
            company: 'Coforge',
            date: 'Apr 2025 - Present',
            location: 'Hybrid, Poland',
            highlights: [
                'Developed a virtual payments module integrated with existing system architecture and business logic.',
                'Led a Unicode compatibility initiative for non-ASCII character support across legacy systems.',
                'Resolved 10+ production issues with in-depth root-cause analysis, improving system stability.',
            ],
        },
        {
            title: 'Software Developer',
            company: 'Sabre',
            date: 'Oct 2024 - Apr 2025',
            location: 'Hybrid, Poland',
            highlights: [
                'Built a microservice replacing legacy JMX monitoring, improving modularity and observability.',
                'Worked in a 50+ microservice environment; improved integration test maintainability.',
                'Migrated applications from Java 8 to 17 using Maven.',
            ],
        },
        {
            title: 'Software Developer',
            company: 'Geotronics Dystrybucja',
            date: 'Sep 2023 - Dec 2023',
            location: 'Remote, Poland',
            highlights: [
                'Delivered a government-funded tunnel simulation with traffic flow logic and camera monitoring.',
                'Built a custom operator UI supporting crisis scenarios across 30+ device configurations.',
            ],
        },
        {
            title: 'Board Member',
            company: 'AGH Code Industry',
            date: 'Jul 2023 - Present',
            location: 'Kraków, Poland',
            highlights: [
                'Ran Git and Unity workshops; led 6 recruitment processes evaluating 200+ candidates.',
                'Organized bi-monthly community events with ~40 attendees on average.',
            ],
        },
        {
            title: 'Game Developer',
            company: 'AGH Code Industry',
            date: 'Apr 2023 - Present',
            location: 'Kraków, Poland',
            highlights: [
                'Led development of a 2D puzzle game in a 20+ person team using Scrum.',
                'Shipped Zwiedzaj i Graj to Google Play and the App Store - a tourism app for the Karkonosze region.',
                'Delivered 3 playable prototypes through game jams under tight deadlines.',
            ],
        },
    ],
    skills: {
        languages: ['Java', 'C#', 'SQL', 'Python'],
        backend: ['Spring Boot', 'REST APIs', 'Microservices', 'Maven'],
        tools: ['Git', 'Jenkins', 'JMeter', 'Bruno', 'Grafana', 'Viz', 'IntelliJ IDEA', 'Sonar', 'WireMock'],
        cloud: ['Google Cloud Platform', 'AWS'],
        other: ['Unity', 'MySQL', 'Docker', 'Scrum', 'CI/CD'],
    },
    education: {
        degree: 'B.Sc. Computer Science',
        school: 'AGH University of Science and Technology',
        period: '2022 - 2026',
        thesis: {
            title: 'Neural Dungeon - 3D Game with Procedurally Generated Levels and Adaptive AI Opponents',
            pdf: 'https://drive.google.com/file/d/1p8-O6rpuYE4T7nauQN1UoE8aqEXnAbkU/view?usp=sharing',
            github: 'https://github.com/Embodied-Neurons/neural-dungeon',
        },
    },
    achievement:
        'Two-time laureate of the AGH "Diamond Index" Mathematics Olympiad (2021, 2022) - direct admission to AGH.',
};
