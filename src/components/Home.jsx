import React, { useState } from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/hero.jpg';
import Button from './Button';

export const Home = () => {
  const [value, setValue] = useState('$500 - $10,000');
  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>time to</h1>
          <h1>explore.</h1>
          <Button text="plan your trip" />
        </div>
        <div className="planner">
          <form>
            <div className="row">
              <label>Destinations</label>
              <select>
                <option>Canada</option>
                <option>Mexico</option>
                <option>America</option>
              </select>
            </div>
            <div className="row">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Price Range</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <Button text="discover more" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 2rem;
  position: relative;
  .background {
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
  }
  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 9rem;
        font-family: 'Montserrat-SemiBold';
        color: white;
      }
    }
    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      border: 1px solid black;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          font-family: 'Montserrat-Medium';
          label {
            font-size: 0.9rem;
            color: black;
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
            font-family: 'Montserrat-Light';
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
