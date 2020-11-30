import React from 'react';

import MainRouter from './src/modules/MainRouter'
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <MainRouter />
    </RecoilRoot>
  ); 
};

export default App;
