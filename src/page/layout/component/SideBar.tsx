import React from 'react';
import {Link} from 'react-router-dom';
import {Tree} from 'models/router/index'

function SideBar(props: any) {
    const pathname = props.location.pathname;
    const links = props.links;
    return (
        links.map((item: Tree, index: number) => {
            return (
                <p className={`side_bar_item ${pathname.substr(1) === item.href ? 'active_link' : null}`} key={index}>
                    <i className={`iconfont icon-${String(item.href)}`}></i>
                    <Link to={`/${item.href}`}>{item.name}</Link>
                </p>
            )
        })
    )
}
export default SideBar;