// plugin_15
// Experimental VRCX Quest-compatible plugin
class Plugin15Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_15",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_15 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin15Plugin;
