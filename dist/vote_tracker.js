class VoteTrackerPlugin extends CustomModule {
  constructor() {
    super({
      name: "Vote Tracker 🗳️",
      description: "Tracks votes with throttled updates",
      authors: [{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Monitor","AmongUs","Voting"]
    });
    this.voteLogs = {};
    this.queue = [];
    this.isProcessing = false;
  }

  async load() {
    this.logger.log("Vote Tracker loaded");
    this.loaded = true;
  }

  async logVote(voterId, targetId) {
    this.queue.push({voterId,targetId});
    if(!this.isProcessing) this.processQueue();
  }

  async processQueue() {
    this.isProcessing = true;
    while(this.queue.length > 0){
      const {voterId,targetId} = this.queue.shift();
      if(!this.voteLogs[voterId]) this.voteLogs[voterId] = [];
      this.voteLogs[voterId].push(targetId);
      this.logger.log(`Vote: ${voterId} -> ${targetId}`);
      await new Promise(r=>setTimeout(r,1500)); // throttle 1.5s
    }
    this.isProcessing = false;
  }

  getVotes(userId){
    return this.voteLogs[userId] || [];
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = VoteTrackerPlugin;
