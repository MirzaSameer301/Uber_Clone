import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmmit = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };
  console.log(userData);
  
  return (
    <div className="px-6 flex flex-col justify-between h-screen pb-5">
      <div>
        <form onSubmit={(e) => handleSubmmit(e)}>
          <div className="flex flex-col gap-5">
            <img
              className="w-20"
              src="https://icons-for-free.com/iff/png/512/uber-1324440247504689178.png"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">What's your name</h3>
              <div className="flex flex-row gap-3">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  type="text"
                  required
                  className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  type="text"
                  className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>
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
              Register
            </button>
          </div>
        </form>

        <Link to={"/login"}>
          <p className="text-lg my-2">
            Already have an account? <span className="text-blue-800">Login</span>{" "}
          </p>
        </Link>
      </div>
      <div className="">
        <Link to={"/captain-signup"}>
          <button className="bg-[#20ec34] text-white p-3 w-full text-xl rounded font-semibold">
            Register as Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
