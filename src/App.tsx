import DenseAppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar";
import AllTasks from "./components/AllTasks";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="bg-[#ea5959] min-h-screen flex flex-col justify-content items-center">
      <DenseAppBar
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="bg-white w-5/6 mt-8 flex rounded-sm">
        <Sidebar
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <div className="w-[1px] bg-gray-300 shadow hidden sm:block"></div>
        <AllTasks selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
