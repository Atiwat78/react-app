import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border border-gray-200">
          <div className="flex flex-col items-center">
            <img
              src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-1/365395910_801262878034511_312671476005207560_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=EiOzeNuhHoUQ7kNvgGFBBTK&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=AafvgSNrbDY4DgI4T30wOHN&oh=00_AYB0Esi7UYhB7qo9XjotCpeb5VntDGak3gXw3MdQW4R-pg&oe=66DCADEA"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-teal-500 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">atiwat prebjutturat</h2>
            <p className="text-lg text-gray-700 mb-2">prebjutturat</p>
            <p className="text-lg text-gray-700 mb-4">1309903130673</p>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;