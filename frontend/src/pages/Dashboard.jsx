import React from 'react'

import PageNav from './PageNav'
import EventList from '../components/EventList'
import ShowRequirements from '../components/ShowRequirements'
import EveryEvent from '../components/EveryEvent'
import CollobEvents from '../components/CollobEvents'

const Dashboard = () => {
 
  return (
    <>
   <PageNav/>
   <EventList/>
   <ShowRequirements/>
      
      {/* <EveryEvent /> */}
      <CollobEvents/>
    </>
  )
}

export default Dashboard
