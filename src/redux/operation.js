import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"

export const getAllContacts = createAsyncThunk("contacts/getAllContacts",
 async()=>{
    return fetch("https://68e3efa18e116898997a7fb7.mockapi.io/contacts/").then(res=>res.json())
})

export const addContact = createAsyncThunk("contacts/addContact",
async(contact, {rejectedWithValue})=>{
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(contact),
    }

    try{
        const response = await fetch("https://68e3efa18e116898997a7fb7.mockapi.io/contacts/", options)

        return await response.json()
    }catch(error){
        return rejectedWithValue("Сталася помилка")
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact",
async(contact, {rejectedWithValue})=>{
    const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(contact),
    }

    try {
        const response = await fetch(`https://68e3efa18e116898997a7fb7.mockapi.io/contacts/${contact.id}`, options)

        return await response.json()
    } catch (error) {
        return rejectedWithValue("Сталася помилка")
    }
})