import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserProfileBanner from "./components/UserProfileBanner";
import MenuContent from "./components/MenuContent";

const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("home");

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar setSelectedMenu={setSelectedMenu} />
        <div className="flex-1 p-6">
          <UserProfileBanner />
          <MenuContent selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

export default App;
