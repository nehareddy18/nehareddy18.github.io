import React from 'react';
import { FaLinkedin, FaFile } from 'react-icons/fa';
import styled from 'styled-components';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  z-index: 10;
  color: #027184;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Add the vertical line */
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 100px; /* Adjust height as needed */
    background-color: var(--light-slate);
    margin-top: 20px; /* Adds spacing between icons and the line */
  }

  a {
    color: var(--light-slate);
    margin: 10px 0;
    transition: color 0.3s;

    &:hover {
      color: red;
      transition: color 0.3s;
    }
  }

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ orientation }) => (
  <StyledSideElement orientation={orientation}>

    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size="48" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaFile size="48" />
    </a>
  </StyledSideElement>
);

export default Side;
