var x = true;


$("html").click(function () {
    if (x) {
        // 头部添加
        var title = document.title;
        var headerh = '<h3>' + title + '</h3><p>你与春风皆过客</p><ul><li><a href="/">首页</a></li><li><a href="https://blog.shihaoa.top/">博客</a></li></ul>';
        $(".header").append(headerh);
    }
})

window.onload = function () {
    setTimeout(function () {
        $("html").click();
        x = false;
    }, 100);
}
