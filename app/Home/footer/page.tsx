"use client"
import React from "react";

interface FooterNavItem {
    href: string;
    name: string;
}

const Footer: React.FC = () => {
    const footerNavs: FooterNavItem[] = [
        {
            href: 'https://www.youtube.com/watch?v=8zTboNCXiGs&list=RD8zTboNCXiGs&index=1  ',
            name: 'About'
        },
        {
            href: 'https://www.youtube.com/watch?v=8zTboNCXiGs&list=RD8zTboNCXiGs&index=1',
            name: 'Support'
        }
    ];

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="https://media.discordapp.net/attachments/1157269732219691038/1194220754376589352/cars-removebg-preview.png?ex=65af8fbf&is=659d1abf&hm=94eae9de317c04c8f6efeb2ce656743162493db62d430b29f3b8c0aa69da9b28&=&format=webp&quality=lossless&width=706&height=552" className="w-32 sm:mx-auto" alt="Float UI logo" />
                <p className="leading-relaxed mt-2 text-[15px]">
                Discover the freedom of the open road with SwiftRides. We are dedicated to providing reliable and affordable vehicle rentals for all your travel needs. Whether you're planning a weekend getaway or a cross-country adventure, we've got the perfect ride for you.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className=" hover:text-gray-800">
                            <a href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 Swift Rides rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    {/* Social media icons */}
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}

export default Footer;
