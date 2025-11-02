// Plugin 38 - Skeleton VRCX plugin
class Plugin38 extends CustomModule {
    constructor() {
        super({
            name: "plugin_38",
            description: "Plugin 38 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 38] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin38;
