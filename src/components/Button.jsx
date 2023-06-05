import React from 'react';
import styled from 'styled-components';
export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 1rem;
  border: 4px solid black;
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;

  &:hover {
    background-color: grey;
  }
`;
