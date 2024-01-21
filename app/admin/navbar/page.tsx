"use client"
import React,{useRef,useState,useEffect} from "react"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import { useParams } from "next/navigation";
import "./search.module.css"

interface Menu {
    title: string;
    
  }
interface Search{
  fullName: string;
}

const navbar :React.FC =()=>{
    const [state, setState] = useState(false);
    const profileRef = useRef<HTMLButtonElement>(null);
    const [searched,setSearched]=useState<Search[]>([]);
    const {fullName} = useParams()


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
    
  const navigation: Menu[] = [
    {
       title: "Houssem wrote feedback"
  },
  {
    title:"mouhib sent an email to Company's name"
  },
  {
    title:"marwa updated her account"
  },
  {
    title:"Company's name respond to email's mouhib"
  }
];

const search = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/getName/${fullName}`);
  
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: Search[] = await response.json();
      setSearched(data);
      console.log("finded", data);
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div  className="flex-1 bg-gray-100 p-4 ml-[350px]">
     <nav className="flex items-center justify-end bg-white border-gray-200 dark:bg-gray-900 p-4">
      <div className="search-box flex items-center">
    <button className="btn-search"><i className="fas fa-search"></i>
    </button>
    <input type="text" className="input-search" placeholder="Type to Search..."/>
    <SearchIcon className="ml-2"/>
    <button><ChatIcon className="ml-2" /></button>
    <button ref={profileRef} onClick={() => setState(!state)}> <CircleNotificationsIcon className="ml-2" />
  
    </button>       

  </div>
  <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {   
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-black-600 lg:hover:bg-gray-50 lg:p-2.5">
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
  
</nav> 
        </div>
    )
}
export default navbar ;