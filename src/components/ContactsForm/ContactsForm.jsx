import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/action';
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
      tel: form.elements.tel.value,
    };

    const isExist = contacts.some(contact => {
      return contact.tel === newContact.tel;
    });

    if (isExist) {
      alert(`Контакт з номером ${newContact.tel} вже існує`);
      form.reset();
      return;
    }

    dispatch(addContacts(newContact));

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
