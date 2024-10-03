import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';


export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (toggleMenu) {
        setToggleMenu(false);
      }
    };


    if (toggleMenu) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleMenu]);

  return (
    <header className="flex justify-between items-center px-5 py-4 bg-head text-white relative">
      <a className="font-mono font-semibold text-xl" href="#">
        Naresh::K &#62;
      </a>
  
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white">
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
        aria-label="Toggle menu"
      >
        <Bars3Icon className="text-white h-6" />
      </button>

    
      <nav
        className={`fixed top-0 right-0 h-[60vh] w-2/3 bg-head rounded-bl-lg shadow-lg z-10 transform ${
          toggleMenu ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={() => setToggleMenu(false)}
          className="absolute top-4 right-4 text-white"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6" />
        </button>

        <ul className="flex flex-col items-center py-8 space-y-4 text-white">
          <li><a href="#about" onClick={() => setToggleMenu(false)}>About me</a></li>
          <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
