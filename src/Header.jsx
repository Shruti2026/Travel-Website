import React from "react";

const Header = ()=>{
    return(
        <header className="flex justify-between items-center p-4 mt-5 mx-40">
            <h1 className="text-3xl font-bold -mt-3">Travel</h1>
            <nav>
                <ul className="flex space-x-10 text-xl">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Tour Packages</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><button className="bg-gradient-to-br from-black to-gray-500 hover:opacity-90 active:scale-95 text-white -mt-6 px-8 py-2 rounded-3xl shadow-md hover:cursor-pointer">Explore Places</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header