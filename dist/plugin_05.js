// Plugin 05 - Skeleton VRCX plugin
class Plugin05 extends CustomModule {
    constructor() {
        super({
            name: "plugin_05",
            description: "Plugin 05 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 05] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin05;
