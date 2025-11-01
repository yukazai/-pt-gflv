// plugin_25
// Experimental VRCX Quest-compatible plugin
class Plugin25Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_25",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_25 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin25Plugin;
