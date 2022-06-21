import React from 'react';
import { ButtonStyled } from './button.styled';
import { Props } from './button.types';

function Button({ onClick, children }: Props) {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
