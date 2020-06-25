import React from 'react';

import {
  FormTextareaWrapper,
  TextareaContainer,
  ErrorContainer
} from './form-textarea.styles';

const FormTextarea = ({handleChange, error, ...otherProps}) => (
  <FormTextareaWrapper>
    <TextareaContainer onChange={handleChange} {...otherProps} error={error} />
    <ErrorContainer>{error}</ErrorContainer>
  </FormTextareaWrapper>
);

export default FormTextarea;