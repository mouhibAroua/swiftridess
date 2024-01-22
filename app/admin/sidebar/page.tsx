"use client"
import React, { useState , useEffect , useRef } from "react";
import { List, ListItem, ListItemIcon, ListItemText,Menu,Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import axios from "axios";
import Link from 'next/link';


interface MenuItem {
  title: string;
  path: string;
}
interface obj {
  fullName:string;
  image_user:string;
}

interface User{
 
    id: number;
    fullName: string;
    image_user: string;
}

const Sidebar: React.FC <{}>= (props) => {
  const [state, setState] = useState(false);
  const [person,setPerson] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fullName,setfullName]=useState<string>("")
  const [image_user,setimage_user]=useState<string>("")
  const profileRef = useRef<HTMLButtonElement>(null);
  let id= typeof window !== 'undefined' ? localStorage.getItem("id"): null;

// console.log(id)


useEffect(() => {
  const getOne = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${id}`)
      setPerson(response.data);
      console.log("eya",response.data);
      
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  getOne();
}, []);
// const getOne = () => { 
//   axios
//     .get(`http://localhost:3000/api/users/${id}`)
//     .then(() => {
//       console.log("user");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//  };

  const navigation: MenuItem[] = [
    { title: "View Profile", path: "/admin/profile" }
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
  return (
    <div className=" fixed top-0 buttom-0 flex h-screen ">
      {/* Sidebar */}
      <div className="col-span-3 bg-gray-800 text-white px-7 py-7 w-[250px]">
        <List className="flex-col space-y-2">

        <div className="flex items-center justify-between">
  <Typography variant="h6" className="mt-2 mr-40" style={{ color: 'grey' }}>
    ADMINS
  </Typography>
 
  {/* <MenuOutlinedIcon /> */}

</div>
          <ListItem  className="flex items-center flex-col px-4 py-2 hover:bg-gray-1000" >
 
                  <div>
                  <div className="flex items-center space-x-4">
            <button ref={profileRef} className="w-24 h-24 outline-none rounded-full ring-offset-2 ring-gray-100 ring-2 lg:focus:ring-indigo-600"
                onClick={() => setState(!state)}>
                <img
                src={person?.image_user}
                 className="w-full h-full rounded-full"
          
                alt="Profile"
               // onChange={(e)=>setimage_user(e.target.value)} 
            />
            </button>


        </div>
                 
            
            <ul className={`bg-grey top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
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
        
            <ListItemText 
            primary={<p className="mt-2"></p>} />
            </div>    

          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <HomeOutlinedIcon color="primary" />
            </ListItemIcon>
            <Link href={'/admin/dashboard'} className="hover:bg-gray-300 hover:bg-opacity-50"><button > <ListItemText primary={<p>Dashboard</p>}/></button></Link>
          </ListItem>
          <Typography variant="h6" className="mt-2" style={{ color: 'grey' }}>
             Data
            </Typography>
            <ListItem button >
            <ListItemIcon >
              <GroupOutlinedIcon color="primary" />
            </ListItemIcon>
            <Link href={'/admin/client'}  className="hover:bg-gray-300 hover:bg-opacity-50"><button > <ListItemText primary="Clients" /></button></Link>
          </ListItem>
          <ListItem button >
            <ListItemIcon >
              <ContactMailOutlinedIcon color="primary"/>
            </ListItemIcon>
            <Link href={'/admin/company'}  className="hover:bg-gray-300 hover:bg-opacity-50"><button > <ListItemText primary="Companies" /></button></Link>
          </ListItem>
          <Typography variant="h6" className="mt-2" style={{ color: 'grey' }}>
             Details
            </Typography>
            <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon color="primary" />
            </ListItemIcon>
            
            <Link href={'/admin/profile'} className="hover:bg-gray-300 hover:bg-opacity-50"><button > <ListItemText primary="Profile"/></button></Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventOutlinedIcon color="primary" />
            </ListItemIcon>
            <Link href={'/admin/calendar'}  className="hover:bg-gray-300 hover:bg-opacity-50"><button ><ListItemText primary="Calendar" /></button></Link>
          </ListItem>
          <Typography variant="h6" className="mt-2" style={{ color: 'grey' }}>
             Charts
            </Typography>
          <ListItem button>
            <ListItemIcon>
              <PublicOutlinedIcon color="primary" />
            </ListItemIcon>
            <Link href={'/admin/geo'}  className="hover:bg-gray-300 hover:bg-opacity-50"><button > <ListItemText primary="Geography " /></button></Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <BarChartOutlinedIcon color="primary"/>
            </ListItemIcon>
            <Link href={'/admin/BarChart'}  className="hover:bg-gray-300 hover:bg-opacity-50"><button >  <ListItemText primary="Graph Chart" /></button></Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShowChartOutlinedIcon color="primary" />
            </ListItemIcon>
            <Link href={'/admin/LineChart'}  className="hover:bg-gray-300 hover:bg-opacity-50"><button > <ListItemText primary="Line" /></button></Link>
          </ListItem>
        </List>
      </div>

     


    </div>
  );
};

export default Sidebar;
