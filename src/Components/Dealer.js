import React from "react";
import { FaBoxes, FaUsers, FaWallet, FaUserCheck, FaChartPie, FaTruck } from "react-icons/fa";
import {Link}  from 'react-router-dom'
const Dealer = () => {
  const segments = [
    {
      title: "Cylinder Availability",
      description: "Check real-time availability of commercial cylinders in stock.",
      icon: <FaBoxes size={50} className="text-primary mb-3" />,
      link:"/resellercyclinder"
    },
    {
      title: "Resellers",
      description: "View and manage your network of resellers efficiently.",
      icon: <FaUsers size={50} className="text-success mb-3" />,
      link:'/managereseller'
    },
     {
      title: "Cylinder Availability Visual",
      description: "Analyze stock trends and availability with visual charts.",
      icon: <FaChartPie size={50} className="text-danger mb-3" />,
      link:'/cyclindervisual'
    },
    {
      title: "Payments",
      description: "Track and manage payments seamlessly in one place.",
      icon: <FaWallet size={50} className="text-warning mb-3" />,
    },
    {
      title: "Complete Profile",
      description: "Update your profile to ensure all details are accurate.",
      icon: <FaUserCheck size={50} className="text-info mb-3" />,
    },
   
    {
      title: "Today's Delivery",
      description: "Monitor and schedule today's cylinder deliveries effortlessly.",
      icon: <FaTruck size={50} className="text-secondary mb-3" />,
    },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 font-weight-bold">Dealer Dashboard</h2>
        <div className="row">
          {segments.map((segment, index) => (
            <div key={index} className="col-md-4 mb-4">
            <Link to={segment.link} className="text-decoration-none">  <div className="card shadow-lg border-0 card-hover">
                <div className="card-body">
                  {segment.icon}
                  <h5 className="card-title">{segment.title}</h5>
                  <p className="card-text">{segment.description}</p>
                </div>
              </div></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dealer;
