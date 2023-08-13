import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { deleteContact } from '../redux/contactsSlice';


export const ContactList = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    console.log(contacts);

    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};