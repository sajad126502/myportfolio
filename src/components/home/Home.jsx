// @flow
import * as React from 'react';
import { Navbar } from '../navbar/Navbar';
import Typed from 'typed.js';
import "./home.css"

export function Home() {
  const el = React.useRef(null);
  // // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Designer',
        'Full Stack Developer',
        'Freelancer'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])


  return (
    <section>

      <Navbar></Navbar>
      <div className="home">
        <div className="home-inner">
          <h3 style={{ color: '#3e64ff' }}>HEY! I AM</h3>
          <h1>SAJAD BASHIR</h1>
          <h2>I'm a <span ref={el} className="typed-text" style={{ color: '#3e64ff' }}></span></h2>

        </div>
      </div>
    </section>


  );
  };