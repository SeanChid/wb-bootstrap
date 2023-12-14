import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
import ContainerFluidExample from './Components/ContainerFluidExample.jsx'
import ColumnSizingExample from './Components/ColumnSizingExample.jsx'
import ResponsiveSidebarExample from './Components/ResponsiveSidebarExample.jsx'
import OffsetExample from './Components/OffsetExample.jsx'
import OrderExample from './Components/OrderExample.jsx'
import IconsExample from './Components/IconsExample.jsx'

// Imports the actual styling from bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const router = createBrowserRouter(
    // Create the routes with route elements
    // Must use createRoutesFromElements function for Route elements
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            {/* index will give this route the default child property */}
            <Route index element={<ContainerFluidExample />}/>

            <Route path='/column-sizing' element={<ColumnSizingExample />}/>
            <Route path='/sidebar' element={<ResponsiveSidebarExample />}/>
            <Route path='/offset' element={<OffsetExample />}/>
            <Route path='/order' element={<OrderExample />}/>
            <Route path='/icons' element={<IconsExample />}/>
        </Route>
    )

    // Create routes with route objects
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)