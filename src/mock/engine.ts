import Mock from 'mockjs'

export default function Engine() {
    Mock.setup({
        timeout: 300
    })
    return Mock
}