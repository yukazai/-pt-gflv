// Plugin 13 - Skeleton VRCX plugin
class Plugin13 extends CustomModule {
    constructor() {
        super({
            name: "plugin_13",
            description: "Plugin 13 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 13] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin13;
