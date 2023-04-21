import {
    createBrowserRouter
} from 'react-router-dom';

/**
 * Pages
 */
import ChatPage from '../pages/Chat';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import LogUpPage from '../pages/Logup';
import AuthPage from '../pages/Auth';

interface RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
}


const routes: any = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/auth',
        element: <AuthPage/>,
        children: [
            {
                index: true,
                element: <LoginPage/>
            },
            {
                path: '/auth/logup',
                element: <LogUpPage/>
            },
        ]
    }, 
    {
        path: '/chat',
        element: <ChatPage/>
    }
]

const router = createBrowserRouter(routes);

export default router;