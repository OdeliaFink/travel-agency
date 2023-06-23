import React, { useState } from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/hero.jpg';
import Button from './Button';

const Home = () => {
  const [value, setValue] = useState('$500 - $10,000');

  return (
    <Section>
      <Background>
        <Image src={HeroImage} alt="Hero" />
      </Background>
      <Content>
        <Info>
          <Title>time to</Title>
          <Title>explore.</Title>
          <Button text="plan your trip" />
        </Info>
        <Planner>
          <Form>
            <Row>
              <Label>Destinations</Label>
              <Select>
                <option>canada</option>
                <option>mexico</option>
                <option>america</option>
              </Select>
            </Row>
            <Row>
              <Label>Check In</Label>
              <Input type="date" />
            </Row>
            <Row>
              <Label>Price Range</Label>
              <Input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Row>
            <Row>
              <Button text="discover more" />
            </Row>
          </Form>
        </Planner>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 2rem;
  position: relative;
`;

const Background = styled.div`
  img {
    height: 80vh;
    width: 100%;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    z-index: 2;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 5rem;
  margin-left: 8rem;

  h1 {
    font-size: 9rem;
    font-family: Helvetica, sans-serif;
    color: white;
  }
`;

const Title = styled.h1`
  font-size: 9rem;
  font-family: Helvetica, sans-serif;
  color: white;
`;

const Planner = styled.div`
  position: absolute;
  bottom: -2rem;
  right: 0;
  background-color: white;
  padding: 2rem;
  border: 1px solid black;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: Helvetica, sans-serif;

  label {
    font-size: 0.7rem;
    color: var(--secondary-text);
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
      brightness(105%) contrast(101%);
  }

  input:focus {
    outline: none;
  }

  input,
  select {
    border: none;
    width: 100%;
    color: var(--primary-color);
    margin-top: 0.5rem;
    background-color: white;
    font-size: 1.1rem;
    border-bottom: 1px solid #f5ebe9;
    padding-bottom: 0.3rem;
  }
`;

const Label = styled.label`
  font-size: 0.7rem;
  color: var(--secondary-text);
`;

const Input = styled.input`
  border: none;
  width: 100%;
  color: var(--primary-color);
  margin-top: 0.5rem;
  background-color: white;
  font-size: 1.1rem;
  border-bottom: 1px solid #f5ebe9;
  padding-bottom: 0.3rem;
`;

const Select = styled.select`
  border: none;
  width: 100%;
  color: var(--primary-color);
  margin-top: 0.5rem;
  background-color: white;
  font-size: 1.1rem;
  border-bottom: 1px solid #f5ebe9;
  padding-bottom: 0.3rem;
`;

const Image = styled.img`
  height: 80vh;
  width: 100%;
`;

export default Home;
