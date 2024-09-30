import { useEffect, useState, useRef } from 'react';
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
    const sliderRef = useRef(null); // Create a ref for the slider

    // Autoplay Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length); // Loop back to first item
        }, 3000); // Change slides every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [content.length]);

    // Update the slider position based on currentIndex
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return (
        <section className="py-10 bg-home">
            <h2 className="text-white text-3xl text-center font-bold mb-8">Our Projects</h2>
            <div className='slider-container'>
                <div className='slider' ref={sliderRef}>
                    {content.map((project, index) => (
                        <div className='slide' key={index}>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="slide-image" src={project.image} alt={`Project ${index + 1}`} />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
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
