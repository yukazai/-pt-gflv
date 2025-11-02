// Plugin 09 - Skeleton VRCX plugin
class Plugin09 extends CustomModule {
    constructor() {
        super({
            name: "plugin_09",
            description: "Plugin 09 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 09] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin09;
