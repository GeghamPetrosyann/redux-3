import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from './futures/addUser.jsx';
import { Users } from './futures/users/users.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/add',
    element: <AddUser />,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
