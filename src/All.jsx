import React from 'react';
import Logo from './assets/images.png'
import Data from './assets/datascience.jpg'
import Cyber from './assets/CyberSecurity.jpeg'
import Carrer from './assets/carrer.jpg';

const All = () => {
  return <div>
            <img src={Logo}/> <img src={Data}/> <img src={Cyber}/> <img src={Carrer}/> <span/>
  </div>;
};

export default All;