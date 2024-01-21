"use client"
import "./nav.css"
import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
interface MenuItem {
    title: string;
    path: string;
}

interface ProfileDropDownProps {
    class: string;
}

const handleClick = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('idcompany');
      window.location.reload();
  };


const userId = localStorage.getItem('id');

const ProfileDropDown: React.FC<ProfileDropDownProps> = (props) => {
    const [state, setState] = useState(false);
    const profileRef = useRef<HTMLButtonElement>(null);

    const navigation: MenuItem[] = [
        { title: "Settings", path: `http://localhost:3001/client/updateProfile/${userId}` },
    ];

console.log (userId)

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


    ///testing scroll
    const [header,setHeader] =useState<boolean>(false)
    const [nav,setNav]=useState<boolean>(false)
    const deskMode=useMediaQuery({
        query:'(min-width:1300px)',
    })
    useEffect(() => {
        const handleScroll=()=>{
            if(window.scrollY>0){
                setHeader(true)
            }else{
                setHeader(false)
            }
            window.addEventListener('scroll',handleScroll)

            return ()=>{
                window.removeEventListener('scroll',handleScroll)
            }
        }
        console.log(header)
    },[])
  

    return (
        <header
        className={`${
          header ? 'fixed top-0 left-0 right-0 bg-white shadow-md' : ''
        } py-4 mx-auto z-90 transition-all duration-300`}
      >
        <div className={`relative ${props.class}`}  >
            {!userId? "":
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600 -mt-8"
                    onClick={() => setState(!state)}
                >
                    {!userId?"":<img
                        src="data:image/jpeg;base64,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"
                        className="w-full h-full rounded-full"
                        alt="Profile"
                    />}
                </button>
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-black">john@gmail.com</span>
                </div>
            </div>
}
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {   
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-black lg:hover:bg-gray-50 lg:p-2.5 font-bold ml-2" href={item.path}>
                                {item.title}
                            <br/>
                            </a>
                            <div className="loout"><button onClick={handleClick}>LogOut</button></div>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
        </header>
    );
};

const Navigation: React.FC = () => {
    const [menuState, setMenuState] = useState(false);

    const navigation: MenuItem[] = [
        { title: "Home", path: "/Home" },
        { title: "About", path: "/"  },
        { title: "Sign", path: "/UserLogin/Login" },
    ];

  return (
        <nav className="navv">
            <div className=" flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8 text-black">
                <div className="flex-none lg:flex-initial -mt-6">
                    <a href="/Home">
                        <img
                            src="https://media.discordapp.net/attachments/1157269732219691038/1194220754376589352/cars-removebg-preview.png?ex=65af8fbf&is=659d1abf&hm=94eae9de317c04c8f6efeb2ce656743162493db62d430b29f3b8c0aa69da9b28&=&format=webp&quality=lossless&width=706&height=552" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between text-black">
                    <div className={`bg-white  text-black absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5  text-black lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-red-800">
                                        <a  href={item.path} className="text-white" >
                                            {item.title }  
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <button onClick={() => window.scrollTo({ top: 2000, behavior: "smooth" })} className="whyusb"> Why Us</button>
                        <ProfileDropDown 
                            class="mt-5 pt-5 border-t lg:hidden"
                        />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6 ">
                        <ProfileDropDown 
                            class="hidden lg:block"
                        />
                        <button 
                            className="outline-none text-black block lg:hidden "
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