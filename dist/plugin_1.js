// custom_emoji_plugin
class CustomEmojiPlugin extends CustomModule {
    constructor() {
        super({
            name: "custom_emoji_plugin",
            description: "Add your own emojis (VRChat Plus) via plugin settings",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["VRChatPlus", "Emoji", "Customization"],
        });

        this.loaded = false;
        this.customEmojis = {}; // Store your custom emojis
    }

    async load() {
        this.loaded = true;
        this.logger.log("[CustomEmoji] Plugin loaded");
        this.overrideEmojiRenderer();
    }

    // VRCX calls this automatically to display the settings gear
    getSettings() {
        const container = document.createElement("div");
        container.style = "display: flex; flex-direction: column; gap: 10px;";

        const title = document.createElement("h3");
        title.innerText = "Custom Emojis";
        container.appendChild(title);

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (e) => this.addCustomEmoji(e, container);
        container.appendChild(fileInput);

        const emojiList = document.createElement("div");
        emojiList.style = "display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;";
        container.appendChild(emojiList);

        // Render existing emojis
        this.renderEmojiList(emojiList);

        return container;
    }

    addCustomEmoji(event, container) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const emojiName = file.name.split(".")[0];
            this.customEmojis[emojiName] = e.target.result;

            const emojiList = container.querySelector("div:last-child");
            if (emojiList) this.renderEmojiList(emojiList);
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
