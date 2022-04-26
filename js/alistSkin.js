var x = true;


$("html").click(function () {
    if (x) {
        // 头部添加
        var title = document.title;
        var headerh = '<h3>' + title + '</h3><div><img src="https://cdn.jsdelivr.net/gh/zhangshiha0/picx@master/photos/head1.6xfcc2x2pvk0.jpg" alt="[ ' + title + ' ]"/></div><p>你与春风皆过客</p><ul><li><a href="/">首页</a></li><li><a href="https://blog.shihaoa.top/">博客</a></li></ul>';
        $(".header").append(headerh);
    }
})

window.onload = function () {
    setTimeout(function () {
        $("html").click();
        x = false;
    }, 100);
}