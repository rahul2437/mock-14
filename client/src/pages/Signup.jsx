import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singup } from "../reducer/auth/actions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = (e) => {
    e.preventDefault();
    dispatch(singup({ email, password }));
  };

  return (
    <div className="mt-14">
      <div className="border md:w-1/2 mx-auto">
        <h1 className="text-center font-bold text-3xl">SIGNUP</h1>
        <form onSubmit={onSignup} className="flex flex-col p-4 gap-2">
          <input
            className="px-2 py-1 border rounde p-4d"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
          <input
            className="px-2 py-1 border rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <input
            className="px-2 py-1 border rounded bg-green-400 hover:bg-green-500 text-white font-bold"
            type="submit"
            value={"SIGNUP"}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
