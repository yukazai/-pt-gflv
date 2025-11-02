// Plugin 30 - Skeleton VRCX plugin
class Plugin30 extends CustomModule {
    constructor() {
        super({
            name: "plugin_30",
            description: "Plugin 30 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 30] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin30;
