// Plugin 37 - Skeleton VRCX plugin
class Plugin37 extends CustomModule {
    constructor() {
        super({
            name: "plugin_37",
            description: "Plugin 37 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 37] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin37;
