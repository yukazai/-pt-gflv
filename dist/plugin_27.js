// Plugin 27 - Skeleton VRCX plugin
class Plugin27 extends CustomModule {
    constructor() {
        super({
            name: "plugin_27",
            description: "Plugin 27 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 27] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin27;
