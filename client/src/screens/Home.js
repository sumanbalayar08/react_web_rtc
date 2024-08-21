import React from 'react'
import Notification from '../components/Notification'
import VideoPlayer from '../components/VideoPlayer'
import Option from '../components/Option'

const Home = () => {
  return (
      <div>
          <VideoPlayer />
          <Option />
          <Notification/>
      </div>
  )
}

export default Home