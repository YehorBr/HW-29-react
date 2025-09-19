import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Container } from 'components/Container/Container';
import { ContactsListStl } from './ContactList.styled';
import { SearchContact } from "../SearchContact/SearchContact";



export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterText = useSelector(getFilter)

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterText.toLowerCase()) || contact.tel.includes(filterText)
  })

  return (
    <>
      <Container>
        <h2 style={{ marginTop: '10px', textAlign: "center" }}>Контакти</h2>

        <SearchContact />

        <ContactsListStl>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            );
          })}
        </ContactsListStl>
      </Container>
    </>
  );
};
