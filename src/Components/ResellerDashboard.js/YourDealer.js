import React, { useContext,useEffect ,useState } from 'react';
import {ResellerContext } from '../../Context/ResellerContext'
import profile from '../../Assest/dealerprofile.png'

const YourDealer = () => {
  const {reseller} =useContext(ResellerContext)
  console.log(reseller.MyDealer[0])
  const [dealerdata,setDealerdata]=useState([''])

    useEffect(()=>{
       fetch(`https://demobackend-hhwe.onrender.com/api/reseller/push/get/${reseller.MyDealer[0]}` ,
     {   method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
      credentials:"include"
     })
     .then(res=>res.json())
     .then(result => {
      console.log(result);
      setDealerdata(result)
     })
    },[])
  return (
    <div className="container-fluid card  my-2" style={{width:"400px"}}>  
    <h4 className='text-center'>𝕄𝕪 𝔻𝕖𝕒𝕝𝕖𝕣</h4>
    <div className="row  ">  
      <div className="col-12 p-3">  
        <div className="text-center  d-flex align-item-center justify-content-center ">  
          <img src={profile} width="200" height="200" className="card" alt="Profile"  />  
        </div>  
         
      </div> 
      <div className="col-12   d-flex align-item-center justify-content-center  "> 
    <p className='text-center'> 
           <h5 class= "my-3  text-dark">Username: <span class="font-weight-bold text-primary">{dealerdata.username || "N/A"}</span></h5>  
            <h5 class=" my-3 text-dark">Full Name: <span class="font-weight-bold text-primary">{dealerdata.fullname || "N/A"}</span></h5>  
            <h5 class=" my-3 text-dark">Phone Number: <span class="font-weight-bold text-primary">{dealerdata?.Profile?.[0]?.phoneNo || "N/A"}</span></h5>  
            <h5 class=" my-3 text-dark">Email: <span class="font-weight-bold text-primary">{dealerdata.email || "N/A"}</span></h5>  
            <h5 class=" my-3 text-dark">Shop Name: <span class="font-weight-bold text-primary">{dealerdata?.Profile?.[0]?.shopname || "N/A"}</span></h5>  
            <h5 class= "my-3 text-dark">Location: <span class="font-weight-bold text-primary">{dealerdata?.Profile?.[0]?.location || "N/A"}</span></h5>
             </p> </div>  
    </div>  
  </div>
  );
}

export default YourDealer;
