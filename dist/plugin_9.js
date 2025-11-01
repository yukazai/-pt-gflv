// plugin_9
// Experimental VRCX Quest-compatible plugin
class Plugin9Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_9",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_9 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin9Plugin;
