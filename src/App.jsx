import { useState } from "react";
import Navbar from "./components/Navbar"
import ScearchBar from "./components/ScearchBar"
import Screen from "./components/Screen"
import IdContextProvider from "./context/IdContextProvider";

function App() {
    const [showAddContact, setShowAddContact] = useState(false);

    const toggleAddContact = () => {
      setShowAddContact(prev => !prev);
      
    }
  return (
    <>
    <IdContextProvider>
    <Navbar />
    <ScearchBar toggleAddUser={toggleAddContact} />
    <Screen showAddContact={showAddContact} toggleAddUser={toggleAddContact}/>
    </IdContextProvider>
    </>
  )
}

export default App