import React from 'react';

const StatsSection: React.FC = () => {
    const stats = [
        {
            data: "450+",
            title: "Cars For Rent"
        },
        {
            data: "800+",
            title: "Happy Clients"
        },
        {
            data: "750+",
            title: "Rental Locations"
        },
    ];

    return (
        <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-red-500 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        </h3>
                    <p className="mt-3">
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:flex-wrap lg:divide-x">
                        {stats.map((item, idx) => (
                            <li key={idx} className="text-center px-2 md:px-20">
                                <h4 className="text-4xl text-red-500 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium text-red-500">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
