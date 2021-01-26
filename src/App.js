import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { fetchContacts } from './redux/Contacts/contacts-operations';
import {
  getContacts,
  getIsLoading,
  getError,
} from './redux/Contacts/contacts-selectors';

// storage.save('Contacts', [
//   { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 1, name: 'Hermione Kline', number: '443-89-12' },
//   { id: 2, name: 'Eden Clements', number: '645-17-79' },
//   { id: 3, name: 'Annie Copeland', number: '227-91-26' },
// ]);

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Container>
  );
}

export default App;
