import React, { useContext } from "react";
import { SocketContext } from "../context/SocketProvider";
import "../App.css";

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
    <div className="video-player">
      <div className="video-user">
        <div>{name || "My Name"}</div>
        {stream && (
          <video playsInline muted ref={myVideo} autoPlay width="500" />
        )}
      </div>
      <div>
        <div>{call.name || "Friend Name"}</div>
        {callAccepted && !callEnded ? (
          <video playsInline ref={userVideo} autoPlay width="300" />
        ) : (
          <p>No call</p>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
