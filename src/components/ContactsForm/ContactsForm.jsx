import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operation';
import { getContacts } from '../../redux/selectors';
import { FormContainer, Backcdrop, Modal, CloseBtn } from './ContactsForm.styled';
import { IoCloseSharp } from 'react-icons/io5';

export const ContactsForm = ({onOpenModal}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const newContact = {
      id: Date.now(),
      name: form.elements.name.value,
      phone: form.elements.tel.value,
    };

    const isExist = contacts.some(contact => {
      return contact.phone === newContact.phone;
    });

    if (isExist) {
      alert(`Контакт з номером ${newContact.phone} вже існує`);
      form.reset();
      return;
    }

    dispatch(addContact(newContact));

    form.reset();

    onOpenModal()
  };

  return (
    <>
      <Backcdrop>
        <Modal>
          <h2>Додати контакт</h2>

          <CloseBtn onClick={onOpenModal} type="button">
            <IoCloseSharp size={18}/>
          </CloseBtn>
          <FormContainer onSubmit={handleSubmit} action="">
            <input type="text" name="name" placeholder="Ім'я" />
            <input type="tel" name="tel" placeholder="Номер Телефону" />
            <button type="submit">Створити</button>
          </FormContainer>
        </Modal>
      </Backcdrop>
    </>
  );
};
