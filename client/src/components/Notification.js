import { useContext } from "react"
import { SocketContext } from "../context/SocketProvider";

const Notification = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    
return (
  <>
    {call.isReceivingCall && !callAccepted && (
      <div>
        <h3> {call.name} is calling </h3>
        <button onClick={answerCall}>Answer Call</button>
      </div>
    )}
  </>
);
}
export default Notification
