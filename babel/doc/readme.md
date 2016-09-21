## babel6

> babel5和babel6版本的区别比较大，
> 5对新手更加友好，因为只需要安装一个babel就可以了，而6需要安装比较多的东西和插件才可以。
> 相比5来说，6将命令行工具和API分开来了，最直观的感觉就是，当你想在代码中运行es6代码的话，需要安装babel-core，
> 而
> 如果你想在终端编译es6或者是运行es6版本的REPL的话，需要安装babel-cli
> [参考](http://w3cshow.com/2016/03/04/effective-javascript-notes-md/);[参考](https://cnodejs.org/topic/56460e0d89b4b49902e7fbd3);

### 全局安装命令行工具

- `npm install -g babel-cli`:


### 本地安装命令行工具

- `npm install --save--dev babel-cli`

- 配置`package.json`

  ```
   "scripts": {
     "bulid": "babel babel/es6 -d babel/es5"
   }
  ```

- 执行命令

  `npm run build`

### 安装API

- npm install -g bobel-corenpm install -save bobel-core`

### 配置.babelrc文件

- [请移步到这](http://www.ruanyifeng.com/blog/2016/01/babel.html)里

更多请去[这里](http://www.ruanyifeng.com/blog/2016/01/babel.html);

