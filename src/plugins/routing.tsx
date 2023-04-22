import {
    createBrowserRouter
} from 'react-router-dom';

//validation
import RequireAuth from './validate';

// Pages
import ChatPage from '../pages/Chat';
import AuthPage from '../pages/Auth';



const routes: any = [
    {
        root: true,
        path: '/',
        element: <AuthPage/>,
    }, 
    {
        path: '/chat',
        element: <RequireAuth>
            <ChatPage/>
        </RequireAuth>
    }
]

const router = createBrowserRouter(routes);

export default router;