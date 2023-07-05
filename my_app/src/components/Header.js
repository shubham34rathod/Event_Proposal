import React from "react";
import '../css/header.css'
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header()
{
    let vendorName=useSelector((state)=>state.vendor_slice.name)
    let navigate=useNavigate()
    function logOut()
    {
        navigate('/')
    }
    return <>
       <div className="header">
           <h1 className="logo">LOGO</h1>
           <div className="child">
               <span id="name">{vendorName}</span> &nbsp; <img src="https://png.pngitem.com/pimgs/s/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png" alt="profile phot" className="profile_img"/>
                <div class="dropdown">
                   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"    aria-expanded="false"></button>
                    <ul class="dropdown-menu">
                       {/* <Link to='/'><li><a class="dropdown-item" href="#">Logout</a></li></Link> */}
                       <li onClick={logOut}><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>         
           </div>
       </div>
    </>
}
export default Header