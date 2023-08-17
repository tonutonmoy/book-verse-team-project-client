
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../assets/image/logo.png";
import { BsCart3 } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {

  const {addToCartData}=useContext(AuthContext);


  
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red hover:text-orange-400" : " no-underline"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/all-books"
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/fd"
        >
          Popular Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/fd"
        >
          Old Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/addToCart"
        >
          
            <span className="mt-[5px]"><BsCart3  /></span>
            <span className="indicator-item badge badge-secondary mt-[5px]">{ addToCartData ? addToCartData.length : 0}</span>
         
            
        

        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto md:mb-10">
      <div className="navbar-start">
        <div className="drawer lg:hidden z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="">
              <Bars3Icon className="w-[24px]"></Bars3Icon>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <div className="flex justify-center">

                <Link to="/" className="w-[83px] h-[63px]  ">
                  <img className="" src={logo} alt="" />
                </Link>
              </div>
              {/* Sidebar content here */}
              <div>

                {navItems}
              </div>
            </ul>
          </div>
        </div>



        <Link to="/" className="w-[83px] h-[63px]  ">
          <img className="" src={logo} alt="" />
        </Link>

      </div>
      {/* ... rest of the code */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/login"
          className="btn-primary "
          activeClassName="active-link"
        >
          LogIn
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
