import hero from '../assets/profile.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
    const [text] = useTypewriter({
        words: ['Computer Engineer', 'Cyber Student', 'Software Developer', 'Tech Enthusiast'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 40
    })

    return (
        <section  id="home"  className='flex flex-col md:flex-row px-20 lg:py-44 py-20 bg-home justify-center'>
            <div className='flex-col sm:py-32 md:block w-1/2'>
                <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 transition duration-500 ease-in-out">{text}</span>
                    <br /> Naresh K,
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 py-10">
                    At 17, my interest towards cybersecurity sparked a<br /> journey of discovery.
                    Today, I am on the path to<br /> becoming an elite programmer determined to<br /> <b className='font-bold text-red-500'>Do What I Want !</b>
                </p>

                <div className='flex'>
                    <a href='#'>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 122.88"
                        width="50" // Adjust size here
                        height="50"
                    >
                        <path
                            fill="#1da1f2"
                            fillRule="evenodd"
                            d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
                        />
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M97.52,39.06A29.27,29.27,0,0,1,89,41.39a15,15,0,0,0,6.51-8.19,29.71,29.71,0,0,1-9.4,3.59,14.81,14.81,0,0,0-25.6,10.13,14.45,14.45,0,0,0,.38,3.37A42,42,0,0,1,30.41,34.82a14.86,14.86,0,0,0-2,7.44h0A14.76,14.76,0,0,0,35,54.57a14.85,14.85,0,0,1-6.71-1.84v.19A14.8,14.8,0,0,0,40.15,67.43a14.74,14.74,0,0,1-3.9.52,16.2,16.2,0,0,1-2.8-.26A14.85,14.85,0,0,0,47.28,78,29.86,29.86,0,0,1,25.35,84.1a41.92,41.92,0,0,0,22.7,6.65c27.23,0,42.13-22.56,42.13-42.12,0-.65,0-1.28,0-1.91a29.83,29.83,0,0,0,7.38-7.65h0Z"
                        />

                    </svg>
                    </a>

                    <div className='px-5'>
                        <a href='https://www.linkedin.com/in/naresh0k/'>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 122.88 122.31"
                                width="50" // Adjust size here
                                height="50"
                            >
                                <path
                                    fill="#0a66c2"
                                    fillRule="evenodd"
                                    d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"
                                />
                                <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"
                                />

                            </svg>
                        </a>
                    </div>
                </div>
                <a href='https://drive.google.com/file/d/1BYeyRDVx9AuKTXcqU-EhnBTDZ8DwFeD0/view?usp=sharing'>
                <button className="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium
                text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
                dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Resume
                    </span>
                </button>
                </a>
            </div>
            <div className='sm:py-32'>
                <img className="rounded-full w-97 h-96 mt-10 " src={hero} alt="image description" />
            </div>
        </section>
    );
}
