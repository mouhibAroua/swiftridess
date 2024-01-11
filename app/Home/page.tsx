import Head from "./navbar/page"
import Add from "./Add/page";
import CarModels from './CarModels/Marques'
const Home = () => {
    return ( 
        <div>
            <Head/>
            <Add/>
            <CarModels/>
        </div>
     );
}
 
export default Home;