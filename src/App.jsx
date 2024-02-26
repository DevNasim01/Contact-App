import { useState } from "react";
import Navbar from "./components/Navbar"
import ScearchBar from "./components/ScearchBar"
import Screen from "./components/Screen"

function App() {
    const [showAddContact, setShowAddContact] = useState(false);

    const toggleAddContact = () => {
      setShowAddContact(prev => !prev);
      
    }
  return (
    <>
    <Navbar />
    <ScearchBar toggleAddUser={toggleAddContact} />
    <Screen showAddContact={showAddContact} toggleAddUser={toggleAddContact}/>
    </>
  )
}

export default App