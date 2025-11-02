// Plugin 16 - Skeleton VRCX plugin
class Plugin16 extends CustomModule {
    constructor() {
        super({
            name: "plugin_16",
            description: "Plugin 16 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 16] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin16;
