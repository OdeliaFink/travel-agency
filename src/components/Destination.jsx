import React from 'react';
import styled from 'styled-components';
import cuba from '../assets/cuba.png';
import paris from '../assets/paris.png';
import japan from '../assets/japan.jpg';
import Button from './Button';

const Destinations = () => {
  const data = [
    {
      name: 'Havana',
      image: cuba,
    },
    {
      name: 'Paris',
      image: paris,
    },
    {
      name: 'Tokyo',
      image: japan,
    },
  ];
  return (
    <Section id="destination">
      <div className="info">
        <h2>
          top <span>destinations</span> in the world
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout from it.
        </p>
        <Button text="discover more" />
      </div>

      <div className="destinations">
        {data.map(({ name, image }) => {
          return (
            <div className="destination" key={name}>
              <div className="image">
                <img src={image} alt="destinations" />
              </div>
              <div className="name">
                <h3>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  gap: 5rem;
  margin-inline: 5rem;

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }
  .destinations {
    display: flex;
    gap: 2rem;

    .destination {
      position: relative;
      img {
        height: 20rem;
        border-radius: 1rem;
      }
      .name {
        position: absolute;
        bottom: 0rem;
        height: 100%;
        width: 100%;
        text-align: center;
        padding-bottom: 1rem;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: white;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
        }
      }
    }
  }
`;

export default Destinations;
