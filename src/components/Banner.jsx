import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/DwtJZC6/plant-2004483-1920.jpg)' }}>
            <div className=""></div>
            <div className="grid grid-cols-2">
                <div className="p-3 col-span-2 lg:col-span-1">
                    <h1 className="mb-5 text-4xl text-blue-700 font-bold">Facing problem with managing your works?</h1>
                    <h1 className="mb-5 text-7xl text-base-700 font-bold">Solution is one click away.</h1>
                    
                    <button className="btn btn-primary w-1/3"><span className=''>Let's Explore</span></button>
                </div>
                <div className=''>

                </div>
            </div>
        </div>
    );
};

export default Banner;