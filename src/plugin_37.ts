// plugin_37
// Experimental VRCX Quest-compatible plugin
class Plugin37Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_37",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_37 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin37Plugin;
