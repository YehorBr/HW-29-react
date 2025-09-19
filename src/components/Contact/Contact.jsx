import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/action";
import { IoCallOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

export const Contact = ({contact}) =>{
    const dispatch = useDispatch()

    return <>
        <div>
            <h3><FaRegUserCircle style={{marginRight: "10px"}} size={20}/>{contact.name}</h3>
            <p><IoCallOutline style={{marginRight: "10px"}} size={18}/>{contact.tel}</p>
            <button onClick={()=>{dispatch(deleteContacts(contact.id))}} type="click"><MdOutlineDelete size={25}/></button>
        </div>
    </>
}