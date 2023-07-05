import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import VendorLogin from "../VendorLogin";
import VendorRegister from "../VendorRegister";
import VendorCreatePro from "../VendorCreatePro";
import VendorProposal from "../VendorProposal";
import EventList from "../EventList";
import EventData from "../EventData";
import ForgotPassword from "../ForgotPassword";

function Router()
{
    return <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<VendorLogin></VendorLogin>}></Route>
            <Route path="/register" element={<VendorRegister></VendorRegister>}></Route>
            <Route path="/proposal_list" element={<VendorProposal></VendorProposal>}></Route>
            <Route path="/create_Proposal" element={<VendorCreatePro></VendorCreatePro>}></Route>
            <Route path="/events_list" element={<EventList></EventList>}></Route>
            <Route path="/select_venue" element={<EventData></EventData>}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
         </Routes>
      </BrowserRouter>
    </>
}

export default Router