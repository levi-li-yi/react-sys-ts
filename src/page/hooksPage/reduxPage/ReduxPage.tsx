import React, {memo} from 'react';
import {Input, Button} from 'antd';
import {useMappedState, useDispatch} from 'redux-react-hook';
import {change, add} from 'store/dictStore'

function ReduxPage(props: any) {
    const inputTypeValue = useMappedState(state => state.dict.inputTypeValue)
    const typeList = useMappedState(state => state.dict.typeList)
    const dispatch = useDispatch()

    // 输入框change事件
    function inputChange(e: any) {
        dispatch(change(e.target.value))
    }

    // 按钮添加
    function addItem() {
        dispatch(add())
    }

    return (
        <div>
            <p>ReduxPage</p>
            <Input placeholder="请输入" value={inputTypeValue} onChange={inputChange}/>
            <Button onClick={addItem}>提交</Button>
            <ul>
                {
                    typeList.map((item: string, index: number) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default ReduxPage;