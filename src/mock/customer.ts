//import Engine from './engine'
import Mock from 'mockjs'

/* const customer = Engine().mock('/customer', 'get', {
    'status': 200,
    'message': '请求成功',
    'data': [
        {
            'name': 'jack',
            'age': 18,
            'gender': 1
        },
        {
            'name': 'marry',
            'age': 20,
            'gender': 0
        }
    ]
}) */

const customer = Mock.mock('/data', 'get', {
    'status': 200,
    'message': '请求成功',
    'data': [
        {
            'name': 'jack',
            'age': 18,
            'gender': 1
        },
        {
            'name': 'marry',
            'age': 20,
            'gender': 0
        }
    ]
})

export default customer;