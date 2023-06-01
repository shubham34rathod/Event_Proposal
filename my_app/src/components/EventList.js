import React from "react";
import partyImg from '../image/private-party-venues.jpg'
import party from '../image/party-people-enjoy-concert-at-festival-summer-DHDMPWH.png'
import '../css/eventList.css'

function EventList()
{
    return <>
       <div className="partyImg01">
         <img src={partyImg} alt="photo"  className="samplePartyImg"/>
       </div>
       {/*selected events......... */}

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
            <div className="listOfEvent">
               <div className="subListOfEvent">
                   <img src={party} alt="events" className="partyEvent" />
                   <h6 style={{paddingLeft:'10px',marginTop:'5px'}}>Vendor Name</h6>
                   <p style={{paddingLeft:'10px',marginTop:'0px',fontSize:'14px'}}>22,400/-</p>
                   <p style={{paddingLeft:'10px',marginTop:'-10px',fontSize:'14px'}}>Satara</p>
               </div> 
            </div> 
            {/* <div className="listOfEvent">
               <div className="subListOfEvent"></div> 
            </div>
            <div className="listOfEvent">
               <div className="subListOfEvent"></div> 
            </div>
            <div className="listOfEvent">
               <div className="subListOfEvent"></div> 
            </div>
            <div className="listOfEvent">
               <div className="subListOfEvent"></div> 
            </div>
            <div className="listOfEvent">
               <div className="subListOfEvent"></div> 
            </div>            */}
         </div>
       </div>
    </>
}

export default EventList