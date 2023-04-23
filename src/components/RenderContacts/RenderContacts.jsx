import PropTypes from 'prop-types';
import { Contact, ButtonDelete } from './RenderContacts.styled';
import { Button } from 'components/FormContact/FormContact.styled';
export const RenderContacts = ({ contacts, onDelete }) => {
  // console.log(contacts);
  return (
    <>
      {contacts.map(contact => (
        <Contact key={contact.id} type="button" name={contact.name}>
          {contact.name} : {contact.number}
          <ButtonDelete onClick={() => onDelete(contact.id)}>
            Delete
          </ButtonDelete>
        </Contact>
      ))}
    </>
  );
};

RenderContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
