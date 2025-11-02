// Plugin 01 - Skeleton VRCX plugin
class Plugin01 extends CustomModule {
    constructor() {
        super({
            name: "plugin_01",
            description: "Plugin 01 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 01] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin01;
