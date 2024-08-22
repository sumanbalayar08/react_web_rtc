import React from 'react'
import Notification from '../components/Notification'
import VideoPlayer from '../components/VideoPlayer'
import Options from '../components/Options'

const Home = () => {
  return (
      <div>
          <VideoPlayer />
          <Options />
          <Notification/>
      </div>
  )
}

export default Home