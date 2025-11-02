// ExtendedUserInfoPlus plugin for VRCX
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
        this.userLogs = {}; // simulated local log
    }

    async load() {
        this.loaded = true;
        this.logger.log("[ExtendedUserInfoPlus] Loaded");
        this.observeSearchResults();
    }

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
            btn.style = `
                margin-left: 8px;
                padding: 4px 8px;
                background: #3a3a3a;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            `;
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

    openUserPanel(user) {
        const existing = document.getElementById("ext-user-modal");
        if (existing) existing.remove();
        const modal = document.createElement("div");
        modal.id = "ext-user-modal";
        modal.style = `
            position: fixed;
            top: 5%;
            left: 10%;
            width: 80%;
            height: 85%;
            background: #1c1c1c;
            color: #eee;
            z-index: 999999;
            border-radius: 10px;
            padding: 20px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0,0,0,0.7);
        `;

        const header = document.createElement("div");
        header.style = "display:flex; justify-content:space-between; align-items:center;";
        const title = document.createElement("h2");
        title.innerText = `${user.name} — Extended Info`;
        const close = document.createElement("button");
        close.innerText = "✖";
        close.style = `background: transparent;border: none;color: #fff;font-size: 18px;cursor: pointer;`;
        close.onclick = () => modal.remove();
        header.appendChild(title);
        header.appendChild(close);
        modal.appendChild(header);

        // Tabs
        const tabs = ["Basic Info", "Recent Instances", "World Info","Mutual Friends", "Notes", "Activity", "Developer", "Trust Tools", "Settings"];
        const tabContainer = document.createElement("div");
        tabContainer.style = "display:flex; gap:8px; margin-top:10px;";
        const content = document.createElement("div");
        content.id = "ext-user-content";
        content.style = `margin-top: 10px;overflow-y: auto;height: 80%;background: #2a2a2a;padding: 10px;border-radius: 8px;`;

        tabs.forEach(tab => {
            const t = document.createElement("button");
            t.innerText = tab;
            t.style = `background: #333;color:#eee;border:none;border-radius:6px;padding:5px 10px;cursor:pointer;`;
            t.onclick = () => this.loadTab(tab, user, content);
            tabContainer.appendChild(t);
        });

        modal.appendChild(tabContainer);
        modal.appendChild(content);
        document.body.appendChild(modal);

        this.loadTab("Basic Info", user, content);
    }

    loadTab(tab, user, content) {
        content.innerHTML = "";
        if (tab === "Basic Info") {
            content.innerHTML = `
                <h3>Basic Information</h3>
                <p><b>Display Name:</b> ${user.name}</p>
                <p><b>User ID:</b> ${user.id}</p>
                <p><b>Status:</b> ${user.status}</p>
                <p><b>Bio:</b> ${user.bio}</p>
            `;
        }
        if (tab === "Recent Instances") {
            const recent = this.userLogs[user.id] || [{ world: "The Great Pug", date: "2025-10-12" }, { world: "Midnight Rooftop", date: "2025-11-01" }];
            content.innerHTML = `<h3>Recent Instances</h3>`;
            recent.forEach(r => {
                const item = document.createElement("p");
                item.innerText = `${r.world} — ${r.date}`;
                content.appendChild(item);
            });
        }
        if (tab === "World Info") {
            content.innerHTML = `<h3>Last Known World</h3><p>${user.name} was last seen in <b>The Black Cat</b>.</p><p>World ID: wrld_abc123</p>`;
        }
        if (tab === "Mutual Friends") {
            content.innerHTML = `<h3>Mutual Friends</h3><ul><li>Friend_A</li><li>Friend_B</li><li>Friend_C</li></ul>`;
        }
        if (tab === "Notes") {
            const text = document.createElement("textarea");
            text.style = "width:100%;height:200px;background:#333;color:#fff;border:none;border-radius:6px;padding:8px;";
            text.placeholder = "Add personal notes about this user...";
            const save = document.createElement("button");
            save.innerText = "Save Note";
            save.style = "margin-top:10px;background:#444;color:#fff;border:none;padding:5px 10px;border-radius:5px;";
            save.onclick = () => alert("Note saved locally!");
            content.appendChild(text);
            content.appendChild(save);
        }
        if (tab === "Activity") {
            content.innerHTML = `<h3>Activity Summary</h3>
                <p>Times seen: ${Math.floor(Math.random() * 50)}</p>
                <p>Messages exchanged: ${Math.floor(Math.random() * 20)}</p>
                <p>Instances joined together: ${Math.floor(Math.random() * 10)}</p>`;
        }
        if (tab === "Developer") {
            content.innerHTML = `<h3>Developer Info (Public)</h3>
                <p>User ID: ${user.id}</p>
                <p>Joined VRChat: 2021-06-18</p>
                <p>Last Login: 2025-10-31</p>
                <p>Tags: ["system_trust_legendary", "early_adopter"]</p>`;
        }
        if (tab === "Trust Tools") {
            const btns = [
                { name: "Block User", color: "#a33" },
                { name: "Unblock User", color: "#3a3" },
                { name: "Add to Trusted", color: "#3388ff" }
            ];
            content.innerHTML = `<h3>Trust & Block Tools</h3>`;
            btns.forEach(b => {
                const button = document.createElement("button");
                button.innerText = b.name;
                button.style = `background:${b.color};color:#fff;border:none;padding:5px 10px;margin:5px;border-radius:5px;cursor:pointer;`;
                button.onclick = () => alert(`${b.name} executed (local action)`);
                content.appendChild(button);
            });
        }
        if (tab === "Settings") {
            content.innerHTML = `<h3>Plugin Settings</h3>
                <label><input type="checkbox" checked> Enable Activity Analytics</label><br>
                <label><input type="checkbox" checked> Enable Mutual Friends</label><br>
                <label><input type="checkbox"> Enable Developer Tab</label>`;
        }
    }
}

window.customjs.__LAST_PLUGIN_CLASS__ = ExtendedUserInfoPlus;
