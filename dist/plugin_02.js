// Plugin 02 - Skeleton VRCX plugin
class Plugin02 extends CustomModule {
    constructor() {
        super({
            name: "plugin_02",
            description: "Plugin 02 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 02] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin02;
