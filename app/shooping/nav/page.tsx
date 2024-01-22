"use client"
import { useState ,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
// import Logout from '../Logout';
import axios from 'axios';
import { useCartStore } from '../stores/CartStore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./nav.css"

const Nav: React.FC = (props:{}) => {
  const router = useRouter()
  console.log(router);
  const userId = localStorage.getItem('idcompany');
  const [cartData, setCartData] =  useState<[]>([]);
  const [searchValue, setSearchValue] = useState<String>('');
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(cartData.length); 
  const cartStore = useCartStore();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/cart/UserCart/${userId}`)
      .then((response) => {
        console.log('houss', response.data);
        setCartData(response.data);
       
      })
      .catch((error) => console.log(error));
  }, [])
  
  const handleSearch = () => {
    console.log('Search value:', searchValue);
    router.push('/AllProducts');
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className='w-full bg-white z-10'>
      <nav>
        <div className='flex items-center justify-center gap-2 h-16 bg-black text-white'>
          <h3 className='text-sm md:text-base'>
            Keep An Eye On The Shop For Discounts
          </h3>
        </div>
        <div className='flex justify-center gap-8 mt-11 mb-6 ml-20'>
        <img id="logo" className='absolute left-10 font-bold text-3xl top-20	 mr-36'
                            src="https://media.discordapp.net/attachments/1157269732219691038/1194220754376589352/cars-removebg-preview.png?ex=65af8fbf&is=659d1abf&hm=94eae9de317c04c8f6efeb2ce656743162493db62d430b29f3b8c0aa69da9b28&=&format=webp&quality=lossless&width=706&height=552" 
                            width={120} 
                            height={20}
                            alt="Float UI logo"
                        />
          {/* <h1 className='absolute left-10 font-bold text-3xl mb-7 mr-36'></h1> */}
          <Link className="ktiba" href='../../company/DashBoard'>Dashboard</Link>
          <Link className="ktiba" href='../../shooping'>Store</Link>
         
         
     
          <div className='w-auto h-8 flex items-center gap-16 right-10 ml-10'>
           
            <div className='w-5 h-5  bg-red-500 rounded-full  flex justify-center items-center text-white'>
              {cartStore.cart.length}
            </div>
            <AiOutlineShoppingCart
              className='cart'
              size={25}
              onClick={() => navigateTo('/shooping/cart')}
            /><div className="userDropdown">
            </div>
            
            {/* <Logout/> */}
            
          </div>
        </div>
      </nav>
      <hr className='text-gray-300' />
    </div>
  );
};

export default Nav;