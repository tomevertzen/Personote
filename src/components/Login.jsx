import React from "react";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logIn, user } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await logIn(email, password);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(typeof err.code);
      if (err.code === "auth/user-not-found") {
        setError("Dit account bestaat niet bij ons, probeer het nogmaals.");
      } else if (err.code === "auth/wrong-password") {
        setError("Onjuist wachtwoord, probeer het opnieuw.");
      } else {
        setError(err.code);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-3/6 xl:w-2/6">
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
        {error && (
          <span className="mt-2 text-red-500 font-medium">{error}</span>
        )}
        <span className="text-sm font-medium text-gray-700 mt-4 pl-1 flex items-center">
          <input
            id="savePassword"
            name="savePassword"
            type="checkbox"
            className="w-4 h-4 rounded-md mr-2  accent-green-600 fill-white pointer-events-auto"
          />

          <label htmlFor="savePassword">Wachtwoord onthouden</label>
        </span>
        <button
          className="border  h-10 rounded-lg shadow-sm mt-8 bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-700 disabled:font-medium"
          disabled={loading}
        >
          Inloggen
        </button>{" "}
        <button className="text-sm lower font-medium mt-3" disabled={loading}>
          Wachtwoord vergeten
        </button>
      </form>
    </div>
  );
};

export default Login;
