class NotificationManagerPlugin extends CustomModule {
  constructor() {
    super({
      name: "Notification Manager 🔔",
      description: "Handles notifications safely with throttling",
      authors: [{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Monitor","AmongUs","Notifications"]
    });
    this.queue=[];
    this.isProcessing=false;
  }

  async load() {
    this.logger.log("Notification Manager loaded");
    this.loaded = true;
  }

  async notify(title,message,type="info"){
    this.queue.push({title,message,type});
    if(!this.isProcessing) this.processQueue();
  }

  async processQueue(){
    this.isProcessing=true;
    while(this.queue.length>0){
      const {title,message,type}=this.queue.shift();
      this.logger.log(`[Notification] ${title}: ${message}`);
      if(Notification.permission==="granted"){
        new Notification(title,{body:message});
      } else if(Notification.permission!=="denied"){
        Notification.requestPermission();
      }
      await new Promise(r=>setTimeout(r,1500));
    }
    this.isProcessing=false;
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = NotificationManagerPlugin;
