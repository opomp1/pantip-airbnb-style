import React from "react";
import MainNav from "./Navigation/MainNav";
import Room from "./Pages/Room";
import Announce from "./Pages/Announce";
import Highlight from "./Pages/Highlight";
import Realtime from "./Pages/Realtime";
import MobileNav from "./Navigation/MobileNav";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 lg:px-32 w-[100vw] max-w-[1980px] relative">
      <MainNav />
      <Room />
      <Announce />
      <Highlight />
      <Realtime />
      <MobileNav />
      <Footer />
    </div>
  );
}

export default App;
