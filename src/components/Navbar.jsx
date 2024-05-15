import React, { useState } from "react";
import { countryIcon } from "../assets";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { searchApps } from "../redux/appsSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchApps(event.target.value.toLowerCase()));
  };

  return (
    <header id="header" className="relative bg-blue-800 w-full flex justify-center items-center">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link to="/" className="font-bold text-lg text-white block py-6">
              KAP.
            </Link>
          </div>
          <div className="flex items-center px-4 gap-6">
            {/* Currency */}
            <div className="hidden md:flex font-semibold text-base text-white cursor-pointer">USD</div>
            {/* lang */}
            <img src={countryIcon} alt="" className="hidden md:flex rounded-full w-8 h-8 cursor-pointer" />
            {/* Help */}
            <div className="hidden md:flex border border-white rounded-full w-6 h-6 items-center justify-center text-white cursor-pointer">?</div>
            {/* Darkmode toggle */}
            <button className="hidden md:flex w-6 h-6 items-center justify-center text-white">
              <DarkModeOutlinedIcon />
            </button>
            {/* Auth Button */}
            {!user && location.pathname != "/login" && location.pathname != "/register" && (
              <Link to="/login" className="bg-white text-primary px-4 py-2 rounded-md font-semibold">
                Sign in
              </Link>
            )}
            {user && (
              <>
                <span className="font-semibold text-white max-w-[100px] truncate">{user.username}</span>
                <button type="button" onClick={logout} className="bg-white text-primary px-4 py-2 rounded-md font-semibold">
                  Log out
                </button>
              </>
            )}
            <button className="flex text-white" onClick={()=>setSearchIsOpen(prev=>!prev)}>
              <SearchIcon />
            </button>
            {/* Mobile menu button */}
            <button type="button" className="md:hidden text-white">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {/* Search */}
      {searchIsOpen ? (
        <div className="absolute top-full left-1/2 w-full -translate-x-1/2 flex justify-center bg-white shadow-lg">
          <div className="container">
            <input type="text" placeholder="Search apps..." value={searchTerm} onChange={handleSearchChange} className="px-4 py-2 focus:outline-none w-full" />
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
