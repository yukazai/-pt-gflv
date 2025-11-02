// Plugin 46 - Skeleton VRCX plugin
class Plugin46 extends CustomModule {
    constructor() {
        super({
            name: "plugin_46",
            description: "Plugin 46 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 46] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin46;
