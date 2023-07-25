import { logoURL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
    
    const onlineStatus = useOnlineStatus();
    return(
        <div className='header flex justify-between bg-black shadow-lg mb-5 sticky'>
            <div className='logo-container p-5 m-5'>
            <img className='logo-img w-20 h-15' src={logoURL} />
        </div>
        <div className='nav-items p-5 m-5 flex items-center'>
            <ul className="flex">
                <li className="px-5">
                    <Link to='/' className="header-routes text-white">Home</Link>
                    </li>
                <li className="px-5">
                    <Link to='/about' className="header-routes text-white">About Us</Link>
                    </li>
                <li className="pX-5">
                    <Link to='/contacts' className="header-routes text-white">Contact</Link>
                    </li>
                    
                <li className="px-5 text-white">Cart</li>
                <li className="px-5 ">{onlineStatus ? "🟢" : "🔴"}</li>
            </ul>
           
        </div>
        </div>
       
    )
}

export default Header;