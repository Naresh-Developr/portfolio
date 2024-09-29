import hero from '../assets/profile.jpg'

export default function Home()
{
    return <section className='flex flex-col md:flex-row px-20 py-44 bg-home justify-center '>
       <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Computer Engineer</span><br/>Naresh K,
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 py-10" >Started programming at the age of 17, I <br/>got a keen interest 
                towards Cyber Security<br/> and have explored multiple dimensions <br/> of it.
            </p>

            <button class=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
                
                dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Resume
                </span>
                </button>
        </h1>
        <img class="rounded-full w-97 h-96" src = {hero} alt="image description"/> 

               
    </section>  

}