import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from './components/About';
// import Contacts from './components/Contacts';
import Error from './components/Error';
import RestInfo from './components/RestInfo';
import { Suspense, lazy } from 'react';
import Shimmer from './components/Shimmer';


const About = lazy(() => import('./components/About'));
const Contacts = lazy(() => import('./components/Contacts'));

const AppLayout = () => {


    return(
        <div className='App'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (<Suspense fallback={<Shimmer />}>
                    <About />
                    </Suspense>),
            },
            {
                path: '/contacts',
                element: (<Suspense fallback={<Shimmer />}>
                <Contacts />
                </Suspense>),
            },
            {
                path: '/restaurants/:resId',
                element: <RestInfo />,
            }
        ],
        errorElement: <Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);