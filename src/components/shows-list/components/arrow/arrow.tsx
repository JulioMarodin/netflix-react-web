import React from 'react';
import { ArrowButton } from './arrow.styled';

export default function Arrow({ style, onClick, className }: any) {
  return (
    <ArrowButton className={className} onClick={onClick} style={style} />
  );
}
