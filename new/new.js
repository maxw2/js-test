
function myNew() {
    let obj = {}
    let context = Array.prototype.slice.call(arguments, 0)
    let fn = context.shift()
    
    fn.call(obj,...context)

    
    return obj

}