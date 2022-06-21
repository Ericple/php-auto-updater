# PHP-AUTO-UPDATER

---

PHP-AUTO-UPDATER is a version manager with PHP as the backend, which provides a front-end page for you to easily modify the version number and update log of your software for users to receive automatic update notifications.

##ABOUT:Why am I building this wheel?

I'm a full stack developer myself, and I've written some personal Electron projects, but they lack an updater. At this point, some people may want to say: "Hey, doesn't Electron have an autoUpdater, what are you doing in vain?", unfortunately, I don't have a fully autonomous server, my website is deployed on a virtual host, so I can't Use the autoUpdater provided in Electron. This wheel is built to reduce the cost of version management for individual developers.

## Install

Please unzip the content downloaded from the Release branch, and place all the content in ./website in any folder on your server that can be accessed through the link, and remember the path you placed.

Open PS in your software, type `npm install php-updater`



##  use

After importing the php-updater package, build an updater like this:

> var updater = new Updater('https://peercat.cn/','1.0.0',path.join(__dirname,'temp'),'install.exe')



CHECK() checks for updates

There are two ways to use CHECK, the first standard use is:

> updater.check(60);



This method instructs the updater to check for updates every 60 seconds. Returns true when a version is available

The second standard usage is:

> updater.check();

This method instructs the updater to check for an update. Returns true when there is a version available (==recommended this method==)



UPDATEASYNC() update

Calling UPDATEASYNC will start the download of the installation package. Returns true when the download is complete.
