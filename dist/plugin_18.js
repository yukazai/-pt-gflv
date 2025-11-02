// Plugin 18 - Skeleton VRCX plugin
class Plugin18 extends CustomModule {
    constructor() {
        super({
            name: "plugin_18",
            description: "Plugin 18 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 18] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin18;
