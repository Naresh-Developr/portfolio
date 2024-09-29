import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header(){

    const [toggleMenu,setToggleMenu]  = useState(false);


    return <header className=" flex justify-between px-5 py-4 bg-head text-white">
        <a className=" font-mono font-semibold text-xl" href="#">Naresh::K &#62; </a>
        <nav className='hidden md:block'>
            <li className="flex text-white">
                <ul href="#">About me</ul>
                <ul href="#">skills</ul>
                <ul href="#">projects</ul>
                <ul href="#">contact</ul>
            </li>
        </nav>
        { toggleMenu && <nav className='block md:hidden'>
            <li className="flex flex-col py-2  mob-nav text-white">
                <ul href="#">About me</ul>
                <ul href="#">skills</ul>
                <ul href="#">projects</ul>
                <ul href="#">contact</ul>
            </li>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-6'/></button>
    </header>
}