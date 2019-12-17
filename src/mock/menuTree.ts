interface Tree {
    name: string,
    href: string,
    children: Array<Object>
}

const menuTree: Array<Tree> = [
    {
        name: '基础数据',
        href: 'teachingData',
        children: [
            {
                name: '系统管理',
                href: 'systemManage',
            },
            {
                name: '文档管理',
                href: 'documentManage',
            },
        ]
    },
    {
        name: '信息管理',
        href: 'messageData',
        children: [
            {
                name: '基本信息',
                href: 'baseMessage',
            },
        ]
    },
    {
        name: '提示管理',
        href: 'alarmData',
        children: [
            {
                name: 'Hook页面',
                href: 'hooksPage',
            },
            {
                name: '性能优化',
                href: 'nextPage',
            },
            {
                name: '状态管理',
                href: 'reduxPage',
            },
        ]
    }
]
export default menuTree;