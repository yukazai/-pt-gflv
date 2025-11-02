// Plugin 17 - Skeleton VRCX plugin
class Plugin17 extends CustomModule {
    constructor() {
        super({
            name: "plugin_17",
            description: "Plugin 17 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 17] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin17;
