// Plugin 23 - Skeleton VRCX plugin
class Plugin23 extends CustomModule {
    constructor() {
        super({
            name: "plugin_23",
            description: "Plugin 23 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 23] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin23;
