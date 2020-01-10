// 类装饰器
function anotationClass(target: any) {
    console.log('===== Class Anotation =====')
    // 类自身
    console.log('classtarget :', target)
}

// 方法装饰器:最先执行方法装饰器
function anotationMethods (target: any, property: any, descriptor: any) {
    // target
    console.log('===== Method Anotation ' + property + "====")
    // 构造函数constructor、所装饰的方法instanceMember
    console.log('target:', target)
    // 方法名称instanceMember
    console.log('property:', property)
    // 属性描述value\wirtable\enumerable\configurable
    console.log('descriptor:', descriptor)
}

@anotationClass
class Example {
    @anotationMethods
    instanceMember() { }

    @anotationMethods
    static staticMember() { }
}

export default Example;