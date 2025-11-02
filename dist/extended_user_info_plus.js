class ExtendedUserInfoPlus extends CustomModule {
  constructor() {
    super({
      name: "Extended User Info+",
      description: "Adds a 'More Info' button to user search results",
      authors:[{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Utility","Profile","Safe","UI"]
    });
    this.userLogs = {};
  }

  async load() {
    this.logger.log("Extended User Info+ loaded");
    this.observeSearchResults();
    this.loaded = true;
  }

  observeSearchResults() {
    const container = document.querySelector("#search-container") || document.body;
    this.observer = new MutationObserver(()=>this.addMoreInfoButtons());
    this.observer.observe(container,{childList:true,subtree:true});
  }

  addMoreInfoButtons() {
    const cards = document.querySelectorAll(".vrcx-user-card");
    for (const card of cards) {
      if(card.querySelector(".ext-info-btn")) continue;
      const btn = document.createElement("button");
      btn.innerText="More Info";
      btn.classList.add("ext-info-btn");
      btn.style="margin-left:8px;padding:4px 8px;background:#3a3a3a;color:#fff;border:none;border-radius:5px;cursor:pointer;";
      btn.onclick=()=>this.openUserPanel(this.extractUserData(card));
      card.appendChild(btn);
    }
  }

  extractUserData(card) {
    const name = card.querySelector(".user-name")?.innerText || "Unknown User";
    const id = card.querySelector(".user-id")?.innerText || "usr_unknown";
    const status = card.querySelector(".user-status")?.innerText || "Offline";
    const bio = card.querySelector(".user-bio")?.innerText || "No bio provided.";
    return {name,id,status,bio};
  }

  openUserPanel(user) {
    alert(`User Info: ${user.name} (${user.id})\nStatus: ${user.status}\nBio: ${user.bio}`);
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = ExtendedUserInfoPlus;
