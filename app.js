var Crawler = require("crawler");
var user=encodeURI('夏天夏')
var c = new Crawler({
    // 最大并发数默认为10
    maxConnections : 1,

    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            console.log($(".up-item .headline a").eq(0).text())
        }
        done();
    }
});

c.queue(`https://search.bilibili.com/upuser?keyword=`+user);
