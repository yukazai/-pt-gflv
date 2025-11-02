// Plugin 03 - Skeleton VRCX plugin
class Plugin03 extends CustomModule {
    constructor() {
        super({
            name: "plugin_03",
            description: "Plugin 03 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 03] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin03;
