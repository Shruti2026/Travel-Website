import React from "react";

const HeroSection = () => {
    return(
        <section className="absolute px-45 pt-30">
            <h1 className="text-6xl font-bold ">Book an exclusive</h1>
            <h3 className="text-4xl pt-5">home for your personal travel</h3>
            <p className="text-xl pt-10">Each property is hand-picked</p>
            <p className="text-xl">Personally visited and cannot be found elsewhere</p>
            <button className="bg-gradient-to-br from-black via-gray-800 to-transparent text-white rounded-3xl px-8 py-2 mt-10 text-xl shadow-[2px_2px_3px_rgba(0,0,0,0.6)] hover:cursor-pointer active:scale-95 active:shadow-[2px_2px_8px_rgba(0,0,0,0.6)] hover:opacity-95">Explore Home</button>
        </section>
    )
}

export default HeroSection