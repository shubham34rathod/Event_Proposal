import React from "react";
import '../css/header.css'

function Header()
{
    return <>
       <div className="header">
           <h1 className="logo">LOGO</h1>
           <div className="child">
               <span id="name">Vendor Name</span> &nbsp; <img src="https://png.pngitem.com/pimgs/s/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png" alt="profile phot" className="profile_img"/>
                <div class="dropdown">
                   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"    aria-expanded="false"></button>
                    <ul class="dropdown-menu">
                       <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>         
           </div>
       </div>
    </>
}
export default Header