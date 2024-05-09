import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../AuthProvider/AuthProvider'

export default function Navbar() {
    const {user, logOut} = useContext(authContext)
    
    const navLink = <>
        <li>
            <NavLink to='/'>
                Home
            </NavLink>
        </li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Car Doctor</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        
                    </div>
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            <button  onClick={()=>logOut()} className='btn'>Logout</button>
                        </ul>
                    </div> : <Link to='/login'><button className='btn btn-outline'>Login</button></Link>}
                    
                </div>
            </div>
        </div>
    )
}
