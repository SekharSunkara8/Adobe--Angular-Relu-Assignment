import React, { useState } from 'react'
import LeftSidebar from '../components/leftSidebar'
import InstagramFeed from '../components/homeMain';
import RightSidebar from "../components/rightSidebar";
import withPrivate from "../hoc/withPrivate"

const Home = () => {
    
    
  return (
    <>
       <div className="flex min-h-screen align-middle w-full">
      <LeftSidebar />
      <div className="flex md:ml-[325px]">
        <InstagramFeed/>
          <div className='flex'>
          <RightSidebar />
          </div>
      </div>
    </div>
    </>
  )
}

export default withPrivate(Home)
