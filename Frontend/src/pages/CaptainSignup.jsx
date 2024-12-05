import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import captainLogo from "../assets/pngimg.com - uber_PNG24.png";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const handleSubmmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicletype: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleCapacity(undefined);
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };

  return (
    <div className="px-6 flex flex-col justify-between h-screen pb-5">
      <div>
        <form onSubmit={(e) => handleSubmmit(e)}>
          <div className="flex flex-col gap-2">
            <img className="w-20" src={captainLogo} alt="" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                What's our captain's name
              </h3>
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
              <h3 className="text-xl font-semibold">
                What's our captain's email
              </h3>
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
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Vehicle Information</h3>
              <div className="flex flex-row gap-3">
                <input
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  placeholder="Color"
                  type="text"
                  required
                  className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
                />
                <input
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  placeholder="Plate"
                  type="text"
                  className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3">
                <input
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  placeholder="Capacity"
                  type="number"
                  min={1}
                  required
                  className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
                />
                <select
                  id="vehicleType"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="border bg-gray-200 border-gray-200 py-3 px-5 rounded w-full placeholder:text-lg placeholder:text-gray-500 outline-none"
                >
                  <option className="text-gray-200" value="" disabled>
                    Type
                  </option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black rounded text-white p-3 w-full text-xl font-semibold"
            >
              Register As Captain
            </button>
          </div>
        </form>

        <Link to={"/captain-login"}>
          <p className="text-lg my-2">
            Already have an account?{" "}
            <span className="text-blue-800">Login</span>{" "}
          </p>
        </Link>
      </div>
      <div className="">
        <Link to={"/signup"}>
          <button className="bg-[#6d67e3] text-white p-3 w-full text-xl mt-10 rounded font-semibold">
            Register as User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
