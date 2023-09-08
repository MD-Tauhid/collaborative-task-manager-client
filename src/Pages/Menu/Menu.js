import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { getUserFromDb } from '../../utilities/fakedb';

const Menu = () => {
    const { user,logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    let name = null;

    if (user) {

        const totalUser = getUserFromDb();
        totalUser.map(singleUser => {
            if (singleUser.email == user.email) {
                console.log(singleUser)
                name = singleUser.name;
            }
        })
    }

    const handleLogout = () =>{
        logOut()
        .then(result =>{
            console.log(result);
            navigate('/login');
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="navbar bg-cyan-800 px-9">
            <div className="navbar-start">
                <div className="dropdown text-white">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/task'>Task</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case font-bold text-white text-2xl">Task<span className='text-orange-600'>Manager</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-lg font-semibold">
                    <li><Link to="/">HomeLogin</Link></li>
                    <li><Link to='/task'>Task</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    <h2 className='text-white text-xl font-bold mr-5'>{name}</h2>
                </div>

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png" alt='user' />
                    </div>
                </label>

                <div>
                    <button className='btn btn-ghost text-white font-bold' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;