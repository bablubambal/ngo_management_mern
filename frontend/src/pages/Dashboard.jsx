import React from 'react'

import PageNav from './PageNav'
import EventList from '../components/EventList'
import ShowRequirements from '../components/ShowRequirements'
import EveryEvent from '../components/EveryEvent'
import CollobEvents from '../components/CollobEvents'
import GetDonors from '../components/GetDonors'

const Dashboard = () => {
 
  return (
    <>
   <PageNav/>
   <EventList/>
   <ShowRequirements/>
      
      {/* <EveryEvent /> */}
      <CollobEvents/>
      <GetDonors/>
    </>
  )
}

export default Dashboard
