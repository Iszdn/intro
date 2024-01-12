import React from 'react'
import ServiceSection from '../../components/HomePageCompponents/ServiceSection'
import HeaderSection from '../../components/HomePageCompponents/HeaderSection'
import AboutUs from '../../components/HomePageCompponents/Aboutus'
import OurTeam from '../../components/HomePageCompponents/OurTeam'
import ContactUs from '../../components/HomePageCompponents/ContactUs'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
    <>
   <Helmet>
    <title>Home</title>
   </Helmet>
   
    <HeaderSection/>
    <AboutUs/>
    <OurTeam/>
<ServiceSection/>
<ContactUs/>
    </>
  )
}

export default HomePage