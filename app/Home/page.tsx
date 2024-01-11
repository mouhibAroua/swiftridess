import Head from "./navBar/page"
import Add from "./Add/page";
import CarModels from './CarModels/Marques'
import Marques from "./CarModels/Marques"
import Date from "./DateTime/Date"
import Time from "./DateTime/Time"
import Location from "./DateTime/Location"
import MostRatedCars from "./CarModels/MostRatedCars"
import Stats from "./stats/page"

const Home = () => {
    return ( 
        <div>
            <Head/>
            <Add/>
            <CarModels/>
            <Marques/>
            <Date/>
            <Time/>
            <Location/>
            <MostRatedCars/>
            <Stats/>
        </div>
     );
}
 
export default Home;