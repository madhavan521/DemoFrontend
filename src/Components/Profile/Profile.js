import React, { useContext, useState } from 'react';  
import { ResellerContext } from '../../Context/ResellerContext';  
import Profile from '../../Assest/profile.png'; 
import { DealerContext } from '../../Context/DealerContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ResellerProfile = () => {  
  const { reseller } = useContext(ResellerContext);  
  const {dealer } = useContext(DealerContext)
  const navigate = useNavigate()

   const handleLogout=()=>{
    try{
      fetch('https://demobackend-hhwe.onrender.com/api/auth/reseller/logout' || "https://demobackend-hhwe.onrender.com/api/auth/dealer/logout",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        credentials:"include"
      })
      .then(res=>{
        console.log("Logout Successfully")
        toast.success("Logout Successfully")
        setTimeout(() => {
          navigate('/')
          window.location.reload()
          
        }, 1500);
      })

    }
    catch(err){
      console.error(err)
      toast.error(err.message)
    }
   }


  return (  
    <div>  
      <div className="container  d-flex justify-content-center align-item-center">  
        <div className="row my-5 card" style={{ width: "300px" }}>  
          <div className='d-flex justify-content-center align-item-center'>  
            <img src={Profile} alt="Profile" height='100px' width='100px' />  
          </div>  
          <div className="card m-2" style={{ width: "285px" }}>  
            <h6 className='text-center my-3 text-primary'>
            <strong  className="text-dark" > Fullname : </strong>{dealer?.fullname || reseller?.fullname || "N/A"}</h6>  
            <h6 className='text-center my-3 text-primary'> <strong  className="text-dark">  Email :</strong> {dealer?.email || reseller?.email || "N/A"}</h6> 
{/*          
             <h6 className='text-center my-3 text-primary'> <strong  className="text-dark">  Mobile Number :</strong> {dealer?.Profile[0].phone || reseller?.email ||"N/A"}</h6>  
             <h6 className='text-center my-3 text-primary'> <strong  className="text-dark"> Location : </strong> {dealer?.Profile[0].location || reseller?.email || "N/A"}</h6>  
             <h6 className='text-center my-3 text-primary'>  <strong className="text-dark">  Shop Name :</strong>{dealer?.Profile[0].shopname || reseller?.email || "N/A"}</h6> */}

             {
  dealer || reseller ? (
    <div>
      <h6 className="text-center my-3 text-primary">
        <strong className="text-dark">Mobile Number:</strong>{" "}
        {dealer?.Profile?.[0]?.phone || reseller?.Profile?.[0]?.phone || "N/A"}
      </h6>
      <h6 className="text-center my-3 text-primary">
        <strong className="text-dark">Location:</strong>{" "}
        {dealer?.Profile?.[0]?.location || reseller?.Profile?.[0]?.location || "N/A"}
      </h6>
      <h6 className="text-center my-3 text-primary">
        <strong className="text-dark">Shop Name:</strong>{" "}
        {dealer?.Profile?.[0]?.shopname || reseller?.Profile?.[0]?.shopname || "N/A"}
      </h6>
    </div>
  ) : null
}

 
            <button className='btn loginButton'>  
              Update Profile  
            </button>  
            <button className='btn loginButton' onClick={handleLogout} >  
              Logout
            </button>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ResellerProfile;