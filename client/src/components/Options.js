import { SocketContext } from "../context/SocketProvider";
import { useContext, useState, React } from "react";

const Options = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(me);
    alert("ID copied to clipboard!");
  };

  return (
    <div className="options">
      <div>
        <h1>User Information</h1>
        <label>Enter Username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          width="100%"
        />
        <button onClick={copyToClipboard}>Copy ID</button>
      </div>
      <div>
        <h1>Call Information</h1>
        <label>Enter Calling Id</label>
        <input
          type="text"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          width="100%"
        />
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall}>End Call</button>
        ) : (
          <button onClick={callUser(idToCall)}>Call</button>
        )}
      </div>
    </div>
  );
};

export default Options;
