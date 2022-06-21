# PHP-AUTO-UPDATER

---

PHP-AUTO-UPDATER是一个以PHP为后端的版本管理器，它提供一个前端页面让你轻松地修改您软件的版本号及更新日志以供用户收到自动更新通知。

##  ABOUT:为什么我要造这个轮子？

我本身是一名全栈开发者，我写了一些个人Electron项目，但是它们缺少一个更新器。到这里可能有人要说：“乂，Electron不是有autoUpdater吗，你还白费什么功夫？”，很可惜，我并没有一台完全自主控制的服务器，我的网站部署在虚拟主机上，因此我无法使用Electron中提供的autoUpdater。造这个轮子，是为了让个人开发者在版本管理时成本降得更低一些。

## 安装

请把从Release分支中下载下来的内容解压后，将./website中的所有内容放置在你的服务器任意可通过链接访问的文件夹中，并记住你放置的路径。

在你的软件中打开PS，键入 `npm install php-updater` 



##  使用

在引入php-updater包后，像这样构建一个更新器：

> var updater = new Updater('https://peercat.cn/','1.0.0',path.join(__dirname,'temp'),'install.exe')



CHECK()检查更新

CHECK有两种使用方式，第一种标准使用方式为：

> updater.check(60);



该方法命令updater每60秒检查一次更新。当有可用版本时，返回true

第二种标准使用方式为：

> updater.check();

该方法命令updater检查一次更新。当有可用版本时，返回true(==推荐此方法==)



UPDATEASYNC()更新

调用UPDATEASYNC将开始对安装包进行下载。当下载完成时，将返回true。
