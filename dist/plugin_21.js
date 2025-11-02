// Plugin 21 - Skeleton VRCX plugin
class Plugin21 extends CustomModule {
    constructor() {
        super({
            name: "plugin_21",
            description: "Plugin 21 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 21] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin21;
