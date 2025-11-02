// Plugin 10 - Skeleton VRCX plugin
class Plugin10 extends CustomModule {
    constructor() {
        super({
            name: "plugin_10",
            description: "Plugin 10 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 10] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin10;
