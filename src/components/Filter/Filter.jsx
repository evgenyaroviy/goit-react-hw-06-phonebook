import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { filterContacts } from '../redux/filtersSlice';

export const Filter = () => {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const handleFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
  }

  return contacts.length !== 0 ? (
    <div>
      <label htmlFor="filter">Find contacts by name:
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handleFilter}
              />
              </label>
    </div>
  ) : (
    <NotificationMessage />
  );
};