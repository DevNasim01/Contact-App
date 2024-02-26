import { useId } from "../hook/useId"

const Contact = ({ contacts, deleteCon, toggleAddUser }) => {
  
  const { setNewIdValue } = useId();

  const getId = (id) => {
    console.log("Received id:", id);
    setNewIdValue(id); // Set the id value using the custom hook
  };
  
  return (
    <section className="flex flex-col w-full mt-5 gap-5 items-center">
      {contacts.map((contact) => (
        <div key={contact.id} className="w-11/12 bg-[#FFEAAE] flex rounded-md gap-4 items-center px-5 py-1">
          <div className="text-3xl sm:text-4xl h-full grid place-items-center text-[#F6820C]"><i className="fa-solid fa-user"></i></div>
          <div className="w-full text-lg leading-6">
            <p><b>{contact.Name}</b></p>
            {contact.Ph && <p className="text-sm sm:text-lg"><span className="tracking-wider font-semibold">Ph:</span> {contact.Ph }</p>}
            {contact.Email && <p className="text-sm sm:text-lg"><span className="tracking-wider font-semibold">Email:</span> {contact.Email}</p>}
          </div>
          <div className="text-xl sm:text-2xl flex gap-4 justify-end items-center">
            <i className="fa-solid fa-user-pen p-1 cursor-pointer" onClick={()=> {
              toggleAddUser();
              getId(contact.id);
            }}></i>
            <i className="fa-solid fa-user-slash text-purple-800 cursor-pointer p-1" onClick={()=> deleteCon(contact.id)}></i>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
