class ImpostorLoggerPlugin extends CustomModule {
  constructor() {
    super({
      name: "Impostor Logger 📝",
      description: "Logs suspicious actions of players",
      authors: [{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Monitor","AmongUs","Logging"]
    });
    this.logs = [];
  }

  async load() {
    this.logger.log("Impostor Logger loaded");
    this.loaded = true;
  }

  logAction(userId, action) {
    const entry = {userId, action, time: new Date().toISOString()};
    this.logs.push(entry);
    this.logger.log(`Action Logged: ${userId} -> ${action}`);
  }

  getLogs() {
    return this.logs;
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = ImpostorLoggerPlugin;
