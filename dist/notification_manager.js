class NotificationManagerPlugin extends CustomModule {
  constructor() {
    super({
      name: "Notification Manager 🔔",
      description: "Handles notifications for suspicious actions and votes",
      authors: [{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Monitor","AmongUs","Notifications"]
    });
  }

  async load() {
    this.logger.log("Notification Manager loaded");
    this.loaded = true;
  }

  notify(title, message, type="info") {
    this.logger.log(`[Notification] ${title}: ${message}`);
    // Example: Add desktop notification if enabled
    if (Notification.permission === "granted") {
      new Notification(title, {body: message});
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = NotificationManagerPlugin;
