
Function.prototype.myCall = function (context,...arg) {
    let args = [...arg]
    context.fn = this
    // console.log(...arguments)
    context.fn(...args)

}



Function.prototype.myApply = function (context,arg) {
    let args = arg

    context.fn = this
    // console.log(...arguments)
    context.fn(...args)
}


Function.prototype.myBind = function (context,...arg) {
    let args = arg

    context.fn = this
    // console.log(...arguments)
    return function() {
        context.fn(...args)
    }
    
}

