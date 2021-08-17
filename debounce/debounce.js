// 防抖函数
function debound(fn, time) {
    let timeoutId = null
    return function () {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(fn, time)
    }
}

// 节流函数
function throttle(fn, time) {
    let timeoutId = null
    return function () {
        if(timeoutId) return
        timeoutId = setTimeout(function(){
            fn()
            timeoutId = null
        },time)
    }
}