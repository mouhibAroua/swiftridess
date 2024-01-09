
const AllCars=()=>{
    return(
        <div>
        <h1 className="text-center font-bold text-5xl mt-20"> Choose your favorite car</h1>
        <div className="mt-10 container mx-auto px-4 py-8"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> 
        <div className="bg-white rounded-lg shadow-md h-[400px] w-[300px]"> 
        <img className="flex" src="https://www.wheelhero.com/blog/wp-content/uploads/2014/03/IMG_5647_zpsb04448a7.jpg"/>
        <div className="px-4 py-2 bg-gray-200 rounded-t-lg"> 
        <h1 className="text-lg font-semibold">Jeep XD</h1> 
        <p className="text-gray-600">Gasoline </p> 
        </div> 
        <div className="p-4"> 
        <p className="text-2xl font-semibold mb-2">200DT/Day</p> 
        <div className="grid grid-cols-2 gap-2"> 
        <button className="bg-gray-400  text-white font-bold  py-2 px-4 rounded"> Book Now </button> 
        </div> 
        </div> 
        </div> 
        <div className="bg-white rounded-lg shadow-md h-[400px] w-[300px]">
            <img className="flex" src="https://www.bloemendaalcs.nl/wp-content/uploads/2015/07/2015-Ferrari-Enzo-Luxury-Automotive.jpg"/> 
        <div className="px-4 py-2 bg-gray-200 rounded-t-lg"> 
        <h1 className="text-lg font-semibold">Ferrari Enzo</h1> 
        <p className="text-gray-600">Electric </p> 
        </div> 
        <div className="p-4"> 
        <p className="text-2xl font-semibold mb-2">200DT/Day</p> 
        <div className="grid grid-cols-2 gap-2"> 
        <button className="bg-gray-400  text-white font-bold  py-2 px-4 rounded">  Book Now </button>  
        </div> 
        </div> 
        </div>  
        <div className="bg-white rounded-lg shadow-md h-[400px] w-[300px]">
        <img className="flex" src="https://www.topgear.com/sites/default/files/2022/10/P90419458_highRes_the-new-mini-electri.jpg?w=976&h=549"/> 
        <div className="px-4 py-2 bg-gray-200 rounded-t-lg"> 
        <h1 className="text-lg font-semibold">Mini Cooper</h1> 
        <p className="text-gray-600">Gasoline </p> 
        </div> 
        <div className="p-4"> 
        <p className="text-2xl font-semibold mb-2">200DT/Day</p> 
        <div className="grid grid-cols-2 gap-2"> 
        <button className="bg-gray-400  text-white font-bold  py-2 px-4 rounded"> Book Now </button> 
        </div> 
        </div> 
        </div> 
        <div className="bg-white rounded-lg shadow-md h-[400px] w-[300px]">
        <img className="flex" src="https://www.topgear.com/sites/default/files/2022/10/P90419458_highRes_the-new-mini-electri.jpg?w=976&h=549"/> 
        <div className="px-4 py-2 bg-gray-200 rounded-t-lg"> 
        <h1 className="text-lg font-semibold">Mini Cooper</h1> 
        <p className="text-gray-600">Gasoline </p> 
        </div> 
        <div className="p-4"> 
        <p className="text-2xl font-semibold mb-2">200DT/Day</p> 
        <div className="grid grid-cols-2 gap-2"> 
        <button className="bg-gray-400  text-white font-bold  py-2 px-4 rounded"> Book Now </button> 
        </div> 
        </div> 
        </div> 
        </div> 
        </div>
        </div>
    )

}
export default AllCars