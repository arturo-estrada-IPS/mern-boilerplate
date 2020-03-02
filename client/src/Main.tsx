import React from 'react';
// @ts-ignore
import mernLogo from './assets/img/mern.png';

const Main: React.FC = () => (
  <main className="content">
    <div>
      <h1>A simple React + Typescript Boilerplate</h1>
      <img src={mernLogo} alt="Mern Logo" />
    </div>
  </main>
);

export default Main;
