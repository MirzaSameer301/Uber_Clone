import React from 'react'
import { Link } from 'react-router-dom';
const Start = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
          <div className="bg-[url('https://c0.wallpaperflare.com/preview/544/866/352/black-traffic-light-on-go-signal.jpg')] h-screen w-full bg-cover bg-center px-7">
            <img
              src="https://icons-for-free.com/iff/png/512/uber-1324440247504689178.png"
              alt="uber-logo"
              className="w-20"
            />
          </div>
          <div className="bg-white p-5 flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Get Started with Uber</h2>
            <Link to="/login">
              <button className="bg-black text-white p-3 w-full text-xl rounded font-semibold">
                Continue
              </button>
            </Link>
          </div>
        </div>
      );
}

export default Start