function Cookie () {
    
}
console.log(document.cookie)
Cookie.get = function (name) {
    var cookieArr = document.cookie ? document.cookie.split(';') : []
    console.log(document.cookie)
    console.log(cookieArr)
    // cookieArr.some((val,index)=>{
    //     val.includes(name)
    // })



}