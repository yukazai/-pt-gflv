class ImpostorLoggerPlugin extends CustomModule {
  constructor() {
    super({
      name: "Impostor Logger 📝",
      description: "Logs suspicious actions safely with throttling",
      authors: [{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Monitor","AmongUs","Logging"]
    });
    this.logs = [];
    this.queue = [];
    this.isProcessing = false;
  }

  async load() {
    this.logger.log("Impostor Logger loaded");
    this.loaded = true;
  }

  async logAction(userId, action) {
    this.queue.push({userId,action});
    if(!this.isProcessing) this.processQueue();
  }

  async processQueue() {
    this.isProcessing = true;
    while(this.queue.length > 0){
      const {userId,action} = this.queue.shift();
      this.logs.push({userId,action,time:new Date().toISOString()});
      this.logger.log(`Action Logged: ${userId} -> ${action}`);
      await new Promise(r=>setTimeout(r,1500));
    }
    this.isProcessing = false;
  }

  getLogs(){
    return this.logs;
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = ImpostorLoggerPlugin;
