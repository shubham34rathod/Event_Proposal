import React, { useEffect, useState } from "react";
import partyImg from '../image/private-party-venues.jpg'
import party from '../image/party-people-enjoy-concert-at-festival-summer-DHDMPWH.png'
import '../css/eventList.css'
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Cookie from 'js-cookie'


function EventList()
{
   let navigate=useNavigate()
   let location=useLocation()

   //authentication
   
   let a=Cookie.get('uid')
   // console.log(` a is ${a}`);
   if(!a)
   {
       navigate('/')
   }

   // console.log(location.state);
   let [eventLists,setEventList]=useState([])
   let [selectedEvent,setSelectedEvent]=useState([])
   let [selectFlag,setSelectFlag]=useState(false)


   //selected event
   useEffect(()=>{
      fetch(`https://event-proposal-backend-5ouz.onrender.com/selectedEvent/${location.state}`)
      .then((data)=>data.json())
      .then((res)=>{
         // console.log(res);
         if(res.length>0)
         {
            setSelectFlag(true)
            setSelectedEvent(res)
         }         
         else
         {
            setSelectFlag(false)
         }
      })
      .catch(()=>console.log('fetching error'))
   },[selectedEvent])


   //event list
   useEffect(()=>{
      fetch('https://event-proposal-backend-5ouz.onrender.com/fetchingEventData')
      .then((data)=>data.json())
      .then((res)=>{
      //   console.log(res)
        setEventList(res)
      })
      .catch(()=>console.log('fetching error'))
   },[eventLists])

   // function navigation()
   // {

   // }

    return <>
       <div className="partyImg01">
         <Header></Header>
         <img src={partyImg} alt="photo"  className="samplePartyImg"/>
       </div>
       {/*selected events......... */}

       {selectFlag && <>
         {selectedEvent.map((data)=><>
            <div className="eventListBox">   
              <p className="proposals">Selected</p>
              <div className="eventList">
                 <div className="listOfEvent">
                    <div className="subListOfEvent">
                        <img src={data.image[0]} alt="events" className="partyEvent" />
                        <h6 style={{paddingLeft:'10px',marginTop:'5px'}}>{data.vendor_name}</h6>
                        <p style={{paddingLeft:'10px',marginTop:'0px',fontSize:'14px'}}>{data.budget}/-</p>
                        <p style={{paddingLeft:'10px',marginTop:'-10px',fontSize:'14px'}}>{data.placeOfEvent}</p>
                    </div> 
                      </div> 
               </div>
            </div>
         </>)}
       
       </>}

       {/* <div className="eventListBox">
         <p className="proposals">Selected</p>
         <div className="eventList">
            <div className="listOfEvent">
               <div className="subListOfEvent">
                   <img src={party} alt="events" className="partyEvent" />
                   <h6 style={{paddingLeft:'10px',marginTop:'5px'}}>Vendor Name</h6>
                   <p style={{paddingLeft:'10px',marginTop:'0px',fontSize:'14px'}}>22,400/-</p>
                   <p style={{paddingLeft:'10px',marginTop:'-10px',fontSize:'14px'}}>Satara</p>
               </div> 
            </div> 
         </div>
       </div> */}
       

       {/*List of events...... */}
       <div className="eventListBox">
         <p className="proposals">Proposals</p>
         <div className="eventList">
         {eventLists.map((data)=><>
            <div className="listOfEvent" onClick={()=>navigate('/select_venue',{state:data})}>
                  <div className="subListOfEvent">
                      <img src={data.image[0]} alt="events" className="partyEvent" />
                      <h6 style={{paddingLeft:'10px',marginTop:'5px'}}>Vendor Name</h6>
                      <p style={{paddingLeft:'10px',marginTop:'0px',fontSize:'14px'}}>{data.budget}/-</p>
                      <p style={{paddingLeft:'10px',marginTop:'-10px',fontSize:'14px'}}>{data.placeOfEvent}</p>
                  </div> 
            </div> 
            </>)}
         </div>
       </div>
    </>
}

export default EventList
