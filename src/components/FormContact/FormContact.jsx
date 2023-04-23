import {
  Label,
  Input,
  Button,
  SubmitForm,
  ErrorMessage,
  Box,
} from './FormContact.styled';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

function validateName(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
  ) {
    error = 'Invalid name';
  }
  return error;
}
function validateNumber(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/[0-9]{10}/i.test(value)) {
    error = 'Invalid number';
  }
  return error;
}

const initialValues = {
  name: '',
  number: '',
};


export const ContactForm = ({ onSubmit }) => {
  const onSubmitInner = (value, { resetForm }) => {
    onSubmit(value);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitInner }
    >
      {({ errors, touched, isValid, dirty }) => (
        <SubmitForm>
          <Label htmlFor="name">name</Label>
          <Box>
            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              validate={validateName}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </Box>

          <Label htmlFor="number">number</Label>
          <Box>
            {' '}
            <Input
              id="number"
              name="number"
              placeholder="Enter phone number"
              validate={validateNumber}
            />
            {errors.number && touched.number && (
              <ErrorMessage>{errors.number}</ErrorMessage>
            )}
          </Box>
          <Button type="submit" disabled={!isValid || !dirty}>
            Submit
          </Button>
        </SubmitForm>
      )}
    </Formik>
  );
};
// import { Component } from 'react';
// export class ContactForm extends Component {

//     state = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.number,
//   };

//   handleClickChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = e => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label>
//           <Input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleClickChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label>
//           <Input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleClickChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>

//         <Button type="submit">Add Contact</Button>
//       </Form>
//     );
//   }
// }
