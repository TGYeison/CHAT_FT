import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './plugins/routing';

import {ContainerScreen} from './components/atomic/container/container';

import { AuthProvider } from './hook/useAuth/context';

const App = () => {
  return(
    <AuthProvider>
      <ContainerScreen>
        <RouterProvider router={router}></RouterProvider>
      </ContainerScreen>
    </AuthProvider>
  );
}

export default App;
