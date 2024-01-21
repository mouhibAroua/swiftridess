import Head from "./navbar/page"
import Add from "./Add/page";
import Marques from "./CarModels/Marques"
import Date from "./DateTime/Date"
import Location from "./DateTime/Location"
import MostRatedCars from "./CarModels/MostRatedCars"
import Stats from "./stats/page"
import Occaion from "./SearchBuyOccasion/page";
import AboutUs from "./AboutUs/page";
import ClientFeedBack from "./ClientFeedBack/page";
import Foot from "./footer/page"
const Home = () => {
    return ( 
        <div>
            <Head/>
            <Add/>
            <Marques/>
            <Date/>
            <Location/>
            <MostRatedCars/>
            <Stats/>
            <Occaion/>
            <AboutUs/>
            <ClientFeedBack/>
            <Foot/>
        </div>
     );
}
 
export default Home;