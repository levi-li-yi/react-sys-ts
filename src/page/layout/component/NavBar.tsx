import React, {Fragment} from 'react';
import menuTree from 'mock/menuTree';

function NavBar(props: any) {
    const menu = menuTree
    const pathname = props.location.pathname

    // 页面切换
    function switchPage(moudle: any) {
        const children = moudle.children || [];
        if (children.length === 0) return;
        const href = children[0].href;
        props.history.push(`/${href}`)
    }
    return (
        <Fragment>
            <p className="sys_logo">logo</p>
            <div className="nav_bar_item">
                {
                    menu.map((item, index) => {
                        return (
                            <p
                                key={index}
                                onClick={() => switchPage(item)}
                                className={`nav_item ${item.children.find((item: any) => item.href === pathname.substr(1)) ? 'active_item' : ''}`}>
                                <i className={`iconfont icon-${item.href}`}></i>
                            </p>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}
export default NavBar;