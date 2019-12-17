import {lazy} from 'react';
import hooksPage from './hooksPage';

let router = [
    {
        path: '/',
        exact: false,
        Component: lazy(() => import('../page/layout/Layout')),
        routes: [
            ...hooksPage
        ]
    }
]
export default router;