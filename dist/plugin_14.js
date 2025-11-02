// Plugin 14 - Skeleton VRCX plugin
class Plugin14 extends CustomModule {
    constructor() {
        super({
            name: "plugin_14",
            description: "Plugin 14 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 14] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin14;
