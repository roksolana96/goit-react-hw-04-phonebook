import PropTypes from 'prop-types';
import { DeleteBtn,ContactName } from './ContactList.styled';

export const ContactList = ({ visibleContact, deleteContacts }) => {
    return (
        <ul>
          {visibleContact.map(({ id, number, name }) => {
            return (
              <ContactName key={id}>
                <span>
                  {name}: {number}
                </span>
                <DeleteBtn type="button" onClick={() => deleteContacts(id)}>
              Delete
            </DeleteBtn>
              </ContactName>
            );
          })}
        </ul>
  );
};

ContactList.propTypes = {
    visibleContact: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContacts: PropTypes.func.isRequired,
  };