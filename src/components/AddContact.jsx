import { addDoc, doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import IdContext from "../context/IdContext";
import { db } from "../config/firebase";

const AddContact = ({ toggleAddUser, contactsReff, getContactFunction }) => {
    const [formData, setFormData] = useState({ Name: "", Ph: 0, Email: "" });
    const [isDisabled, setIsDisabled] = useState(true);
    const { idValue, setLoading } = useContext(IdContext);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setIsDisabled(!(formData.Name && (formData.Ph || formData.Email)));
    };

    const addUser = async () => {
        try {
            setLoading(true)
            await addDoc(contactsReff, formData);
            getContactFunction();
        } catch (error) {
            console.error(error);
        }
    };

    const updateContact = async (id) => {
        try {
            setLoading(true)
            const contactDoc = doc(db, "Contacts ", id); 
            await updateDoc(contactDoc, formData); 
            getContactFunction();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="w-full h-screen absolute top-0 left-0 flex justify-center items-center bg-gl">
            <div className="w-4/5 bg-white px-8 py-8 flex flex-col items-start gap-2">
                <div className="text-black w-full text-right">
                    <span onClick={toggleAddUser} className="cursor-pointer px-3 py-2"><i className="fa-solid fa-xmark sm:text-lg"></i></span>
                </div>
                <label htmlFor="Name" className="flex flex-col w-full">
                    <span className="tracking-wider font-semibold text-lg mb-1">Name:</span>
                    <input onChange={handleInputChange} type="text" id="Name" name="Name" placeholder="Name" className="font-normal text-sm border-2 py-1 px-1.5 rounded-sm border-slate-400 focus:outline-none w-full" required />
                </label>
                <label htmlFor="Phone" className="flex flex-col w-full">
                    <span className="tracking-wider font-semibold text-lg mb-1">Ph:</span>
                    <input onChange={handleInputChange} type="number" id="Phone" name="Ph" placeholder="Phone" className="font-normal text-sm border-2 py-1 px-1.5 rounded-sm border-slate-400 focus:outline-none w-full" />
                </label>
                <label htmlFor="Email" className="flex flex-col w-full">
                    <span className="tracking-wider font-semibold text-lg mb-1">Email:</span>
                    <input onChange={handleInputChange} type="email" id="Email" name="Email" placeholder="Email" className="font-normal text-sm border-2 py-1 px-1.5 rounded-sm border-slate-400 focus:outline-none w-full" />
                </label>
                <button className={`border-2 px-4 py-2 rounded-md border-slate-950 hover:bg-slate-950 hover:text-white transition-all duration-500 w-1/3 self-center mt-5 ${isDisabled && 'opacity-50 cursor-not-allowed'}`} onClick={() => {
                    toggleAddUser();
                    
                    if (idValue !== null) { // Check if idValue is not null
                        updateContact(idValue);
                    } else {
                        addUser();
                    }
                }} disabled={isDisabled}>Submit</button>
            </div>
        </section>
    );
};

export default AddContact;
