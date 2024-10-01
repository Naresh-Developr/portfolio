import { useEffect, useState } from 'react';
import hero from '../assets/profile.jpg';


const Projects = () => {
    const content = [
        { title: "Project 1", description: "Noteworthy technology acquisitions 2021", image: hero },
        { title: "Project 2", description: "Biggest enterprise technology acquisitions", image: hero },
        { title: "Project 3", description: "Technology acquisitions in 2021 so far", image: hero },
        { title: "Project 4", description: "Technology acquisitions in 2021 so far", image: hero },
        { title: "Project 5", description: "Technology acquisitions in 2021 so far", image: hero },
        { title: "Project 6", description: "Technology acquisitions in 2021 so far", image: hero },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay Logic (change slides every 3 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 3000); // 3 seconds interval

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Move to the next two projects
    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % content.length); // Loop back when reaching the end
    };

    // Get the next two projects based on currentIndex
    const getDisplayedProjects = () => {
        const firstProjectIndex = currentIndex % content.length;
        const secondProjectIndex = (currentIndex + 1) % content.length;
        return [content[firstProjectIndex], content[secondProjectIndex]];
    };

    const displayedProjects = getDisplayedProjects();

    return (
        <section className="py-10 bg-home">
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
