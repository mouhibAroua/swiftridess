  import Link from 'next/link';  
  import './landingPage/landing.css';

const LandingPage = () => {
  return (
    <div className="imgg">
      <div className='w-[170px] mr-[60px] float-right'>
        <img src="https://cdn.discordapp.com/attachments/1113064451806076990/1194335663357706250/cars-removebg-preview.png?ex=65affac3&is=659d85c3&hm=b8ec15ee31a3111e9849af5b28bea28f65c5a92178a1a10389246381174dc3b8&" alt="" />
      </div>
    <div className="text-container absolute left-32 top-1/2 transform -translate-y-1/2">
      <h1 className="text-white text-2xl font-bold mb-9">Your Journey,</h1>
      <h1 className="text-white text-4xl font-bold">SWIFTLY</h1>
      <h1 className="text-gray-300 text-5xl font-extrabold">DELIVERED</h1>
      <Link href={'/Home'}><button className='text-white border rounded bg-red-800 mt-5 mr-[30px]'>Rent Now</button></Link>
      <Link href={'/LoginCompany'}><button className='text-white border rounded bg-red-800 mt-5'>company</button></Link>
    </div>
  </div>
  );
}

export default LandingPage;

