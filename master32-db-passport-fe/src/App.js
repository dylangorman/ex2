import "./App.css";
import { useState } from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Register />
      <Login user={user} setUser={setUser} />
      <Profile user={user} setUser={setUser} />
    </div>
  );
}

export default App;
