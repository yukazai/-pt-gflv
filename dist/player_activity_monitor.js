class PlayerActivityMonitorPlugin extends CustomModule {
  constructor() {
    super({
      name: "Player Activity Monitor 👀",
      description: "Tracks player actions safely",
      authors: [{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Monitor","AmongUs","Activity"]
    });
    this.activityLogs = {};
    this.queue = [];
    this.isProcessing = false;
  }

  async load() {
    this.logger.log("Player Activity Monitor loaded");
    this.loaded = true;
  }

  async logActivity(userId, activity){
    this.queue.push({userId,activity});
    if(!this.isProcessing) this.processQueue();
  }

  async processQueue(){
    this.isProcessing=true;
    while(this.queue.length>0){
      const {userId,activity}=this.queue.shift();
      if(!this.activityLogs[userId]) this.activityLogs[userId]=[];
      this.activityLogs[userId].push({activity,time:new Date().toISOString()});
      this.logger.log(`Activity: ${userId} -> ${activity}`);
      await new Promise(r=>setTimeout(r,1500));
    }
    this.isProcessing=false;
  }

  getActivity(userId){
    return this.activityLogs[userId] || [];
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = PlayerActivityMonitorPlugin;
