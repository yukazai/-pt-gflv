// Plugin 20 - Skeleton VRCX plugin
class Plugin20 extends CustomModule {
    constructor() {
        super({
            name: "plugin_20",
            description: "Plugin 20 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 20] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin20;
