import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { delContact } from '../redux/contactsSlice';
import css from './contacts.module.css'


export const ContactList = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              <div className={css.name}>{name}:</div>
              <div className={css.number}>{number}</div>
            </div>
            <button type="button" className={css.del} onClick={() => dispatch(delContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};