import { Container } from 'components/Container/Container';
import { Icon, SearchWrapper } from './SearchContact.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/action';

export const SearchContact = () => {
    
    const dispatch = useDispatch()

    const handleChange = (e) =>{

        dispatch(filterContacts(e.currentTarget.value))
    }

  return (
    <>
      <Container>
        <SearchWrapper>
          <Icon />
          <input type="text" placeholder={` Введіть ім'я або номер`} onChange={handleChange}/>
        </SearchWrapper>
      </Container>
    </>
  );
};
