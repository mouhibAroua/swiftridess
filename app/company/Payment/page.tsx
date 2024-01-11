import React from 'react';
import Link from 'next/link';  

interface Plan {
  name: string;
  desc: string;
  price: number;
  isMostPop: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Basic Tier",
    desc: "",
    price: 12,
    isMostPop: false,
    features: [
      "Listing up to 5 vehicles for Rent",
      "Standard visibility in search results.",
      "Basic customer support",
    ],
  },
  {
    name: "Premium Tier",
    desc: "",
    price: 35,
    isMostPop: true,
    features: [
      "Listing up to 15 vehicles for Rent.",
      "Featured placement in search results.",
      "Enhanced visibility with a premium badge.",
      "Priority customer support",
      "Monthly analytics report on listing performance",
    ],
  },
  {
    name: "Platinum Tier ",
    desc: "",
    price: 60,
    isMostPop: false,
    features: [
      "Unlimited vehicle listings",
      "Top-tier visibility with a platinum badge",
      "Premium placement in search results and homepage features",
      "Dedicated account manager for personalized support",
      "Access to exclusive promotional opportunities",
      "Advanced analytics and insights for optimizing listings.",
      "Early access to new features and updates.",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className='py-14'>
      <div className="max-w-screen-xl mx-auto px-4 text-Slate-950 md:px-8">
        <div className='relative max-w-xl mx-auto sm:text-center'>
          <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
            Pricing for all MemberShips
          </h3>
          <div className='mt-3 max-w-xl'>
            <p>
            Drive Success with Swift Rides: Where Your Listings Take Center Stage 
            </p>
          </div>
        </div>
        <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
          {
            plans.map((item, idx) => (
              <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                {
                  item.isMostPop ? (
                    <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Most popular</span>
                  ) : null
                }
                <div className="p-8 space-y-4 border-b">
                  <span className='text-Blue-600 font-medium'>
                    {item.name}
                  </span>
                  <div className='text-Blue-600 text-3xl font-semibold'>
                    ${item.price} <span className="text-xl text-Blue-600 font-normal">/Month</span>
                  </div>
                  <p>
                    {item.desc}
                  </p>
                  <Link href={`Payment/checkout` }>
                  <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white   bg-black hover:bg-blue active:bg-blue-900'>
                  Get Started
                  </button>
                  </Link>
                </div>
                <ul className='p-8 space-y-3'>
                  <li className="pb-2 text-gray-800 font-medium">
                    <p>Features</p>
                  </li>
                  {
                    item.features.map((featureItem, idx) => (
                      <li key={idx} className='flex items-center gap-5'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-indigo-600'
                          viewBox='0 0 20 20'
                          fill='currentColor'>
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'></path>
                        </svg>
                        {featureItem}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
