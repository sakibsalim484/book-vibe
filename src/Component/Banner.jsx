import React from 'react';
import bannerimage from '../assets/Book banner.png'

const Banner = () => {
    return (
<div className="hero bg-base-200 min-h-screen container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={bannerimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
    
      <button className="btn btn-success mt-4">view the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;