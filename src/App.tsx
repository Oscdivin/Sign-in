// import React from 'react';
// function App() {
//   return (
//     <div>
   
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { mainRouter } from './routes/mainRouter';
import { RouterProvider } from"react-router-dom"
import { mainRouter } from './Routes/mainRoutes';

function App() {
  return (
  <div>
    <RouterProvider router ={mainRouter}/>
    </div>
  );
}

export default App;

