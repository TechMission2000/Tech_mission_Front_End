import React from 'react'

function WorkHero() {
    return (
        <div style={{ backgroundImage: `url(/workhero.png)`, backgroundSize: 'cover' }} className="relative w-full h-[400px] overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>


            <div className="relative z-20 flex flex-col justify-center items-center w-full h-full text-center">
                <h1
                    className="text-white text-5xl md:text-6xl font-bold"
                    style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
                >
                    Our Work
                </h1>
                <p
                    className="text-white text-2xl mt-4"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                    Home / Work
                </p>
            </div>
        </div>
    )
}

export default WorkHero