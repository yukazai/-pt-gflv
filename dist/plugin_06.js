// Plugin 06 - Skeleton VRCX plugin
class Plugin06 extends CustomModule {
    constructor() {
        super({
            name: "plugin_06",
            description: "Plugin 06 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 06] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin06;
