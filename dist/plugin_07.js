// Plugin 07 - Skeleton VRCX plugin
class Plugin07 extends CustomModule {
    constructor() {
        super({
            name: "plugin_07",
            description: "Plugin 07 skeleton plugin",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Test","Skeleton"]
        });
        this.loaded = false;
    }
    async load() { this.loaded = true; console.log("[Plugin 07] loaded"); }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin07;
