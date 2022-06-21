import React from 'react';
import { InputStyled } from './input.styled';
import { Props } from './input.types';

function Input({
  name, onChange, placeholder, type,
}: Props) {
  return (
    <InputStyled
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
