import React from "react";
import './App.css'
const D = ()=>{
     
    let  dateObj = new Date();
    const days = ['sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const day = days[dateObj.getDay()]
    const month = Months[dateObj.getMonth()]
    const Dates = dateObj.getUTCDate()
    const Year = dateObj.getFullYear()

   return(
    <div className="date"><h2>{day},{month} {Dates} {Year}</h2>
       
    </div>
   )

};


export default D;
