// Plugin 08 - Skeleton VRCX plugin
class Plugin08 extends CustomModule {
    constructor() {
        super({
            name: "plugin_08",
            description: "Plugin 08 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 08] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin08;
