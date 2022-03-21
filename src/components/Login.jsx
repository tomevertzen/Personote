import React from "react";
import { useState } from "react/cjs/react.development";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await Login(email, password);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-3/6">
        <h2 className="text-gray-700 text-3xl  mb-6">Login</h2>
        <label
          className="self-start text-sm font-medium text-gray-700 mb-0.5"
          htmlFor="email"
        >
          E-mailadres
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border rounded min-w-full mb-8 h-10 pl-2"
          name="email"
          type="text"
        />
        <label
          className="self-start text-sm font-medium text-gray-700 mb-0.5"
          htmlFor="password"
        >
          Wachtwoord
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border rounded min-w-full h-10 pl-2"
          name="password"
          type="password"
        />
        <span className="text-sm font-medium text-gray-700 mt-4 pl-1 flex items-center">
          <input
            id="savePassword"
            name="savePassword"
            type="checkbox"
            className="w-4 h-4 rounded-md mr-2  accent-green-600 fill-white pointer-events-auto"
          />
          <label htmlFor="savePassword">Wachtwoord onthouden</label>
        </span>
        <button className="border  h-10 rounded-lg shadow-sm mt-8 bg-green-500 text-white hover:bg-green-600">
          Inloggen
        </button>{" "}
        <button className="text-sm lower font-medium mt-3">
          Wachtwoord vergeten
        </button>
      </form>
    </div>
  );
};

export default Login;
