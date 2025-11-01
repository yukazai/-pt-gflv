// plugin_50
// Experimental VRCX Quest-compatible plugin
class Plugin50Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_50",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_50 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin50Plugin;
