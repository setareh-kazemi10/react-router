import {NavLink } from "react-router-dom"
export default function Navbar() {
    return (
        <nav>
            <ul className='list-unstyled d-flex'>

                <li className='p-3'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-success' : ''}> Home </NavLink>
                </li>

                <li className='p-3'>
                    <NavLink to='/shop' end className={({ isActive }) => isActive ? 'text-success' : ''}>Shop</NavLink>
                </li>

                <li className='p-3'>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-success' : ''}>About</NavLink>
                </li>

            </ul>
        </nav>
    )
}
