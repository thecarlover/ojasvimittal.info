import React from 'react';


import Earth from './Components/Earth';
import FullPageSection from './Components/FullPageSection';
import Splash from './Components/Splash';

const App = () => {
  return (
    <div>
      <Splash/>
     <FullPageSection>

      <Earth />
     </FullPageSection>
    
    </div>
  );
};

export default App;