const comUrl = "http://182.92.195.8:8800"

var toUrl = function toUrl(url) {
    window.location.href = url
}

var id = window.sessionStorage.getItem("userId")
console.log(id)
// if (!id || id == null) {
//     console.log(window.location.pathname.indexOf('/chart'))
//     if (window.location.pathname.indexOf('/chart') !== -1) {
//         // alert('您未登录！即将跳转登录页面')
//         // toUrl("../../login.html")
//     }
// }
