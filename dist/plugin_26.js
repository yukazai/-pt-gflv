// Plugin 26 - Skeleton VRCX plugin
class Plugin26 extends CustomModule {
    constructor() {
        super({
            name: "plugin_26",
            description: "Plugin 26 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 26] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin26;
