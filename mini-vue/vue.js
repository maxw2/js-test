/**
 * Vue 借鉴了MVVM模型
 * 响应式数据的优势是什么？是如何实现的？
 * 如何使用 Observer 将数据转换成响应式数据？
 * 如何使用 Dep 收集依赖、发送通知？
 * 如何掌握用 Watcher 监听数据，自动更新视图？
 * https://github.com/answershuto/learnVue
 */
class Vue {
    opt = {
        el: '',
        data: {}
    }
    constructor(option) {
        this.opt = Object.assign({}, this.opt, option)
        console.log(this.opt)
        observe(this.opt.data, this)
        new Watcher(this)
    }



}
/**
 * Observer观察者 把数据变为响应式
 * 作用是给对象属性添加getter 和 setter 用于收集依赖和派发更新
 */
function observe(data, vm) {
    const _data = data
    const _vm = vm

    for (let key in _data) {
        let value = _data[key]
        defineReactive(_data, key, value)
    }

    function defineReactive(_data, key, value) {
        const dep = new Dep()
        // 遍历对象 
        if (typeof value === 'object' && value) {
            observe(value)
            return
        }
        // 
        Object.defineProperty(_data, key, {
            configurable: true,
            enumerable: true,
            get: function reactiveGetter() {
                if (Dep.target) dep.addSub(Dep.target)
                
                return _vm[key] || value
            },
            set: function reactiveSetter(newVal) {
                if (_vm[key] || value === newVal) return
                
                _vm[key] = newVal
                dep.notify()
            }
        })
    }
}
/**
 * depend 收集依赖
 */
class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    notify() {
        this.subs.forEach(watcher => {
            watcher.upDate()
        })
    }


}


/**
 * Watcher 订阅者
 */
class Watcher {
    constructor(vm) {
        this.vm = vm

        Dep.target = this
    }

    upDate() {
        console.log('视图更新')
    }


}

