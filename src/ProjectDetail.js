import React, { useEffect } from 'react';
import { FaGithub, FaYoutube, FaItchIo, FaGooglePlay, FaApple, FaFilePdf } from 'react-icons/fa';
import './ProjectDetail.css';
const ProjectDetail = ({ projectId, closeProjectDetail }) => {
    const projectData = {
        czasoport: {
            title: 'Czasoport',
            description: 'This project is the result of my first big and finished group project in AGH Code Industry. Working with over 20 people, first as a developer then also as a Scrum Master I\'ve led this project to the finish. It\'s a 2D future, fantasy, adventure and puzzle game made with C# and Unity, where you have to save the humanity from distinction.\n\nImmerse yourself in this world and crack all the puzzles!',
            images: [],
            github: 'https://github.com/Mikosztyla/czasoport',
            youtube: 'https://youtu.be/YTEHO9jmnjw',
            itch: 'https://bulba1265.itch.io/czasoport',
            responsibilities: 'In this project i did:\n- all the UI animations (time changing animation, item picking, etc)\n- player movement (with blend tree in Unity)\n- implementation of more then 50% of all the puzzles in the game',
            showcase: 'https://youtu.be/3SmRGB80rX0'
        },
        castle: {
            title: 'Zwiedzaj i Graj',
            description: 'Explore and Play is a mobile app that lets you discover the Karkonosze Mountains through an interactive field game. Scan QR codes at selected locations to unlock themed mini-games and local legends that bring regional history and folklore to life.\n\nThe app encourages active exploration, off-the-beaten-path routes, and learning through play. Progress and achievements can unlock real-world rewards at partner locations.\n\nReleased on Google Play and the App Store in collaboration with AGH Code Industry.',
            images: [],
            github: null,
            youtube: 'https://youtu.be/HWJH1YilQKk',
            itch: null,
            googlePlay: 'https://play.google.com/store/apps/details?id=com.AGHCodeIndustry.zamek',
            appStore: 'https://apps.apple.com/pl/app/zwiedzaj-i-graj/id6760973608',
            responsibilities: 'In this project I:\n- built all main screen UI animations\n- implemented 3D procedural terrain generation\n- contributed to a production release on Google Play and the App Store',
            showcase: 'https://youtu.be/z_teI7B7L-I'
        },
        thiefGame: {
            title: 'Thief Game',
            description: 'This is my first finished project. As a thief, your goal is to still "Mona Lisa" but it has a little twist at the end... It\' also an educational game, where you can get to know some paintings in the museum, that you want to rob.',
            images: [],
            github: null,
            youtube: 'https://youtu.be/bbnjuUQ-Wy4',
            itch: 'https://bulba1265.itch.io/thief-game',
            responsibilities: 'In this project i did:\n- guards movement\n- player animations',
            showcase: 'https://youtu.be/81JqwqenrBw'
        },
        bridgeAnim: {
            title: 'Brige animation',
            description: 'As for the university project my friend and I created a key frame animation of the bridge in Python for the 3D bridge model. We were working in the Maya software.',
            images: [],
            github: null,
            youtube: 'https://youtu.be/rxFoa_v7JbY',
            itch: null,
            responsibilities: 'In this project I did:\n - key frame based walking animation',
            showcase: 'https://youtu.be/rxFoa_v7JbY'
        },
        cubeSolver: {
            title: 'Rubik\'s cube solver',
            description: '3D representation of Rubik\'s cube is renderend without any external libraries. It uses matrix additions and multiplications to render the cube in perspective and enable rotating it. Additionaly, a solver, that return sequences of moves (written in official notation) to perform in order to solve the cube.',
            images: [],
            github: 'https://github.com/Mikosztyla/CubeSolver',
            youtube: 'https://youtu.be/C1gxVrBb6Ho',
            itch: null,
            responsibilities: 'This project was developed only by myself.',
            showcase: null
        },
        gears: {
            title: 'Trycon',
            description: 'This 2D platformer vampire-survivor like game was developed during 24h GameJam. The theme of the event was "Trybiki". As a team of 3 developers and 2 graphic designer we craeted a game, where gears are the essential amunition and also your currency. You have to updrade your base (rotate it 180 degrees), before the enemies get you, in order to win.',
            images: [],
            github: 'https://github.com/Mikosztyla/immerse-trybiki',
            youtube: 'https://youtu.be/-Kd6_FO9Kuw',
            itch: null,
            responsibilities: 'In this project i did:\n - modular shop\n - player blend tree animations\n - background animations',
            showcase: 'https://youtu.be/FYZvwRLlRNU'
        },
        lemurs: {
            title: 'Lemuringo',
            description: 'A 2D top-down educational game that combines writing and language learning. By utilizing a free, open-source dictionary API, we created an interactive platform where users can learn new words in their chosen language. The game allows players to create their own flashcards and test their knowledge in a fun and engaging way.',
            images: [],
            github: 'https://github.com/Mikosztyla/Lemuringo',
            youtube: 'https://youtu.be/_RzD-e05kFg',
            itch: null,
            responsibilities: 'In this project I did:\n- writing animation\n- boss attacks and animation\n- level selection\n- UI animations',
            showcase: null
        },
        gitCourse: {
            title: 'Git Course',
            description: 'I created this course to help others understand Git in a more effective and accessible way. Git can be intimidating at first, but with the right guidance, it becomes an essential and powerful tool for every developer.',
            images: [],
            github: 'https://github.com/Mikosztyla/git-course',
            youtube: null,
            itch: null,
            responsibilities: null,
            showcase: null
        },
        learningPlatformDB: {
            title: 'Learning Platform Database System',
            description: 'This project is a simple database system for a company offering learning courses, webinars, and studies. It allows managing courses, students, teachers, webinars, studies, and more. Designed as a foundational solution, it can serve as a base for more complex educational systems.',
            images: [],
            github: 'https://github.com/Mikosztyla/Learning-Platform-Database-System',
            youtube: null,
            itch: null,
            responsibilities: 'In this project I:\n- co-designed the database schema\n- implemented SQL procedures, triggers, views, and functions\n- collaborated closely with a team of three to complete a fully working backend structure for an education-focused platform',
            showcase: null
        },
        darwinWorld: {
            title: 'Darwin World: Simulation of Fighting for Survival',
            description: 'Final project for the Object-Oriented Programming course at AGH University of Krakow. This graphical JavaFX application simulates a simplified version of natural selection, where animals randomly traverse the map, eat grass to gain energy, reproduce, and eventually die if they run out of energy. The simulation includes customizable parameters, configuration saving, and CSV export for daily statistics like population and average energy.',
            images: [],
            github: 'https://github.com/Mikosztyla/Darwin-world',
            youtube: null,
            itch: null,
            responsibilities: 'In this project I:\n- co-implemented core simulation logic, including animal movement, energy system, and reproduction mechanics\n- developed configuration and statistics export features (CSV)\n- co-designed the GUI and simulation controls using JavaFX',
            showcase: null
        },
        neuralDungeon: {
            title: 'Neural Dungeon',
            description: 'Bachelor\'s thesis project (AGH, 2026) - a 3D Unity game with procedurally generated dungeon levels and AI opponents that adapt to player behavior.\n\nThe team implemented procedural map generation using Bowyer-Watson triangulation and Marching Cubes meshing, inverse kinematics for creature animation, and a machine-learning-driven difficulty system. The project was completed and released on GitHub.',
            images: [],
            github: 'https://github.com/Embodied-Neurons/neural-dungeon',
            youtube: 'https://youtu.be/DrzbOKQONlU',
            itch: null,
            thesis: 'https://drive.google.com/file/d/1p8-O6rpuYE4T7nauQN1UoE8aqEXnAbkU/view?usp=sharing',
            responsibilities: 'In this project I:\n- co-implemented procedural map generation using Bowyer-Watson and Marching Cubes algorithms\n- developed procedural animation systems using inverse kinematics\n- contributed to adaptive enemy difficulty based on an ML model',
            showcase: null
        },
        stockMarket: {
            title: 'Stock Market - Simplified Trading API',
            description: 'A high-availability stock trading simulation built with Java 21 and Spring Boot. Three application instances run behind an Nginx load balancer, sharing a PostgreSQL database with pessimistic locking to guarantee data integrity under concurrent buy/sell load.\n\nThe system includes rate limiting, a chaos endpoint to kill instances and verify failover, full observability (Prometheus, Grafana, Loki, Jaeger with OpenTelemetry tracing), and a CI pipeline with unit, functional, E2E, OWASP, SonarCloud, and k6 performance tests.',
            images: [],
            github: 'https://github.com/Mikosztyla/stock-market',
            youtube: null,
            itch: null,
            responsibilities: 'Solo project. I designed and built:\n- REST API for bank inventory, wallet buy/sell, and audit log\n- 3-instance load-balanced setup with Nginx health checks and Docker Compose\n- pessimistic locking + optimistic versioning for concurrent trade safety\n- observability stack: metrics, structured logs, distributed tracing\n- CI/CD with GitHub Actions and k6 load tests',
            showcase: null
        },
        cinemaProject: {
            title: 'Cinema Project',
            description: 'Window-based cinema management application built in Java using JavaFX, Spring, and REST APIs. This project enables both users and administrators to interact with a cinema system through a clean UI. Users will be able to browse movies, reserve seats, and provide feedback, while admins will manage screenings, analyze statistics, and oversee system-wide content. Key features include authentication, role-based access, and user notifications.',
            images: [],
            github: 'https://github.com/pajka2T/Cinema-app',
            youtube: null,
            itch: null,
            responsibilities: 'In this project I:\n- co-implemented seat reservation and user rating features\n- developed parts of the REST backend in Spring\n- handled authentication logic and error checking for invalid actions\n- contributed to the JavaFX UI and role-based view differentiation',
            showcase: null
        },
        chessSimulator: {
            title: 'Chess Simulator',
            description: 'A Java-based simulator of chess pieces, featuring a simple graphical representation of the chessboard and implementation of all standard chess rules. Developed as a solo project with a strong emphasis on clean code principles and maintainability. The application provides full movement logic and validation for all piece types, ensuring rule-compliant gameplay.',
            images: [],
            github: 'https://github.com/Mikosztyla/ChessSimulator',
            youtube: null,
            itch: null,
            responsibilities: 'This project was developed entirely by myself.\n- implemented full chess logic and rule validation\n- focused on clean code practices and maintainable structure',
            showcase: null
        },
        aghPinpals: {
            title: 'AGH PinPals',
            description: 'Mobile application designed for AGH students to help them connect and locate friends across the university campus and student housing area. Users can pin their current location, tag the purpose of their meetup, and discover events and promotions around the AGH Campus. The app supports public and private pins, tag-based filtering, and live event maps. Built with Flutter on the frontend and Spring Boot + MySQL on the backend.',
            images: [],
            github: 'https://github.com/AGH-Friend-FInder/agh_pin_palls',
            youtube: null,
            itch: null,
            responsibilities: 'In this project I:\n- developed the backend in Spring Boot\n- designed and implemented RESTful APIs for pin creation, filtering, and event management\n- integrated MySQL for data persistence\n- ensured proper user role separation and data visibility for public/private pins',
            showcase: null
        },
        vampotanica: {
            title: 'Vampotanica',
            description: 'Embrace your inner gothic lolita vampire in Vampotanic, a unique blend of Vampire Survivors chaos and strategic Tower Defense!\n' +
                '\n' +
                'As a powerful loli vampire, your serene forest lair, nestled amongst forgotten clearings, ancient graves, and crumbling shrines, is under siege. Hordes of relentless, axe-wielding monks, determined to eradicate your kind, are closing in under the cloak of night. But fear not, for you possess a dark, floral power unlike any other.',
            images: [],
            github: 'https://github.com/AGH-Code-Industry/BialJam2025',
            youtube: 'https://www.youtube.com/watch?v=5Vp39i5YCK8',
            itch: 'https://pitahaya-games.itch.io/vampotanica',
            responsibilities: 'In this project I:\n- Implemented player animations, core gameplay systems, and performance optimizations\n- Fixed bugs and improved overall game stability during intense horde encounters\n',
            showcase: null
        }
    };

    const project = projectData[projectId];

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button onClick={closeProjectDetail} className="close-button">X</button>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                            <FaGithub size={30} />
                        </a>
                    )}
                    {project.youtube && (
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-link" title="YouTube">
                            <FaYoutube size={30} />
                        </a>
                    )}
                    {project.itch && (
                        <a href={project.itch} target="_blank" rel="noopener noreferrer" className="project-link" title="itch.io">
                            <FaItchIo size={30} />
                        </a>
                    )}
                    {project.googlePlay && (
                        <a href={project.googlePlay} target="_blank" rel="noopener noreferrer" className="project-link" title="Google Play">
                            <FaGooglePlay size={30} />
                        </a>
                    )}
                    {project.appStore && (
                        <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="project-link" title="App Store">
                            <FaApple size={30} />
                        </a>
                    )}
                    {project.thesis && (
                        <a href={project.thesis} target="_blank" rel="noopener noreferrer" className="project-link" title="Bachelor's thesis (PDF)">
                            <FaFilePdf size={30} />
                        </a>
                    )}
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-responsibilities">{project.responsibilities}</p>
                {project.showcase && (
                    <div className="project-footer">
                        <div className="align-left">
                            <a href={project.showcase} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaYoutube size={30} />
                            </a>
                        </div>
                        <a href={project.showcase} target="_blank" rel="noopener noreferrer" className="anim-link">Click here to see the animations</a>
                    </div>
                )}
                <div className="project-images">
                    {project.images.map((img, index) => (
                        <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="project-image" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
