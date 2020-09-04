import React from "react";
import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserList />
      <UserProfile name="Vinod" email="s.vinod52@gmail.com" />
    </div>
  );
}

export default App;
