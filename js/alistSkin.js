/*
 * name : Future
 * edition : 2.0.2
 * message : 前端美化样式由星环[Future]提供，程序由Alist创始者友情提供
 * technical support : https://www.xhto.cn/
 */

var x = true;

$("html").click(function() {
    if (x) {
        var title = document.title,
            // 个人信息编写区域ON

            // 头像链接地址
            headimg = "https://cdn.jsdelivr.net/gh/zhangshiha0/picx@master/photos/head1.6xfcc2x2pvk0.jpg",
            // 博主铭言句子
            motto = "你与春风皆过客",
            // 配置 - 导航内容及链接【注：名称和链接需要一一对应，用英文逗号隔开】
            linkname = ["首页", "博客"],
            link = ["/", "https://blog.shihaoa.top/"],
            code = "";

        // 个人信息编写区域END

        // 程序化代码
        code += '<h3>' + title + '</h3>';
        code += '<div >< img src = "' + headimg + '" alt = "[ ' + title + ' ]" / >< /div>';
        code += '<p>' + motto + '</p >';
        code += '< ul >';
        for (vo in linkname) {
            code += '<li> < a href = "' + link[vo] + '" > ' + linkname[vo] + ' < /a></li >';
        }
        code += '< /ul>';

        // 代码写入视觉程序
        $(".header").append(code);
    }
})

// 支持样式代码
$(document).on('click', '.buttons>span:eq(1) svg', function() {
    var $viwe = $(this).attr('viewBox');
    alert($viwe);
})

window.onload = function() {
    setTimeout(function() {
        $("html").click();
        x = false;
    }, 100);
}
