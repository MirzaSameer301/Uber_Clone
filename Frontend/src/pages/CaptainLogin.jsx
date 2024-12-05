import React, { useState } from "react";
import { Link } from "react-router-dom";
import captainLogo from "../assets/pngimg.com - uber_PNG24.png";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmmit = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    
    setEmail("");
    setPassword("");
  };
  return (
    <div className="px-6 flex flex-col justify-between h-screen pb-5">
      <div>
        <form onSubmit={(e) => handleSubmmit(e)}>
          <div className="flex flex-col gap-5">
            <img className="w-20" src={captainLogo} alt="" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">What's your email</h3>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                type="email"
                required
                className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Enter Password</h3>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                required
                className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-black rounded text-white p-3 w-full text-xl font-semibold"
            >
              Login
            </button>
          </div>
        </form>

        <Link to={"/captain-signup"}>
          <p className="text-lg my-2">
            New Here? <span className="text-blue-800">Create New Account</span>{" "}
          </p>
        </Link>
      </div>
      <div className="">
        <Link to={"/login"}>
          <button className="bg-[#20ec34] text-white p-3 w-full text-xl rounded font-semibold">
            Login as User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;