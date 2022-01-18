// @flow
import * as React from 'react';
import "./profile.css"
import { useRef } from 'react';

export function Profile() {
  const elem = React.useRef("myref")

  console.log(elem.offsetTop)

  return (
    <section id="about" className="profile-section">

      <div className="profile-image prof">
        <img src="/images/Capture.PNG" ></img>
      </div>
      <div className="profile-detail prof">
        <h1>About Me</h1>
        <p className="profile-line">'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, iste'</p>
        <ul className="profile-list" >
          <li className="profile-list-elements"><span className="profile-span-left">Name</span>:<span className="profile-span-right">Sajad Bashir</span></li>
          <li className="profile-list-elements"><span className="profile-span-left">DOB</span>:<span className="profile-span-right">January 7,2000</span></li>
          <li className="profile-list-elements"><span className="profile-span-left">Address</span>:<span className="profile-span-right">San Francisco CA 97987 USA</span></li>
          <li className="profile-list-elements"><span className="profile-span-left">Zip Code</span>:<span className="profile-span-right">193121</span></li>
          <li className="profile-list-elements"><span className="profile-span-left">Phone</span>:<span className="profile-span-right">9596626502</span></li>
          <li className="profile-list-elements"><span className="profile-span-left">Email</span>:<span className="profile-span-right">developersajad7@gmail.com</span></li>
        </ul>
        <div className="profile-project-info">
          <p><span style={{ color: '#3e64ff', fontSize: "1.5em" }}>11</span>  Project Complete</p>
          <button className="mybtn">Download CV</button>
        </div>

      </div>
    </section>
  );
};