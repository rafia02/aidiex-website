import React, { useEffect, useState } from 'react'
import business from "../images/business.png"


const data = [
  {
    img: "https://tidytheme.com/blackgallery/elizah/html/images/service_1.jpg",
    title: "Business Growth",
    icon: business,
    des: "Business Growth is a stage where the business reaches the point for expansion and seeks additional options to generate more profit. Business growth is a function of the business lifecycle, industry growth trends, and the owners desire for equity value creation."
  },
  {
    img: "https://tidytheme.com/blackgallery/elizah/html/images/service_2.jpg",
    title: "Advance Analtic",
    icon: "https://www.softcrylic.com/wp-content/uploads/2020/03/softcrylic-technology-platforms.png",
    des: "Business Growth is a stage where the business reaches the point for expansion and seeks additional options to generate more profit. Business growth is a function of the business lifecycle, industry growth trends, and the owners desire for equity value creation."
  },
  {
    img: "https://tidytheme.com/blackgallery/elizah/html/images/service_3.jpg",
    title: "Customer Insights",
    icon: "https://hivemarketingcloud.com/media/qjwhrbjo/hive-supported-service-icon.png?anchor=center&mode=crop&width=300&height=300&rnd=132919328316530000",
    des: "Business Growth is a stage where the business reaches the point for expansion and seeks additional options to generate more profit. Business growth is a function of the business lifecycle, industry growth trends, and the owners desire for equity value creation."
  }
];

export const Services = () => {



  return (
    <div className='service-main'>
      <div className='service-container'>
        <h1 className='title'>Our Services</h1>
        <p>Join Creative Solutions for weekly inspiration and education from creative professionals around the world. Learn More. Creative Solutions.</p>
        <hr />
      </div>


      <div className='details-container'>
        {
          data.map(d => <div>
            <img className='img-style' src={d.img} alt="" />
            <div className='title-container'>
              <img src={d.icon} alt="" />
              <h4>{d.title}</h4>
            </div>
            <p>{d.des}</p>
          </div>)
        }
      </div>



    </div>
  )
}
