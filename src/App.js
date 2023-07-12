import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contacts from './Contacts';
import Error from './components/Error';




const AppLayout = () => {
    return(
        <div className='App'>
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contacts',
        element: <Contacts />,
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);