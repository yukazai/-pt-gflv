// ExtendedUserInfoPlus plugin for VRCX (unminified)
class ExtendedUserInfoPlus extends CustomModule {
    constructor() {
        super({
            name: "extended_user_info_plus",
            description: "Adds a 'More Info' button to the user search results, showing extra user data safely.",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Utility", "Profile", "Safe", "UI"]
        });
        this.loaded = false;
        this.observer = null;
        this.userLogs = {};
    }
    async load() { this.loaded = true; this.logger.log("[ExtendedUserInfoPlus] Loaded"); this.observeSearchResults(); }
    observeSearchResults() {
        const container = document.querySelector("#search-container") || document.body;
        this.observer = new MutationObserver(() => this.addMoreInfoButtons());
        this.observer.observe(container, { childList: true, subtree: true });
        this.logger.log("[ExtendedUserInfoPlus] Watching for search result updates");
    }
    addMoreInfoButtons() {
        const cards = document.querySelectorAll(".vrcx-user-card");
        for (const card of cards) {
            if (card.querySelector(".ext-info-btn")) continue;
            const btn = document.createElement("button");
            btn.innerText = "More Info";
            btn.classList.add("ext-info-btn");
            btn.style = "margin-left:8px;padding:4px 8px;background:#3a3a3a;color:#fff;border:none;border-radius:5px;cursor:pointer;";
            btn.onclick = () => this.openUserPanel(this.extractUserData(card));
            card.appendChild(btn);
        }
    }
    extractUserData(card) {
        const name = card.querySelector(".user-name")?.innerText || "Unknown User";
        const id = card.querySelector(".user-id")?.innerText || "usr_unknown";
        const status = card.querySelector(".user-status")?.innerText || "Offline";
        const bio = card.querySelector(".user-bio")?.innerText || "No bio provided.";
        return { name, id, status, bio };
    }
    openUserPanel(user) { /* content omitted for brevity */ }
}
window.customjs.__LAST_PLUGIN_CLASS__ = ExtendedUserInfoPlus;
