import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const handleLogOut = () => {
        
    }
    return (
        <div className="navbar bg-base-100 shadow-lg rounded-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Do work</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end text-black">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle bg-blue-800 avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                user.photoURL ?
                                                    <img src={`${user.photoURL}`} alt="" />
                                                    :
                                                    <div className='font-bold text-2xl text-white'>{user.email.slice(0, 1)}</div>
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName ? user.displayName : user.email}

                                            </a>
                                        </li>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>


                            :

                            <>
                                <Link to="/login" className='btn btn-primary mr-3'>
                                    Login
                                </Link>
                                <Link to="/register" className='btn btn-primary'>
                                    Register
                                </Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;