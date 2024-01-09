  import Navigation from "../app/client/navBar/page"
  import Footer from "../app/client/footer/page"
  import Testimonials from "../app/client/ClientFeedBack/page"
  import VehicleDetails from "../app/client/Vehicle/page"

  const carDetails = {
    name: 'Cupra Formentor',
    images: [
      'https://carvo.ch/assets/images/models/md-221/original/cupra-formentor-20-tsi-4drive-fs12KUNuaf.png',
      'https://www.cupraofficial.com/content/dam/public/cupra-website/cupra-global-navigation/models/cupra-range/x-large/cupra-formentor-model-conversion.png', // Add another image URL here
      'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2021-Cupra-Formentor-index.png', // Add another image URL here
      // Add as many image URLs as needed
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
  
  
const Home: React.FC = () => {
  return (
    <div>
        <Navigation/>
        <VehicleDetails vehicle={carDetails} />

    </div>
    
  );
};

export default Home;
