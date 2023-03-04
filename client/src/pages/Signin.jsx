import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singin } from "../reducer/auth/actions";

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth } = useSelector((store) => store.AuthReducer);

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(singin({ email, password }));
  };
  return (
    <div className="mt-14">
      <div className="border md:w-1/2 mx-auto">
        <h1 className="text-center font-bold text-3xl">LOGIN</h1>
        <form onSubmit={onLogin} className="flex flex-col p-4 gap-2">
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
            value={"LOGIN"}
          />
        </form>
      </div>
    </div>
  );
};
