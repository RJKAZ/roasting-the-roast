import React from 'react';

// import all the svg files
import logo from '../assets/logo.svg';
import Home from '../assets/home-solid.svg';
import Team from '../assets/social.svg';
import Calendar from '../assets/sceduled.svg';
import Projects from '../assets/starred.svg';
import Documents from '../assets/draft.svg';
import PowerOff from '../assets/power-off-solid.svg';

const Sidebar = () => {
  return (
    <>
      <button>Click</button>
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
    </>
  );
};
// left off at 15:51 in the video

export default Sidebar;
