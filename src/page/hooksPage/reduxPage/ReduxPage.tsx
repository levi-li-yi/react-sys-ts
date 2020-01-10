import React, {useState, useEffect} from 'react';
import {Input, Button} from 'antd';
import {useMappedState, useDispatch} from 'redux-react-hook';
import {change, add} from 'store/dictStore'
import {getCustomer} from 'services/customer'

import 'mock/customer' 
import {Customer} from 'models/page/customer'
import Example from 'models/page/decor'

function ReduxPage(props: any) {
    // 组件状态
    const [list, setCustomer] = useState([])

    // redux数据
    const inputTypeValue = useMappedState(state => state.dict.inputTypeValue)
    const typeList = useMappedState(state => state.dict.typeList)
    const dispatch = useDispatch()

    // 获取用户列表
    useEffect(() => {
        getCustomerList()
        new Example()
    }, [])

    // 输入框change事件
    function inputChange(e: any) {
        dispatch(change(e.target.value))
    }

    // 按钮添加
    function addItem() {
        dispatch(add())
    }
    
    // 获取客户数据
    function getCustomerList(): void {
        getCustomer().then((res) => {
            const data = res.data
            console.log(data)
            setCustomer(data.data)
        })
    }

    return (
        <div>
            <p>ReduxPage</p>
            <Input placeholder="请输入" value={inputTypeValue} onChange={inputChange}/>
            <Button onClick={addItem}>提交</Button>
            <Button onClick={getCustomerList}>刷新</Button>
            <ul>
                {
                    typeList.map((item: string, index: number) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <ul>
                {
                    list.map((item: Customer, index: number) => {
                        return <li key={index}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default ReduxPage;