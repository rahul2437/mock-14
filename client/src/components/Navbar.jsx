import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../reducer/auth/actions";

const Navbar = () => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between h-16 bg-slate-400 px-4 shadow-md items-center">
      <div className="text-red-800 font-bold uppercase border rounded p-2 bg-blue-100 border-red-900">
        Bug tracker
      </div>
      {isAuth ? (
        <div className="flex gap-2">
          <Link
            className="border rounded px-2 py-1 hover:bg-slate-500"
            to={"/"}
          >
            Dashboard
          </Link>
          <button
            onClick={() => dispatch(logout())}
            className="border rounded px-2 py-1 hover:bg-slate-500"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            className="border rounded px-2 py-1 hover:bg-slate-500"
            to={"/signup"}
          >
            Signup
          </Link>
          <Link
            className="border rounded px-2 py-1 hover:bg-slate-500"
            to={"/login"}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
