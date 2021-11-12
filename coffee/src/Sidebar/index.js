import React, { useState } from 'react';

// import all the svg files
import logo from '../assets/logo.svg';
import Home from '../assets/home-solid.svg';
import Team from '../assets/social.svg';
import Calendar from '../assets/sceduled.svg';
import Projects from '../assets/starred.svg';
import Documents from '../assets/draft.svg';
import PowerOff from '../assets/power-off-solid.svg';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? '1.5rem' : '1rem')}
    transform:${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')}
  }

  &::after {
    top: ${(props) => (props.clicked ? '1.2rem' : '1.5rem')}
    transform:${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')}
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Sidebar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <div>
          <div>
            <img src={logo} alt='logo' />
          </div>
          <ul>
            <li>
              <img src='Home' alt='Home' />
              <span>Home</span>
            </li>
            <li>
              <img src='Team' alt='Team' />
              <span>Team</span>
            </li>
            <li>
              <img src='Calender' alt='Calender' />
              <span>Calender</span>
            </li>
            <li>
              <img src='Documents' alt='Documents' />
              <span>Documents</span>
            </li>
            <li>
              <img src='Projects' alt='Projects' />
              <span>Projects</span>
            </li>
          </ul>
          <div>
            <img src='https://picsum.photos/200' alt='Profile' />
            <div>
              <div>
                <h4>John Doe</h4>
                <a href='/#'>View Profile</a>
              </div>
              <button>
                <img src={PowerOff} alt='logout' />
              </button>
            </div>
          </div>
        </div>
      </SidebarContainer>
    </>
  );
};
// left off at 25:33 in the video

export default Sidebar;
