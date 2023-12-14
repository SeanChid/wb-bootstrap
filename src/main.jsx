import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import ContainerFluidExample from './Components/ContainerFluidExample.jsx';
import ColumnSizingExample from './Components/ColumnSizingExample.jsx';
import ResponsiveSidebarExample from './Components/ResponsiveSidebarExample.jsx';
import OffsetExample from './Components/OffsetExample.jsx';
import OrderExample from './Components/OrderExample.jsx';
import IconsExample from './Components/IconsExample.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ContainerFluidExample />} />
      <Route path="/column-sizing" element={<ColumnSizingExample />} />
      <Route path="/sidebar" element={<ResponsiveSidebarExample />} />
      <Route path="/offset" element={<OffsetExample />} />
      <Route path="/ordering" element={<OrderExample />} />
      <Route path="/icons" element={<IconsExample />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
