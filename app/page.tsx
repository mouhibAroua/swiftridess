  // import Navigation from "../app/client/navbar/page"
  // import Footer from "../app/client/footer/page"
  // import Testimonials from "../app/client/ClientFeedBack/page"
  // import VehicleDetails from "../app/client/Vehicle/page"
  import Link from 'next/link';
  
  import './landingPage/landing.css';
  
  const carDetails = {
    name: 'Cupra Formentor',
    images: [
      'https://carvo.ch/assets/images/models/md-221/original/cupra-formentor-20-tsi-4drive-fs12KUNuaf.png',
      'https://www.cupraofficial.com/content/dam/public/cupra-website/cupra-global-navigation/models/cupra-range/x-large/cupra-formentor-model-conversion.png', // Add another image URL here
      'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2021-Cupra-Formentor-index.png', // Add another image URL here
    ],
    make: 'Cupra',
    model: 'Formentor',
    BodyType: "SUV",
    color: 'Black',
    price: "100Dt/Day",
    Registration: 2023,
    Milage: '2023', 
    Transmition: 'Automatique',
    FuelType: "Essence"
  };
  
const LandingPage = () => {

  return (
    <div className="imgg">
      <div className='w-[170px] mr-[60px] float-right'>
        <img src="https://cdn.discordapp.com/attachments/1113064451806076990/1194335663357706250/cars-removebg-preview.png?ex=65affac3&is=659d85c3&hm=b8ec15ee31a3111e9849af5b28bea28f65c5a92178a1a10389246381174dc3b8&" alt="" />
      </div>
    <div className="text-container absolute left-32 top-1/2 transform -translate-y-1/2">
      <h1 className="text-white text-5xl font-bold mb-9">Your Journey,</h1>
      <h1 className="text-white text-5xl font-bold">SWIFTLY</h1>
      <h1 className="text-gray-300 text-6xl font-extrabold">DELIVERED</h1>
      <Link href={'/Home'}><button className='text-white border rounded bg-red-800 mt-5 mr-[30px]'>Rent Now</button></Link>
      <Link href={'/LoginCompany'}><button className='text-white border rounded bg-red-800 mt-5'>company</button></Link>
    </div>
  </div>
  );
}

export default LandingPage;

