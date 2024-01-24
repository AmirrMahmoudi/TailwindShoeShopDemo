import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";

function App() {
  const [isSidearOpen, setIsSidearOpen] = useState(false);
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidearOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidearOpen}
        onClickClose={() => setIsSidearOpen(false)}
      >
        HI
      </Sidebar>
    </div>
  );
}

export default App;
