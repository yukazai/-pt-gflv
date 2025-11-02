// Plugin 22 - Skeleton VRCX plugin
class Plugin22 extends CustomModule {
    constructor() {
        super({
            name: "plugin_22",
            description: "Plugin 22 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 22] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin22;
