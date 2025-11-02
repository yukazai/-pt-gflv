// Plugin 19 - Skeleton VRCX plugin
class Plugin19 extends CustomModule {
    constructor() {
        super({
            name: "plugin_19",
            description: "Plugin 19 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 19] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin19;
