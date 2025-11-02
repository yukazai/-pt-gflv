class AmongUsTrackerPlugin extends CustomModule {
  constructor() {
    super({
      name: "Among Us Tracker 🛡️",
      description: "Tracks players and marks suspected impostors",
      authors: [{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Monitor","AmongUs","Utility"]
    });
    this.playerLogs = {};
  }

  async load() {
    this.logger.log("Among Us Tracker loaded");
    this.observePlayers();
    this.loaded = true;
  }

  observePlayers() {
    const container = document.querySelector("#user-list") || document.body;
    this.observer = new MutationObserver(() => this.addButtons());
    this.observer.observe(container, { childList: true, subtree: true });
  }

  addButtons() {
    const cards = document.querySelectorAll(".vrcx-user-card");
    cards.forEach(card => {
      const userId = card.querySelector(".user-id")?.innerText;
      const userName = card.querySelector(".user-name")?.innerText;
      if (!userId || card.querySelector(".au-btn")) return;
      if (!this.playerLogs[userId]) this.playerLogs[userId] = {name:userName,suspicious:false};

      const btn = document.createElement("button");
      btn.innerText = "Mark Suspicious";
      btn.classList.add("au-btn");
      btn.style = "margin-left:8px;padding:4px 8px;background:#a33;color:#fff;border:none;border-radius:5px;cursor:pointer;";
      btn.onclick = () => this.toggleSuspicious(userId, btn);
      card.appendChild(btn);
    });
  }

  toggleSuspicious(userId, btn) {
    const player = this.playerLogs[userId];
    player.suspicious = !player.suspicious;
    btn.innerText = player.suspicious ? "Suspicious ✅" : "Mark Suspicious";
    this.logger.log(`${player.name} is now ${player.suspicious ? "marked as suspicious" : "cleared"}`);
  }

  getSuspiciousPlayers() {
    return Object.values(this.playerLogs).filter(p=>p.suspicious).map(p=>p.name);
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = AmongUsTrackerPlugin;
