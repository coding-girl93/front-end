var netscape = require('netscape-bookmarks');
var bookmarks = {
    "前端工具": {
      "contents": {
        "自动化": {
          "contents": {
            "Gulp": "http://gulpjs.com/",
            "Webpack": "https://webpack.github.io/",
            "百度fis": "http://fis.baidu.com/"
          }
        },
        "预编译": {
          "contents": {
            "Less": "http://lesscss.org/",
            "Sass": "http://sass-lang.com/"
          }
        },
        "版本控制": {
          "contents": {
            "廖雪峰Git教程": "http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",
            "ProGit": "http://iissnan.com/progit/"
          }
        },
        "查找工具": {
          "contents": {
            "Can I Use": "http://caniuse.com/",
            "命名工具": "http://unbug.github.io/codelf/"
          }
        },
        "在线编辑": {
          "contents": {
            "jsfiddle": "http://jsfiddle.net/",
            "codepen": "http://codepen.io/",
          }
        },
      }
    },
    "前端API": {
      "contents": {
        "jquery": "http://jquery.com/",
        "zepto": "http://zeptojs.com/",
        "ES6": "http://es6.ruanyifeng.com/#docs/function",
        "css3": "http://css3files.com/",
        "css参考手册": "http://css.doyoe.com/",
        "综合API": {
          "contents": {
            "WEB前端开发": "http://www.css88.com/",
            "前端开发者手册": "https://dwqs.gitbooks.io/frontenddevhandbook/content/index.html",
            "综合API": "http://devdocs.io/",
            "MDN": "https://developer.mozilla.org/zh-CN/",
          }
        }
      }
    },
    "问答社区": {
      "contents": {
        "stackoverflow": "http://stackoverflow.com/",
        "知乎": "https://www.zhihu.com/",
        "quora": "https://www.quora.com/#"
      }
    },
    "前端大牛": {
      "contents": {
        "勾三股四": "http://jiongks.name/",
        "张鑫旭": "http://www.zhangxinxu.com/wordpress/",
        "廖雪峰": "http://www.liaoxuefeng.com/",
        "阮一峰": "http://www.ruanyifeng.com/blog/",
        "玉伯":"https://github.com/lifesinger",
        "philipwalton": "https://philipwalton.com/",
      }
    },
    "博客":{
      "contents":{
        "汤姆大叔的博客":"http://www.cnblogs.com/TomXu/",
        "亚里士朱德的博客":"http://yalishizhude.github.io/",
      }
  },
};

var html = netscape(bookmarks);
console.log(html);
