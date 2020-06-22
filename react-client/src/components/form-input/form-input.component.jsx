import React from 'react';

import {
  FormInputWrapper,
  FormInputContainer,
  ErrorContainer
} from './form-input.styles';

const FormInput = ({handleChange, error, addJob, ...otherProps}) => {
  return (
    <FormInputWrapper addJob={addJob}>
        <FormInputContainer onChange={handleChange} {...otherProps} error={error} />
        <ErrorContainer>{error}</ErrorContainer>
    </FormInputWrapper>
)};

export default FormInput;