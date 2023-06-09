import React from 'react';
import styled from 'styled-components';
export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  padding: 0.9rem 3rem;
  background-color: #ddd8c4;
  border-radius: 1rem;
  border: 1px solid black;
  font-size: 0.8rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;

  &:hover {
    background-color: #84b59f;
  }
`;
