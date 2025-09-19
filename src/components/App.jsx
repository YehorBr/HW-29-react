import { GlobalStyles } from "GlobalStyles";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Hero } from "./Hero/Hero";
import { useState } from "react";

export const App = () => {
  const[showModal, SetShowModal ] = useState(false)
  
  const handleShowModal = () =>{
    SetShowModal(prevState => !prevState)
  }

  return <>
     <Hero onOpenModal={handleShowModal}/>
     <ContactsList/>
     <GlobalStyles/>

      {showModal && <ContactsForm onOpenModal={handleShowModal}/>}
  </>
};
