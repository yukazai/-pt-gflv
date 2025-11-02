// Plugin 04 - Skeleton VRCX plugin
class Plugin04 extends CustomModule {
    constructor() {
        super({
            name: "plugin_04",
            description: "Plugin 04 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 04] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin04;
