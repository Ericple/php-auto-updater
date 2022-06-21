'use strict'
const $ = require("jquery");
const http = require('http');
const fs = require('fs');
const path = require('path');
exports.Updater = class updater{
    /*在初始化updater时，提供用户运行软件版本号、更新url、更新下载目录、安装包名

    let updater = new updater('https://yourupdater.com/',1.0.0,'your\\path','executable.exe');
                              
    */
    constructor(url,version,dest,fname){
        this.updateUrl = url;
        this.version = version;
        this.dest = path.join(dest,fname);
    };
    check(time){
        if (time) {
            setInterval(() => {
                $.ajax({
                    type:"POST",
                    url:this.updateUrl,
                    success:function(data){
                        if (data.version != version) {
                            return true;
                        }else{
                            return false;
                        }
                    }
                })
            }, time * 1000);
        } else {
            $.ajax({
                type:"POST",
                url:this.updateUrl,
                success:function(data){
                    if (data.version != version) {
                        return true;
                    }else{
                        return false;
                    }
                }
            })
        }
    };
    updateAsync(downloadUrl){
        return new Promise((resolve,reject)=>{
            const file = fs.createWriteStream(this.dest);
            http.get(downloadUrl,(res)=>{
                if(res.statusCode!==200){
                    reject(res.statusCode);
                    return;
                }
                res.on('end',()=>{
                    console.log('download end');
                });
                file.on('finish',()=>{
                    console.log('file write finished');
                    file.close(resolve);
                }).on('error',(err)=>{
                    fs.unlink(this.dest);
                    reject(err.message);
                });
                res.pipe(file);
                return true;
            })
        })
    }
}