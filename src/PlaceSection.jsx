import React from "react";

const PlaceCard = ({image, title, description}) => {
    return(
        <div className="p-5 bg-white rounded-md shadow-[2px_2px_5px_rgba(0,0,0,0.2)] overflow-hidden w-80 text-center hover:shadow-[2px_2px_5px_rgba(0,0,0,0.5)] hover:scale-105">
            <img src={image} alt={title} className="w-70 h-50 object-cover rounded-md"/>
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p className="w-60 text-gray-800 text-center ml-6 text-sm">{description}</p>
            <button className="bg-white border px-4 py-2 mt-3 rounded-3xl hover:cursor-pointer hover:shadow-lg hover:bg-black hover:text-white hover:border-white"> Discover Place </button>
        </div>
    )
}

const PlaceSection = () => {
    const places = [
        {title: "London", image: "./src/assets/images/london.webp", description: "London, a city where history meets modern charm, invites you to explore its iconic landmarks, world-class museums, and vibrant streets."},
        {title: "Barcelona", image: "./src/assets/images/barcelona-spain.webp", description: "Barcelona, a city of vibrant culture and stunning architecture, welcomes you to explore its famous landmarks, beautiful beaches, and lively atmosphere."},
        {title: "Cluj Napoca", image: "./src/assets/images/cluj-napoca.webp", description: "Cluj-Napoca, a dynamic city blending history and innovation, invites you to explore its medieval architecture, vibrant student life, and scenic parks."},
        {title: "Paris", image: "./src/assets/images/paris.webp", description: "Paris, a city of romance and art, beckons you to discover its iconic landmarks, exquisite museums, and charming streets."},
        {title: "Rome", image: "./src/assets/images/rome.webp", description: "Rome, an eternal city rich in history, invites you to discover its ancient ruins, iconic monuments, and timeless beauty."},
        {title: "Amsterdam", image: "./src/assets/images/amsterdam.webp", description: "Amsterdam, a city of picturesque canals and rich culture, offers you a blend of historic charm, world-class museums, and vibrant nightlife."}
    ]
    return(
        <div className="p-10">
            <h1 className='text-center text-4xl font-bold'>Most famous places</h1>
            <h3 className='text-center text-lg text-gray-700'>Recommended</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-15">
                {
                    places.map((place, index) => (
                        <PlaceCard key={index} {...place}/ >
                    ))
                }
            </div>
        </div>
    )
}

export default PlaceSection