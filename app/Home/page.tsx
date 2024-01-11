import Head from "./navBar/page"
import Add from "./Add/page";
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