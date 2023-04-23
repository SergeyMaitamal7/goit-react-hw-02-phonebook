import { Input } from './Filter.styled';
import { Title } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ onChange }) => {
  // console.log(onChange);
  return (
    <>
      <Title>Find contacts by name:</Title>
      <Input type="text" onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
