import { useEffect, useState } from "react"
import Contact from "./Contact"
import NotFound from "./NotFound"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"
import AddContact from "./AddContact"
import { useId } from "../hook/useId"

const Screen = ({showAddContact, toggleAddUser}) => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const {idValue} = useId();
  console.log(idValue)
  
  const contactsRef = collection(db, "Contacts ");
  const getContact = async () => {
    try {
      setLoading(true);
      const contactSnap = await getDocs(contactsRef);
      const filterdata = contactSnap.docs.map((doc)=>({
          ...doc.data(),
          id: doc.id
      }));
      setContacts(filterdata)
      setLoading(false) // Set loading to false when data fetching is complete
    } catch (error) {
      setLoading(false) // Set loading to false even in case of error
    }
  };

  useEffect(() => { 
    getContact();
  },[])

  const deleteContact = async (id) => {
    const contactDoc = doc(db, "Contacts ", id)
    await deleteDoc(contactDoc);
    setLoading(true);
    getContact();
  }
  const handleGetId = (id) => {
    console.log("Received id:", id);
    // You can do further processing with the id here
  };  
  return (
    <section className="flex justify-center">
      {showAddContact && <AddContact toggleAddUser={toggleAddUser} contactsReff={contactsRef} getContactFunction={getContact}/>}
      {loading ? ( 
        <div className="text-white text-xl mt-10">Loading...</div>
      ) : (
        contacts.length === 0 ? <NotFound /> : <Contact contacts={contacts} deleteCon={deleteContact} toggleAddUser={toggleAddUser} getId={handleGetId} />
      )}
    </section>
  )
}

export default Screen
