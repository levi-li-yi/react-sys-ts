import Mock from 'mockjs'

export default function Engine() {
    Mock.setup({
        timeout: 500
    })
    return Mock
}