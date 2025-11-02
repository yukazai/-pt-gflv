// Plugin 15 - Skeleton VRCX plugin
class Plugin15 extends CustomModule {
    constructor() {
        super({
            name: "plugin_15",
            description: "Plugin 15 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 15] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin15;
