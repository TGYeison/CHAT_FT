import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './plugins/routing';

import {ContainerScreen} from './components/atomic/container/container';

const App = () => {
  return(
    <ContainerScreen>
      <RouterProvider router={router}></RouterProvider>
    </ContainerScreen>
  );
}

export default App;
