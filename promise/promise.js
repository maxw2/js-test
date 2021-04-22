// 手写promise 异步函数
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {
    status = PENDING
    resolveCallBackArr = []
    rejectCallBackArr = []
    constructor(fn) {
       
    }

    resolve(data) {
        console.log(this)
        status = 'fulfilled'
        const cb = this.resolveCallBackArr.shift()
        if(cb) cb(data)
        
    }

    reject(data) {
        status = 'rejected'
    }

    then(resolveFn, rejectFn) {
        console.log(this)
        this.resolveCallBackArr.push.bind(this, resolveFn)
        this.rejectCallBackArr.push.bind(this, rejectFn)
    }


}
