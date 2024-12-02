import React from 'react'
import ServiceInfo from './ServiceInfo.js'
import Discussing from '../Assessts/Discussing.png'
import style from '../StyleContainer/ServiceDetails.module.css'

import PR from '../Assessts/1propertyregistration.jpg'
import Loans from '../Assessts/2loans.jpg'
import BL from '../Assessts/3buildinglicense.jpg'
import KC from '../Assessts/4khatachange.jpg'
import ES from '../Assessts/5eswathu.jpg'
import SMB from '../Assessts/6sitemerger.jpg'


function ServiceDetails({ serviceNumber }) {
  console.log(ServiceInfo[0].Tagline)
const IPR = ServiceInfo[serviceNumber].Image;
const ImgList = [PR,Loans,BL,KC,ES,SMB]
  return (
    <div>
      <div className={style.title}>
        <h2>{ServiceInfo[serviceNumber].Title}</h2>
        <h3>{ServiceInfo[serviceNumber].Tagline}</h3>
        <p>{ServiceInfo[serviceNumber].Description}</p>

      </div>
      <div className={style.ServiceDetailFlex}>
        <img src={ImgList[serviceNumber]} alt="" />
        {/* <img src={PR} alt="PR" /> */}
        <div className={style.ServiceOffer}>
          <h2>What We Offer</h2>
          <ul>
            {ServiceInfo[serviceNumber].WhatWeOffer.map((offer, index) => (
              <li key={index}> {offer}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.Conlusion}>
        <h3>Ready to register your property? Let us take care of the process.</h3>
        <button className={style.ContactUs}> <a href='https://wa.me/919611866449'>Contact Us</a></button>
      </div>
    </div>
  )
}

export default ServiceDetails
