import React from 'react';

import {
  FormInputWrapper,
  FormInputContainer
} from './form-input.styles';

const FormInput = ({handleChange, ...otherProps}) => (
    <FormInputWrapper>
        <FormInputContainer onChange={handleChange} {...otherProps} />
    </FormInputWrapper>
);

export default FormInput;