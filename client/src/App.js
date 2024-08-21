import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <h1>Video Chatting App using React Web RTC</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
