// Plugin 24 - Skeleton VRCX plugin
class Plugin24 extends CustomModule {
    constructor() {
        super({
            name: "plugin_24",
            description: "Plugin 24 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 24] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin24;
