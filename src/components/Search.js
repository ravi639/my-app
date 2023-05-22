import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./style1.css"
import { CSSProperties } from 'react'
import Cards from './Cards'
import { Card } from 'react-bootstrap'
import Sett from './Sett'



const Search = () => {

  const [fdata, setFdeta] = useState(Fooddata);

  const [copydata,setCopyData] = useState([]);

  const chanegData = (e)=>{
     let getchangedata = e.toLowerCase();

     if(getchangedata == ""){
       setCopyData(fdata);

     }
     else {
      let storedata = copydata.filter((ele,k)=>{
        return ele.rname.toLowerCase().match(getchangedata);
      })

       setCopyData(storedata)
     }

  }

  const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

 useEffect(()=>{
   setTimeout(()=>{
    setCopyData(Fooddata);
   },3000);
  
   
 })


  return (
    <>
    
      <div className="container d-flex justify-content-between align-items-center">
        <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>

      </div>

      <form className="container d-flex justify-content-center align-items-center mt-3">
        <div class=" mx-2 col-lg-4">
          
          <input type="text" class="form-control" id="text" aria-describedby="Search Restaurant"
           onChange={(e)=>chanegData(e.target.value)}
          placeholder='Search Restaurant'></input>
         
        </div>
        <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
      </form>


      <section className='iteam_section mt-4 container'>
        <h2 className='px-4'style={{fontWeight:"400"}}>Restaurants in Ahmedabad Open Now</h2>
        <div className='row mt-2 d-flex justify-content-around align-items-center'>
         { copydata && copydata.length ? <Cards data={copydata} /> :"empty"   } 
        </div>

        
        
      </section>
      
      


    </>
    
  )
}

export default Search
