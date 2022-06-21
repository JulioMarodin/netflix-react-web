import React from 'react';
import { Error } from './form-error.styled';
import { Props } from './form-error.types';

function FormError({ message }: Props) {
  return (
    <Error>
      {message}
    </Error>
  );
}

export default FormError;
