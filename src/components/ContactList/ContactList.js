import { useSelector} from 'react-redux';
import Loader from 'components/Loader/Loader';
import { useDeleteContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import { ContactListContainer } from './ContactList.Styled';

export const ContactList = () => {
  const token = useSelector(state => state.auth.token);
  const { data: contacts, isLoading, error } = useGetContactsQuery(token);
  const { filter } = useSelector(state => state.filter);
  const [deleteContact] = useDeleteContactMutation();

  if (isLoading && !error) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Ooops!!! Something went wrong!</p>
        <p>Error:{error}</p>
      </div>
    );
  }

  const getFilteredContacts = () => {
    return (contacts || []).filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactListContainer>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
             {name}: {number}
            <button
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactListContainer>
  );
};
