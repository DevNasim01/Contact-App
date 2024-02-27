import { useContext, useEffect, useState } from "react"
import Contact from "./Contact"
import NotFound from "./NotFound"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"
import AddContact from "./AddContact"
import IdContext from "../context/IdContext"

const Screen = ({showAddContact, toggleAddUser}) => {
  const [contacts, setContacts] = useState([])
  const {loading, setLoading} = useContext(IdContext)
  
  const contactsRef = collection(db, "Contacts ");
  const getContact = async () => {
    try {
      const contactSnap = await getDocs(contactsRef);
      const filterdata = contactSnap.docs.map((doc)=>({
          ...doc.data(),
          id: doc.id
      }));
      setContacts(filterdata)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => { 
    getContact();
  },[])

  const deleteContact = async (id) => {
    try {
      setLoading(true);
      const contactDoc = doc(db, "Contacts ", id)
      await deleteDoc(contactDoc);
      getContact();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex justify-center">
      {showAddContact && <AddContact toggleAddUser={toggleAddUser} contactsReff={contactsRef} getContactFunction={getContact}/>}
      {loading ? ( 
        <div className="text-white text-xl mt-10">Loading...</div>
      ) : (
        contacts.length === 0 ? <NotFound /> : <Contact contacts={contacts} deleteCon={deleteContact} toggleAddUser={toggleAddUser}/>
      )}
    </section>
  )
}

export default Screen
