/* import { useState } from 'react' */
import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

/* enum SelectedPage{
  Home  = "home",
  Sobre = "sobre",
  Projetos = "projetos"
}
 */
function App() {
  /* const [count, setCount] = useState(0) */
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className='app bg-gray-20'>
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
