import css from "./phonebook.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "components/redux/contactsSlice";
import { getContacts } from "components/redux/selectors";

 export const ContactForm = () => {
   const dispatch = useDispatch();
   const contacts = useSelector(getContacts);
   
   const submitForm = e => {
    e.preventDefault();
     const form = e.target;
     const name = form.elements.name.value;
     const number = form.elements.number.value;

     const contactExists = contacts.some(contact => contact.name === name);

      if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(name, number));
      form.reset();
    }
  };


  return (
    <div>
      <form className={css.form} onSubmit={submitForm}>
      <label> Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </label>
      <label> Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      </label>
      <button className={css.button}>Add contact</button>
      </form>
    </div>
  )
}