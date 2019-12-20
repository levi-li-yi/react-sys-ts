import {lazy} from 'react';

let hooksPage = [
    {
        name: 'Hook页面',
        path: '/hooksPage',
        exact: true,
        components: lazy(() => import('../page/hooksPage/prevPage/HooksPage')),
        routes: [],
        rootDir: 'hooksPage'
    },
    {
        name: '状态管理',
        path: '/reduxPage',
        exact: true,
        components: lazy(() => import('../page/hooksPage/reduxPage/ReduxPage')),
        routes: [],
        rootDir: 'reduxPage'
    },
];

export default hooksPage;