// Plugin 35 - Skeleton VRCX plugin
class Plugin35 extends CustomModule {
    constructor() {
        super({
            name: "plugin_35",
            description: "Plugin 35 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 35] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin35;
