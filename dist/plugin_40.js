// Plugin 40 - Skeleton VRCX plugin
class Plugin40 extends CustomModule {
    constructor() {
        super({
            name: "plugin_40",
            description: "Plugin 40 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 40] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin40;
