"use client"
import React, { useState, useRef, useEffect } from "react";
import "./nav.css"
interface MenuItem {
    title: string;
    path: string;
}

interface ProfileDropDownProps {
    class: string;
}

const ProfileDropDown: React.FC<ProfileDropDownProps> = (props) => {
    const [state, setState] = useState(false);
    const profileRef = useRef<HTMLButtonElement>(null);

    const navigation: MenuItem[] = [
        { title: "Settings", path: "/" },
        { title: "Log out", path: "/" },
    ];
 const userId = localStorage.getItem('id');


    useEffect(() => {
        const handleDropDown = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setState(false);
            }
        };
        document.addEventListener('click', handleDropDown);
        return () => {
            document.removeEventListener('click', handleDropDown);
        };
    }, []);

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        className="w-full h-full rounded-full"
                        alt="Profile"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-gray-500">john@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {   
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-black-600 lg:hover:bg-gray-50 lg:p-2.5" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

const Navigation: React.FC = () => {
    const [menuState, setMenuState] = useState(false);

    const navigation: MenuItem[] = [
        { title: "Home", path: "/Home" },
        { title: "About", path: "/" },
        { title: "Contact", path: "/" },
        { title: "Sign", path: "/" },
    ];

  return (
        <nav className="">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="/Home">
                        <img
                            src="https://media.discordapp.net/attachments/1157269732219691038/1194220754376589352/cars-removebg-preview.png?ex=65af8fbf&is=659d1abf&hm=94eae9de317c04c8f6efeb2ce656743162493db62d430b29f3b8c0aa69da9b28&=&format=webp&quality=lossless&width=706&height=552" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 hover:text-gray-900">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ProfileDropDown 
                            class="mt-5 pt-5 border-t lg:hidden"
                        />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <ProfileDropDown 
                            class="hidden lg:block"
                        />
                        <button 
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
