// About.jsx

import React, { useState } from 'react';
import './About.css';


const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='about'>
      <div className="container">
        <div className="row">
          <div className="aboutcol1">
            <img src="./images/Jai profile2.JPG" alt="Jai" />
          </div>

          <div className="aboutcol2">
            <h1> About Me</h1>
            <p>
            Computer Science enthusiast, I thrive on the intersection of technology and creativity.
            A national-level roller hockey player, passionate debater, and Model UN enthusiast, I bring a diverse blend of skills
             and a love for sports to every endeavor.
            </p>
            <div className="tabtitles">
              <p
                className={`tablinks ${activeTab === 'education' ? 'activelink' : ''}`}
                onClick={() => handleTabClick('education')}
              >
                Education
              </p>
              <p
                className={`tablinks ${activeTab === 'skills' ? 'activelink' : ''}`}
                onClick={() => handleTabClick('skills')}
              >
                Skills Progress Bar
              </p>
            </div>
            <div className={`tabcontents ${activeTab === 'education' ? 'activetab' : ''}`}>
              <img src="./images/Screenshot 2024-01-10 at 12.49.39 AM.png" alt="" />
            </div>
            <div className={`tabcontents ${activeTab === 'skills' ? 'activetab' : ''}`}>
             <div className='Container'>
                <div className='Skillbox'>
                    <span className='Title'>HTML</span>
                    <div className='bar'>
                    <span className='skill-per html'>
                        <span className='tooltip'>95%</span>

                    </span>
                    </div>
                </div>
                <div className='Skillbox'>
                    <span className='Title'>CSS</span>
                    <div className='bar'>
                    <span className='skill-per css'>
                        <span className='tooltip'>80%</span>
                    </span>
                    </div>
                </div>
                <div className='Skillbox'>
                    <span className='Title'>Java Script</span>
                    <div className='bar'>
                    <span className='skill-per js'>
                        <span className='tooltip'>75%</span>
                    </span>
                    </div>
                </div>
                <div className='Skillbox'>
                    <span className='Title'>React</span>
                    <div className='bar'>
                    <span className='skill-per react'>
                        <span className='tooltip'>75%</span>
                    </span>
                    </div>
                </div>
                <div className='Skillbox'>
                    <span className='Title'>Java</span>
                    <div className='bar'>
                    <span className='skill-per java'>
                        <span className='tooltip'>80%</span>
                    </span>
                    </div>
                </div>
                <div className='Skillbox'>
                    <span className='Title'>Graphic Designing</span>
                    <div className='bar'>
                    <span className='skill-per gd'>
                        <span className='tooltip'>85%</span>
                    </span>
                    </div>
                </div>
                <div className='Skillbox'>
                    <span className='Title'>Video Editing</span>
                    <div className='bar'>
                    <span className='skill-per ve'>
                        <span className='tooltip'>85%</span>
                    </span>
                    </div>
                </div>

             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
