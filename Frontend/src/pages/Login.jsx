import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import { useContext } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const handleSubmmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

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

        <Link to={"/signup"}>
          <p className="text-lg my-2">
            New Here? <span className="text-blue-800">Create New Account</span>{" "}
          </p>
        </Link>
      </div>
      <div className="">
        <Link to={"/captain-login"}>
          <button className="bg-[#20ec34] text-white p-3 w-full text-xl rounded font-semibold">
            Login as Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
