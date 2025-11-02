// Plugin 25 - Skeleton VRCX plugin
class Plugin25 extends CustomModule {
    constructor() {
        super({
            name: "plugin_25",
            description: "Plugin 25 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 25] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin25;
