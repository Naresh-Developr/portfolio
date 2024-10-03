import { useEffect, useState } from 'react';
import port1 from '../assets/port.png';
import project1 from '../assets/project2.jpeg'
import mac1 from '../assets/mac.jpg'
import train1 from '../assets/train.jpeg'

const Projects = () => {
    const content = [
        { title: "MAC-Changer", description: "Build a CLI-Linux tool used to change the MAC-Address of the System", image: mac1 },
        { title: "DOS-Script", description: "Developed a python script that performs DOS attact on the target, by Multithreading concept", image: project1 },
        { title: "Portfolio", description: "Developed a Portfoilio in react for Myself to showcase my skills in different tech aspects of technology and to give a quick intro about me and my projects.", image: port1 },
        { title: "Train-Reservation-System", description: "Build a Train Reservation system in java, that works like a SAP application which has all of the functionalies like a actual system that is used.", image: train1 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [projectsPerSlide, setProjectsPerSlide] = useState(2); // Default is 2 for desktop

    // Autoplay Logic (change slides every 3 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 4000); // 3 seconds interval

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex, projectsPerSlide]);

    // Detect screen size and update projects per slide
    useEffect(() => {
        const updateProjectsPerSlide = () => {
            if (window.innerWidth < 768) {
                setProjectsPerSlide(1); // Show 1 project per slide on mobile
            } else {
                setProjectsPerSlide(2); // Show 2 projects per slide on desktop
            }
        };

        updateProjectsPerSlide(); // Initial check

        window.addEventListener('resize', updateProjectsPerSlide); // Listen for screen resize events
        return () => window.removeEventListener('resize', updateProjectsPerSlide); // Cleanup on unmount
    }, []);

    // Move to the next slide
    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + projectsPerSlide) % content.length); // Loop back when reaching the end
    };

    // Get the displayed projects based on currentIndex and projectsPerSlide
    const getDisplayedProjects = () => {
        const displayed = [];
        for (let i = 0; i < projectsPerSlide; i++) {
            displayed.push(content[(currentIndex + i) % content.length]);
        }
        return displayed;
    };

    const displayedProjects = getDisplayedProjects();

    return (
        <section id = "projects"className="py-10 bg-home">
            <h2 className="text-white text-3xl text-center font-bold mb-8">Our Projects</h2>
            <div className="slider-container">
                <div className="flex justify-center gap-8">
                    {displayedProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="project-image" src={project.image} alt={project.title} />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {project.title}
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
