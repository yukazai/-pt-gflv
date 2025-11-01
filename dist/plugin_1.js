// plugin_manager
// VRCX plugin manager sidebar
class PluginManagerPlugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_manager",
            description: "Adds a sidebar to manage and customize all installed plugins",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Utility", "Manager"],
        });

        this.loaded = false;
    }

    async load() {
        this.loaded = true;
        this.logger.log("[PluginManager] loaded");
        this.addSidebarOption();
    }

    addSidebarOption() {
        if (!window.VRCX?.addSidebarItem) {
            this.logger.warn("[PluginManager] Cannot add sidebar item: addSidebarItem not found");
            return;
        }

        window.VRCX.addSidebarItem("Plugin Manager", () => {
            this.openManagerUI();
        });
    }

    openManagerUI() {
        // Remove existing modal if open
        const existing = document.getElementById("plugin-manager-modal");
        if (existing) existing.remove();

        const modal = document.createElement("div");
        modal.id = "plugin-manager-modal";
        modal.style = `
            position: fixed; top: 5%; left: 5%; width: 90%; height: 90%;
            background: #1c1c1c; color: #eee; overflow-y: auto;
            border: 2px solid #555; border-radius: 10px; padding: 20px; z-index: 99999;
        `;

        const title = document.createElement("h2");
        title.innerText = "Plugin Manager";
        title.style = "margin-bottom: 10px;";

        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Close";
        closeBtn.style = `
            position: absolute; top: 10px; right: 10px;
            background: #444; color: #fff; border: none; padding: 5px 10px;
            cursor: pointer; border-radius: 5px;
        `;
        closeBtn.onclick = () => modal.remove();

        const pluginList = document.createElement("div");
        pluginList.style = "margin-top: 20px;";

        const plugins = window.customjs?.plugins || [];
        if (!plugins.length) {
            pluginList.innerText = "No plugins loaded.";
        } else {
            plugins.forEach((plugin, index) => {
                const pluginCard = document.createElement("div");
                pluginCard.style = `
                    background: #2a2a2a; margin-bottom: 10px;
                    padding: 10px; border-radius: 8px;
                `;

                const pluginName = document.createElement("h3");
                pluginName.innerText = plugin.name || `Plugin ${index + 1}`;

                const pluginDesc = document.createElement("p");
                pluginDesc.innerText = plugin.description || "No description";

                const toggleBtn = document.createElement("button");
                toggleBtn.innerText = plugin.loaded ? "Disable" : "Enable";
                toggleBtn.style = `
                    background: #555; color: #fff; border: none; padding: 5px 10px;
                    cursor: pointer; margin-right: 10px; border-radius: 5px;
                `;
                toggleBtn.onclick = () => {
                    if (plugin.loaded && typeof plugin.unload === "function") {
                        plugin.unload();
                        plugin.loaded = false;
                        toggleBtn.innerText = "Enable";
                    } else if (!plugin.loaded && typeof plugin.load === "function") {
                        plugin.load();
                        plugin.loaded = true;
                        toggleBtn.innerText = "Disable";
                    }
                };

                const editBtn = document.createElement("button");
                editBtn.innerText = "Customize";
                editBtn.style = `
                    background: #777; color: #fff; border: none; padding: 5px 10px;
                    cursor: pointer; border-radius: 5px;
                `;
                editBtn.onclick = () => alert("Customize feature not implemented yet.");

                pluginCard.appendChild(pluginName);
                pluginCard.appendChild(pluginDesc);
                pluginCard.appendChild(toggleBtn);
                pluginCard.appendChild(editBtn);

                pluginList.appendChild(pluginCard);
            });
        }

        modal.appendChild(title);
        modal.appendChild(closeBtn);
        modal.appendChild(pluginList);

        document.body.appendChild(modal);
    }
}

window.customjs.__LAST_PLUGIN_CLASS__ = PluginManagerPlugin;
