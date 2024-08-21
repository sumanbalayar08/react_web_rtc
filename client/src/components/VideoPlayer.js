import React, { useContext } from 'react'
import { SocketContext } from '../context/SocketProvider';

const VideoPlayer = () => {

    const {
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    } = useContext(SocketContext);

    return (
      <div>
        VideoPlayer
        <div>
          {name || "Name"}
          {stream && (
            <video playsInline muted ref={myVideo} autoPlay width="600" />
          )}
        </div>
        <div>
          {call.name || "Name"}
          {callAccepted && !callEnded && (
            <video playsInline ref={userVideo} autoPlay width="600" />
          )}
        </div>
      </div>
    );
}

export default VideoPlayer;