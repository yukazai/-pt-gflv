// Plugin 36 - Skeleton VRCX plugin
class Plugin36 extends CustomModule {
    constructor() {
        super({
            name: "plugin_36",
            description: "Plugin 36 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 36] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin36;
