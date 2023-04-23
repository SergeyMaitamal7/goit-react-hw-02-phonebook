import styled from 'styled-components';
import { Form, Field } from 'formik';
export const SubmitForm = styled(Form)`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;
export const Label = styled.label`
  display: block;
  margin-left: auto;
  padding: 5px;
  font-size: 20px;
`;
export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: lightblue;
  border-radius: 5px;
  :hover {
    background-color: aqua;
  }
`;
export const Input = styled(Field)`
  width: 350px;
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  padding-top: 10px;
  font-size: 18px;
  text-align: center;
  color: red;
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 20px;
  line-height: 0.6;
  gap: 10px;
`;
