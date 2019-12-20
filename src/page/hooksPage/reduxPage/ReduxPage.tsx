import React from 'react';
import {Input, Button} from 'antd';
import {useMappedState, useDispatch} from 'redux-react-hook';
import {types} from 'store/dictStore'

function ReduxPage(props: any) {
    const inputTypeValue = useMappedState(state => state.dict.inputTypeValue)
    const typeList = useMappedState(state => state.dict.typeList)
    const dispatch = useDispatch()

    // 输入框change事件
    function inputChange(e: any) {
        const action = {
            type: types.CHANGE,
            value: e.target.value
        }
        dispatch(action)
    }

    // 按钮添加
    function addItem() {
        const action = {
            type: types.ADD
        }
        dispatch(action)
    }

    return (
        <div>
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