import logo from '../../../assets/logo copy.png'
import { useGen } from '../../../Providers/GeneralProvider'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {userData, logout} = useGen()

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 pl-2">
          <img src={logo} className='w-16' alt="" />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={userData?.profile_picture} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to={'/profile'} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar