import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
export default function Services() {
  const data = [
    {
      image: service1,
      title: 'choose destination',
      description:
        'Lorem Ipsum is simply dummy text of the printing setting. Lorem Ipsum is simply ',
    },
    {
      image: service2,
      title: 'explore the place',
      description: 'Lorem Ipsum is simply dummy text of the printing setting',
    },
    {
      image: service3,
      title: 'start your journey',
      description: 'Lorem Ipsum is simply dummy text of the printing setting',
    },
    {
      image: service4,
      title: "let's enjoy",
      description: 'Lorem Ipsum is simply dummy text of the printing setting',
    },
  ];
  return (
    <Section id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primary-text);
        font-family: Helvetica, sans-serif;
        font-family: 100;
      }
      p {
        color: var(--secondary-text);
        font-family: Helvetica, sans-serif;
        font-family: 100;
        text-align: justify;
      }
      p:after {
        /* this adds an extra invisible line, so any other line is justified */
        content: '';
        display: inline-block;
        width: 100%;
        vertical-align: top;
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
