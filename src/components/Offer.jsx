import React from 'react';
import styled from 'styled-components';
import lighthouse from '../assets/lighthouse.jpg';
import { BiWorld } from 'react-icons/bi';
import { BsHeadphones, BsPerson } from 'react-icons/bs';

const Offer = () => {
  const data = [
    {
      text: 'Best Travel Guide Always for your Services',
      icon: <BsPerson />,
      color: 'red',
    },
    {
      text: 'World Class Services Provided For You',
      icon: <BiWorld />,
      color: 'green',
    },
    {
      text: '24/7 Strong Customer Support',
      icon: <BsHeadphones />,
      color: 'yellow',
    },
  ];

  return (
    <Section id="offer">
      <ImageContainer>
        <Image src={lighthouse} alt="lighthouse" />
      </ImageContainer>
      <ContentContainer>
        <div className="title">
          <h1>We are Offering in Total 793 Tours Across the World</h1>
        </div>
        <ul className="list">
          {data.map(({ text, icon, color }) => (
            <li key={text}>
              <div className={`icon ${color}`}>{icon}</div>
              <div className="text">
                <h3>{text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </Section>
  );
};

const Section = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;
  margin-inline: 3rem;
  padding-left: 6rem;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  height: 35rem;
  width: 100%;
  filter: brightness(100%);
  opacity: 0.8;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    max-inline-size: 100%;
    block-size: auto;
  }
`;

const ContentContainer = styled.div`
  .title {
    margin: 2rem 0;
    width: 53%;

    h1 {
      font-size: 3rem;

      @media screen and (min-width: 280px) and (max-width: 1080px) {
        font-size: 2rem;
        text-align: center;
      }
    }
  }

  .list {
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      gap: 4rem;
      margin: 4rem 0;

      .icon {
        padding: 0.5rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
      }

      .red {
        background-color: #50808e;
        color: white;
      }

      .green {
        background-color: #a3c9a8;
        color: white;
      }

      .yellow {
        background-color: #ddd8c4;
        color: white;
      }

      .text {
        h3 {
          font-size: 1.5rem;

          @media screen and (min-width: 280px) and (max-width: 1080px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export default Offer;
