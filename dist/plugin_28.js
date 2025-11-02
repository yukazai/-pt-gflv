// Plugin 28 - Skeleton VRCX plugin
class Plugin28 extends CustomModule {
    constructor() {
        super({
            name: "plugin_28",
            description: "Plugin 28 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 28] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin28;
