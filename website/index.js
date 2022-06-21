class APP {
    constructor(appId,appName,appVersion,updateLog){
        this.appId = appId;
        this.appName = appName;
        this.appVersion = appVersion;
        this.updateLog = updateLog;
    }
}
let APPAR = new Array(100);
for(x=0;x<100;x++){
    APPAR[x]=new APP(x,'New App','v1.0.0',null);
}


document.getElementById("add-applist").addEventListener('click',()=>{
    addToApplist('New App','v1.0.0');
    document.getElementById('appcard').onclick = ()=>{
        document.getElementById('appcard').classList.add('selected')
    }
})

function addToApplist(appName,appVersion){
    var root = document.getElementById("applist");
    var appcard = document.createElement("button");
    appcard.className = "appcard";
    appcard.id = "appcard";
    var appcardName = document.createElement('div');
    appcardName.className = "appcard-name";
    var appcardVersion = document.createElement('div');
    appcardVersion.className = "appcard-version";
    appcardName.innerHTML = appName;
    appcardVersion.innerHTML = appVersion;
    appcard.appendChild(appcardName);
    appcard.appendChild(appcardVersion);
    root.appendChild(appcard);
}