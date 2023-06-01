import React from "react";
import Header from "./Header";
import backBtn from '../image/backButton.jpg'
import '../css/eventData.css'
import party from '../image/party-people-enjoy-concert-at-festival-summer-DHDMPWH.png'
import contact1 from '../image/contact1.jpg'
import contact2 from '../image/contact2.jpeg'
import contact3 from '../image/contatc3.jpg'

function EventData()
{
    return <>
       <Header></Header>
       <nav className="navBar">
        <div className="navBotton"><button className="select">Select</button></div>
        <div className="leftNaveTag">
           <img src={backBtn} alt="back" className="backBtn"/>
           <p className="nameOfVendor">Proposals &lt; John Contract</p>
        </div>
       </nav>
       <div className="eventInfo1">
          <div className="eventInfo01">
             <div id="venueInfo">
                <img src={party} alt="img" className="venueImg" />
                <p className="imgID">ID:0001</p>
                <p className="vendorName">Name &nbsp;&nbsp; <span style={{fontSize:'15px',color:'#1E2022'}}><b>Shubham Rathod</b></span></p> 
                <p className="vendorEmail">Email&nbsp;&nbsp; <span style={{fontSize:'15px',color:'#1E2022'}}><b>shubham@gmail.com</b></span></p> 
                <div className="dates">
                   <p className="startDate" style={{fontSize:'12px',color: '#767676'}}>Start Date <span style={{color:'#1E2022'}}><b>20 Dec 2021</b></span></p> 
                   <p className="endDate" style={{fontSize:'12px',color: '#767676'}}>End Date <span style={{color:'#1E2022'}}><b>20 Dec 2021</b></span></p> 
                </div>
                <div className="typeOfEvent">
                    <div className="type">
                        <p style={{fontSize:'12px',color: '#767676'}}>Event Type</p>
                        <p style={{marginTop:'-10px',borderRadius:'1px',width:'90px',paddingLeft:'10px',backgroundColor:'#D9ECFF',color:'#006BD9'}}>Marriage</p>
                    </div>
                    <div className="type">
                        <p style={{fontSize:'12px',color: '#767676'}}>Event class</p>
                        <p style={{marginTop:'-10px'}}>Class A</p>
                    </div>
                </div>
             </div>
          </div>
          <div className="eventInfo02">
               <h6 style={{fontSize:'18px',marginBottom:'20px'}}>Venue and Arrangements</h6>
               <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
               <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
               <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
               <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
                <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
          </div>
          <div className="eventInfo02">
                <h6 style={{fontSize:'18px',marginBottom:'20px'}}>Venue and Arrangements</h6>
                <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
                <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
                <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
                <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
                <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
          </div>
       </div>
       <div className="eventInfo2">
          <div className="eventInfo001">
             <h6><b>My albums</b></h6>
             <div className="imgBoxes">
                <div className="imgAlum">
                    <img src={party} alt="party" />
                </div>
                <div className="imgAlum"></div>
                <div className="imgAlum"></div>
                <div className="imgAlum"></div>
                <div className="imgAlum"></div>
                <div className="imgAlum"></div>
             </div>
          </div>
          <div className="eventInfo002">
          <h6><b>My albums</b></h6>
             <div className="imgBoxes">
                <div className="imgAlum01">
                    <img src={contact1} alt="contact" />
                    <p style={{paddingTop:'10px'}}>Contatc1</p>
                    <p>+91 XXXXXXXXXX</p>
                </div>
                <div className="imgAlum01">
                    <img src={contact2} alt="contact" />
                    <p style={{paddingTop:'10px'}}>Contatc1</p>
                    <p>+91 XXXXXXXXXX</p>
                </div>
                <div className="imgAlum01">
                    <img src={contact3} alt="contact" />
                    <p style={{paddingTop:'10px'}}>Contatc1</p>
                    <p>+91 XXXXXXXXXX</p>
                </div>
             </div>
          </div>
          <div className="eventInfo002">
          <h6 style={{fontSize:'18px',marginBottom:'20px'}}>Venue and Arrangements</h6>
               <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
               <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
               <p style={{color:'#767676',fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia dolores, error aliquam voluptas ipsum!</p>
               
          </div>
       </div>
    </>
}

export default EventData