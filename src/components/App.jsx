import { GlobalStyles } from "GlobalStyles";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Hero } from "./Hero/Hero";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllContacts } from "../redux/operation";


export const App = () => {
  const[showModal, SetShowModal ] = useState(false)

  const dispatch = useDispatch()
  
  const handleShowModal = () =>{
    SetShowModal(prevState => !prevState)
  }

  useEffect(()=>{
    dispatch(getAllContacts())
  },[dispatch])

  return <>
     <Hero onOpenModal={handleShowModal}/>
     <ContactsList/>
     <GlobalStyles/>

      {showModal && <ContactsForm onOpenModal={handleShowModal}/>}
  </>
};
