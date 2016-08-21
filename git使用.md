### Git 

1. #### git安装

   下载git[下载地址](https://www.git-scm.com/download/)，安装即可

   查看安装成功` git --version`

2. #### git配置

   用户信息配置：

   - `git config --global user.name "liuyanli"`
   - `git config --global user.email "liuyanli@weidian.com"`

3. #### 创建私钥

   > 我们使用ssh登录服务器时，一般常见的会使用用户名/密码方式登录，也可以使用ssh key实行免密码登录,配置私钥，可以和ssh的方式和仓库通信

   查看是否已经创建：`cd ~/.ssh`

   - 创建SSH Key：` ssh-keygen -t rsa -C “liuyanli@weidian.com”
   - 查看`cd ~/.ssh`:`id_rsa` 和`id_rsa.pub`

   添加密钥到到SSH: 

   - 登录github:[我的github仓库](https://github.com/settings/keys);

   - 将`id_rsa.pub`的内容复制到 仓库下的SSH中即可

     > SSH（Secure shell 安全外壳协议）的作用：
     >
     > 在本地创建一对密钥（公有密钥：id_rsa.pub、私有密钥：id_rsa）,把共有密钥放在需要访问的服务器上，如粘贴id_rsa.pub的内容至你的github账户中的SSH Keys中，这样就建立了本地、远程认证关系。当向服务器发送请求时，如git push origin master,推送主分支到远程仓库。会通过你发送过来的共有密钥和服务器上的共有密钥进行比较，如果两个密钥一致则服务器验证通过。这样就避免了中间人攻击。

   - 是否绑定成功：`ssh -T git@github.com`

     > 如果出现无权访问（Permission denied (publickey).），说明创建的SSH key无效,再去重新创建吧

4. #### 本地创建多个SSH key

   > 有的时候，不仅github使用ssh key，工作项目或者其他云平台可能也需要使用ssh key来认证，如果每次都覆盖了原来的`id_rsa`文件，那么之前的认证就会失效

   ​  [很有价值的参考](http://xuyuan923.github.io/2014/11/04/github-gitlab-ssh/);`gitlab 搭建不成功`

   查看配置信息：`git config —list`


### Git使用

1. #### 本地创建版本库

   > `mkdir test`
   >
   > `cd test`

   - `git init`：将此目录初始化为git可以管理的仓库，生成.git文件


- 新建文件：`touch readme.md`(一些命令行操作[命令行](https://www.renfei.org/blog/mac-os-x-terminal-101.html))
- 把文件添加到仓库：`git add .`
   - 把文件提交到仓库：`git commit -m 'readme.md'`

1. #### 本地仓库与远程仓库关联

   > 在github上建立了一个git仓库，同时在本地创建了本地仓库，让这两个仓库进行远程同步，这样，GitHub上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。

   - 添加远程仓库：

     `git remote add origin https`

     注意：使用SSH会出现问题??

   - 将本地内容推送到仓库

     `git push origin  master`

2. #### 克隆版本库

   > 上面两步，操作起来还是有点麻烦的，其实我们有更简单的方法

   - 在github上 new Repository
   - `git clone https`

3. #### git操作

   > `首先先了解git的工作流程`

   - 克隆Git资源作为工作目录

   - 在克隆的资源上添加或者修改文件

   - 如果其他人修改了，你可以更新资源

   - 在提交前查看修改

   - 提交修改

   - 在修改完成后，如果发现错误，可以撤回提交，修改后再次提交

     ![git-process](git-process.png)

   > `工作区、暂存区、版本库的概念`

   - **工作区：**就是你在电脑里能看到的目录。

   - **暂存区：**英文叫stage, 或index。一般存放在"git目录"下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。

   - **版本库：**工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库

     ![dd](work.jpg)

### Git命令列表

> 熟悉了git的工作流程已经空间关系，下面来看看git常用的命令操作吧

- `git add`:用于向暂存区（index）提交文件

- `git commit -m '描述'`：将暂存区的文件提交到版本库中

- `git push origin master`:将本地commit的代码更新到远程版本库中

  > git 分支操作，[参考](https://github.com/ruanyf/articles/blob/master/dev/git/commands.md);

- `git beanch`:查看分支

- `git branch <name>`:新建分支

- `git checkout <name> `:切换分支

- `git checkout -b <name>`:创建并切换分支

- `git branch -d <name>`:删除分支

  > 场景一：当你正在进行项目开发的过程中，里面正在开发的模块还没有完成，但是工作需要，你要切换到另外一个分支上操作，你有不想提交未开发完的模块，那么`git stash`这个救世主来啦，你可以很方便的储藏这些变更

- `git stash`:命令用于暂时保存没有提交的工作。运行该命令后，所有没有commit的代码，都会暂时从工作区移除，回到上次commit时的状态。

- `git stash list`:查看现有的储藏

  stash@{0}: WIP on master: d1b8983 dd

- `git stash apply stash@{0} `:将某个暂存文件恢复回来，和当前分支文件合并,但是stash不会删除

- `git stash pop`:恢复最近一次stash的文件,恢复的同时把stash内容也删了

- `git stash drop`:丢弃最近一次stash的文件

- `git stash clear`:删除所有的stash

  > 场景二：多人开发时，都会遇到多跟人同时更改了一个文件，产生冲突

- `git add .` `git commit -m 'dsd'`或者`git stash`,先将你本地的代码提交到暂存区

- `git pull origin master`:从远程拉取代码，会覆盖本地代码，如果产生冲突会提示

- `git diff`:查看文件差异

- `git diff HEAD -- readme.txt`:命令可以查看工作区和版本库里面最新版本的区别

  > git中的后悔药，很多时候我们要撤销一些修改

  [参考](https://github.com/geeeeeeeeek/git-recipes/wiki/5.2-%E4%BB%A3%E7%A0%81%E5%9B%9E%E6%BB%9A%EF%BC%9AReset%E3%80%81Checkout%E3%80%81Revert%E7%9A%84%E9%80%89%E6%8B%A9);

- `git checout -- filename`:

  - 只是修改了内容，但是还没有提交：那么将回滚到你之前的操作
  - 已经将文件提交commit了，还没有push,之后又修改了文件，则是回滚到最近一次commit的状态

  > 一些辅助命令

- `git stutas`:查看仓库当前的状态

- `git log `:查看操作日志

[更多参考:廖雪峰git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000);