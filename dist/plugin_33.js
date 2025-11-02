// Plugin 33 - Skeleton VRCX plugin
class Plugin33 extends CustomModule {
    constructor() {
        super({
            name: "plugin_33",
            description: "Plugin 33 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 33] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin33;
