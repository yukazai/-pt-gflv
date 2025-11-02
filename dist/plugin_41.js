// Plugin 41 - Skeleton VRCX plugin
class Plugin41 extends CustomModule {
    constructor() {
        super({
            name: "plugin_41",
            description: "Plugin 41 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 41] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin41;
