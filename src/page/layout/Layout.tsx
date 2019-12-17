import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import menuTree from 'mock/menuTree';
import './Layout.scss'
import NavBar from './component/NavBar';
import SideBar from './component/SideBar';
import {Routes, Tree} from 'models/router/index'

function Layout(props: any) {
    const [menu, setMenu] = useState(menuTree)
    const {routes} = props
    const links  = getSiderbarList()
    // 获取当前一级菜单下的二级菜单，用来渲染侧边栏
    function getSiderbarList() {
        let {location} = props;
        const pathname = location.pathname || '';
        const model = menuTree.find((item) => {
            return item.children.find((value: any) => value.href === pathname.substr(1))
        })
        const list = model ? model.children : [];
        if (list.length === 0) {
            return menuTree[0].children
        }
        return list || []
    }
    return (
        <div className="sys_layout">
                <div className="nav_bar_panel">
                    <NavBar {...props}/>
                </div>
                <div className="content_panel">
                    <div className="left_content_panel">
                        <SideBar {...props} links={links}/>
                    </div>
                    {/*路由注册按照router目录下的路由配置参数进行注册*/}
                    <div className="right_content_panel">
                        {
                            routes.map((route: Routes, index: number) => {
                                if (route.exact) {
                                    return <Route exact key={index} path={route.path} component={route.components}/>
                                }
                                return <Route key={index} path={route.path} component={route.components}/>
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default Layout;