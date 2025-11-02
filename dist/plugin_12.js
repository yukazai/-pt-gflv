// Plugin 12 - Skeleton VRCX plugin
class Plugin12 extends CustomModule {
    constructor() {
        super({
            name: "plugin_12",
            description: "Plugin 12 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 12] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin12;
