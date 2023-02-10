import PropTypes from 'prop-types';
import { Contact } from './RenderContacts.styled';
export const RenderContacts= ({ contacts}) => {
  console.log(contacts)
  return (
    <>
        {contacts.map(contact=> (
          <Contact
            key={contact.id}
            type="button"
            name={contact.name}
            // onClick={() => onLeaveFeedback(contact)}
          >
            {contact.name} : {contact.number}
          </Contact>
        ))}
    </>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
