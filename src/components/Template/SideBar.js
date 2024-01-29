import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Daniel Sun</h2>
        <p><a href="mailto:sundanield@gmail.com">sundanield@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Daniel. I am an <a href="https://www.web.mit.edu/">MIT</a> graduate, Jane Street alum,
        and cofounder at <a href="https://breez.live">Breez</a>. Previously,
        I was the tech lead at <a href="https://kalshi.com">Kalshi Trading</a>
        , 3x USAMO qualifier and MOP participant, and USABO, USANCO, and USAPhO medalist
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
