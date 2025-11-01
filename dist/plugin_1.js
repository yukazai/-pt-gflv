// custom_emoji_plugin
// VRCX plugin to add custom emojis (VRChat Plus) with custom sizes
class CustomEmojiPlugin extends CustomModule {
    constructor() {
        super({
            name: "custom_emoji_plugin",
            description: "Allows VRChat Plus users to add custom emojis even above the usual size limit",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["VRChatPlus", "Emoji", "Customization"],
        });

        this.loaded = false;
        this.customEmojis = {}; // Store your custom emojis here
    }

    async load() {
        this.loaded = true;
        this.logger.log("[CustomEmoji] Plugin loaded");

        this.addSidebarButton();
        this.overrideEmojiRenderer();
    }

    addSidebarButton() {
        // Simple sidebar integration
        const sidebar = document.querySelector("#sidebar");
        if (!sidebar) return setTimeout(() => this.addSidebarButton(), 1000);

        if (document.getElementById("custom-emoji-sidebar-btn")) return;

        const btn = document.createElement("div");
        btn.id = "custom-emoji-sidebar-btn";
        btn.innerText = "Custom Emojis";
        btn.style = `
            padding: 10px 15px;
            cursor: pointer;
            color: #eee;
            font-weight: bold;
        `;
        btn.onmouseover = () => btn.style.background = "#333";
        btn.onmouseout = () => btn.style.background = "transparent";
        btn.onclick = () => this.openEmojiManager();

        sidebar.appendChild(btn);
    }

    openEmojiManager() {
        // Remove existing modal
        const existing = document.getElementById("custom-emoji-modal");
        if (existing) existing.remove();

        const modal = document.createElement("div");
        modal.id = "custom-emoji-modal";
        modal.style = `
            position: fixed; top: 5%; left: 5%; width: 90%; height: 90%;
            background: #1c1c1c; color: #eee; overflow-y: auto;
            border: 2px solid #555; border-radius: 10px; padding: 20px; z-index: 99999;
        `;

        const title = document.createElement("h2");
        title.innerText = "Custom Emojis";
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Close";
        closeBtn.style = `
            position: absolute; top: 10px; right: 10px;
            background: #444; color: #fff; border: none; padding: 5px 10px;
            cursor: pointer; border-radius: 5px;
        `;
        closeBtn.onclick = () => modal.remove();

        // File input to add emoji
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style = "margin: 10px 0;";
        fileInput.onchange = (e) => this.addCustomEmoji(e);

        // Emoji list
        const emojiList = document.createElement("div");
        emojiList.id = "custom-emoji-list";
        emojiList.style = "margin-top: 20px; display: flex; flex-wrap: wrap; gap: 10px;";

        // Render existing emojis
        this.renderEmojiList(emojiList);

        modal.appendChild(title);
        modal.appendChild(closeBtn);
        modal.appendChild(fileInput);
        modal.appendChild(emojiList);

        document.body.appendChild(modal);
    }

    addCustomEmoji(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const emojiName = file.name.split(".")[0];
            this.customEmojis[emojiName] = e.target.result;

            const list = document.getElementById("custom-emoji-list");
            if (list) this.renderEmojiList(list);
        };
        reader.readAsDataURL(file);
    }

    renderEmojiList(container) {
        container.innerHTML = "";
        Object.entries(this.customEmojis).forEach(([name, dataUrl]) => {
            const emojiDiv = document.createElement("div");
            emojiDiv.style = "display: flex; flex-direction: column; align-items: center;";

            const img = document.createElement("img");
            img.src = dataUrl;
            img.style = "width: 64px; height: 64px; object-fit: contain;";

            const label = document.createElement("span");
            label.innerText = name;

            emojiDiv.appendChild(img);
            emojiDiv.appendChild(label);
            container.appendChild(emojiDiv);
        });
    }

    overrideEmojiRenderer() {
        // Monkey-patch VRCX emoji renderer to include custom emojis
        const originalRender = window.VRCX?.renderEmoji;
        if (!originalRender) return this.logger.warn("[CustomEmoji] renderEmoji not found");

        const self = this;
        window.VRCX.renderEmoji = function(emojiName, ...args) {
            if (self.customEmojis[emojiName]) {
                const img = document.createElement("img");
                img.src = self.customEmojis[emojiName];
                img.style = "width: 64px; height: 64px; object-fit: contain;";
                return img;
            }
            return originalRender.call(this, emojiName, ...args);
        };
    }
}

window.customjs.__LAST_PLUGIN_CLASS__ = CustomEmojiPlugin;
