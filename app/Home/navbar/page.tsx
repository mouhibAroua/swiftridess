"use client"
import "./nav.css"
import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import axios from "axios";


interface MenuItem {
    title: string;
    path: string;
}

interface ProfileDropDownProps {
    class: string;
}

interface users {
    image_user: string;
}


const ProfileDropDown: React.FC<ProfileDropDownProps> = (props) => {
    const [state, setState] = useState(false);
    const [person,setPerson] = useState<users | null>(null);
    const profileRef = useRef<HTMLButtonElement>(null);
    const userId = localStorage.getItem('id');
    const logout=()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('idcompany');
        window.location.reload();
    }
    const navigation: MenuItem[] = [
        { title: "Settings", path:  `http://localhost:3001/client/updateProfile/${userId}` },
    ];
 


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
    },[]);

    useEffect(() => {
        const getOne = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/users/${userId}`)
            setPerson(response.data);
            
            
          } catch (error) {
            console.log(error);
          } 
        };
      
        getOne();
      }, []);
  

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
                        src={person?.image_user||"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"}
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
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}style={{ backgroundColor: 'rgba(128, 128, 128, 0.53)',backdropFilter:"blur(20px)" }}>
                {   
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-black lg:hover:bg-gray-50 lg:p-2.5 font-bold ml-2" href={item.path}>
                                {item.title}
                                
                            </a>
                            <button onClick={() =>logout() } className="loout"> LogOut</button>
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
                                        <a  href={item.path} className="text-white"  >
                                            {item.title }  
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <button onClick={() => window.scrollTo({ top: 1800, behavior: "smooth" })} className="whyusb"> Why Us</button>
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
                            <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.53)' }}>
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
                            </div>
                        </button>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;